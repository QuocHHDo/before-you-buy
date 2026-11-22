// Category content for the washer and dryer page. Same shape as the other guides.
// Prices are for washer and dryer sets where a set price was listed. Sales and rebates move them a lot.
window.SITE_DATA = {
  category: "laundry",
  title: "Before you buy a washer and dryer",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My washer and dryer result: Before You Buy",
  defaultForm: "frontload",

  forms: {
    "frontload": "Front-load washer (cleans best, uses the least water)",
    "topload": "Top-load washer (easy to load, usually cheaper)"
  },

  needDefs: {
    heatpump: { label: "A heat pump dryer (ventless, lower running cost)", fact: "heatpump", is: true },
    stackable: { label: "Stackable (fits a closet)", fact: "stackable", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $1,500",
      adds: "A set that washes and dries. This Old House says sets can cost under $1,000 for budget-friendly models, and Abt lists an LG laundry center with a ventless heat pump dryer at $1,449.",
      missing: "Extra features. The budget set PopSci picked has a physical knob, no Wi-Fi and a 3.7 cubic foot washer.",
      bestFor: "A first home, a small household, or a replacement where price matters most.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$1,500–2,500",
      adds: "Top-tested machines with smart and steam features. Quartz lists the LG WM4000HWA and DLEX4000W set at $1,700 with Energy Star, Wi-Fi and a steam cycle.",
      missing: "The lowest price. Check the capacity of both machines, since a bigger washer needs a bigger dryer.",
      bestFor: "Most households that want a reliable, well-tested pair."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$2,500+",
      adds: "High-capacity sets with smart features. This Old House says sets run upwards of $2,500 for high-capacity models with smart features, and Quartz lists the LG WM6500HWA and DLEX6500W at $2,600.",
      missing: "Value if you don't use the extra capacity or features. Consumer Reports found a front-loader at $848 earned the top overall washer score it tested.",
      bestFor: "Large households or buyers who want the biggest drums and the most features.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend on the pair?",
      why: "Price depends on whether you buy a set, and sales come often. Abt lists an LG laundry pair promotion of $100 off from 11/04/2026 to 12/02/2026, so check dates before you pay full price. Delivery, hookups and haul-away may be extra.",
      options: [
        { id: "1500", label: "Under $1,500 for both", budgetCap: "budget",
          note: "Sets your ceiling at budget tier." },
        { id: "2500", label: "Up to about $2,500", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, where the top-tested sets sit." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "wash",
      short: "Washer",
      ask: "Which washer do you want?",
      why: "Consumer Reports says the best front-loaders clean more thoroughly and gently than high-efficiency (HE) top-loaders and agitator machines, using less water: about 10 gallons on average, against 13 for HE top-loaders and 20 for agitators.",
      options: [
        { id: "front", label: "Best cleaning and the least water", form: { "frontload": 4 },
          note: "Consumer Reports says front-loaders spin faster, which extracts more water and cuts dryer time. They take longer per cycle than HE top-loaders and need bending, so a pedestal can help." },
        { id: "top", label: "Easy loading, no bending", form: { "topload": 4 },
          note: "Consumer Reports says HE top-loaders are easy to load, but may wash inconsistently and twist items. Agitator models cost less and are faster." },
        { id: "cheap", label: "Whatever costs least", form: { "topload": 2 },
          note: "Consumer Reports calls top-load agitators the least expensive washer option. They use the most water, about 20 gallons per load." }
      ]
    },
    {
      id: "dryer",
      short: "Dryer",
      ask: "How often do you run the dryer?",
      why: "Heat pump dryers cost more to buy and less to run. Yale Appliance puts the premium at about $650 over a vented dryer, with roughly 50% energy savings, or about $175 a year at $0.28 per kWh. Check your own rates.",
      options: [
        { id: "rare", label: "A few loads a week, or I air-dry a lot",
          note: "A vented dryer costs less up front. Consumer NZ puts the lifetime cost of vented at about $1,600 and heat pump at over $2,400 in its market." },
        { id: "regular", label: "Most days",
          note: "Heat pump savings add up at this use. Choice says they're a good choice for heavy users." },
        { id: "heavy", label: "Daily, or I have no outside vent", needs: ["heatpump"], tier: "mid",
          must: ["A heat pump dryer (ventless), usually at a higher price"],
          note: "Heat pump dryers need no vent. One roundup says federal HEAR rebates cover them at up to $840, with some states adding their own, so check whether you qualify. Choice says they can't get the air as hot as a vented dryer." }
      ]
    },
    {
      id: "space",
      short: "Space",
      ask: "Where will they go?",
      why: "House Digest lists not measuring first as a common mistake. Digital Trends says to check whether front-loaders are stackable, since not all are.",
      options: [
        { id: "room", label: "A laundry room with space",
          note: "Measure width, depth and door swing, plus hookups and a vent or outlet." },
        { id: "closet", label: "A closet or stack", form: { "frontload": 3 }, needs: ["stackable"],
          note: "Look for stackable models or a laundry center. Tom's Guide says to check that your front-loader is stackable before buying." },
        { id: "unsure", label: "I haven't measured",
          note: "Measure first. The LG laundry center listed by Abt is 27 inches wide and 74.38 inches tall." }
      ]
    },
    {
      id: "size",
      short: "Size",
      ask: "How much laundry do you wash at once?",
      why: "Capacity is the drum volume in cubic feet. The Christian Science Monitor says to check the exact capacity and not rely on terms like \"extra large.\" Best Buy puts compact washers under 4 cubic feet, standard at 4 to 4.5, and large above 4.5.",
      options: [
        { id: "small", label: "One or two people, small loads",
          note: "A compact or standard washer works. Hunker says compact washers hold about five to 10 pounds." },
        { id: "family", label: "A family with a few loads a week",
          note: "Aim for a standard-to-large washer. Appliance Parts Pros says a 5.0 cubic foot washer should pair with a dryer of at least 7.0." },
        { id: "large", label: "A big household, bulky bedding",
          note: "Look at large-capacity models and pair a dryer of about double the washer's volume. Hunker says to choose a dryer that holds twice as much as your washer." }
      ]
    }
  ],

  brandColumns: ["LG", "Speed Queen", "Samsung and others"],
  brandRows: [
    { label: "Examples", cells: ["WM4000HWA with DLEX4000W, the heat pump laundry center WKHC252HWA", "TR5 top-load washer with DR5 dryer", "Samsung Bespoke and Smart sets, Electrolux, Whirlpool, GE"] },
    { label: "What stands out", cells: ["Consumer Reports says LG models are prominent among its top-rated front-loaders, with excellent performance, efficiency and reliability ratings, and that its best HE top-loaders are all LG", "Designbeep says they use mechanical controls and commercial-grade parts, designed to last around 25 years", "Consumer Reports' brand survey also praised Samsung, Electrolux, Whirlpool and GE"] },
    { label: "Watch out for", cells: ["Model numbers differ in capacity and dryer type, so check each one", "Designbeep lists a 3.2 cubic foot TR5 washer, which is small, and the pair runs about $2,600 at retailers", "A customer-review roundup on AOL reported that one smart Whirlpool front-loader lost Wi-Fi constantly"] }
  ],
  brandVerdict: "Check the washer type, the dryer type and both capacities before the brand. The cheapest pair can cost more over time, and a well-reviewed machine in the wrong size won't fit your laundry.",

  traps: [
    { claim: "\"Extra-large capacity\"", reality: "The Christian Science Monitor says to check the exact cubic feet and not rely on words like \"extra large.\" HGTV says a compact front-load washer holds only about five pounds." },
    { claim: "\"Front-loaders never smell\"", reality: "Consumer Reports' member surveys found 17 percent of front-load owners say theirs had mold or mildew, against 3 percent of top-load owners." },
    { claim: "\"Dryers are all the same\"", reality: "Choice says heat pump dryers use around a third of the energy of a vented dryer and cost less to run, but they can't get the air as hot. Consumer NZ found vented dryers scored 74 for drying performance, against 60 for heat pump on average." },
    { claim: "\"Wi-Fi makes it better\"", reality: "Appliance Parts Pros says you'll use three or four cycles at most and to skip complicated touchscreens. A roundup of customer reviews on AOL reported that one smart Whirlpool front-loader lost Wi-Fi constantly." },
    { claim: "\"It will fit\"", reality: "House Digest says to measure before buying. Digital Trends says not all front-loaders are stackable, so check before you plan a stack." },
    { claim: "\"The washer and dryer sizes don't need to match\"", reality: "Appliance Parts Pros says to pair a 5.0 cubic foot washer with a dryer of at least 7.0. Hunker says to choose a dryer that holds twice as much as your washer." },
    { claim: "\"The fastest cycle is best\"", reality: "Consumer Reports says front-loaders take longer than HE top-loaders but spin faster, which extracts more water and reduces dryer time." }
  ],

  picksListed: "2026-11",
  factsNote: "Dryer and stacking checks use maker, retailer and reviewer listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying. Prices move with sales, and tiers for sets without a confirmed price are estimates.",
  picksNote: "A short list of well-reviewed washer and dryer pairs. Models and prices change, so use these to learn what to look for and verify the model number, capacity and current price.",
  picks: [
    { name: "Insignia NS-TWM35W1 washer and NS-TDRE67W1 dryer", facts: {}, tier: "budget", form: "topload", checked: "2026-11",
      why: "PopSci's best-budget pick, with a physical knob and no Wi-Fi. Best Buy sells the washer and the dryer at about $400 each on sale. The washer holds 3.7 cubic feet, and the dryer's cord and vent kit are sold separately." },
    { name: "LG laundry center WKHC252HWA", facts: { heatpump: true, stackable: true }, tier: "budget", form: "frontload", checked: "2026-11",
      why: "Abt lists it at $1,449 with a 5.0 cubic foot front-load washer and a 7.8 cubic foot ventless heat pump dryer in one stack. Check the 120V and 240V power needs and the current price." },
    { name: "LG WM4000HWA washer with DLEX4000W dryer", facts: { heatpump: false }, tier: "mid", form: "frontload", checked: "2026-11",
      why: "Quartz lists the set at $1,700, with Energy Star, Wi-Fi and a steam cycle. The dryer is listed as electric, not as a heat pump model. Check the stacking kit if you need it." },
    { name: "LG WT6100CW washer with DLE6100W dryer", facts: {}, tier: "mid", form: "topload", checked: "2026-11",
      why: "Quartz lists the set at $1,500, and says the washer's smaller 4.3 cubic foot capacity keeps the price down. Check the dryer type and your space." },
    { name: "LG smart top-load washer with smart gas dryer", facts: { heatpump: false, stackable: false }, tier: "mid", form: "topload", checked: "2026-11",
      why: "This Old House lists a 5.5 cubic foot washer and 7.3 cubic foot gas dryer, Energy Star certified and not stackable. We couldn't confirm a set price. One club retailer lists LG 7.3 cubic foot gas dryers alone at about $700 to $950, so the mid tier is our estimate. Check that you have a gas line." },
    { name: "LG WM6500HWA washer with DLEX6500W dryer", facts: {}, tier: "upper", form: "frontload", checked: "2026-11",
      why: "Quartz lists the set at $2,600 with Energy Star certification. A fit for large households. Check both capacities and whether you need the size." },
    { name: "Speed Queen TR5 washer with DR5 dryer", facts: {}, tier: "upper", form: "topload", checked: "2026-11",
      why: "Designbeep says it uses mechanical controls and is designed to last around 25 years, but retailers list a 3.2 cubic foot washer, which is small. Retailers list the TR5 washer near $1,230 and the DR5 dryer at $1,330 to $1,500, so about $2,600 for the pair. Check the capacity." }
  ]
};
