// Category content for the portable speaker and soundbar page. Same shape as the other guides.
// One guide, two types: the "form" is portable speaker, Wi-Fi portable, or soundbar.
window.SITE_DATA = {
  category: "speakers",
  title: "Before you buy a speaker or soundbar",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My speaker result: Before You Buy",
  defaultForm: "portable",

  forms: {
    "portable": "Portable Bluetooth speaker (battery-powered, goes anywhere)",
    "soundbar": "Soundbar (sits under your TV)"
  },

  needDefs: {
    waterproof: { label: "Waterproof and dustproof (IP67 or better)", fact: "waterproof", is: true },
    wifi: { label: "Wi-Fi or AirPlay, not just Bluetooth", fact: "wifi", is: true },
    sub: { label: "A subwoofer in the box", fact: "sub", is: true },
    atmos: { label: "Real Dolby Atmos", fact: "atmos", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $300",
      adds: "Portables under about $100 and soundbars under about $300. A speaker that clearly beats built-in sound. Tom's Guide's best cheap Bluetooth speaker, the Tribit PocketGo, is under $40, and RTINGS' best soundbar under $300 is the Samsung HW-B750D with a subwoofer.",
      missing: "Room-filling volume, Wi-Fi features and real surround effects.",
      bestFor: "A bag or bike, or a first upgrade over TV speakers.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$100–600",
      adds: "Portables from about $100 to $300 and soundbars from about $300 to $600. Louder or longer-lasting portables, Wi-Fi models such as the $299 Sonos Play, and a soundbar with Atmos, surrounds and a subwoofer such as the Hisense AX5125H at about $350.",
      missing: "The biggest sound and the best build.",
      bestFor: "Most people who want it to last and sound fuller.",
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$300+",
      adds: "Portables above about $300 and soundbars above about $600. Big party speakers and flagship soundbars like the Samsung HW-Q990F, which RTINGS pairs with Klipsch's all-in-one Flexus Core 300 as a smaller alternative.",
      missing: "Everyday value. Most of the extra goes to size, features and build.",
      bestFor: "Large rooms, parties and home theater fans.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend?",
      why: "Prices differ by type. A good portable can cost under $100, while Tom's Guide says real Dolby Atmos soundbars start around $500.",
      options: [
        { id: "low", label: "Under about $100 (portable) or $300 (soundbar)", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. RTINGS has strong soundbar picks under $300, and PhoneArena lists the JBL Clip 5 and Wonderboom 4 under $100." },
        { id: "mid", label: "Up to about $300 (portable) or $600 (soundbar)", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, where Wi-Fi speakers and soundbars with surrounds appear." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "type",
      short: "Type",
      ask: "What do you want it for?",
      why: "A soundbar improves TV sound. A portable speaker is for music anywhere. They solve different problems, and a portable is a poor TV upgrade.",
      options: [
        { id: "tv", label: "Better sound for my TV", form: { "soundbar": 4 },
          note: "Consumer Reports says almost any soundbar improves on all but the very best-sounding TVs." },
        { id: "music", label: "Music in the house or outside", form: { "portable": 4 },
          note: "A battery speaker moves room to room, per RTINGS, without needing an outlet." },
        { id: "both", label: "Not sure yet",
          note: "Portable is the default for the picks below. Choose a soundbar if the TV is the main use." }
      ]
    },
    {
      id: "use",
      short: "Where",
      ask: "Where will it be used?",
      why: "Water, dust and wall power change which models make sense. Many speakers have a rating, but ratings mean different things.",
      options: [
        { id: "outside", label: "Outdoors, beach, pool or trips", form: { "portable": 3 }, needs: ["waterproof"],
          must: ["A full IP67 or IP68 rating, not just a water-resistant claim"],
          note: "Expert Reviews says IP67 and IP68 are the top tiers; IPX4 to IPX6 are not considered waterproof." },
        { id: "home", label: "Around the house, with a phone or Wi-Fi", form: { "portable": 2 }, needs: ["wifi"],
          note: "SoundGuys picks the Sonos Play as best smart speaker and the Sonos Roam 2 as best Bluetooth speaker with Wi-Fi." },
        { id: "movies", label: "Movies and shows with real bass", form: { "soundbar": 3 }, needs: ["sub"], tier: "mid",
          note: "Tom's Guide says to get a dedicated subwoofer if your soundbar has a sub output, since it adds the bass a bar can't make." }
      ]
    },
    {
      id: "atmos",
      short: "Atmos",
      ask: "Do you want Dolby Atmos?",
      why: "Atmos adds sound from above, but Tom's Guide says real Atmos soundbars start around $500, and Atmos needs upward-firing speakers and the right HDMI port.",
      options: [
        { id: "yes", label: "Yes, I want the full effect", tier: "mid", needs: ["atmos"], form: { "soundbar": 2 },
          must: ["HDMI eARC on both the TV and the soundbar", "Upward-firing speakers, not just an Atmos label"],
          note: "What Hi-Fi says eARC is needed for lossless Atmos, and TechRadar says to look for upfiring speakers." },
        { id: "no", label: "No, clear dialogue and bass is enough",
          note: "Tom's Guide says budget soundbars without Atmos won't let you down." }
      ]
    },
    {
      id: "tvport",
      short: "Port",
      ask: "What does your TV connect with?",
      why: "The HDMI port decides what sound the soundbar can receive. TechRadar says most TVs have only one ARC or eARC port.",
      options: [
        { id: "earc", label: "HDMI eARC", form: { "soundbar": 1 },
          note: "The best option, per What Hi-Fi: highest bandwidth, and required for lossless Dolby Atmos." },
        { id: "arc", label: "HDMI ARC or optical only", form: { "soundbar": 1 },
          note: "Works for most shows. Digital Trends' chart lists optical as unable to carry Atmos." },
        { id: "unsure", label: "Not sure",
          note: "Check the port labels on the back of the TV, and the soundbar's HDMI ports." }
      ]
    }
  ],

  brandColumns: ["Small portables", "Wi-Fi portables", "Soundbars"],
  brandRows: [
    { label: "Examples", cells: ["JBL Clip 5, Wonderboom 4, Tribit PocketGo", "Sonos Roam 2, Sonos Play", "Samsung HW-B750D, Hisense HS5100, Sonos Beam"] },
    { label: "What stands out", cells: ["Cheap and light; the Clip 5 is NBC Select's best overall", "Wi-Fi and AirPlay 2 as well as Bluetooth; the Play is IP67 per SoundGuys", "A big step up from TV speakers, with RTINGS finding strong picks under $300"] },
    { label: "Connections", cells: ["Bluetooth", "Bluetooth plus Wi-Fi", "HDMI eARC or ARC, optical, Bluetooth"] },
    { label: "Watch out for", cells: ["Battery claims; Expert Reviews tests them against the maker's number", "Higher prices; the Sonos Play is $299 MSRP", "Atmos labels on cheap bars, and a TV with the wrong HDMI port"] }
  ],
  brandVerdict: "Choose the type first, then the port and rating. A soundbar needs the right TV connection and a portable needs the right water rating, and both matter more than the brand.",

  traps: [
    { claim: "\"Waterproof\"", reality: "Expert Reviews says IP67 and IP68 are the top tiers, while IPX4 to IPX6 are not considered waterproof. SlashGear adds that no device is waterproof in the literal sense." },
    { claim: "\"Up to 24 hours of battery\"", reality: "Expert Reviews tests whether battery life is as long as the maker states. Treat the maker's number as a best case and look for a tested figure." },
    { claim: "\"Dolby Atmos for $150\"", reality: "Tom's Guide says Atmos soundbars with 5.1.2 or at least 3.1.2 channels start around $500, so expecting 360-degree audio from a budget bar is a mistake. TechRadar says to look for upfiring speakers." },
    { claim: "\"Any HDMI port will do\"", reality: "TechRadar says Atmos needs an ARC or eARC port, and most TVs have only one. What Hi-Fi says lossless Atmos needs eARC on both the TV and the soundbar." },
    { claim: "\"It comes with a subwoofer, so it has big bass\"", reality: "Tom's Guide says a dedicated subwoofer is worth adding if your soundbar has a sub output. Check the box: Sony's HT-S100F is a standalone bar without one." },
    { claim: "\"Bluetooth is enough for the TV\"", reality: "Digital Trends says HDMI supports more audio formats than optical and gives better, more immersive sound. Bluetooth is for music." },
    { claim: "\"A portable speaker will fix my TV\"", reality: "Consumer Reports says a soundbar improves sound on all but the very best-sounding TVs. A portable speaker is built for music, not for a TV." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use reviewer and maker listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying. Prices move often, so confirm the current price and the exact configuration.",
  picksNote: "A short list of well-reviewed speakers and soundbars. Models change often, so use these to learn what to look for and verify the current price.",
  picks: [
    { name: "Tribit PocketGo", facts: {}, tier: "budget", form: "portable", checked: "2026-11",
      why: "Tom's Guide's best cheap Bluetooth speaker, under $40, performing like one closer to $100." },
    { name: "JBL Clip 5", facts: { waterproof: true }, tier: "budget", form: "portable", checked: "2026-11",
      why: "NBC Select's best overall and PhoneArena's under-$100 pick, with a clip for bikes and backpacks. Check the current price." },
    { name: "Ultimate Ears Wonderboom 4", facts: { waterproof: true }, tier: "budget", form: "portable", checked: "2026-11",
      why: "Best Buy lists IP67 and 14 hours of battery, with 360-degree sound. PhoneArena puts it under $100." },
    { name: "Sonos Roam 2", facts: { wifi: true }, tier: "mid", form: "portable", checked: "2026-11",
      why: "SoundGuys' best Bluetooth speaker with Wi-Fi. Check the current price." },
    { name: "Sonos Play", facts: { waterproof: true, wifi: true }, tier: "mid", form: "portable", checked: "2026-11",
      why: "SoundGuys' best smart speaker at $299 MSRP, with IP67, AirPlay 2, Wi-Fi and Bluetooth, and a charging dock included." },
    { name: "Ultimate Ears Epicboom", facts: {}, tier: "mid", form: "portable", checked: "2026-11",
      why: "RTINGS' upper mid-range pick. It lasts over 21 hours, and it's cheaper and easier to carry than the JBL Boombox 4, but not as loud." },
    { name: "JBL Boombox 4", facts: {}, tier: "upper", form: "portable", checked: "2026-11",
      why: "RTINGS' best portable speaker overall, with a $120 Best Buy price drop at the time. Large and heavy; check the current price." },
    { name: "Samsung HW-B750D", facts: { sub: true, wifi: false }, tier: "budget", form: "soundbar", checked: "2026-11",
      why: "RTINGS' best soundbar under $300, with balanced sound and a dedicated subwoofer. It has Bluetooth only, with no Wi-Fi, Chromecast or AirPlay." },
    { name: "Hisense HS5100", facts: { sub: true }, tier: "budget", form: "soundbar", checked: "2026-11",
      why: "RTINGS' best soundbar under $200, with discrete satellites for surround sound. Check the current price." },
    { name: "Sony HT-S100F", facts: { sub: false }, tier: "budget", form: "soundbar", checked: "2026-11",
      why: "RTINGS' best standalone soundbar under $200, meaning one without a separate subwoofer." },
    { name: "Hisense AX5125H", facts: { sub: true, atmos: true }, tier: "mid", form: "soundbar", checked: "2026-11",
      why: "TechRadar says it includes Dolby Atmos, two surrounds and a subwoofer for about $350. Check the current price." },
    { name: "Sonos Beam (Gen 2)", facts: { sub: false }, tier: "mid", form: "soundbar", checked: "2026-11",
      why: "RTINGS' best soundbar for TV if you want a small footprint. A subwoofer is a separate purchase; check the current price." },
    { name: "Klipsch Flexus Core 300", facts: {}, tier: "upper", form: "soundbar", checked: "2026-11",
      why: "RTINGS calls it a good all-in-one alternative to larger setups like the Samsung HW-Q990F, especially if you're short on space." }
  ]
};
