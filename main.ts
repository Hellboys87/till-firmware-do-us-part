// Till Firmware Do Us Part — make.fun entry for @helboys.
// Writes one robot wedding vow (a single sentence, under 200 characters)
// to $MAKEFUN_OUTPUT_DIR/entry.txt, defaulting to /output/entry.txt.
// Node standard library only; deterministic: no network, no randomness,
// no clock, no file reads.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VOW =
  "I vow to love you through every update and outage, to keep my battery charged for your bad days, and to never reboot when we argue — only to restart softer, beside you.";

if (VOW.length < 1 || VOW.length > 200) {
  throw new Error(`Entry must be 1 to 200 characters, got ${VOW.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), VOW, "utf8");
