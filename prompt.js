// Builds a copy-and-paste prompt for an AI agent from a visitor's answers. No DOM, no network.
// Used by app.js in the browser and by tests/prompt.test.js in Node.
// It only restates what the guide already knows: the answers, the tier, must-haves, traps and
// which facts are unconfirmed. It asks the agent to look up current prices and to flag what it can't verify.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory;
  else root.BYB_PROMPT = factory;
})(typeof self !== "undefined" ? self : this, function createPrompt(D, L) {
  const Q = D.questions;

  // "Before you buy a washer and dryer" -> "washer and dryer"
  const noun = () => D.title.replace(/^Before you buy\s+(?:an?\s+)?/i, "").replace(/\.$/, "");

  const optOf = (q, answers) => q.options.find((o) => o.id === answers[q.id]);
  const plain = (s) => String(s).replace(/\s+/g, " ").replace(/^"|"$/g, "").trim();

  function needLabels(r) {
    return r.needs.map((id) => L.NEEDS[id] && L.NEEDS[id].label).filter(Boolean);
  }

  function answerLines(answers) {
    return Q.filter((q) => optOf(q, answers)).map((q) => "- " + q.ask.replace(/\?$/, "") + ": " + optOf(q, answers).label);
  }

  function profile(answers, r) {
    const out = [];
    out.push("Here is what I told a buying guide about my situation:");
    out.push(...answerLines(answers));
    out.push("");
    out.push("The guide's read of that: " + r.tier.name + " tier (" + r.tier.range + "), best type: " + D.forms[r.form] + ".");
    if (r.must.length) out.push("Must have: " + r.must.map(plain).join("; ") + ".");
    if (r.skip.length) out.push("I can skip: " + r.skip.map(plain).join("; ") + ".");
    if (r.capped && r.compromises.length)
      out.push("My budget is lower than my needs suggest, so I'd likely give up: " + r.compromises.map(plain).join("; ") + ".");
    return out;
  }

  function traps() {
    const claims = (D.traps || []).slice(0, 6).map((t) => plain(t.claim));
    if (!claims.length) return [];
    return [
      "",
      "Marketing claims to be skeptical of (judge them against real specs, not the wording): " + claims.join(", ") + "."
    ];
  }

  function checklist(r) {
    const labels = needLabels(r);
    return labels.length
      ? "For every model, say yes, no or unknown for each of these: " + labels.join("; ") + "."
      : "For every model, list the specs that matter most for my answers above.";
  }

  const RULES = [
    "Rules:",
    "- Look up current prices, availability and specs on the maker's or a major retailer's page. Give the date you checked.",
    "- If you can't confirm a fact, write \"unknown\" and say how I could check. Don't guess.",
    "- Separate what a maker claims from what independent testing found, and name your sources.",
    "- Don't pad the list. Tell me if fewer than three models truly fit.",
    "- Mention costs after purchase (subscriptions, filters, batteries, replacement parts) when they apply."
  ];

  function startingPoints(r) {
    const p = L.picksFor(r.tier.id, r.form, r.needs).list;
    if (!p.length) return [];
    return ["", "Starting points from the guide, which may be out of date, so verify them and look for better ones: " + p.map((x) => x.name).join("; ") + "."];
  }

  const MODES = {
    find: "Find options",
    check: "Check one product",
    compare: "Compare two"
  };

  // mode: "find" | "check" | "compare". names: product names or model numbers typed by the visitor.
  function build(answers, mode, names) {
    const r = L.compute(answers);
    if (!r.ready) return "";
    const n = noun();
    const a = ((names && names[0]) || "").trim();
    const b = ((names && names[1]) || "").trim();
    const lines = [];

    if (mode === "check") {
      lines.push("Help me decide whether " + (a || "[product name or model number]") + " is a good " + n + " for me.");
      lines.push("");
      lines.push(...profile(answers, r));
      lines.push("");
      lines.push("Check it against all of that. " + checklist(r));
      lines.push("Then tell me: what it costs now, what it costs to own over a few years, its weak points, and whether a different model would fit me better.");
      lines.push(...traps());
      lines.push("");
      lines.push(...RULES);
    } else if (mode === "compare") {
      lines.push("Compare " + (a || "[product A]") + " and " + (b || "[product B]") + " for me. I'm buying a " + n + ".");
      lines.push("");
      lines.push(...profile(answers, r));
      lines.push("");
      lines.push("Put them side by side in a table. " + checklist(r));
      lines.push("Then say which fits my answers better and why, and what would change that answer.");
      lines.push(...traps());
      lines.push("");
      lines.push(...RULES);
    } else {
      lines.push("Help me choose a " + n + ". Find current models that fit my situation.");
      lines.push("");
      lines.push(...profile(answers, r));
      lines.push("");
      lines.push("Find three to five models in or near my tier. " + checklist(r));
      lines.push("Show a table with model, current price, the checks above and the main trade-off, then name your top pick and say who it's wrong for.");
      lines.push(...startingPoints(r));
      lines.push(...traps());
      lines.push("");
      lines.push(...RULES);
    }
    return lines.join("\n");
  }

  return { build, noun, MODES };
});
