/* Shared navigation: "All guides" menu in the header and a footer list of guides.
   Reads window.BYB_CATALOG. Pages work without JS: the menu button is a plain link to guides.html. */
(function () {
  var C = window.BYB_CATALOG;
  if (!C) return;
  var cur = (window.SITE_DATA && window.SITE_DATA.category) || document.body.getAttribute("data-current") || "";

  function el(tag, attrs) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k]; else n.setAttribute(k, attrs[k]);
    });
    for (var i = 2; i < arguments.length; i++) if (arguments[i]) n.appendChild(arguments[i]);
    return n;
  }
  function linkFor(it, cls) {
    var a = el("a", { href: it.href, "class": cls, text: it.name });
    if (it.id === cur) a.setAttribute("aria-current", "page");
    return a;
  }
  function all() { var out = []; C.groups.forEach(function (g) { out = out.concat(g.items); }); return out; }

  // header: current guide + menu button
  var header = document.querySelector(".header-inner");
  var btn = document.getElementById("menu-btn");
  var panel = document.getElementById("menu-panel");
  var here = all().filter(function (i) { return i.id === cur; })[0];
  if (header && here) {
    var label = el("span", { "class": "nav-current", text: here.short || here.name });
    btn.parentNode.insertBefore(label, btn);
  }
  if (btn && panel) {
    C.groups.forEach(function (g) {
      var sec = el("section", { "class": "menu-group" }, el("h2", { text: g.name }));
      var ul = el("ul", {});
      g.items.forEach(function (it) { ul.appendChild(el("li", {}, linkFor(it, "menu-link"))); });
      sec.appendChild(ul);
      panel.appendChild(sec);
    });
    panel.appendChild(el("a", { href: "guides.html", "class": "menu-all", text: "Browse all guides" }));

    function setOpen(open) {
      panel.hidden = !open;
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      setOpen(panel.hidden);
      if (!panel.hidden && e.detail === 0) { var f = panel.querySelector("a"); if (f) f.focus(); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !panel.hidden) { setOpen(false); btn.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (!panel.hidden && !panel.contains(e.target) && e.target !== btn) setOpen(false);
    });
  }

  // footer: other guides
  var foot = document.getElementById("footer-guides");
  if (foot) {
    var ul2 = el("ul", {});
    all().filter(function (i) { return i.id !== cur; }).forEach(function (it) {
      ul2.appendChild(el("li", {}, el("a", { href: it.href, text: it.short || it.name })));
    });
    foot.appendChild(el("p", { "class": "foot-title", text: "More guides" }));
    foot.appendChild(ul2);
  }

  // hub page
  var hub = document.getElementById("hub");
  if (hub) {
    C.groups.forEach(function (g) {
      var sec = el("section", { "class": "hub-group" }, el("h2", { text: g.name }));
      var ul3 = el("ul", { "class": "hub-list" });
      g.items.forEach(function (it) {
        ul3.appendChild(el("li", {}, el("a", { href: it.href },
          el("span", { "class": "hub-name", text: it.name }),
          el("span", { "class": "hub-blurb", text: it.blurb }))));
      });
      sec.appendChild(ul3);
      hub.appendChild(sec);
    });
  }
})();
