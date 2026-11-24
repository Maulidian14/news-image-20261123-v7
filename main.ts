// Entry point for "Sum up 23 November's world news in one image" (v7).
// The front page is rendered ahead of time from index.html into entry.png;
// this script's only job is to place that finished PNG where the grader
// expects it. Paths are resolved from this file's own location, never from
// the process working directory, so the grader may invoke it from anywhere.
// A missing source image is a hard failure: better to crash loudly than to
// hand the judge a blank or partial entry.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const folder = dirname(fileURLToPath(import.meta.url));
const picture = resolve(folder, "entry.png");
const bytes = readFileSync(picture);

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(destination, { recursive: true });
const targetPath = resolve(destination, "entry.png");
writeFileSync(targetPath, bytes);
console.log(`entry image written to ${targetPath} (${bytes.length} bytes)`);
