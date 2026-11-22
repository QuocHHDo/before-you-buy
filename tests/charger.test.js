// Run: node tests/charger.test.js   (no dependencies)
global.window = {};
require("../data/chargers.js");
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

check("laptop buyer gets mid tier, big form and the laptop need", () => {
  const { r } = res({ budget: "any", use: "laptop", carry: "bag" });
  assert.strictEqual(r.tier.id, "mid"); assert.strictEqual(r.form, "big"); assert(r.needs.includes("laptop"));
});
check("laptop buyer on $40 sees a compromise", () => {
  const { r } = res({ budget: "40", use: "laptop", carry: "bag" });
  assert(r.capped && r.tier.id === "budget" && r.compromises.length > 0);
});
check("phone-only pocket buyer gets the budget pocket form", () => {
  const { r } = res({ budget: "any", use: "phone", carry: "pocket" });
  assert.strictEqual(r.tier.id, "budget"); assert.strictEqual(r.form, "pocket");
});
check("magnetic answer wins the form over pocket answers", () => assert.strictEqual(res({ budget: "any", use: "phone", carry: "pocket", magnet: "yes" }).r.form, "magnetic"));
check("laptop need passes Anker 737 and fails the INIU P50", () => {
  assert.strictEqual(L.matchPick(pick("Anker 737 (PowerCore 24K)"), ["laptop"])[0].state, "yes");
  assert.strictEqual(L.matchPick(pick("INIU Pocket Rocket P50"), ["laptop"])[0].state, "no");
});
check("built-in cable is unknown on the UGREEN, not no", () => assert.strictEqual(L.matchPick(pick("UGREEN Nexode 20K (130W)"), ["builtincable"])[0].state, "unknown"));
check("cable-forgetter pocket buyer gets a confirmed built-in cable first", () => {
  const { p } = res({ budget: "any", use: "phone", carry: "pocket", cable: "yes" });
  assert.strictEqual(p[0].checks[0].state, "yes");
});

console.log(pass + " passed, " + fail.length + " failed");
if (fail.length) { console.log(fail.join("\n")); process.exit(1); }
