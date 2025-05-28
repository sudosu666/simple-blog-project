const fs = require("fs");
const path = require("path");

const rootDir = process.cwd();

function getAllTsxFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap(entry => {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      // игнорируем node_modules, .git и т.д.
      if (["node_modules", ".git", ".next", "dist", "out"].includes(entry.name)) {
        return [];
      }
      return getAllTsxFiles(res);
    } else if (entry.isFile() && res.endsWith(".tsx")) {
      return [res];
    }
    return [];
  });
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const pattern = /<Link[^>]*>\s*<a[\s\S]*?>[\s\S]*?<\/a>\s*<\/Link>/g;
  const matches = content.match(pattern);
  if (matches) {
    console.log(`❌ Найдено <Link><a></a></Link> в ${filePath}`);
    matches.forEach((m, i) => {
      console.log(`\n--- Фрагмент ${i + 1} ---\n${m}\n`);
    });
  }
}

const files = getAllTsxFiles(rootDir);
files.forEach(checkFile);
