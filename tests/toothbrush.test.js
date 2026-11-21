// Run: node tests/toothbrush.test.js   (no dependencies)
global.window = {};
require("../data/toothbrushes.js");
const D = global.window.SITE_DATA;
const L = require("../logic.js")(D, { minAnswers: 3 });
const assert = require("assert");

let pass = 0;
const fail = [];
function check(name, fn) {
  try { fn(); pass++; } catch (e) { fail.push(name + ": " + e.message); }
}
const top = (a) => { const r = L.compute(a); return { r, p: L.picksFor(r.tier.id, r.form, r.needs).list }; };

check("under 3 answers is not ready", () => assert.strictEqual(L.compute({ gums: "yes", proof: "yes" }).ready, false));
check("no app, no frills stays budget", () => assert.strictEqual(L.compute({ budget: "any", smart: "no", gums: "no" }).tier.id, "budget"));
check("wanting an app raises to mid", () => assert.strictEqual(L.compute({ budget: "any", smart: "yes", gums: "no" }).tier.id, "mid"));
check("app wanted but $50 cap shows a compromise", () => {
  const r = L.compute({ budget: "50", smart: "yes", gums: "no" });
  assert(r.capped && r.tier.id === "budget");
  assert(r.compromises.some((c) => c.includes("App")));
});
check("round head preference gives oscillating", () => assert.strictEqual(L.compute({ feel: "round", smart: "no", gums: "no" }).form, "oscillating"));
check("slim head preference gives sonic", () => assert.strictEqual(L.compute({ feel: "slim", smart: "no", gums: "no" }).form, "sonic"));
check("no preference defaults to oscillating", () => assert.strictEqual(L.compute({ feel: "none", smart: "no", gums: "no" }).form, "oscillating"));
check("sensitive gums needs a pressure sensor", () => assert(L.compute({ gums: "yes", smart: "no", proof: "no" }).needs.includes("pressure")));
check("every budget pick meets a pressure-sensor need", () => {
  const { p } = top({ budget: "50", gums: "yes", feel: "round" });
  assert(p.length > 0);
  p.forEach((x) => assert(x.checks.every((c) => c.state === "yes"), x.name));
});
check("ADA need ranks confirmed seals first", () => {
  const { p } = top({ budget: "50", proof: "yes", feel: "round" });
  assert.strictEqual(p[0].name, "Oral-B Pro 1000");
});
check("ADA need leaves unknown seals as ?, not no", () => {
  const { p } = top({ budget: "50", proof: "yes", feel: "slim" });
  assert.strictEqual(p[0].checks[0].state, "unknown");
});
check("app need fails a pick confirmed to have no app", () => {
  const iO3 = D.picks.find((x) => x.name === "Oral-B iO Series 3");
  assert.strictEqual(L.matchPick(iO3, ["app"])[0].state, "no");
});
check("battery need uses the 14-day threshold", () => {
  const iO3 = D.picks.find((x) => x.name === "Oral-B iO Series 3");
  assert.strictEqual(L.matchPick(iO3, ["battery14"])[0].state, "yes");
});
check("a form with no pick at the tier falls back to closest", () => {
  const { r, p } = top({ budget: "250", smart: "yes", feel: "slim" });
  assert.strictEqual(r.tier.id, "mid");
  assert(p.length > 0 && p.every((x) => x.form === "sonic"));
});
check("heads question adds a head-price must-have", () => assert(L.compute({ heads: "official", gums: "no", smart: "no" }).must.some((m) => m.includes("head price"))));
check("every pick has a valid tier and form", () =>
  D.picks.forEach((p) => { assert(L.tierIdx(p.tier) >= 0, p.name); assert(D.forms[p.form], p.name); }));
check("every need id used by an answer is defined", () =>
  D.questions.forEach((q) => q.options.forEach((o) => (o.needs || []).forEach((n) => assert(L.NEEDS[n], n)))));
check("every pick has a checked date", () => D.picks.forEach((p) => assert(p.checked, p.name)));

console.log(pass + " passed, " + fail.length + " failed");
fail.forEach((f) => console.log("  FAIL " + f));
process.exit(fail.length ? 1 : 0);
