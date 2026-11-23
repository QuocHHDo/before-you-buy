// Category content for the vacuum cleaner page (stick and corded). Same shape as the other guides.
// Robot vacuums have their own guide. Prices move a lot with sales, so tiers are approximate.
window.SITE_DATA = {
  category: "vacuums",
  title: "Before you buy a vacuum cleaner",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My vacuum result: Before You Buy",
  defaultForm: "cordless",

  forms: {
    "cordless": "Cordless stick (battery powered, easy to grab)",
    "corded": "Corded (plugs in, no battery to run out or wear out)"
  },

  needDefs: {
    runtime40: { label: "About 40 minutes or more of run time", fact: "runtime40", is: true },
    battery: { label: "A battery you can replace", fact: "battery", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $200",
      adds: "A cordless stick that handles quick cleanups. Savedelete lists the Eureka ReactiSense 440 at $180, and HGTV lists the Tineco Pure ONE S11 at $179.",
      missing: "Run time and battery headroom on some models. The Eureka lists a 33-minute battery.",
      bestFor: "A small home, a second vacuum, or quick cleanups between deeper cleans.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$200–400",
      adds: "Longer run times and stronger tested performance. Savedelete lists the Shark Stratos at $300 with 80 minutes, and Vacuum Wars names it best value.",
      missing: "The lowest price. Check what the model's filter and battery cost to replace.",
      bestFor: "Most homes with a mix of floors.",
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$400+",
      adds: "Premium builds and smart features. Vacuum Wars keeps the Dyson V15 Detect as its premium pick.",
      missing: "Value. RTINGS says the newer Dyson V16 is an incremental upgrade that isn't worth the premium, and it performs worse overall.",
      bestFor: "Buyers who want the strongest cordless cleaning and will pay for it.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend?",
      why: "Budget sticks exist, but replacement parts add up. Choice says a new Dyson battery can cost up to $199 and a replacement filter up to $40, so look at the total over a few years.",
      options: [
        { id: "200", label: "Under $200", budgetCap: "budget",
          note: "Sets your ceiling at budget tier, where run time is often shorter." },
        { id: "400", label: "Up to about $400", budgetCap: "mid",
          note: "Sets your ceiling at mid tier." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "home",
      short: "Home",
      ask: "How big is the job?",
      why: "Consumer Reports says stick vacuums have improved but are generally best suited for small cleanups. It also says its pick of the year for top stick vacuum is the corded Shark PowerDetect HZ4002, which earned the best rating of all the sticks tested, corded and cordless.",
      options: [
        { id: "small", label: "A small home or quick cleanups", form: { "cordless": 4 },
          note: "A cordless stick fits. It's easy to grab and store." },
        { id: "mixed", label: "A mid-size home with mixed floors", form: { "cordless": 2, "corded": 1 },
          note: "Either can work. Run time and battery life matter more with cordless." },
        { id: "whole", label: "A large home, or deep cleans of carpet", form: { "corded": 4 },
          note: "Consider corded. Consumer Reports' top-rated stick is corded, and you never wait on a charge." }
      ]
    },
    {
      id: "runtime",
      short: "Runtime",
      ask: "How long do you clean in one go?",
      why: "Run time on the box is usually the lowest power setting. Joybuy says in turbo mode the battery is often dead after 10 to 15 minutes.",
      options: [
        { id: "quick", label: "Under 15 minutes",
          note: "Most cordless sticks cover this, even on turbo." },
        { id: "half", label: "About 30 minutes",
          note: "Look for a longer rated run time so turbo use still leaves some margin." },
        { id: "long", label: "Over 40 minutes", needs: ["runtime40"], tier: "mid",
          must: ["About 40 minutes or more of rated run time, or go corded"],
          note: "Savedelete lists 80 minutes for the Shark Stratos, 42 for the Tineco GoStation Smart and 33 for the Eureka ReactiSense 440. Rated time is not turbo time." }
      ]
    },
    {
      id: "battery",
      short: "Battery",
      ask: "How long do you want it to last?",
      why: "Consumer Reports calls battery problems a common issue for cordless sticks, and says some brands are less likely than many others to have them down the road. Consumer NZ says if the battery isn't replaceable or swappable, don't buy.",
      options: [
        { id: "short", label: "A few years is fine",
          note: "Standard care is enough. Charge as the maker says." },
        { id: "long", label: "Many years, without buying a new vacuum", needs: ["battery"],
          must: ["A battery you can replace, and a price for it before you buy"],
          note: "Check that a replacement battery is sold and what it costs. Choice says a new Dyson battery can cost up to $199." },
        { id: "never", label: "I'd rather never worry about it", form: { "corded": 3 },
          note: "A corded vacuum has no battery to wear out." }
      ]
    },
    {
      id: "upkeep",
      short: "Upkeep",
      ask: "Will you maintain the filter?",
      why: "Choice says to wash the filter once a month. A replacement can cost up to $40 and should last about a year, so skipping it costs suction.",
      options: [
        { id: "yes", label: "Yes, I'll wash it monthly",
          note: "That keeps suction up and the filter lasting about a year, per Choice." },
        { id: "maybe", label: "Probably not often",
          note: "Budget for a replacement filter each year and a cleaner bin habit." },
        { id: "no", label: "I won't touch it",
          note: "Expect suction to fade. Pick a model whose filter is easy to reach and whose replacement price you know." }
      ]
    }
  ],

  brandHeading: "Brands compared",
  brandColumns: ["Shark", "Dyson", "Tineco and Eureka"],
  brandRows: [
    { label: "Examples", cells: ["PowerDetect HZ4002, Stratos", "V15 Detect, V16", "Tineco Pure ONE S11, GoStation Smart; Eureka ReactiSense 440"] },
    { label: "What stands out", cells: ["Consumer Reports' top stick is the corded PowerDetect HZ4002, and Vacuum Wars names the Stratos best value", "Vacuum Wars keeps the V15 Detect as its premium pick", "Savedelete lists the Eureka at $180 and the Tineco GoStation Smart at $350, and HGTV lists the Pure ONE S11 at $179"] },
    { label: "Watch out for", cells: ["The Stratos has a longer run time at a higher price than the budget sticks", "RTINGS says the V16 is an incremental upgrade not worth the premium, and Choice prices a new battery at up to $199", "Run times run from 33 to 60 minutes across these, so check the rating you need"] }
  ],
  brandVerdict: "Look at run time on a medium setting, a battery you can replace, and the filter's yearly cost before the brand. The cheapest stick can cost more once the battery wears out.",

  traps: [
    { claim: "\"Up to 60 minutes of run time\"", reality: "Joybuy says in turbo mode the battery is often dead after 10 to 15 minutes. Check the rating on the setting you'll actually use." },
    { claim: "\"Higher Pa means stronger cleaning\"", reality: "Joybuy says Air Watts (AW) is a more reliable indicator of cleaning performance than raw Pa, and it calls 150 AW or higher very strong." },
    { claim: "\"Cordless is the best vacuum now\"", reality: "Consumer Reports says its best-rated stick vacuum of all those tested is the corded Shark PowerDetect HZ4002, and says sticks are generally best for small cleanups." },
    { claim: "\"The battery will last as long as the vacuum\"", reality: "Consumer Reports says battery problems are common in cordless sticks. Consumer NZ says if the battery isn't replaceable or swappable, don't buy, and Choice says a new Dyson battery can cost up to $199." },
    { claim: "\"The filter is permanent\"", reality: "Choice says to wash the filter once a month, and that a replacement can cost up to $40 and should last about a year." },
    { claim: "\"The newest model is better\"", reality: "RTINGS says the Dyson V16 is an incremental upgrade not worth the premium over the V15 Detect, and that it performs worse overall." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use reviewer and listing data, not our own testing. A ? means we haven't confirmed that spec, so check before buying. Prices move with sales, and tiers follow list prices, and sale prices can run $100 or more lower.",
  picksNote: "A short list of well-reviewed vacuums. Models and prices change, so use these to learn what to look for and verify the current price, battery and filter costs.",
  picks: [
    { name: "Tineco Pure ONE S11", facts: { runtime40: true }, tier: "budget", form: "cordless", checked: "2026-11",
      why: "HGTV lists it at $179 with a 60-minute run time. Check whether its battery can be replaced." },
    { name: "Eureka ReactiSense 440", facts: { runtime40: false }, tier: "budget", form: "cordless", checked: "2026-11",
      why: "Savedelete lists it at $180 with a 33-minute battery. A fit for small cleanups, not long sessions." },
    { name: "Shark Stratos", facts: { runtime40: true }, tier: "mid", form: "cordless", checked: "2026-11",
      why: "Savedelete lists it at $300 with 80 minutes, and Vacuum Wars names it best value. Check the battery's replacement price." },
    { name: "Tineco GoStation Smart", facts: { runtime40: true }, tier: "mid", form: "cordless", checked: "2026-11",
      why: "Savedelete lists it at $350 with 42 minutes. It comes with a dock. Check the battery's replacement price." },
    { name: "Shark PowerDetect HZ4002", facts: {}, tier: "mid", form: "corded", checked: "2026-11",
      why: "Consumer Reports' pick of the year for top stick vacuum, rated best of all the sticks it tested. It's corded, so there's no battery to wear out. Shark lists it at $329.99 and sells it for about $200 to $230 on sale." },
    { name: "Dyson V15 Detect", facts: { battery: true }, tier: "upper", form: "cordless", checked: "2026-11",
      why: "Vacuum Wars' premium pick. Choice says a new Dyson battery can cost up to $199. Retailers list it at $649 to $749, and deals have taken it to about $500." },
    { name: "Samsung Bespoke AI Jet Ultra", facts: { runtime40: true }, tier: "upper", form: "cordless", checked: "2026-11",
      why: "Consumer Reports measured a 52-minute run time with a 5-hour charge. Samsung lists it at $1,099.99 and has cut it to about $900. Check whether the battery can be replaced." }
  ]
};
