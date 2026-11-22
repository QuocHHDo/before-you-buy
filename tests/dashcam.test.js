// Run: node tests/dashcam.test.js   (no dependencies)
global.window = {};
require("../data/dashcams.js");
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

check("front-only buyer gets the front form", () => assert.strictEqual(res({ budget: "any", view: "front", parking: "no" }).r.form, "front"));
check("front-and-rear buyer gets the dual form and the rear need", () => {
  const { r } = res({ budget: "any", view: "both", parking: "no" });
  assert.strictEqual(r.form, "dual"); assert(r.needs.includes("rear"));
});
check("parking buyer gets the parking need", () => assert(res({ budget: "any", view: "front", parking: "yes" }).r.needs.includes("parking")));
check("cloud buyer gets mid tier or higher", () => assert.notStrictEqual(res({ budget: "any", view: "front", remote: "yes" }).r.tier.id, "budget"));
check("cloud buyer on a $120 budget sees a compromise", () => {
  const { r } = res({ budget: "120", view: "front", remote: "yes" });
  assert(r.capped && r.tier.id === "budget" && r.compromises.length > 0);
});
check("rear need passes the A810S and fails the Rove", () => {
  assert.strictEqual(L.matchPick(pick("70mai A810S"), ["rear"])[0].state, "yes");
  assert.strictEqual(L.matchPick(pick("Rove R2-4K"), ["rear"])[0].state, "no");
});
check("rear is unknown on the Garmin Mini 3, not no", () => assert.strictEqual(L.matchPick(pick("Garmin Dash Cam Mini 3"), ["rear"])[0].state, "unknown"));
check("cloud need passes the Nexar One", () => assert.strictEqual(L.matchPick(pick("Nexar One with rear camera"), ["cloud"])[0].state, "yes"));
check("no pick claims a rear camera and a front-only form", () => D.picks.filter((p) => p.form === "front").forEach((p) => assert.notStrictEqual(p.facts.rear, true, p.name)));

console.log(pass + " passed, " + fail.length + " failed");
if (fail.length) { console.log(fail.join("\n")); process.exit(1); }
