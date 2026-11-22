// Category content for the SSD page. Same shape as the other guides.
window.SITE_DATA = {
  category: "ssds",
  title: "Before you buy an SSD",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My SSD result: Before You Buy",
  defaultForm: "internal",

  forms: {
    "internal": "Internal M.2 SSD (laptop, desktop or PS5)",
    "external": "Portable external SSD (plugs in by USB)"
  },

  needDefs: {
    ps5: { label: "Meets the PS5 slot requirements", fact: "ps5", is: true },
    tlc: { label: "TLC flash, not QLC", fact: "tlc", is: true },
    rugged: { label: "Rugged and water resistant", fact: "rugged", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $320",
      adds: "For a 2TB drive: a name-brand Gen4 drive that is plenty fast for games and everyday use. The Crucial P310 2TB was $288.90 at Newegg.",
      missing: "Top sustained speed, the biggest capacities and, on some drives, a long track record.",
      bestFor: "Games, a laptop upgrade or a second drive.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$320–400",
      adds: "Proven Gen4 drives and a Gen5 option, with DRAM and better sustained writes.",
      missing: "Real gains in games. Newegg's comparison puts PCIe 5.0 at 0 to 3% faster in game loading.",
      bestFor: "Heavy use, or a drive that stays fast under load."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$400+",
      adds: "Maximum capacity or Thunderbolt speed. A 4TB WD Black SN850X was $689 per Digital Citizen.",
      missing: "Speed you can notice in everyday use. Tom's Hardware says you may not feel the gap between PCIe 3.0, 4.0 and 5.0.",
      bestFor: "Video editors and people who move 100GB+ files often.",
      badge: "Paying for capacity"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend?",
      why: "SSD prices have jumped roughly two to three times this year because of the AI-driven NAND shortage. A Samsung 990 EVO Plus 2TB that sold for $113 a year ago was $363.49 in Tom's Hardware's check. Ranges here are for 2TB, so compare price per terabyte.",
      options: [
        { id: "320", label: "Under about $320 for 2TB", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. That is Gen4 value drives, with fewer big-name options." },
        { id: "400", label: "Up to about $400 for 2TB", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, which covers the proven Gen4 drives and the Samsung 9100 Pro." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "where",
      short: "Where",
      ask: "Where will it go?",
      why: "The slot or port decides what fits. A drive that suits a PC can be wrong for a PS5, and a portable drive depends on your USB port.",
      options: [
        { id: "pc", label: "Laptop or desktop M.2 slot", form: { "internal": 2 },
          note: "Most consumer M.2 drives are the 2280 size, but check the slot length and whether your board needs a heatsink." },
        { id: "ps5", label: "A PlayStation 5", form: { "internal": 3 }, needs: ["ps5"],
          must: ["A PCIe Gen4 x4 NVMe drive rated at 5,500MB/s read or more, with a heatsink"],
          note: "The PS5 slot is NVMe only; SATA M.2 drives don't work. Lexar and Tom's Hardware both stress the speed minimum and a compatible heatsink." },
        { id: "portable", label: "Outside the computer: a portable drive", form: { "external": 4 },
          note: "A portable SSD is only as fast as the USB port it plugs into. Many laptops top out at 10Gbps." }
      ]
    },
    {
      id: "size",
      short: "Size",
      ask: "How much space do you need?",
      why: "Larger drives hold up better. Smaller drives get a smaller fast cache, and any drive slows down as it fills.",
      options: [
        { id: "1", label: "About 1TB", note: "Fine for a laptop or a few games. Prices per terabyte are higher at small sizes." },
        { id: "2", label: "About 2TB", note: "The usual sweet spot for gaming. PC Gamer advises buying the largest capacity you can afford." },
        { id: "4", label: "4TB or more", tier: "upper",
          must: ["4TB or more, which costs the most per drive"],
          note: "Check the flash type at this size. The WD Blue SN5000 uses TLC up to 2TB but QLC at 4TB, per Elcomsoft." }
      ]
    },
    {
      id: "work",
      short: "Use",
      ask: "What will you do with it?",
      why: "Short bursts hide a drive's weakness. Copying very large files fills the fast cache, and the drive then falls to its slower native speed.",
      options: [
        { id: "daily", label: "Games, apps and everyday use",
          note: "PC Gamer says DRAM-less drives are perfectly fine for gaming. The Lexar NM790 has a cache of around 280GB on 2 and 4TB models." },
        { id: "edit", label: "Big video or photo files", tier: "mid", needs: ["tlc"],
          must: ["Good sustained write speed after the cache fills, not just peak speed"],
          note: "TechRadar's testing showed a fake drive fall far behind its rating on big file copies once its cache ran out. TLC holds up better than QLC." },
        { id: "backup", label: "Backups and storage",
          note: "QLC is cheaper and denser, and It's FOSS says it's fine for light use or secondary storage." }
      ]
    },
    {
      id: "rough",
      short: "Build",
      ask: "Will it travel or take knocks?",
      why: "Portable drives differ in drop and water protection. Pay for that only if you need it.",
      options: [
        { id: "yes", label: "Yes, travel and outdoors", form: { "external": 2 }, needs: ["rugged"],
          must: ["A water and dust rating (such as IP65) and a stated drop rating"],
          note: "StorageReview calls the Samsung T7 Shield the longest-serving rugged drive it still recommends." },
        { id: "no", label: "No, it stays on a desk or in a bag" }
      ]
    },
    {
      id: "seller",
      short: "Seller",
      ask: "Will you buy from a marketplace seller you don't know?",
      why: "Fake SSDs report a big capacity but contain a few gigabytes. TechRadar and SlashGear both warn that the common red flag is a price far below name brands.",
      options: [
        { id: "maybe", label: "Maybe, if the price is good",
          must: ["Buy from the maker or a major retailer, not an unknown marketplace seller"],
          note: "SlashGear says a fake listing that offers the same storage for a fraction of the price is almost certainly a scam. Test a new drive by copying a large file to it." },
        { id: "no", label: "No, from the maker or a big retailer" }
      ]
    }
  ],

  brandColumns: ["Makers of their own flash", "Controller and module brands", "Random no-name"],
  brandRows: [
    { label: "Examples", cells: ["Samsung, Crucial (Micron), SK hynix, WD and SanDisk", "Lexar, Kingston, Corsair, TeamGroup", "Unbranded 1TB listings at $20 to $30"] },
    { label: "What stands out", cells: ["They make the flash, tell you the parts and publish endurance. Only Samsung, SK hynix and Micron make both NAND and DRAM", "Often the best value. TechRadar and PC Gamer both like the Lexar NM790", "Wood Central says a 1TB drive at $20 to $30 is almost always cutting corners"] },
    { label: "Warranty", cells: ["Typically 5 years on good drives, per Elcomsoft", "Varies; check before you buy", "Often 3 years or none"] },
    { label: "Watch out for", cells: ["Paying for the name. Crucial's consumer line is being wound down, so stock may not be replenished, per Newegg", "Kingston's NV1 and NV2 changed parts under one model number, per Elcomsoft", "Hidden specs. They often don't list the flash, controller or cache design, and TechRadar says fake SSDs are getting more sophisticated"] }
  ],
  brandVerdict: "Buy from a maker that tells you the parts and the warranty. A cheap drive is not a bargain if it loses your data, and fake or no-name drives are the most common way to lose it. A name brand on sale from the maker or a big retailer is the safe path.",

  traps: [
    { claim: "\"Up to 7,450MB/s\"", reality: "That is a peak, short-burst number. Once the fast cache fills, a drive drops to its native speed. For QLC, TechSpot says that can be similar to a hard drive." },
    { claim: "\"PCIe 5.0 is twice as fast\"", reality: "On paper, yes. Newegg's comparison puts game load times at 0 to 3% faster, and Tom's Hardware says you may not notice the gap in everyday tasks. A video editor moving 100GB files will." },
    { claim: "\"2TB for a bargain\"", reality: "A fake drive reports a big capacity but holds only a few gigabytes. SlashGear says a price far below the name brands is the first red flag, but a correct capacity doesn't prove good hardware." },
    { claim: "\"DRAM-less means bad\"", reality: "Not always. PC Gamer says DRAM-less drives are perfectly fine for gaming. Elcomsoft says a good current DRAM-less drive can beat an older DRAM drive." },
    { claim: "\"Same model, same drive\"", reality: "Elcomsoft says Kingston's NV1 and NV2 shipped with different controllers and flash under one model number, and the WD Blue SN5000 uses QLC at 4TB." },
    { claim: "\"Any NVMe drive fits my PS5\"", reality: "The PS5 needs a Gen4 x4 NVMe drive at 5,500MB/s or more, and a SATA M.2 drive won't work. Check the heatsink fit too." },
    { claim: "\"A fast portable drive\"", reality: "A portable SSD's speed depends on the port. The Samsung T9 reaches about 2,000MB/s only on USB 3.2 Gen 2x2; a plain USB port caps it far lower." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use maker, retailer and reviewer listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying.",
  picksNote: "Well-reviewed SSDs, sorted by typical price. SSD prices are unusually high and swing week to week, so check the live price per terabyte.",
  picks: [
    { name: "Crucial P310 2TB (internal)", facts: {}, tier: "budget", form: "internal", checked: "2026-11",
      why: "Newegg's value pick at $288.90 for 2TB: a PCIe 4.0 M.2 2280 drive from a flash maker. Newegg notes Crucial's consumer line is being wound down, so stock may not return." },
    { name: "Lexar NM790 with heatsink (internal)", facts: { ps5: true }, tier: "budget", form: "internal", checked: "2026-11",
      why: "TechRadar's best-value PS5 SSD and PC Gamer's favorite DRAM-less drive, with a cache of about 280GB on 2 and 4TB. Lexar lists up to 7,400MB/s. Check the current price." },
    { name: "WD Blue SN5000 2TB (internal)", facts: { tlc: true }, tier: "budget", form: "internal", checked: "2026-11",
      why: "Listed at $299.99 on a marketplace seller. Elcomsoft says it uses TLC at 500GB to 2TB but QLC at 4TB, so buy the 2TB or smaller if you want TLC." },
    { name: "WD Black SN7100 2TB (internal)", facts: {}, tier: "mid", form: "internal", checked: "2026-11",
      why: "PC Gamer's best overall and Tom's Hardware's best laptop drive. Amazon sold the 2TB for $329 in late October, the cheapest Gen4 NVMe it sold directly." },
    { name: "WD Black SN850X 2TB (internal)", facts: { ps5: true }, tier: "mid", form: "internal", checked: "2026-11",
      why: "T3 and Digital Trends rate it a top PS5 SSD, with heatsink models available. Listings ranged from $328 to $348 for 2TB." },
    { name: "Samsung 9100 Pro 2TB (internal)", facts: {}, tier: "mid", form: "internal", checked: "2026-11",
      why: "A PCIe 5.0 drive at $394.95 in Newegg's comparison, which calls it the no-compromise pick. Gen5 gains are small for games." },
    { name: "WD Black SN850X 4TB (internal)", facts: { ps5: true }, tier: "upper", form: "internal", checked: "2026-11",
      why: "Digital Citizen listed the 4TB at $689 against a lowest ever price of $200. Digital Trends names it the best premium PS5 SSD." },
    { name: "Samsung T9 Portable SSD (external)", facts: { rugged: false }, tier: "budget", form: "external", checked: "2026-11",
      why: "TechRepublic's best overall portable. About 2,000MB/s on USB 3.2 Gen 2x2, and $219.99 for 2TB. StorageReview lists it without an IP rating." },
    { name: "Samsung T7 Shield (external)", facts: { rugged: true }, tier: "mid", form: "external", checked: "2026-11",
      why: "StorageReview's proven rugged pick, with IP65 and a 9.8 ft drop rating per a listing. It uses the older 10Gbps USB and was $287.99 for 1TB on TechRepublic." },
    { name: "LaCie Rugged SSD Pro5 (external)", facts: { rugged: true }, tier: "upper", form: "external", checked: "2026-11",
      why: "TechRepublic's top performer, over Thunderbolt 5. $399.99 MSRP for 2TB. You need Thunderbolt 5 hardware to get the speed." }
  ]
};
