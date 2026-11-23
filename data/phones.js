// Category content for the phone page. Same shape as the other guides.
// Phone prices are rising and new models launched this fall, so picks say "check the current price" and name the model line.
window.SITE_DATA = {
  category: "phones",
  title: "Before you buy a phone",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My phone result: Before You Buy",
  defaultForm: "android",

  forms: {
    "iphone": "iPhone (long support, no published promise, pricey storage)",
    "android": "Android phone (the widest price range, update promises vary a lot)"
  },

  needDefs: {
    years7: { label: "A published promise of 7 years of updates", fact: "years7", is: true },
    storage256: { label: "256GB of storage to start", fact: "storage256", is: true },
    ip68: { label: "IP68 water and dust resistance", fact: "ip68", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $400",
      adds: "A phone that handles calls, messages, maps and photos. Android Headlines lists the Samsung Galaxy A17 5G at $269.99 and the Moto G Power 2026 at $399.99.",
      missing: "Long update promises, top cameras and fast charging.",
      bestFor: "Everyday use, a first phone or a backup.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$400–700",
      adds: "A better camera and screen and, on some models, long updates. The Pixel 10a promises seven years; Tom's Guide calls it the best under $500, while the Google Store lists $599 and Amazon ran $50 off.",
      missing: "The best cameras and the longest-lasting batteries.",
      bestFor: "Most people who keep a phone for years."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$700+",
      adds: "Flagships such as the Galaxy S26 Ultra, which Tom's Guide calls the best camera phone, or the iPhone 18 Pro Max.",
      missing: "Everyday value. Flagship prices have risen, with PhoneArena noting the Galaxy S26 got a $100 hike.",
      bestFor: "Camera fans and people who want the best of everything.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend on the phone?",
      why: "Memory costs are pushing phone prices up. Counterpoint expects low-end retail prices to rise around $30 and some flagships by $150 to $200, per Mobile World Live.",
      options: [
        { id: "400", label: "Under $400", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. Good phones exist here, but update promises are shorter." },
        { id: "700", label: "Up to about $700", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, where long update promises appear." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "system",
      short: "System",
      ask: "iPhone or Android?",
      why: "The system decides which apps, accessories and update policy you get. Alphonso Labs lists choosing a model before choosing a platform among first-time buyers' mistakes.",
      options: [
        { id: "iphone", label: "iPhone", form: { "iphone": 4 },
          note: "BGR says iPhones routinely get long support, extending a phone's life to five or six years after launch." },
        { id: "android", label: "Android", form: { "android": 4 },
          note: "Android has the widest price range. Google and Samsung promise seven years on their newer phones." },
        { id: "unsure", label: "Not sure yet",
          note: "Android is the default for the picks below. Choose iPhone if your family or friends all use one." }
      ]
    },
    {
      id: "years",
      short: "Years",
      ask: "How long do you want to keep it?",
      why: "Update promises vary widely. Tom's Guide says Google promised seven years from the Pixel 8 on, while cheaper Motorola phones get far less, such as three years of Android updates on the Razr Ultra 2026.",
      options: [
        { id: "short", label: "2 to 3 years, then I'll upgrade",
          note: "A short update promise is fine if you plan to replace it." },
        { id: "long", label: "5 years or more", tier: "mid", needs: ["years7"],
          must: ["A published update promise of 5 or more years, not an estimate"],
          note: "BGR says Pixel 10a, Galaxy S26 Ultra and the Motorola Signature all offer seven-year guarantees. Apple publishes no number for iPhones." }
      ]
    },
    {
      id: "storage",
      short: "Storage",
      ask: "How much will you keep on it?",
      why: "Phone storage can't be added on most models. TechRadar says 128GB is no longer fit for purpose, and Apple dropped it on the iPhone 17 line.",
      options: [
        { id: "little", label: "Messages, maps and a few apps",
          note: "128GB is enough if you rely on cloud storage for photos." },
        { id: "lots", label: "Lots of photos, video or games", needs: ["storage256"],
          must: ["256GB as the base size, since storage usually can't be added later"],
          note: "PhoneArena's reviewer says to get a phone with at least 256GB, so you don't have to worry about offloading apps or cloud fees." }
      ]
    },
    {
      id: "route",
      short: "Where",
      ask: "Where will you buy it?",
      why: "A carrier phone is locked to that carrier for a while, and carrier deals can bind you to a plan. Buying unlocked costs more upfront but keeps you free to switch.",
      options: [
        { id: "carrier", label: "From my carrier, on a payment plan",
          note: "Which? warns about contract traps, and says to also check the brand's own store for trade-in deals, which can match or beat retailers." },
        { id: "unlocked", label: "Unlocked, directly or from a retailer",
          note: "Check the exact model number against your carrier's compatibility page, per Alphonso Labs, especially for imports." }
      ]
    }
  ],

  brandHeading: "Brands compared",
  brandColumns: ["Apple", "Google and Samsung", "Motorola and others"],
  brandRows: [
    { label: "Examples", cells: ["iPhone 17e, iPhone 17, iPhone 17 Pro Max", "Pixel 10a, Galaxy A37 and S26 Ultra", "Moto G Play and G Power, Nothing"] },
    { label: "What stands out", cells: ["TechRadar and Tom's Guide rate the iPhone 17 Pro Max best overall", "Seven-year update promises on newer Pixels and Galaxy S phones", "Low prices, but Motorola has no clearly defined update policy, per BGR"] },
    { label: "Updates", cells: ["No published number; BGR says five to six years in practice", "Seven years on Pixel 8 and later and Galaxy S26; Samsung A-series phones get less", "Varies by phone; BGR says some Razr phones get three Android updates"] },
    { label: "Watch out for", cells: ["Storage upgrades cost more; Apple dropped 128GB on the iPhone 17", "Samsung's cheaper A25 gets four years of updates, per Yahoo", "OnePlus pulled out of the US market, per TechRadar"] }
  ],
  brandVerdict: "Check the update promise and the base storage before the camera. A phone that stops getting security updates in three years costs less only if you plan to replace it then.",

  traps: [
    { claim: "\"Android updates are long now\"", reality: "Only some are. BGR says Motorola has no clearly defined update policy and decides phone by phone. Yahoo says Samsung's A25 gets four years of updates, not seven." },
    { claim: "\"128GB is plenty\"", reality: "TechRadar says you probably won't hit the limit until a couple of years in, and that Apple dropped 128GB on the iPhone 17 line. PhoneArena's reviewer recommends at least 256GB." },
    { claim: "\"Apple promises long updates\"", reality: "Digit says Apple doesn't publicly specify a fixed number of updates. BGR says iPhones routinely get five to six years in practice, so it's a track record, not a promise." },
    { claim: "\"Prices will fall after launch\"", reality: "Counterpoint estimates smartphone average selling prices will rise 6.9% in 2026 per Android Authority, and the Register reports budget phones will be hit hardest." },
    { claim: "\"Free phone with a contract\"", reality: "TechRadar's writer signed a three-year agreement and says to read it first. Which? lists contract traps and overpriced flagships among its Black Friday phone mistakes." },
    { claim: "\"The charger is in the box\"", reality: "Best Buy Canada's handout says many phones no longer include a charger, so consider a USB-C charger and cable." },
    { claim: "\"Any model works with my carrier\"", reality: "Alphonso Labs says matching the exact model number against your carrier's bands and VoLTE list matters, especially on imported phones. Engadget notes the Pixel 10 line is eSIM-only in the US." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use reviewer and maker listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying. New models launched this fall, so check whether a newer version has replaced a pick and confirm the current price.",
  picksNote: "A short list of well-reviewed phones. Models change every year, so use these to learn what to look for and verify the current model and price.",
  picks: [
    { name: "Apple iPhone 17e", facts: { years7: false }, tier: "mid", form: "iphone", checked: "2026-11",
      why: "PhoneArena's pick for an entry-level iPhone under $600, and TechRadar says it keeps the same price as before. Check the storage and current price." },
    { name: "Apple iPhone 17", facts: { years7: false, storage256: true }, tier: "upper", form: "iphone", checked: "2026-11",
      why: "Tom's Guide's best iPhone value, with 256GB as standard per TechRadar. Apple moved the base iPhone 18 to a spring release, per 9to5Mac, so the iPhone 17 is still the current standard model as of November 2026. Check the current price." },
    { name: "Apple iPhone 18 Pro Max", facts: { years7: false }, tier: "upper", form: "iphone", checked: "2026-11",
      why: "Apple replaced the iPhone 17 Pro Max with this one on September 9, 2026, and discontinued the older model, per MacRumors. It starts at $1,299, $100 more than last year's. Reviews of the 17 Pro Max mostly still apply, but we have not seen full 18 Pro Max reviews." },
    { name: "Moto G Play (2026)", facts: { years7: false }, tier: "budget", form: "android", checked: "2026-11",
      why: "Android Headlines' best phone under $250, at $249.99. Motorola sets update support phone by phone, so check the promise." },
    { name: "Samsung Galaxy A17 5G", facts: {}, tier: "budget", form: "android", checked: "2026-11",
      why: "Engadget's best cheap phone overall, listed at $269.99 by Android Headlines. Check its update promise before buying." },
    { name: "Moto G Power (2026)", facts: { years7: false }, tier: "budget", form: "android", checked: "2026-11",
      why: "Android Headlines' best phone under $400, at $399.99, with a big battery and rugged build. Motorola has no clearly defined update policy." },
    { name: "Google Pixel 10a", facts: { years7: true }, tier: "mid", form: "android", checked: "2026-11",
      why: "Tom's Guide's best phone under $500, and Android Headlines' best budget phone overall, with seven years of updates. The Google Store lists it from $599, and Amazon had it about $50 off for Black Friday. It was $499 earlier in 2026, so prices have moved a lot." },
    { name: "Samsung Galaxy A37 5G", facts: { ip68: true }, tier: "mid", form: "android", checked: "2026-11",
      why: "Android Central says it adds IP68 and Android 16 out of the box, and can be found below $400 at times. BGR places it in the $400 to $500 range. A price tracker lists it near $340 to $350 in the US, but another lists $540 for a 256GB version, so check the exact model." },
    { name: "Samsung Galaxy S25 FE", facts: {}, tier: "mid", form: "android", checked: "2026-11",
      why: "Tech Advisor's best mid-range phone, and PhoneArena lists it under $600. Check the current price and update promise." },
    { name: "Samsung Galaxy S26 Ultra", facts: { years7: true }, tier: "upper", form: "android", checked: "2026-11",
      why: "Tom's Guide's best camera phone and best Android phone, with seven years of updates (2026 to 2033). It has a Privacy Display. Samsung raised the list price to $1,399, but it is $949 at Best Buy and Amazon in Black Friday sales." }
  ]
};
