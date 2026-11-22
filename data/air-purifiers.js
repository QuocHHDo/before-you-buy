// Category content for the air purifier page.
window.SITE_DATA = {
  category: "air-purifiers",
  title: "Before you buy an air purifier",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My air purifier result: Before You Buy",
  defaultForm: "medium",

  forms: {
    "small": "Small room (bedroom or office, up to about 220 sq ft)",
    "medium": "Medium room (living room or large bedroom, up to about 360–400 sq ft)",
    "large": "Large or open space (400 sq ft and up)"
  },

  needDefs: {
    cheapFilters: { label: "Filters about $50 a year or less", fact: "cheapFilters", is: true },
    smart: { label: "App control and air-quality sensor", fact: "smart", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $130",
      adds: "True HEPA filtering for a small or medium room. The Levoit Core 300 is $99.99 and the Coway Airmega 100 is $119.99.",
      missing: "Big-room coverage, app control on most units, and low running costs on every model.",
      bestFor: "A bedroom or office.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$130–250",
      adds: "Higher airflow (CADR 246–289 on the popular models), auto mode, and an app with an air-quality monitor on some.",
      missing: "A design object. Dyson's units cost more than twice as much for similar airflow.",
      bestFor: "A living room or large bedroom."
    },
    {
      id: "upper",
      value: 0.95,
      name: "Upper",
      range: "$250+",
      adds: "Big-room coverage, premium design, quieter fans on some, and Dyson's extra features.",
      missing: "Clearly more clean air per dollar. A $550 Dyson lists CADR 290 against 260 for a roughly $150 Levoit.",
      bestFor: "Open-plan spaces, or when looks matter.",
      badge: "Paying for design"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend up front?",
      why: "Your needs and your budget don't always agree. Setting a ceiling lets the result tell you what you'd give up, instead of recommending something you won't buy. Remember filters add to this every year.",
      options: [
        { id: "130", label: "Under $130", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. That buys a small-room unit well." },
        { id: "250", label: "Up to $250", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, which covers the popular medium-room units." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "room",
      short: "Room",
      ask: "How big is the room?",
      why: "Room size is the most important choice. A purifier too small for the room barely changes the air, and makers' coverage numbers are generous. AHAM's rule of thumb is a smoke CADR of at least two-thirds of the floor area in square feet.",
      options: [
        { id: "small", label: "Small (up to ~220 sq ft)", form: { "small": 3 },
          note: "A bedroom or office. The Levoit Core 300 is listed for about 215–220 sq ft." },
        { id: "medium", label: "Medium (up to ~360–400 sq ft)", form: { "medium": 3 },
          note: "A living room or large bedroom. Units like the Coway AP-1512HH list 361 sq ft and the Levoit Core 400S 403." },
        { id: "large", label: "Large or open (400+ sq ft)", tier: "mid", form: { "large": 3 },
          must: ["A smoke CADR of at least two-thirds of your floor area in square feet"],
          note: "Large-room units start around $190, or run two smaller ones." }
      ]
    },
    {
      id: "use",
      short: "Why",
      ask: "What are you trying to clear?",
      why: "The CADR number differs for smoke, dust and pollen. Smoke particles are the smallest, so smoke CADR is the one to check if you care about wildfire or cooking smoke.",
      options: [
        { id: "allergy", label: "Dust, pollen, pet dander",
          note: "Look for True HEPA and a CADR that fits the room." },
        { id: "smoke", label: "Wildfire or cooking smoke", tier: "mid",
          must: ["The smoke CADR figure (not just dust or pollen), plus extra headroom"],
          note: "Run it on a higher setting, and size up. Smoke CADR is the number AHAM's room rule uses." },
        { id: "general", label: "General freshness",
          note: "Any True HEPA unit sized for the room works." }
      ]
    },
    {
      id: "filters",
      short: "Filters",
      ask: "How much do you want to spend on filters each year?",
      why: "Filters are the real price of an air purifier. Consumer Reports estimated one popular Blueair at about $212 a year for filters and electricity, and one unit with washable filters at $88.",
      options: [
        { id: "low", label: "As little as possible", needs: ["cheapFilters"],
          must: ["Filters around $50 a year or less, or washable filters"],
          note: "The Levoit Core 400S filters run about $40–50 a year and the Coway Halo's are $49.99 a year, versus $80–100 for a Dyson." },
        { id: "ok", label: "I'll pay for filters", skip: ["Cheap filters"],
          note: "Still check the price of one set before you buy." }
      ]
    },
    {
      id: "smart",
      short: "Smart",
      ask: "Do you want an app and air-quality readout?",
      why: "An app can show live air quality and run auto mode. It's convenient, but it adds nothing to cleaning.",
      options: [
        { id: "yes", label: "Yes", needs: ["smart"],
          must: ["Wi-Fi app control and an air-quality sensor"],
          note: "Levoit's Vital and Core S models and the Blueair 311i Max have apps." },
        { id: "no", label: "No, buttons are fine", skip: ["App control"],
          note: "The Coway AP-1512HH has no app and is still a top pick at several outlets." }
      ]
    },
    {
      id: "extras",
      short: "Extras",
      ask: "Does it advertise an ionizer, plasma or \"fresh air\" mode?",
      why: "Some purifiers make ozone on purpose or as a by-product. California's Air Resources Board warns against ozone generators and says ionizers and similar tech can add ozone.",
      options: [
        { id: "yes", label: "Yes, it has an ionizer or plasma feature",
          must: ["A CARB-certified model, with the ionizer turned off if you can"],
          note: "CARB limits indoor air cleaners to 0.050ppm of ozone and certifies compliant models. Check its list." },
        { id: "no", label: "No, it's just a filter and a fan",
          note: "That is the simplest, safest design." }
      ]
    }
  ],

  brandColumns: ["Purifier specialists", "Big appliance names", "Random no-name"],
  brandRows: [
    { label: "Examples", cells: ["Levoit, Coway, Blueair, Winix", "Dyson, Shark", "Unbranded marketplace units"] },
    { label: "What stands out", cells: ["Most of the 2026 test lists. Levoit has the best app in the price range per one review; Coway's Mighty is a top pick", "Dyson for design; Shark's NeverChange has washable filters", "Cheap listings with big claims you can't check"] },
    { label: "Software", cells: ["Levoit's VeSync app; Blueair's app; Coway Mighty has none", "Dyson's app", "Usually none"] },
    { label: "Watch out for", cells: ["Filter costs vary a lot between models", "High up-front price (Dyson TP07 about $550)", "Ozone generators sold as purifiers. CARB keeps a list of models to avoid"] }
  ],
  brandVerdict: "A specialist brand with True HEPA and a CADR that fits your room beats a prettier machine. The biggest risks are a unit too small for the room, filters that cost more than the machine, and any device that makes ozone.",

  traps: [
    { claim: "\"Covers 1,875 sq ft\"", reality: "Coverage claims are generous. By AHAM's two-thirds rule, a smoke CADR of 289 suits about 430 sq ft, not 1,875. Use CADR, not the square-foot badge." },
    { claim: "\"Ionizer\" / \"plasma\" / \"fresh mountain air\"", reality: "CARB warns that some products make ozone on purpose and that phrases like these can mean ozone. It advises against ozone generators in occupied spaces and against uncertified air cleaners." },
    { claim: "\"Cheap to buy\"", reality: "Filters decide the cost. Consumer Reports estimated about $212 a year for one popular Blueair against $88 for a washable-filter unit." },
    { claim: "\"CADR 232\" or \"CADR 243\"", reality: "Reviews list different CADR for the same Winix 5500-2. Use the maker's AHAM smoke figure and treat blog numbers as approximate." },
    { claim: "\"Whisper quiet\"", reality: "Noise is usually quoted at the lowest setting. Consumer Reports found a Blueair pretty noisy at its highest, and one reviewer says Auto mode noise is what drives people to turn units off." },
    { claim: "\"Sold on Amazon\"", reality: "California requires every indoor air cleaner sold there, online included, to be CARB certified. Check the label and the certified list." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use maker, retailer or reviewer listings, not our own testing. CADR figures come from review sites and differ between them. A ? means we haven't confirmed that spec.",
  picksNote: "Well-reviewed units, sorted by typical price. Several of these were sale prices, and many reviews use affiliate links, so check the current price.",
  picks: [
    { name: "Levoit Core 300", facts: {}, tier: "budget", form: "small", checked: "2026-11",
      why: "NBC's pick for small rooms at $99.99. Filters last up to 12 months and it is beginner-friendly, but airflow is lower. About 215–220 sq ft." },
    { name: "Coway Airmega 100", facts: {}, tier: "budget", form: "small", checked: "2026-11",
      why: "NBC's runner-up for small rooms, $119.99 (was $129.99). Same trade-off: small and simple, lower CADR." },
    { name: "Winix 5500-2", facts: { cheapFilters: false }, tier: "budget", form: "medium", checked: "2026-11",
      why: "About $120 with about 360 sq ft of coverage per Techsifted, which puts filters at roughly $50–60 a year. CADR is listed as 232 or 243 depending on the source." },
    { name: "Levoit Core 400S", facts: { cheapFilters: true, smart: true }, tier: "mid", form: "medium", checked: "2026-11",
      why: "About $150. Techsifted lists CADR 260, up to 403 sq ft, filters about $40–50 a year, and the best app in its price range." },
    { name: "Coway Airmega AP-1512HH (Mighty)", facts: { smart: false }, tier: "mid", form: "medium", checked: "2026-11",
      why: "Around $180. BestReviews and several lists pick it for most homes: CADR 246, about 361 sq ft, no app." },
    { name: "Levoit Vital 200S-P", facts: { smart: true }, tier: "mid", form: "large", checked: "2026-11",
      why: "About $190, CADR 289, with an app and air-quality monitor. Its 1,875 sq ft badge is generous: by AHAM's rule, 289 CADR fits about 430 sq ft." },
    { name: "Blueair Blue Pure 311i Max", facts: { smart: true }, tier: "mid", form: "large", checked: "2026-11",
      why: "About $190, CADR 250, with an app. Reviewers praise its quiet running, but Consumer Reports found another Blueair noisy at the highest speed." },
    { name: "Levoit Core 600S-P", facts: {}, tier: "upper", form: "large", checked: "2026-11",
      why: "$269.99 on sale, ranked third of nine for a large room with pets by Dupple's CADR-per-dollar table. Check the full price." },
    { name: "Dyson Purifier Cool TP07", facts: { cheapFilters: false }, tier: "upper", form: "large", checked: "2026-11",
      why: "About $550, CADR 290 and up to 800 sq ft per Techsifted, with filters at $80–100 a year. A premium design for similar airflow to a $150 unit." }
  ]
};
