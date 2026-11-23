// Category content for the smart ring page. Same shape as the other guides.
// US prices, November 2026. Ring prices, membership plans and availability move often.
window.SITE_DATA = {
  category: "smart-rings",
  title: "Before you buy a smart ring",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My smart ring result: Before You Buy",
  defaultForm: "nofee",

  forms: {
    "nofee": "No-subscription ring (all core data included)",
    "membership": "Membership ring (full insights need a monthly or yearly plan)"
  },

  needDefs: {
    ios: { label: "Works with iPhone", fact: "ios", is: true },
    battery10: { label: "Claims about 10+ days of battery", fact: "battery10", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $250",
      adds: "A ring with sleep and activity tracking and no fee. NBC lists the RingConn Gen 2 Air at $199 with no subscription fee and up to 10 days of battery.",
      missing: "Some sleep depth. Tom's Guide says the Gen 2 Air gives more sleep insight than the Amazfit Helio, and another review lists fewer advanced metrics than the RingConn Gen 2.",
      bestFor: "A first ring, or anyone who wants tracking without ongoing costs.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$250–400",
      adds: "The best-known rings. Oura lists the Ring 4 at $349 and the Ring 5 at $399, the RingConn Gen 2 is $299 per Dupple, and Android Central lists the Samsung Galaxy Ring at $399.",
      missing: "Free full insights on Oura. Dupple puts the 24-month cost of the Oura Ring 4 at $488.98 with membership.",
      bestFor: "Buyers who want the best-tested sleep tracking, or an Android phone's ecosystem."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$400+",
      adds: "Premium finishes and long battery claims. Bloomberg lists the Oura Ring 4 Ceramic at $499, and Dupple lists the Ultrahuman Ring PRO at $479 with no plan.",
      missing: "Value. A budget ring tracks the same basics, so check what the extra money buys.",
      bestFor: "Buyers who want a particular look or the newest ring.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend on the ring?",
      why: "The ring's price isn't the whole cost. Oura's US membership is $5.99 a month or $69.99 a year, and one report puts the three-year bill for a $349 Oura at roughly $559.",
      options: [
        { id: "250", label: "Under $250", budgetCap: "budget",
          note: "Sets your ceiling at budget tier, where the subscription-free rings start." },
        { id: "400", label: "Up to about $400", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, where Oura and the Galaxy Ring sit." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "phone",
      short: "Phone",
      ask: "What phone will you pair it with?",
      why: "Compatibility differs. Best Buy says the Samsung Galaxy Ring only works with Android devices and unlocks more features with a Samsung Galaxy phone. Oura needs iOS 16 or later and RingConn needs iOS 17 or later, per m8d.",
      options: [
        { id: "iphone", label: "iPhone", needs: ["ios"],
          note: "The Galaxy Ring won't work. Check that your iOS version meets the ring's minimum." },
        { id: "galaxy", label: "A Samsung Galaxy phone",
          note: "The Galaxy Ring unlocks more features with a Galaxy phone, but other rings work too." },
        { id: "android", label: "Another Android phone",
          note: "Check that the ring's app supports your phone. The Galaxy Ring works with Android but gives up some features without a Galaxy phone." }
      ]
    },
    {
      id: "fee",
      short: "Fee",
      ask: "How do you feel about a monthly fee?",
      why: "Best Buy says Oura offers minimal data without its membership, while most smart rings don't require a subscription. Best Buy also warns that \"no subscription\" does not always mean identical feature depth.",
      options: [
        { id: "none", label: "No subscription, ever", form: { "nofee": 4 },
          note: "RingConn, Ultrahuman, Samsung and Amazfit list no subscription for core data. Check what the app includes." },
        { id: "worth", label: "Fine if the app is worth it", form: { "membership": 3 },
          note: "Oura's membership is tied to your account, not the ring, and includes a free first month." },
        { id: "unsure", label: "I haven't decided",
          note: "Compare the total over two or three years, not the ring's price alone." }
      ]
    },
    {
      id: "use",
      short: "Use",
      ask: "What's your main reason for a ring?",
      why: "The Gadgeteer's one-line verdict is sleep first, buy Oura; training and recovery first, buy the RingConn Gen 2. That's one reviewer's view, so treat it as a lead and not a rule.",
      options: [
        { id: "sleep", label: "Detailed sleep tracking", form: { "membership": 1 }, tier: "mid",
          must: ["Deep sleep insights, which reviewers find at Oura and the RingConn Gen 2, from about $299"],
          note: "Oura leads most reviews for sleep, but needs a membership. Tom's Guide says the RingConn Gen 2 Air also gives comprehensive sleep insight for $199." },
        { id: "train", label: "Training and recovery",
          note: "The Gadgeteer points to the RingConn Gen 2 for training and recovery. A ring can't replace a sports watch for workouts." },
        { id: "general", label: "General health and steps",
          note: "A budget ring covers this. Pay for extras only if you'll use them." }
      ]
    },
    {
      id: "battery",
      short: "Battery",
      ask: "How often are you willing to charge it?",
      why: "Best Buy says to read the fine print behind a battery claim, since results vary by ring size, settings and use. RingConn promises 12 days for the Gen 2, but Beebom says 8 to 9 days would still be the longest of any ring.",
      options: [
        { id: "often", label: "Every few days is fine",
          note: "Most rings meet this. Best Buy says makers typically advertise about 4 to 7 days." },
        { id: "week", label: "About once a week",
          note: "Aim for a claim of at least 7 days. Android Authority got only 3 to 4 days from an Ultrahuman ring advertised at up to 6." },
        { id: "rare", label: "As rarely as possible", needs: ["battery10"],
          note: "RingConn lists 10 to 12 days. Expect less in practice, and check reviews for real-world numbers." }
      ]
    },
    {
      id: "fit",
      short: "Fit",
      ask: "Have you worn a ring every day, including to sleep?",
      why: "Digital Trends says the sensors need to touch your skin, and a ring that's too big gives less accurate data. It says to get the sizing kit first, and that it's also how you learn whether a ring suits you at all.",
      options: [
        { id: "yes", label: "Yes, I wear one daily",
          note: "You'll still want the sizing kit. Smart ring sizes don't always match jewelry sizes." },
        { id: "no", label: "No, it'd be new to me",
          note: "Order the sizing kit and wear the sample ring for a few days before you commit. Samsung's kit asks for at least 24 hours." },
        { id: "swell", label: "My fingers swell or change size",
          note: "Best Buy says fingers expand and contract with temperature and time of day. Try sizes at different times of day, and check the return policy." }
      ]
    }
  ],

  brandHeading: "Brands compared",
  brandColumns: ["Oura", "RingConn and Amazfit", "Samsung and Ultrahuman"],
  brandRows: [
    { label: "Examples", cells: ["Ring 4, Ring 5, Ring 4 Ceramic", "RingConn Gen 2 Air, Gen 2, Gen 3; Amazfit Helio Ring", "Galaxy Ring; Ultrahuman Ring PRO"] },
    { label: "What stands out", cells: ["Positioned as the best overall by several reviewers, with a membership for full insights", "Tom's Guide lists the Gen 2 Air and Helio at $199 each with no subscription", "Samsung lists no subscription, and Dupple lists the Ultrahuman Ring PRO at $479 with no plan"] },
    { label: "Watch out for", cells: ["Best Buy says it offers minimal data without the membership", "RingConn settled its patent dispute with Oura, but TechRepublic says current stock of the Gen 3 may be limited", "The Galaxy Ring is Android only, and Dupple says the Ultrahuman Ring AIR can't ship to the US"] }
  ],
  brandVerdict: "Decide on the fee, your phone and fit before the brand. A cheaper ring with no fee can do most of what a premium one does, and a ring that doesn't fit or doesn't pair with your phone does none of it.",

  traps: [
    { claim: "\"Free to use\"", reality: "Best Buy says Oura offers minimal data without a membership. Oura's US plan is $5.99 a month or $69.99 a year, and Dupple puts the 24-month total for a $349 Oura Ring 4 at $488.98." },
    { claim: "\"No subscription, same features\"", reality: "Best Buy says no subscription doesn't always mean identical feature depth. Another review lists fewer advanced metrics on the subscription-free RingConn Gen 2 than on some rivals." },
    { claim: "\"Up to 12 days of battery\"", reality: "Beebom says 8 to 9 days would still be the longest of any ring. Android Authority got 3 to 4 days from a ring advertised at up to 6, though AOL's reviewer averaged about 6 on the same model." },
    { claim: "\"Works with your phone\"", reality: "Best Buy says the Galaxy Ring only works with Android and unlocks more features with a Galaxy phone. m8d lists Oura as needing iOS 16 or later and RingConn iOS 17 or later." },
    { claim: "\"Your normal ring size\"", reality: "Digital Trends says to get the sizing kit first, since sensors need skin contact and a loose ring gives less accurate data. Verizon says Galaxy Ring sizes differ from standard ring sizes." },
    { claim: "\"A smartwatch replacement\"", reality: "Android Authority says smartwatches' bulkier designs offer advantages in sensor size, surface area, chip power and antenna reliability." },
    { claim: "\"Available now\"", reality: "Availability changes with patent fights. The ITC banned Ultrahuman rings from US sales, Dupple says the Ring AIR can't ship to the US, and Ultrahuman's redesigned Ring PRO cleared US customs in March 2026, per Sacra." },
    { claim: "\"Scratch-proof\"", reality: "Forbes called the RingConn Gen 2 Air the sturdiest ring it tested, but it still showed scratches after weeks of daily wear." }
  ],

  picksListed: "2026-11",
  factsNote: "Phone and battery checks use maker claims and reviewer listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying. Battery figures are maker claims, and prices and availability change.",
  picksNote: "A short list of well-reviewed rings. Models, prices and plans change, so use these to learn what to look for and verify the current price, membership cost and stock.",
  picks: [
    { name: "RingConn Gen 2 Air", facts: { ios: true, battery10: true }, tier: "budget", form: "nofee", checked: "2026-11",
      why: "NBC lists it at $199 with no subscription fee and up to 10 days of battery. Forbes called it the sturdiest ring it tested, though it still scratched. RingConn settled its dispute with Oura, so it's available in the US." },
    { name: "Amazfit Helio Ring", facts: {}, tier: "budget", form: "nofee", checked: "2026-11",
      why: "Tom's Guide lists it at $199 with no subscription. Tom's Guide says the RingConn Gen 2 Air gives more comprehensive sleep insight. Check phone support." },
    { name: "RingConn Gen 2", facts: { battery10: true }, tier: "mid", form: "nofee", checked: "2026-11",
      why: "Dupple lists it at $299. RingConn claims 12 days of battery, though Beebom says 8 to 9 would still be the longest. Wareable calls it the slimmest ring, at 2mm." },
    { name: "RingConn Gen 3", facts: { ios: true, battery10: true }, tier: "mid", form: "nofee", checked: "2026-11",
      why: "One roundup lists it at $349 with almost two weeks of battery. TechRepublic says its current stock may be a problem, so confirm it's in stock." },
    { name: "Samsung Galaxy Ring", facts: { ios: false, battery10: false }, tier: "mid", form: "nofee", checked: "2026-11",
      why: "Android Central lists it at $399. It's Android only, unlocks more with a Galaxy phone, and Gizmodo lists up to seven days of battery." },
    { name: "Oura Ring 4", facts: { ios: true }, tier: "mid", form: "membership", checked: "2026-11",
      why: "Dupple lists the silver at $349, with a $69.99 yearly membership for a 24-month total of $488.98. Several reviewers rate it among the best for sleep. Check the battery claim." },
    { name: "Oura Ring 5", facts: { ios: true }, tier: "mid", form: "membership", checked: "2026-11",
      why: "TechRepublic lists it from $399, with membership needed for full insights after the included first month. Wareable names it its top pick. Check the battery claim." },
    { name: "Ultrahuman Ring PRO", facts: { battery10: true }, tier: "upper", form: "nofee", checked: "2026-11",
      why: "Dupple lists it at $479 with no plan, and TechRepublic says it offers the longest battery claim in its roundup and was still in preorder. Check phone support and shipping." },
    { name: "Oura Ring 4 Ceramic", facts: { ios: true }, tier: "upper", form: "membership", checked: "2026-11",
      why: "Bloomberg lists it at $499. It adds the ceramic finishes, and the membership still applies. The price tier reflects that." }
  ]
};
