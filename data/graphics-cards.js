// Category content for the graphics card page. Same shape as the other guides.
// Street prices have been far above list prices and move weekly. Verify the live price.
window.SITE_DATA = {
  category: "graphics-cards",
  title: "Before you buy a graphics card",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My graphics card result: Before You Buy",
  defaultForm: "amd",

  forms: {
    "amd": "AMD Radeon (more memory for the money)",
    "nvidia": "Nvidia GeForce (DLSS 4, stronger ray tracing)"
  },

  needDefs: {
    vram: { label: "16 GB or more of video memory", fact: "vram", min: 16 },
    lowpsu: { label: "Fits a 550W power supply or smaller (maker's recommendation)", fact: "lowpsu", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $500",
      adds: "Solid 1080p gaming. Tom's Hardware lists the Radeon RX 9060 XT 16GB at about $449, and PC Gamer's August 14 tracker had the RTX 5060 at $359, against a $299 list price.",
      missing: "Headroom. Cards in this range often have 8 GB of memory, which runs out in some games.",
      bestFor: "A 1080p monitor, or a first build.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$500–850",
      adds: "Strong 1440p and entry 4K. Tom's Hardware lists the RX 9070 XT at about $719 and the RTX 5070 at $659 against list prices of $599 and $549.",
      missing: "The list price. Street prices have sat well above list.",
      bestFor: "A 1440p monitor, which Newegg's guide calls the current sweet spot.",
      badge: "Sweet spot"
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$850+",
      adds: "Top-end performance and ray tracing. Tom's Hardware lists the RTX 5070 Ti at $1,099.99, and PC Gamer's August tracker had it at $1,030. Tom's Hardware's November 3 update put every RTX 50 card it tracks above launch price.",
      missing: "Value. Tom's Hardware calls the $300 premium over an RX 9070 XT worth it over a five-year life, but that is its view.",
      bestFor: "4K or heavy ray tracing, if your power supply and case can take it.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend on the card?",
      why: "Prices swing by source and week. Tom's Hardware lists a median street price of $4,299 for the RTX 5090 against a $1,999 list price. PC Gamer lists the RX 9070 XT at $760, while Newegg lists it from $699.99. Check live prices on several stores before you set a ceiling.",
      options: [
        { id: "500", label: "Under $500", budgetCap: "budget",
          note: "Sets your ceiling at budget tier." },
        { id: "850", label: "Up to about $850", budgetCap: "mid",
          note: "Sets your ceiling at mid tier." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "screen",
      short: "Screen",
      ask: "What resolution is your monitor?",
      why: "Impressive Magazine lists overbuying for your monitor as a common mistake. Joybuy says a balanced card with enough memory suits 1440p, while at 4K the GPU class, memory bandwidth, cooling and power supply matter far more.",
      options: [
        { id: "1080", label: "1080p",
          note: "BGR says 8 GB is the entry level, and a recent game like Pragmata recommends 8 GB for 1080p." },
        { id: "1440", label: "1440p", tier: "mid",
          note: "BGR recommends 12 GB for 1440p. Newegg calls 1440p the current sweet spot." },
        { id: "4k", label: "4K, or I want heavy ray tracing", tier: "mid", needs: ["vram"],
          must: ["A card with 16 GB of memory and a power supply to match"],
          note: "Tom's Hardware says the RX 9070 XT is the cheapest way to 4K at 60 FPS without upscaling. For more ray tracing it points to Nvidia's RTX 5070 Ti." }
      ]
    },
    {
      id: "memory",
      short: "Memory",
      ask: "How long do you want this card to last?",
      why: "Tom's Hardware found the 8 GB RTX 5060 Ti 26 percent slower than the 16 GB version at 1080p ultra with ray tracing, but only 5 percent slower in games without it. TechSpot says most buyers plan to keep a card three years or more.",
      options: [
        { id: "long", label: "Three years or more", needs: ["vram"],
          note: "Tom's Hardware says $50 extra for 16 GB is money well spent, since 8 GB falls short in a growing number of games." },
        { id: "short", label: "I'll upgrade soon, or play lighter games",
          note: "PC Gamer's testing says 8 GB is still enough in 2026, and TechSpot says lowering settings often fixes the cases where it isn't." },
        { id: "unsure", label: "I'm not sure",
          note: "Newegg notes reports in January 2026 that Nvidia cut 16 GB shipments and kept 8 GB parts the most widely supplied, so 16 GB cards may cost more or be harder to find." }
      ]
    },
    {
      id: "power",
      short: "Power",
      ask: "What's your power supply and case like?",
      why: "NZXT says to check three things: your case's maximum card length, your power supply's wattage and connectors, and the PCIe slot. SlashGear says a card is usually the biggest power draw in a PC and some are wide enough to block neighbouring slots.",
      options: [
        { id: "small", label: "A small case or a 550W supply", needs: ["lowpsu"],
          note: "Newegg lists the ASUS Dual RTX 5060 8GB at 228 mm with a 550W recommendation, and the PowerColor Reaper RX 9060 XT 16GB at 200 mm with 500W." },
        { id: "big", label: "A roomy case and a 750W or larger supply",
          note: "Check connectors too. NZXT says a modern 1000W supply may have one 16-pin 12V-2x6 cable and three 8-pin cables." },
        { id: "unsure", label: "I haven't checked",
          note: "Look at the label on your power supply and measure from the back panel to the front fans before you order." }
      ]
    },
    {
      id: "brand",
      short: "Brand",
      ask: "What else do you use the card for?",
      why: "Tom's Guide says the RX 9070 XT is excellent for gaming but not as strong for creator work or AI, where Nvidia has the advantage. Tom's Hardware says the RTX 5070 Ti beats the RX 9070 XT at ray tracing, and that AMD's cards lack DLSS 4 and multi frame generation.",
      options: [
        { id: "games", label: "Mostly rasterized games, best value", form: { "amd": 4 },
          note: "TechSpot found the RX 9070 on average 13 percent faster than the RTX 5070 at 1440p across 23 games." },
        { id: "rt", label: "Ray tracing, DLSS, or creative and AI work", form: { "nvidia": 4 },
          note: "Newegg says the RTX 5070 pulls ahead of the RX 9070 XT in path-traced games like Cyberpunk 2077 and Alan Wake 2." },
        { id: "either", label: "No strong preference", form: { "amd": 2 },
          note: "We lean AMD for memory per dollar, but only because roundups favor it at today's prices." }
      ]
    }
  ],

  brandHeading: "Chip makers compared",
  brandColumns: ["Nvidia GeForce", "AMD Radeon", "Intel Arc"],
  brandRows: [
    { label: "Examples", cells: ["RTX 5060, 5070, 5070 Ti", "RX 9060 XT, 9070, 9070 XT", "Arc B580"] },
    { label: "What stands out", cells: ["Tom's Hardware says DLSS 4 and stronger ray tracing justify a higher price over a five-year life", "Newegg lists the RX 9070 XT with 16 GB of memory against 12 GB on the RTX 5070, and a 7 to 17 percent lead in raster games at 1440p", "Tom's Guide lists the B580 at a $249 list price and a $289 lowest price"] },
    { label: "Watch out for", cells: ["The same 5060 Ti name covers 8 GB and 16 GB cards, listed at $379 and $429", "Tom's Hardware says the cards don't support DLSS 4 or multi frame generation", "Tom's Hardware says not to go out of your way to buy an Arc card for gaming in 2026"] }
  ],
  brandVerdict: "Memory size and fit decide more than brand. Check the exact model for its memory, length and power needs, and compare live prices, since list prices haven't matched the street.",

  traps: [
    { claim: "\"8 GB is plenty\"", reality: "PC Gamer's tests say 8 GB is still enough in 2026 but 16 GB versions are much faster. Tom's Hardware says there are too many edge cases where 8 GB isn't enough, and found a 26 percent drop with ray tracing at 1080p ultra." },
    { claim: "\"Same card, same name\"", reality: "Tom's Hardware says the 8 GB and 16 GB RTX 5060 Ti are the same chip with different memory, listed at $379 and $429. Check the memory on the box and in the model name." },
    { claim: "\"The price on the box\"", reality: "Tom's Hardware lists the RX 9070 XT at $759 against a $599 list price, and the RTX 5090 at $4,299 against $1,999. Compare live street prices." },
    { claim: "\"My power supply will handle it\"", reality: "NZXT says to check wattage and connectors. Tech-insider says the RTX 5070 uses a 16-pin 12V-2x6 connector or two 8-pin connectors, depending on the model." },
    { claim: "\"It will fit my case\"", reality: "SlashGear says some cards are too big for the case, and some are wide enough to block adjacent slots. Joybuy says even a small-form-factor card isn't guaranteed to fit every small case." },
    { claim: "\"More GPU is always better\"", reality: "Impressive Magazine lists buying more GPU than your monitor uses as a mistake, since the extra power goes unused." },
    { claim: "\"The 16 GB version will be easy to find\"", reality: "Newegg says reporting in January 2026 indicated Nvidia reduced shipments of the RTX 5060 Ti 16GB and RTX 5070 Ti 16GB while making 8 GB parts the most widely supplied." }
  ],

  picksListed: "2026-11",
  factsNote: "Memory and power checks use maker, retailer and reviewer listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying. Street prices vary widely by source and week, so treat the tier as a rough guide, and tiers for cards without a confirmed price are estimates.",
  picksNote: "A short list of well-reviewed cards. Models and prices change quickly, so use these to learn what to look for and verify the exact model, memory, length and current price.",
  picks: [
    { name: "ASUS Dual GeForce RTX 5060 8GB", facts: { vram: 8, lowpsu: true }, tier: "budget", form: "nvidia", checked: "2026-11",
      why: "Newegg lists it at 228 mm with 8 GB of GDDR7, one 8-pin connector and a 550W recommendation. PC Gamer's August 14 tracker had the RTX 5060 at $359, against a $299 list price. Fine for 1080p, but 8 GB may run short." },
    { name: "GeForce RTX 5060 Ti 8GB", facts: { vram: 8 }, tier: "budget", form: "nvidia", checked: "2026-11",
      why: "PC Gamer's August 14 tracker had it at $420 against a $379 list price, and Tom's Hardware's 8GB-versus-16GB test found it much slower with ray tracing. Spend the extra for 16 GB if you can." },
    { name: "PowerColor Reaper Radeon RX 9060 XT 16GB", facts: { vram: 16, lowpsu: true }, tier: "budget", form: "amd", checked: "2026-11",
      why: "Newegg lists it at 200 mm with 16 GB and a 500W recommendation. Tom's Hardware lists the RX 9060 XT 16GB at about $449 against a $349 list price, and PC Gamer's August 14 tracker had $470." },
    { name: "GeForce RTX 5060 Ti 16GB", facts: { vram: 16 }, tier: "mid", form: "nvidia", checked: "2026-11",
      why: "Tom's Guide lists a $429 list price and a $569 lowest price, while PC Gamer's August 14 tracker had it at $650, so check live prices. Tom's Hardware says the extra $50 for 16 GB is well spent." },
    { name: "Radeon RX 9070 GRE", facts: {}, tier: "mid", form: "amd", checked: "2026-11",
      why: "Tom's Hardware says it's the only card still selling near its list price in 2026, and Newegg lists it at $570. Check the memory and its availability." },
    { name: "Radeon RX 9070", facts: { vram: 16 }, tier: "mid", form: "amd", checked: "2026-11",
      why: "PCGamesN calls it the best for most people, and Tom's Hardware calls it the 1440p raster value champ. Tom's Hardware lists it at about $639 and PC Gamer's August tracker had $650." },
    { name: "GeForce RTX 5070", facts: { vram: 12 }, tier: "mid", form: "nvidia", checked: "2026-11",
      why: "Newegg lists 12 GB and a 250W rating, and starts it at $609.99, while PC Gamer lists $779. TechSpot prefers the RX 9070 mainly for its 16 GB." },
    { name: "Radeon RX 9070 XT", facts: { vram: 16 }, tier: "mid", form: "amd", checked: "2026-11",
      why: "Tom's Hardware calls it the cheapest way into 4K 60 without upscaling, at about $719 against a $599 list price, and PC Gamer's August tracker had $720. Tom's Guide lists a 304W rating while Newegg lists both 304W and 330W, so check your power supply." },
    { name: "GeForce RTX 5070 Ti", facts: {}, tier: "upper", form: "nvidia", checked: "2026-11",
      why: "Tom's Hardware picks it as its best high-end card at $1,099.99, and PC Gamer's August tracker had it at $1,030. Tom's Hardware's November 3 update put every RTX 50 card it tracks above launch price. One roundup lists 12 GB, which conflicts with the 16 GB other sources imply, so confirm the memory." }
  ]
};
