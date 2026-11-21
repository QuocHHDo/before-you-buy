// Pure recommendation logic. No DOM. Used by app.js in the browser and by tests/rules.test.js in Node.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory;
  else root.BYB_LOGIC = factory;
})(typeof self !== "undefined" ? self : this, function createLogic(D, opts) {
  const MIN_ANSWERS = (opts && opts.minAnswers) || 3;
  const Q = D.questions;
  const tierIdx = (id) => D.tiers.findIndex((t) => t.id === id);

  // Each need is checked against a pick's `facts`. A missing fact means "unknown", never "no".
  const NEEDS = {
    ipx4: { label: "Sweat resistant (IPX4+)", test: (f) => (f.ipx === undefined ? undefined : f.ipx >= 4) },
    multipoint: { label: "Multipoint", test: (f) => (f.multipoint === undefined ? undefined : f.multipoint === true) },
    anc: { label: "Noise cancelling", test: (f) => (f.anc === undefined ? undefined : f.anc === true) },
    lowLatency: { label: "Low latency", test: (f) => (f.lowLatency === undefined ? undefined : f.lowLatency === true) },
  };
  const needLabel = (id) => (NEEDS[id] ? NEEDS[id].label : id);

  function answeredCount(answers) {
    return Q.filter((q) => answers[q.id]).length;
  }

  function compute(answers) {
    let need = 0;
    let cap = null;
    let capLabel = "";
    const votes = {};
    const skip = new Set();
    const notes = [];
    const reasons = [];
    const mustBy = [];
    const needBy = [];
    for (const q of Q) {
      const o = q.options.find((x) => x.id === answers[q.id]);
      if (!o) continue;
      const t = o.tier ? tierIdx(o.tier) : 0;
      if (o.tier) {
        need = Math.max(need, t);
        reasons.push({ topic: q.short, label: o.label, tier: t });
      }
      if (o.budgetCap) {
        cap = tierIdx(o.budgetCap);
        capLabel = o.label;
      }
      for (const [f, v] of Object.entries(o.form || {})) votes[f] = (votes[f] || 0) + v;
      (o.must || []).forEach((m) => mustBy.push({ text: m, tier: t }));
      (o.needs || []).forEach((id) => needBy.push(id));
      (o.skip || []).forEach((x) => skip.add(x));
      if (o.note && !o.budgetCap) notes.push({ topic: q.short, text: o.note });
    }
    const capped = cap !== null && cap < need;
    const tier = capped ? cap : need;
    const must = [...new Set(mustBy.filter((m) => !capped || m.tier <= cap).map((m) => m.text))];
    const compromises = capped ? [...new Set(mustBy.filter((m) => m.tier > cap).map((m) => m.text))] : [];
    reasons.sort((a, b) => b.tier - a.tier);
    const order = Object.keys(D.forms);
    const form =
      Object.entries(votes).sort((a, b) => b[1] - a[1] || order.indexOf(a[0]) - order.indexOf(b[0]))[0]?.[0] ||
      "earbuds";
    const n = answeredCount(answers);
    return {
      n,
      ready: n >= MIN_ANSWERS,
      tier: D.tiers[tier],
      needTier: D.tiers[need],
      cap,
      capLabel,
      capped,
      reasons,
      compromises,
      form,
      must,
      needs: [...new Set(needBy)],
      skip: [...skip],
      notes,
    };
  }

  // -> [{ id, label, state: "yes" | "no" | "unknown" }]
  function matchPick(pick, needs) {
    const f = pick.facts || {};
    return (needs || []).filter((id) => NEEDS[id]).map((id) => {
      const v = NEEDS[id].test(f);
      return { id, label: NEEDS[id].label, state: v === undefined ? "unknown" : v ? "yes" : "no" };
    });
  }

  function score(checks) {
    return {
      no: checks.filter((c) => c.state === "no").length,
      unknown: checks.filter((c) => c.state === "unknown").length,
    };
  }

  // Same form factor only. Exact tier first, else closest tiers. Within that, fewest failed must-haves first.
  function picksFor(tierId, form, needs) {
    const t = tierIdx(tierId);
    const same = D.picks
      .filter((p) => p.form === form)
      .map((p, i) => ({ ...p, checks: matchPick(p, needs), _i: i }));
    const rank = (a, b) => {
      const sa = score(a.checks), sb = score(b.checks);
      return sa.no - sb.no || sa.unknown - sb.unknown || a._i - b._i;
    };
    const exact = same.filter((p) => p.tier === tierId).sort(rank);
    if (exact.length) return { list: exact.slice(0, 3), exact: true };
    const near = same
      .slice()
      .sort((a, b) => Math.abs(tierIdx(a.tier) - t) - Math.abs(tierIdx(b.tier) - t) || rank(a, b))
      .slice(0, 3);
    return { list: near, exact: false };
  }

  return { compute, picksFor, matchPick, needLabel, tierIdx, answeredCount, NEEDS, MIN_ANSWERS };
});
