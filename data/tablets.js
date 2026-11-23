// Category content for the tablet and e-reader page. Same shape as the other guides.
// Three forms: iPad, Android tablet, e-reader. Update promises matter more than specs here.
window.SITE_DATA = {
  category: "tablets",
  title: "Before you buy a tablet or e-reader",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My tablet result: Before You Buy",
  defaultForm: "ipad",

  forms: {
    "ipad": "iPad (the biggest app choice, long updates, pricey extras)",
    "android": "Android tablet (more choice and lower prices, updates vary)",
    "ereader": "E-reader (a paperback replacement, not a tablet)"
  },

  needDefs: {
    longsupport: { label: "A published promise of 5+ years of updates", fact: "longsupport", is: true },
    storage128: { label: "128GB of storage or more to start", fact: "storage128", is: true },
    waterproof: { label: "Waterproof, for the bath or beach", fact: "waterproof", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under about $300",
      adds: "A screen for reading, video and browsing. The Kobo Libra Colour e-reader is $229.99 per NBC Select, and Tom's Guide names the Motorola MotoPad (2026) its best budget Android tablet.",
      missing: "Long update promises, premium screens and fast performance.",
      bestFor: "Reading, video, kids and a second screen.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$300–700",
      adds: "The entry iPad, now $449 after Apple's June 2026 price rise, or the iPad mini at $599. Android mid-range tablets such as the Lenovo Tab Plus Gen 2 or Galaxy Tab S10 FE.",
      missing: "The best screens and the longest update promises on Android.",
      bestFor: "Most people who want one tablet for everything."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$700+",
      adds: "The iPad Air at $749 and iPad Pro at $1,199 after the June 2026 rise, or Samsung's Galaxy Tab S11 with a seven-year update promise.",
      missing: "Everyday value. Accessories like a keyboard and pen add more on top.",
      bestFor: "Drawing, note-taking and laptop-style work.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend on the device?",
      why: "Apple raised iPad prices in June 2026, blaming memory costs from AI data centers: the entry iPad went from $349 to $449, and the iPad Air from $599 to $749.",
      options: [
        { id: "300", label: "Under about $300", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. E-readers and budget Android tablets live here; a new iPad does not." },
        { id: "700", label: "Up to about $700", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, where the entry iPad and iPad mini sit." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "type",
      short: "Type",
      ask: "What kind of device do you want?",
      why: "An e-reader and a tablet are different tools. An e-reader has a glare-free screen and weeks of battery, per NBC Select, but little else. A tablet does everything, with a shorter battery.",
      options: [
        { id: "ereader", label: "Mostly reading books", form: { "ereader": 4 },
          note: "NBC Select says e-readers have glare-free screens and weeks-long battery life that make them better for reading than a phone." },
        { id: "ipad", label: "A tablet, and I'm happy with Apple", form: { "ipad": 4 },
          note: "Tom's Guide says the entry iPad is the one to get for streaming, browsing, reading, video calls and casual gaming." },
        { id: "android", label: "A tablet, and I prefer Android", form: { "android": 4 },
          note: "The Gadgeteer says to pick the Galaxy Tab S11 if you want Android, S Pen, expandable storage and Samsung's software." },
        { id: "unsure", label: "Not sure yet",
          note: "iPad is the default for the picks below. Choose an e-reader if reading is the main use." }
      ]
    },
    {
      id: "years",
      short: "Years",
      ask: "How long do you want it to last?",
      why: "Update promises differ widely. BGR says most mid-range and cheaper Android tablets don't exceed three to five years of OS updates, while an iPad can last four to seven years or more.",
      options: [
        { id: "short", label: "2 to 3 years, or a kid's tablet",
          note: "A cheap tablet is fine, as long as you accept it may stop updating." },
        { id: "long", label: "5 years or more", tier: "mid", needs: ["longsupport"],
          must: ["A published update promise of 5 or more years, not an estimate"],
          note: "BGR says Samsung's Galaxy Tab S11 gets up to seven years of updates, and Which? lists Apple at five years of security support." }
      ]
    },
    {
      id: "use",
      short: "Use",
      ask: "What will you do on it most?",
      why: "Drawing and work want a pen, a keyboard and a bigger screen. Reading and video do not, and paying for more is the usual waste.",
      options: [
        { id: "watch", label: "Video, browsing, games and reading",
          note: "The Gadgeteer says a $1,000 tablet can be a poor purchase if you're mainly watching Netflix." },
        { id: "write", label: "Drawing, notes or school work", tier: "mid",
          note: "Accessories add up: Engadget says the Magic Keyboard and Apple Pencil Pro make the iPad Pro cost even more." },
        { id: "bath", label: "Reading by the pool or in the bath", form: { "ereader": 2 }, needs: ["waterproof"],
          must: ["A published IP rating for water, not just a splash-proof claim"],
          note: "Stuff says the Kindle Paperwhite has IPX8 waterproofing, and BestReviews says the Kobo Libra Colour is waterproof." }
      ]
    },
    {
      id: "storage",
      short: "Storage",
      ask: "How much will you keep on it?",
      why: "Storage can't be added on most tablets. Digital Trends notes the entry iPad now starts at 128GB, double the old 64GB.",
      options: [
        { id: "little", label: "Streaming and a few apps",
          note: "Streaming doesn't need much space. Books are tiny, so an e-reader's 16 to 32GB is plenty." },
        { id: "lots", label: "Downloads, games, photos or video", needs: ["storage128"],
          must: ["128GB or more as the base size, since storage usually can't be added later"],
          note: "The Gadgeteer lists expandable storage as a Galaxy Tab S11 feature, which helps if you outgrow the base size." }
      ]
    }
  ],

  brandHeading: "Platforms compared",
  brandColumns: ["iPad", "Android tablets", "E-readers"],
  brandRows: [
    { label: "Examples", cells: ["iPad, iPad mini, iPad Air", "Galaxy Tab S11, Lenovo Tab Plus Gen 2, Motorola MotoPad", "Kindle Paperwhite, Kobo Libra Colour"] },
    { label: "What stands out", cells: ["The biggest app choice; BGR says an iPad can last four to seven years or more", "More choice and lower prices; the OnePlus Pad 3 has a 144Hz display, per TechRadar", "Glare-free screens and weeks of battery; Amazon says up to 10 weeks on the Paperwhite per Stuff"] },
    { label: "Updates", cells: ["Which? lists five years of security support", "Samsung promises seven years on its newest tablets; cheaper models get far less, per BGR", "Not a concern in the same way, since they do one job"] },
    { label: "Watch out for", cells: ["Price rises in June 2026 and costly accessories; the entry iPad has no Apple Intelligence per TechRadar", "Update promises that differ by model; Samsung's Tab A8 lost Android support after three years", "Store lock-in: Kindle books come from Amazon and Kobo books from Kobo, per NBC Select"] }
  ],
  brandVerdict: "Decide how long you want it to keep updating before you look at screens. A tablet that stops getting updates in three years is cheaper only if you plan to replace it then.",

  traps: [
    { claim: "\"Android tablets are cheaper to own\"", reality: "BGR says most mid-level and cheaper Android tablets don't exceed three to five years of OS updates, and entry models from no-name brands may offer a year or two, or none." },
    { claim: "\"It runs the latest Android\"", reality: "BGR says Samsung's 2022 Galaxy Tab A8 lost Android support in 2025 after three years, and stopped getting security patches by February 2026." },
    { claim: "\"iPads cost what they used to\"", reality: "Digital Trends says the entry iPad went from $349 to $449 after Apple's June 2026 rise, the iPad mini from $499 to $599 and the iPad Air from $599 to $749." },
    { claim: "\"The cheapest iPad has every Apple feature\"", reality: "TechRadar says one drawback of the cheapest iPad is that it doesn't support Apple Intelligence." },
    { claim: "\"The price is the tablet's price\"", reality: "Engadget says accessories like the Magic Keyboard and Apple Pencil Pro make the iPad Pro cost even more, and Digital Trends calls the entry iPad's accessories a little too pricey." },
    { claim: "\"My Kindle books will work on a Kobo\"", reality: "NBC Select says Kindle devices buy books from the Amazon store, while Kobo devices use the Kobo store. Some devices let you transfer ebook files from a computer." },
    { claim: "\"A Fire tablet gets Android updates\"", reality: "Amazon says Fire tablets get guaranteed security updates until at least four years after the model was last sold. That's a security promise, not a promise of new Android versions." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use reviewer and maker listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying. Tablet prices moved in 2026, so confirm the current price and storage size.",
  picksNote: "A short list of well-reviewed tablets and e-readers. Models change every year, so use these to learn what to look for and verify the current price.",
  picks: [
    { name: "Apple iPad (A16)", facts: { longsupport: true, storage128: true }, tier: "mid", form: "ipad", checked: "2026-11",
      why: "Digital Trends recommends it for most people who want a tablet, now $449 for 128GB after a $100 rise. It has no Apple Intelligence." },
    { name: "Apple iPad mini", facts: { longsupport: true, storage128: true }, tier: "mid", form: "ipad", checked: "2026-11",
      why: "Digital Trends lists the 128GB model at $599 after a $100 rise. A small, pocketable iPad; check the current price." },
    { name: "Apple iPad Air (M4)", facts: { longsupport: true, storage128: true }, tier: "upper", form: "ipad", checked: "2026-11",
      why: "Tech Advisor's best iPad. The 128GB model is $749 after Apple's June 2026 rise. Accessories aren't included." },
    { name: "Samsung Galaxy Tab S11", facts: { longsupport: true }, tier: "upper", form: "android", checked: "2026-11",
      why: "BGR says it gets up to seven years of updates. The Gadgeteer picks it for Android, S Pen and expandable storage. Check the current price." },
    { name: "Samsung Galaxy Tab S10 FE", facts: {}, tier: "mid", form: "android", checked: "2026-11",
      why: "BestReviews' best Android tablet for most people. Check the current price and the update promise." },
    { name: "Lenovo Tab Plus Gen 2", facts: {}, tier: "mid", form: "android", checked: "2026-11",
      why: "A Tom's Guide editor's choice, with a nine-speaker JBL system. Which? lists Lenovo at two years of security support, so check the update promise." },
    { name: "Motorola MotoPad (2026)", facts: {}, tier: "budget", form: "android", checked: "2026-11",
      why: "Tom's Guide's best budget Android tablet. Cheaper Android tablets get fewer updates, so check the promise." },
    { name: "Kindle Paperwhite (12th gen)", facts: { waterproof: true }, tier: "budget", form: "ereader", checked: "2026-11",
      why: "Stuff's best e-reader, with a 300ppi screen, IPX8 waterproofing and up to 10 weeks per charge. Best if you buy Kindle books. Check the current price." },
    { name: "Amazon Kindle (basic)", facts: {}, tier: "budget", form: "ereader", checked: "2026-11",
      why: "Stuff calls it the best option for bookworms on a budget, with a front light. It has no cellular option." },
    { name: "Kobo Libra Colour", facts: { waterproof: true, storage128: false }, tier: "budget", form: "ereader", checked: "2026-11",
      why: "NBC Select lists it at $229.99 with a 7-inch color screen and 32GB. A stylus is sold separately; it uses the Kobo store and supports library borrowing." }
  ]
};
