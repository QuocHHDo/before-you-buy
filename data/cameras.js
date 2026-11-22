// Category content for the beginner camera page. Same shape as the other guides.
// Camera prices are moving (memory costs, tariffs), so tier bands are approximate and picks say "check the current price" where we couldn't confirm one.
window.SITE_DATA = {
  category: "cameras",
  title: "Before you buy a camera",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My camera result: Before You Buy",
  defaultForm: "mirrorless",

  forms: {
    "mirrorless": "Mirrorless camera (swappable lenses, grows with you)",
    "compact": "Compact camera (one built-in lens, fits in a bag or pocket)"
  },

  needDefs: {
    swaplens: { label: "Lenses you can swap later", fact: "swaplens", is: true },
    zoom: { label: "A long built-in zoom", fact: "zoom", is: true },
    video: { label: "Built with video in mind", fact: "video", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under about $900",
      adds: "A real camera with a larger sensor than a phone. Beebom lists the Canon EOS R50, a favorite beginner pick, at $799 on Amazon.",
      missing: "Fast burst shooting, the best video features and a wide lens range from day one.",
      bestFor: "Learning photography, family photos and travel.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$900–1,800",
      adds: "Stronger autofocus, better video and more controls. Beebom lists the Sony ZV-E10 II at $1,298 and the Sony A6700 at $1,698.",
      missing: "Full-frame image quality and pro-level speed.",
      bestFor: "Video creators and people who already know they'll keep shooting."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$1,800+",
      adds: "Premium bodies and compacts such as the Fujifilm X100VI, which Fortune reported at $1,799 after a 2025 price rise.",
      missing: "Anything a beginner needs to learn the basics. Most of the extra goes to build, brand and demand.",
      bestFor: "Enthusiasts who know what they want.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend on the camera and first lens?",
      why: "Camera prices are rising. PetaPixel reports Fujifilm raised some Japanese prices by up to 23% on October 1, 2026, and Digital Camera World says Canon, Sony and Nikon have all flagged memory costs.",
      options: [
        { id: "900", label: "Under about $900", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. Good beginner cameras live here, but the lens you add later is on top." },
        { id: "1800", label: "Up to about $1,800", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, where video features and autofocus improve." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "type",
      short: "Type",
      ask: "Do you want to swap lenses, or keep it simple?",
      why: "A mirrorless camera lets you change lenses, which is where most of the picture quality comes from. A compact has one lens built in, so it's simpler but you can't change it. The big makers have dropped DSLRs, according to Expert Photography.",
      options: [
        { id: "swap", label: "Swap lenses and grow into it", form: { "mirrorless": 4 }, needs: ["swaplens"],
          note: "Fstoppers says the body is temporary and the lenses follow you, so you're choosing a mount as much as a camera." },
        { id: "simple", label: "One camera, no lens changes", form: { "compact": 4 },
          note: "Digital Camera World points out that even the best compacts aren't always small, so check the size." },
        { id: "unsure", label: "Not sure yet",
          note: "Mirrorless is the default for the picks below. Most beginner guides recommend it." }
      ]
    },
    {
      id: "use",
      short: "Use",
      ask: "What will you shoot most?",
      why: "Video, long zoom and low light each favor different cameras, and paying for one you don't use is the common waste.",
      options: [
        { id: "family", label: "Family, travel and everyday photos",
          note: "A beginner mirrorless with its kit lens covers this. Guides recommend the Canon EOS R50 and R100 as starting points." },
        { id: "video", label: "Video or vlogging", tier: "mid", needs: ["video"],
          must: ["A body marketed for video, with creator features such as a flip-out screen"],
          note: "Obsbot calls the Sony ZV-E10 II the best beginner choice for video, with creator features and Sony's wide lens range." },
        { id: "zoom", label: "Far-away subjects (wildlife, sports, travel)", form: { "compact": 2 }, needs: ["zoom"],
          note: "RTINGS says a point-and-shoot like the Canon PowerShot SX740 gives far more zoom than a phone for a reasonable price." }
      ]
    },
    {
      id: "lens",
      short: "Lens",
      ask: "Will you buy a better lens later?",
      why: "Fstoppers says a $100 to $250 50mm f/1.8 lens can transform any camera, and that the body matters less than the lens. The first lens is part of the real cost.",
      options: [
        { id: "kit", label: "Kit lens is fine for now",
          note: "Kit lenses are decent starters. Some, per PetaPixel, may hold you back, so don't judge the camera by it." },
        { id: "prime", label: "Yes, a better lens within a year", form: { "mirrorless": 2 }, needs: ["swaplens"],
          must: ["Check the mount has affordable lenses, including third-party ones"],
          note: "Digit says Sony's E mount has many third-party lenses from Sigma and Tamron, while other mounts have fewer." }
      ]
    },
    {
      id: "timing",
      short: "Timing",
      ask: "Do you need it right now?",
      why: "Memory costs are pushing camera prices up. Digital Camera World expects some form of a price climb, and PhotoWorkout says the rest of the industry is expected to follow Fujifilm.",
      options: [
        { id: "now", label: "Yes, in the next few weeks",
          note: "Compare bundle prices. Fstoppers says bundles often carry a $30 to $50 premium for accessories you could skip." },
        { id: "wait", label: "No, I can wait",
          note: "Waiting may not help. Digital Camera World says brands may also cut back on sales and deals." }
      ]
    }
  ],

  brandColumns: ["Canon", "Sony", "Fujifilm and Nikon"],
  brandRows: [
    { label: "Examples", cells: ["EOS R50 and R100", "ZV-E10 II and A6700", "Fujifilm X-M5 and X100VI, Nikon Z fc"] },
    { label: "What stands out", cells: ["Guided menus and strong autofocus; the R50 is the most recommended beginner camera", "Creator and video features, and the widest lens range", "Fujifilm has strong style and demand; Nikon's Z fc has intuitive manual controls, per Live Science"] },
    { label: "Lenses", cells: ["RF mount; per Digit, fewer third-party lenses than Sony", "E mount; Sigma and Tamron make many lenses for it", "Fujifilm X mount and Nikon Z mount; Nikon DSLR lenses need an adapter"] },
    { label: "Watch out for", cells: ["Lens cost adds up after the body", "Higher prices; Beebom lists the ZV-E10 II at $1,298", "Price rises: PetaPixel reports Fujifilm raised some Japanese prices by up to 23%, and the X100VI is hard to find"] }
  ],
  brandVerdict: "Choose the lens mount you can afford to live with, then the body. The first camera matters less than the lenses you'll buy for it, and mounts don't cross over without adapters.",

  traps: [
    { claim: "\"The kit has everything\"", reality: "Fstoppers says the $30 to $50 premium for many bundles is better spent on one decent memory card." },
    { claim: "\"The body is what matters\"", reality: "Fstoppers says a 50mm f/1.8 prime at $100 to $250 can transform any camera, and that a sharp lens on a mediocre body beats the reverse." },
    { claim: "\"Any lens will fit\"", reality: "Digital Camera World says to match the lens mount first. Nikon DSLR lenses need an adapter on Z-mount cameras, and Fstoppers says adapted lenses create their own complications." },
    { claim: "\"A DSLR is the safe beginner choice\"", reality: "Expert Photography says all the top brands have said goodbye to DSLR cameras. New beginner models are mirrorless." },
    { claim: "\"Prices will drop soon\"", reality: "PhotoWorkout says Canon is already baking higher memory costs into its 2026 pricing, and PetaPixel reports Fujifilm raised Japanese prices by up to 23% on October 1, 2026." },
    { claim: "\"A compact is the cheap option\"", reality: "RTINGS notes a recent uptick in point-and-shoot pricing, and Wex says the Fujifilm X100VI is so popular it's hard to get hold of." },
    { claim: "\"Any memory card works\"", reality: "PetaPixel says cheap off-brand cards fail more often. Memory card prices are also rising, with ProGrade announcing increases." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use reviewer and maker listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying. Prices are moving, so confirm the current price and what lens is included.",
  picksNote: "A short list of well-reviewed beginner cameras. Camera prices are changing quickly, so use these to learn what to look for and verify the current price.",
  picks: [
    { name: "Canon EOS R50", facts: { swaplens: true }, tier: "budget", form: "mirrorless", checked: "2026-11",
      why: "Named the best beginner mirrorless camera by several guides, with guided menus, strong autofocus and 4K video. Beebom lists it at $799 on Amazon; check the current price and kit." },
    { name: "Canon EOS R100", facts: { swaplens: true }, tier: "budget", form: "mirrorless", checked: "2026-11",
      why: "Digital Camera World's top pick for beginners, with a 24MP APS-C sensor. Check the current price and kit." },
    { name: "Nikon Z fc", facts: { swaplens: true }, tier: "budget", form: "mirrorless", checked: "2026-11",
      why: "Live Science's best overall for beginners, with intuitive controls for automatic and manual settings. SLR Lounge listed it at $956; check the current price." },
    { name: "Fujifilm X-M5", facts: { swaplens: true }, tier: "budget", form: "mirrorless", checked: "2026-11",
      why: "Listed by Digital Camera World as the best beginner Fujifilm, with a 26.1MP APS-C sensor and no viewfinder. Fujifilm raised some prices in 2026, so check the current price." },
    { name: "Sony ZV-E10 II", facts: { swaplens: true, video: true }, tier: "mid", form: "mirrorless", checked: "2026-11",
      why: "Obsbot's pick for beginners who care about video, built around creator features. Beebom lists it at $1,298." },
    { name: "Sony A6700", facts: { swaplens: true, video: true }, tier: "mid", form: "mirrorless", checked: "2026-11",
      why: "Beebom's best APS-C camera for video, at $1,698. More camera than most beginners need." },
    { name: "Canon PowerShot SX740", facts: { swaplens: false, zoom: true }, tier: "budget", form: "compact", checked: "2026-11",
      why: "RTINGS' best budget compact for casual and family photographers who want far more zoom than a phone. Check the current price." },
    { name: "Panasonic Lumix ZS99", facts: { swaplens: false, zoom: true }, tier: "budget", form: "compact", checked: "2026-11",
      why: "Finding the Universe's best-value pick for a lot of zoom for the money. Check the current price." },
    { name: "Canon PowerShot V1", facts: { swaplens: false, video: true }, tier: "mid", form: "compact", checked: "2026-11",
      why: "National Geographic's best compact for vlogging. Check the current price." },
    { name: "Fujifilm X100VI", facts: { swaplens: false, zoom: false }, tier: "upper", form: "compact", checked: "2026-11",
      why: "Digital Camera World's best compact overall, with a fixed lens. Fortune reported $1,799 after a 2025 rise, and Wex says it can be hard to get." }
  ]
};
