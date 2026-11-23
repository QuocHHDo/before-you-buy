// Category content for the Wi-Fi router and mesh page. Same shape as the other guides.
// Prices are street or listed prices from roundups. Sales move them a lot.
window.SITE_DATA = {
  category: "wifi-routers",
  title: "Before you buy a Wi-Fi router or mesh system",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My Wi-Fi router result: Before You Buy",
  defaultForm: "router",

  forms: {
    "router": "Single router (small home, one floor)",
    "mesh": "Mesh system (big home, several floors)"
  },

  needDefs: {
    sixghz: { label: "A 6 GHz band (Wi-Fi 6E, or tri-band Wi-Fi 7)", fact: "sixghz", is: true },
    nosub: { label: "No subscription needed for security and parental controls", fact: "nosub", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $200",
      adds: "Fast enough for most homes. Tom's Guide says the TP-Link Archer BE3600 is often $100 and lists $129, and CNET says you can get a fast Wi-Fi 7 router for around $175.",
      missing: "Extras. Many cheap Wi-Fi 7 routers are dual-band, which means no 6 GHz band.",
      bestFor: "An apartment or a small home with one router.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$200–500",
      adds: "Mesh kits and tri-band routers with more range. Netgear lists the Orbi 370 3-pack at $349.99 list, often $289.99, and TP-Link's Deco BE63 2-pack lists at $349.99, often $250 to $300.",
      missing: "Free extras. Consumer Reports says security and parental controls often move into a paid plan.",
      bestFor: "A bigger home or one with dead zones.",
      badge: "Sweet spot"
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$500+",
      adds: "Top speeds and big coverage. The Asus RT-BE96U lists at $629.99 to $700, and one roundup lists the TP-Link Deco BE85 3-pack at $899.",
      missing: "A faster internet plan. ExpressVPN says that at 100 to 300 Mbps you won't see the benefit of Wi-Fi 7 or tri-band.",
      bestFor: "Multi-gig internet, a large house or heavy gaming.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend?",
      why: "Prices swing by retailer and sale. Many routers and mesh kits also come with a free security trial that renews into a paid plan, so count that too. Consumer Reports puts such plans at often $50 to $100 a year.",
      options: [
        { id: "200", label: "Under $200", budgetCap: "budget",
          note: "Sets your ceiling at budget tier." },
        { id: "500", label: "Up to about $500", budgetCap: "mid",
          note: "Sets your ceiling at mid tier." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "home",
      short: "Home",
      ask: "How big is your home, and how many floors?",
      why: "How-To Geek lists not considering your home and yard size as a common mistake, and says extenders are a bandage for a router that can't cover your home. RTINGS suggests starting with a two-pack and adding another access point if you need more coverage.",
      options: [
        { id: "small", label: "An apartment or one floor", form: { "router": 4 },
          note: "One good router in a central spot is often enough." },
        { id: "big", label: "A large home or several floors", form: { "mesh": 4 },
          note: "A mesh system places nodes around the house. Tri-band systems share one band between devices and the link back to the router, says one roundup." },
        { id: "wired", label: "My walls have Ethernet jacks", form: { "mesh": 3 },
          note: "A wired link between nodes avoids sharing the radio. RTINGS says each ASUS ZenWiFi BE5000 Pro node has two 2.5 Gbps Ethernet ports for a wired backhaul." }
      ]
    },
    {
      id: "speed",
      short: "Internet",
      ask: "How fast is your internet plan?",
      why: "ExpressVPN says if you only get 100 to 300 Mbps from your ISP, you won't see the real benefit of Wi-Fi 7 or tri-band. Consumer Reports says to take full advantage of the fastest plans you want Wi-Fi 6E or 7 with a multi-gig WAN port.",
      options: [
        { id: "slow", label: "Up to about 300 Mbps",
          note: "A budget Wi-Fi 6E or Wi-Fi 7 router is plenty. CNET found a Wi-Fi 6E TP-Link at $127 beat a dual-band Wi-Fi 7 router." },
        { id: "gig", label: "A gigabit plan or faster", tier: "mid", needs: ["sixghz"],
          must: ["A 6 GHz band and a multi-gig port, which usually cost more"],
          note: "CNET averaged 515 Mbps at 50 feet for Wi-Fi 7 routers against 383 for Wi-Fi 6, partly because of the 6 GHz band." },
        { id: "unsure", label: "I don't know",
          note: "Run a speed test over a cable, not Wi-Fi, to see what your plan delivers." }
      ]
    },
    {
      id: "sub",
      short: "Fees",
      ask: "Will you pay a yearly fee for security features?",
      why: "Consumer Reports says many routers bundle security and parental controls into a monthly or annual plan, usually with a free trial that renews at often $50 to $100 a year. Check whether the features you want are free for life.",
      options: [
        { id: "nofee", label: "No, I want it free", needs: ["nosub"],
          note: "A roundup says the Asus RT-BE96U doesn't need a subscription to get the most out of it, unlike Netgear and TP-Link models, and has a three-year warranty." },
        { id: "fee", label: "A fee is fine if it's useful",
          note: "eero's Plus plan is needed for advanced security, ad blocking and network inspection, say several roundups. Netgear sells Armor." },
        { id: "skip", label: "I don't need those features",
          note: "Most routers work fine for basic Wi-Fi with no plan." }
      ]
    },
    {
      id: "band",
      short: "Bands",
      ask: "Do you care about the 6 GHz band?",
      why: "CNET found dual-band Wi-Fi 7 routers did worse as a group than Wi-Fi 6E routers, since they lack the 6 GHz band. Yahoo's tester calls dual-band Wi-Fi 7 a stretch for the same reason.",
      options: [
        { id: "yes", label: "Yes, I have newer phones and laptops", needs: ["sixghz"],
          note: "Your devices need Wi-Fi 6E or 7 to use 6 GHz. CNET says a $127 Wi-Fi 6E router outperformed dual-band Wi-Fi 7." },
        { id: "no", label: "No, I have mostly older devices",
          note: "A dual-band Wi-Fi 7 router is cheaper and works with older devices." },
        { id: "unsure", label: "I'm not sure",
          note: "Check your phone or laptop spec for Wi-Fi 6E or Wi-Fi 7 support." }
      ]
    }
  ],

  brandHeading: "Brands compared",
  brandColumns: ["TP-Link", "Netgear and eero", "Asus"],
  brandRows: [
    { label: "Examples", cells: ["Archer BE3600, Archer AXE75, Deco BE63, Deco XE75", "Orbi 370 series, Nighthawk RS700S, eero Pro 7", "RT-BE96U, ZenWiFi BE5000 Pro"] },
    { label: "What stands out", cells: ["CNET says TP-Link models dominated its lab tests and best list for value", "CNET says the Nighthawk RS700S was the fastest Wi-Fi 7 router it tested, and RTINGS says the eero Max 7 was the fastest it tested", "One roundup says the RT-BE96U needs no subscription and has a three-year warranty"] },
    { label: "Watch out for", cells: ["TechRadar says some Deco BE63 features need a subscription. One roundup says the TP-Link routers it tested lack 6 GHz radios", "Netgear's June 2026 advisory lists older Orbi and Nighthawk models as end-of-support. eero's advanced security needs a paid plan", "The RT-BE96U is not cheap, listing at $629.99 to $700"] }
  ],
  brandVerdict: "Home size, your internet speed and the 6 GHz band matter more than brand. Then check fees and how long the maker keeps updating your exact model.",

  traps: [
    { claim: "\"Wi-Fi 7\"", reality: "CNET found dual-band Wi-Fi 7 routers did worse than Wi-Fi 6E routers as a group, because they lack the 6 GHz band. Check the bands and not just the Wi-Fi generation." },
    { claim: "\"A faster router means faster internet\"", reality: "ExpressVPN says that if you get 100 to 300 Mbps from your ISP you won't see the real benefit of a high-end router. Your plan sets the ceiling." },
    { claim: "\"Free security and parental controls\"", reality: "Consumer Reports says these usually come with a free trial that renews into a paid plan, often $50 to $100 a year. eero's advanced security needs eero Plus." },
    { claim: "\"Supported for years\"", reality: "Consumer Reports says to replace a router that no longer gets firmware updates. Intego warns that deeply discounted Wi-Fi 5 routers may already be out of security updates, so check your exact model." },
    { claim: "\"Tri-band mesh has a dedicated link\"", reality: "One roundup says tri-band systems share one band between your devices and the link between nodes, while a fourth band can be reserved for that link. A wired Ethernet link avoids the sharing." },
    { claim: "\"Just use the router my internet provider gave me\"", reality: "House Digest says providers tend to restrict firmware updates and don't allow third-party firmware that can keep older routers running." },
    { claim: "\"One box covers my whole home\"", reality: "How-To Geek lists not considering your home and yard size as a mistake, and warns against patching coverage with extenders." }
  ],

  picksListed: "2026-11",
  factsNote: "Band and subscription checks use maker, retailer and reviewer listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying. Prices come from maker and retailer pages and move a lot with sales.",
  picksNote: "A short list of well-reviewed routers and mesh kits. Models and prices change, so use these to learn what to look for and verify the model, bands and current price.",
  picks: [
    { name: "TP-Link Archer BE3600", facts: { sixghz: false }, tier: "budget", form: "router", checked: "2026-11",
      why: "Tom's Guide calls it a dual-band Wi-Fi 7 router that is often $100 and lists $129. It lacks a 6 GHz band, so it suits modest internet plans." },
    { name: "TP-Link Archer AXE75", facts: { sixghz: true }, tier: "budget", form: "router", checked: "2026-11",
      why: "CNET lists it at $127 as the fastest Wi-Fi 6E router in its tests, and another roundup lists $169. It's a tri-band Wi-Fi 6E router." },
    { name: "TP-Link Archer BE9700", facts: {}, tier: "budget", form: "router", checked: "2026-11",
      why: "Tom's Hardware names it its best Wi-Fi router for most people and says it costs under $200. Check the bands and whether you need a 6 GHz radio." },
    { name: "Netgear Orbi 370 series mesh", facts: { sixghz: false }, tier: "mid", form: "mesh", checked: "2026-11",
      why: "Netgear lists the 3-pack at $349.99, often $289.99, and Engadget says it is dual-band with no 6 GHz. Sources disagree on which security and parental features are free, since Netgear also sells paid Armor, so check before relying on either." },
    { name: "TP-Link Deco XE75 mesh", facts: { sixghz: true }, tier: "mid", form: "mesh", checked: "2026-11",
      why: "Tom's Guide calls it its top Wi-Fi 6E mesh pick and says it has no multi-gig ports. TP-Link lists the 3-pack at $349.99, often $230 to $280." },
    { name: "TP-Link Deco BE63 mesh", facts: { nosub: false }, tier: "mid", form: "mesh", checked: "2026-11",
      why: "TechRadar and RTINGS both name it their best mesh system, and TechRadar says some features need a subscription. The 2-pack lists at $349.99 and often sells for $250 to $300, though older reviews cite $550, so prices have fallen." },
    { name: "Asus RT-BE96U", facts: { nosub: true }, tier: "upper", form: "router", checked: "2026-11",
      why: "Tom's Guide keeps it in its top spot, and one roundup says it needs no subscription and has a three-year warranty. Tom's Guide lists $700, while Best Buy lists $541.99 and sales have gone near $436." },
    { name: "eero Pro 7 mesh", facts: { nosub: false }, tier: "upper", form: "mesh", checked: "2026-11",
      why: "A roundup lists it as easiest to set up, with five Ethernet ports on the node. Advanced security needs eero Plus. eero lists the 2-pack at $549.99 and the 3-pack at $799.99, with sales at $399.99 and $599.99." },
    { name: "TP-Link Deco BE85 mesh", facts: {}, tier: "upper", form: "mesh", checked: "2026-11",
      why: "One roundup lists a 3-pack at $899 and says it covers up to 8,000 square feet. Check the bands, ports and whether you need that coverage." }
  ]
};
