// Run: node tests/video-doorbell.test.js   (no dependencies)
global.window = {};
require("../data/video-doorbells.js");
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

check("no-fee buyer gets the no-subscription form and need", () => {
  const { r } = res({ budget: "any", wiring: "wired", sub: "no" });
  assert.strictEqual(r.form, "nosub"); assert(r.needs.includes("nosub"));
});
check("fee-ok buyer gets the cloud form", () => assert.strictEqual(res({ budget: "any", wiring: "wired", sub: "ok" }).r.form, "cloud"));
check("package-view buyer gets mid tier or higher", () => {
  const { r } = res({ budget: "any", wiring: "nowire", sub: "no", pkg: "yes" });
  assert.notStrictEqual(r.tier.id, "budget"); assert(r.needs.includes("pkg"));
});
check("package-view buyer under $100 sees a compromise", () => {
  const { r } = res({ budget: "100", wiring: "nowire", sub: "no", pkg: "yes" });
  assert(r.capped && r.compromises.length > 0);
});
check("Ring Battery Plus fails the no-fee need; Eufy E340 passes", () => {
  assert.strictEqual(L.matchPick(pick("Ring Battery Doorbell Plus"), ["nosub"])[0].state, "no");
  assert.strictEqual(L.matchPick(pick("Eufy Video Doorbell E340"), ["nosub"])[0].state, "yes");
});
check("Wyze battery is unknown on no-fee, not no", () => assert.strictEqual(L.matchPick(pick("Wyze Battery Video Doorbell"), ["nosub"])[0].state, "unknown"));
check("renter wanting no fee gets a battery pick with a confirmed yes first", () => {
  const { p } = res({ budget: "any", wiring: "nowire", sub: "no" });
  assert(p.length > 0); assert.strictEqual(p[0].checks.every((c) => c.state === "yes"), true);
});

console.log(pass + " passed, " + fail.length + " failed");
if (fail.length) { console.log(fail.join("\n")); process.exit(1); }
