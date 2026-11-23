import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My robot vacuum memorised every chair leg in the house, yet swallows the same charging cable every morning like a stranger.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
