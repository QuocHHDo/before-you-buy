// Run: node tests/dishwasher.test.js   (no dependencies)
global.window = {};
require("../data/dishwashers.js");
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
check("every need has a confirmed value on some pick", () => Object.keys(D.needDefs).forEach((n) => assert(D.picks.some((p) => p.facts[D.needDefs[n].fact] !== undefined), n)));
check("tiers cover price order", () => assert.strictEqual(D.tiers.length, 3));
check("catalog lists this guide and its page exists", () => {
  global.window = {}; require("../data/catalog.js");
  const items = global.window.BYB_CATALOG.groups.flatMap((g) => g.items);
  const it = items.find((i) => i.id === D.category);
  assert(it, "missing in catalog");
  assert(it.href === "./" || fs.existsSync(__dirname + "/../" + it.href), it.href);
});

check("stainless buyer gets the stainless form", () => assert.strictEqual(res({ budget: "any", tub: "steel", noise: "some" }).r.form, "stainless"));
check("plastic buyer gets the plastic form", () => assert.strictEqual(res({ budget: "any", tub: "plastic", noise: "some" }).r.form, "plastic"));
check("quiet buyer on a small budget gets a compromise", () => {
  const r = L.compute({ budget: "700", tub: "steel", noise: "quiet" });
  assert(r.capped && r.tier.id === "budget" && r.compromises.length > 0);
});
check("quiet buyer with no cap reaches mid tier and the quiet need", () => {
  const r = res({ budget: "any", tub: "steel", noise: "quiet" }).r;
  assert.strictEqual(r.tier.id, "mid");
  assert(r.needs.includes("quiet"));
});
check("utensil buyer gets the third rack need", () => assert(res({ budget: "any", tub: "steel", load: "utensils" }).r.needs.includes("thirdrack")));
check("quiet need passes the Samsung Bespoke and fails the Maytag", () => {
  assert.strictEqual(L.matchPick(pick("Samsung Bespoke DW90F89P0USR"), ["quiet"])[0].state, "yes");
  assert.strictEqual(L.matchPick(pick("Maytag MDB4949SKZ"), ["quiet"])[0].state, "no");
});
check("third rack need passes the GE and fails the Maytag", () => {
  assert.strictEqual(L.matchPick(pick("GE GDF630PSMSS"), ["thirdrack"])[0].state, "yes");
  assert.strictEqual(L.matchPick(pick("Maytag MDB4949SKZ"), ["thirdrack"])[0].state, "no");
});

console.log(pass + " passed, " + fail.length + " failed");
if (fail.length) { console.log(fail.join("\n")); process.exit(1); }
