// Category content for the car tire page. Same shape as the other guides.
// Tire prices vary a lot by size, so tiers are per tire and approximate. Picks say to check your size and date code.
window.SITE_DATA = {
  category: "tires",
  title: "Before you buy car tires",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My tire result: Before You Buy",
  defaultForm: "allseason",

  forms: {
    "allseason": "All-season (the default, with modest snow grip)",
    "allweather": "All-weather (all-season with the winter snowflake mark)"
  },

  needDefs: {
    snowflake: { label: "The three-peak snowflake (3PMSF) mark", fact: "snowflake", is: true },
    miles60: { label: "A treadwear warranty of 60,000 miles or more", fact: "miles60", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $150",
      adds: "A tire that does the basics for less. Consumer Reports calls the Hankook Kinergy XP a smart alternative to the Michelin Defender2, with better scores in most categories for a lot less money.",
      missing: "Brand polish. Jalopnik says Consumer Reports owner satisfaction for Hankook is far below Michelin's, and size changes the price.",
      bestFor: "A commuter car where cost per year matters most.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$150–250",
      adds: "Top-tested all-season and all-weather tires. Jalopnik lists the Michelin Defender2, Consumer Reports' best all-season tire, at around $200 each.",
      missing: "The lowest price. These cost more up front, so check the treadwear warranty and your size's price.",
      bestFor: "Most drivers who keep a car for years."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$250+",
      adds: "Premium all-weather tires. SlashGear says the Michelin CrossClimate2 runs from $170 to $490 each at Discount Tire depending on size, and Walmart lists one size at $289.99.",
      missing: "Value if you rarely see snow. Consumer Reports says some all-weather tires cost more than the all-season tires they replace.",
      bestFor: "Drivers who get real winter weather and don't want to swap tires.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend per tire?",
      why: "Tire prices are rising. SlashGear says the producer price index for tires reached about 226.5 in August 2026, up 1.2% from June, so waiting isn't likely to bring a lower price. Installation is extra.",
      options: [
        { id: "150", label: "Under $150 each", budgetCap: "budget",
          note: "Sets your ceiling at budget tier. Check your exact size, since price varies widely by size." },
        { id: "250", label: "Up to about $250 each", budgetCap: "mid",
          note: "Sets your ceiling at mid tier, where the top-tested all-season tires sit." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "winter",
      short: "Winter",
      ask: "How much snow and ice do you get?",
      why: "Consumer Reports' tire program manager says all-season tires give good year-round grip with modest snow traction, and that harsh winters call for all-weather or dedicated winter tires.",
      options: [
        { id: "little", label: "Little or none", form: { "allseason": 4 },
          note: "An all-season tire fits. Michelin says above 45°F, all-season and summer tires perform within their design range." },
        { id: "some", label: "Some snow a few times a year", form: { "allweather": 4 }, needs: ["snowflake"],
          note: "Tire Rack says tires with the 3PMSF mark generally outperform standard all-seasons in snow. They still can't match a dedicated winter tire." },
        { id: "lots", label: "Real snow and ice most winters", form: { "allweather": 4 }, tier: "mid", needs: ["snowflake"],
          must: ["The three-peak snowflake mark, and think about dedicated winter tires on a second set of wheels"],
          note: "Discount Tire says winter tires remain the gold standard for prolonged snow and ice. Tire Rack says a 3PMSF all-season should not replace one where a dedicated winter tire is needed." }
      ]
    },
    {
      id: "miles",
      short: "Miles",
      ask: "How many miles do you drive a year?",
      why: "Age can end a tire's life before mileage does. KBB says automakers suggest replacing tires after six years in service, and tire makers draw the line at ten years.",
      options: [
        { id: "low", label: "Under 8,000 miles a year",
          note: "Age is your limit, not tread. Ask for a fresh date code and plan on 6 to 10 years at most." },
        { id: "avg", label: "About 13,500 miles, near the U.S. average",
          note: "Michelin cites 13,500 miles as the Department of Transportation average per driver." },
        { id: "high", label: "15,000 miles or more", needs: ["miles60"],
          must: ["A treadwear warranty of 60,000 miles or more, which is prorated and not a promise"],
          note: "AAA says treadwear warranties are prorated, so you get a credit for unused tread, and performance and winter tires generally have none." }
      ]
    },
    {
      id: "vehicle",
      short: "Vehicle",
      ask: "What are you putting them on?",
      why: "The tire type depends on the vehicle. Consumer Reports says many subcompact and compact SUVs can use regular all-season tires, midsized SUVs need at least all-season SUV tires, and full-size SUVs and pickups often need truck or all-terrain tires.",
      options: [
        { id: "car", label: "A gas car or small SUV",
          note: "Regular all-season or all-weather tires fit most of these." },
        { id: "ev", label: "An electric car",
          note: "Hankook says an EV's battery puts greater loads on tires. Consumer Reports' top-rated EV tire is the Hankook iON evo AS, which has acoustic foam inside to cut noise." },
        { id: "truck", label: "A midsized or larger SUV, or a pickup",
          note: "Look for the SUV or truck version of the tire. Consumer Reports' top pick for midsized SUVs is the all-weather Michelin CrossClimate2." }
      ]
    },
    {
      id: "install",
      short: "Fitting",
      ask: "Where will you have them fitted?",
      why: "The price on the tire isn't the price you pay. Tire Rack installer listings show mounting and balancing from about $12 to $55 per tire, plus disposal fees, valve stems and sensor service.",
      options: [
        { id: "shop", label: "At a tire shop that quotes the full price",
          note: "Ask for the out-the-door price with mounting, balancing, disposal and any shop fees included." },
        { id: "mobile", label: "A mobile installer at home",
          note: "Tire Rack installer listings show mobile minimums of $125 to $150 per visit at some shops, plus a service fee at some." },
        { id: "online", label: "Online, shipped to an installer",
          note: "Tire Discounters notes its tire price does not include tax or installation. Add the installer's per-tire fees." }
      ]
    }
  ],

  brandColumns: ["Michelin", "Hankook", "Other all-weather picks"],
  brandRows: [
    { label: "Examples", cells: ["Defender2, CrossClimate2", "Kinergy XP, iON evo AS", "Continental SecureContact AW, Pirelli Cinturato WeatherActive"] },
    { label: "Warranty", cells: ["80,000 miles on the Defender2 and 60,000 on the CrossClimate2, per Michelin and Discount Tire", "Consumer Reports lists 50,000 miles for the iON evo AS", "Check each model's listing"] },
    { label: "What stands out", cells: ["Consumer Reports names the Defender2 its best all-season tire and the CrossClimate2 its top all-weather pick for midsized SUVs", "Consumer Reports calls the Kinergy XP a smart alternative and the iON evo AS its top-rated EV tire", "TyreReviews put the SecureContact AW level with the CrossClimate2, and Car and Driver ranked the Cinturato first in a five-tire test"] },
    { label: "Watch out for", cells: ["The Defender2 isn't snowflake-rated, per Discounted Wheel Warehouse, while the CrossClimate2 is", "Jalopnik says Consumer Reports owner satisfaction for Hankook is far below Michelin's", "Consumer Reports cautions that not every all-weather tire performed well in its tests"] }
  ],
  brandVerdict: "Check the date code, the winter mark and the install fees before the brand. A fresh tire with the right winter rating beats a famous one that has sat in a warehouse for years.",

  traps: [
    { claim: "\"These are new tires\"", reality: "KBB says to find the four-digit DOT date code on the sidewall, week then year. Checkbook says to skip a tire more than a year old, and AAA says makers recommend replacement every 6 to 10 years." },
    { claim: "\"The mileage warranty is how far they'll go\"", reality: "AAA says treadwear warranties are prorated, you get a credit for unused tread, and performance and winter tires generally have none. Consumer Reports weighs braking, hydroplaning and handling most in its all-season scores." },
    { claim: "\"All-season means all winter\"", reality: "Consumer Reports' tire program manager says all-season tires give only modest snow traction. Tire Rack says 3PMSF all-weather tires outperform standard all-seasons but still can't match dedicated winter tires." },
    { claim: "\"The price on the tire is the price\"", reality: "Tire Rack installer listings show mounting and balancing from about $12 to $55 per tire, disposal fees of about $3 to $10, and extra charges for valve stems and sensors. Tire Discounters says its tire price excludes tax and installation." },
    { claim: "\"Prices will drop later\"", reality: "SlashGear says the tire producer price index rose about 1.2% from June to August 2026, and Modern Tire Dealer expects retail prices to trend modestly higher through the rest of 2026." },
    { claim: "\"I only need to replace the worn one\"", reality: "Nationwide says performance is best when all four tires match in size, tread pattern and age. Sunbit says never to mix types, brands or tread patterns on the same axle." },
    { claim: "\"EV tires are just regular tires\"", reality: "Tires Easy says EV tires wear faster than tires on gas cars and cost more per tire because fewer are made. Hankook says an EV's battery weight puts greater loads on its tires." }
  ],

  picksListed: "2026-11",
  factsNote: "Must-have checks use reviewer and maker listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying. Tire price depends on your size, so confirm it and the date code at checkout.",
  picksNote: "A short list of well-reviewed tires. Sizes and prices vary, so use these to learn what to look for and verify fit, the current price and the install fees.",
  picks: [
    { name: "Hankook Kinergy XP", facts: {}, tier: "budget", form: "allseason", checked: "2026-11",
      why: "Consumer Reports' smart alternative to the Defender2, with better scores in most categories for a lot less money. Check the price for your size." },
    { name: "Michelin Defender2", facts: { snowflake: false, miles60: true }, tier: "mid", form: "allseason", checked: "2026-11",
      why: "Consumer Reports' best all-season tire, at around $200 each per Jalopnik, with an 80,000-mile warranty. Check the price for your size." },
    { name: "Hankook iON evo AS", facts: { miles60: false }, tier: "mid", form: "allseason", checked: "2026-11",
      why: "Consumer Reports' top-rated EV tire, with acoustic foam inside and a 50,000-mile warranty. Check the price for your size and whether you need the SUV version." },
    { name: "Michelin CrossClimate2", facts: { snowflake: true, miles60: true }, tier: "upper", form: "allweather", checked: "2026-11",
      why: "Consumer Reports' top pick for midsized SUVs among all-weather tires, with a 60,000-mile warranty. Prices run $170 to $490 by size per SlashGear, so check yours." },
    { name: "Continental SecureContact AW", facts: { snowflake: true }, tier: "mid", form: "allweather", checked: "2026-11",
      why: "TyreReviews named it joint first in an all-weather test with the CrossClimate2. Check the price for your size and its warranty." },
    { name: "Pirelli Cinturato WeatherActive", facts: { snowflake: true }, tier: "mid", form: "allweather", checked: "2026-11",
      why: "Car and Driver's winner in a five-tire all-weather test, with the shortest wet braking at 148.5 feet. Check the price for your size and its warranty." }
  ]
};
