// Category content for the dash cam page. Same shape as the other guides.
// Prices are as listed by DashCamTalk and other reviewers in 2026; picks say to check the current price and model.
window.SITE_DATA = {
  category: "dashcams",
  title: "Before you buy a dash cam",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My dash cam result: Before You Buy",
  defaultForm: "front",

  forms: {
    "front": "Front camera only (simplest and cheapest)",
    "dual": "Front and rear, or more (covers being hit from behind)"
  },

  needDefs: {
    rear: { label: "A rear camera", fact: "rear", is: true },
    parking: { label: "A parking mode", fact: "parking", is: true },
    cloud: { label: "Remote viewing or cloud backup", fact: "cloud", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $120",
      adds: "A camera that records the road. DashCamTalk lists the 70mai A810 Lite front-and-rear at $89.98, the Vantrue E1 Pro at $110 and the 70mai M310 Plus 4K at $37.99.",
      missing: "Cloud viewing and the best rear video. DashCamTalk says the A810 Lite's rear video quality is not the best.",
      bestFor: "A first dash cam or a second car.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$120–250",
      adds: "Better video and more features. DashCamTalk lists the VIOFO A119M Pro at $139.97 and the 70mai A810S front-and-rear at $199.99, with Wi-Fi 6 and a buffered parking mode.",
      missing: "Built-in cloud and radar parking. DashCamTalk notes the A119M Pro runs hot.",
      bestFor: "Most commuters."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$250+",
      adds: "Three or four cameras and cloud options. DashCamTalk lists the Vantrue N5S four-channel at $349.99 and the VIOFO A329S at $429.98, which has an optional LTE module for cloud.",
      missing: "Simplicity. These are bigger cameras with more to install, and cloud features can carry fees.",
      bestFor: "Rideshare drivers, fleets and people who park on the street.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend on the camera?",
      why: "The camera is only part of the cost. Nexar says a hardwire kit for parking mode is usually $20 to $40, and a high-endurance memory card costs $10 to $15 more than a standard one.",
      options: [
        { id: "120", label: "Under $120", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. Good for recording the road, with fewer extras." },
        { id: "250", label: "Up to about $250", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, where front-and-rear and better night video appear." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "view",
      short: "View",
      ask: "What should it record?",
      why: "Nexar lists buying on resolution alone as the first common mistake. What the camera points at matters more than the pixel count.",
      options: [
        { id: "front", label: "The road ahead", form: { "front": 4 },
          note: "A front camera is the simplest and cheapest, and the most common choice." },
        { id: "both", label: "Ahead and behind", form: { "dual": 4 }, needs: ["rear"],
          note: "A rear camera records rear-end collisions. DashCamTalk says rear video quality is weaker than front on some cheaper two-channel models." },
        { id: "cabin", label: "Ahead, behind and inside the car (rideshare)", form: { "dual": 4 }, tier: "mid", needs: ["rear"],
          must: ["A model with an interior camera, such as a three- or four-channel dash cam"],
          note: "Nexar's One records the front and the cabin in 4K. DashCamTalk lists three- and four-channel models from $349.99." }
      ]
    },
    {
      id: "parking",
      short: "Parked",
      ask: "Do you want it recording while the car is parked?",
      why: "Consumer Reports says most dash cams need a hardwire kit for parking mode. A camera plugged into a socket that switches off with the ignition won't record while parked.",
      options: [
        { id: "no", label: "No, only while I'm driving",
          note: "A plug-in camera is fine. Skip the hardwire kit." },
        { id: "yes", label: "Yes, I park on the street or in a lot", needs: ["parking"],
          must: ["A parking mode, plus a hardwire kit (usually $20 to $40, sold separately)"],
          note: "Nexar says to confirm the camera supports parking mode and which kit it needs, and to budget for the kit." }
      ]
    },
    {
      id: "remote",
      short: "Remote",
      ask: "Do you want to see or save footage from your phone while you're away?",
      why: "Remote viewing and cloud backup need a cellular connection. Nexar says Garmin requires a Garmin Drive subscription for cloud storage and file sharing, and Joybuy notes some remote features need extra connectivity or a subscription.",
      options: [
        { id: "no", label: "No, I'll pull the card when I need a clip",
          note: "SafeWise says transferring footage with a card reader is much easier than with a mobile app." },
        { id: "yes", label: "Yes, alerts and backup if the car is hit", tier: "mid", needs: ["cloud"],
          must: ["Built-in cellular, or an add-on LTE module, and a clear answer on any monthly fee"],
          note: "Nexar's One has built-in LTE. DashCamTalk says the VIOFO A329S has an optional LTE module." }
      ]
    },
    {
      id: "heat",
      short: "Heat",
      ask: "Does your car sit in hot sun?",
      why: "BlackVue and several makers say a supercapacitor handles heat better than a lithium battery. Wolfbox says there's no meaningful advantage in mild conditions, and heat still affects the screen and mount.",
      options: [
        { id: "hot", label: "Yes, hot summers or parked outside",
          note: "Check whether the spec sheet says supercapacitor or battery. Wolfbox says it matters most for long parking in direct sun at 90°F or more." },
        { id: "mild", label: "No, mild climate or a garage",
          note: "Either power source is fine. Choose on the other answers." }
      ]
    }
  ],

  brandColumns: ["Garmin and Nexar", "VIOFO, Vantrue and 70mai", "BlackVue and Thinkware", "Random no-name"],
  brandRows: [
    { label: "Examples", cells: ["Garmin Dash Cam Mini 3, Nexar One", "VIOFO A329S, Vantrue N5S, 70mai A810S", "BlackVue Elite 9, Thinkware U3000 Pro", "Little-known Amazon listings, such as a Wakerug model TechRadar bought for about $20"] },
    { label: "What stands out", cells: ["Tom's Guide calls the Mini 3 the best compact dash cam, at 1080p and 140 degrees. Nexar says its One has built-in LTE and automatic cloud backup.", "DashCamTalk scores the A810S 7.7, the A329S 7.5 and the N5S 7.0, with buffered parking modes and extra channels.", "Vortex Radar, an affiliate site, picks the Thinkware U3000 Pro for radar parking and the BlackVue Elite 9 for cloud.", "Very low prices, and sometimes a memory card in the box. TechRadar says that $20 camera's Full HD video quality didn't match its claim."] },
    { label: "Parking and cloud", cells: ["Garmin cloud storage and file sharing need a Garmin Drive subscription, per Nexar.", "DashCamTalk lists an optional LTE module for the A329S; the Vantrue E1 Pro has radar parking.", "BlackVue says few brands provide remote connectivity. Check whether cloud use costs extra.", "Often an app-only setup. Which? says app-connected dash cams add security risks, and footage kept only on the card can be corrupted, damaged, lost or stolen."] },
    { label: "Watch out for", cells: ["Nexar is a maker reviewing its own cameras, so weigh its picks accordingly.", "DashCamTalk says the VIOFO A119M Pro runs hot and the A810S's rear video isn't the best.", "Reviews come from an affiliate site, so check prices and fees on the maker's page.", "BlackboxMyCar, which sells rival brands, says some Amazon \"4K\" bestsellers use 4 or 5.1 megapixel sensors, which isn't true 4K. VIOFO says a bad memory card causes freezing and missing files, so buy a high-endurance card."] }
  ],
  brandVerdict: "Choose by parking, memory card and heat before resolution. A 4K camera on a cheap card and a plug that cuts out with the ignition records nothing useful when you need it most.",

  traps: [
    { claim: "\"4K means clearer evidence\"", reality: "Nexar lists buying on resolution alone as the first common mistake. BlackboxMyCar says 4K only helps when the sensor, lens, bitrate and storage turn it into clear, reliable footage." },
    { claim: "\"It has a parking mode\"", reality: "Consumer Reports says most dash cams need a hardwire kit for parking mode. Nexar says a camera in a socket isn't getting parking protection, however its settings read, and the kit is usually $20 to $40." },
    { claim: "\"Any microSD card works\"", reality: "Nexar says standard cards fail within 6 to 12 months of continuous recording, while high-endurance cards last 2 to 4 years, for a $10 to $15 difference. Joybuy says the same 6 to 12 months for standard cards. Both are sellers, so treat the numbers as rough." },
    { claim: "\"Cloud backup is included\"", reality: "Nexar says Garmin's cloud storage and file sharing need a Garmin Drive subscription. Joybuy says some remote features need extra connectivity or a subscription, so ask before you buy." },
    { claim: "\"Battery or supercapacitor doesn't matter\"", reality: "Makers such as BlackVue and Red Tiger say a supercapacitor survives heat better, and Red Tiger says lithium cells lose capacity after 300 to 500 cycles. Wolfbox says it makes no meaningful difference in mild climates." },
    { claim: "\"Set it and forget it\"", reality: "BGR lists cheap memory cards and forgetting to check footage among the common mistakes. Nexar says to replace the card every 1 to 2 years even without visible failures." },
    { claim: "\"The cable is in the box, so it's installed\"", reality: "Nexar says parking mode needs a fuse-tap hardwire install. Joybuy says to check the camera's position and cable from the driver's seat before fixing anything in place." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use reviewer and maker listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying. Prices are as DashCamTalk listed them and change often.",
  picksNote: "A short list of well-reviewed dash cams. Models change, so use these to learn what to look for and verify the current model, price and fees.",
  picks: [
    { name: "70mai M310 Plus 4K", facts: { rear: false }, tier: "budget", form: "front", checked: "2026-11",
      why: "DashCamTalk's best one-channel value at $37.99. Check which parking features it has, and add a high-endurance card." },
    { name: "Vantrue E1 Pro", facts: { parking: true }, tier: "budget", form: "front", checked: "2026-11",
      why: "DashCamTalk lists it at $110, with buffered and radar parking modes. Check the rear options before buying." },
    { name: "VIOFO A119M Pro", facts: { rear: false }, tier: "mid", form: "front", checked: "2026-11",
      why: "DashCamTalk's best one-channel premium at $139.97, with good 4K video for the price. It's very small, but runs hot." },
    { name: "Garmin Dash Cam Mini 3", facts: {}, tier: "mid", form: "front", checked: "2026-11",
      why: "Tom's Guide's best compact dash cam, at 1080p and 140 degrees, with voice control and no screen. Check the price, and Garmin's subscription for cloud." },
    { name: "Rove R2-4K", facts: { rear: false }, tier: "mid", form: "front", checked: "2026-11",
      why: "SafeWise's pick for voice control, with an LCD screen and a built-in GPS logger. It has no rear camera, and that review dates from 2025." },
    { name: "70mai A810 Lite", facts: { rear: true, parking: true }, tier: "budget", form: "dual", checked: "2026-11",
      why: "DashCamTalk lists it at $89.98 with front and rear cameras, Wi-Fi 6 and a buffered parking mode. Rear video quality is not the best." },
    { name: "70mai A810S", facts: { rear: true, parking: true }, tier: "mid", form: "dual", checked: "2026-11",
      why: "DashCamTalk's best two-channel value at $199.99, with great front video. Rear video quality is not the best." },
    { name: "Vantrue N5S", facts: { rear: true }, tier: "upper", form: "dual", checked: "2026-11",
      why: "DashCamTalk's best four-channel premium at $349.99. Check the current price." },
    { name: "VIOFO A329S", facts: { rear: true, cloud: true }, tier: "upper", form: "dual", checked: "2026-11",
      why: "Vortex Radar's best overall pick and DashCamTalk's best three-channel premium at $429.98. Cloud needs the optional LTE module, so check the extra cost." },
    { name: "Nexar One with rear camera", facts: { rear: true, cloud: true }, tier: "upper", form: "dual", checked: "2026-11",
      why: "Nexar's own top pick, with 4K front and cabin recording, built-in LTE and automatic cloud backup. Nexar is the maker, so check independent reviews and any plan fees." }
  ]
};
