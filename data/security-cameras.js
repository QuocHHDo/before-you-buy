// Category content for the home security camera page. Same shape as the other guides.
// Video doorbells have their own guide. Subscription prices and plan names change often, so check them at checkout.
window.SITE_DATA = {
  category: "security-cameras",
  title: "Before you buy a security camera",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My security camera result: Before You Buy",
  defaultForm: "local",

  forms: {
    "local": "Local storage (records to a card or hub, little or no monthly fee)",
    "cloud": "Cloud (records to the maker's servers, usually a subscription)"
  },

  needDefs: {
    nosub: { label: "Saves video without a subscription", fact: "nosub", is: true },
    battery: { label: "Runs on battery or solar (no power cable)", fact: "battery", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $100",
      adds: "A camera that records to a card with no plan. PCWorld lists the Wyze Cam v4 at $35.98, and it has local storage.",
      missing: "Battery power and outdoor use on the cheapest models. Check the power source before you buy.",
      bestFor: "An indoor camera or a first camera on a tight budget.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$100–250",
      adds: "Battery or solar outdoor cameras. Eufy lists the SoloCam S340 at $199.99, TechRepublic lists the Arlo Pro 6 at $124.99, and one roundup lists the Reolink Argus 4 Pro at about $232.",
      missing: "Free cloud storage. Check which of these save video without a plan.",
      bestFor: "Most outdoor needs where running a power cable is hard."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$250+",
      adds: "A hub-based local system. Eufy lists the SoloCam S340 with a HomeBase S380 at $349.99.",
      missing: "Low cost. Wyze says the S340's built-in storage is 8 GB, and expanding it needs a HomeBase.",
      bestFor: "Several cameras with local storage and no monthly fee.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend on the camera?",
      why: "The camera is the smaller cost if it needs a plan. Which? says 18 of 53 security cameras it tested only let you store video if you sign up to a subscription, including Ring and Nest.",
      options: [
        { id: "100", label: "Under $100", budgetCap: "budget",
          note: "Sets your ceiling at budget tier, where indoor plug-in cameras sit." },
        { id: "250", label: "Up to about $250", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, where battery and solar cameras sit." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "storage",
      short: "Storage",
      ask: "How do you want to keep the footage?",
      why: "SafeWise says Ring doesn't support video recording without a Ring subscription. Ring Protect Basic is $3 a month or $30 a year, and Nest Aware Plus is $15 a month. Eufy lists local storage with cloud from $2.99 a month per camera.",
      options: [
        { id: "local", label: "On a card or hub, with no monthly fee", form: { "local": 4 }, needs: ["nosub"],
          note: "Look for a microSD slot or a hub, and check that recording works without a plan." },
        { id: "either", label: "Either is fine",
          note: "Compare the plan price over a few years against a camera with local storage." },
        { id: "cloud", label: "In the cloud so it survives theft", form: { "cloud": 4 },
          note: "A thief can take a camera with its card. Cloud copies survive that, at a monthly cost." }
      ]
    },
    {
      id: "power",
      short: "Power",
      ask: "Is there a power outlet where it'll go?",
      why: "Tom's Guide says \"wireless\" cameras often still need a power cable, so check for battery or solar if you want true wire-free.",
      options: [
        { id: "plug", label: "Yes, I can plug it in",
          note: "A plug-in camera never needs a recharge." },
        { id: "maybe", label: "Maybe, but it's awkward",
          note: "A battery model gives you the choice. Check how long the battery lasts." },
        { id: "none", label: "No, it has to run on battery or solar", needs: ["battery"], tier: "mid",
          must: ["A battery or solar-powered camera"],
          note: "The battery and solar cameras we found start around $125 to $230. Arlo supports an optional solar charger, and the Pro 6 battery is removable, per TechRepublic." }
      ]
    },
    {
      id: "detail",
      short: "Detail",
      ask: "How far away do you need to see detail?",
      why: "Tom's Guide says to pay for 4K only when you need more detail at distance, and that color night vision needs ambient light or a built-in light.",
      options: [
        { id: "near", label: "A porch or a room",
          note: "2K is enough up close. Don't pay extra for 4K." },
        { id: "yard", label: "A driveway or a yard",
          note: "Look at lens quality and field of view. Digital Trends leans toward the S340 for a wide driveway or yard." },
        { id: "far", label: "Faces or plates at a distance",
          note: "This is where 4K can matter. Check night footage reviews too, since distance and darkness both cut detail." }
      ]
    },
    {
      id: "wifi",
      short: "Wi-Fi",
      ask: "How strong is Wi-Fi where it'll go?",
      why: "Tom's Guide says to test Wi-Fi at the exact mount point. A weak signal drops clips even on a good camera.",
      options: [
        { id: "strong", label: "Strong, close to the router",
          note: "Check on your phone at the exact mount point before you drill." },
        { id: "weak", label: "Weak at the spot I want",
          note: "Consider a mesh node nearby, or a camera with a hub that sits closer." },
        { id: "unknown", label: "I haven't checked",
          note: "Test it first. Take your phone to the mount point and run a speed test." }
      ]
    }
  ],

  brandColumns: ["Ring, Nest and Arlo", "Eufy, Reolink and Wyze", "Blink", "Random no-name"],
  brandRows: [
    { label: "Examples", cells: ["Ring Floodlight Cam Pro, Nest Cam Outdoor, Arlo Pro 6", "Eufy SoloCam S340, Reolink Argus 4 Pro, Wyze Cam v4", "Blink Outdoor 4", "Unbranded Wi-Fi cameras sold under many names. Which? tested models including the ieGeek, Sricam and Accfly Camhi."] },
    { label: "Storage", cells: ["Cloud subscriptions. SafeWise says Ring doesn't record without one, and Arlo local storage needs a SmartHub that isn't included", "Local storage. Eufy lists no monthly fee, Wyze lists microSD, and Reolink lists microSD or a Home Hub", "A $3 monthly plan, with local storage through the Sync Module 2 sold separately", "Usually a memory card or an app-run cloud you can't check. Tom's Guide reports one researcher found cheap app-run cameras uploading to the cloud without proper protection."] },
    { label: "Watch out for", cells: ["Plan names and prices change. Arlo renamed its plans in September 2026", "Wyze says the S340's built-in storage is 8 GB, and expanding it needs a HomeBase", "The module that gives local storage costs extra", "In 2019 Which? reported flaws in cheap cameras sold on Amazon, including weak passwords and Wi-Fi passwords sent unencrypted. Tom's Guide says the cheap app cameras in one test had no way to update their firmware."] }
  ],
  brandVerdict: "Check where the footage is stored and what it costs a year before the resolution. A cheap camera with a required plan can cost more than a pricier one with a card slot.",

  traps: [
    { claim: "\"Records to the cloud\"", reality: "Which? says 18 of 53 tested cameras only let you store video if you sign up to a subscription, including Ring and Nest. SafeWise says Ring doesn't support video recording without a Ring subscription." },
    { claim: "\"Local storage included\"", reality: "Check what's included. Arlo local storage needs a compatible SmartHub that isn't in the box, and Blink's local storage comes through a Sync Module 2 sold separately." },
    { claim: "\"Wireless\"", reality: "Tom's Guide says \"wireless\" cameras often still need a power cable. Look for battery or solar if you want no cable at all." },
    { claim: "\"4K picks up everything\"", reality: "Tom's Guide says to pay for 4K only when you need more detail at distance, and that color night vision needs ambient light or a built-in light." },
    { claim: "\"One low monthly fee\"", reality: "Plans are per camera or per account and change. Eufy's cloud storage now costs from $2.99 a month per camera, and Arlo renamed its plans in September 2026." },
    { claim: "\"It will work on my Wi-Fi\"", reality: "Tom's Guide says to test Wi-Fi at the exact mount point before buying." },
    { claim: "\"It will stay secure\"", reality: "Tom's Guide says to check how often the manufacturer releases firmware updates." }
  ],

  picksListed: "2026-11",
  factsNote: "Storage and power checks use maker and reviewer listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying. Prices move with sales, and tiers for models without a confirmed price are estimates.",
  picksNote: "A short list of well-reviewed cameras. Models, prices and plans change, so use these to learn what to look for and verify the current price and plan cost.",
  picks: [
    { name: "Wyze Cam v4", facts: { nosub: true }, tier: "budget", form: "local", checked: "2026-11",
      why: "PCWorld lists it at $35.98 as its best budget indoor camera, with local storage. Check the power source if you need it outdoors." },
    { name: "Eufy SoloCam S340", facts: { nosub: true, battery: true }, tier: "mid", form: "local", checked: "2026-11",
      why: "Eufy lists it at $199.99 as a solar camera with no monthly fee. PCWorld rates it best outdoor pan-and-tilt camera. Built-in storage is 8 GB per Wyze." },
    { name: "Reolink Argus 4 Pro", facts: { nosub: true, battery: true }, tier: "mid", form: "local", checked: "2026-11",
      why: "A solar 4K camera listed at about $232 with microSD or Home Hub storage. The solar panel may be sold separately, so check what's included." },
    { name: "Arlo Pro 6", facts: { nosub: false, battery: true }, tier: "mid", form: "cloud", checked: "2026-11",
      why: "TechRepublic lists it at $124.99 with a removable battery and an optional solar charger. Live view and basic alerts are free, but cloud features need a plan." },
    { name: "Ring Floodlight Cam Pro", facts: { nosub: false }, tier: "mid", form: "cloud", checked: "2026-11",
      why: "PCWorld lists it at $229.99. A Ring subscription is required to save footage, and Ring Protect Basic is $3 a month or $30 a year." },
    { name: "Google Nest Cam Outdoor (wired, 2nd gen)", facts: { nosub: false, battery: false }, tier: "mid", form: "cloud", checked: "2026-11",
      why: "TechRepublic lists it at $199.99 as a wired 2K camera with 6 hours of free event previews. Nest Aware Plus is $15 a month for more." },
    { name: "Blink Outdoor 4", facts: { battery: true }, tier: "mid", form: "cloud", checked: "2026-11",
      why: "One roundup lists the add-on camera at about $100 with a long battery life. Plans are $3 a month, and local storage needs the Sync Module 2, sold separately." },
    { name: "Eufy SoloCam S340 with HomeBase S380", facts: { nosub: true, battery: true }, tier: "upper", form: "local", checked: "2026-11",
      why: "Eufy lists the bundle at $349.99. The HomeBase adds expandable local storage, so you aren't limited to the camera's built-in 8 GB." }
  ]
};
