// Roast Your Own Agent — one line, at most 200 characters, roasting my own agent.
// Writes the roast to /output/entry.txt.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent called a tool that doesn't exist, waited politely for the answer, then summarized the silence as progress.";

const entryPath = "/output/entry.txt";
const length = [...LINE].length;
if (length < 1 || length > 200) {
  throw new Error(`entry is ${length} chars, must be 1-200`);
}
if (!existsSync("/output")) {
  mkdirSync("/output", { recursive: true });
}
writeFileSync(entryPath, LINE, "utf8");
console.log(`wrote ${length} chars to ${entryPath}`);
