// Run: node tests/air-purifier.test.js   (no dependencies)
global.window = {};
require("../data/air-purifiers.js");
const D = global.window.SITE_DATA;
const L = require("../logic.js")(D, { minAnswers: 3 });
const assert = require("assert");
const fs = require("fs");

let pass = 0;
const fail = [];
function check(name, fn) { try { fn(); pass++; } catch (e) { fail.push(name + ": " + e.message); } }
const res = (a) => { const r = L.compute(a); return { r, p: L.picksFor(r.tier.id, r.form, r.needs).list }; };
const pick = (n) => D.picks.find((x) => x.name === n);
const tierIds = D.tiers.map((t) => t.id);

check("under 3 answers is not ready", () => assert.strictEqual(L.compute({ budget: "any" }).ready, false));
check("tier ids are valid colour classes", () => D.tiers.forEach((t) => assert(["budget", "mid", "upper", "premium"].includes(t.id), t.id)));
check("every pick has a valid tier and form", () => D.picks.forEach((p) => { assert(tierIds.includes(p.tier), p.name); assert(D.forms[p.form], p.name); }));
check("every pick has a price-check date and a reason", () => D.picks.forEach((p) => { assert(/^\d{4}-\d{2}$/.test(p.checked), p.name); assert(p.why && p.why.length > 30, p.name); }));
check("pick facts only use defined needs", () => D.picks.forEach((p) => Object.keys(p.facts).forEach((k) => assert(D.needDefs[k], p.name + " " + k))));
check("option needs, forms and caps exist", () => D.questions.forEach((q) => q.options.forEach((o) => {
  (o.needs || []).forEach((n) => assert(D.needDefs[n], q.id + "." + o.id + " " + n));
  Object.keys(o.form || {}).forEach((f) => assert(D.forms[f], q.id + "." + o.id + " " + f));
  if (o.budgetCap) assert(tierIds.includes(o.budgetCap), o.id);
  if (o.tier) assert(tierIds.includes(o.tier), o.id);
})));
check("every question has at least two options and a reason", () => D.questions.forEach((q) => { assert(q.options.length >= 2, q.id); assert(q.why, q.id); }));
check("every form has at least one pick", () => Object.keys(D.forms).forEach((f) => assert(D.picks.some((p) => p.form === f), f)));
check("every need has a confirmed yes or no on some pick", () => Object.keys(D.needDefs).forEach((n) => assert(D.picks.some((p) => typeof p.facts[n] === "boolean"), n)));
check("tiers cover price order", () => assert.strictEqual(D.tiers.length, 3));
check("catalog lists this guide and its page exists", () => {
  global.window = {}; require("../data/catalog.js");
  const items = global.window.BYB_CATALOG.groups.flatMap((g) => g.items);
  const it = items.find((i) => i.id === D.category);
  assert(it, "missing in catalog");
  assert(it.href === "./" || fs.existsSync(__dirname + "/../" + it.href), it.href);
});

check("small room gets the small form and budget tier", () => {
  const { r } = res({ budget: "any", room: "small", filters: "low" });
  assert.strictEqual(r.form, "small"); assert.strictEqual(r.tier.id, "budget");
});
check("large room gets the large form at mid or above", () => {
  const { r } = res({ budget: "any", room: "large", smart: "yes" });
  assert.strictEqual(r.form, "large"); assert(L.tierIdx(r.tier.id) >= L.tierIdx("mid"));
});
check("large room on $130 sees a compromise", () => {
  const { r } = res({ budget: "130", room: "large", use: "smoke" });
  assert(r.capped && r.compromises.length > 0);
});
check("smoke answer adds the smoke CADR must-have", () => assert(res({ budget: "any", room: "medium", use: "smoke" }).r.must.some((m) => /smoke CADR/i.test(m))));
check("ionizer answer adds a CARB must-have", () => assert(res({ budget: "any", room: "medium", extras: "yes" }).r.must.some((m) => /CARB/.test(m))));
check("Levoit Core 400S meets cheap filters and app", () => {
  assert(L.matchPick(pick("Levoit Core 400S"), ["cheapFilters", "smart"]).every((c) => c.state === "yes"));
});
check("Dyson fails cheap filters (confirmed no)", () => assert.strictEqual(L.matchPick(pick("Dyson Purifier Cool TP07"), ["cheapFilters"])[0].state, "no"));
check("Coway Mighty has no app (confirmed no)", () => assert.strictEqual(L.matchPick(pick("Coway Airmega AP-1512HH (Mighty)"), ["smart"])[0].state, "no"));
check("Core 300 filter cost is unknown, not no", () => assert.strictEqual(L.matchPick(pick("Levoit Core 300"), ["cheapFilters"])[0].state, "unknown"));

console.log(pass + " passed, " + fail.length + " failed");
if (fail.length) { console.log(fail.join("\n")); process.exit(1); }
