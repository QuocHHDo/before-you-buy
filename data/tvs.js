// Category content for the TV page. Same shape as the other guides.
window.SITE_DATA = {
  category: "tvs",
  title: "Before you buy a TV",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My TV result: Before You Buy",
  defaultForm: "miniled",

  forms: {
    "miniled": "Mini-LED TV (bright, and the best value per inch)",
    "oled": "OLED TV (best black levels, best in dim rooms)"
  },

  needDefs: {
    brightroom: { label: "Strong in a bright room", fact: "brightroom", is: true },
    gaming: { label: "Several full-speed HDMI 2.1 ports for gaming", fact: "gaming", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $800",
      adds: "A Mini-LED set with a strong picture for the money. Tom's Guide's best budget pick, the TCL QM6K, starts at $550 for 55 inches.",
      missing: "OLED black levels and the brightness, processing and polish of flagship sets.",
      bestFor: "Most living rooms and most viewers.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$800–1,500",
      adds: "Brighter Mini-LED, such as the Hisense U8QG at $997 on Amazon per Tom's Guide, or a mainstream OLED like the LG C5.",
      missing: "The very last bit of picture quality. Tom's Guide says the LG G5 looks slightly prettier than the C5 but isn't $1,500 better.",
      bestFor: "Movie nights, sports, and gaming."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$1,500+",
      adds: "Flagship OLED with top brightness and processing, such as the LG G6, Samsung S95H or S99H.",
      missing: "Value. Tom's Guide found the cheaper C5 so good that a flagship's gain is small for most people.",
      bestFor: "A dedicated, picture-first setup.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend?",
      why: "Size changes the price more than anything. These ranges are for common 55 to 65 inch sets, so a bigger screen costs more in every tier.",
      options: [
        { id: "800", label: "Under about $800", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. That buys a good Mini-LED set; OLED costs more." },
        { id: "1500", label: "Up to about $1,500", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, which covers bright Mini-LED and mainstream OLED." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "room",
      short: "Room",
      ask: "How bright is the room you'll watch in?",
      why: "Room light picks the panel type. OLED has the deepest blacks in a dim room. Mini-LED gets brighter, which helps against windows and lamps.",
      options: [
        { id: "bright", label: "Bright: windows, daytime viewing", form: { "miniled": 3 }, needs: ["brightroom"],
          must: ["Peak brightness that holds up in daylight; check a tested review"],
          note: "TechRadar names the Samsung S99H OLED its best TV for bright rooms. What Hi-Fi? says Mini-LED keeps getting brighter and cheaper." },
        { id: "dim", label: "Dim: evenings and movies", form: { "oled": 3 }, tier: "mid",
          must: ["An OLED panel for deep blacks, which costs more than budget Mini-LED"],
          note: "OLED shines here. Mainstream OLED, such as the LG C5, sits in the mid tier." },
        { id: "both", label: "A mix of both", form: { "miniled": 1 },
          note: "Mini-LED is the safer default for a room that changes through the day." }
      ]
    },
    {
      id: "use",
      short: "Use",
      ask: "What will you watch or play most?",
      why: "Gaming is the one use that needs specific ports. Streaming and movies work on almost any current set.",
      options: [
        { id: "stream", label: "Streaming and everyday TV",
          note: "Any current 4K set from a major brand does this well." },
        { id: "sports", label: "Sports and fast action",
          note: "Look for the panel's native refresh rate, not a 'motion rate' number." },
        { id: "gaming", label: "Gaming on a PS5, Xbox or PC", needs: ["gaming"],
          must: ["Two or more full-speed HDMI 2.1 inputs and a native 120Hz panel"],
          note: "Guides stress the number of full-spec HDMI 2.1 ports. The LG C6 has four, with 4K at 165Hz and variable refresh rate, per TechRadar." }
      ]
    },
    {
      id: "size",
      short: "Size",
      ask: "How big, and how far from the couch?",
      why: "Crutchfield suggests sitting 1 to 1.5 times the screen size away for a 4K picture. Samsung's rule of thumb is 1.2 times. A 65 inch set therefore suits roughly 5.5 to 8 feet.",
      options: [
        { id: "small", label: "Under 50 inches", note: "Good for a bedroom or small room. Your distance matters more than the spec sheet." },
        { id: "mid", label: "55 to 65 inches", note: "Samsung puts a 55 inch set at about 5.5 feet and a 75 inch set at about 7.5 feet." },
        { id: "large", label: "75 inches or more", form: { "miniled": 1 },
          note: "TechRadar names the TCL QM8L its best low-cost big screen. Big OLEDs cost far more." }
      ]
    },
    {
      id: "smart",
      short: "Privacy",
      ask: "Do ads and viewing-data tracking bother you?",
      why: "Smart TVs sample what's on screen to sell targeted ads. This is called ACR. Consumer Reports found that all smart TVs, from LG, Samsung, TCL and others, collect personal data.",
      options: [
        { id: "yes", label: "Yes, I want it off",
          must: ["Turn off ACR and ad personalization during setup (names vary by brand)"],
          note: "You can switch ACR off, but Consumer Reports says you can't stop all collection without disconnecting the TV from the internet." },
        { id: "no", label: "I don't mind" }
      ]
    }
  ],

  brandColumns: ["TCL and Hisense", "LG, Samsung and Sony flagships", "Entry-level LG and Samsung"],
  brandRows: [
    { label: "Examples", cells: ["TCL QM6K, Hisense U8QG", "LG G6, Samsung S95H, Sony Bravia 8 II", "The cheapest LED sets from the big names"] },
    { label: "What stands out", cells: ["Tom's Guide says their entry-level sets cost less and often offer more features for the money", "Of six brands Tom's Guide graded, only LG, Samsung and Sony make OLED, and they lead on top performance", "RTINGS calls entry-level and mid-range Samsung TVs usually poor value, and says LG's LED sets often have low contrast"] },
    { label: "Software", cells: ["Google TV or Roku, depending on the model", "LG webOS, Samsung Tizen, Sony Google TV", "The same as their top sets"] },
    { label: "Watch out for", cells: ["A flat, safe design; check the model, not the brand", "Paying for polish you may not see", "Paying for the name. Tom's Guide says a cheaper TCL or Hisense can beat them"] }
  ],
  brandVerdict: "Brand matters most at the top and the bottom. Buy a big name for a flagship OLED. For anything under about $800, TCL and Hisense usually give more picture for the money, according to Tom's Guide and RTINGS.",

  traps: [
    { claim: "\"Motion Rate 240\" or \"120Hz\"", reality: "Tom's Guide says there are only four real panel speeds: 60, 120, 144 and 165Hz. Other labels describe frames the TV adds in software. Look for 'native' refresh rate." },
    { claim: "\"HDMI 2.1\"", reality: "For 4K at 120Hz you need HDMI 2.1, and guides stress counting the full-speed ports. A set with one lets you connect only one console or PC at full quality." },
    { claim: "\"Bigger is always better\"", reality: "Crutchfield says to get the largest screen you can afford that still fits your room and your seating distance. Past that, a bigger screen only feels overwhelming." },
    { claim: "\"OLED is best everywhere\"", reality: "OLED wins in dim rooms. TechRadar picks the Samsung S99H as its bright-room set, and What Hi-Fi? says Mini-LED is getting brighter and cheaper." },
    { claim: "\"The famous brand is the safe pick\"", reality: "RTINGS says entry-level and mid-range Samsung TVs are usually poor value, and that you're better off with a competing TCL or Hisense." },
    { claim: "\"It's just a TV\"", reality: "A smart TV samples what you watch to target ads. Turning off ACR helps, but Cybernews notes that streaming apps can still collect some data, and Roku warns that data collected earlier may be retained." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use reviewer and maker listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying.",
  picksNote: "Well-reviewed TVs, sorted by typical price for common sizes. Prices vary a lot by screen size and change often, so check the current price for your size.",
  picks: [
    { name: "TCL QM6K (QD-Mini LED)", facts: {}, tier: "budget", form: "miniled", checked: "2026-11",
      why: "Tom's Guide's best budget TV. The 55 inch model starts at $550." },
    { name: "Hisense U75QG (Mini-LED)", facts: {}, tier: "budget", form: "miniled", checked: "2026-11",
      why: "Tom's Guide's budget runner-up, and its best TV under $800." },
    { name: "TCL QM8L (Mini-LED)", facts: {}, tier: "mid", form: "miniled", checked: "2026-11",
      why: "TechRadar's pick for the best low-cost big screen. Check the price at your size." },
    { name: "Hisense U8QG (Mini-LED)", facts: { brightroom: true }, tier: "mid", form: "miniled", checked: "2026-11",
      why: "Tom's Guide calls it a Mini-LED marvel with incredible brightness and color, running Google TV, at $997 on Amazon." },
    { name: "LG C5 OLED", facts: { gaming: true }, tier: "mid", form: "oled", checked: "2026-11",
      why: "Tom's Guide gave it five stars and called it the best TV of 2026 so far. TechRadar lists four HDMI 2.1 ports and up to 144Hz." },
    { name: "LG C6 OLED", facts: { gaming: true }, tier: "upper", form: "oled", checked: "2026-11",
      why: "TechRadar lists 4K at 165Hz, variable refresh rate, 9.2ms input lag in Boost mode and four HDMI 2.1 ports." },
    { name: "Samsung S95H OLED", facts: {}, tier: "upper", form: "oled", checked: "2026-11",
      why: "RTINGS names it the best Samsung TV it tested in 2026." },
    { name: "Samsung S99H OLED", facts: { brightroom: true }, tier: "upper", form: "oled", checked: "2026-11",
      why: "TechRadar's best TV for bright rooms. It calls the price hefty even next to other premium OLEDs." }
  ]
};
