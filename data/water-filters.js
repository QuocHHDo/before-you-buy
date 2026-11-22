// Category content for the drinking-water filter page (pitchers and under-sink). Same shape as the other guides.
// This guide is about what a certification covers and what replacement filters cost. It is not a water test.
window.SITE_DATA = {
  category: "water-filters",
  title: "Before you buy a water filter",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My water filter result: Before You Buy",
  defaultForm: "pitcher",

  forms: {
    "pitcher": "Pitcher (no install, you refill it)",
    "undersink": "Under-sink (plumbed in, higher capacity)"
  },

  needDefs: {
    lead: { label: "Certified to reduce lead (NSF/ANSI 53)", fact: "lead", is: true },
    pfas: { label: "Certified to reduce PFAS", fact: "pfas", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $60",
      adds: "A pitcher that fixes taste and, if certified, more. Consumer Reports says three pitchers it tested, including the Brita Denali with the Elite filter, are certified to NSF standards to reduce lead, chlorine and PFAS.",
      missing: "Capacity and convenience. You refill it, and Brita lists its large 10-cup filter at 40 gallons and a 2-month life.",
      bestFor: "One or two people who want better taste or a certified reduction in lead.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$60–300",
      adds: "Plumbed-in filtering with higher capacity. Consumer Reports says under-sink filters are more convenient than pitchers, with higher filter capacity, and that all those in its ratings are certified to NSF standards for reducing lead.",
      missing: "Zero installation effort. You need cabinet space, and some need drilling a faucet hole.",
      bestFor: "A household that drinks and cooks with a lot of filtered water."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$300+",
      adds: "Reverse osmosis (RO) systems certified to NSF/ANSI 58. Consumer Reports says the four point-of-use RO systems it tested were solid performers, priced from $350 to $2,200.",
      missing: "Low running costs. Consumer Reports says you can expect to pay hundreds of dollars more annually for filter replacements.",
      bestFor: "Water with dissolved contaminants a carbon filter doesn't cover, confirmed by a lab test.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend up front?",
      why: "The sticker price is the smaller part of the cost. Tapwaterdata says replacement media is 53 to 95% of five-year cost in every tier, and a certified pitcher's five-year total of $560 works out to $0.145 per drinking gallon.",
      options: [
        { id: "60", label: "Under $60", budgetCap: "budget",
          note: "Sets your ceiling at budget tier, which is pitcher territory." },
        { id: "300", label: "Up to about $300", budgetCap: "mid",
          note: "Sets your ceiling at mid tier. Consumer Reports says the under-sink filters it tested cost between $86 and nearly $700 before installation." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "worry",
      short: "Worry",
      ask: "What do you want out of your water?",
      why: "Certifications cover different things. NSF/ANSI 42 covers aesthetic effects like taste, NSF/ANSI 53 covers health effects, and NSF/ANSI 58 covers reverse osmosis. The EPA says a lead claim must appear with NSF/ANSI 53 text on the packaging and the Performance Data Sheet.",
      options: [
        { id: "taste", label: "Better taste and less chlorine",
          note: "NSF/ANSI 42 is the certification for taste and odor. A certified pitcher covers it." },
        { id: "lead", label: "Less lead (older pipes)", needs: ["lead"],
          must: ["A lead claim certified to NSF/ANSI 53"],
          note: "Look for NSF/ANSI 53 and the lead claim on the packaging. Consumer Reports says certification doesn't mean a filter reduces all possible contaminants." },
        { id: "pfas", label: "Less PFAS", needs: ["lead", "pfas"],
          must: ["A PFAS claim certified to NSF/ANSI 53, or 58 for reverse osmosis"],
          note: "Consumer Reports says look for NSF/ANSI 53, or 58 for reverse osmosis, followed by the maker's claim that it removes PFAS. If your water has none, there's little need to splurge on a pricey under-sink filter." }
      ]
    },
    {
      id: "volume",
      short: "Volume",
      ask: "How much filtered water do you use?",
      why: "A pitcher holds a few cups, and the filter is rated in gallons. Brita lists its large 10-cup filter at 40 gallons and a 2-month life, so heavy use means changing it often.",
      options: [
        { id: "little", label: "Drinking water for one or two people",
          note: "A pitcher keeps up with that." },
        { id: "some", label: "Drinking and some cooking",
          note: "Either form can work. Count how often you'd refill a pitcher." },
        { id: "lots", label: "A family that drinks and cooks with it", form: { "undersink": 3 }, tier: "mid",
          must: ["Under-sink capacity, so you don't refill a pitcher all day"],
          note: "Consumer Reports says under-sink filters have no pouring and waiting: you flip the lever and filtered water flows." }
      ]
    },
    {
      id: "setup",
      short: "Setup",
      ask: "Can you install something under the sink?",
      why: "Under-sink systems need cabinet space and plumbing work. Consumer Reports' under-sink prices exclude installation costs.",
      options: [
        { id: "renter", label: "I rent, or I don't want to install anything", form: { "pitcher": 3 },
          note: "A pitcher needs no tools and no landlord approval." },
        { id: "diy", label: "I can install it myself",
          note: "Either form works. Check the space under your sink first." },
        { id: "pro", label: "I'll hire a plumber", form: { "undersink": 2 },
          note: "Budget for the installer on top of the system price." }
      ]
    },
    {
      id: "source",
      short: "Source",
      ask: "Where does your water come from?",
      why: "Consumer Reports says to use an EPA-certified lab if your utility doesn't test for PFAS or you use well water. A filter is a guess until you know what's in your water.",
      options: [
        { id: "city", label: "City water that publishes a quality report",
          note: "Read your utility's report first. It tells you what to filter." },
        { id: "city-no", label: "City water, but I haven't read the report",
          note: "Read it before you buy. A certified pitcher is an inexpensive start." },
        { id: "well", label: "A private well",
          note: "Test it at an EPA-certified lab before buying. Your results decide the filter, not a roundup." }
      ]
    }
  ],

  brandColumns: ["Pitchers", "Under-sink filters", "Reverse osmosis (RO)"],
  brandRows: [
    { label: "Examples", cells: ["Brita Denali with Elite filter, ZeroWater, Amazon Basics", "Frizzlife SK99, Waterdrop 10UA", "APEC ROES-50, iSpring RCC7-BN"] },
    { label: "What stands out", cells: ["Consumer Reports says three tested pitchers are certified to NSF standards for lead, chlorine and PFAS", "Consumer Reports says all those in its ratings are certified for lead, with higher capacity than pitchers", "Listed as NSF/ANSI 58 certified, which covers reverse osmosis systems"] },
    { label: "Watch out for", cells: ["Water Filter Guru says the Waterdrop PT-07B is certified only to NSF/ANSI 42, while the Amazon Basics pitcher has its claims certified to 42, 53 and 401", "Installation is extra, and replacement filters set the long-term cost", "Consumer Reports says RO means hundreds of dollars more annually for replacements"] }
  ],
  brandVerdict: "Check what the filter is certified for, then what the replacements cost. A certification for the contaminant you care about beats a bigger name or a bigger price.",

  traps: [
    { claim: "\"Filters out contaminants\"", reality: "Consumer Reports says NSF certification doesn't mean a filter reduces all possible contaminants. Look for the specific claim you need, like lead, next to the standard number." },
    { claim: "\"NSF certified\"", reality: "The number matters. NSF/ANSI 42 covers aesthetic effects like taste, and 53 covers health effects. Water Filter Guru says the Waterdrop PT-07B is certified only to 42, so it isn't certified for health claims." },
    { claim: "\"Removes lead\"", reality: "The EPA says a lead claim must appear with NSF/ANSI 53 text on the packaging and the Performance Data Sheet. If you can't find that, it isn't certified." },
    { claim: "\"Cheap to run\"", reality: "Tapwaterdata says replacement media is 53 to 95% of five-year cost in every tier. Consumer Reports says RO owners can expect to pay hundreds of dollars more annually for replacements." },
    { claim: "\"Filter once and you're done\"", reality: "Brita lists its large 10-cup pitcher filter at 40 gallons and a 2-month life. An under-sink RO system's filter and membrane replacement typically runs $100 to $200 a year." },
    { claim: "\"It will handle my well water\"", reality: "Consumer Reports says to use an EPA-certified lab if you use well water or your utility doesn't test for PFAS. A filter can't be chosen well without knowing what's in the water." },
    { claim: "\"Reverse osmosis is the best filter\"", reality: "Consumer Reports says if you don't have PFAS in your drinking water, there's little need to splurge on pricey under-sink filters." }
  ],

  picksListed: "2026-11",
  factsNote: "Certification checks use Consumer Reports and reviewer listings, not our own testing. A ? means we haven't confirmed that claim, so check the packaging and Performance Data Sheet before buying. Sources disagree about some Waterdrop certifications, so verify them.",
  picksNote: "A short list of well-reviewed filters. Models and prices change, so use these to learn what to look for and verify the certification and replacement cost.",
  picks: [
    { name: "Brita Denali with Elite filter", facts: { lead: true, pfas: true }, tier: "budget", form: "pitcher", checked: "2026-11",
      why: "One of three pitchers Consumer Reports says are certified to NSF standards for lead, chlorine and PFAS. Check the price and the Elite filter's replacement cost." },
    { name: "ZeroWater Ready-Pour ZD-010RP", facts: { lead: true, pfas: true }, tier: "budget", form: "pitcher", checked: "2026-11",
      why: "Another of Consumer Reports' three certified pitchers. Check the price and how often the filter needs replacing." },
    { name: "Amazon Basics pitcher", facts: {}, tier: "budget", form: "pitcher", checked: "2026-11",
      why: "Water Filter Guru says all its claims are certified to NSF/ANSI 42, 53 and 401. Check the packaging for the lead and PFAS claims you need." },
    { name: "Waterdrop PT-07B", facts: { lead: false, pfas: false }, tier: "budget", form: "pitcher", checked: "2026-11",
      why: "Water Filter Guru says it costs $0.05 per gallon but is certified only to NSF/ANSI 42, so no health claims. Another listing says 42 and 372, so verify before relying on it." },
    { name: "Frizzlife SK99", facts: {}, tier: "mid", form: "undersink", checked: "2026-11",
      why: "Listed as certified to NSF/ANSI 42 and 53 with a 0.5 micron filter. The price tier is our estimate, so check the lead and PFAS claims and the price." },
    { name: "Waterdrop 10UA", facts: { lead: false, pfas: false }, tier: "mid", form: "undersink", checked: "2026-11",
      why: "Listed as NSF/ANSI 42 certified, so it covers taste and not health claims. The price tier is our estimate, so check it." },
    { name: "APEC ROES-50", facts: {}, tier: "upper", form: "undersink", checked: "2026-11",
      why: "A tank-based RO system listed as NSF/ANSI 58 certified. Replacement filters and membrane run $100 to $200 a year for most RO systems. The price tier is our estimate, so check it." }
  ]
};
