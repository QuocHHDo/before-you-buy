// Category content for the mouse page. Same shape as the other category files.
window.SITE_DATA = {
  category: "mice",
  title: "Before you buy a mouse",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My mouse result: Before You Buy",
  defaultForm: "office",

  forms: {
    "office": "Everyday and productivity",
    "ergonomic": "Ergonomic (vertical or trackball)",
    "gaming": "Gaming (lightweight, wireless)"
  },

  // What each "must have" is checked against on a pick's `facts`.
  needDefs: {
    wireless: { label: "Wireless", fact: "wireless", is: true },
    bluetooth: { label: "Bluetooth", fact: "bluetooth", is: true },
    multidevice: { label: "Multi-device", fact: "multidevice", is: true },
    quiet: { label: "Quiet clicks", fact: "quiet", is: true },
    light65: { label: "Under 65 g", fact: "under65g", is: true },
    leftHanded: { label: "Left-hand friendly", fact: "leftHanded", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.85,
      name: "Budget",
      range: "Under $50",
      adds: "A reliable wireless sensor, a comfortable shape and very long battery life. Some models have quiet clicks.",
      missing: "Multi-device pairing, premium scrolling and ergonomic extras.",
      bestFor: "Most people. A cheap mouse does the job.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.93,
      name: "Mid",
      range: "$50–130",
      adds: "Multi-device pairing, better scroll wheels, app customisation and ergonomic shapes like vertical mice.",
      missing: "The ultralight shells that esports players use.",
      bestFor: "People who use a mouse all day or work across several computers."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$130+",
      adds: "Shells under 60 g and 8K polling dongles. Built for competitive shooters.",
      missing: "A noticeable gain for office use. Even for gaming, reviewers say the polling-rate difference is very small.",
      bestFor: "Competitive players who care about every gram.",
      badge: "Returns start shrinking"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend?",
      why: "Your needs and your budget don't always agree. Setting a ceiling lets the result tell you what you'd give up, instead of recommending something you won't buy.",
      options: [
        { id: "50", label: "Under $50", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. That includes well-reviewed wireless mice and a trackball." },
        { id: "130", label: "Up to $130", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, which covers the Logitech MX Master line." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "use",
      short: "Use",
      ask: "What will you mostly use it for?",
      why: "Office mice and gaming mice are built for different jobs. A gaming mouse's specs matter in fast aiming; an office mouse is built for scrolling, comfort and switching computers.",
      options: [
        { id: "office", label: "Everyday and office work", form: { "office": 2 } },
        { id: "power", label: "Heavy productivity (spreadsheets, editing, many windows)", tier: "mid", form: { "office": 3 },
          must: ["A better scroll wheel and programmable buttons (the Logitech MX Master class)"],
          note: "A better scroll wheel and shortcut buttons help here. Logitech's claims of time saved come from its own study, so treat them as marketing." },
        { id: "casual", label: "Gaming, casually", form: { "gaming": 2 },
          note: "A budget wireless gaming mouse like the G305 suits an average player, as reviewers describe it." },
        { id: "comp", label: "Competitive shooters", tier: "upper", form: { "gaming": 3 }, needs: ["light65"],
          must: ["Weight under about 65 g and a shape that fits your grip"],
          note: "Flagship wireless gaming mice cost $150–170 and weigh 54–60 g. Shape, weight and sensor matter; headline DPI numbers don't." }
      ]
    },
    {
      id: "comfort",
      short: "Comfort",
      ask: "Does your hand or wrist ache after long sessions?",
      why: "Ergonomic mice change your hand position. A vertical mouse only helps if it fits your hand, and a trackball moves the cursor with your thumb instead of your arm.",
      options: [
        { id: "yes", label: "Yes, it does", form: { "ergonomic": 3 },
          must: ["Check the size: vertical mice come in sizes (the Logitech Lift suits small to medium hands)"],
          note: "Pain that keeps coming back is worth raising with a doctor. A different mouse may not fix it." },
        { id: "no", label: "Not really" }
      ]
    },
    {
      id: "devices",
      short: "Devices",
      ask: "Do you switch between several computers or a tablet?",
      why: "Multi-device mice pair with up to three devices and switch with a button. Logitech's Flow feature can also move the cursor between computers.",
      options: [
        { id: "yes", label: "Yes", needs: ["bluetooth", "multidevice"],
          must: ["Bluetooth with multi-device pairing"],
          note: "Pairing for three devices is common on the MX line and the Lift." },
        { id: "no", label: "Just one computer", skip: ["Multi-device pairing"] }
      ]
    },
    {
      id: "noise",
      short: "Noise",
      ask: "Do you share a room, or use it during calls?",
      why: "Click noise varies a lot. Some mice have quiet-click versions of their switches.",
      options: [
        { id: "yes", label: "Yes, quiet please", needs: ["quiet"],
          must: ["Quiet clicks (check the product page, as some models have it and some don't)"],
          note: "The Logitech Signature M650, Lift, ERGO M575S and MX Master 3S are all listed with quiet clicks." },
        { id: "no", label: "It doesn't matter" }
      ]
    },
    {
      id: "hand",
      short: "Hand",
      ask: "Are you left-handed, or do you have smaller hands?",
      why: "Most mice are shaped for right hands. Size matters too: some reviewers find the MX Master 3S too big, while Engadget says the MX Master 4 suits medium and large hands.",
      options: [
        { id: "left", label: "Left-handed", needs: ["leftHanded"],
          must: ["Symmetrical shape or a left-handed version"],
          note: "The Logitech Lift has a left-hand version, and the Viper V3 Pro and Superlight 2 are symmetrical. The ERGO M575S has no left-hand alternative." },
        { id: "small", label: "Smaller hands", form: { "ergonomic": 1 },
          must: ["Check the length and width before buying; the MX Master line is big"],
          note: "The Logitech Lift is made for small to medium hands, and Logitech sells a compact MX Anywhere line." },
        { id: "no", label: "Neither" }
      ]
    }
  ],

  brandColumns: ["Big brands", "Newer brands", "Random no-name"],
  brandRows: [
    { label: "Examples", cells: ["Logitech, Razer", "Keychron", "Unbranded Amazon listings"] },
    { label: "What stands out", cells: ["Logitech leads office and productivity mice; Logitech and Razer lead esports mice", "Keychron's M6 8K is Tom's Guide's best office mouse at $69", "Unreviewed sensors and build"] },
    { label: "Software", cells: ["Logi Options+, Razer Synapse", "Keychron Engine app", "Often none"] },
    { label: "Watch out for", cells: ["Flagship prices; features behind an app account", "Shorter track record", "Inflated DPI and polling numbers"] }
  ],
  brandVerdict: "Brand matters less than shape, weight and comfort. Logitech dominates office and ergonomic picks. Razer and Logitech dominate esports mice. A $40 mouse can be good enough, and the biggest risk is an unbranded listing with inflated spec numbers.",

  traps: [
    { claim: "\"Up to 44,000 DPI\"", reality: "DPI measures sensor sensitivity, not accuracy. Reviewers say the best players use a small fraction of what modern sensors can do, and How-To Geek says consistent tracking and ergonomics matter more." },
    { claim: "\"8,000Hz polling rate\"", reality: "ProSettings says the differences are very small. PC World called 8,000Hz a battery drain, and Stuff measured about 22 hours of battery at 8K on the DeathAdder V4 Pro, against Razer's 150-hour rating at 1,000Hz." },
    { claim: "\"Lighter is always better\"", reality: "PC World lists chasing weight as a common mistake. A 55 g mouse that doesn't fit your hand is worse than a comfortable 80 g one." },
    { claim: "\"Ergonomic\"", reality: "It only helps if it fits your hand. Tom's Hardware says the Lift is great for smaller hands, and Logitech's own comfort numbers come from company-run studies." },
    { claim: "\"Wireless\"", reality: "Check the kind: a 2.4GHz dongle is the low-latency option for gaming, Bluetooth is for switching between devices. Battery life is often quoted at a lower polling rate than you'll use." },
    { claim: "\"Gaming mouse\"", reality: "It can be a great everyday mouse. RTINGS rates the G305 as one of the best general-use wireless mice at its price, and Digital Trends says it's built for the average player." },
    { claim: "\"Haptic feedback\" (MX Master 4)", reality: "Macworld says the haptics may be overkill for many people, Tom's Hardware found them under-used at launch, and Notebookcheck says the mouse is quite heavy. The cheaper 3S is still sold." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use manufacturer, retailer or reviewer listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying.",
  picksNote: "Well-reviewed mice, sorted by typical street price. Prices swing with sales, so check the current price and which version is current before buying.",
  picks: [
    { name: "Logitech Signature M650", facts: { wireless: true, quiet: true }, tier: "budget", form: "office", checked: "2026-11",
      why: "Tom's Guide's pick for a $39 everyday mouse, with quiet clicks and a 24-month battery rating. Less comfortable for long sessions than an ergonomic mouse." },
    { name: "Logitech ERGO M575S", facts: { wireless: true, bluetooth: true, quiet: true, leftHanded: false }, tier: "budget", form: "ergonomic", checked: "2026-11",
      why: "Thumb-operated trackball with quiet clicks. $40–50 at Best Buy, with a $69.99 list price on Logitech's site. Right-handed only." },
    { name: "Logitech G305 Lightspeed", facts: { wireless: true }, tier: "budget", form: "gaming", checked: "2026-11",
      why: "RTINGS' best budget wireless gaming mouse, and a good general-use one too. Listed from about $27 at Walmart, with a 250-hour battery rating." },
    { name: "Keychron M6 8K", facts: { wireless: true }, tier: "mid", form: "office", checked: "2026-11",
      why: "Tom's Guide's best office mouse for $69: six buttons, 26,000 DPI and a weight of about 78 g." },
    { name: "Logitech Lift", facts: { wireless: true, bluetooth: true, multidevice: true, quiet: true, leftHanded: true }, tier: "mid", form: "ergonomic", checked: "2026-11",
      why: "Vertical mouse for small to medium hands, $69.99–79.99. It has a left-hand version and quiet clicks, and Tom's Hardware notes it isn't suited to precision tasks like gaming." },
    { name: "Logitech MX Master 3S", facts: { wireless: true, bluetooth: true, multidevice: true, quiet: true, under65g: false }, tier: "mid", form: "office", checked: "2026-11",
      why: "RTINGS' best wireless mouse overall. List $119.99, but $78–100 in recent sales. 141 g, and one reviewer found it too big." },
    { name: "Logitech MX Master 4", facts: { wireless: true, bluetooth: true, multidevice: true }, tier: "mid", form: "office", checked: "2026-11",
      why: "Adds haptic feedback and an Actions Ring over the 3S for $119.99. Engadget says it's comfortable for medium and large hands; Notebookcheck calls it quite heavy." },
    { name: "Logitech G Pro X Superlight 2", facts: { wireless: true, under65g: true, leftHanded: true }, tier: "upper", form: "gaming", checked: "2026-11",
      why: "60 g symmetric esports mouse. $159.99 list." },
    { name: "Razer Viper V3 Pro", facts: { wireless: true, under65g: true, leftHanded: true }, tier: "upper", form: "gaming", checked: "2026-11",
      why: "54 g symmetric mouse with an 8K dongle in the box. $159.99." },
    { name: "Razer DeathAdder V4 Pro", facts: { wireless: true, under65g: true, leftHanded: false }, tier: "upper", form: "gaming", checked: "2026-11",
      why: "56 g right-handed shape, 8K dongle in the box and a 150-hour battery rating at 1,000Hz. $169.99, or $149.99 on sale." }
  ]
};
