import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";

const outputDirectory = join(process.cwd(), "dist", "client");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const textExtensions = new Set([".css", ".html", ".js", ".json", ".rsc", ".txt"]);

if (!/^\/[A-Za-z0-9._~/-]+$/.test(basePath) || basePath.endsWith("/")) {
  throw new Error(
    "NEXT_PUBLIC_BASE_PATH must be a non-empty path beginning with / and without a trailing slash.",
  );
}

async function collectTextFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectTextFiles(path)));
    } else if (textExtensions.has(extname(entry.name))) {
      files.push(path);
    }
  }

  return files;
}

const files = await collectTextFiles(outputDirectory);
let changedFiles = 0;
let changedReferences = 0;

for (const file of files) {
  const source = await readFile(file, "utf8");
  let matches = 0;
  const updated = source.replace(/(?<![A-Za-z0-9/_-])\/assets\//g, () => {
    matches += 1;
    return `${basePath}/assets/`;
  });

  if (matches > 0) {
    await writeFile(file, updated);
    changedFiles += 1;
    changedReferences += matches;
  }
}

console.log(
  `Prepared GitHub Pages output: prefixed ${changedReferences} asset references across ${changedFiles} files.`,
);
