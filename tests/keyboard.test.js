// Run: node tests/keyboard.test.js   (no dependencies)
global.window = {};
require("../data/keyboards.js");
const D = global.window.SITE_DATA;
const L = require("../logic.js")(D, { minAnswers: 3 });
const assert = require("assert");

let pass = 0;
const fail = [];
function check(name, fn) { try { fn(); pass++; } catch (e) { fail.push(name + ": " + e.message); } }
const top = (a) => { const r = L.compute(a); return { r, p: L.picksFor(r.tier.id, r.form, r.needs).list }; };

check("under 3 answers is not ready", () => assert.strictEqual(L.compute({ use: "work" }).ready, false));
check("office typist on $100 gets budget", () => assert.strictEqual(L.compute({ budget: "100", use: "work", noise: "no" }).tier.id, "budget"));
check("casual gamer defaults to mechanical", () => assert.strictEqual(L.compute({ budget: "any", use: "casual", wireless: "wired" }).form, "mechanical"));
check("competitive player gets magnetic at mid or above", () => {
  const r = L.compute({ budget: "any", use: "comp", wireless: "wired" });
  assert.strictEqual(r.form, "magnetic");
  assert(L.tierIdx(r.tier.id) >= L.tierIdx("mid"));
  assert(r.needs.includes("rapidTrigger"));
});
check("competitive player on $100 sees a compromise", () => {
  const r = L.compute({ budget: "100", use: "comp", wireless: "wired" });
  assert(r.capped && r.tier.id === "budget" && r.compromises.length > 0);
});
check("shared space leans low-profile when typing", () => assert.strictEqual(L.compute({ use: "work", noise: "yes", wireless: "wired" }).form, "lowprofile"));
check("shared space adds a switch must-have", () => assert(L.compute({ use: "work", noise: "yes", wireless: "wired" }).must.some((m) => /clicky/i.test(m))));
check("multi-device asks for wireless and 3 devices", () => {
  const n = L.compute({ use: "work", wireless: "multi", noise: "no" }).needs;
  assert(n.includes("wireless") && n.includes("multidevice"));
});
check("MX Keys S meets the multi-device need", () => {
  const p = D.picks.find((x) => x.name === "Logitech MX Keys S");
  assert(L.matchPick(p, ["wireless", "multidevice"]).every((c) => c.state === "yes"));
});
check("wired V1 fails a wireless need (confirmed no)", () => {
  const p = D.picks.find((x) => x.name === "Keychron V1");
  assert.strictEqual(L.matchPick(p, ["wireless"])[0].state, "no");
});
check("C3 Pro wireless is unknown, not no", () => {
  const p = D.picks.find((x) => x.name === "Keychron C3 Pro");
  assert.strictEqual(L.matchPick(p, ["wireless"])[0].state, "unknown");
});
check("number pad need passes V5 Max and fails V1", () => {
  const a = D.picks.find((x) => x.name === "Keychron V5 Max");
  const b = D.picks.find((x) => x.name === "Keychron V1");
  assert.strictEqual(L.matchPick(a, ["numpad"])[0].state, "yes");
  assert.strictEqual(L.matchPick(b, ["numpad"])[0].state, "no");
});
check("wireless mechanical picks rank confirmed wireless first at mid", () => {
  const { p } = top({ budget: "200", use: "mixed", wireless: "wireless" });
  assert(p.length > 0);
  assert.strictEqual(p[0].checks[0].state, "yes");
});
check("hot-swap need is confirmed on Keychron mechanical picks", () => {
  ["Keychron V1", "Keychron V5 Max", "Keychron V1 Ultra 8K"].forEach((n) =>
    assert.strictEqual(L.matchPick(D.picks.find((x) => x.name === n), ["hotswap"])[0].state, "yes", n));
});
check("a form with no pick at the tier falls back to closest", () => {
  const { p } = top({ budget: "100", use: "work", noise: "yes", wireless: "wired" });
  assert(p.length > 0 && p.every((x) => x.form === "lowprofile"));
});
check("every pick has a valid tier, form and checked date", () =>
  D.picks.forEach((p) => { assert(L.tierIdx(p.tier) >= 0, p.name); assert(D.forms[p.form], p.name); assert(p.checked, p.name); }));
check("every need id used by an answer is defined", () =>
  D.questions.forEach((q) => q.options.forEach((o) => (o.needs || []).forEach((n) => assert(L.NEEDS[n], n)))));
check("every tier id has a colour class", () => D.tiers.forEach((t) => assert(["budget", "mid", "upper", "premium"].includes(t.id))));

console.log(pass + " passed, " + fail.length + " failed");
fail.forEach((f) => console.log("  FAIL " + f));
process.exit(fail.length ? 1 : 0);
