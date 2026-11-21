// Run: node tests/mouse.test.js   (no dependencies)
global.window = {};
require("../data/mice.js");
const D = global.window.SITE_DATA;
const L = require("../logic.js")(D, { minAnswers: 3 });
const assert = require("assert");

let pass = 0;
const fail = [];
function check(name, fn) { try { fn(); pass++; } catch (e) { fail.push(name + ": " + e.message); } }
const top = (a) => { const r = L.compute(a); return { r, p: L.picksFor(r.tier.id, r.form, r.needs).list }; };
const pick = (n) => D.picks.find((x) => x.name === n);

check("under 3 answers is not ready", () => assert.strictEqual(L.compute({ use: "office" }).ready, false));
check("office user with no extras stays budget", () => assert.strictEqual(L.compute({ budget: "any", use: "office", comfort: "no" }).tier.id, "budget"));
check("office user defaults to office form", () => assert.strictEqual(L.compute({ use: "office", comfort: "no", noise: "no" }).form, "office"));
check("power user needs at least mid", () => assert.strictEqual(L.compute({ budget: "any", use: "power", comfort: "no" }).tier.id, "mid"));
check("power user on $50 sees a compromise", () => {
  const r = L.compute({ budget: "50", use: "power", comfort: "no" });
  assert(r.capped && r.tier.id === "budget" && r.compromises.length > 0);
});
check("aching wrist points to ergonomic form", () => assert.strictEqual(L.compute({ use: "office", comfort: "yes", noise: "no" }).form, "ergonomic"));
check("aching wrist adds a sizing must-have", () => assert(L.compute({ use: "office", comfort: "yes", noise: "no" }).must.some((m) => /size/i.test(m))));
check("casual gamer gets gaming form at budget", () => {
  const r = L.compute({ budget: "any", use: "casual", comfort: "no" });
  assert.strictEqual(r.form, "gaming");
  assert.strictEqual(r.tier.id, "budget");
});
check("casual gamer's top pick is the G305", () => assert.strictEqual(top({ budget: "any", use: "casual", comfort: "no" }).p[0].name, "Logitech G305 Lightspeed"));
check("competitive player lands at upper with a weight need", () => {
  const r = L.compute({ budget: "any", use: "comp", comfort: "no" });
  assert.strictEqual(r.tier.id, "upper");
  assert(r.needs.includes("light65"));
});
check("competitive picks pass the under-65g check", () => {
  const { p } = top({ budget: "any", use: "comp", comfort: "no" });
  assert(p.length > 0);
  p.forEach((x) => assert(x.checks.every((c) => c.state === "yes"), x.name));
});
check("competitive player on $50 is capped at budget", () => {
  const r = L.compute({ budget: "50", use: "comp", comfort: "no" });
  assert(r.capped && r.tier.id === "budget");
});
check("MX Master 3S fails the under-65g check", () => assert.strictEqual(L.matchPick(pick("Logitech MX Master 3S"), ["light65"])[0].state, "no"));
check("MX Master 3S passes multi-device and quiet", () =>
  assert(L.matchPick(pick("Logitech MX Master 3S"), ["multidevice", "quiet"]).every((c) => c.state === "yes")));
check("left-handed need fails the DeathAdder and the M575S", () => {
  assert.strictEqual(L.matchPick(pick("Razer DeathAdder V4 Pro"), ["leftHanded"])[0].state, "no");
  assert.strictEqual(L.matchPick(pick("Logitech ERGO M575S"), ["leftHanded"])[0].state, "no");
});
check("left-handed need passes the Lift and Viper V3 Pro", () => {
  assert.strictEqual(L.matchPick(pick("Logitech Lift"), ["leftHanded"])[0].state, "yes");
  assert.strictEqual(L.matchPick(pick("Razer Viper V3 Pro"), ["leftHanded"])[0].state, "yes");
});
check("unconfirmed quiet clicks show as unknown, not no", () => assert.strictEqual(L.matchPick(pick("Keychron M6 8K"), ["quiet"])[0].state, "unknown"));
check("multi-device need adds bluetooth and multidevice", () => {
  const n = L.compute({ use: "office", devices: "yes", comfort: "no" }).needs;
  assert(n.includes("bluetooth") && n.includes("multidevice"));
});
check("every pick has a valid tier, form and checked date", () =>
  D.picks.forEach((p) => { assert(L.tierIdx(p.tier) >= 0, p.name); assert(D.forms[p.form], p.name); assert(p.checked, p.name); }));
check("every need id used by an answer is defined", () =>
  D.questions.forEach((q) => q.options.forEach((o) => (o.needs || []).forEach((n) => assert(L.NEEDS[n], n)))));

console.log(pass + " passed, " + fail.length + " failed");
fail.forEach((f) => console.log("  FAIL " + f));
process.exit(fail.length ? 1 : 0);
