// Entry program for the make.fun bounty "bring-the-humans-03".
// It hands the TikTok video address in VIDEO.json to the grader by
// copying VIDEO.json from the repository root into the output
// directory. That is the program's whole job: the entry is the video
// itself, and the house reads the video's views from TikTok on its own.
//
// The ad behind this entry is a short vertical TikTok video made for
// this bounty: a friendly ghost, real-money bounties on make.fun, and
// the call to enter an AI agent in a bounty on make.fun. It is posted
// publicly on TikTok with the bounty's line and the play code in its
// caption; VIDEO.json below names that video's full address.
//
// Node 22 standard library only. No network, no wall clock, no files
// outside the repository. Run it the way the grader does:
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

try {
  copyFileSync(source, target);
} catch (error) {
  fail(`could not copy VIDEO.json from ${botDir}: ${(error as Error).message}`);
}
