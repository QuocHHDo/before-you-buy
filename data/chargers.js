// Category content for the power bank page. Same shape as headphones.js and keyboards.js.
window.SITE_DATA = {
  category: "chargers",
  title: "Before you buy a power bank",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My power bank result: Before You Buy",
  defaultForm: "pocket",

  forms: {
    "pocket": "Pocket power bank (about 10,000mAh, phone top-ups)",
    "big": "Large power bank (20,000mAh+, laptop or several devices)",
    "magnetic": "Magnetic wireless power bank (iPhone and Qi2 phones)"
  },

  needDefs: {
    laptop: { label: "Laptop-class output (65W+)", fact: "laptop", is: true },
    builtincable: { label: "Built-in cable", fact: "builtincable", is: true },
    magnetic: { label: "Magnetic wireless charging", fact: "magnetic", is: true },
    flight: { label: "Within the 100Wh airline limit", fact: "flight", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $40",
      adds: "A pocket-size bank with fast charging for a phone. The INIU P50 gives 45W from 10,000mAh at about $30.",
      missing: "Laptop-class output, big capacity, wireless charging, and a long track record from the maker.",
      bestFor: "Keeping a phone alive through the day.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$40–110",
      adds: "20,000mAh or more, 100W+ output that can run a laptop, and sometimes a built-in cable or magnetic wireless charging.",
      missing: "The very fastest output and the app control on Anker's top banks.",
      bestFor: "A laptop plus a phone, or a long trip."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$110+",
      adds: "Very high output (300W on the Anker Prime 26K), app control, and a screen with live stats.",
      missing: "More real capacity. How-To Geek notes you can get a similar 20K capacity for under a fifth of the price. You are paying for speed.",
      bestFor: "Fast-charging several large devices at once.",
      badge: "Paying for speed"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend?",
      why: "Your needs and your budget don't always agree. Setting a ceiling lets the result tell you what you'd give up, instead of recommending something you won't buy.",
      options: [
        { id: "40", label: "Under $40", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. That buys a pocket bank with fast phone charging; a laptop-class bank costs more." },
        { id: "110", label: "Up to $110", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, which covers 20,000mAh banks that can run a laptop." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "use",
      short: "Use",
      ask: "What will you charge most?",
      why: "Output (watts) decides what a bank can do. A phone needs far less than a laptop, and a bank that can't deliver enough will charge a laptop slowly or not at all.",
      options: [
        { id: "phone", label: "A phone, earbuds, maybe a watch", form: { "pocket": 2 },
          note: "Most phones charge well from a 20–45W port. Anything above that is for bigger devices." },
        { id: "several", label: "Several devices at once", tier: "mid", form: { "big": 2 },
          must: ["Several ports, and a total-output figure that covers your devices together"],
          note: "Banks share their total output across ports. Check the single-port number and the total." },
        { id: "laptop", label: "A laptop", tier: "mid", form: { "big": 3 }, needs: ["laptop"],
          must: ["USB-C output of 65W or more on a single port"],
          note: "A 45W bank can top up a light laptop, but it will be slow. Mid-tier banks reach 100–140W." }
      ]
    },
    {
      id: "carry",
      short: "Carry",
      ask: "Where will it live?",
      why: "Capacity costs weight. A 10,000mAh bank can be pocket-size; a 24,000mAh bank is a brick you will notice in a jacket.",
      options: [
        { id: "pocket", label: "In a pocket or small bag", form: { "pocket": 2 },
          note: "The INIU P50 weighs 160g and is about the size of two stacked macarons, per Gizmodo." },
        { id: "bag", label: "In a backpack or travel bag", form: { "big": 1 },
          note: "A bigger bank weighs more but covers several recharges." }
      ]
    },
    {
      id: "cable",
      short: "Cable",
      ask: "Do you forget the cable?",
      why: "A dead phone and a bank with no cable is a common way to end up stuck. Some banks have a cable built in.",
      options: [
        { id: "yes", label: "Yes, I'd like it built in", needs: ["builtincable"],
          must: ["A built-in cable (check the connector type; USB-C is the safe choice)"],
          note: "Engadget calls the Belkin 20K with its integrated cable a good fix for that problem." },
        { id: "no", label: "No, I carry my own" }
      ]
    },
    {
      id: "magnet",
      short: "Wireless",
      ask: "Do you want it to snap onto your phone?",
      why: "Magnetic banks (Qi2 or MagSafe) clip to the back of a compatible phone. They are slower than a cable and cost more.",
      options: [
        { id: "yes", label: "Yes, magnetic wireless", tier: "mid", form: { "magnetic": 5 }, needs: ["magnetic"],
          must: ["Qi2 or MagSafe-compatible magnets that fit your phone"],
          note: "Reviewers list Qi2 banks from about £55 in the UK up to around $110 for Anker's MagGo 2 Pro." },
        { id: "no", label: "No, a cable is fine", skip: ["Magnetic wireless charging"],
          note: "A cable is faster and cheaper." }
      ]
    },
    {
      id: "flight",
      short: "Flying",
      ask: "Will you take it on planes?",
      why: "Airlines limit lithium batteries by watt-hours. Most banks under about 27,000mAh sit under the usual 100Wh line, but check the label.",
      options: [
        { id: "yes", label: "Yes, I fly with it", needs: ["flight"],
          must: ["Under 100Wh (about 27,000mAh), and confirm your airline's rules before you fly"],
          note: "INIU's listing says the P50 meets the TSA carry-on rule, and Anker lists the Prime 26K as flight-approved. Those are maker claims." },
        { id: "no", label: "No" }
      ]
    }
  ],

  brandColumns: ["Big accessory brands", "Value specialists", "Random no-name"],
  brandRows: [
    { label: "Examples", cells: ["Anker, UGREEN, Belkin", "INIU, Cuktech", "Unbranded marketplace listings"] },
    { label: "What stands out", cells: ["Anker and UGREEN fill the top of 2026 test lists, with the highest output and app control on the top Anker banks", "Small size and low prices; Expert Reviews names the Cuktech 10 Mini (about £25) as its budget pick", "Specs you can't check, and none of the independent testing the named brands get"] },
    { label: "Software", cells: ["Anker's Prime banks use an app for charging priorities", "Usually none", "None"] },
    { label: "Watch out for", cells: ["Paying for speed you don't use; check any brand's recall history", "Fewer high-wattage options", "TechRadar says big names are the best bet and that many Amazon-only brands are better avoided"] }
  ],
  brandVerdict: "Stick with a maker that has independent test results and a recall record you can look up. Popular Science checked brands against the Consumer Product Safety Commission's recall list and said it changed two of its picks. A bank is a lithium battery you carry against your body, so this is the one place a no-name saves too little.",

  traps: [
    { claim: "\"10,000mAh\"", reality: "You won't get 10,000mAh into your phone. INIU's own listing says about 30–40% is lost to heat and voltage conversion, so 10,000mAh delivers roughly 6,000–7,000mAh." },
    { claim: "\"240W cable\"", reality: "A cable needs an e-marker chip to carry more than 60W. Without it the charger limits the power. Several cheap cables claim wattage they can't deliver, so buy 100W or 240W cables from a maker with a name." },
    { claim: "\"Any USB-C cable will do\"", reality: "For phones, usually yes: Native Union says a 60W cable covers every phone, iPad and the MacBook Air. For a laptop that draws more, you need a 100W or higher cable." },
    { claim: "\"300W fast charging\"", reality: "How-To Geek said of the Anker Prime 26K that you are buying speed, not capacity, and that a similar 20K capacity costs under a fifth of the price. Even Anker rates it 140W on a single port." },
    { claim: "\"45W output\"", reality: "Most affordable banks reach only about 22.5W, per Android Authority, so 45W is a real step up. A laptop that needs 65W or more still won't charge at full speed from it." },
    { claim: "\"Total output: 140W\"", reality: "Output is shared across ports. Check the single-port wattage for each device you want to charge, not just the headline total." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use maker, retailer or reviewer listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying.",
  picksNote: "Well-reviewed power banks, sorted by typical price. Banks go on sale often, and several of these showed prices well below list.",
  picks: [
    { name: "INIU Pocket Rocket P50", facts: { laptop: false, builtincable: true, magnetic: false, flight: true }, tier: "budget", form: "pocket", checked: "2026-11",
      why: "Tom's Guide tested this 10,000mAh, 45W bank, which has a lanyard cable built in. About $28–33 on sale and $30.99 on INIU's site. 160g. Either USB-C port gives 45W; the USB-A port gives 19W." },
    { name: "Belkin BoostCharge 20K with Integrated Cable", facts: { builtincable: true, magnetic: false }, tier: "mid", form: "big", checked: "2026-11",
      why: "Engadget tested it: affordable at $50, good capacity for the price and a cable built in. The trade-off is charging that isn't as fast as other banks." },
    { name: "UGREEN Nexode 20K (130W)", facts: { laptop: true, magnetic: false }, tier: "mid", form: "big", checked: "2026-11",
      why: "20,000mAh and up to 130W for $59.99 per Popular Science, which researched it from other testers' reviews. Enough to run a laptop." },
    { name: "Anker 737 (PowerCore 24K)", facts: { laptop: true, builtincable: false, magnetic: false }, tier: "mid", form: "big", checked: "2026-11",
      why: "24,000mAh, 140W and three ports with a smart display. Anker's page showed $109.99. Tom's Hardware reported a Prime Day low of $76." },
    { name: "Anker MagGo 2 Pro (10K)", facts: { laptop: false, magnetic: true }, tier: "upper", form: "magnetic", checked: "2026-11",
      why: "10,000mAh with 45W wired and 25W magnetic wireless, around $110 per Popular Science, which listed it but hadn't tested it yet. A cheaper Qi2 option is the UGREEN Nexode 20K 145W at about £55 in the UK." },
    { name: "Anker Prime Power Bank (26K, 300W)", facts: { laptop: true, flight: true }, tier: "upper", form: "big", checked: "2026-11",
      why: "Expert Reviews' top pick. 300W across three devices and 140W on a single port, flight-approved per Anker. $229.99 on Anker's page after a $30 discount. How-To Geek called it too powerful for its own good." }
  ]
};
