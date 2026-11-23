// Category content for the microphone page. Same shape as the other guides.
// Prices are street or listed prices from roundups and retailers. Sales move them a lot.
window.SITE_DATA = {
  category: "microphones",
  title: "Before you buy a microphone",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My microphone result: Before You Buy",
  defaultForm: "dynamic",

  forms: {
    "dynamic": "Dynamic mic (forgiving in noisy rooms)",
    "condenser": "Condenser mic (more detail, picks up the room)"
  },

  needDefs: {
    xlr: { label: "An XLR output so you can add an interface later", fact: "xlr", is: true },
    headphone: { label: "A headphone jack on the mic", fact: "headphone", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $100",
      adds: "A mic that works. Post Flow lists the Samson Q2U at $79.99, a dynamic with USB and XLR, and the Elgato Wave Neo at $62.99.",
      missing: "Onboard processing and polish. You'll set levels by hand.",
      bestFor: "A first mic for calls, streaming or a solo podcast.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$100–250",
      adds: "Software and extra controls. Post Flow lists the Elgato Wave:3 MK.2 at $133.99, and Windows Central lists the HyperX QuadCast 2 S at $199.99.",
      missing: "The XLR upgrade path on some models. Check the connectors before you buy.",
      bestFor: "Streamers who want a software mixer and a plug-in setup.",
      badge: "Sweet spot"
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$250+",
      adds: "A broadcast-style dynamic with USB-C and XLR. Sweetwater lists the Shure MV7+ at $299, and Best Buy lists a bundle with stand at $319.99.",
      missing: "Value if your room is quiet and you only record casually. A $80 dynamic starts the same job.",
      bestFor: "Podcasters and creators who want to grow into a full setup.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend on the mic?",
      why: "Prices vary by store. Sweetwater lists the Shure MV7+ at $299, and Best Buy lists the bundle with a stand at $319.99. A boom arm, pop filter or interface can add to the total, so check what's in the box.",
      options: [
        { id: "100", label: "Under $100", budgetCap: "budget",
          note: "Sets your ceiling at budget tier." },
        { id: "250", label: "Up to about $250", budgetCap: "mid",
          note: "Sets your ceiling at mid tier." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "room",
      short: "Room",
      ask: "What does your room sound like?",
      why: "Elgato says dynamic mics are less sensitive and forgiving in untreated rooms, while condensers pick up more detail but also more of your room. One roundup tested a USB condenser with a window AC running and still heard the hum despite noise suppression.",
      options: [
        { id: "noisy", label: "Fans, AC, hard walls or street noise", form: { "dynamic": 4 },
          note: "Gamerhardware's roundup says the Shure MV7+ handles untreated rooms better than any other plug-and-play option, but that's one roundup's claim." },
        { id: "quiet", label: "A quiet, carpeted room", form: { "condenser": 3 },
          note: "A condenser can capture more detail here. Rode's NT-USB+ is described by one roundup as needing a treated room." },
        { id: "unsure", label: "I'm not sure", form: { "dynamic": 2 },
          note: "Record ten seconds of silence on your phone and listen for hum, fans or echo. If you hear any, a dynamic is the safer pick." }
      ]
    },
    {
      id: "connect",
      short: "Connection",
      ask: "Do you want to add an audio interface later?",
      why: "Elgato says a USB mic is plug and play, while an XLR mic never works alone and needs an audio interface and cable. Condenser mics also need 48V phantom power from the interface, and some quiet dynamics need more gain than a basic interface gives cleanly.",
      options: [
        { id: "later", label: "Maybe, I want room to grow", needs: ["xlr"],
          note: "Post Flow says the Shure MV7+, Rode PodMic USB and Samson Q2U carry both connectors, so they run on USB today and XLR later." },
        { id: "usb", label: "No, plug in and go",
          note: "Elgato says a good USB mic covers streaming, meetings, voiceover or a solo podcast without compromise." },
        { id: "unsure", label: "I don't know",
          note: "A USB and XLR dynamic like the $79.99 Samson Q2U costs little and keeps both options open." }
      ]
    },
    {
      id: "who",
      short: "Who",
      ask: "Who will be recording?",
      why: "TechRadar says the HyperX QuadCast 2 is noticeably worse at cutting background noise outside cardioid mode, so if you're podcasting with several people you'll need a mic for each of them. Multi-pattern mics aren't a shortcut for one-mic interviews.",
      options: [
        { id: "solo", label: "Just me",
          note: "One cardioid mic is enough. Most reviews say cardioid is the pattern you'll use almost all the time." },
        { id: "multi", label: "Two or more people in one room",
          note: "Plan on one mic per person, which multiplies the cost. With USB mics, you'd also need a way to combine them, such as an interface or mixer." },
        { id: "travel", label: "I'll travel with it",
          note: "Elgato says a USB mic travels well and sets up on any laptop." }
      ]
    },
    {
      id: "extras",
      short: "Extras",
      ask: "What else do you want from it?",
      why: "Post Flow says Elgato is the only maker in its roundup with a software mixer, Wave Link, for balancing game, chat and music. Elgato says Wave Link works with any microphone, USB or XLR, so you don't need a Wave mic to use it.",
      options: [
        { id: "monitor", label: "Hear myself live through headphones", needs: ["headphone"],
          note: "Tom's Hardware lists a 3.5mm headphone jack on the HyperX QuadCast 2 S, and Mayfair Farms lists no-latency monitoring on the Blue Yeti." },
        { id: "mixer", label: "A software mixer for stream audio", form: { "condenser": 2 },
          note: "Post Flow says the Wave:3 MK.2 takes the streaming slot because of Wave Link, even though it's a condenser." },
        { id: "none", label: "Just a good voice",
          note: "You can skip paid extras and spend on a stand or boom arm instead." }
      ]
    }
  ],

  brandHeading: "Big brands vs budget brands",
  brandColumns: ["Shure and Rode", "Elgato and HyperX", "Samson and Blue", "Fifine, Tonor and Amazon Basics"],
  brandRows: [
    { label: "Examples", cells: ["Shure MV7+, Rode PodMic USB", "Elgato Wave:3 MK.2, Wave Neo, HyperX QuadCast 2 S", "Samson Q2U, Blue Yeti X", "Fifine K669B, Tonor TC-777, Amazon Basics USB condenser"] },
    { label: "What stands out", cells: ["Post Flow says the MV7+ and PodMic USB carry both USB and XLR connectors", "Post Flow says Elgato is the only maker with a software mixer, Wave Link", "Post Flow lists the Q2U at $79.99 with USB and XLR, and Reviewed named the Yeti X best overall", "CNN Underscored named the Fifine K669B its best budget mic at $35, and PC Gamer called the $23 Amazon Basics mic decent and well built."] },
    { label: "Watch out for", cells: ["Prices vary: Sweetwater lists the PodMic USB at $190 while Musician's Friend lists $199 to $209", "Post Flow lists the Wave:3 MK.2 at $133.99 while BGR lists $169.99, and PopSci says it needs a USB 3.0 port", "Reviewed says the Yeti X isn't great for conversations", "Reviewers frame them as fine for calls and basic content, not music. StreamTechReviews says the Tonor TC-777 is all plastic and too light, so it can tip over."] }
  ],
  brandVerdict: "Room and connection matter more than brand. A noisy room favors a dynamic, and a USB-and-XLR mic keeps your options open for the cost of a quick check.",

  traps: [
    { claim: "\"192 kHz, 32-bit studio quality\"", reality: "Tom's Hardware says of the HyperX QuadCast 2 S that you don't need 192 kHz and 32-bit resolution. Voice recordings don't gain from it." },
    { claim: "\"Condenser means better sound\"", reality: "Elgato says condensers pick up more detail but also more of your room. The Musicians Institute says both types produce excellent results and you shouldn't choose on type alone." },
    { claim: "\"Noise cancellation\"", reality: "Tom's Hardware says the QuadCast 2 S minimizes constant noise like PC fans decently but is only passable on inconsistent noise. A condenser with noise suppression still let through a window AC hum in one roundup's test." },
    { claim: "\"Four polar patterns\"", reality: "TechRadar says on the HyperX QuadCast 2, cardioid is the only mode worth using, and the other modes are noticeably worse at cutting background noise." },
    { claim: "\"USB is cheap, XLR is pro\"", reality: "Elgato says XLR needs an interface and cable, plus 48V phantom power for condensers. A USB mic covers most single-voice setups, and hybrids like the MV7+ and Q2U do both." },
    { claim: "\"Any USB port works\"", reality: "PopSci says the Elgato Wave:3 must be plugged into a USB 3.0 port. Otherwise it may partly work and give staticky, unusable sound." },
    { claim: "\"The price includes everything\"", reality: "Sweetwater lists the MV7+ alone at $299 and with a stand at $319. Best Buy's bundle includes a foam windscreen, a 3 m cable and a stand. BGR says the built-in windscreen on the MV7X is thin, so budget for a thicker cover." }
  ],

  picksListed: "2026-11",
  factsNote: "XLR and headphone-jack checks use maker, retailer and reviewer listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying. Prices move with sales, and tiers for mics without a confirmed price are estimates.",
  picksNote: "A short list of well-reviewed microphones. Models and prices change, so use these to learn what to look for and verify the model, the connectors and the current price.",
  picks: [
    { name: "Samson Q2U", facts: { xlr: true, headphone: true }, tier: "budget", form: "dynamic", checked: "2026-11",
      why: "Post Flow lists it at $79.99, a dynamic with USB and XLR. One roundup lists headphone monitoring and included cables. You'll set the level by hand." },
    { name: "Elgato Wave Neo", facts: {}, tier: "budget", form: "condenser", checked: "2026-11",
      why: "Post Flow lists it at $62.99 as the cheapest credible condenser, with tap-to-mute and Wave Link. Check the connectors, and use it in a quiet room." },
    { name: "Elgato Wave:3 MK.2", facts: { xlr: false }, tier: "mid", form: "condenser", checked: "2026-11",
      why: "Post Flow lists it at $133.99 and BGR at $169.99. Elgato says it processes your voice on the mic itself, and PopSci says the Wave:3 needs a USB 3.0 port." },
    { name: "HyperX QuadCast 2 S", facts: { headphone: true }, tier: "mid", form: "condenser", checked: "2026-11",
      why: "Windows Central lists it at $199.99, and Tom's Hardware paid $150 at review time. It has a built-in shock mount and a 3.5mm headphone jack. Cardioid is the mode that matters." },
    { name: "Blue Yeti X", facts: {}, tier: "mid", form: "condenser", checked: "2026-11",
      why: "Reviewed named it best overall and lists it at $229 to $247, but says it's not great for conversations. Check the headphone jack and the stand." },
    { name: "Rode PodMic USB", facts: { xlr: true }, tier: "mid", form: "dynamic", checked: "2026-11",
      why: "Sweetwater lists it at $190 and Musician's Friend at $199 to $209. Post Flow says it carries both USB and XLR connectors." },
    { name: "Shure MV7+", facts: { xlr: true }, tier: "upper", form: "dynamic", checked: "2026-11",
      why: "Sweetwater lists it at $299 and Best Buy's bundle with stand at $319.99. Several roundups name it best overall, with USB-C and XLR outputs. A cheaper dynamic does the same basic job." }
  ]
};
