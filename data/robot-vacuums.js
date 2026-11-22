// Category content for the robot vacuum page.
window.SITE_DATA = {
  category: "robot-vacuums",
  title: "Before you buy a robot vacuum",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My robot vacuum result: Before You Buy",
  defaultForm: "dock",

  forms: {
    "basic": "Basic robot (you empty the bin, little or no mopping)",
    "dock": "Self-emptying dock (hands-off vacuuming, light mopping)",
    "allinone": "All-in-one dock (empties, washes the mop, refills water)"
  },

  needDefs: {
    autoEmpty: { label: "Self-emptying dock", fact: "autoEmpty", is: true },
    mopWash: { label: "Dock washes the mop pads", fact: "mopWash", is: true },
    obstacle: { label: "Obstacle avoidance", fact: "obstacle", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $300",
      adds: "Decent vacuuming and app control on sale. The Roomba 205 was $229.99 and the Roborock Q10 S5+ about $280.",
      missing: "Mop washing, strong obstacle avoidance and the best navigation.",
      bestFor: "Hard floors and light carpet in a tidy home.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$300–700",
      adds: "A dock that empties the bin and, on some, washes the mop. The Shark PowerDetect 2-in-1 and Eufy X10 Pro Omni sit here on sale.",
      missing: "The self-cleaning mop rollers and big-room mapping of flagships.",
      bestFor: "Most homes, including pets.",
      badge: "Sweet spot"
    },
    {
      id: "upper",
      value: 0.96,
      name: "Upper",
      range: "$700+",
      adds: "Premium mopping, arms that move small objects, and top navigation. Homes & Gardens' pick, the Dreame Aqua10 Ultra Roller, has a self-cleaning mop roller.",
      missing: "Flagship navigation and mopping you may not need on tidy hard floors.",
      bestFor: "Buyers who want to mop daily with no effort.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend?",
      why: "Your needs and your budget don't always agree. Setting a ceiling lets the result tell you what you'd give up, instead of recommending something you won't buy. List prices are rarely what people pay.",
      options: [
        { id: "300", label: "Under $300", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. Sale prices make a decent robot possible." },
        { id: "700", label: "Up to $700", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, which covers self-emptying and mop-washing docks on sale." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "mop",
      short: "Mopping",
      ask: "Do you want it to mop?",
      why: "\"2-in-1\" only means it carries a mop pad. Whether the dock washes that pad decides how much of the chore you still do.",
      options: [
        { id: "no", label: "No, vacuuming is enough", form: { "basic": 1, "dock": 1 },
          note: "A vacuum-only robot saves money and avoids wet pads to clean." },
        { id: "light", label: "A light mop now and then", form: { "dock": 2 },
          note: "Most hybrid robots need you to swap pads yourself; some lift the mop over carpet." },
        { id: "real", label: "Yes, mop my floors regularly", tier: "mid", form: { "allinone": 3 }, needs: ["mopWash"],
          must: ["A dock that washes the mop pads and refills the water tank"],
          note: "The Shark PowerDetect 2-in-1 washes its mops and refills its tanks, per Tom's Guide." }
      ]
    },
    {
      id: "dock",
      short: "Emptying",
      ask: "How often are you willing to empty the bin?",
      why: "A robot's own bin is small. A self-emptying dock stores weeks of dirt in a bag. Some Roombas instead compact dirt inside the robot.",
      options: [
        { id: "auto", label: "Rarely or never", form: { "dock": 2 }, needs: ["autoEmpty"],
          must: ["A self-emptying dock, or onboard compaction like the Roomba 205"],
          note: "Docks add bags to the running cost and a bulky base to your floor." },
        { id: "manual", label: "I don't mind emptying it", form: { "basic": 2 }, skip: ["Self-emptying dock"] }
      ]
    },
    {
      id: "clutter",
      short: "Clutter",
      ask: "Will it share the floor with cables, socks or pet mess?",
      why: "Obstacle avoidance is the difference between a robot that cleans and one that needs rescuing. It usually uses a camera, which brings a privacy question.",
      options: [
        { id: "yes", label: "Yes, my floors are messy", tier: "mid", needs: ["obstacle"],
          must: ["Camera-based obstacle avoidance, and a way to keep it out of bedrooms and bathrooms"],
          note: "Eufy's X10 Pro Omni lists obstacle detection; some similarly priced robots don't." },
        { id: "no", label: "No, I tidy first", skip: ["Obstacle avoidance"] }
      ]
    },
    {
      id: "pets",
      short: "Floors",
      ask: "What's on your floors?",
      why: "Suction numbers sound impressive but don't tell the whole story. Homes & Gardens says pet hair needs high suction and an anti-tangle brush together.",
      options: [
        { id: "hard", label: "Mostly hard floors" },
        { id: "carpet", label: "Carpet or lots of rugs", tier: "mid",
          must: ["Strong suction and carpet detection that lifts or skips the mop"],
          note: "The Roomba 205 won't mop rugs because of automatic carpet detection." },
        { id: "pets", label: "Pets that shed", tier: "mid",
          must: ["High suction with an anti-tangle brush roll"],
          note: "Tom's Guide's pet-hair pick lists 22,000Pa suction." }
      ]
    },
    {
      id: "app",
      short: "App",
      ask: "How do you feel about the app and cloud?",
      why: "The smart features live in the app and the cloud, not in the robot. If the company changes or folds, they can go. Neato's closure turned its robots into non-smart ones.",
      options: [
        { id: "ok", label: "Fine with it",
          must: ["Check the maker's app and privacy settings, and keep camera robots out of bedrooms"],
          note: "iRobot says apps keep working after its bankruptcy and sale to Picea Robotics, and Fortune reported that in the worst case a Roomba should still clean without the app." },
        { id: "privacy", label: "I'd rather keep it offline",
          must: ["A robot that works without an account, or no camera and no app"],
          note: "CHOICE suggests a robot that doesn't connect to the internet if privacy is your concern." }
      ]
    }
  ],

  brandColumns: ["Long-time names", "Challenger brands", "Random no-name"],
  brandRows: [
    { label: "Examples", cells: ["iRobot Roomba", "Roborock, Eufy, Dreame, Shark", "Unbranded marketplace robots"] },
    { label: "What stands out", cells: ["The original; now owned by Picea Robotics, its former manufacturer", "Most of the 2026 test lists: Eufy, Shark, Roborock and Dreame", "Low prices and few ways to check them"] },
    { label: "Software", cells: ["Roomba Home app, which iRobot says will keep working", "Own apps; check each one's cloud and subscription terms", "Usually generic or missing"] },
    { label: "Watch out for", cells: ["iRobot filed for bankruptcy in December 2025, and the future is uncertain", "Cloud features and subscriptions; some analysts warn of fees", "No spare parts, support, or privacy information"] }
  ],
  brandVerdict: "In 2026 the test lists favor Eufy, Shark, Roborock and Dreame over Roomba, but the brand matters less than the dock, the app terms and the running costs. Pay for what you'll use: mop-washing only if you mop, a camera only if your floors are messy.",

  traps: [
    { claim: "\"Was $469.99, now $229.99\"", reality: "iRobot's own page shows the Roomba 205 reduced from $469.99 to $229.99, and a price tracker showed the Roborock Q10 S5+ at $279.98 against a $549.99 list. Robot vacuums are often discounted. Judge the sale price." },
    { claim: "\"22,000Pa suction\"", reality: "Suction alone isn't enough. Homes & Gardens says pet hair needs high suction plus an anti-tangle brush roll." },
    { claim: "\"2-in-1 vacuum and mop\"", reality: "It often means a mop pad you swap by hand. Consumer NZ says most hybrids need you to change pads, and only some lift the mop over carpet. A dock that washes the pad is a separate feature." },
    { claim: "\"Smart app and cloud features\"", reality: "They need the company to keep running. One analysis warns that subscription tiers are now common, and claims that a $600 robot on a $29-a-month plan costs over $1,600 in three years. Check for any plan before buying." },
    { claim: "\"Camera obstacle avoidance\"", reality: "A camera can store images in the cloud. CHOICE advises using the app's virtual walls to keep it out of bedrooms and bathrooms." },
    { claim: "\"Never vacuum again\"", reality: "Running costs add up: brushes, filters, mop pads, dock bags and eventually a battery. Consumer Reports, quoted by House Digest, calls a robot a stop-gap between regular cleanings." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use maker, retailer or reviewer listings, not our own testing. A ? means we haven't confirmed that spec. Prices swing with sales, so these are snapshots.",
  picksNote: "Well-reviewed robots, sorted by typical sale price. Prices differ a lot between stores and weeks, so check the current price.",
  picks: [
    { name: "iRobot Roomba 205 DustCompactor Combo", facts: { autoEmpty: false, mopWash: false }, tier: "budget", form: "basic", checked: "2026-11",
      why: "$229.99 on iRobot's page, reduced from $469.99. Compacts dirt onboard for up to 60 days with no dock, uses LiDAR, and skips rugs when mopping. Roomba is now owned by Picea Robotics." },
    { name: "Roborock Q10 S5+", facts: { autoEmpty: true }, tier: "budget", form: "dock", checked: "2026-11",
      why: "$279.98 last recorded on a price tracker, against a $549.99 list. In a head-to-head with a pricier Shark, Tom's Guide said it left floors clean but was less efficient." },
    { name: "Shark Matrix Plus", facts: { autoEmpty: true }, tier: "budget", form: "dock", checked: "2026-11",
      why: "About $289 per a price tracker, with a HEPA filter and sonic mopping. Battery runs about 110 minutes against the Roborock's 150." },
    { name: "Roborock Q10 X5+", facts: { autoEmpty: true, mopWash: false }, tier: "mid", form: "dock", checked: "2026-11",
      why: "$499.99 per a price tracker, with 10,000Pa suction, a 350ml bin and 150 minutes of battery. It doesn't wash its mop pads." },
    { name: "Shark PowerDetect 2-in-1", facts: { autoEmpty: true, mopWash: true }, tier: "mid", form: "allinone", checked: "2026-11",
      why: "Tom's Guide's best for most people: it empties itself, washes its mops and refills its tanks. Tom's Guide says it costs under $1,000, and a price tracker showed $399.99 in September." },
    { name: "Eufy X10 Pro Omni", facts: { autoEmpty: true, obstacle: true }, tier: "mid", form: "allinone", checked: "2026-11",
      why: "NBC's best overall, with obstacle avoidance and mapping. A price tracker showed $449.99–479.99 in 2026, and $699.99 on other comparison pages. 210 minutes of battery." },
    { name: "Dreame Aqua10 Ultra Roller", facts: { mopWash: true }, tier: "upper", form: "allinone", checked: "2026-11",
      why: "Homes & Gardens' top pick: the only robot it tested whose self-cleaning mop roller lifts wet mess instead of pushing it around. We haven't confirmed its price, so check." },
    { name: "Roborock Qrevo Edge 3 Pro", facts: { autoEmpty: true }, tier: "upper", form: "allinone", checked: "2026-11",
      why: "$1,199.99 listed on a price tracker, with 256 minutes of battery. One comparison put it far above the Eufy X10 Pro Omni on price for a rating only slightly higher." }
  ]
};
