// Run: node tests/search.test.js   (no dependencies)
const fs = require("fs");
const assert = require("assert");
const { build, render } = require("../tools/build-search-index.js");
let pass = 0; const fail = [];
function check(name, fn) { try { fn(); pass++; } catch (e) { fail.push(name + ": " + e.message); } }
const entries = build();
check("committed search index matches the guide data (run tools/build-search-index.js)", () =>
  assert.strictEqual(fs.readFileSync(__dirname + "/../data/search-index.js", "utf8"), render(entries)));
check("every guide in the catalog has traps, questions and picks in the index", () => {
  global.window = {}; delete require.cache[require.resolve("../data/catalog.js")]; require("../data/catalog.js");
  global.window.BYB_CATALOG.groups.flatMap((g) => g.items).forEach((it) =>
    ["trap", "question", "pick"].forEach((k) => assert(entries.some((e) => e.g === it.id && e.k === k), it.id + " " + k)));
});
check("entries have text and a link", () => entries.forEach((e) => { assert(e.h && e.x && e.u, JSON.stringify(e).slice(0, 80)); }));
check("a known phrase is findable", () => assert(entries.some((e) => /monthly/i.test(e.h + e.x) && e.g === "doorbells")));
console.log(pass + " passed, " + fail.length + " failed");
if (fail.length) { console.log(fail.join("\n")); process.exit(1); }
