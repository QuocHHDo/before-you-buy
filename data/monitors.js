// Category content for the monitor page. Same shape as the other guides.
// Monitor prices are rising (memory and panel costs), so tier bands are approximate and prices are "at the time" figures.
window.SITE_DATA = {
  category: "monitors",
  title: "Before you buy a monitor",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My monitor result: Before You Buy",
  defaultForm: "everyday",

  forms: {
    "everyday": "Everyday monitor (text, video calls, streaming, laptop docking)",
    "gaming": "Gaming monitor (fast refresh, smooth motion)"
  },

  needDefs: {
    usbc: { label: "USB-C that also charges your laptop", fact: "usbc", is: true },
    hz144: { label: "144Hz or faster", fact: "hz144", is: true },
    burnin3: { label: "A 3-year warranty that covers OLED burn-in", fact: "burnin3", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $300",
      adds: "A good screen for the price. PCWorld's best budget monitor, the Acer Vero B247Y G, was $109.99, and RTINGS' best gaming monitor under $300 is the AOC Q27G3XMN.",
      missing: "OLED, USB-C charging and the sharpest text.",
      bestFor: "Documents, streaming, school and first gaming monitors.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$300–800",
      adds: "A premium everyday monitor like PCWorld's best overall, the Dell UltraSharp U2724DE at $498, or an OLED gaming monitor like the Alienware AW2726DM at just under $350.",
      missing: "4K at larger sizes and the fastest OLED panels.",
      bestFor: "Most people who sit at a monitor every day for years."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$800+",
      adds: "4K and ultrawide screens, such as PCWorld's best 4K monitor, the Dell UltraSharp U3225QE at $819, or the MSI MPG 341CQR ultrawide at $899.99.",
      missing: "Everyday value. Most of the extra goes to size and resolution.",
      bestFor: "Creators and people who want a very large or very sharp screen.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend?",
      why: "Monitor prices are starting to rise. TweakTown reports KTC warned of price increases and AOC told distributors of adjustments from August, citing higher panel and component costs.",
      options: [
        { id: "300", label: "Under $300", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. Good monitors exist here, but OLED and USB-C charging are rare." },
        { id: "800", label: "Up to about $800", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, where premium everyday monitors and OLED gaming monitors appear." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "use",
      short: "Use",
      ask: "What will you do on it most?",
      why: "Gaming and office work want different things. Engadget says a gamer should prioritize a high refresh rate, but for office work a standard 60Hz display is more than enough.",
      options: [
        { id: "work", label: "Work, school, streaming and video calls", form: { "everyday": 4 },
          note: "Prioritize sharp text and the right ports. Refresh rate matters little here." },
        { id: "game", label: "Gaming", form: { "gaming": 4 }, needs: ["hz144"],
          must: ["A refresh rate your graphics card can actually reach"],
          note: "Digital Trends says a proper gaming monitor should be above 100Hz, and supports variable refresh rate (G-Sync or FreeSync)." },
        { id: "both", label: "A bit of both",
          note: "Everyday is the default for the picks below. A 144Hz monitor can handle both." }
      ]
    },
    {
      id: "panel",
      short: "Screen",
      ask: "What kind of screen do you want?",
      why: "OLED has deep blacks and fast response but can suffer burn-in, so the warranty matters. IPS and VA are cheaper and brighter for static work.",
      options: [
        { id: "oled", label: "OLED, for deep blacks and fast motion", tier: "mid", needs: ["burnin3"], form: { "gaming": 1 },
          must: ["A warranty that explicitly covers burn-in, ideally 3 years"],
          note: "Yahoo reports only Alienware and Corsair offered a 3-year warranty that explicitly covers burn-in at the time of writing, and LG offered two years. ASUS now offers 3 years." },
        { id: "lcd", label: "IPS or VA, bright and worry-free",
          note: "Digital Trends says that with proper maintenance burn-in shouldn't happen on an OLED, but an LCD avoids the question." }
      ]
    },
    {
      id: "laptop",
      short: "Laptop",
      ask: "Will you plug a laptop into it?",
      why: "A monitor with USB-C power delivery charges a laptop and carries video over one cable. Without it you need a separate charger and a video cable.",
      options: [
        { id: "yes", label: "Yes, I dock a laptop", form: { "everyday": 2 }, needs: ["usbc"],
          must: ["USB-C with enough power delivery for your laptop, in watts"],
          note: "PCWorld lists the Dell U3225QE with Thunderbolt 4, USB-C and 140 watts of Power Delivery, and the MSI MPG 341CQR with up to 98 watts." },
        { id: "no", label: "No, it's for a desktop",
          note: "Check the monitor has the ports your PC uses, since Engadget lists port selection among common mistakes." }
      ]
    },
    {
      id: "timing",
      short: "Timing",
      ask: "Do you need it right now?",
      why: "Memory and component costs are rising across PC hardware. TechRadar says KTC warned its monitors may see a price increase.",
      options: [
        { id: "now", label: "Yes, in the next few weeks",
          note: "Compare the exact model number. Prices for the same monitor swing during sales." },
        { id: "wait", label: "No, I can wait",
          note: "Waiting may not help if costs keep rising, as KTC and AOC have signaled." }
      ]
    }
  ],

  brandHeading: "Brands compared",
  brandColumns: ["Dell", "ASUS and MSI", "AOC and budget makers"],
  brandRows: [
    { label: "Examples", cells: ["UltraSharp U2724DE and U3225QE, Alienware AW2726DM", "ROG Swift PG32UCDM and PG27AQDP, MSI MPG 272URX", "AOC Q27G3XMN, Acer Vero B247Y G, Pixio PX248 Wave"] },
    { label: "What stands out", cells: ["PCWorld's best overall and best 4K picks; every Dell OLED monitor has a 3-year burn-in warranty, per AOL", "Fast OLED gaming panels; ASUS offers a 3-year warranty that includes burn-in", "Low prices; the AOC retails at $300 with mini LED and 180Hz, per AOL"] },
    { label: "Warranty", cells: ["3 years on OLED, burn-in included", "ASUS: 3 years including burn-in on OLED since 2024", "Check each model"] },
    { label: "Watch out for", cells: ["No speakers on the U3225QE, and only 60Hz", "Premium prices; the MSI 272URX was $798", "Marketing specs such as 1ms and HDR400"] }
  ],
  brandVerdict: "Choose by use first, then check the ports and warranty. The refresh rate, HDR badge and response-time number on the box matter less than whether the monitor suits what you'll do on it.",

  traps: [
    { claim: "\"HDR400\"", reality: "Zelpio says HDR400 only requires 400 nits of brightness, and Impressive Magazine calls it the most misleading spec in the industry. Check measured HDR brightness in a review." },
    { claim: "\"1ms response time\"", reality: "DisplayHDR says a 1ms GtG panel at 60Hz still has 16.6ms MPRT, and brands usually don't state the overdrive level. Digital Trends notes no gaming monitor advertises more than 1ms, so the spec tells you little." },
    { claim: "\"360Hz for smoother games\"", reality: "Digital Trends says your graphics card doesn't care about your refresh rate. Impressive Magazine warns against paying for 360Hz with a mid-range card." },
    { claim: "\"OLED will last forever\"", reality: "Digital Trends says burn-in happens when OLED materials degrade at different rates. Yahoo reports few brands cover it explicitly, so check the warranty wording." },
    { claim: "\"1080p is fine at any size\"", reality: "Evetech says 27 inches is 1440p territory and 24 inches is the largest size where 1080p still looks crisp." },
    { claim: "\"Treat it like a TV\"", reality: "Engadget lists treating a monitor like a TV, ignoring ports and ergonomics, and falling for marketing among the common mistakes. Check that the stand and mount fit you." },
    { claim: "\"Prices will drop soon\"", reality: "TweakTown reports KTC warned of price increases and AOC told distributors of adjustments from August." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use reviewer and maker listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying. Prices are the figures reviewers listed at the time, and are rising, so confirm the current price.",
  picksNote: "A short list of well-reviewed monitors. Models change every year, so use these to learn what to look for and verify the current price.",
  picks: [
    { name: "Acer Vero B247Y G", facts: {}, tier: "budget", form: "everyday", checked: "2026-11",
      why: "PCWorld's best budget monitor at $109.99 on Amazon, with a solid build and ergonomic stand. Check the current price." },
    { name: "Dell UltraSharp U2724DE", facts: {}, tier: "mid", form: "everyday", checked: "2026-11",
      why: "PCWorld's best monitor overall, listed at $498.19 at Walmart. Check the ports and current price." },
    { name: "Dell UltraSharp U3225QE", facts: { usbc: true, hz144: false }, tier: "upper", form: "everyday", checked: "2026-11",
      why: "PCWorld's best 4K monitor at $819 on Amazon, with Thunderbolt 4, USB-C and 140W Power Delivery. It has no speakers and is limited to 60Hz." },
    { name: "MSI MPG 341CQR", facts: { usbc: true }, tier: "upper", form: "everyday", checked: "2026-11",
      why: "PCWorld's best ultrawide at $899.99 at B&H, with USB-C up to 98 watts. HDR brightness is only competitive in some situations." },
    { name: "Pixio PX248 Wave", facts: {}, tier: "budget", form: "gaming", checked: "2026-11",
      why: "PCWorld's best budget gaming monitor at $159.99 on Amazon, with surprisingly decent built-in speakers." },
    { name: "AOC Q27G3XMN", facts: { hz144: true }, tier: "budget", form: "gaming", checked: "2026-11",
      why: "RTINGS' best gaming monitor under $300, a 27-inch 1440p 180Hz VA panel with Mini LED backlighting. It retails at $300 per AOL." },
    { name: "Alienware AW2726DM", facts: { hz144: true, burnin3: true }, tier: "mid", form: "gaming", checked: "2026-11",
      why: "Tom's Hardware's best-value OLED gaming monitor, a QD-OLED QHD 240Hz panel at a street price of just under $350. AOL reports every Dell OLED monitor has a 3-year burn-in warranty." },
    { name: "MSI MPG 272URX", facts: {}, tier: "mid", form: "gaming", checked: "2026-11",
      why: "PCWorld's best gaming monitor, a 26.5-inch 4K OLED at $798 on Amazon with strong motion clarity. Check the warranty terms." },
    { name: "ASUS ROG Swift PG27AQDP", facts: { hz144: true }, tier: "upper", form: "gaming", checked: "2026-11",
      why: "Tom's Hardware's best OLED gaming monitor, a 27-inch QHD panel at 480Hz. Check the current price." },
    { name: "ASUS ROG Swift PG32UCDM", facts: { hz144: true, burnin3: true }, tier: "upper", form: "gaming", checked: "2026-11",
      why: "A 32-inch 4K QD-OLED at 240Hz with a 3-year burn-in warranty, per ASUS. Check the current price." }
  ]
};
