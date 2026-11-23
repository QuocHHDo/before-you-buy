// Category content for the video doorbell page. Same shape as the other guides.
window.SITE_DATA = {
  category: "doorbells",
  title: "Before you buy a video doorbell",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My video doorbell result: Before You Buy",
  defaultForm: "nosub",

  forms: {
    "nosub": "No monthly fee (video is saved on the doorbell or your own storage)",
    "cloud": "Cloud doorbell (saved video needs a monthly plan)"
  },

  needDefs: {
    nosub: { label: "Saves video with no monthly fee", fact: "nosub", is: true },
    battery: { label: "Installs without doorbell wiring", fact: "battery", is: true },
    pkg: { label: "Sees packages at your feet", fact: "pkg", is: true },
    apple: { label: "Works with Apple Home", fact: "apple", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $100",
      adds: "Clear video, motion alerts and two-way talk. A Wyze battery doorbell was listed around $47, and a Ring wired 2K model at $89.99.",
      missing: "Dual cameras for packages and, on cloud models, saved video without a plan.",
      bestFor: "Renters and a first doorbell.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$100–200",
      adds: "Better apps and smarter alerts, or a second camera that sees packages, as on the Eufy E340.",
      missing: "Free full features on cloud models. Ring and Nest hold most of their saved video and smart alerts behind a monthly plan.",
      bestFor: "A front door that gets packages and visitors."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$200+",
      adds: "Wired power for 24/7 recording and wide coverage, as on the Eufy S4 at $299.99.",
      missing: "A clear need. The mid tier already covers visitors and packages, so check you want continuous recording.",
      bestFor: "A wired setup that records around the clock.",
      badge: "Paying for coverage"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend on the doorbell itself?",
      why: "The price on the box is only part of the cost. A monthly plan can add as much over a few years, which the next questions cover.",
      options: [
        { id: "100", label: "Under $100", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. Good cloud models live here; no-fee models with local storage start near the top of it." },
        { id: "200", label: "Up to $200", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, which covers dual-camera and name-brand cloud models." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "wiring",
      short: "Wiring",
      ask: "Do you have doorbell wires at the door?",
      why: "Battery models mount anywhere, but you recharge them. Wired models need your existing low-voltage doorbell wiring and can record continuously.",
      options: [
        { id: "wired", label: "Yes, I have doorbell wiring",
          note: "Eufy's wired S4 records 24/7 on wired power, but it requires compatible doorbell wiring." },
        { id: "nowire", label: "No wires, or I rent", needs: ["battery"],
          must: ["A battery or dual-power model that mounts without wiring"],
          note: "Reolink notes that battery life varies with how often it records, what it detects and the temperature." }
      ]
    },
    {
      id: "sub",
      short: "Monthly fee",
      ask: "Are you willing to pay a monthly fee?",
      why: "Without a plan, Ring's doorbell shows live video and alerts but won't save recordings. A plan costs $4.99 a month or $49.99 a year. That is about $150 over three years, on top of the doorbell.",
      options: [
        { id: "no", label: "No, I want video saved for free", form: { "nosub": 5 }, needs: ["nosub"],
          must: ["Video saved on the doorbell, a microSD card or a hub, with no required monthly plan"],
          note: "Consumer Reports says cloud fees can add up to as much as the doorbell after a few years. Local storage may need a microSD card or hub, which costs extra." },
        { id: "ok", label: "Yes, a small fee is fine", form: { "cloud": 3 },
          note: "Ring Protect Basic is $4.99 a month. Android Central lists Nest Aware at $6 a month, covering all your Nest cameras." },
        { id: "unsure", label: "I haven't decided",
          note: "Decide before you buy, because the doorbell's storage design is hard to change later." }
      ]
    },
    {
      id: "pkg",
      short: "Packages",
      ask: "Do you want to see packages left at your feet?",
      why: "A normal doorbell camera looks straight out and can miss a box set down by the door. Some have a second lens or a tall view for that.",
      options: [
        { id: "yes", label: "Yes, package view matters", tier: "mid", needs: ["pkg"],
          must: ["A dual-camera or head-to-toe view that sees the floor"],
          note: "Home & Gardens says the Eufy E340 has dual cameras for the visitor and the floor. It also praises the Ring Battery Doorbell Plus for head-to-toe video." },
        { id: "no", label: "No, I mainly want to see visitors" }
      ]
    },
    {
      id: "home",
      short: "Smart home",
      ask: "Which smart-home system do you use?",
      why: "A doorbell works best with your own system. Support varies a lot, and Apple Home is the rarest.",
      options: [
        { id: "alexa", label: "Alexa", form: { "cloud": 1 },
          note: "Ring is Amazon's, and Alexa support is strong. Eufy also works with Alexa and Google Home, per Smart Home Compared." },
        { id: "google", label: "Google Home",
          note: "Tom's Guide and Reviewed rate the Google Nest Doorbell the best overall. Eufy also works with Google Home." },
        { id: "apple", label: "Apple Home", needs: ["apple"],
          must: ["Apple Home (HomeKit) support, which few doorbells have"],
          note: "One example is the Aqara G4, which Itechguides lists for Apple Home users, with a microSD slot in its chime. Check its price and fit first." },
        { id: "none", label: "None, I just want the app" }
      ]
    }
  ],

  brandHeading: "Brands compared",
  brandColumns: ["Ring and Google Nest", "Eufy and Reolink", "Wyze and bargain brands"],
  brandRows: [
    { label: "Examples", cells: ["Ring Battery Doorbell Plus, Nest Doorbell", "Eufy E340, Reolink Video Doorbell", "Wyze Battery Video Doorbell, no-name listings"] },
    { label: "What stands out", cells: ["Polished apps and strong smart-home links, with video history sold as a plan", "Local storage and no required monthly fee", "The lowest prices. Tom's Guide names the Wyze its best value, under $100"] },
    { label: "Monthly cost", cells: ["Ring Protect Basic $4.99. Nest Aware about $6, per Android Central", "None required. Optional cloud storage is sold separately", "Low. Wyze's plan costs less than Ring, Nest or Arlo, per Tom's Guide"] },
    { label: "Watch out for", cells: ["Paying for features that sit behind the plan", "You may need a microSD card or hub; remote access still depends on Wi-Fi", "Which? lists some models with no stated software update period"] }
  ],
  brandVerdict: "Decide on storage and monthly cost first, then brand. The big names are polished but charge for history. Eufy and Reolink save video locally for free, but you manage the storage. Whichever you pick, check how long the maker promises software updates.",

  traps: [
    { claim: "\"Works with no subscription\"", reality: "Ring's doorbell works live without a plan, but recordings need one. 'No monthly fee' elsewhere often means local storage, and you may need to buy a microSD card or hub." },
    { claim: "\"Only $4.99 a month\"", reality: "That's $49.99 a year, or about $150 over three years, per doorbell. Consumer Reports says the fees can add up to the price of the doorbell itself after a few years." },
    { claim: "\"Local storage\"", reality: "Blink's doorbell needs the optional Sync Module 2 for live view and for local video storage. Check that the storage you want is in the box." },
    { claim: "\"Records 24/7\"", reality: "Continuous recording generally needs wired power. One UK guide says Ring doesn't offer it on any battery model, and Nest's continuous recording on the wired doorbell needs the pricier Aware Plus plan." },
    { claim: "\"Long battery life\"", reality: "Reolink says battery life varies with how often it records, how much it detects and the temperature. A busy street drains it faster." },
    { claim: "\"Easy to install\"", reality: "Wired models need compatible doorbell wiring, according to Eufy. If your wiring is old or absent, pick a battery or dual-power model." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use maker, retailer and reviewer listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying.",
  picksNote: "Well-reviewed video doorbells, sorted by typical price. Prices and subscription plans change often, and listings show frequent sales.",
  picks: [
    { name: "Eufy Video Doorbell C31 (battery)", facts: { nosub: true, battery: true }, tier: "budget", form: "nosub", checked: "2026-11",
      why: "Consumer Reports calls it a solid, relatively inexpensive battery doorbell with a 2K camera and excellent response times. An optional storage plan exists. Check the current price." },
    { name: "Wyze Battery Video Doorbell", facts: { battery: true }, tier: "budget", form: "cloud", checked: "2026-11",
      why: "Tom's Guide's best-value pick, under $100. Smart Home Compared listed it at $47.48. Wyze's optional plan costs less than Ring, Nest and Arlo." },
    { name: "Ring Wired Doorbell 2K Plus", facts: { nosub: false, battery: false, apple: false }, tier: "budget", form: "cloud", checked: "2026-11",
      why: "Listed at $89.99 by Smart Home Compared, and Reviewed rates a wired Ring its best value. Saving video needs a Ring Protect plan." },
    { name: "Eufy Video Doorbell E340", facts: { nosub: true, battery: true, pkg: true, apple: false }, tier: "mid", form: "nosub", checked: "2026-11",
      why: "Dual cameras for the visitor and the floor, with built-in storage (reviewers cite 7 to 8GB) and no monthly fee. Eufy's site showed $119.99, and it usually costs $140 to $170 per Home & Gardens. Its listed integrations are Google Home and Alexa, not Apple Home." },
    { name: "Ring Battery Doorbell Plus", facts: { nosub: false, battery: true, pkg: true }, tier: "mid", form: "cloud", checked: "2026-11",
      why: "Home & Gardens' top pick if you accept a subscription. Without a plan it won't record clips or tell people from packages. Plans start at $4.99 a month." },
    { name: "Google Nest Doorbell (wired, 3rd gen)", facts: { battery: false }, tier: "mid", form: "cloud", checked: "2026-11",
      why: "Tom's Guide and Reviewed rate it the best overall. NerdWallet lists the hardware at $179.99, and Nest Aware is about $6 a month." },
    { name: "Eufy Video Doorbell S4 (wired)", facts: { nosub: true, battery: false }, tier: "upper", form: "nosub", checked: "2026-11",
      why: "Eufy's best overall no-subscription pick. 4GB built-in storage, 24/7 recording on wired power and 180 degree coverage. It needs compatible doorbell wiring. $299.99 with a chime on Eufy's site." }
  ]
};
