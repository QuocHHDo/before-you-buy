// Category content for the electric toothbrush page. Same shape as headphones.js.
window.SITE_DATA = {
  category: "toothbrushes",
  title: "Before you buy an electric toothbrush",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My electric toothbrush result: Before You Buy",
  defaultForm: "oscillating",

  forms: {
    "oscillating": "Oscillating-rotating (round head)",
    "sonic": "Sonic (slim, vibrating head)"
  },

  // What each "must have" is checked against on a pick's `facts`.
  needDefs: {
    pressure: { label: "Pressure sensor", fact: "pressure", is: true },
    ada: { label: "ADA Seal", fact: "ada", is: true },
    app: { label: "App", fact: "app", is: true },
    travelCase: { label: "Travel case", fact: "travelCase", is: true },
    battery14: { label: "2+ weeks battery", fact: "batteryDays", min: 14 }
  },

  tiers: [
    {
      id: "budget",
      value: 0.82,
      name: "Budget",
      range: "Under $50",
      adds: "The part the research is about: a brush that moves well, a 2-minute timer, and often a pressure sensor and the ADA Seal.",
      missing: "Apps, extra modes, a travel case, long battery life.",
      bestFor: "Most people. It already does the main job.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.9,
      name: "Mid",
      range: "$50–120",
      adds: "More modes (sensitive, whitening), better battery life, and app connection from around Oral-B's iO Series 5.",
      missing: "Screens, AI coaching, premium build.",
      bestFor: "People who want sensitive-gum modes or an app."
    },
    {
      id: "upper",
      value: 0.95,
      name: "Upper",
      range: "$120–250",
      adds: "App coaching, a travel case, more modes, nicer build. Some models add a display.",
      missing: "Little that the cheaper tiers can't do for cleaning, though Consumer Reports rated one $230 model well on cleaning alone.",
      bestFor: "Heavy app users and people who want gum-care modes.",
      badge: "Returns start shrinking"
    },
    {
      id: "premium",
      value: 0.97,
      name: "Premium",
      range: "$250+",
      adds: "Colour screens, live coaching chargers, wireless docks.",
      missing: "Clear proof that it cleans better than the tier below.",
      bestFor: "People who enjoy the tech and don't mind paying for it.",
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
          note: "Sets your ceiling at budget tier. That's still enough for a brush that does what the research is about." },
        { id: "120", label: "Up to $120", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, which covers an app and extra modes." },
        { id: "250", label: "Up to $250", budgetCap: "upper",
          note: "Sets your ceiling at upper tier. Few people need more than this." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "gums",
      short: "Gums",
      ask: "Do you press hard when you brush, or have sensitive or bleeding gums?",
      why: "Brushing too hard can damage gums. A pressure sensor is the one feature on these brushes built for safety, and some of the cheapest models include one.",
      options: [
        { id: "yes", label: "Yes, or I'm not sure", needs: ["pressure"],
          must: ["Pressure sensor (check whether it lights up, buzzes or just slows the brush)"],
          note: "Bleeding gums that keep happening are worth a dentist visit. A new brush won't fix the cause." },
        { id: "no", label: "No",
          note: "Several budget brushes include a pressure sensor anyway, so you may get one at no extra cost." }
      ]
    },
    {
      id: "proof",
      short: "Proof",
      ask: "Do you want an independent check that it works?",
      why: "The ADA Seal means the maker supplied evidence of safety and plaque removal, reviewed by the ADA's scientific council. It's voluntary, so a brush without it isn't necessarily worse.",
      options: [
        { id: "yes", label: "Yes, I want the ADA Seal", needs: ["ada"],
          must: ["ADA Seal of Acceptance (confirm on ADA.org's product list)"] },
        { id: "no", label: "Not that fussed",
          note: "No seal doesn't mean a brush doesn't work. Brands have to apply for it." }
      ]
    },
    {
      id: "smart",
      short: "App",
      ask: "Do you want an app or screen that coaches your brushing?",
      why: "Apps and screens are what separate the mid and upper tiers. The plaque trials compare brush motions, not apps, so treat them as a nice-to-have.",
      options: [
        { id: "yes", label: "Yes, I like the data", tier: "mid", needs: ["app"],
          must: ["App connection (Oral-B's app starts at the iO Series 5)"],
          note: "App connection starts around the $100–120 mark. Screens and AI coaching cost more." },
        { id: "no", label: "No, just clean my teeth",
          skip: ["Apps, screens and AI coaching"],
          note: "This is where most of the price gap lives, so skipping it saves the most." }
      ]
    },
    {
      id: "travel",
      short: "Travel",
      ask: "Will you travel with it often?",
      why: "Travel cases and battery life vary a lot. Some cases also charge the brush; others only protect it.",
      options: [
        { id: "yes", label: "Yes, often", needs: ["travelCase", "battery14"],
          must: ["Travel case and 2+ weeks of battery"],
          note: "A case that doubles as a charger is not a given. Some only protect the brush, so check the listing." },
        { id: "no", label: "Rarely", skip: ["Travel case"] }
      ]
    },
    {
      id: "heads",
      short: "Heads",
      ask: "How will you buy replacement heads?",
      why: "Heads need replacing about every 3 months. Over three years they can cost more than the brush itself, which makes them the real running cost.",
      options: [
        { id: "official", label: "Official heads only",
          must: ["Check the head price before you buy (iO heads cost more than standard Oral-B heads)"],
          note: "Official heads run about $6–20 each depending on brand and series, so four a year adds up." },
        { id: "compatible", label: "Cheaper compatible heads are fine",
          note: "Third-party packs of 10 run about $15–20. Check that your brush accepts them before you buy." },
        { id: "unsure", label: "I hadn't thought about it",
          note: "Plan for about four heads a year. Look up the head price before you pick a brush." }
      ]
    },
    {
      id: "dexterity",
      short: "Fit",
      ask: "Do you have braces or implants, or find manual brushing hard?",
      why: "The ADA says electric brushes may be easier to use if you have dexterity problems or dental appliances. Head choice matters more in that case, so it's worth asking your dentist.",
      options: [
        { id: "yes", label: "Yes",
          must: ["Ask your dentist or orthodontist which head to use"],
          note: "An electric brush is often easier here. Your dentist can tell you which head suits braces or implants." },
        { id: "no", label: "No" }
      ]
    },
    {
      id: "feel",
      short: "Head",
      ask: "Which brush head shape do you prefer?",
      why: "Round oscillating heads (Oral-B style) have the most trial evidence. Slim sonic heads (Sonicare style) feel more like a regular brush. The best brush is the one you'll actually use twice a day.",
      options: [
        { id: "round", label: "Round head", form: { "oscillating": 2 } },
        { id: "slim", label: "Slim, like a regular brush", form: { "sonic": 2 },
          note: "Round oscillating heads did better than side-to-side brushes in short-term trials, but powered brushes overall beat manual ones." },
        { id: "none", label: "No preference", form: { "oscillating": 1 },
          note: "We lean round because most of the trial evidence is on oscillating brushes." }
      ]
    }
  ],

  brandColumns: ["Big brand", "Newer brands", "Random no-name"],
  brandRows: [
    { label: "Examples", cells: ["Oral-B, Philips Sonicare", "Burst, Quip, Suri, AquaSonic", "Unknown Amazon listings"] },
    { label: "Evidence", cells: ["Most clinical trials and ADA Seals sit here", "Mixed. Several do well in independent plaque tests; one reviewer found a popular design-led brush left plaque behind", "Rarely published"] },
    { label: "ADA Seal", cells: ["On most main models", "Some", "Check ADA.org"] },
    { label: "Replacement heads", cells: ["$6–20 each; cheap compatible packs exist", "Often by subscription or one shape only", "Check before buying"] },
    { label: "Warranty", cells: ["Commonly 2 years", "Varies", "Check the listing"] }
  ],
  brandVerdict: "Brand matters less than three things: the brushing motion, whether you can keep buying heads, and the price you actually pay. Big brands have most of the clinical trials and ADA Seals. Newer brands can test well, but look for independent results. Unknown listings are the risk.",

  traps: [
    { claim: "\"Removes up to 7x (or 10x, or 20x) more plaque\"", reality: "These are company comparisons against a manual brush. The independent Cochrane review found about 11% less plaque after 1–3 months and 21% less after three months." },
    { claim: "\"#1 dentist recommended\"", reality: "Oral-B's own fine print says it is based on dentist surveys carried out for the company. It's a popularity claim, not a cleaning test." },
    { claim: "\"Pressure sensor\"", reality: "It can mean a light ring, a buzz and pulsing sound, or just the brush slowing down. Check which one, because only some tell you." },
    { claim: "\"Smart brushing coach\"", reality: "Apps start around iO Series 5. The trials behind the plaque numbers compare brush motions, not apps, and TechRadar says a diligent brusher could get away with a cheaper brush than the iO 10." },
    { claim: "\"No ADA Seal, so it must be worse\"", reality: "The Seal is voluntary. A brush without it just hasn't been submitted for review." },
    { claim: "Cheap brush, cheap to run", reality: "Heads should be replaced about every 3 months. Official heads cost about $6–20 each, which can add up to more than the brush over a few years." },
    { claim: "\"Was $380, now $250\"", reality: "Flagship prices swing a lot. One Oral-B flagship ranged from £278 to £880 in a year, so check the price history, not the crossed-out number." }
  ],

  // When each pick was added. Each pick below also has `checked` for when its price was last checked.
  picksListed: "2026-11",
  factsNote: "Must-have checks use manufacturer, retailer or reviewer listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying.",
  picksNote: "Well-reviewed models, sorted by typical street price. Prices swing a lot, so check the current price and which model is current before buying.",
  picks: [
    { name: "Oral-B Pro 1000", facts: { pressure: true, ada: true }, tier: "budget", form: "oscillating", checked: "2026-11",
      why: "The basic Oral-B: round head, pressure sensor, 2-minute timer and the ADA Seal. About $40–50, with widely sold heads." },
    { name: "Philips Sonicare ProtectiveClean 4100", facts: { pressure: true }, tier: "budget", form: "sonic", checked: "2026-11",
      why: "Consumer Reports listed it around $40, and it has a built-in pressure sensor. Philips has launched newer lines, so check which model is current." },
    { name: "Suri Core 1.0", tier: "mid", form: "sonic", checked: "2026-11",
      why: "TechRadar's pick for a good-looking sonic brush with a long battery, at about $75." },
    { name: "Oral-B iO Series 3", facts: { pressure: true, ada: true, app: false, batteryDays: 14 }, tier: "mid", form: "oscillating", checked: "2026-11",
      why: "Entry iO with a visible pressure ring and three modes. No app, two-week battery. About $90." },
    { name: "Oral-B iO Series 5", facts: { pressure: true, ada: true, app: true, travelCase: true }, tier: "mid", form: "oscillating", checked: "2026-11",
      why: "The first iO with an app, plus five modes and a hard travel case. About $100–120." },
    { name: "Oral-B iO Series 7", facts: { pressure: true, ada: true, app: true }, tier: "upper", form: "oscillating", checked: "2026-11",
      why: "Adds a display on top of the iO 5. Typically $160–220, though it has been discounted to about $120." },
    { name: "Philips Sonicare 7100", facts: { pressure: true, app: true, travelCase: true, batteryDays: 21 }, tier: "upper", form: "sonic", checked: "2026-11",
      why: "Visual pressure sensor, app, charging travel case and a three-week battery. About $160." },
    { name: "Philips Sonicare DiamondClean Smart 9300", facts: { pressure: true, app: true, travelCase: true }, tier: "upper", form: "sonic", checked: "2026-11",
      why: "Consumer Reports said it earns its place on cleaning alone. About $200–230. The travel case doesn't charge the brush." },
    { name: "Oral-B iO Series 10", facts: { pressure: true, app: true, travelCase: true }, tier: "premium", form: "oscillating", checked: "2026-11",
      why: "Colour screen and a live-coaching charger. List is $350–400, but it has sold for $250–370. Worth waiting for a sale." }
  ]
};
