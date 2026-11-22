// Category content for the dishwasher page. Same shape as the other guides.
// Prices are street or listed prices from roundups and retailers. Sales move them a lot.
window.SITE_DATA = {
  category: "dishwashers",
  title: "Before you buy a dishwasher",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My dishwasher result: Before You Buy",
  defaultForm: "stainless",

  forms: {
    "stainless": "Stainless steel tub (lasts longer, stains less)",
    "plastic": "Plastic tub (cheaper, often dries plastics better)"
  },

  needDefs: {
    thirdrack: { label: "A third rack for utensils", fact: "thirdrack", is: true },
    quiet: { label: "Rated 45 dBA or quieter by the maker", fact: "quiet", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $700",
      adds: "Clean dishes at a low price. One roundup lists the Maytag MDB4949SKZ at about $505 to $599 with a stainless tub, and the Whirlpool WDF520PADM at about $399 to $449.",
      missing: "Quiet. These models run about 50 to 55 dBA, and Yahoo's guide calls 51 dBA or more average.",
      bestFor: "Most households. House Digest says reviewers rarely list poor cleaning as a flaw, even on budget models.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$700–1,200",
      adds: "A third rack, quieter running and more adjustable racks. Food Network lists a stainless, quiet model with a third rack at $1,099, and HouseLogic says whisper-quiet machines usually cost over $1,000.",
      missing: "Proof the extra money cleans better. HGTV calls the stainless tub upgrade largely cosmetic.",
      bestFor: "Open kitchens where noise matters and people who load a lot of utensils."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$1,200+",
      adds: "The quietest ratings and the most features. Reviewed lists a quiet, third-rack, smart model at $1,899, and lists a Samsung Bespoke at 38 dBA.",
      missing: "Value. Reviewed rates a $1,899 model's cleaning as inconsistent and not the best value at that price.",
      bestFor: "Buyers who want the quietest machine and smart features.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend?",
      why: "HGTV puts a noisy plastic-tub model with a control knob near $250 and a quiet stainless model with concealed controls near $1,000. Install, a new water line and haul-away can be extra, so ask for the full price.",
      options: [
        { id: "700", label: "Under $700", budgetCap: "budget",
          note: "Sets your ceiling at budget tier." },
        { id: "1200", label: "Up to about $1,200", budgetCap: "mid",
          note: "Sets your ceiling at mid tier." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "noise",
      short: "Noise",
      ask: "Will you hear it while it runs?",
      why: "Makers report a model's noise in decibels averaged over the whole cycle, says Consumer Reports, but that isn't the best indicator. Intermittent spikes, like the detergent door or a loud drain pump, matter too, and its ratings account for them. Tom's Guide's tester measured one 44 dB Bosch at 47 to 50 dB.",
      options: [
        { id: "quiet", label: "Yes, open plan or a small home", needs: ["quiet"], tier: "mid",
          must: ["A model rated 45 dBA or quieter, usually priced above $1,000"],
          note: "Whirlpool says 40 dBA or below is practically silent, and 50 or more is like a normal conversation. HouseLogic says whisper-quiet machines run 40 to 46 decibels." },
        { id: "some", label: "A little noise is fine",
          note: "Yahoo's guide calls 51 dBA or more average and 45 to 50 very quiet." },
        { id: "notsure", label: "I don't know",
          note: "Think about where the machine sits and whether you run it overnight or while you're at home." }
      ]
    },
    {
      id: "tub",
      short: "Tub",
      ask: "Stainless steel or plastic tub?",
      why: "Consumer Reports says stainless is more durable, stains less and helps dishes dry. HGTV puts the upgrade near $150 and calls it largely cosmetic, and says plastic nearly always outlasts the machine though it can discolor. Time says plastic dries better. Sources disagree here, so check reviews for drying.",
      options: [
        { id: "steel", label: "Stainless steel", form: { "stainless": 4 },
          note: "Consumer Reports says stainless tubs don't actually do anything for noise, even though some makers claim they do." },
        { id: "plastic", label: "Plastic is fine", form: { "plastic": 4 },
          note: "Wayfair says a gray tub hides stains better. Plastic dishwashers are cheaper, but Frigidaire's budget plastic-tub models run 52 to 54 dBA." },
        { id: "either", label: "No preference", form: { "stainless": 2 },
          note: "Most mid-priced picks in our list have stainless tubs, so we lean that way." }
      ]
    },
    {
      id: "load",
      short: "Racks",
      ask: "What do you load?",
      why: "A third rack holds utensils and small tools so the lower rack has room. Consumer Reports says its members' most common problems were failing to clean, failing to dry or drain, and racks that broke or stopped working, so rack build matters too.",
      options: [
        { id: "utensils", label: "Lots of utensils, whisks and ladles", needs: ["thirdrack"],
          note: "Food Network's stainless pick with a third rack lists at $1,099, but a GE plastic-tub model with a third rack is listed around $549 to $674." },
        { id: "normal", label: "Ordinary loads",
          note: "A standard two-rack machine holds 12 to 14 place settings in the models we list." },
        { id: "big", label: "A big household or lots of entertaining",
          note: "Look for 16 place settings. Samsung's Bespoke and Bosch's 500 Series list 16." }
      ]
    },
    {
      id: "dry",
      short: "Drying",
      ask: "What do you wash that's hard to dry?",
      why: "Consumer Reports says many dishwashers struggle to dry plastic, which is tougher than glass or ceramic. Heated dry is common, though HouseLogic says it adds cost and electricity. Fix.com says rinse aid helps drying at a fraction of the cost.",
      options: [
        { id: "plastic", label: "Lots of plastic containers", form: { "plastic": 2 },
          note: "A model with heated or boosted drying helps. Whirlpool says heated dry usually defaults to on and can be turned off." },
        { id: "hard", label: "Hard water in my home",
          note: "Hunker says a built-in water softener reduces mineral deposits on clean dishes. Check which models have one." },
        { id: "fine", label: "I air-dry or hand-dry anyway",
          note: "You can skip paid drying extras and turn heated dry off to save electricity." }
      ]
    }
  ],

  brandColumns: ["Bosch and Samsung", "Whirlpool and Maytag", "Frigidaire and GE"],
  brandRows: [
    { label: "Examples", cells: ["Bosch 500 Series SHP65CM5N, Samsung Bespoke DW90F89P0USR", "Whirlpool WDF520PADM and WDT750SAKZ, Maytag MDB4949SKZ", "Frigidaire FDPC4314AS, GE GDF630PSMSS"] },
    { label: "What stands out", cells: ["AOL's roundup notes Bosch, Miele and Samsung use durable stainless steel tubs", "Maytag's MDB4949SKZ is listed with a stainless tub and a 10-year parts warranty by one roundup, at roughly $505 to $599", "AOL says the Frigidaire FDPC4314AS qualifies for Energy Star, unlike most budget Whirlpool and Maytag models, and that Frigidaire's median rating is 4.4"] },
    { label: "Watch out for", cells: ["Tom's Guide's tester measured the Bosch 500 at 47 to 50 dB against a 44 dB claim", "Reviewed rates the Maytag MDB4949SKZ an average dishwasher on one page and lists it as best value on another", "Cheapism, citing Kiplinger, says the basic Frigidaire FBD2400K, from $233, is noisy and poorly built. AOL calls the FDPC4314AS the loudest Frigidaire at 54 dBA"] }
  ],
  brandVerdict: "Check tub, noise rating and rack setup before the brand. Cleaning is rarely the weak point, so the useful choices are noise, drying and the racks you'll actually use.",

  traps: [
    { claim: "\"Super quiet, 44 dB\"", reality: "Consumer Reports says makers average noise over the full cycle, which isn't the best indicator, and that spikes matter. Tom's Guide's tester measured the Bosch 500 at 47 to 50 dB, slightly above the 44 claimed." },
    { claim: "\"A stainless tub is quieter\"", reality: "Consumer Reports says its test data doesn't bear this out and that stainless tubs don't do much for noise. Some reviewers, like Reviewed, say the opposite, so test it in a store if you can." },
    { claim: "\"Stainless dries better\"", reality: "Consumer Reports says stainless helps dishes dry. Time says plastic dries better and stainless leaves water on dishes. The sources disagree, so read model-specific drying reviews." },
    { claim: "\"Heated dry gets everything dry\"", reality: "Whirlpool says heated dry usually defaults to on. HouseLogic says it uses more electricity. Fix.com says rinse aid helps drying at a fraction of the cost." },
    { claim: "\"More features clean better\"", reality: "House Digest says reviewers rarely list poor cleaning as a flaw, even on budget models. HouseLogic says a touch pad may save your settings but doesn't improve washing." },
    { claim: "\"It will slot straight in\"", reality: "Top Ten Reviews quotes an expert who says people forget to allow space for pipework, leaving the machine sticking out. Measure before you buy." },
    { claim: "\"Compact saves money\"", reality: "HouseLogic says compact machines cost less up front but may run more often, and can use more electricity and water over a year than a standard 24-inch model." }
  ],

  picksListed: "2026-11",
  factsNote: "Third-rack and noise checks use maker, retailer and reviewer listings, not our own testing. The quiet check uses the maker's rating, and testers sometimes measure higher. A ? means we haven't confirmed that spec, so check before buying. Prices move with sales, and tiers follow regular prices, and sale prices can run several hundred dollars lower.",
  picksNote: "A short list of well-reviewed dishwashers. Models and prices change, so use these to learn what to look for and verify the model number, noise rating and current price.",
  picks: [
    { name: "Whirlpool WDF520PADM", facts: { thirdrack: false, quiet: false }, tier: "budget", form: "stainless", checked: "2026-11",
      why: "One roundup lists it at about $399 to $449 with a stainless tub, 14 place settings and 55 dBA. It's loud, so it suits a closed-off kitchen." },
    { name: "Maytag MDB4949SKZ", facts: { thirdrack: false, quiet: false }, tier: "budget", form: "stainless", checked: "2026-11",
      why: "Listed at about $505 to $599 with 14 place settings, 50 dBA and no third rack. Reviewed rates it average on one page and best value on another, so read the review you trust." },
    { name: "GE GDF630PSMSS", facts: { thirdrack: true, quiet: false }, tier: "budget", form: "plastic", checked: "2026-11",
      why: "One roundup lists it at about $549 to $674 with a plastic interior, 16 place settings, 50 dBA and a third rack." },
    { name: "Frigidaire FDPC4314AS", facts: { thirdrack: false, quiet: false }, tier: "budget", form: "plastic", checked: "2026-11",
      why: "Retailers list it at $399 on sale against a regular $499 or more, with a plastic tub, 14 place settings, 54 dBA and Energy Star. AOL's roundup says 12 place settings, so check the count." },
    { name: "Whirlpool WDT750SAKZ", facts: { thirdrack: true, quiet: false }, tier: "mid", form: "stainless", checked: "2026-11",
      why: "Retailers list it at about $600 to $680 on sale against a regular price near $950. Reviewed lists 13 place settings, 47 dBA, a third rack and no Energy Star certification." },
    { name: "Bosch 500 Series SHP65CM5N", facts: { thirdrack: true, quiet: true }, tier: "mid", form: "stainless", checked: "2026-11",
      why: "Tom's Guide lists 16 place settings, a 44 dB claim, a stainless tub and Energy Star, but its tester measured 47 to 50 dB. Retailers list it at about $990 to $1,250, and Bosch lists a newer SHP65DM5N at $1,249, so check which model is in stock." },
    { name: "Samsung Bespoke DW90F89P0USR", facts: { thirdrack: true, quiet: true }, tier: "upper", form: "stainless", checked: "2026-11",
      why: "Reviewed lists 16 place settings, 38 dBA, a stainless tub, a third rack and Wi-Fi. Samsung lists it at $1,399 and has sold it for about $1,000 during promotions." }
  ]
};
