// Category content for the keyboard page. Same shape as headphones.js and toothbrushes.js.
window.SITE_DATA = {
  category: "keyboards",
  title: "Before you buy a keyboard",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My keyboard result: Before You Buy",
  defaultForm: "mechanical",

  forms: {
    "mechanical": "Mechanical (swappable switches, typing and general use)",
    "magnetic": "Magnetic / Hall-effect (adjustable keys, competitive gaming)",
    "lowprofile": "Low-profile quiet (office, multi-device)"
  },

  // What each "must have" is checked against on a pick's `facts`.
  needDefs: {
    wireless: { label: "Wireless", fact: "wireless", is: true },
    multidevice: { label: "Pairs with 3 devices", fact: "multidevice", is: true },
    hotswap: { label: "Hot-swap switches", fact: "hotswap", is: true },
    numpad: { label: "Number pad", fact: "numpad", is: true },
    rapidTrigger: { label: "Rapid Trigger", fact: "rapidTrigger", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.82,
      name: "Budget",
      range: "Under $100",
      adds: "Real mechanical switches, usually hot-swap sockets, and often QMK/VIA remapping. Most boards at this price are wired.",
      missing: "Wireless on most models, a gasket-mounted typing feel, a volume knob, a heavy premium case.",
      bestFor: "First mechanical keyboard, and most typists.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$100–200",
      adds: "Wireless (2.4GHz and Bluetooth), gasket mounts, 8K polling on newer Keychrons, and Hall-effect gaming boards with Rapid Trigger.",
      missing: "A metal case on most models, and any proven edge outside competitive games.",
      bestFor: "Wireless desks, multi-device setups and serious FPS players."
    },
    {
      id: "upper",
      value: 0.96,
      name: "Upper",
      range: "$200+",
      adds: "Aluminium cases, wireless Hall-effect boards, nicer sound and build.",
      missing: "Clear proof it types or games better than the tier below. Reviewers call some of these too expensive for what they add.",
      bestFor: "People who want a keyboard they'll keep for years and enjoy handling.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend?",
      why: "Your needs and your budget don't always agree. Setting a ceiling lets the result tell you what you'd give up, instead of recommending something you won't buy.",
      options: [
        { id: "100", label: "Under $100", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. That already buys a real mechanical board; the gap is wireless and a heavier build." },
        { id: "200", label: "Up to $200", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, which covers wireless and Hall-effect gaming boards." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "use",
      short: "Use",
      ask: "What will you mostly use it for?",
      why: "Gaming boards and typing boards are tuned differently. Hall-effect boards are built around reaction time, and some reviewers say they type worse than a traditional mechanical board.",
      options: [
        { id: "work", label: "Typing and office work", form: { "lowprofile": 1, "mechanical": 1 },
          note: "Both a low-profile office board and a mechanical board suit this. The next questions decide between them." },
        { id: "mixed", label: "A bit of everything", form: { "mechanical": 2 } },
        { id: "casual", label: "Gaming, but not competitively", form: { "mechanical": 2 },
          note: "A regular mechanical board is plenty. Fast-trigger tech helps most in competitive shooters and rhythm games." },
        { id: "comp", label: "Competitive shooters or rhythm games", tier: "mid", form: { "magnetic": 3 }, needs: ["rapidTrigger"],
          must: ["Rapid Trigger and adjustable actuation (the feature the magnetic switches exist for)"],
          note: "RTINGS found small but noticeable gains in these games. One reviewer who tried several said many players can't feel a difference. Hall-effect boards start around $140." }
      ]
    },
    {
      id: "noise",
      short: "Noise",
      ask: "Will it be used near other people or on calls?",
      why: "Clicky switches are the loudest. Linear and tactile are quieter, and slim low-profile boards are quieter still.",
      options: [
        { id: "yes", label: "Yes, shared space or calls", form: { "lowprofile": 2, "mechanical": 1 },
          must: ["Linear or tactile switches, not clicky"],
          note: "Best Buy reviewers describe the Logitech MX Keys S as fairly quiet. Among mechanical boards, avoid blue or other clicky switches." },
        { id: "no", label: "No, it's mostly just me" }
      ]
    },
    {
      id: "layout",
      short: "Layout",
      ask: "Do you need a number pad?",
      why: "Layout is the one choice you can't change later. You can swap switches and keycaps afterwards, but you can't turn a 60% board into a 75%.",
      options: [
        { id: "yes", label: "Yes, I use numbers a lot", needs: ["numpad"],
          must: ["Full-size or 96% layout"],
          note: "A 96% board keeps the number pad in a smaller footprint, but reviewers say it can feel cramped." },
        { id: "no", label: "No",
          must: ["Check the layout: 75% keeps the function row and arrow keys; many 60% boards drop the arrows"],
          note: "A 75% or TKL board is the usual middle ground. Many 60% boards leave off the arrow keys." }
      ]
    },
    {
      id: "wireless",
      short: "Wireless",
      ask: "Do you need it to be wireless?",
      why: "Wireless can mean Bluetooth, a 2.4GHz dongle, or both. Bluetooth is for switching between devices; a dongle is the connection built for gaming.",
      options: [
        { id: "wired", label: "Wired is fine", skip: ["Wireless"],
          note: "Wired saves money and avoids battery worries. Most budget boards are wired." },
        { id: "wireless", label: "Wireless", tier: "mid", needs: ["wireless"],
          must: ["Wireless (check whether it is Bluetooth, a 2.4GHz dongle, or both)"],
          note: "Wireless boards start around $100. Most cheaper boards are wired." },
        { id: "multi", label: "Wireless, switching between laptop, phone and tablet", tier: "mid", needs: ["wireless", "multidevice"],
          must: ["Bluetooth pairing for 3 devices with one-key switching"],
          note: "Several mechanical boards do this, and so does the Logitech MX Keys S." }
      ]
    },
    {
      id: "tinker",
      short: "Swap",
      ask: "Might you want to change how the keys feel later?",
      why: "Hot-swap sockets let you change switches with no soldering. It is common even on cheap boards, but check the fine print: some magnetic boards only accept the maker's own switches.",
      options: [
        { id: "yes", label: "Yes, I'd like to experiment", needs: ["hotswap"],
          must: ["Hot-swap sockets that take standard MX-style switches (magnetic boards often don't)"],
          note: "On Hall-effect boards, hot-swap often means the maker's own magnetic switches only. Keychron says so for its HE boards." },
        { id: "no", label: "No, I'll keep what it comes with", skip: ["Hot-swap sockets"] }
      ]
    },
    {
      id: "switch",
      short: "Feel",
      ask: "Which key feel sounds right?",
      why: "Linear is smooth, tactile has a bump, clicky has a bump and a click. There is no best type, and you usually can't try one before you buy.",
      options: [
        { id: "linear", label: "Smooth, no bump (linear)", must: ["Linear switches"],
          note: "Often suggested for gaming, but no rule says you can't type on them." },
        { id: "tactile", label: "A small bump (tactile)", must: ["Tactile switches"],
          note: "A middle option: you feel the key register without the click noise." },
        { id: "clicky", label: "A bump and a click (clicky)", must: ["Clicky switches (the loudest type)"] },
        { id: "unsure", label: "Not sure",
          note: "Pick a hot-swap board with a common default, then swap later. Switch sample packs are cheap." }
      ]
    }
  ],

  brandColumns: ["Big gaming brands", "Enthusiast brands", "Random no-name"],
  brandRows: [
    { label: "Examples", cells: ["Logitech, Razer, Corsair", "Keychron, Wooting, Endgame Gear", "Unbranded Amazon boards"] },
    { label: "What stands out", cells: ["Mature software, support, and low-profile office boards", "Hot-swap, QMK/VIA remapping and gasket mounts at mid prices; Wooting pioneered Hall-effect gaming boards", "Some budget names (such as Ajazz and Gamakay) appear in reviewers' budget lists; most listings are unreviewed"] },
    { label: "Software", cells: ["Own apps, sometimes account-based", "Browser-based tools (Keychron Launcher, Wooting's web software)", "Varies, often none"] },
    { label: "Watch out for", cells: ["Paying for the name; premium prices", "Plastic cases on cheaper lines; vendor-only switches on magnetic boards", "Unclear specs and warranty; check independent reviews"] }
  ],
  brandVerdict: "Brand matters less than the layout, the switches and whether the board does what you need. Keychron and Wooting lead the enthusiast lists. Big brands make the best quiet office boards. Unreviewed no-name boards are the risk, though a few cheap names do show up in reviewers' picks.",

  traps: [
    { claim: "\"8,000Hz polling rate\"", reality: "Reviewers note that a faster polling number doesn't make a keyboard better to type on. Even the people who test mice say the difference between 1,000 and 8,000Hz is very small, and fast polling drains the battery." },
    { claim: "\"Hall effect, so it's the best for gaming\"", reality: "RTINGS found small but real gains in competitive FPS and rhythm games. One reviewer who used several said he couldn't feel the improvement, and Digital Trends said a traditional mechanical board still feels better to type on." },
    { claim: "\"Hot-swappable\"", reality: "It means no soldering, not any switch you like. Keychron's magnetic boards only take switches sold on its own site." },
    { claim: "\"You need a mechanical keyboard\"", reality: "Not for office work. The Logitech MX Keys S isn't mechanical, and reviewers still call it one of the best office keyboards. Mechanical is a feel preference." },
    { claim: "\"Wireless\"", reality: "Check which kind. Bluetooth is for switching between devices; a 2.4GHz dongle is the low-latency option. Some boards offer both." },
    { claim: "\"The best switch\"", reality: "Reviewers say there are no rules: it depends on what feels comfortable to you. Switch names and colours vary by brand, and you rarely get to try one first." },
    { claim: "\"Was $95, now $62\"", reality: "Keychron's own page showed the V1 at $69.99 during October's sale and $61.74 in the Black Friday sale, against a $94.99 list price. Judge the sale price, not the crossed-out number." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use manufacturer, retailer or reviewer listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying.",
  picksNote: "Well-reviewed boards, sorted by typical street price. Keychron prices swing with sales, so check the current price before buying.",
  picks: [
    { name: "Keychron C3 Pro", facts: { hotswap: true }, tier: "budget", form: "mechanical", checked: "2026-11",
      why: "Tom's Hardware's budget list leads with it: gasket-mounted, hot-swap and QMK/VIA. List $49.99, seen around $45 in October." },
    { name: "Keychron V1", facts: { wireless: false, hotswap: true, numpad: false, rapidTrigger: false }, tier: "budget", form: "mechanical", checked: "2026-11",
      why: "75% wired board with hot-swap and QMK. List is $94.99, but Keychron's own page showed $62–70 in recent sales. Wired only." },
    { name: "Keychron V5 Max", facts: { wireless: true, multidevice: true, hotswap: true, numpad: true, rapidTrigger: false }, tier: "mid", form: "mechanical", checked: "2026-11",
      why: "96% wireless board with 2.4GHz, Bluetooth for three devices, hot-swap and QMK. List $119.99, $96–110 in recent sales. RTINGS rates it among the best budget mechanicals." },
    { name: "Keychron V1 Ultra 8K", facts: { wireless: true, hotswap: true, numpad: false, rapidTrigger: false }, tier: "mid", form: "mechanical", checked: "2026-11",
      why: "75% wireless board with 8K polling and a 660-hour battery rating at 8K. $114.99, and TechRadar says it was US-only at launch." },
    { name: "Logitech MX Keys S", facts: { wireless: true, multidevice: true, hotswap: false, numpad: true, rapidTrigger: false }, tier: "mid", form: "lowprofile", checked: "2026-11",
      why: "Quiet low-profile office keyboard with Bluetooth or Bolt dongle and three-device switching. $99.99–109.99; the wrist rest is $19.99 extra." },
    { name: "Endgame Gear KB65HE", facts: { wireless: false, rapidTrigger: true }, tier: "mid", form: "magnetic", checked: "2026-11",
      why: "Cheaper Hall-effect board with Rapid Trigger and PBT keycaps, $139. Wired only." },
    { name: "Wooting 60HE+", facts: { wireless: false, rapidTrigger: true }, tier: "mid", form: "magnetic", checked: "2026-11",
      why: "The 60% board that made Hall-effect gaming popular. Tom's Guide lists it at $174. A newer 60HE v2 exists, so check which one is on sale. No wireless." },
    { name: "Wooting 80HE", facts: { wireless: false, rapidTrigger: true }, tier: "upper", form: "magnetic", checked: "2026-11",
      why: "$200 MSRP, with a better typing feel than the 60HE per Digital Trends, though it called the price too high. PC Gamer noted some chassis flex. Wired." },
    { name: "Keychron Q1 HE", facts: { wireless: true, multidevice: true, hotswap: true, numpad: false, rapidTrigger: true }, tier: "upper", form: "magnetic", checked: "2026-11",
      why: "Wireless Hall-effect board in a metal case, about $200–240. Hot-swap only takes the Gateron magnetic switches Keychron sells." }
  ]
};
