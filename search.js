/* Site-wide search on the hub page. Reads window.BYB_INDEX (data/search-index.js) and window.BYB_CATALOG.
   Every word you type must appear in an entry. Results link to the matching section of a guide. */
(function () {
  var I = window.BYB_INDEX, C = window.BYB_CATALOG;
  var form = document.getElementById("search-form");
  if (!I || !C || !form) return;
  var input = document.getElementById("search-input");
  var out = document.getElementById("search-results");
  var status = document.getElementById("search-status");
  var clear = document.getElementById("search-clear");
  var ideas = document.getElementById("search-ideas");
  var hub = document.getElementById("hub");
  var names = {};
  C.groups.forEach(function (g) { g.items.forEach(function (it) { names[it.id] = it.short || it.name; }); });
  var KIND = { trap: "Marketing trap", question: "Question", pick: "Example pick" };

  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  function mark(text, words) {
    var frag = document.createDocumentFragment();
    var re = new RegExp("(" + words.map(esc).join("|") + ")", "ig");
    text.split(re).forEach(function (part, i) {
      if (i % 2) { var m = document.createElement("mark"); m.textContent = part; frag.appendChild(m); }
      else frag.appendChild(document.createTextNode(part));
    });
    return frag;
  }
  function snippet(x, words) {
    if (x.length <= 170) return x;
    var low = x.toLowerCase(), at = -1;
    for (var i = 0; i < words.length && at < 0; i++) at = low.indexOf(words[i]);
    var start = Math.max(0, Math.min(at - 50, x.length - 170));
    return (start > 0 ? "\u2026" : "") + x.slice(start, start + 170) + (start + 170 < x.length ? "\u2026" : "");
  }

  function run() {
    var q = input.value.trim().toLowerCase();
    out.replaceChildren();
    var active = q.length >= 2;
    if (clear) clear.hidden = !input.value;
    if (ideas) ideas.hidden = input.value.length > 0;
    if (hub) hub.hidden = active;
    if (!active) { status.textContent = ""; return; }
    var words = q.split(/\s+/).filter(Boolean);
    var hits = [];
    I.forEach(function (e) {
      var head = e.h.toLowerCase(), all = head + " " + e.x.toLowerCase(), score = 0;
      for (var i = 0; i < words.length; i++) {
        if (all.indexOf(words[i]) < 0) return;
        score += head.indexOf(words[i]) >= 0 ? 3 : 1;
      }
      hits.push({ e: e, s: score + (e.k === "trap" ? 1 : 0) });
    });
    hits.sort(function (a, b) { return b.s - a.s; });
    var shown = hits.slice(0, 30);
    status.textContent = hits.length
      ? hits.length + (hits.length === 1 ? " result" : " results") + (hits.length > shown.length ? ", showing the top " + shown.length : "")
      : "No results. Try a shorter or different word.";
    shown.forEach(function (h) {
      var e = h.e, li = document.createElement("li"), a = document.createElement("a");
      a.href = e.u;
      var meta = document.createElement("span"); meta.className = "sr-meta"; meta.textContent = names[e.g] + " \u00b7 " + KIND[e.k];
      var title = document.createElement("span"); title.className = "sr-title"; title.appendChild(mark(e.h, words));
      var body = document.createElement("span"); body.className = "sr-body"; body.appendChild(mark(snippet(e.x, words), words));
      a.append(meta, title, body); li.appendChild(a); out.appendChild(li);
    });
  }
  if (ideas) {
    ideas.appendChild(document.createTextNode("Popular searches: "));
    ["monthly fee", "warranty", "battery", "filter cost", "subscription"].forEach(function (w) {
      var b = document.createElement("button"); b.type = "button"; b.className = "chip chip-small"; b.textContent = w;
      b.addEventListener("click", function () { input.value = w; run(); input.focus(); });
      ideas.appendChild(b);
    });
    ideas.hidden = false;
  }
  if (clear) clear.addEventListener("click", function () { input.value = ""; run(); input.focus(); });
  form.addEventListener("submit", function (e) { e.preventDefault(); run(); });
  input.addEventListener("input", run);
  if (location.hash === "#search") input.focus();
})();
