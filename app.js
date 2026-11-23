(function () {
  "use strict";

  const D = window.SITE_DATA;
  const KEY = "byb:" + D.category + ":answers:v1";
  const MIN_ANSWERS = 3;
  const Q = D.questions;
  const tierIdx = (id) => D.tiers.findIndex((t) => t.id === id);

  // ---------- state ----------
  let answers = load();
  let restorable = null; // the visitor's own answers, if a shared link replaced them
  let fromLink = false;
  const shared = readHash();
  if (shared) {
    const differs = JSON.stringify(shared) !== JSON.stringify(answers);
    if (differs && Object.keys(answers).length) restorable = answers;
    answers = shared;
    fromLink = differs;
    save();
  }
  let step = firstUnanswered();
  let pickFilter = "all";

  // answers <-> URL hash, e.g. #budget=150&use=commute
  function clean(a) {
    const out = {};
    for (const q of Q) if (a[q.id] && q.options.some((o) => o.id === a[q.id])) out[q.id] = a[q.id];
    return out;
  }
  function readHash() {
    const raw = location.hash.slice(1);
    if (!raw.includes("=")) return null;
    const a = clean(Object.fromEntries(new URLSearchParams(raw)));
    return Object.keys(a).length ? a : null;
  }
  function encode(a) {
    return new URLSearchParams(Q.filter((q) => a[q.id]).map((q) => [q.id, a[q.id]])).toString();
  }
  function shareUrl() {
    return location.origin + location.pathname + (encode(answers) ? "#" + encode(answers) : "");
  }
  function syncHash() {
    const enc = encode(answers);
    try {
      history.replaceState(null, "", location.pathname + location.search + (enc ? "#" + enc : ""));
    } catch (e) {
      /* file:// in some browsers */
    }
  }

  function load() {
    try {
      // drop answers to questions or options that no longer exist
      return clean(JSON.parse(localStorage.getItem(KEY)) || {});
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
  const L = window.BYB_LOGIC(D, { minAnswers: MIN_ANSWERS });
  const compute = () => L.compute(answers);
  const picksFor = (tierId, form, needs) => L.picksFor(tierId, form, needs);
  const P = window.BYB_PROMPT ? window.BYB_PROMPT(D, L) : null;

  // ✓ / ✕ / ? chips for the buyer's must-haves
  const MARK = { yes: "✓", no: "✕", unknown: "?" };
  const STATE_WORD = { yes: "meets", no: "does not meet", unknown: "not confirmed:" };
  function checkChips(checks) {
    if (!checks || !checks.length) return null;
    return h(
      "span",
      { class: "checks" },
      checks.map((c) =>
        h(
          "span",
          { class: "check " + c.state, title: c.label },
          h("span", { class: "ck-mark", "aria-hidden": "true" }, MARK[c.state]),
          h("span", { class: "visually-hidden" }, STATE_WORD[c.state] + " "),
          c.label
        )
      )
    );
  }

  function effectText(o) {
    if (!o) return "";
    if (o.note) return o.note;
    if (o.must && o.must.length) return "Must have: " + o.must[0] + ".";
    if (o.skip && o.skip.length) return "You can skip: " + o.skip[0] + ".";
    return "No change to your result. That's useful to know too.";
  }

  // ---------- actions ----------
  let recap = null; // { at, topic, label, text, back } shown on the screen after an auto-advance
  let fresh = null; // { items: Set, tier: bool } one-shot highlight for the result panel

  let lockUntil = 0; // swallow double-clicks/taps that land on the next question right after an auto-advance

  function choose(qid, oid, fromKey = false) {
    if (!fromKey && Date.now() < lockUntil) return;
    const q = Q.find((x) => x.id === qid);
    const wasAnswered = !!answers[qid];
    const before = compute();
    if (answers[qid] === oid) delete answers[qid];
    else answers[qid] = oid;
    save();
    syncHash();
    fromLink = false;
    restorable = null;

    const after = compute();
    const had = new Set([...before.must, ...before.skip, ...before.compromises]);
    fresh = {
      items: new Set([...after.must, ...after.skip, ...after.compromises].filter((x) => !had.has(x))),
      tier: before.ready !== after.ready || before.tier.id !== after.tier.id,
    };

    const o = q.options.find((x) => x.id === answers[qid]);
    // Auto-advance only on a first answer. Changing an earlier answer stays put so you can compare.
    if (o && !wasAnswered) {
      const from = Q.indexOf(q);
      const next = nextUnanswered(from + 1);
      recap = { at: next, topic: q.short, label: o.label, text: effectText(o), back: from };
      lockUntil = Date.now() + 400;
      goTo(next);
      return;
    }
    recap = null;
    renderDynamic();
    // keep focus on the chosen option after re-render
    const btn = document.querySelector('.opt[data-oid="' + oid + '"]');
    if (btn) btn.focus({ preventScroll: true });
  }

  function nextUnanswered(from) {
    for (let i = from; i < Q.length; i++) if (!answers[Q[i].id]) return i;
    return Q.length;
  }

  function goTo(i, focus = true) {
    step = Math.max(0, Math.min(Q.length, i));
    if (recap && recap.at !== step) recap = null;
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
              "aria-label": q.short + ": question " + (i + 1) + " of " + Q.length + ", " + q.ask + (answers[q.id] ? " (answered)" : ""),
              "aria-current": i === step ? "step" : false,
              onclick: () => goTo(i),
            },
            h("span", { class: "seg-label" }, q.short)
          )
        )
      )
    );

    const notice =
      fromLink &&
      h(
        "div",
        { class: "shared-notice", role: "status" },
        h("span", {}, "You're viewing answers from a shared link."),
        restorable &&
          h(
            "button",
            {
              type: "button",
              class: "link-btn",
              onclick: () => {
                answers = restorable;
                restorable = null;
                fromLink = false;
                save();
                syncHash();
                goTo(firstUnanswered(), false);
              },
            },
            "Go back to my own answers"
          )
      );

    const recapEl =
      recap &&
      recap.at === step &&
      h(
        "div",
        { class: "recap", role: "status" },
        h(
          "p",
          { class: "recap-head" },
          h("span", {}, "You answered “" + recap.label + "” for " + recap.topic + "."),
          h("button", { type: "button", class: "link-btn", onclick: () => goTo(recap.back) }, "Change")
        ),
        h("p", { class: "recap-text" }, recap.text)
      );

    if (step >= Q.length) {
      root.replaceChildren(...[notice, segs, recapEl, renderSummary()].filter(Boolean));
      return;
    }

    const q = Q[step];
    const sel = q.options.find((o) => o.id === answers[q.id]);
    const isLast = step === Q.length - 1;

    root.replaceChildren(
      ...[notice].filter(Boolean),
      segs,
      ...[recapEl].filter(Boolean),
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
        h("p", { class: "kbd-hint" }, "Tip: press 1–" + q.options.length + " to answer.")
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

    if (r.ready) kids.push(whyBlock(r));
    if (r.ready && r.capped) kids.push(budgetBlock(r));

    if (r.must.length)
      kids.push(h("div", { class: "rail-sec" }, h("h3", {}, "Must have"), h("ul", { class: "ticks must" }, r.must.map((m) => h("li", { class: isFresh(m) }, m)))));
    if (r.skip.length)
      kids.push(h("div", { class: "rail-sec" }, h("h3", {}, "You can skip"), h("ul", { class: "ticks skip" }, r.skip.map((m) => h("li", { class: isFresh(m) }, m)))));

    if (r.ready) {
      const p = picksFor(r.tier.id, r.form, r.needs);
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

    if (r.n > 0) kids.push(shareBlock());
    if (r.ready && P) kids.push(promptBlock());

    rail.replaceChildren(...kids);
  }

  function whyBlock(r) {
    const items = [];
    if (r.capped) {
      items.push(h("li", {}, h("b", {}, "Budget: "), r.capLabel + " caps you at " + D.tiers[r.cap].name + "."));
    }
    const top = r.reasons.filter((x) => x.tier > 0);
    top.forEach((x) =>
      items.push(h("li", {}, h("b", {}, x.topic + ": "), x.label + " needs at least " + D.tiers[x.tier].name + "."))
    );
    let lead;
    if (!top.length) lead = "Nothing you said needs more than budget tier. Spending more would buy features you didn't ask for.";
    else if (!r.capped && r.cap !== null && r.cap > tierIdx(r.tier.id))
      lead = "Your budget goes up to " + D.tiers[r.cap].name + ", but your needs are covered for less.";
    return h(
      "div",
      { class: "rail-sec why-tier" },
      h("h3", {}, "Why " + r.tier.name),
      lead && h("p", { class: "rail-text" }, lead),
      items.length > 0 && h("ul", { class: "why-list" }, items)
    );
  }

  function budgetBlock(r) {
    return h(
      "div",
      { class: "budget-clash" },
      h("h3", {}, "Your needs point higher than your budget"),
      h(
        "p",
        {},
        "Your answers point to " + r.needTier.name + " (" + r.needTier.range + "). At " + r.tier.name + " (" + r.tier.range + ") you'll likely give up:"
      ),
      r.compromises.length
        ? h("ul", { class: "ticks skip" }, r.compromises.map((c) => h("li", { class: isFresh(c) }, c)))
        : h("p", {}, r.tier.missing),
      h(
        "p",
        { class: "rail-text" },
        "Tip: last year's flagship models often drop a tier when the new one comes out. Search for the previous generation on sale."
      )
    );
  }

  let shareMsg = "";
  function shareBlock() {
    const url = shareUrl();
    return h(
      "div",
      { class: "rail-sec share" },
      h("button", { type: "button", class: "btn btn-signal", onclick: shareResult }, "Share this result"),
      h("p", { class: "rail-text share-msg", "aria-live": "polite" }, shareMsg || "Opens the same answers on any device."),
      h("input", { class: "share-url", type: "text", readonly: true, value: url, "aria-label": "Link to this result", onfocus: (e) => e.target.select() })
    );
  }

  // ---------- copy-ready prompt for an AI agent ----------
  let promptMode = "find";
  let promptNames = ["", ""];
  function promptBlock() {
    const area = h("textarea", { class: "prompt-text", readonly: true, rows: 9, "aria-label": "Prompt to copy" });
    const msg = h("p", { class: "rail-text prompt-msg", "aria-live": "polite" }, "");
    const modeBtns = Object.entries(P.MODES).map(([id, label]) =>
      h("button", { type: "button", class: "chip chip-rail", "aria-pressed": id === promptMode ? "true" : "false", "data-mode": id, onclick: () => setMode(id) }, label)
    );
    const inputA = h("input", { class: "prompt-name", type: "text", "aria-label": "Product name or model number", autocomplete: "off", value: promptNames[0],
      oninput: (e) => { promptNames[0] = e.target.value; refresh(); } });
    const inputB = h("input", { class: "prompt-name", type: "text", "aria-label": "Second product name or model number", autocomplete: "off", value: promptNames[1],
      oninput: (e) => { promptNames[1] = e.target.value; refresh(); } });
    const names = h("div", { class: "prompt-names" }, inputA, inputB);

    function refresh() {
      area.value = P.build(answers, promptMode, promptNames);
      msg.textContent = "";
    }
    function setMode(id) {
      promptMode = id;
      modeBtns.forEach((b) => b.setAttribute("aria-pressed", b.getAttribute("data-mode") === id ? "true" : "false"));
      names.hidden = id === "find";
      inputB.hidden = id !== "compare";
      inputA.placeholder = id === "compare" ? "First product" : "Product name or model";
      inputB.placeholder = "Second product";
      refresh();
    }
    async function copy() {
      const text = area.value;
      try {
        await navigator.clipboard.writeText(text);
        msg.textContent = "Prompt copied. Paste it into your AI agent.";
      } catch (e) {
        area.select();
        let ok = false;
        try { ok = document.execCommand("copy"); } catch (e2) { ok = false; }
        msg.textContent = ok ? "Prompt copied. Paste it into your AI agent." : "Couldn't copy automatically. The text is selected, so copy it by hand.";
      }
    }
    const box = h(
      "div",
      { class: "rail-sec prompt" },
      h("h3", {}, "Ask an AI agent"),
      h("p", { class: "rail-text" }, "Copies your answers into a prompt. An agent that can browse can then check current prices and specs."),
      h("div", { class: "prompt-modes", role: "group", "aria-label": "Prompt type" }, modeBtns),
      names,
      area,
      h("button", { type: "button", class: "btn btn-signal", onclick: copy }, "Copy prompt"),
      msg
    );
    setMode(promptMode);
    return box;
  }

  async function shareResult() {
    const url = shareUrl();
    try {
      if (navigator.share && matchMedia("(pointer: coarse)").matches) {
        await navigator.share({ title: D.shareTitle || "My result: Before You Buy", url });
        return;
      }
      await navigator.clipboard.writeText(url);
      shareMsg = "Link copied. Paste it anywhere.";
    } catch (e) {
      if (e && e.name === "AbortError") return;
      shareMsg = "Couldn't copy automatically. Copy the link below.";
    }
    renderRail(compute());
    const input = document.querySelector(".share-url");
    if (input && shareMsg.startsWith("Couldn't")) input.select();
    setTimeout(() => {
      shareMsg = "";
      const m = document.querySelector(".share-msg");
      if (m) m.textContent = "Opens the same answers on any device.";
    }, 3000);
  }

  function isFresh(text) {
    return fresh && fresh.items.has(text) ? "fresh" : false;
  }

  function tierMeter(r) {
    const active = r.ready ? tierIdx(r.tier.id) : -1;
    return h(
      "div",
      { class: "meter" + (r.ready ? "" : " pending") + (fresh && fresh.tier && r.ready ? " fresh" : "") },
      h(
        "div",
        { class: "meter-track", role: "img", "aria-label": r.ready ? "Your tier: " + r.tier.name + ", " + r.tier.range : "Tier not decided yet" },
        D.tiers.map((t, i) =>
          h(
            "span",
            { class: "meter-stop" + (i === active ? " on" : "") + (r.ready && r.capped && i === tierIdx(r.needTier.id) ? " need" : "") },
            h("span", { class: "meter-range" }, t.range)
          )
        )
      ),
      r.ready && h("p", { class: "meter-caption" }, h("b", {}, r.tier.name + " tier. "), r.tier.bestFor),
      r.ready && r.capped && h("p", { class: "meter-legend" }, h("span", { class: "dash-swatch" }), "Where your needs point")
    );
  }

  function pickDate(p) {
    const fmt = (ym) => {
      const [y, m] = ym.split("-").map(Number);
      return new Date(y, m - 1, 1).toLocaleDateString("en-US", { month: "short", year: "numeric" });
    };
    return p.checked ? "Price checked " + fmt(p.checked) : "Listed " + fmt(D.picksListed);
  }

  // A price check older than about three months is flagged, since prices drift.
  const STALE_DAYS = 90;
  function isStale(p, now) {
    const ym = p.checked || D.picksListed;
    if (!ym) return false;
    const [y, m] = ym.split("-").map(Number);
    return ((now || new Date()) - new Date(y, m - 1, 1)) / 86400000 > STALE_DAYS;
  }
  function staleBadge(p) {
    return isStale(p)
      ? h("span", { class: "stale", title: "This price check is over three months old" }, "Price may have changed")
      : null;
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
      checkChips(p.checks),
      h("span", { class: "mp-foot" }, h("span", { class: "mp-link" }, "Find reviews"), h("span", { class: "mp-date" }, pickDate(p), staleBadge(p) && " · ", staleBadge(p)))
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
      "A curve that rises steeply from budget to mid tier, then flattens as price keeps rising. " +
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
    const n = D.tiers.length, lo = Math.max(n - 2, 0), hi = n - 1;
    const midX = (xs[lo] + xs[hi]) / 2;
    const ann = svg("text", { x: midX, y: (Math.max(ys[lo], ys[hi]) + bottom) / 2 + 6, class: "ann", "text-anchor": "middle" });
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
    if (D.brandHeading) {
      document.getElementById("b-heading").textContent = D.brandHeading;
      document.querySelectorAll('a[href="#brand"]').forEach((el) => { el.textContent = D.brandHeading; });
    }
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
    const yours = last && last.ready ? last.tier.id : null;
    const needs = last && last.ready ? last.needs : [];
    groups.forEach((g) => {
      g.list = g.list.map((p, i) => ({ ...p, checks: last && p.form === last.form ? L.matchPick(p, needs) : [], _i: i }));
      const sc = (p) => p.checks.filter((c) => c.state === "no").length * 10 + p.checks.filter((c) => c.state === "unknown").length;
      g.list.sort((a, b) => sc(a) - sc(b) || a._i - b._i);
    });
    const kids = groups.map((g) =>
        h(
          "section",
          { class: "pick-group tier-" + g.t.id + (g.t.id === yours ? " yours" : ""), "aria-labelledby": "pg-" + g.t.id },
          h(
            "header",
            { class: "pg-head" },
            h(
              "div",
              { class: "pg-title" },
              h("h3", { id: "pg-" + g.t.id }, g.t.name),
              h("span", { class: "tier-range" }, g.t.range),
              g.t.id === yours && h("span", { class: "pg-yours" }, "Your tier")
            ),
            h(
              "div",
              { class: "pg-meter", "aria-hidden": "true" },
              D.tiers.map((_, i) => h("span", { class: i === tierIdx(g.t.id) ? "on" : false }))
            ),
            h("p", { class: "pg-sub" }, g.t.bestFor)
          ),
          h(
            "ul",
            { class: "pick-rows" },
            g.list.map((p) =>
              h(
                "li",
                { class: "pick-row" },
                h(
                  "div",
                  { class: "pr-main" },
                  h("span", { class: "pr-name" }, p.name),
                  h("span", { class: "pr-form" }, D.forms[p.form]),
                  h("span", { class: "pr-date" }, pickDate(p), staleBadge(p) && " · ", staleBadge(p)),
                h(
                  "div",
                  { class: "pr-actions" },
                  h("a", { class: "pr-link", href: reviewLink(p.name), target: "_blank", rel: "noopener" }, "Find reviews"),
                  h(
                    "button",
                    {
                      type: "button",
                      class: "pr-compare" + (compare.includes(p.name) ? " on" : ""),
                      "aria-pressed": compare.includes(p.name) ? "true" : "false",
                      "aria-label": (compare.includes(p.name) ? "Selected for comparison: " : "Compare ") + p.name,
                      "data-cmp": p.name,
                      onclick: () => toggleCompare(p.name),
                    },
                    compare.includes(p.name) ? "Selected" : "Compare"
                  )
                )
                ),
                h("p", { class: "pr-why" }, p.why),
                checkChips(p.checks)
              )
            )
          )
        )
    );
    if (!kids.length) kids.push(h("p", { class: "muted" }, "No picks of this type yet."));
    if (needs.length) kids.push(h("p", { class: "facts-note" }, D.factsNote));
    document.getElementById("picks-list").replaceChildren(...kids);
    renderCompare();
  }

  // ---------- compare two picks ----------
  let compare = []; // pick names, at most two
  function toggleCompare(name) {
    const i = compare.indexOf(name);
    if (i >= 0) compare.splice(i, 1);
    else {
      compare.push(name);
      if (compare.length > 2) compare.shift();
    }
    renderPicks();
    const btn = [...document.querySelectorAll("[data-cmp]")].find((b) => b.dataset.cmp === name);
    if (btn) btn.focus({ preventScroll: true });
    if (compare.length === 2) {
      const el = document.getElementById("compare");
      if (el) el.scrollIntoView({ behavior: smooth(), block: "nearest" });
    }
  }

  function renderCompare() {
    let box = document.getElementById("compare");
    if (!box) {
      box = h("div", { id: "compare", class: "compare", "aria-live": "polite" });
      document.getElementById("picks-list").before(box);
    }
    const picks = compare.map((n) => D.picks.find((p) => p.name === n)).filter(Boolean);
    if (!picks.length) {
      box.replaceChildren();
      box.hidden = true;
      return;
    }
    box.hidden = false;
    const head = h(
      "div",
      { class: "cmp-head" },
      h("h3", {}, picks.length === 2 ? "Side by side" : "Pick one more to compare"),
      h("button", { type: "button", class: "link-btn", onclick: () => { compare = []; renderPicks(); } }, "Clear")
    );
    if (picks.length < 2) {
      box.replaceChildren(head, h("p", { class: "muted" }, picks[0].name + " is selected. Choose Compare on another pick."));
      return;
    }
    const needIds = Object.keys(D.needDefs);
    const tier = (p) => D.tiers.find((t) => t.id === p.tier);
    const rows = [
      ["Type", (p) => D.forms[p.form]],
      ["Price tier", (p) => tier(p).name + ", " + tier(p).range],
      ["Price check", (p) => pickDate(p)],
      ["Why it's here", (p) => p.why],
    ];
    const checkRows = needIds.map((id) => [
      D.needDefs[id].label,
      (p) => checkChips(L.matchPick(p, [id])),
    ]);
    box.replaceChildren(
      head,
      h(
        "div",
        { class: "table-scroll" },
        h(
          "table",
          { class: "cmp-table" },
          h("caption", { class: "visually-hidden" }, "Comparing " + picks[0].name + " and " + picks[1].name),
          h("thead", {}, h("tr", {}, h("td", {}), picks.map((p) => h("th", { scope: "col" }, p.name)))),
          h(
            "tbody",
            {},
            [...rows, ...checkRows].map(([label, fn]) =>
              h("tr", {}, h("th", { scope: "row" }, label), picks.map((p) => h("td", {}, fn(p))))
            )
          )
        )
      ),
      needIds.length ? h("p", { class: "facts-note" }, D.factsNote) : null
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
    renderPicks();
    renderMobileBar(r);
    const bar = document.getElementById("mobile-bar");
    bar.classList.toggle("fresh", !!(fresh && fresh.tier && r.ready));
    fresh = null; // highlights play once per change
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
        choose(q.id, o.id, true);
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
    restorable = null;
    fromLink = false;
    save();
    syncHash();
    goTo(0, false);
    document.getElementById("tool").scrollIntoView({ behavior: smooth(), block: "start" });
  });

  // ---------- init ----------
  document.getElementById("page-title").textContent = D.title;
  document.getElementById("page-tagline").textContent = D.tagline;
  document.getElementById("last-checked").textContent = "Content last checked " + D.lastChecked;

  if (!shared && Object.keys(answers).length) syncHash();
  // a different shared link pasted into this tab
  window.addEventListener("hashchange", () => {
    const a = readHash();
    if (a && JSON.stringify(a) !== JSON.stringify(answers)) location.reload();
  });
  renderBrand();
  renderTraps();
  renderPicks();
  renderDynamic();
})();
