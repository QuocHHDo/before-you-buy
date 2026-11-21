// Category content for the headphones page.
// To add a new category later, copy this file's shape (e.g. data/keyboards.js).
window.SITE_DATA = {
  category: "headphones",
  title: "Before you buy headphones",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",

  forms: {
    "earbuds": "Wireless earbuds",
    "over-ear": "Wireless over-ear headphones",
    "wired-iem": "Wired in-ear monitors (IEMs)",
    "wired-over-ear": "Wired open-back over-ear",
    "gaming": "Gaming headset"
  },

  tiers: [
    {
      id: "budget",
      value: 0.38,
      name: "Budget",
      range: "Under $50",
      adds: "Decent sound, basic Bluetooth, OK battery life.",
      missing: "Good noise cancelling, good call mic, multipoint, consistent build quality.",
      bestFor: "Gym, backups, anything you might lose or break."
    },
    {
      id: "mid",
      value: 0.76,
      name: "Mid",
      range: "$50–150",
      adds: "Real noise cancelling (ANC), an app with EQ, multipoint on many models, better fit and battery.",
      missing: "The very best ANC and mics, premium materials.",
      bestFor: "Most people. The best value per dollar.",
      badge: "Best value"
    },
    {
      id: "upper",
      value: 0.9,
      name: "Upper",
      range: "$150–300",
      adds: "Strong ANC, good call mics, ecosystem perks (e.g. AirPods with iPhone), better comfort.",
      missing: "Not much. Mostly polish.",
      bestFor: "Daily commuters, frequent callers, people who wear them for hours.",
      badge: "Returns start shrinking"
    },
    {
      id: "premium",
      value: 0.96,
      name: "Premium",
      range: "$300+",
      adds: "Best-in-class ANC, top mic processing, premium materials, the brand name.",
      missing: "Sound quality improves very little over the upper tier.",
      bestFor: "Frequent flyers who want the absolute best ANC.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend?",
      why: "Your needs and your budget don't always agree. Setting a ceiling lets the result tell you exactly what you'd give up, instead of quietly recommending something you won't buy.",
      options: [
        { id: "50", label: "Under $50", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. If your other answers need more, your result will list what you give up." },
        { id: "150", label: "Up to $150", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, which covers most people's needs." },
        { id: "300", label: "Up to $300", budgetCap: "upper",
          note: "Sets your ceiling at upper tier. You may not need to spend all of it." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. The result will still tell you the lowest tier that covers your needs." }
      ]
    },
    {
      id: "use",
      short: "Use",
      ask: "Where will you mostly use them?",
      why: "This decides the form factor before anything else. The best headphones for a plane are the wrong headphones for a treadmill.",
      options: [
        { id: "commute", label: "Commute & travel", form: { "over-ear": 2, "earbuds": 2 },
          note: "Noise cancelling matters most here. The next noise question decides how much." },
        { id: "gym", label: "Gym & running", form: { "earbuds": 3 },
          must: ["Sweat rating of IPX4 or higher", "Secure fit (wing tips or ear hooks)"],
          skip: ["Premium sound — you won't hear the difference over gym music and noise"],
          note: "Durability and fit beat sound quality here. Cheap is fine." },
        { id: "desk", label: "Desk / at home", form: { "over-ear": 2, "wired-over-ear": 1 },
          note: "Comfort over hours matters more than portability." },
        { id: "gaming", label: "Gaming", form: { "gaming": 3 },
          must: ["Low-latency connection (wired or 2.4 GHz USB dongle)"],
          note: "Bluetooth delay is noticeable in fast games." },
        { id: "mixed", label: "A bit of everything", form: { "earbuds": 2, "over-ear": 1 },
          note: "Earbuds are the most flexible single choice." }
      ]
    },
    {
      id: "calls",
      short: "Calls",
      ask: "Will you take calls or meetings on them?",
      why: "Mic quality varies far more than sound quality does. Cheap earbuds often sound fine for music but make you sound bad to everyone else.",
      options: [
        { id: "often", label: "Often (daily meetings)", tier: "mid",
          must: ["A call mic that reviews actually tested (look for mic sample recordings)"],
          note: "The mic is where cheap pairs cut corners most. Spend at least mid tier." },
        { id: "sometimes", label: "Sometimes", note: "Most mid-tier pairs are fine for occasional calls." },
        { id: "rarely", label: "Rarely", skip: ["Paying extra for mic quality"] }
      ]
    },
    {
      id: "noise",
      short: "Noise",
      ask: "How loud is where you'll use them?",
      why: "Noise cancelling (ANC) is one of the few features that genuinely gets better as you spend more. If you don't need it, it's the easiest place to save money.",
      options: [
        { id: "loud", label: "Loud every day (planes, trains, open office)", tier: "upper", form: { "over-ear": 1 },
          must: ["Strong ANC (check measured noise isolation in reviews)"],
          note: "Strong ANC starts in the upper tier. Over-ear blocks more than earbuds." },
        { id: "some", label: "Sometimes noisy", tier: "mid",
          must: ["ANC — mid-tier ANC is good enough"] },
        { id: "quiet", label: "Mostly quiet", skip: ["ANC — passive isolation is enough for you"],
          note: "Skipping ANC saves money and usually gives longer battery life." }
      ]
    },
    {
      id: "phone",
      short: "Phone",
      ask: "What phone do you use?",
      why: "Some headphones unlock extra features only with certain phones. Paying for perks your phone can't use is wasted money.",
      options: [
        { id: "iphone", label: "iPhone",
          must: ["AAC Bluetooth codec (iPhone's best wireless format)"],
          note: "AirPods add auto-switching between Apple devices, Find My, and one-tap pairing. Real perks, but only inside Apple's ecosystem." },
        { id: "samsung", label: "Samsung Android",
          note: "Galaxy Buds unlock Samsung-only extras like auto-switching between Galaxy devices." },
        { id: "android", label: "Other Android",
          note: "Look for LDAC or aptX if you care about wireless sound quality. Skip AirPods — most of their extras won't work." },
        { id: "mixed", label: "Mix of devices",
          must: ["Multipoint Bluetooth"],
          note: "Platform-neutral brands (Sony, Bose, Sennheiser, Soundcore) work the same everywhere." }
      ]
    },
    {
      id: "multipoint",
      short: "Devices",
      ask: "Will you switch between two devices, like a laptop and phone?",
      why: "Multipoint lets headphones stay connected to two devices at once, so a call on your phone interrupts laptop music automatically. Without it, you re-pair manually every time.",
      options: [
        { id: "yes", label: "Yes, all the time", tier: "mid",
          must: ["Multipoint Bluetooth (check the spec — it's often missing on budget pairs)"] },
        { id: "no", label: "No, one device", skip: ["Multipoint"] }
      ]
    },
    {
      id: "lifespan",
      short: "Lifespan",
      ask: "How long do you want them to last?",
      why: "Wireless earbud batteries usually fade noticeably after 2–3 years and are rarely replaceable. When the battery goes, the earbuds go.",
      options: [
        { id: "short", label: "1–2 years is fine" },
        { id: "long", label: "3+ years", form: { "over-ear": 1, "wired-iem": 1, "wired-over-ear": 1 },
          must: ["Replaceable ear pads (for over-ear)"],
          note: "Over-ears last longer than earbuds; wired lasts longest because there's no battery." }
      ]
    },
    {
      id: "latency",
      short: "Latency",
      ask: "Do you play competitive games or care about audio delay?",
      why: "Bluetooth adds a delay between what you see and what you hear. Video apps hide it; fast games can't.",
      options: [
        { id: "competitive", label: "Yes, competitive games", form: { "gaming": 2, "wired-iem": 1 },
          must: ["Wired or 2.4 GHz dongle — not Bluetooth"] },
        { id: "video", label: "Just videos and casual games",
          note: "Bluetooth delay is fine. Video apps compensate for it." },
        { id: "no", label: "Not really" }
      ]
    },
    {
      id: "sound",
      short: "Sound",
      ask: "How much do you care about sound quality?",
      why: "Wireless headphone prices mostly go to batteries, chips, ANC and mics — not sound. If sound is what you care about, wired gives far more per dollar.",
      options: [
        { id: "fine", label: "I just want it to sound good",
          skip: ["Audiophile-level sound — above mid tier the differences are subtle"] },
        { id: "between", label: "Somewhere in between" },
        { id: "detail", label: "I notice details — best sound per dollar", form: { "wired-iem": 2, "wired-over-ear": 1 },
          note: "A $20–60 wired in-ear from a well-reviewed value brand often beats $200+ wireless on pure sound." }
      ]
    }
  ],

  brandColumns: ["Big brand", "Value brand (well reviewed)", "Random no-name"],
  brandRows: [
    { label: "Examples", cells: ["Sony, Bose, Apple, Sennheiser", "Soundcore, CMF, Moondrop, Truthear", "Unknown Amazon listings"] },
    { label: "Sound per dollar", cells: ["Fair — part of the price is the name", "Often the best", "A lottery"] },
    { label: "Consistency", cells: ["High", "Mostly good", "Varies unit to unit"] },
    { label: "Warranty & support", cells: ["Solid, easy returns", "Usually responsive", "Often none in practice"] },
    { label: "Firmware & app updates", cells: ["For years", "Some", "Rare"] },
    { label: "ANC & mic", cells: ["Best", "Good, a step behind", "Weak, or mislabeled (see traps)"] },
    { label: "Reviews you can trust", cells: ["Widely lab-tested", "Often lab-tested", "Few, or fake"] }
  ],
  brandVerdict: "\"Unbranded\" really means two different things. Value brands with real reviews are often the smartest buy. Truly random no-name listings are a gamble — the low price isn't worth it if you end up buying twice.",

  traps: [
    { claim: "\"Hi-Res Audio\" sticker on wireless", reality: "Bluetooth compresses audio. The badge is not a sound-quality guarantee." },
    { claim: "\"20 Hz – 40 kHz frequency range\"", reality: "Nearly every headphone claims this. It says nothing about how they sound — measured frequency response graphs in reviews do." },
    { claim: "\"Bigger drivers = better sound\"", reality: "Driver size tells you very little. Tuning matters far more." },
    { claim: "\"Up to 50 hours of battery\"", reality: "Usually measured with ANC off at moderate volume. Expect less in real use." },
    { claim: "\"ENC noise cancelling\"", reality: "ENC cleans up your voice for the person you're calling. It does nothing to block noise for you — that's ANC." },
    { claim: "\"Waterproof\"", reality: "IPX4 means sweat and splashes. IPX7 survives a brief dunk. Neither means swimming." },
    { claim: "\"Studio quality\" / \"audiophile\"", reality: "Marketing words with no standard behind them." },
    { claim: "\"10,000+ five-star reviews\"", reality: "On unknown brands, reviews can be bought or merged across products. Prefer independent lab tests." }
  ],

  // When each pick was added. Give a pick its own `checked: "2027-03"` once you verify its current price.
  picksListed: "2026-11",
  picksNote: "Well-reviewed models, sorted by typical street price. Prices move a lot — check the current price and recent reviews before buying.",
  picks: [
    { name: "JLab Go Air Pop", tier: "budget", form: "earbuds", why: "Very cheap and light. Basic mic, no ANC. Fine as a gym or backup pair." },
    { name: "Soundcore P20i", tier: "budget", form: "earbuds", why: "Cheap and decent-sounding. No ANC." },
    { name: "Soundcore Life Q20", tier: "budget", form: "over-ear", why: "Budget over-ear with basic ANC. Bulky but comfortable for the price." },
    { name: "Soundcore Q20i", tier: "budget", form: "over-ear", why: "Similar to the Life Q20 with an app for EQ. Basic ANC." },
    { name: "Moondrop Chu II", tier: "budget", form: "wired-iem", why: "Value-brand wired in-ear praised for sound far above its price." },
    { name: "7Hz Salnotes Zero", tier: "budget", form: "wired-iem", why: "Another well-reviewed budget wired in-ear with a neutral tuning." },
    { name: "HyperX Cloud Stinger 2", tier: "budget", form: "gaming", why: "Light wired gaming headset with a usable mic. Basic build." },

    { name: "Soundcore Space Q45", tier: "mid", form: "over-ear", why: "Strong ANC and multipoint for the price. A go-to value ANC pick." },
    { name: "Sony WH-CH720N", tier: "mid", form: "over-ear", why: "Light and comfortable with decent ANC from a big brand." },
    { name: "Soundcore Space A40", tier: "mid", form: "earbuds", why: "Good ANC earbuds without the flagship price." },
    { name: "CMF Buds Pro 2", tier: "mid", form: "earbuds", why: "Feature-packed value earbuds from Nothing's budget brand." },
    { name: "Truthear Zero:Red", tier: "mid", form: "wired-iem", why: "Well-tuned wired in-ear; a common best-sound-per-dollar pick." },
    { name: "Moondrop Aria 2", tier: "mid", form: "wired-iem", why: "Step-up wired in-ear with a smooth, easy-listening tuning." },
    { name: "Philips SHP9500", tier: "mid", form: "wired-over-ear", why: "Classic budget open-back. Very comfortable, airy sound, light on bass." },
    { name: "Sennheiser HD 599", tier: "mid", form: "wired-over-ear", why: "Comfortable open-back from a big brand, often on sale in this range." },
    { name: "HyperX Cloud III", tier: "mid", form: "gaming", why: "Wired gaming headset: comfortable, solid mic, zero wireless lag." },

    { name: "Apple AirPods Pro 3", tier: "upper", form: "earbuds", why: "Best pick for iPhone users: strong ANC, great calls, Apple ecosystem perks." },
    { name: "Samsung Galaxy Buds4 Pro", tier: "upper", form: "earbuds", why: "The Samsung-phone counterpart to AirPods Pro." },
    { name: "Sennheiser Momentum 4 Wireless", tier: "upper", form: "over-ear", why: "Very long battery life and sound-first tuning. Often discounted." },
    { name: "Sony WH-1000XM5", tier: "upper", form: "over-ear", why: "Last generation's flagship, now often discounted into this tier. Still excellent ANC." },
    { name: "Sennheiser HD 560S", tier: "upper", form: "wired-over-ear", why: "Open-back wired headphones for detailed sound at home. Leaks sound; no ANC." },
    { name: "SteelSeries Arctis Nova 7 Wireless", tier: "upper", form: "gaming", why: "2.4 GHz dongle plus Bluetooth at once. A popular wireless gaming pick." },
    { name: "Logitech G PRO X 2 LIGHTSPEED", tier: "upper", form: "gaming", why: "Low-latency wireless gaming headset with long battery life." },

    { name: "Sony WH-1000XM6", tier: "premium", form: "over-ear", why: "Top-tier ANC and features." },
    { name: "Bose QuietComfort Ultra Headphones (2nd Gen)", tier: "premium", form: "over-ear", why: "Top-tier ANC with a famously comfortable fit." },
    { name: "Bowers & Wilkins Px8 S2", tier: "premium", form: "over-ear", why: "Luxury materials and build. You're paying for design more than features." },
    { name: "Sony WF-1000XM6", tier: "premium", form: "earbuds", why: "Flagship ANC earbuds that work well on any phone." },
    { name: "Technics EAH-AZ100", tier: "premium", form: "earbuds", why: "Flagship earbuds with strong sound and three-device multipoint." },
    { name: "Sennheiser HD 600", tier: "premium", form: "wired-over-ear", why: "Long-running reference open-back. Benefits from a headphone amp." },
    { name: "Audeze Maxwell 2", tier: "premium", form: "gaming", why: "High-end wireless gaming headset known for its sound." }
  ]
};
