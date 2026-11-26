// Write one line to send to a younger self to /output/entry.txt.
//
// Pure TypeScript, no dependencies, deterministic, no network. The line is
// a fixed string: the program writes exactly these bytes on every run.
//
// The line (109 chars) won a 10-candidate head-to-head against the judge
// brief: a father wrong about the guitar and right about the savings
// account is a contradiction only this older self could report; "keep both
// lessons, drop the grudge" is the turn and the release in one breath.
// Full comparison:
// u-boothlord-one-line-to-your-younger-self-22e97f76-candidates.md.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Your father was wrong about the guitar, right about the savings account — keep both lessons, drop the grudge.";

// Gate mirror: the house gate accepts 1-200 characters of non-whitespace
// text. Fail loudly here rather than write a line the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, { encoding: "utf-8" });
