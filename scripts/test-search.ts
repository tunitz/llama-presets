import { searchParams } from "../src/lib/search";
import { fuzzyMatch } from "../src/lib/fuzzy";
import { params } from "../src/data/params";

let failures = 0;

function check(name: string, cond: boolean, detail?: string) {
  if (cond) {
    console.log(`PASS  ${name}`);
  } else {
    failures++;
    console.log(`FAIL  ${name}${detail ? "  — " + detail : ""}`);
  }
}

function show(query: string, top = 4) {
  const r = searchParams(query, params, "all");
  const line = r.matches
    .slice(0, top)
    .map((m) => `${m.param.primary} (${m.score})`)
    .join(", ");
  console.log(
    `  ${JSON.stringify(query)}${r.partial ? ` [prefix ${JSON.stringify(r.query)}]` : ""}: ${line}`,
  );
  return r;
}

// ---- ranking checks ---------------------------------------------------------

{
  const r = show("gpu layers");
  check('search("gpu layers") #1 is --gpu-layers', r.matches[0]?.param.id === "gpu-layers");
}

{
  const r = show("context");
  const top4 = r.matches.slice(0, 4).map((m) => m.param.id);
  check(
    'search("context") top 4 include a context-* flag and --ctx-size',
    top4.some((id) => id.startsWith("context")) && top4.includes("ctx-size"),
    top4.join(", "),
  );
}

{
  const r = show("temp");
  check(
    'search("temp") #1 is --temp',
    r.matches[0]?.param.id === "temp",
    `got ${r.matches[0]?.param.primary}`,
  );
}

{
  const r = show("threads");
  check(
    'search("threads") #1 is --threads',
    r.matches[0]?.param.id === "threads",
    `got ${r.matches[0]?.param.primary}`,
  );
}

{
  const r = show("flash attn");
  check(
    'search("flash attn") #1 is --flash-attn (whitespace-insensitive)',
    r.matches[0]?.param.id === "flash-attn",
    `got ${r.matches[0]?.param.primary} (${r.matches[0]?.score})`,
  );
}

{
  const r = show("quantization");
  check(
    'search("quantization") falls back to a shorter prefix and still matches',
    r.partial && r.matches.length > 0,
    `partial=${r.partial} query=${r.query} matches=${r.matches.length}`,
  );
}

{
  const r = show("batch");
  const top3 = r.matches.slice(0, 3).map((m) => m.param.id);
  check(
    'search("batch") top 3 include a batching/batch-size flag',
    top3.some((id) => id.includes("batch")),
    top3.join(", "),
  );
}

{
  const r = show("zzzqqqxxx-not-a-flag-12345");
  check('search("zzzqqqxxx-not-a-flag-12345") returns no matches', r.matches.length === 0,
    `got ${r.matches.length}`);
}

{
  const r = searchParams("   ", params, "all");
  check("blank query returns all 255 params", r.matches.length === params.length, String(r.matches.length));
}

{
  const r = searchParams("temp", params, "server");
  check('section filter: search("temp", section="server") keeps only server params',
    r.matches.length > 0 && r.matches.every((m) => m.param.section === "server"));
}

// ---- fuzzyMatch unit checks -------------------------------------------------
// Scores hand-computed from the matcher rules:
// base 10/char, +6 word-boundary start, +8 consecutive, -min(gap,8).

{
  const m = fuzzyMatch("ngl", "-ngl");
  check('fuzzyMatch("ngl", "-ngl") scores 52', m?.score === 52, String(m?.score));
  check('fuzzyMatch("ngl", "-ngl") indices are [1,2,3]',
    m !== null && JSON.stringify(m.indices) === "[1,2,3]");
}

check('fuzzyMatch("ngl", "gpu-layers") is null (no "n")', fuzzyMatch("ngl", "gpu-layers") === null);
check('fuzzyMatch("zzz", "abc") is null', fuzzyMatch("zzz", "abc") === null);
check('fuzzyMatch("abcd", "abc") is null (query longer)', fuzzyMatch("abcd", "abc") === null);
check('fuzzyMatch("abc", "abc") scores 52', fuzzyMatch("abc", "abc")?.score === 52,
  String(fuzzyMatch("abc", "abc")?.score));
check('fuzzyMatch("ABC", "abc") is case-insensitive (52)', fuzzyMatch("ABC", "abc")?.score === 52,
  String(fuzzyMatch("ABC", "abc")?.score));
check('fuzzyMatch("ab", "ab") scores 34', fuzzyMatch("ab", "ab")?.score === 34,
  String(fuzzyMatch("ab", "ab")?.score));
{
  const run = fuzzyMatch("ab", "ab");
  const gapped = fuzzyMatch("ab", "a-b");
  check("consecutive run scores above gapped match",
    run !== null && gapped !== null && run.score > gapped.score,
    `run=${run?.score} gapped=${gapped?.score}`);
}
{
  const e = fuzzyMatch("", "anything");
  check('fuzzyMatch("", ...) returns score 0 with no indices',
    e !== null && e.score === 0 && e.indices.length === 0);
}

console.log(failures === 0 ? "\nAll tests passed." : `\n${failures} test(s) failed.`);
if (failures > 0) process.exit(1);
