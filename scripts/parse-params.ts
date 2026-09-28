/**
 * Parses the auto-generated parameter tables out of the llama.cpp server
 * README (between the HELP_START / HELP_END markers) and emits
 * src/data/params.ts for the docs site.
 *
 * Run with: bun run scripts/parse-params.ts
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dir, "..");
const readmePath = join(root, "llama-server-README.md");
const outPath = join(root, "src", "data", "params.ts");

const raw = readFileSync(readmePath, "utf8");

const helpStart = raw.indexOf("<!-- HELP_START -->");
const helpEnd = raw.indexOf("<!-- HELP_END -->");
if (helpStart === -1 || helpEnd === -1) {
  throw new Error("HELP_START / HELP_END markers not found in README");
}
const help = raw.slice(helpStart, helpEnd);

interface SectionDef {
  id: string;
  title: string;
}

const SECTIONS: SectionDef[] = [
  { id: "common", title: "Common params" },
  { id: "sampling", title: "Sampling params" },
  { id: "server", title: "Server-specific params" },
];

interface Param {
  id: string;
  primary: string;
  aliases: string[];
  arg?: string;
  description: string;
  extra: string[];
  default?: string;
  env?: string;
  deprecated: boolean;
  section: string;
}

/** Split a markdown table row into cells, respecting escaped pipes (\|). */
function splitRow(line: string): string[] {
  const protected_ = line.replace(/\\\|/g, "\u0000");
  const cells = protected_
    .split("|")
    .map((c) => c.replace(/\u0000/g, "|").trim());
  // leading/trailing empty cells from the row delimiters
  if (cells.length && cells[0] === "") cells.shift();
  if (cells.length && cells[cells.length - 1] === "") cells.pop();
  return cells;
}

/** Strip markdown links like [(more info)](https://...) leaving nothing. */
function stripLinks(text: string): string {
  return text.replace(/\[([^\]]*)\]\(([^)]*)\)/g, "").trim();
}

const params: Param[] = [];

for (const section of SECTIONS) {
  const idx = help.indexOf(`### ${section.title}`);
  if (idx === -1) throw new Error(`Section "${section.title}" not found`);
  const nextSectionIdx = help.indexOf("### ", idx + 3);
  const sectionText = help.slice(
    idx,
    nextSectionIdx === -1 ? help.length : nextSectionIdx,
  );

  for (const line of sectionText.split("\n")) {
    if (!line.startsWith("|")) continue;
    const cells = splitRow(line);
    if (cells.length < 2) continue;
    const [flagCell, descCell] = cells;
    // skip header row and separator row
    if (/^[-\s]+$/.test(flagCell.replace(/`/g, "")) || flagCell === "Argument")
      continue;

    const flagsRaw = flagCell.replace(/`/g, "").trim();
    const tokens = flagsRaw.split(/\s+/).filter(Boolean);
    // flag tokens start with `-` and may carry a trailing comma (`-h,`)
    const flags = tokens
      .filter((t) => t.startsWith("-"))
      .map((t) => t.replace(/,$/g, ""));
    if (flags.length === 0) continue;
    const arg = tokens
      .filter((t) => !t.startsWith("-"))
      .join(" ");

    const lines = descCell
      .split("<br/>")
      .map((l) => stripLinks(l.trim()))
      .filter((l) => l.length > 0);

    let env: string | undefined;
    let dflt: string | undefined;
    const extra: string[] = [];
    let description = "";

    for (const [i, line] of lines.entries()) {
      const envMatch = line.match(/^\(env: ([A-Z0-9_]+)\)$/);
      if (envMatch) {
        env = envMatch[1];
        continue;
      }
      const dfltLine = line.match(/^\(default: (.*?)\)$/);
      if (dfltLine) {
        dflt = dfltLine[1].trim();
        continue;
      }
      if (i === 0) {
        description = line;
        const m = line.match(/\(default: ([^)]*)\)/);
        if (m) {
          dflt = m[1].trim();
          description = line.replace(/\s*\(default: [^)]*\)/, "").trim();
        }
      } else if (line !== "default") {
        extra.push(line);
      }
    }

    if (!description && extra.length > 0) {
      description = extra.shift() as string;
    }

    const deprecated =
      /\bDEPRECATED\b/.test(descCell) || /has been removed/.test(descCell);

    const primary = flags.find((f) => f.startsWith("--")) ?? flags[0];
    const aliases = flags.filter((f) => f !== primary);

    params.push({
      id: primary.replace(/^--?/, "").replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, ""),
      primary,
      aliases,
      arg: arg || undefined,
      description,
      extra,
      default: dflt,
      env,
      deprecated,
      section: section.id,
    });
  }
}

const sections = SECTIONS.map((s) => ({
  id: s.id,
  title: s.title,
  count: params.filter((p) => p.section === s.id).length,
}));

const banner = [
  "// AUTO-GENERATED from llama-server-README.md by scripts/parse-params.ts",
  "// Do not edit by hand. Re-run: bun run parse",
  "",
].join("\n");

const file = `${banner}
export interface LlamaParam {
  id: string;
  primary: string;
  aliases: string[];
  arg?: string;
  description: string;
  extra: string[];
  default?: string;
  env?: string;
  deprecated: boolean;
  section: string;
}

export interface ParamSection {
  id: string;
  title: string;
  count: number;
}

export const sections: ParamSection[] = ${JSON.stringify(sections, null, 2)};

export const params: LlamaParam[] = ${JSON.stringify(params, null, 2)};
`;

mkdirSync(join(root, "src", "data"), { recursive: true });
writeFileSync(outPath, file);
console.log(
  `Wrote ${outPath} — ${params.length} params ` +
    `(${sections.map((s) => `${s.title}: ${s.count}`).join(", ")})`,
);
