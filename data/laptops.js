// Category content for the laptop page. Same shape as the other guides.
// Laptops change every few months, so this guide leans on questions and traps, with few named picks.
window.SITE_DATA = {
  category: "laptops",
  title: "Before you buy a laptop",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My laptop result: Before You Buy",
  defaultForm: "windows",

  forms: {
    "windows": "Windows laptop (the widest choice, and some can be upgraded)",
    "mac": "MacBook (long battery life, nothing inside can be upgraded)",
    "chromebook": "Chromebook (cheap and simple, mostly web apps)"
  },

  needDefs: {
    ram16: { label: "16GB of RAM or more", fact: "ram16", is: true },
    upgrade: { label: "RAM or storage you can upgrade later", fact: "upgrade", is: true },
    longbattery: { label: "A full workday of tested battery life", fact: "longbattery", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $700",
      adds: "A solid everyday laptop. Tom's Guide's best budget laptop, the MacBook Neo, is $599, and its best budget Windows laptop, the Dell XPS 13, is just under $700.",
      missing: "Lots of RAM and storage, a bright screen and the longest battery life. Several cheap models carry only 8GB.",
      bestFor: "Web, documents, school and video calls.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$700–1,300",
      adds: "16GB of RAM and 512GB of storage as standard, as on the MacBook Air M5 at $1,099, or a business laptop with RAM you can upgrade.",
      missing: "The brightest OLED screens and the thinnest, lightest builds.",
      bestFor: "Most people who use a laptop every day for years."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$1,300+",
      adds: "A premium OLED screen, a lighter build and more memory, as on the Dell XPS 14 (a 32GB model was $1,519).",
      missing: "Everyday speed you can feel. Most of the extra goes to the screen, build and configuration.",
      bestFor: "Creators and heavy multitaskers who want the best screen.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend?",
      why: "Laptop prices are climbing because AI data centers are buying up memory. Gartner advised buying now or budgeting 20 to 30% more later in the year, and said sub-$500 laptops may disappear.",
      options: [
        { id: "700", label: "Under $700", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. Good laptops exist here, but 16GB of RAM is hard to find and 8GB is common." },
        { id: "1300", label: "Up to about $1,300", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, where 16GB of RAM and 512GB of storage are normal." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "system",
      short: "System",
      ask: "Which system do you want to use?",
      why: "The system decides which apps you can run and how much you can change later. Apple's MacBooks are sealed. Many Windows laptops are too, but a few are not.",
      options: [
        { id: "mac", label: "A MacBook", form: { "mac": 4 },
          note: "TechRadar, Engadget and Tom's Guide all name the MacBook Air M5 the best laptop for most people." },
        { id: "windows", label: "Windows", form: { "windows": 4 },
          note: "The widest range of prices and designs, including a few with upgradeable parts." },
        { id: "chrome", label: "A Chromebook", form: { "chromebook": 4 },
          note: "Tom's Guide says that under $300 a basic Chromebook is still a smart choice, especially if you mostly use Google's apps." },
        { id: "any", label: "Not sure yet",
          note: "Windows is the default for the picks below. The MacBook Neo at $599 has made Apple a real budget option." }
      ]
    },
    {
      id: "work",
      short: "Work",
      ask: "What will you do on it?",
      why: "Heavier work needs more memory and a better screen. Light work doesn't, and paying for more is the most common waste.",
      options: [
        { id: "light", label: "Web, email, documents, video calls",
          note: "A budget laptop with at least 8GB of RAM handles this, though 16GB lasts longer." },
        { id: "school", label: "School or office all day", needs: ["longbattery"],
          must: ["Battery life from an independent test, not the maker's claim"],
          note: "Tom's Guide tests battery with web browsing at 150 nits of screen brightness, which is closer to real use than a maker's video test." },
        { id: "heavy", label: "Photo, video, coding or many tabs", tier: "mid", needs: ["ram16"],
          must: ["At least 16GB of RAM, bought up front"],
          note: "Tom's Guide says that if you want a thin laptop with soldered memory, do not settle for less than 16GB." }
      ]
    },
    {
      id: "years",
      short: "Years",
      ask: "How long do you want it to last?",
      why: "Most new laptops solder the RAM to the board, so the memory you buy is the memory you keep. Apple charges $200 for an extra 8GB, which is far more than a DIY upgrade.",
      options: [
        { id: "short", label: "2 to 3 years, then I'll replace it",
          note: "You can save by choosing lower specs, as long as the laptop does today's work." },
        { id: "long", label: "5 years or more", tier: "mid", needs: ["ram16"],
          must: ["16GB of RAM as configured, since soldered memory can't be added later"],
          note: "Guides name 16GB as the sensible floor, and suggest more for long-term ownership." },
        { id: "upgrade", label: "I want to upgrade it myself", needs: ["upgrade"], form: { "windows": 3 },
          must: ["Socketed RAM or a modular design; check the maker's spec for the exact model"],
          note: "Tom's Guide points to business laptops with socketed RAM. The Framework Laptop 13 is built to be user-upgradeable." }
      ]
    },
    {
      id: "timing",
      short: "Timing",
      ask: "Do you need it right now?",
      why: "Memory costs are pushing laptop prices up. IDC expects the shortage to last well into 2027, so waiting is unlikely to be cheaper.",
      options: [
        { id: "now", label: "Yes, in the next few weeks",
          note: "Sales events still cut prices on models already in stock. Compare the exact configuration, not just the model name." },
        { id: "wait", label: "No, I can wait",
          note: "Tom's Guide says it may be smarter to buy before prices climb higher than to wait." }
      ]
    }
  ],

  brandColumns: ["Apple", "Windows makers", "Chromebooks"],
  brandRows: [
    { label: "Examples", cells: ["MacBook Air M5, MacBook Neo", "Dell XPS, Lenovo ThinkPad, ASUS Vivobook, Framework", "Asus Chromebook CX15 and Plus CX34"] },
    { label: "What stands out", cells: ["Long battery life and quiet fanless designs; Tom's Guide measured 15 hours 30 minutes on the Air M5", "The most choice, from under $700 to premium OLED. Tom's Guide rates the XPS 14 the best Windows laptop", "Low prices: $269 for the CX15 per Tom's Guide and $399 for the CX34 per PCWorld"] },
    { label: "Upgrades", cells: ["None. RAM and storage are soldered", "Varies. Most thin models are soldered; some business models and the Framework are not", "None to speak of"] },
    { label: "Watch out for", cells: ["Apple's price for extra RAM and storage. The MacBook Neo has 8GB and can't be upgraded", "Cheap models with 8GB of RAM or small storage, and specs that differ by configuration", "Mediocre screens and fan noise, per PCWorld, and a web-first system"] }
  ],
  brandVerdict: "Pick the system first, then check the exact configuration. The model name matters less than the RAM, storage and screen of the specific version you're buying, which ASUS itself warns can differ.",

  traps: [
    { claim: "\"8GB is plenty\"", reality: "Guides call 16GB the sensible floor for 2026. Apple has made 16GB the baseline on its MacBooks, except the 8GB MacBook Neo." },
    { claim: "\"Up to 18 hours of battery\"", reality: "TechRadar says makers' claims rely on lab conditions and should be treated as a baseline. Laptop Mag found one laptop lasted only a few hours against a claim of more than 25." },
    { claim: "\"I'll add RAM later\"", reality: "Most thin laptops solder the RAM, per Acer and CNET, so you can't upgrade after you buy. Check the maximum supported capacity first if the RAM is socketed." },
    { claim: "\"Same model name, same laptop\"", reality: "ASUS warns that listed specs may not apply to every configuration, so the exact product number matters. Check RAM and storage on the listing you're buying." },
    { claim: "\"A great deal at $300\"", reality: "Itechguides advises that 4GB Windows laptops and 64GB Chromebooks are usually poor primary computers, and 128GB Windows laptops are restrictive." },
    { claim: "\"Prices will drop soon\"", reality: "TechRadar reports PC makers expect 15 to 20% higher prices from the second half of 2026, and IDC says the shortage could last well into 2027." },
    { claim: "\"OLED means a great screen\"", reality: "BGR notes one OLED laptop with a stunning color range caps out at 300 nits of brightness, which is dim in sunlight. Check brightness in a review." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use reviewer and maker listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying. Laptop configurations vary, so confirm RAM and storage on the exact listing.",
  picksNote: "A short list of well-reviewed laptops. Laptops change every few months, so use these to learn what to look for and verify the current model and price.",
  picks: [
    { name: "Apple MacBook Neo", facts: { ram16: false, upgrade: false }, tier: "budget", form: "mac", checked: "2026-11",
      why: "Tom's Guide's best budget laptop at $599. It has 8GB of memory and 256GB of storage, and neither can be upgraded." },
    { name: "Asus Chromebook CX15", facts: {}, tier: "budget", form: "chromebook", checked: "2026-11",
      why: "Tom's Guide's best budget Chromebook at $269. PCWorld praises the keyboard and battery life but calls the screen mediocre and the fans noisy." },
    { name: "Asus Chromebook Plus CX34", facts: {}, tier: "budget", form: "chromebook", checked: "2026-11",
      why: "PCWorld's best Chromebook under $500, at $399 at Best Buy. It has zippy performance, but battery life isn't competitive." },
    { name: "ASUS Vivobook 16 M1605", facts: {}, tier: "budget", form: "windows", checked: "2026-11",
      why: "RTINGS' best laptop under $600. Choose a configuration with at least 16GB of RAM and a 512GB SSD, since specs vary by version." },
    { name: "Dell XPS 13 (2026)", facts: {}, tier: "budget", form: "windows", checked: "2026-11",
      why: "Tom's Guide's best budget Windows laptop, at just under $700, with few sacrifices. Its webcam is poor." },
    { name: "Apple MacBook Air 13-inch (M5)", facts: { ram16: true, upgrade: false, longbattery: true }, tier: "mid", form: "mac", checked: "2026-11",
      why: "TechRadar, Engadget and Tom's Guide call it the best laptop for most people. It starts at $1,099 with 16GB and 512GB, and Tom's Guide measured 15 hours 30 minutes of battery." },
    { name: "Lenovo ThinkPad T14 Gen 6", facts: { upgrade: true }, tier: "mid", form: "windows", checked: "2026-11",
      why: "Tom's Guide's survival guide recommends business laptops like this one for socketed RAM, solid build and reasonable prices. Check the exact RAM and price on the listing." },
    { name: "Framework Laptop 13", facts: { upgrade: true }, tier: "mid", form: "windows", checked: "2026-11",
      why: "Listed as the best for upgradeability, with user-replaceable RAM and storage. Pre-built models cost slightly more to start." },
    { name: "Dell XPS 14 (2026)", facts: { longbattery: true }, tier: "upper", form: "windows", checked: "2026-11",
      why: "Tom's Guide's best Windows laptop, with a 120Hz tandem OLED screen. Tom's Hardware says its battery life impresses, and a 32GB model was $1,519." },
    { name: "Lenovo ThinkPad X1 Carbon Gen 14 Aura", facts: {}, tier: "upper", form: "windows", checked: "2026-11",
      why: "Tom's Hardware lists it among the best Windows clamshells, with a sharp 1440p webcam. Its only real nitpick was how expensive it is." }
  ]
};
