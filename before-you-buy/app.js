(function () {
  "use strict";

  const D = window.SITE_DATA;
  const STORAGE_KEY = "byb:" + D.category + ":answers:v1";
  const MIN_ANSWERS = 3;
  const tierIndex = (id) => D.tiers.findIndex((t) => t.id === id);

  // ---------- state ----------
  let answers = loadAnswers();

  function loadAnswers() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveAnswers() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch (e) {
      /* storage unavailable: answers live for this visit only */
    }
  }

  // ---------- tiny DOM helper ----------
  function h(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === false || v == null) continue;
      if (k === "class") node.className = v;
      else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v === true ? "" : v);
    }
    for (const c of children.flat()) {
      if (c == null || c === false) continue;
      node.append(c.nodeType ? c : document.createTextNode(String(c)));
    }
    return node;
  }

  // ---------- logic ----------
  function computeResult() {
    let tier = 0;
    const formVotes = {};
    const must = new Set();
    const skip = new Set();
    const notes = [];
    let answered = 0;

    for (const q of D.questions) {
      const opt = q.options.find((o) => o.id === answers[q.id]);
      if (!opt) continue;
      answered++;
      if (opt.tier) tier = Math.max(tier, tierIndex(opt.tier));
      for (const [f, v] of Object.entries(opt.form || {})) formVotes[f] = (formVotes[f] || 0) + v;
      (opt.must || []).forEach((m) => must.add(m));
      (opt.skip || []).forEach((s) => skip.add(s));
      if (opt.note) notes.push({ topic: q.short, text: opt.note });
    }

    const formOrder = Object.keys(D.forms);
    const form =
      Object.entries(formVotes).sort(
        (a, b) => b[1] - a[1] || formOrder.indexOf(a[0]) - formOrder.indexOf(b[0])
      )[0]?.[0] || "earbuds";

    return { answered, tier: D.tiers[tier], form, must: [...must], skip: [...skip], notes };
  }

  function picksFor(tierId, form) {
    const sameForm = D.picks.filter((p) => p.form === form);
    const exact = sameForm.filter((p) => p.tier === tierId);
    if (exact.length) return { list: exact, exact: true };
    const target = tierIndex(tierId);
    const closest = sameForm
      .slice()
      .sort((a, b) => Math.abs(tierIndex(a.tier) - target) - Math.abs(tierIndex(b.tier) - target))
      .slice(0, 3);
    return { list: closest, exact: false };
  }

  // ---------- render: questions ----------
  function renderQuestions() {
    const grid = document.getElementById("q-grid");
    grid.replaceChildren(
      ...D.questions.map((q, i) => {
        const selected = q.options.find((o) => o.id === answers[q.id]);
        const effect = selected && (selected.note || (selected.must || [])[0] || (selected.skip || [])[0]);
        return h(
          "article",
          { class: "q-card" + (selected ? " answered" : "") },
          h("div", { class: "q-num" }, String(i + 1).padStart(2, "0")),
          h("h3", { id: "q-" + q.id }, q.ask),
          h("p", { class: "why" }, q.why),
          h(
            "div",
            { class: "options", role: "group", "aria-labelledby": "q-" + q.id },
            q.options.map((o) =>
              h(
                "button",
                {
                  type: "button",
                  class: "opt" + (selected === o ? " selected" : ""),
                  "aria-pressed": selected === o ? "true" : "false",
                  onclick: () => choose(q.id, o.id),
                },
                o.label
              )
            )
          ),
          effect && h("p", { class: "effect" }, h("strong", {}, "What this changes: "), effectText(selected))
        );
      })
    );
  }

  function effectText(opt) {
    if (opt.note) return opt.note;
    if (opt.must && opt.must.length) return "Must have: " + opt.must[0] + ".";
    if (opt.skip && opt.skip.length) return "You can skip: " + opt.skip[0] + ".";
    return "";
  }

  function choose(qid, oid) {
    if (answers[qid] === oid) delete answers[qid];
    else answers[qid] = oid;
    saveAnswers();
    renderAll();
  }

  // ---------- render: progress ----------
  function renderProgress() {
    const n = Object.keys(answers).filter((k) => D.questions.some((q) => q.id === k)).length;
    const total = D.questions.length;
    document.getElementById("progress-fill").style.width = (n / total) * 100 + "%";
    document.getElementById("progress-text").textContent = n + " of " + total + " answered";
  }

  // ---------- render: result ----------
  function renderResult(r) {
    const body = document.getElementById("result-body");
    if (r.answered < MIN_ANSWERS) {
      body.replaceChildren(
        h(
          "div",
          { class: "result-empty" },
          "Answer at least " + MIN_ANSWERS + " questions to see your result (" + r.answered + " so far)."
        )
      );
      return;
    }

    const picks = picksFor(r.tier.id, r.form);
    body.replaceChildren(
      h(
        "div",
        { class: "result-card" },
        h(
          "div",
          { class: "result-top" },
          h(
            "div",
            { class: "result-stat" },
            h("span", { class: "label" }, "Your tier"),
            h("span", { class: "value" }, r.tier.name + " · " + r.tier.range)
          ),
          h(
            "div",
            { class: "result-stat" },
            h("span", { class: "label" }, "Best form factor"),
            h("span", { class: "value" }, D.forms[r.form])
          )
        ),
        h(
          "div",
          { class: "result-cols" },
          h(
            "div",
            {},
            h("h3", {}, "Must have"),
            r.must.length
              ? h("ul", { class: "check must" }, r.must.map((m) => h("li", {}, m)))
              : h("p", { class: "muted" }, "Nothing special. Any well-reviewed pair in your tier works.")
          ),
          h(
            "div",
            {},
            h("h3", {}, "You can skip"),
            r.skip.length
              ? h("ul", { class: "check skip" }, r.skip.map((s) => h("li", {}, s)))
              : h("p", { class: "muted" }, "Nothing flagged yet.")
          )
        ),
        r.notes.length &&
          h(
            "div",
            { class: "result-notes" },
            h("h3", {}, "Worth knowing"),
            h(
              "ul",
              {},
              r.notes.map((n) => h("li", {}, h("span", { class: "tag" }, n.topic), " ", n.text))
            )
          ),
        h(
          "div",
          { class: "result-picks" },
          h("h3", {}, picks.exact ? "Picks that fit" : "Closest picks (none in your exact tier yet)"),
          picks.list.length
            ? h("div", { class: "picks-inline" }, picks.list.map(pickCard))
            : h("p", { class: "muted" }, "No picks for this form factor yet.")
        )
      )
    );
  }

  // ---------- render: ladder ----------
  function renderLadder(r) {
    const yours = r.answered >= MIN_ANSWERS ? r.tier.id : null;
    document.getElementById("ladder-grid").replaceChildren(
      ...D.tiers.map((t) =>
        h(
          "article",
          { class: "tier" + (t.id === yours ? " yours" : "") },
          t.id === yours && h("span", { class: "yours-flag" }, "Your tier"),
          h("div", { class: "tier-range" }, t.range),
          h("div", { class: "tier-name" }, t.name, t.badge && h("span", { class: "badge" }, t.badge)),
          h("p", {}, h("strong", {}, "Adds: "), t.adds),
          h("p", {}, h("strong", {}, "Still missing: "), t.missing),
          h("p", { class: "muted" }, h("strong", {}, "Best for: "), t.bestFor)
        )
      )
    );
  }

  // ---------- render: static sections ----------
  function renderBrand() {
    const table = document.getElementById("brand-table");
    table.replaceChildren(
      h("thead", {}, h("tr", {}, h("th", {}, ""), D.brandColumns.map((c) => h("th", { scope: "col" }, c)))),
      h(
        "tbody",
        {},
        D.brandRows.map((row) =>
          h("tr", {}, h("th", { scope: "row" }, row.label), row.cells.map((c) => h("td", {}, c)))
        )
      )
    );
    document.getElementById("brand-verdict").textContent = D.brandVerdict;
  }

  function renderTraps() {
    document.getElementById("traps-grid").replaceChildren(
      ...D.traps.map((t) =>
        h(
          "article",
          { class: "trap" },
          h("div", { class: "claim" }, t.claim),
          h("div", { class: "reality" }, t.reality)
        )
      )
    );
  }

  function pickCard(p) {
    return h(
      "div",
      { class: "pick" },
      h("div", { class: "pick-name" }, p.name),
      h("div", { class: "pick-form" }, D.forms[p.form]),
      h("p", {}, p.why)
    );
  }

  function renderPicks() {
    document.getElementById("picks-note").textContent = D.picksNote;
    document.getElementById("picks-grid").replaceChildren(
      ...D.tiers.map((t) =>
        h(
          "div",
          { class: "picks-tier" },
          h("h3", {}, t.name, h("span", { class: "muted" }, " · " + t.range)),
          h("div", { class: "picks-inline" }, D.picks.filter((p) => p.tier === t.id).map(pickCard))
        )
      )
    );
  }

  function renderAll() {
    const r = computeResult();
    renderQuestions();
    renderProgress();
    renderResult(r);
    renderLadder(r);
  }

  // ---------- init ----------
  document.title = "Before You Buy · " + D.category[0].toUpperCase() + D.category.slice(1);
  document.getElementById("page-title").textContent = D.title;
  document.getElementById("page-tagline").textContent = D.tagline;
  document.getElementById("last-checked").textContent = "Content last checked: " + D.lastChecked;
  document.getElementById("reset-btn").addEventListener("click", () => {
    answers = {};
    saveAnswers();
    renderAll();
    document.getElementById("questions").scrollIntoView({ behavior: "smooth" });
  });

  renderBrand();
  renderTraps();
  renderPicks();
  renderAll();
})();
