/**
 * Lightweight fuzzy subsequence matcher (no external deps).
 *
 * Every character of the query must appear in the target, in order
 * (case-insensitive). Returns a score (higher = better) and the
 * character indices in the target that matched, so the UI can
 * highlight them. Indices map 1:1 to the original (un-lowercased)
 * text because lowercasing preserves string length.
 */
export interface FuzzyMatch {
  score: number;
  indices: number[];
}

const isAlnum = (c: string) => /[a-z0-9]/.test(c);

/**
 * Score of matching query char at target position `pos`, given the
 * previous matched position (`-1` for the first character).
 * Rewards word-boundary starts and consecutive runs, penalizes gaps.
 */
function localScore(target: string, pos: number, prevPos: number): number {
  let score = 10;
  if (pos === 0 || !isAlnum(target[pos - 1])) score += 6; // word boundary start
  if (prevPos >= 0) {
    if (pos === prevPos + 1) score += 8; // consecutive run
    else score -= Math.min(pos - prevPos - 1, 8); // gap penalty
  }
  return score;
}

export function fuzzyMatch(query: string, target: string): FuzzyMatch | null {
  const q = query.toLowerCase();
  if (q.length === 0) return { score: 0, indices: [] };
  const t = target.toLowerCase();
  const n = q.length;
  const m = t.length;
  if (n > m) return null;

  // complete[i][j] — can query[i..] still be matched within target[j..]?
  // Precomputed so candidate selection below stays O(n * m) overall.
  const complete: boolean[][] = Array.from({ length: n + 1 }, () => new Array<boolean>(m + 1));
  for (let j = 0; j <= m; j++) complete[n][j] = true;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      complete[i][j] = complete[i][j + 1] || (t[j] === q[i] && complete[i + 1][j + 1]);
    }
  }
  if (!complete[0][0]) return null;

  const indices: number[] = [];
  let score = 0;
  let pos = 0;
  let prevPos = -1;
  for (let i = 0; i < n; i++) {
    let best = -1;
    let bestScore = Number.NEGATIVE_INFINITY;
    for (let j = pos; j < m; j++) {
      if (t[j] !== q[i] || !complete[i + 1][j + 1]) continue;
      const s = localScore(t, j, prevPos);
      if (s > bestScore) {
        bestScore = s;
        best = j;
      }
    }
    if (best === -1) return null;
    indices.push(best);
    score += bestScore;
    pos = best + 1;
    prevPos = best;
  }
  return { score, indices };
}
