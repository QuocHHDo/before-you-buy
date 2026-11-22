// Run: node tests/ssd.test.js   (no dependencies)
global.window = {};
require("../data/ssds.js");
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

check("PS5 buyer gets the internal form and the PS5 need", () => {
  const { r } = res({ budget: "any", where: "ps5", size: "2" });
  assert.strictEqual(r.form, "internal"); assert(r.needs.includes("ps5"));
});
check("portable buyer gets the external form", () => assert.strictEqual(res({ budget: "any", where: "portable", size: "2" }).r.form, "external"));
check("tied form votes fall back to the default form", () => assert.strictEqual(res({ budget: "any", where: "pc", rough: "yes" }).r.form, "internal"));
check("4TB buyer gets upper tier; on a $320 budget sees a compromise", () => {
  assert.strictEqual(res({ budget: "any", where: "pc", size: "4" }).r.tier.id, "upper");
  const { r } = res({ budget: "320", where: "pc", size: "4" });
  assert(r.capped && r.tier.id === "budget" && r.compromises.length > 0);
});
check("video editor gets mid tier or higher", () => assert.notStrictEqual(res({ budget: "any", where: "pc", size: "2", work: "edit" }).r.tier.id, "budget"));
check("PS5 need passes SN850X 2TB and Lexar NM790", () => {
  assert.strictEqual(L.matchPick(pick("WD Black SN850X 2TB (internal)"), ["ps5"])[0].state, "yes");
  assert.strictEqual(L.matchPick(pick("Lexar NM790 with heatsink (internal)"), ["ps5"])[0].state, "yes");
});
check("PS5 need is unknown on the Crucial P310, not no", () => assert.strictEqual(L.matchPick(pick("Crucial P310 2TB (internal)"), ["ps5"])[0].state, "unknown"));
check("rugged need fails the T9 and passes the T7 Shield", () => {
  assert.strictEqual(L.matchPick(pick("Samsung T9 Portable SSD (external)"), ["rugged"])[0].state, "no");
  assert.strictEqual(L.matchPick(pick("Samsung T7 Shield (external)"), ["rugged"])[0].state, "yes");
});

console.log(pass + " passed, " + fail.length + " failed");
if (fail.length) { console.log(fail.join("\n")); process.exit(1); }
