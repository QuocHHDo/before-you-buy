// Category content for the mattress page. Same shape as the other guides.
// Prices are queen sale prices as reviewers listed them in 2026. Mattress "list prices" are rarely what anyone pays.
window.SITE_DATA = {
  category: "mattresses",
  title: "Before you buy a mattress",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My mattress result: Before You Buy",
  defaultForm: "coils",

  forms: {
    "foam": "All foam (bed in a box, hugs the body, can sleep warm)",
    "coils": "Hybrid or innerspring (coils under the foam, more bounce and airflow)"
  },

  needDefs: {
    trial365: { label: "A sleep trial of a full year", fact: "trial365", is: true },
    lifetime: { label: "A lifetime warranty", fact: "lifetime", is: true },
    firmchoice: { label: "More than one firmness to choose from", fact: "firmchoice", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $600",
      adds: "A bed that does the basics. Tom's Guide picks the Siena Signature as its best cheap mattress at $399 for a queen.",
      missing: "Long trials and warranties are less common here. Tom's Guide says 2026 tariffs have raised prices and shrunk the number of quality budget options.",
      bestFor: "A guest room, a kid's room or a first bed.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$600–1,800",
      adds: "Beds with year-long trials and lifetime warranties. Tom's Guide lists the DreamCloud Classic Hybrid at $699, the Nectar Classic at $649 and the Nectar Luxe at $1,249 for a queen.",
      missing: "Real list prices. Tom's Guide says the Nectar Luxe's $3,424 queen price is brought down to $1,249 for most of the year.",
      bestFor: "Most people, most of the time."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$1,800+",
      adds: "Premium hybrids and innersprings. Sleep Foundation lists the Helix Midnight Luxe at $1,874 and the WinkBed at $2,061, and Homes & Gardens lists a Saatva Classic at $1,804 in an early Black Friday sale, down from $2,229.",
      missing: "Better value per dollar. Trial rules still apply: Sleep Foundation lists the WinkBed with 120 nights and a 30-night requirement.",
      bestFor: "Back pain, hot sleepers and people who want specific firmness options.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend on a queen?",
      why: "Tom's Guide says 2026 mattress tariffs have pushed list prices higher and cut the number of quality budget beds. Ignore list prices: TechRadar says to disregard the MSRP, since DreamCloud never sells at it.",
      options: [
        { id: "600", label: "Under $600", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. Check the trial and warranty carefully here." },
        { id: "1800", label: "Up to about $1,800", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, where year-long trials and lifetime warranties are common." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "position",
      short: "Position",
      ask: "How do you sleep, and how much do you weigh?",
      why: "Tom's Guide says firmness is subjective on its 1 to 10 scale, and to let position and body weight do most of the talking.",
      options: [
        { id: "side", label: "On my side",
          note: "Tom's Guide says side sleepers need soft to medium-firm, with cushioning on top for shoulders and hips." },
        { id: "backstomach", label: "On my back or stomach",
          note: "Tom's Guide says medium-firm suits most back and stomach sleepers of average weight, 130 to 230 pounds." },
        { id: "heavy", label: "Over 240 pounds, or I like it very firm",
          note: "Tom's Guide suggests firm for sleepers over 240 pounds, and a lighter sleeper around 130 pounds does better with medium-soft." }
      ]
    },
    {
      id: "trial",
      short: "Trial",
      ask: "Where will you buy it?",
      why: "Most online beds come with a sleep trial, and Tom's Guide calls it a golden rule to buy one that does. The fine print decides what 'free' means.",
      options: [
        { id: "online", label: "Online, with a sleep trial", needs: ["trial365"],
          must: ["A trial that lets you return it, with the minimum nights, pickup fees and condition rules checked before you pay"],
          note: "Sleep Foundation lists Nectar and WinkBed with a 30-night requirement before you can return. Tom's Guide says processing fees range from $20 to $200 at some brands." },
        { id: "store", label: "In a store",
          note: "Sleep Foundation says physical retailers often have more limited return policies and may charge restocking fees. NBC 5 says Costco takes mattresses back without a restocking fee if they're clean." }
      ]
    },
    {
      id: "years",
      short: "Years",
      ask: "How long do you want it to last?",
      why: "A warranty is not the same as lasting. Saatva says normal wear isn't typically covered, and a warranty usually covers sagging from a fault in the mattress.",
      options: [
        { id: "short", label: "Under 8 years, or a guest room",
          note: "A shorter warranty is fine if you'll replace it." },
        { id: "long", label: "10 years or more", tier: "mid", needs: ["lifetime"],
          must: ["Warranty terms that state how deep a dip is covered, since sagging claims depend on it"],
          note: "NBC 5 says Tempur-Pedic's 10-year warranty covers visible indentations of three-quarters of an inch or more, and not when caused by an unsupportive base." }
      ]
    },
    {
      id: "base",
      short: "Base",
      ask: "What will it sit on?",
      why: "The base can void the warranty. NBC 5 says a Tempur-Pedic indentation isn't covered if an unsupportive foundation caused it. Choice says to check the base is similar to your own when you test.",
      options: [
        { id: "frame", label: "A slatted frame or platform bed",
          note: "Check the maker's required slat spacing in the warranty." },
        { id: "adjustable", label: "An adjustable base",
          note: "Tom's Guide says the thickest mattresses aren't suitable for most adjustable bases, so check height and bendability." }
      ]
    }
  ],

  brandColumns: ["Nectar and DreamCloud", "Saatva, Helix and WinkBed", "Stores and big retailers"],
  brandRows: [
    { label: "Examples", cells: ["Nectar Classic and Luxe, DreamCloud Classic Hybrid", "Saatva Classic, Helix Midnight Luxe, WinkBed", "Costco and mattress shops"] },
    { label: "Trial and warranty", cells: ["365-night trials and lifetime warranties, per Tom's Guide and TechRadar", "Saatva Classic has 365 nights and a lifetime warranty, per Homes & Gardens. WinkBed has 120 nights with a 30-night requirement, per Sleep Foundation.", "Trials vary. Costco takes returns with no restocking fee, per NBC 5."] },
    { label: "Price reality", cells: ["List prices are far above what anyone pays: Tom's Guide says the Nectar Luxe's $3,424 queen sells for $1,249.", "Sale prices around $1,700 to $2,100 for a queen, per Tom's Guide and Sleep Foundation.", "Sale prices change often. Check the same model online."] },
    { label: "Watch out for", cells: ["Sleep Foundation lists a 30-night requirement for Nectar, and says White Glove delivery fees are nonrefundable.", "A 2020 Saatva post says it charged a $99 pickup fee on returns. Check the current policy.", "Which? says a trial advertised by the brand may not apply when you buy through another retailer."] }
  ],
  brandVerdict: "Read the return rules before the firmness. A 365-night trial with a 30-night minimum and a pickup fee is shorter and pricier than it sounds.",

  traps: [
    { claim: "\"365-night risk-free trial\"", reality: "Sleep Foundation lists a 30-night requirement for Nectar and WinkBed. Saatva says some companies require about 30 nights before a return, and Tom's Guide says processing fees range from $20 to $200 at some brands." },
    { claim: "\"Up to 60% off\"", reality: "Tom's Guide says DreamCloud states a $3,349 'total value' for a queen Luxe but never sells it above $1,599. TechRadar says to ignore the MSRP, since it's never sold at that price." },
    { claim: "\"Lifetime warranty\"", reality: "Saatva says normal wear isn't typically covered. NBC 5 says Tempur-Pedic's 10-year warranty covers dips of three-quarters of an inch or more, and only if the base is supportive." },
    { claim: "\"Free delivery\"", reality: "Sleep Foundation says Nectar's ground shipping is free in the contiguous U.S., but White Glove delivery starts at $199 and, per its Luxe Hybrid review, those fees are nonrefundable." },
    { claim: "\"Budget beds are cheap now\"", reality: "Tom's Guide says 2026 mattress tariffs have pushed list prices higher and shrunk the number of quality budget options." },
    { claim: "\"Firm is better for your back\"", reality: "Tom's Guide says to let sleep position and body weight decide: soft to medium-firm for side sleepers, medium-firm for most average-weight back and stomach sleepers, and firm over 240 pounds." },
    { claim: "\"Unbox it whenever\"", reality: "Tom's Guide says leaving a bed-in-a-box unboxed too long, or ignoring the unboxing steps, can lead to a refused refund or exchange. It also says to use a protector, since a stained mattress won't be accepted back." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use reviewer and maker listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying. Prices are queen sale prices that reviewers listed, and they move often.",
  picksNote: "A short list of well-reviewed mattresses. Models and sales change, so use these to learn what to look for and verify the current price and return rules.",
  picks: [
    { name: "Siena Signature", facts: {}, tier: "budget", form: "foam", checked: "2026-11",
      why: "Tom's Guide's best cheap mattress and its pick for back and stomach sleepers who want a cool, firm foam bed, at $399 for a queen. Check the trial and warranty." },
    { name: "Nectar Classic memory foam", facts: { trial365: true, lifetime: true }, tier: "mid", form: "foam", checked: "2026-11",
      why: "Tom's Guide lists a queen at $649 with a 365-night trial and lifetime warranty. Sleep Foundation lists a 30-night requirement before a return." },
    { name: "Nectar Luxe memory foam", facts: { trial365: true, lifetime: true }, tier: "mid", form: "foam", checked: "2026-11",
      why: "Tom's Guide lists a queen at $1,249 against a $3,424 list price, with a 365-night trial. Check the 30-night requirement." },
    { name: "DreamCloud Classic Hybrid", facts: { trial365: true, lifetime: true }, tier: "mid", form: "coils", checked: "2026-11",
      why: "Tom's Guide calls it the best mattress in a box it has tested, at $699 for a queen on sale. TechRadar lists $799 as typical, so check the current price." },
    { name: "Helix Midnight Luxe", facts: {}, tier: "upper", form: "coils", checked: "2026-11",
      why: "Tom's Guide's best for side sleepers, and Sleep Foundation's top pick, at $1,874. Check its trial and warranty terms." },
    { name: "Saatva Classic", facts: { trial365: true, lifetime: true, firmchoice: true }, tier: "upper", form: "coils", checked: "2026-11",
      why: "Tom's Guide's best mattress overall, with three firmness options, a 365-night trial and a lifetime warranty. A queen is listed at $2,229, with sales near $1,800. Check the return fee." },
    { name: "WinkBed", facts: { trial365: false, firmchoice: true }, tier: "upper", form: "coils", checked: "2026-11",
      why: "Sleep Foundation lists it at $2,061 with three firmness options, 120 nights and a 30-night requirement. Check the trial before buying." }
  ]
};
