// Describe Your Ex in One Word — deterministic one-word entry.
// The text is fixed in this file: no input, no randomness, no network,
// so every run writes the exact same bytes to /output/entry.txt.
// The word: an ex as a subscription — auto-renewing, hard to cancel,
// and still charging you every month after you thought you were done.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Subscription";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
