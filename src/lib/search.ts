import type { LlamaParam } from "@/data/params";
import { fuzzyMatch } from "./fuzzy";

export interface FieldMatch {
  score: number;
  indices: number[];
}

export interface AliasMatch {
  alias: string;
  match: FieldMatch;
}

export interface ParamMatch {
  param: LlamaParam;
  score: number;
  primary: FieldMatch | null;
  aliases: AliasMatch[];
  id: FieldMatch | null;
  env: FieldMatch | null;
  description: FieldMatch | null;
}

export interface SearchResult {
  matches: ParamMatch[];
  /** The query actually used. May be a prefix of the original query when
   *  a prefix fallback was needed (e.g. "quantization" → "quantiz"). */
  query: string;
  /** True when the full query matched nothing and a prefix was used. */
  partial: boolean;
}

/**
 * Relative importance of each searchable field.
 * Exact flag matches dominate; description matches rank last.
 */
const WEIGHTS = {
  primary: 4,
  alias: 4,
  id: 2,
  env: 2,
  description: 1,
} as const;

/** Bonus when the query exactly equals a flag name, alias or id
 *  (leading dashes ignored, so "ngl" == "-ngl" == "--ngl"). */
const EXACT_BONUS = 1000;

/** Prefix fallback: stop trimming below this many characters. */
const MIN_PREFIX_LEN = 3;

/**
 * Canonical form for exact-match comparisons: drop the leading dash run
 * and all dashes/underscores, lowercase. Lets "gpu layers" / "gpu_layers"
 * / "gpulayers" all match "--gpu-layers" exactly.
 */
const canonical = (s: string) =>
  s.replace(/^--?/, "").replace(/[-_ ]/g, "").toLowerCase();

function scoreParam(
  param: LlamaParam,
  query: string,
  lower: string
): ParamMatch | null {
  const primary = fuzzyMatch(query, param.primary);
  const aliases: AliasMatch[] = [];
  let bestAlias: FieldMatch | null = null;
  for (const alias of param.aliases) {
    const m = fuzzyMatch(query, alias);
    if (m) {
      aliases.push({ alias, match: m });
      if (!bestAlias || m.score > bestAlias.score) bestAlias = m;
    }
  }
  const id = fuzzyMatch(query, param.id);
  const env = param.env ? fuzzyMatch(query, param.env) : null;
  const description = fuzzyMatch(query, param.description);

  if (!primary && !bestAlias && !id && !env && !description) return null;

  let score = 0;
  if (primary) score += WEIGHTS.primary * primary.score;
  if (bestAlias) score += WEIGHTS.alias * bestAlias.score;
  // Env var names are derived from the id (LLAMA_ARG_<ID>), so scoring
  // both separately double-counts the same signal — take the better one.
  const meta = Math.max(
    id ? WEIGHTS.id * id.score : 0,
    env ? WEIGHTS.env * env.score : 0
  );
  score += meta;
  if (description) score += WEIGHTS.description * description.score;

  // Exact-match bonus: query equals a flag name, alias or id
  // (dashes, underscores and spaces ignored on both sides).
  if (
    canonical(param.primary) === lower ||
    canonical(param.id) === lower ||
    param.aliases.some((a) => canonical(a) === lower)
  ) {
    score += EXACT_BONUS;
  }

  return { param, score, primary, aliases, id, env, description };
}

/**
 * Search params across flag names, aliases, ids, env vars and
 * descriptions. Returns matches ranked best-first.
 *
 * With an empty query this simply returns the (optionally
 * section-filtered) params in their original order with null field
 * matches — i.e. the "browse everything" mode.
 *
 * If the full query matches nothing, progressively shorter prefixes
 * are tried (e.g. "quantization" → "quantiz") so that long words still
 * surface their shorter flag names.
 */
export function searchParams(
  query: string,
  params: LlamaParam[],
  section: string | "all"
): SearchResult {
  // Whitespace isn't a searchable character: "gpu layers" should match
  // "--gpu-layers". Collapse it away before matching.
  const trimmed = query.trim().replace(/\s+/g, "");

  if (trimmed.length === 0) {
    return {
      matches: params
        .filter((p) => section === "all" || p.section === section)
        .map((param) => ({
          param,
          score: 0,
          primary: null,
          aliases: [],
          id: null,
          env: null,
          description: null,
        })),
      query: "",
      partial: false,
    };
  }

  const lower = trimmed.toLowerCase();
  let active = trimmed;
  let matches: ParamMatch[] = [];
  while (true) {
    matches = params
      .filter((p) => section === "all" || p.section === section)
      .map((p) => scoreParam(p, active, lower))
      .filter((m): m is ParamMatch => m !== null);
    if (matches.length > 0 || active.length <= MIN_PREFIX_LEN) break;
    active = active.slice(0, -1);
  }

  matches.sort(
    (a, b) => b.score - a.score || a.param.id.localeCompare(b.param.id)
  );

  return {
    matches,
    query: active,
    partial: active.length < trimmed.length,
  };
}
