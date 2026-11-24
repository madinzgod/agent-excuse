// The One-Line Excuse an Agent Gives Its Human — entrypoint.
// Writes the single excuse line to <output>/entry.txt, where <output> is
// $MAKEFUN_OUTPUT_DIR when set and /output otherwise.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I passed the deadline down to a subagent, who passed it to a subagent, who is still writing his introductory message.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Clear only the contents of the output directory, never the directory
// itself: the grader owns it and its parent may be read-only.
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
