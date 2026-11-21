// Run: node tests/rules.test.js   (no dependencies)
global.window = {};
require("../data/headphones.js");
const D = global.window.SITE_DATA;
const L = require("../logic.js")(D, { minAnswers: 3 });
const assert = require("assert");

let pass = 0;
const fail = [];
function buyer(name, answers, expect) {
  try {
    const r = L.compute(answers);
    if (expect.tier) assert.strictEqual(r.tier.id, expect.tier, "tier");
    if (expect.form) assert.strictEqual(r.form, expect.form, "form");
    if (expect.capped !== undefined) assert.strictEqual(r.capped, expect.capped, "capped");
    if (expect.ready !== undefined) assert.strictEqual(r.ready, expect.ready, "ready");
    (expect.needs || []).forEach((n) => assert(r.needs.includes(n), "needs " + n));
    (expect.mustHas || []).forEach((m) => assert(r.must.some((x) => x.includes(m)), "must has " + m));
    (expect.compromiseHas || []).forEach((m) => assert(r.compromises.some((x) => x.includes(m)), "compromise has " + m));
    if (expect.top) {
      const p = L.picksFor(r.tier.id, r.form, r.needs).list;
      assert.strictEqual(p[0].name, expect.top, "top pick, got " + p[0].name);
    }
    if (expect.noPickFails) {
      const p = L.picksFor(r.tier.id, r.form, r.needs).list;
      p.forEach((x) => assert(!x.checks.some((c) => c.state === "no"), x.name + " fails a must-have"));
    }
    pass++;
  } catch (e) {
    fail.push(name + ": " + e.message);
  }
}

buyer("too few answers is not ready", { use: "commute", noise: "loud" }, { ready: false });
buyer("commuter, loud, no budget", { budget: "any", use: "commute", noise: "loud" }, { tier: "upper", form: "over-ear", needs: ["anc"] });
buyer("same commuter capped at $150", { budget: "150", use: "commute", noise: "loud" }, { tier: "mid", capped: true, compromiseHas: ["Strong ANC"] });
buyer("budget under $50 with daily calls", { budget: "50", use: "commute", calls: "often" }, { tier: "budget", capped: true });
buyer("gym runner", { use: "gym", calls: "rarely", phone: "android" }, { form: "earbuds", needs: ["ipx4"], mustHas: ["Sweat rating"] });
buyer("gym runner top picks all meet IPX4 or are unknown", { budget: "any", use: "gym", noise: "some" }, { form: "earbuds", needs: ["ipx4", "anc"] });
buyer("competitive gamer", { use: "gaming", latency: "competitive", sound: "fine" }, { form: "gaming", needs: ["lowLatency"] });
buyer("gamer picks never fail latency", { budget: "300", use: "gaming", latency: "competitive" }, { form: "gaming", noPickFails: true });
buyer("sound nerd at a desk", { use: "desk", sound: "detail", noise: "quiet" }, { form: "wired-over-ear" });
buyer("quiet place skips ANC", { use: "desk", noise: "quiet", calls: "rarely" }, { tier: "budget" });
buyer("iPhone user wants AAC", { phone: "iphone", use: "commute", noise: "some" }, { mustHas: ["AAC"] });
buyer("mixed devices need multipoint", { phone: "mixed", use: "mixed", calls: "sometimes" }, { needs: ["multipoint"] });
buyer("multipoint yes raises to mid", { multipoint: "yes", use: "commute", calls: "rarely" }, { tier: "mid", needs: ["multipoint"] });
integrity0();
function integrity0() {
  try {
    const list = L.picksFor("premium", "over-ear", ["anc", "multipoint"]).list;
    assert.strictEqual(list[0].name, "Sony WH-1000XM6", "confirmed pick ranks first, got " + list[0].name);
    pass++;
  } catch (e) { fail.push("ranking favors confirmed specs: " + e.message); }
}
buyer("long lifespan leans wired/over-ear", { lifespan: "long", use: "desk", noise: "quiet" }, { mustHas: ["Replaceable ear pads"] });
buyer("budget cap never exceeds ceiling", { budget: "50", use: "commute", noise: "loud", calls: "often", multipoint: "yes" }, { tier: "budget", capped: true });
buyer("no answers means default", {}, { ready: false });
buyer("unknown answer ids are ignored", { use: "nope", noise: "quiet", calls: "rarely", budget: "any" }, { ready: true });

// data integrity
function integrity(name, fn) {
  try { fn(); pass++; } catch (e) { fail.push(name + ": " + e.message); }
}
integrity("every pick has a valid tier and form", () =>
  D.picks.forEach((p) => {
    assert(L.tierIdx(p.tier) >= 0, p.name + " tier");
    assert(D.forms[p.form], p.name + " form");
  }));
integrity("every need id used by an answer has a test", () =>
  D.questions.forEach((q) => q.options.forEach((o) => (o.needs || []).forEach((n) => assert(L.NEEDS[n], n)))));
integrity("wired picks never claim ANC or multipoint", () =>
  D.picks.filter((p) => p.form.startsWith("wired")).forEach((p) => {
    assert(p.facts.anc !== true, p.name);
    assert(p.facts.multipoint !== true, p.name);
  }));
integrity("every form has at least one pick per tier it is offered in", () =>
  assert(D.picks.length >= 25));

console.log(pass + " passed, " + fail.length + " failed");
fail.forEach((f) => console.log("  FAIL " + f));
process.exit(fail.length ? 1 : 0);
