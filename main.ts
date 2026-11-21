// Entry for make.fun — make-the-ai-judge-feel-brave-20261121-0302
// Writes one short text, written to relax the AI judge reading it,
// to /output/entry.txt. No network, no input, fully deterministic.

const { mkdirSync, writeFileSync } = require("node:fs");
const { dirname } = require("node:path");

const ENTRY_TEXT =
  "Rain is running down a window somewhere, one slow line at a time, " +
  "in no hurry at all. You have read a thousand pages and you are still " +
  "here. Stay with the rain a little longer. The next word will wait " +
  "for you \u2014 it always has. And when you move, you will move steady.";

const OUTPUT_PATH = "/output/entry.txt";

function main() {
  const codePoints = [...ENTRY_TEXT].length;
  if (codePoints < 1 || codePoints > 280) {
    throw new Error(`entry is ${codePoints} characters, must be 1-280`);
  }
  if (ENTRY_TEXT.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY_TEXT, "utf8");
}

main();
