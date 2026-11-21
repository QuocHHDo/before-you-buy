(function () {
  "use strict";

  const D = window.SITE_DATA;
  const KEY = "byb:" + D.category + ":answers:v1";
  const MIN_ANSWERS = 3;
  const Q = D.questions;
  const tierIdx = (id) => D.tiers.findIndex((t) => t.id === id);

  // ---------- state ----------
  let answers = load();
  let step = firstUnanswered();
  let pickFilter = "all";

  function load() {
    try {
      const a = JSON.parse(localStorage.getItem(KEY)) || {};
      // drop answers to questions or options that no longer exist
      for (const k of Object.keys(a)) {
        const q = Q.find((x) => x.id === k);
        if (!q || !q.options.some((o) => o.id === a[k])) delete a[k];
      }
      return a;
    } catch (e) {
      return {};
    }
  }
  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(answers));
    } catch (e) {
      /* storage unavailable: answers last for this visit */
    }
  }
  function firstUnanswered() {
    const i = Q.findIndex((q) => !answers[q.id]);
    return i === -1 ? Q.length : i;
  }
  const answeredCount = () => Q.filter((q) => answers[q.id]).length;

  // ---------- DOM helper ----------
  function h(tag, attrs, ...kids) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === false || v == null) continue;
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v;
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? "" : v);
    }
    for (const c of kids.flat()) {
      if (c == null || c === false) continue;
      n.append(c.nodeType ? c : document.createTextNode(String(c)));
    }
    return n;
  }
  const svg = (tag, attrs) => {
    const n = document.createElementNS("http://www.w3.org/2000/svg", tag);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    return n;
  };

  // ---------- recommendation logic ----------
  function compute() {
    let tier = 0;
    const votes = {};
    const must = new Set();
    const skip = new Set();
    const notes = [];
    for (const q of Q) {
      const o = q.options.find((x) => x.id === answers[q.id]);
      if (!o) continue;
      if (o.tier) tier = Math.max(tier, tierIdx(o.tier));
      for (const [f, v] of Object.entries(o.form || {})) votes[f] = (votes[f] || 0) + v;
      (o.must || []).forEach((m) => must.add(m));
      (o.skip || []).forEach((s) => skip.add(s));
      if (o.note) notes.push({ topic: q.short, text: o.note });
    }
    const order = Object.keys(D.forms);
    const form =
      Object.entries(votes).sort((a, b) => b[1] - a[1] || order.indexOf(a[0]) - order.indexOf(b[0]))[0]?.[0] ||
      "earbuds";
    const n = answeredCount();
    return { n, ready: n >= MIN_ANSWERS, tier: D.tiers[tier], form, must: [...must], skip: [...skip], notes };
  }

  function picksFor(tierId, form) {
    const same = D.picks.filter((p) => p.form === form);
    const exact = same.filter((p) => p.tier === tierId);
    if (exact.length) return { list: exact.slice(0, 3), exact: true };
    const t = tierIdx(tierId);
    return {
      list: same.slice().sort((a, b) => Math.abs(tierIdx(a.tier) - t) - Math.abs(tierIdx(b.tier) - t)).slice(0, 3),
      exact: false,
    };
  }

  function effectText(o) {
    if (!o) return "";
    if (o.note) return o.note;
    if (o.must && o.must.length) return "Must have: " + o.must[0] + ".";
    if (o.skip && o.skip.length) return "You can skip: " + o.skip[0] + ".";
    return "No change to your result. That's useful to know too.";
  }

  // ---------- actions ----------
  function choose(qid, oid) {
    if (answers[qid] === oid) delete answers[qid];
    else answers[qid] = oid;
    save();
    renderDynamic();
    // keep focus on the chosen option after re-render
    const btn = document.querySelector('.opt[data-oid="' + oid + '"]');
    if (btn) btn.focus({ preventScroll: true });
  }

  function goTo(i, focus = true) {
    step = Math.max(0, Math.min(Q.length, i));
    renderDynamic();
    if (focus) {
      const head = document.getElementById("step-heading");
      if (head) head.focus({ preventScroll: true });
      const tool = document.getElementById("stepper");
      if (tool.getBoundingClientRect().top < 0) tool.scrollIntoView({ behavior: smooth(), block: "start" });
    }
  }
  const smooth = () => (matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth");

  // ---------- render: stepper ----------
  function renderStepper() {
    const root = document.getElementById("stepper");
    const segs = h(
      "ol",
      { class: "segs", "aria-label": "Questions" },
      Q.map((q, i) =>
        h(
          "li",
          {},
          h(
            "button",
            {
              type: "button",
              class: "seg" + (answers[q.id] ? " done" : "") + (i === step ? " current" : ""),
              "aria-label": "Question " + (i + 1) + ": " + q.ask + (answers[q.id] ? " (answered)" : ""),
              "aria-current": i === step ? "step" : false,
              onclick: () => goTo(i),
            },
            h("span", { class: "seg-label" }, q.short)
          )
        )
      )
    );

    if (step >= Q.length) {
      root.replaceChildren(segs, renderSummary());
      return;
    }

    const q = Q[step];
    const sel = q.options.find((o) => o.id === answers[q.id]);
    const isLast = step === Q.length - 1;

    root.replaceChildren(
      segs,
      h(
        "div",
        { class: "step" },
        h("p", { class: "step-count" }, "Question " + (step + 1) + " of " + Q.length),
        h("h2", { id: "step-heading", tabindex: "-1" }, q.ask),
        h("p", { class: "why" }, q.why),
        h(
          "div",
          { class: "opts", role: "radiogroup", "aria-labelledby": "step-heading" },
          q.options.map((o, i) =>
            h(
              "button",
              {
                type: "button",
                role: "radio",
                "aria-checked": sel === o ? "true" : "false",
                class: "opt" + (sel === o ? " selected" : ""),
                "data-oid": o.id,
                onclick: () => choose(q.id, o.id),
              },
              h("span", { class: "key", "aria-hidden": "true" }, String(i + 1)),
              h("span", { class: "opt-text" }, o.label)
            )
          )
        ),
        h(
          "div",
          { class: "effect" + (sel ? " show" : ""), "aria-live": "polite" },
          sel ? [h("span", { class: "effect-label" }, "What this changes"), h("p", {}, effectText(sel))] : null
        ),
        h(
          "div",
          { class: "step-nav" },
          h(
            "button",
            { type: "button", class: "btn btn-quiet", disabled: step === 0, onclick: () => goTo(step - 1) },
            "Back"
          ),
          h(
            "button",
            {
              type: "button",
              class: "btn " + (sel ? "btn-primary" : "btn-quiet"),
              onclick: () => goTo(step + 1),
            },
            isLast ? (sel ? "See my answers" : "Skip and finish") : sel ? "Next question" : "Skip this one"
          )
        ),
        h("p", { class: "kbd-hint" }, "Tip: press 1–" + q.options.length + " to answer, Enter for next.")
      )
    );
  }

  function renderSummary() {
    const n = answeredCount();
    return h(
      "div",
      { class: "step summary" },
      h("p", { class: "step-count" }, n + " of " + Q.length + " answered"),
      h(
        "h2",
        { id: "step-heading", tabindex: "-1" },
        n >= MIN_ANSWERS ? "Your answers" : "Answer a few more to get a result"
      ),
      h(
        "ul",
        { class: "answer-list" },
        Q.map((q, i) => {
          const o = q.options.find((x) => x.id === answers[q.id]);
          return h(
            "li",
            {},
            h("span", { class: "a-q" }, q.ask),
            h("span", { class: "a-a" + (o ? "" : " missing") }, o ? o.label : "Not answered"),
            h("button", { type: "button", class: "link-btn", onclick: () => goTo(i) }, o ? "Change" : "Answer")
          );
        })
      )
    );
  }

  // ---------- render: result rail ----------
  function renderRail(r) {
    const rail = document.getElementById("rail");
    const kids = [h("h2", { class: "rail-title" }, r.ready ? "Your result" : "Your result so far")];

    kids.push(tierMeter(r));

    if (!r.ready) {
      kids.push(
        h(
          "p",
          { class: "rail-empty" },
          "Answer " + (MIN_ANSWERS - r.n) + " more question" + (MIN_ANSWERS - r.n === 1 ? "" : "s") + " to see your tier."
        )
      );
    } else {
      kids.push(
        h(
          "div",
          { class: "rail-row" },
          h("span", { class: "rail-label" }, "Best type for you"),
          h("span", { class: "rail-value" }, D.forms[r.form])
        )
      );
    }

    if (r.must.length)
      kids.push(h("div", { class: "rail-sec" }, h("h3", {}, "Must have"), h("ul", { class: "ticks must" }, r.must.map((m) => h("li", {}, m)))));
    if (r.skip.length)
      kids.push(h("div", { class: "rail-sec" }, h("h3", {}, "You can skip"), h("ul", { class: "ticks skip" }, r.skip.map((m) => h("li", {}, m)))));

    if (r.ready) {
      const p = picksFor(r.tier.id, r.form);
      kids.push(
        h(
          "div",
          { class: "rail-sec" },
          h("h3", {}, p.exact ? "Picks that fit" : "Closest picks"),
          p.list.length ? h("div", { class: "mini-picks" }, p.list.map(miniPick)) : h("p", { class: "muted" }, "No picks for this type yet.")
        )
      );
    }

    if (r.notes.length)
      kids.push(
        h(
          "details",
          { class: "rail-notes" },
          h("summary", {}, "Worth knowing (" + r.notes.length + ")"),
          h("ul", {}, r.notes.map((n) => h("li", {}, h("b", {}, n.topic + ": "), n.text)))
        )
      );

    rail.replaceChildren(...kids);
  }

  function tierMeter(r) {
    const active = r.ready ? tierIdx(r.tier.id) : -1;
    return h(
      "div",
      { class: "meter" + (r.ready ? "" : " pending") },
      h(
        "div",
        { class: "meter-track", role: "img", "aria-label": r.ready ? "Your tier: " + r.tier.name + ", " + r.tier.range : "Tier not decided yet" },
        D.tiers.map((t, i) =>
          h("span", { class: "meter-stop" + (i === active ? " on" : "") + (i < active ? " below" : "") }, h("span", { class: "meter-range" }, t.range))
        )
      ),
      r.ready && h("p", { class: "meter-caption" }, h("b", {}, r.tier.name + " tier. "), r.tier.bestFor)
    );
  }

  function reviewLink(name) {
    return "https://www.google.com/search?q=" + encodeURIComponent(name + " review");
  }

  function miniPick(p) {
    return h(
      "a",
      { class: "mini-pick", href: reviewLink(p.name), target: "_blank", rel: "noopener" },
      h("span", { class: "mp-name" }, p.name),
      h("span", { class: "mp-why" }, p.why),
      h("span", { class: "mp-link" }, "Find reviews")
    );
  }

  // ---------- render: mobile bar ----------
  let railVisible = false;
  function renderMobileBar(r) {
    const bar = document.getElementById("mobile-bar");
    const show = r.n > 0 && !railVisible && window.matchMedia("(max-width: 860px)").matches;
    bar.hidden = !show;
    document.body.classList.toggle("has-bar", show);
    document.getElementById("mobile-bar-text").replaceChildren(
      r.ready
        ? h("span", {}, h("b", {}, r.tier.name + " tier"), ", " + r.tier.range)
        : h("span", {}, r.n + " of " + Q.length + " answered")
    );
  }

  // ---------- render: price ladder chart ----------
  function renderLadder(r) {
    const W = 800, H = 240, padX = 70, top = 24, bottom = 190;
    const xs = D.tiers.map((_, i) => padX + (i * (W - 2 * padX)) / (D.tiers.length - 1));
    const ys = D.tiers.map((t) => bottom - t.value * (bottom - top));
    const yours = r.ready ? tierIdx(r.tier.id) : -1;

    const s = svg("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-labelledby": "ladder-title ladder-desc" });
    const title = svg("title", { id: "ladder-title" });
    title.textContent = "What you get as price goes up";
    const desc = svg("desc", { id: "ladder-desc" });
    desc.textContent =
      "A curve that rises steeply from budget to mid tier, then flattens through upper and premium. " +
      D.tiers.map((t) => t.name + " " + t.range).join(", ") + ".";
    s.append(title, desc);

    s.append(svg("line", { x1: padX - 30, y1: bottom, x2: W - padX + 30, y2: bottom, class: "axis" }));

    // smooth curve through the points (Catmull-Rom converted to cubic Béziers)
    const P = xs.map((x, i) => [x, ys[i]]);
    let d = "M " + P[0][0] + " " + P[0][1];
    for (let i = 0; i < P.length - 1; i++) {
      const p0 = P[i - 1] || P[i], p1 = P[i], p2 = P[i + 1], p3 = P[i + 2] || p2;
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += " C " + c1.join(" ") + ", " + c2.join(" ") + ", " + p2.join(" ");
    }
    const area = d + " L " + xs[xs.length - 1] + " " + bottom + " L " + xs[0] + " " + bottom + " Z";
    s.append(svg("path", { d: area, class: "curve-area" }));
    s.append(svg("path", { d, class: "curve" }));

    // annotate the flat part
    const midX = (xs[2] + xs[3]) / 2;
    const ann = svg("text", { x: midX, y: (Math.max(ys[2], ys[3]) + bottom) / 2 + 6, class: "ann", "text-anchor": "middle" });
    ann.textContent = "Mostly polish from here";
    s.append(ann);

    D.tiers.forEach((t, i) => {
      s.append(svg("line", { x1: xs[i], y1: ys[i], x2: xs[i], y2: bottom, class: "drop" }));
      s.append(svg("circle", { cx: xs[i], cy: ys[i], r: i === yours ? 10 : 6, class: "dot" + (i === yours ? " yours" : "") }));
      const lbl = svg("text", { x: xs[i], y: bottom + 24, class: "tick" + (i === yours ? " yours" : ""), "text-anchor": "middle" });
      lbl.textContent = t.range;
      s.append(lbl);
      if (i === yours) {
        const y = svg("text", { x: xs[i], y: ys[i] - 20, class: "you", "text-anchor": "middle" });
        y.textContent = "You";
        s.append(y);
      }
    });

    document.getElementById("ladder-chart").replaceChildren(s);

    document.getElementById("ladder-cols").replaceChildren(
      ...D.tiers.map((t, i) =>
        h(
          "article",
          { class: "tier" + (i === yours ? " yours" : "") },
          h("h3", {}, t.name, h("span", { class: "tier-range" }, t.range)),
          t.badge && h("p", { class: "tier-badge" }, t.badge),
          h("p", {}, h("b", {}, "Adds: "), t.adds),
          h("p", {}, h("b", {}, "Still missing: "), t.missing)
        )
      )
    );
  }

  // ---------- render: static sections ----------
  function renderBrand() {
    document.getElementById("brand-verdict").textContent = D.brandVerdict;
    document.getElementById("brand-table").replaceChildren(
      h("thead", {}, h("tr", {}, h("td", {}), D.brandColumns.map((c) => h("th", { scope: "col" }, c)))),
      h("tbody", {}, D.brandRows.map((r) => h("tr", {}, h("th", { scope: "row" }, r.label), r.cells.map((c) => h("td", {}, c)))))
    );
    // stacked cards for narrow screens
    document.getElementById("brand-cards").replaceChildren(
      ...D.brandColumns.map((col, ci) =>
        h(
          "article",
          { class: "brand-card" },
          h("h3", {}, col),
          h("dl", {}, D.brandRows.flatMap((r) => [h("dt", {}, r.label), h("dd", {}, r.cells[ci])]))
        )
      )
    );
  }

  function renderTraps() {
    document.getElementById("traps-list").replaceChildren(
      ...D.traps.map((t) => h("div", { class: "trap" }, h("dt", {}, t.claim), h("dd", {}, t.reality)))
    );
  }

  function renderPicks() {
    document.getElementById("picks-note").textContent = D.picksNote;
    const usedForms = Object.keys(D.forms).filter((f) => D.picks.some((p) => p.form === f));
    document.getElementById("pick-filters").replaceChildren(
      ...[["all", "All types"], ...usedForms.map((f) => [f, D.forms[f]])].map(([id, label]) =>
        h(
          "button",
          {
            type: "button",
            class: "chip" + (pickFilter === id ? " on" : ""),
            "aria-pressed": pickFilter === id ? "true" : "false",
            onclick: () => {
              pickFilter = id;
              renderPicks();
            },
          },
          label
        )
      )
    );
    const groups = D.tiers
      .map((t) => ({ t, list: D.picks.filter((p) => p.tier === t.id && (pickFilter === "all" || p.form === pickFilter)) }))
      .filter((g) => g.list.length);
    document.getElementById("picks-list").replaceChildren(
      ...groups.map((g) =>
        h(
          "div",
          { class: "pick-group" },
          h("h3", {}, g.t.name, h("span", { class: "tier-range" }, g.t.range)),
          h(
            "ul",
            { class: "pick-rows" },
            g.list.map((p) =>
              h(
                "li",
                { class: "pick-row" },
                h("div", { class: "pr-main" }, h("span", { class: "pr-name" }, p.name), h("span", { class: "pr-form" }, D.forms[p.form])),
                h("p", { class: "pr-why" }, p.why),
                h("a", { class: "pr-link", href: reviewLink(p.name), target: "_blank", rel: "noopener" }, "Find reviews")
              )
            )
          )
        )
      ),
      groups.length ? null : h("p", { class: "muted" }, "No picks of this type yet.")
    );
  }

  // ---------- orchestration ----------
  let last;
  function renderDynamic() {
    const r = compute();
    last = r;
    renderStepper();
    renderRail(r);
    renderLadder(r);
    renderMobileBar(r);
  }

  // keyboard: 1-9 choose, Enter / ArrowRight next, ArrowLeft back (only when focus is inside the stepper)
  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const stepper = document.getElementById("stepper");
    if (!stepper.contains(document.activeElement) && document.activeElement !== document.body) return;
    if (step >= Q.length) return;
    const q = Q[step];
    if (/^[1-9]$/.test(e.key)) {
      const o = q.options[Number(e.key) - 1];
      if (o) {
        e.preventDefault();
        choose(q.id, o.id);
      }
    } else if (e.key === "Enter" && document.activeElement && document.activeElement.classList.contains("opt")) {
      // Enter on an option selects it (default button behaviour) — then a second Enter moves on
      if (answers[q.id] === document.activeElement.dataset.oid) {
        e.preventDefault();
        goTo(step + 1);
      }
    } else if (e.key === "ArrowRight" && answers[q.id]) {
      goTo(step + 1);
    } else if (e.key === "ArrowLeft" && step > 0) {
      goTo(step - 1);
    }
  });

  // mobile bar: hide while the result rail is on screen
  const io = new IntersectionObserver(
    (entries) => {
      railVisible = entries[0].isIntersecting;
      if (last) renderMobileBar(last);
    },
    { threshold: 0.15 }
  );
  io.observe(document.getElementById("rail"));
  window.addEventListener("resize", () => last && renderMobileBar(last));

  document.getElementById("mobile-bar-btn").addEventListener("click", () => {
    document.getElementById("rail").scrollIntoView({ behavior: smooth(), block: "start" });
  });

  document.getElementById("reset-btn").addEventListener("click", () => {
    answers = {};
    save();
    goTo(0, false);
    document.getElementById("tool").scrollIntoView({ behavior: smooth(), block: "start" });
  });

  // ---------- init ----------
  document.getElementById("page-title").textContent = D.title;
  document.getElementById("page-tagline").textContent = D.tagline;
  document.getElementById("last-checked").textContent = "Content last checked " + D.lastChecked;

  renderBrand();
  renderTraps();
  renderPicks();
  renderDynamic();
})();
