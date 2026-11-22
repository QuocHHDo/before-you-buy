// Category content for the smart lock page. Same shape as the other guides.
// Prices are street or listed prices from roundups. Sources often disagree, so check the live price.
window.SITE_DATA = {
  category: "smart-locks",
  title: "Before you buy a smart lock",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My smart lock result: Before You Buy",
  defaultForm: "wifi",

  forms: {
    "wifi": "Built-in Wi-Fi (no hub, but it drains batteries faster)",
    "hub": "Thread, Bluetooth or hub-based (longer battery, remote access needs a hub or bridge)"
  },

  needDefs: {
    homekey: { label: "Apple Home Key (tap your iPhone or Watch)", fact: "homekey", is: true },
    grade1: { label: "A published ANSI Grade 1 security rating", fact: "grade1", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $200",
      adds: "Keyless entry and an app. Asurion lists the Ultraloq U-Bolt Pro Wi-Fi at $149 and the Wyze Lock at $129.",
      missing: "A published security grade on many models, and often Matter or Home Key.",
      bestFor: "Renters and anyone who wants keyless entry without a big spend.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$200–300",
      adds: "Better build and more ecosystems. One roundup lists the Level Lock at $249 with an ANSI Grade 1 rating, and another lists the Aqara U200 at $229.",
      missing: "Free remote access on some models. Level's lock needs a $79 Wi-Fi bridge or a Thread hub, says one roundup.",
      bestFor: "Most homeowners who want a trusted lock and Apple or Matter support.",
      badge: "Sweet spot"
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$300+",
      adds: "Built-in Wi-Fi, Apple Home Key and a strong security grade in one lock. Prices for the Schlage Encode Plus range from $279 to $329 across sources.",
      missing: "Battery life on a Wi-Fi lock. One reviewer saw a Yale Wi-Fi module drain batteries in about four months.",
      bestFor: "Buyers who want no hub and Apple Home Key out of the box.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend?",
      why: "Sources disagree on prices. The Yale Assure Lock 2 shows up from $188 to $279 across roundups, and the August Wi-Fi Smart Lock from $193 to $279. Modules and bridges can add $30 to $80, so ask what's in the box.",
      options: [
        { id: "200", label: "Under $200", budgetCap: "budget",
          note: "Sets your ceiling at budget tier." },
        { id: "300", label: "Up to about $300", budgetCap: "mid",
          note: "Sets your ceiling at mid tier." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "door",
      short: "Door",
      ask: "What's your door like?",
      why: "One reviewer says to measure your door's thickness, because a door over 2 inches needs longer bolts. Another guide says fit depends on thickness, bore diameter and backset. SlashGear says fire doors need a special smart lock.",
      options: [
        { id: "standard", label: "A standard deadbolt I can replace",
          note: "Check the exact model's compatibility checker. A standard deadbolt isn't a universal measurement." },
        { id: "keep", label: "I want to keep my deadbolt (renter)", form: { "wifi": 2 },
          note: "Retrofit locks like the August Wi-Fi Smart Lock clamp over an existing deadbolt. Best Buy Canada says most smart locks install in half an hour or less." },
        { id: "special", label: "A fire door, thick door or unusual lock",
          note: "Check the maker's compatibility page before ordering. SlashGear says fire-rated doors need a special lock." }
      ]
    },
    {
      id: "remote",
      short: "Remote",
      ask: "Do you want to lock and unlock from anywhere?",
      why: "Wi-Fi locks give remote access without a hub but use more battery. Tom's Guide says locks on Bluetooth or Zigbee with a hub last around a year. CHOICE says a Wi-Fi lock with remote access can be compromised from anywhere in the world, while Bluetooth needs someone nearby.",
      options: [
        { id: "wifi", label: "Yes, built in, no hub", form: { "wifi": 4 },
          note: "One reviewer saw a Yale Wi-Fi module drain batteries in about four months, against over a year for Bluetooth only." },
        { id: "hub", label: "Yes, with a hub or Thread network I already have", form: { "hub": 4 },
          note: "One reviewer says the Thread connection was noticeably more reliable than Wi-Fi-only locks, and Aqara's U100 needs an Apple Home hub for remote access." },
        { id: "local", label: "No, keypad or phone nearby is fine", form: { "hub": 3 },
          note: "You skip hub costs and get longer battery life. Almost every modern smart lock supports Bluetooth, says Yahoo." }
      ]
    },
    {
      id: "apple",
      short: "Phone",
      ask: "Do you want to tap your iPhone or Apple Watch to unlock?",
      why: "One reviewer says Apple Home Key on the Yale Assure Lock 2 needs the Matter module and an Apple Home hub, while the Schlage Encode Plus does it over built-in Wi-Fi with no extra hardware.",
      options: [
        { id: "yes", label: "Yes", needs: ["homekey"],
          note: "A roundup lists Home Key on the Aqara U100 and U200, the Level Lock and the Schlage Encode Plus. Check what hub or module it needs." },
        { id: "no", label: "No, a keypad or fingerprint is fine",
          note: "You can skip Home Key. Fingerprint locks like the Aqara U100 are praised, but check the hub they need." },
        { id: "android", label: "I use Android",
          note: "Check that the lock works with Google Home or Alexa. Matter support helps, but several roundups note brand apps are still needed first." }
      ]
    },
    {
      id: "security",
      short: "Security",
      ask: "How much do you care about the lock's security grade?",
      why: "A buying guide says to choose a published ANSI/BHMA grade. One roundup lists the Level Lock as ANSI Grade 1 and BHMA AAA, but lists the Level Bolt with no grade stated. Many cheaper locks don't publish one.",
      options: [
        { id: "high", label: "A lot, it's my front door", needs: ["grade1"], tier: "mid",
          must: ["A published ANSI Grade 1 rating, which usually costs more"],
          note: "A roundup says the Yale Assure Lock 2 and Schlage Encode both carry Grade 1. Check the model, since not every lock from a brand does." },
        { id: "ok", label: "A decent lock is fine",
          note: "A budget lock gives keyless convenience. Check whether the grade is published." },
        { id: "unsure", label: "I don't know",
          note: "Look for an ANSI/BHMA grade on the box or the maker's page. Grade 1 is the highest." }
      ]
    }
  ],

  brandColumns: ["Schlage and Yale", "August and Level", "Aqara and Ultraloq"],
  brandRows: [
    { label: "Examples", cells: ["Schlage Encode Plus, Yale Assure Lock 2", "August Wi-Fi Smart Lock (4th gen), Level Lock, Level Bolt", "Aqara U100 and U200, Ultraloq U-Bolt Pro Wi-Fi"] },
    { label: "What stands out", cells: ["One roundup says the Encode Plus does Apple Home Key over its own Wi-Fi. Yale's lock takes swappable Wi-Fi, Bluetooth or Thread modules", "August is a retrofit lock that clamps over your deadbolt. The Level Lock is listed at $249 with ANSI Grade 1", "One roundup says the Aqara U100 has an exceptional fingerprint reader, and lists the Ultraloq U-Bolt Pro Wi-Fi at $149"] },
    { label: "Watch out for", cells: ["Yale's Wi-Fi module is extra, and one reviewer saw about four months of battery with it", "One reviewer says August has promised Matter since 2023, while another lists it arriving by update, so check the firmware. Level needs a $79 bridge or a Thread hub", "Aqara's U100 needs an Apple Home hub for remote access, and one roundup says Matter setup still needs the brand's app first"] }
  ],
  brandVerdict: "Check how the lock connects, what it needs for remote access, and whether it fits your door before the brand. A cheap lock with a hidden hub or bridge cost isn't cheap.",

  traps: [
    { claim: "\"Matter support\"", reality: "One reviewer says Aqara's setup still requires the brand's app first. One roundup says August has promised Matter since 2023, while another lists it arriving by update, so confirm what's shipping today." },
    { claim: "\"Works with Apple Home Key\"", reality: "One reviewer says Home Key on the Yale Assure Lock 2 needs the Matter module and an Apple Home hub, while the Schlage Encode Plus does it with built-in Wi-Fi. Aqara's U100 needs an Apple Home hub for remote access." },
    { claim: "\"Up to a year of battery\"", reality: "Tom's Guide says locks on Bluetooth or Zigbee with a hub last around a year. One reviewer saw a Yale Wi-Fi module drain batteries in about four months." },
    { claim: "\"No hub needed\"", reality: "One roundup says the Level Lock needs a Matter-over-Thread hub or a $79 Wi-Fi bridge for remote access. CHOICE says a Wi-Fi bridge can raise the overall cost." },
    { claim: "\"It fits any deadbolt\"", reality: "One reviewer says a door over 2 inches thick needs longer bolts. Another guide says thickness, bore diameter and backset can all stop a lock fitting. SlashGear says fire doors need a special lock." },
    { claim: "\"You'll never be locked out\"", reality: "SlashGear says a Wi-Fi outage or power failure can stop app control. Android Authority says a good lock includes a backup key and low-battery warnings, and Yahoo says a key always works when power or internet is down." },
    { claim: "\"Wi-Fi is as safe as Bluetooth\"", reality: "CHOICE says a Wi-Fi lock with remote access can be compromised from anywhere, while Bluetooth needs someone within range. Yahoo says Wi-Fi is safe with a robust password. Use a strong one either way." }
  ],

  picksListed: "2026-11",
  factsNote: "Home Key and security-grade checks use maker, retailer and reviewer listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying. Sources often disagree on prices, and tiers for locks without a confirmed price are estimates.",
  picksNote: "A short list of well-reviewed smart locks. Models and prices change, so use these to learn what to look for and verify the model, what it needs for remote access and the current price.",
  picks: [
    { name: "Wyze Lock Wi-Fi and Bluetooth", facts: {}, tier: "budget", form: "wifi", checked: "2026-11",
      why: "Asurion lists it at $129 as a deadbolt adapter that fits over your existing lock. Check the security grade and Matter support, which weren't listed." },
    { name: "Ultraloq U-Bolt Pro Wi-Fi", facts: {}, tier: "budget", form: "wifi", checked: "2026-11",
      why: "Asurion lists it at $149 as a deadbolt replacement, and another roundup lists an 8-in-1 entry model. Check the security grade and the exact price." },
    { name: "Level Bolt", facts: {}, tier: "budget", form: "hub", checked: "2026-11",
      why: "One roundup lists it at $199, needing a Matter-over-Thread hub or a $79 Wi-Fi bridge, with no security grade stated." },
    { name: "Aqara U100", facts: { homekey: true }, tier: "mid", form: "hub", checked: "2026-11",
      why: "One roundup lists $190 and another $219, with Home Key, Matter and a fingerprint reader. It needs an Apple Home hub for remote access. The price tier is our estimate." },
    { name: "Aqara U200", facts: { homekey: true }, tier: "mid", form: "hub", checked: "2026-11",
      why: "One roundup lists it at $229 with a fingerprint reader, keypad, USB-C charging and Matter over Thread. Check the hub needs." },
    { name: "Yale Assure Lock 2", facts: { grade1: true }, tier: "mid", form: "wifi", checked: "2026-11",
      why: "Roundups list $188 to $279, with swappable Wi-Fi, Bluetooth or Thread modules and an ANSI Grade 1 rating. One reviewer saw about four months of battery with the Wi-Fi module. The price tier is our estimate." },
    { name: "August Wi-Fi Smart Lock (4th gen)", facts: { homekey: false }, tier: "mid", form: "wifi", checked: "2026-11",
      why: "Roundups list $193 to $279 for a retrofit lock that fits over your deadbolt. One reviewer says it has no Home Key. Check Matter support before buying." },
    { name: "Level Lock", facts: { homekey: true, grade1: true }, tier: "mid", form: "hub", checked: "2026-11",
      why: "One roundup lists it at $249 with ANSI Grade 1, BHMA AAA, and Apple Home Key. It needs a Thread hub or a $79 bridge for remote access." },
    { name: "Schlage Encode Plus", facts: { homekey: true, grade1: true }, tier: "upper", form: "wifi", checked: "2026-11",
      why: "Listings range from $279 to $329, with built-in Wi-Fi, Apple Home Key and Matter over Wi-Fi by update. A roundup lists it as BHMA Grade 1. Check the live price." }
  ]
};
