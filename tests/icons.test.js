// Run: node tests/icons.test.js   (no dependencies)
// Every guide in the catalog has an icon, and every icon belongs to a guide.
global.window = {};
require("../data/catalog.js"); require("../data/icons.js");
const ids = window.BYB_CATALOG.groups.flatMap((g) => g.items.map((i) => i.id));
const icons = window.BYB_ICONS;
const bad = [];
ids.forEach((i) => { if (!icons[i]) bad.push("missing icon: " + i); else if (!/^<(path|rect|circle)/.test(icons[i])) bad.push("not svg shapes: " + i); });
Object.keys(icons).forEach((k) => { if (!ids.includes(k)) bad.push("icon for unknown guide: " + k); });
console.log((ids.length - bad.length) + " passed, " + bad.length + " failed");
if (bad.length) { console.log(bad.join("\n")); process.exit(1); }
