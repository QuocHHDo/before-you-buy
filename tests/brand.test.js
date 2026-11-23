// Run: node tests/brand.test.js   (no dependencies)
// Every guide's brand table is rectangular, and headings are honest:
// a guide titled "Brand vs no-name" (the default) must have a no-name-style column.
const fs = require("fs");
const skip = new Set(["catalog.js", "search-index.js", "icons.js"]);
const bad = []; let n = 0;
fs.readdirSync(__dirname + "/../data").filter((f) => f.endsWith(".js") && !skip.has(f)).forEach((f) => {
  global.window = {}; delete require.cache[require.resolve("../data/" + f)];
  require("../data/" + f);
  const D = window.SITE_DATA; n++;
  D.brandRows.forEach((r) => { if (r.cells.length !== D.brandColumns.length) bad.push(f + ": row '" + r.label + "' has " + r.cells.length + " cells for " + D.brandColumns.length + " columns"); });
  if (!D.brandHeading && !D.brandColumns.some((c) => /no-name|unbranded/i.test(c))) bad.push(f + ": default heading says no-name but no column covers it");
});
console.log((n - bad.length) + " passed, " + bad.length + " failed");
if (bad.length) { console.log(bad.join("\n")); process.exit(1); }
