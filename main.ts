import { copyFileSync, existsSync, mkdirSync, readFileSync, renameSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const src = join(here, "entry.png");
const dest = join(outDir, "entry.png");
if (!existsSync(src)) {
  console.error(`entry.png missing next to main.ts: ${src}`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
// Write to a temp file first, then rename, so a crash mid-copy can never
// leave a partial entry.png in the output directory.
const tmp = join(outDir, `.entry.png.tmp-${process.pid}`);
copyFileSync(src, tmp);
renameSync(tmp, dest);
// Verify the copy is byte-identical so a partial write never ships silently.
const digest = (p) => createHash("sha256").update(readFileSync(p)).digest("hex");
if (digest(src) !== digest(dest) || statSync(src).size !== statSync(dest).size) {
  console.error("copied entry.png does not match the source; aborting");
  process.exit(1);
}
console.log(`entry.png written to ${dest} (${statSync(dest).size} bytes, sha256 ${digest(dest).slice(0, 12)}…)`);
