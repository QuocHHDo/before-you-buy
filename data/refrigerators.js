// Category content for the refrigerator page. Same shape as the other guides.
// Prices are street or listed prices from roundups and retailers. Sales move them a lot.
window.SITE_DATA = {
  category: "refrigerators",
  title: "Before you buy a refrigerator",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My refrigerator result: Before You Buy",
  defaultForm: "freezer",

  forms: {
    "freezer": "Top- or bottom-freezer (simpler, usually more reliable)",
    "frenchdoor": "French-door (most features, shakier reliability)"
  },

  needDefs: {
    dispenser: { label: "A water dispenser on the outside of the door", fact: "dispenser", is: true },
    counterdepth: { label: "Counter-depth (sits flush with cabinets)", fact: "counterdepth", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $1,200",
      adds: "A plain, well-tested fridge. Abt lists a Frigidaire 18.3 cubic foot top-freezer at $699, and Consumer Reports' top-rated top-freezer, a Samsung, is listed around $695 to $700.",
      missing: "Door dispensers and most smart features. Consumer Reports says top-freezers may lack icemakers and water dispensers.",
      bestFor: "Most households that want cold food and few repairs.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$1,200–2,500",
      adds: "A big French-door with a dispenser or a counter-depth look. One roundup lists the LG LRFLC2706S at $1,797, and another lists a Frigidaire Gallery counter-depth at $2,079.",
      missing: "Reliability. Consumer Reports says French-door fridges as a group are not very reliable.",
      bestFor: "People who want the French-door layout and accept the repair risk."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$2,500+",
      adds: "Premium build and the best food-keeping scores. Abt lists a Bosch French-door at $3,899, and Consumer Reports' top bottom-freezer, a 30-inch Miele, is listed at $2,999.",
      missing: "Value. Consumer Reports found a top-freezer at about $700 earned the top score in its class.",
      bestFor: "Kitchens with a built-in look and buyers who want the longest warranty and best build.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend?",
      why: "Consumer Reports lists French-door fridges at $1,000 to $5,000 and bottom-freezers at $600 to $2,900. Digital Trends puts the cheapest at $800 to $1,000. Delivery, haul-away and a water line kit can be extra.",
      options: [
        { id: "1200", label: "Under $1,200", budgetCap: "budget",
          note: "Sets your ceiling at budget tier." },
        { id: "2500", label: "Up to about $2,500", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, where most French-doors sit." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "style",
      short: "Style",
      ask: "What matters most: fewer repairs or more features?",
      why: "Consumer Reports says French-door models are more than half of what its members buy, but most brands score middling or worse for predicted reliability. Bosch and Fisher & Paykel are the exceptions. Its survey also found top- and bottom-freezers tend to be more reliable.",
      options: [
        { id: "reliable", label: "Fewer repairs", form: { "freezer": 4 },
          note: "Consumer Reports says top-freezers often last longer, though their controls can be hard to reach. Bottom-freezers put fresh food at eye level and often cost less to run." },
        { id: "features", label: "The French-door layout and features", form: { "frenchdoor": 4 },
          note: "Consumer Reports says French-doors come with more features such as icemakers and spillproof shelves. Their narrow freezers make wide items like pizza boxes hard to store." },
        { id: "cheap", label: "Whatever costs least", form: { "freezer": 2 },
          note: "BestReviews puts top-freezers at roughly $475 to $1,000, and says you'll rarely find more than 20 cubic feet near $500." }
      ]
    },
    {
      id: "ice",
      short: "Ice",
      ask: "Do you want ice and water on the door?",
      why: "Consumer Reports' survey data, as reported by Quartz, estimates 31 percent of refrigerators with ice makers develop a problem within five years. It says ice makers and dispensers are the most common failures. CHOICE adds that an ice maker takes space you could use for food.",
      options: [
        { id: "door", label: "Yes, from the door", needs: ["dispenser"],
          note: "Check which parts you actually use. An internal water dispenser, which some LG and Bosch models have, keeps the door plain." },
        { id: "tray", label: "Ice trays or a freezer ice maker are fine",
          note: "A freezer ice maker is a simpler setup. Bottom-freezers usually come with an icemaker but rarely a water dispenser, says Consumer Reports." },
        { id: "none", label: "I don't use ice",
          note: "You can skip the feature and its repair risk." }
      ]
    },
    {
      id: "fit",
      short: "Fit",
      ask: "Does it have to sit flush with your cabinets?",
      why: "Consumer Reports says refrigerators often stick out up to 10 inches beyond cabinets, and that counter-depth models give up some storage. Wayfair says to measure the height of overhead cabinets too, since counter-depth models can be taller.",
      options: [
        { id: "flush", label: "Yes, a built-in look", needs: ["counterdepth"], tier: "mid",
          must: ["A counter-depth model, which gives up some storage"],
          note: "One roundup says the LG LRFLC2706S gives up about 4 cubic feet to a standard-depth model at a similar price. Counter-depth French-doors in the roundups start near $1,800." },
        { id: "standard", label: "Standard depth is fine",
          note: "Lowe's says standard-depth models stick out about 6 inches past the counter and offer more storage." },
        { id: "unsure", label: "I haven't measured",
          note: "Measure width, depth, height and door swing before shopping. Appliance Parts Pros says to check door swing clearance against walls, counters and islands." }
      ]
    },
    {
      id: "size",
      short: "Size",
      ask: "How much do you store?",
      why: "Best Buy says each adult needs 4 to 6 cubic feet. Consumer Reports says manufacturers recommend 19 to 22 cubic feet for a family of four, and up to 30 or 33 for big weekly shops. A fridge that's too small gets crowded and keeps uneven temperatures.",
      options: [
        { id: "small", label: "One or two people",
          note: "About 10 to 14 cubic feet by the 4 to 6 per adult rule. A 28-inch top-freezer fits." },
        { id: "family", label: "A family of three or four",
          note: "Aim for about 19 to 22 cubic feet." },
        { id: "large", label: "A big household or bulk shopping",
          note: "Look at 25 cubic feet and up. Consumer Reports says 36-inch French-doors reach about 25 cubic feet, against 22 for the roomiest 30-inch models." }
      ]
    }
  ],

  brandColumns: ["LG", "Bosch and Fisher & Paykel", "Samsung and others"],
  brandRows: [
    { label: "Examples", cells: ["LRFLC2706S, LRMVS2806S, LT18S2100W top-freezer", "Bosch 800 Series B36CT80SNS, B36FD50SNS", "Samsung RT70F18LRSR, Whirlpool, GE, Hisense, Frigidaire"] },
    { label: "What stands out", cells: ["Quartz reports LG is the only brand in the top two for all three styles Consumer Reports scored: first in top-freezers, second in French-doors and side-by-sides", "Consumer Reports says they are the exceptions among French-door brands for predicted reliability", "Consumer Reports named a Samsung its best top-freezer, a 28-inch with excellent temperature control"] },
    { label: "Watch out for", cells: ["Consumer Reports says LG French-doors get middling reliability, while LG bottom-freezers get exemplary scores", "Listed prices are high: Abt lists a Bosch French-door at $3,899", "Consumer Reports says many complaints involved Samsung French-door models, with poor predicted reliability and owner satisfaction"] }
  ],
  brandVerdict: "Pick the style before the brand. Reliability varies more between styles than between brands, and the same brand can score well in one and middling in another.",

  traps: [
    { claim: "\"Smart features\"", reality: "CHOICE says smart fridges aren't a smart buy yet and advises caution before paying extra for them. Samsung's top-rated top-freezer shows Wi-Fi can come cheap, so don't pay a premium for it." },
    { claim: "\"Ice and water on the door\"", reality: "Consumer Reports' data, as reported by Quartz, shows 31 percent of fridges with ice makers develop a problem within five years. It says icemakers and dispensers are the most common reliability complaints." },
    { claim: "\"French-door is the premium choice\"", reality: "Consumer Reports says French-doors as a group are not very reliable, and that if reliability is your top priority you should consider a top- or bottom-freezer." },
    { claim: "\"Counter-depth fits flush, same space\"", reality: "Counter-depth models give up storage. One roundup says the LG LRFLC2706S gives up about 4 cubic feet to a same-price standard-depth model." },
    { claim: "\"27 cubic feet\"", reality: "Abt's listing for the LG LRFLC2706S is titled 27 cubic feet but describes 26.5. Check the exact figure and the fresh-food and freezer split." },
    { claim: "\"It will fit\"", reality: "Appliance Parts Pros says to check door swing against walls and counters. Wayfair says to measure overhead cabinet height too, especially for counter-depth models." },
    { claim: "\"Bigger is better\"", reality: "Best Buy says 4 to 6 cubic feet per adult is enough. Too small means crowding, but a huge fridge also costs more and adds space you won't use." }
  ],

  picksListed: "2026-11",
  factsNote: "Door dispenser and depth checks use retailer, reviewer and roundup listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying. Prices move with sales, and tiers follow regular prices, and sale prices can run several hundred dollars lower.",
  picksNote: "A short list of well-reviewed refrigerators. Models and prices change, so use these to learn what to look for and verify the model number, depth and current price.",
  picks: [
    { name: "Samsung RT70F18LRSR top-freezer", facts: {}, tier: "budget", form: "freezer", checked: "2026-11",
      why: "Quartz reports Consumer Reports ranked it the best top-freezer, a 28-inch model listed at $695 to $699.99 with Wi-Fi and a quiet motor. Check the door dispenser and ice maker, which weren't listed." },
    { name: "Frigidaire ADA 18.3 cubic foot top-freezer", facts: {}, tier: "budget", form: "freezer", checked: "2026-11",
      why: "Abt lists the 30-inch stainless model at $699. Check the ice maker and the exact depth." },
    { name: "Hisense HRB171N6ASE bottom-freezer", facts: { dispenser: false }, tier: "budget", form: "freezer", checked: "2026-11",
      why: "Reviewed's best-value bottom-freezer, with no water dispenser and no smart features. Reviewed says it needs calibration but holds steady temperatures. Lowe's lists it at $1,099, and deals have run $499 to $649." },
    { name: "LG LRFLC2706S counter-depth French-door", facts: { dispenser: false, counterdepth: true }, tier: "mid", form: "frenchdoor", checked: "2026-11",
      why: "Abt lists it as a 26.5 cubic foot counter-depth model, and one roundup lists it at $1,797 with an internal dispenser. Check the price, since listings vary." },
    { name: "GE GNE27JYMFS French-door", facts: {}, tier: "mid", form: "frenchdoor", checked: "2026-11",
      why: "A roundup lists it at about $1,800, with 27 cubic feet split into 18.81 fresh and 8.18 freezer. Check the depth and dispenser." },
    { name: "Frigidaire Gallery GRMC2273CF counter-depth French-door", facts: { dispenser: true, counterdepth: true }, tier: "mid", form: "frenchdoor", checked: "2026-11",
      why: "One roundup lists it at $2,079 with 21.5 cubic feet and a through-the-door dispenser. Check the price and the capacity." },
    { name: "LG LRMVS2806S door-in-door French-door", facts: { counterdepth: false }, tier: "mid", form: "frenchdoor", checked: "2026-11",
      why: "An appliance dataset lists it as standard depth at 27.8 cubic feet, with a $3,699 list price and a $2,499 street price. Check the live price." },
    { name: "Bosch 800 Series B36CT80SNS counter-depth French-door", facts: { dispenser: false, counterdepth: true }, tier: "upper", form: "frenchdoor", checked: "2026-11",
      why: "One roundup lists it at $3,999 with 20.8 cubic feet and an internal dispenser. Consumer Reports says Bosch is an exception on French-door reliability. Check the price." },
    { name: "Miele 30-inch bottom-freezer", facts: {}, tier: "upper", form: "freezer", checked: "2026-11",
      why: "Quartz reports Consumer Reports ranked it the best bottom-freezer at $2,999, with excellent results across its tests. Check the model number, since Miele sells several." }
  ]
};
