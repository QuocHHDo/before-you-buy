// Run: node tests/prompt.test.js   (no dependencies)
// Checks that every guide produces a complete, readable prompt for each mode.
const assert = require("assert");
const fs = require("fs");
const path = require("path");
global.window = {};
const dataDir = path.join(__dirname, "..", "data");
const files = fs.readdirSync(dataDir).filter((f) => f.endsWith(".js") && !["catalog.js", "search-index.js"].includes(f));

let pass = 0;
const fail = [];
function check(name, fn) { try { fn(); pass++; } catch (e) { fail.push(name + ": " + e.message); } }

check("there are data files to test", () => assert(files.length >= 20, String(files.length)));

for (const f of files) {
  global.window = {};
  require(path.join(dataDir, f));
  const D = global.window.SITE_DATA;
  const L = require("../logic.js")(D, { minAnswers: 3 });
  const P = require("../prompt.js")(D, L);
  // first option of every question, and the last option of every question
  const firsts = Object.fromEntries(D.questions.map((q) => [q.id, q.options[0].id]));
  const lasts = Object.fromEntries(D.questions.map((q) => [q.id, q.options[q.options.length - 1].id]));
  for (const [label, answers] of [["first", firsts], ["last", lasts]]) {
    const r = L.compute(answers);
    for (const mode of ["find", "check", "compare"]) {
      check(f + " " + label + " " + mode + " prompt is complete", () => {
        const t = P.build(answers, mode, ["Model A", "Model B"]);
        assert(t.length > 400, "too short");
        assert(!/undefined|\[object|NaN|null/.test(t), "stray value in prompt");
        assert(t.includes(r.tier.name) && t.includes(r.tier.range), "tier missing");
        assert(t.includes(D.forms[r.form]), "form missing");
        r.needs.forEach((id) => assert(t.includes(L.NEEDS[id].label), "need missing " + id));
        D.questions.forEach((q) => assert(t.includes(q.options.find((o) => o.id === answers[q.id]).label), "answer missing " + q.id));
        assert(/unknown/.test(t) && /date you checked/.test(t), "rules missing");
        if (mode === "check") assert(t.includes("Model A"), "name missing");
        if (mode === "compare") assert(t.includes("Model A") && t.includes("Model B"), "names missing");
      });
    }
  }
  check(f + " noun reads naturally", () => {
    const n = P.noun();
    assert(n.length >= 2 && !/^before/i.test(n) && !/^an?\s/i.test(n), n);
  });
  check(f + " not-ready answers give an empty prompt", () => assert.strictEqual(P.build({}, "find", []), ""));
  check(f + " placeholders appear when no name is typed", () => assert(/\[product name or model number\]/.test(P.build(firsts, "check", ["", ""]))));
}

check("every product page loads prompt.js after logic.js", () => {
  const pages = fs.readdirSync(path.join(__dirname, "..")).filter((f) => f.endsWith(".html") && f !== "guides.html");
  pages.forEach((p) => {
    const t = fs.readFileSync(path.join(__dirname, "..", p), "utf8");
    assert(t.indexOf("logic.js") > -1 && t.indexOf("prompt.js") > t.indexOf("logic.js") && t.indexOf("prompt.js") < t.indexOf("app.js"), p);
  });
});

console.log(pass + " passed, " + fail.length + " failed");
if (fail.length) { console.log(fail.join("\n")); process.exit(1); }
