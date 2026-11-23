// Category content for the smartwatch and fitness tracker page.
window.SITE_DATA = {
  category: "smartwatches",
  title: "Before you buy a smartwatch",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My smartwatch result: Before You Buy",
  defaultForm: "fitness",

  forms: {
    "apple": "Apple Watch (works only with iPhone)",
    "androidwear": "Pixel or Galaxy Watch (built for Android phones)",
    "fitness": "Garmin or Amazfit fitness watch (iPhone or Android)"
  },

  needDefs: {
    weekBattery: { label: "A week or more of battery", fact: "weekBattery", is: true },
    noSub: { label: "No subscription for health features", fact: "noSub", is: true },
    smart: { label: "Calls on the watch and phone-style apps", fact: "smart", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.82,
      name: "Budget",
      range: "Under $200",
      adds: "Solid fitness tracking, dual-band GPS and about 12 days of battery. The Amazfit Active 3 Premium is $169.99.",
      missing: "Calls on the watch, third-party apps, emergency alerts and tight phone integration.",
      bestFor: "People who want activity and sleep tracking, not a second phone screen.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$200–400",
      adds: "Apple Watch SE 3, Pixel Watch 4 and Galaxy Watch 8 sit here, with on-watch calls, apps and the best phone integration.",
      missing: "Multi-day battery on most of the phone-maker watches, and a flat price for coaching on the Pixel.",
      bestFor: "Most people who want a watch that works with their phone."
    },
    {
      id: "upper",
      value: 0.96,
      name: "Upper",
      range: "$400+",
      adds: "Larger, tougher cases and longer training tools. The Garmin Venu 4 is $549.99 and the Apple Watch Ultra 3 is $649.",
      missing: "A clear everyday advantage over the tier below. Wareable said you must really want Garmin's strengths to justify the Venu 4 price.",
      bestFor: "Serious training or outdoor use.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend?",
      why: "Your needs and your budget don't always agree. Setting a ceiling lets the result tell you what you'd give up, instead of recommending something you won't buy.",
      options: [
        { id: "200", label: "Under $200", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. That buys a good fitness watch, not a full smartwatch." },
        { id: "400", label: "Up to $400", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, which covers the Apple, Google and Samsung watches." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "phone",
      short: "Phone",
      ask: "What phone do you use?",
      why: "This is the question that rules watches in or out. Apple Watches work only with iPhones, and Google and Samsung's watches work best with Android. Tom's Guide says brands have moved toward platform-specific watches.",
      options: [
        { id: "iphone", label: "iPhone", form: { "apple": 2 },
          note: "Apple says Apple Watch works only with iPhone. Garmin and Amazfit also work with iPhone." },
        { id: "android", label: "Android", form: { "androidwear": 2 },
          note: "Pixel Watch 5 needs Android 12 or newer and a Google account. Samsung's own pages list different phone requirements by model, so check yours." },
        { id: "either", label: "Either, or I may switch", form: { "fitness": 3 },
          note: "Garmin and Amazfit watches work with both iPhone and Android, so they survive a phone change." }
      ]
    },
    {
      id: "use",
      short: "Use",
      ask: "What will you mostly use it for?",
      why: "A fitness watch and a smartwatch are different products. Amazfit and Garmin lead on training; Apple, Google and Samsung lead on calls, apps and messages.",
      options: [
        { id: "train", label: "Running and training", form: { "fitness": 3 },
          note: "Tom's Guide said the Amazfit Active 3 Premium's tracking rivals Garmin's, with dual-band GPS and no subscription." },
        { id: "daily", label: "Notifications, calls and everyday use", tier: "mid", needs: ["smart"],
          must: ["Calls on the watch and third-party apps"],
          note: "Amazfit's budget watch lacks on-watch calls and third-party apps, per Tom's Guide." },
        { id: "health", label: "General health and sleep tracking", form: { "fitness": 1 },
          note: "Any of these tracks sleep and heart rate. The difference is battery and what the app charges for." }
      ]
    },
    {
      id: "battery",
      short: "Battery",
      ask: "How often will you charge it?",
      why: "Battery life separates these watches more than any other spec. A watch you take off to charge every night misses sleep tracking.",
      options: [
        { id: "week", label: "Once a week or less", needs: ["weekBattery"], form: { "fitness": 2 },
          must: ["Seven or more days of battery in smartwatch mode"],
          note: "Garmin rates the Venu 4 at up to 12 days and the Amazfit Active 3 Premium at up to 12 days. An always-on screen shortens that." },
        { id: "daily", label: "Every night is fine", skip: ["Multi-day battery"],
          note: "The Pixel Watch 4 rates 30 or 40 hours and the Apple Watch Ultra 3 rates 42 hours." }
      ]
    },
    {
      id: "sub",
      short: "Fees",
      ask: "Do you mind paying a subscription?",
      why: "Some watches lock coaching and insights behind a monthly plan. Others keep everything free.",
      options: [
        { id: "no", label: "I'd rather not", needs: ["noSub"],
          must: ["Health and coaching features with no paid plan"],
          note: "Android Authority says Samsung Health is free, unlike Fitbit on the Pixel Watch. Tom's Guide says the Amazfit's features are free." },
        { id: "ok", label: "I don't mind", skip: ["Subscription-free health features"],
          note: "Google's Pixel Watch coaching needs a Google Health Premium membership after a 3-month trial." }
      ]
    },
    {
      id: "cell",
      short: "Cellular",
      ask: "Do you want it to work without your phone?",
      why: "Cellular models cost more up front and usually need a data plan on top.",
      options: [
        { id: "yes", label: "Yes, cellular", tier: "mid",
          must: ["A cellular (LTE) version, plus a data plan from your carrier"],
          note: "The Pixel Watch 4 41mm is $349 and $449 with LTE. Google's store says the watch needs its own data plan." },
        { id: "no", label: "No, my phone is usually nearby", skip: ["Cellular"] }
      ]
    }
  ],

  brandHeading: "Brands compared",
  brandColumns: ["Phone makers", "Fitness specialists", "Value brands"],
  brandRows: [
    { label: "Examples", cells: ["Apple, Samsung, Google", "Garmin", "Amazfit"] },
    { label: "What stands out", cells: ["Best phone integration, calls and apps, emergency features", "Battery and training tools: the Venu 4 is rated up to 12 days", "Real fitness tracking at about half a flagship price; Tom's Guide found all features free"] },
    { label: "Software", cells: ["Apple Health, Samsung Health (free), Google Health (coaching is paid)", "Garmin's own app", "Zepp app; the only optional paid extra Tom's Guide named is Zepp Aura"] },
    { label: "Watch out for", cells: ["Locked to one kind of phone; newer models cost more (Galaxy Watch 8 rose $50)", "Fewer smart features; the Vivoactive 6 has no speaker or voice assistant", "No on-watch calls or third-party apps"] }
  ],
  brandVerdict: "Choose by your phone first, then by whether you want a fitness tool or a mini phone. Phone makers win on integration. Garmin and Amazfit win on battery and don't care which phone you own. Reviewers keep calling the Amazfit Active 3 Premium the value pick, and the Apple Watch the best for iPhone users.",

  traps: [
    { claim: "\"Works with iPhone and Android\"", reality: "Most big-brand watches don't. Apple says its watch works only with iPhone, and Tom's Guide says brands have moved toward platform-specific watches. Garmin and Amazfit are the main exceptions." },
    { claim: "\"Up to 12 days of battery\"", reality: "That is smartwatch mode with the screen mostly off. Gadgets & Wearables measured about 4 days on the Venu 4 with the always-on display, and GPS workouts drain far faster." },
    { claim: "\"Free health tracking\"", reality: "Check what the app locks. Pixel Watch coaching needs a Google Health Premium membership after a 3-month trial, while Samsung Health and the Amazfit's features are free." },
    { claim: "\"Cellular\"", reality: "Cellular adds $100 to the Pixel Watch 4 and usually a monthly data plan on top of the phone's. Many people never use it." },
    { claim: "\"Smartwatch\"", reality: "It can mean very different things. The Garmin Vivoactive 6 has no speaker or voice assistant, and the Amazfit lacks on-watch calls and third-party apps." },
    { claim: "\"The new model\"", reality: "Newer often means pricier. Garmin raised the Venu 4 by $100 over its predecessor, and Samsung raised the Galaxy Watch 8 line by $50, while the Pixel Watch 4 held its price." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use maker, retailer or reviewer listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying.",
  picksNote: "Well-reviewed watches, sorted by typical price. Newer models exist, including the Pixel Watch 5, Galaxy Watch 9 and Apple Watch Series 12, so check what is current.",
  picks: [
    { name: "Amazfit Active 3 Premium", facts: { weekBattery: true, noSub: true, smart: false }, tier: "budget", form: "fitness", checked: "2026-11",
      why: "$169.99 on Amazfit's site. TechRadar and Tom's Guide both rate it highly: dual-band GPS, up to 12 days of battery, works with iPhone and Android. No on-watch calls or third-party apps." },
    { name: "Garmin Vivoactive 6", facts: { weekBattery: true, smart: false }, tier: "mid", form: "fitness", checked: "2026-11",
      why: "$299.99, up to 11 days of battery and a single 42mm size. TechRadar notes no voice assistant or speaker. Works with iPhone and Android." },
    { name: "Garmin Venu 4", facts: { weekBattery: true, smart: true }, tier: "upper", form: "fitness", checked: "2026-11",
      why: "$549.99 after a $100 rise over the Venu 3, up to 12 days of battery, and a speaker and microphone. T3 and Wareable both say the price stings." },
    { name: "Apple Watch SE 3", facts: { smart: true }, tier: "mid", form: "apple", checked: "2026-11",
      why: "Starts at $249 per Apple's pricing as of November 2026. Needs an iPhone 11 or later. TechRadar and Engadget rate Apple's Watch as the best for iPhone users, and the newer Series 12 is the top pick." },
    { name: "Apple Watch Ultra 3", facts: { weekBattery: false, smart: true }, tier: "upper", form: "apple", checked: "2026-11",
      why: "$649 on Amazon per Tom's Guide, with a 42-hour battery rating, the largest and brightest Apple Watch display, and a bulky case." },
    { name: "Google Pixel Watch 4", facts: { weekBattery: false, noSub: false, smart: true }, tier: "mid", form: "androidwear", checked: "2026-11",
      why: "From $349.99, or $449 with LTE. 30 hours of battery on the 41mm and 40 on the 45mm. Coaching needs Google Health Premium after 3 months free. Works with most Android phones from 12 up." },
    { name: "Samsung Galaxy Watch 8", facts: { noSub: true, smart: true }, tier: "mid", form: "androidwear", checked: "2026-11",
      why: "Starts around $350 per Android Authority. Samsung Health doesn't need a paid plan. Best with a Samsung phone; Samsung's own pages list different requirements per model." }
  ]
};
