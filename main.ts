// Entry program for the gta6-meme-x-01 bounty. Its only job is to hand the
// post's address to the gate: it copies POST.json from the repository root
// into the output folder. The meme itself lives on X, not here, so nothing
// this file writes is judged. It runs on Node 22 with the standard library
// only: no network, no clock, no files outside the repository.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Outside the grader, MAKEFUN_BOT_DIR is the checkout and MAKEFUN_OUTPUT_DIR
// is where the copied file goes; inside it they are /bot and /output.

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(repoDir, 'POST.json'), join(outDir, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json out of ${repoDir}: ${(err as Error).message}`);
  process.exit(1);
}
