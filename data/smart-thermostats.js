// Category content for the smart thermostat page. Same shape as the other guides.
// Prices were re-checked against maker and retailer pages in November 2026.
window.SITE_DATA = {
  category: "smart-thermostats",
  title: "Before you buy a smart thermostat",
  tagline: "The questions you didn't know to ask.",
  lastChecked: "November 2026",
  shareTitle: "My smart thermostat result: Before You Buy",
  defaultForm: "basic",

  forms: {
    "basic": "Basic smart (schedule and app, lower price)",
    "full": "Full-featured (room sensors, learning, system monitoring)"
  },

  needDefs: {
    nocwire: { label: "Works without a C-wire (in most homes)", fact: "nocwire", is: true },
    sensor: { label: "A room sensor in the box", fact: "sensor", is: true }
  },

  tiers: [
    {
      id: "budget",
      value: 0.8,
      name: "Budget",
      range: "Under $120",
      adds: "Scheduling, an app and remote control. One roundup lists the Amazon Smart Thermostat at about $79.99, and Consumer Reports lists the Wyze at about $75 and the Google Nest Thermostat at $100.",
      missing: "Room sensors and learning. Cheaper models often need a C-wire, as the Amazon model does.",
      bestFor: "A simple home with a standard furnace and AC.",
      badge: "Best value"
    },
    {
      id: "mid",
      value: 0.92,
      name: "Mid",
      range: "$120–200",
      adds: "Room sensors and sharper control. A roundup says the Honeywell T9 supports smart room sensors with a 200 foot range, and ecobee's Enhanced model lists at $199.99 on retailer pages.",
      missing: "Included sensors on some models. Sensors are sold separately for the Honeywell T9, per This Old House.",
      bestFor: "Homes with hot and cold rooms."
    },
    {
      id: "upper",
      value: 0.97,
      name: "Upper",
      range: "$200+",
      adds: "Learning, included sensors and system health monitoring. This Old House says the Nest Learning Thermostat comes with a room sensor and a System Health Monitor. Google lists it at $279.99, and ecobee lists its Premium at $259.99.",
      missing: "Proof that it saves more. Savings figures like up to 31 percent come from the makers, Google and ecobee.",
      bestFor: "Buyers who want the most automation and are happy to pay for it.",
      badge: "Paying for polish"
    }
  ],

  questions: [
    {
      id: "budget",
      short: "Budget",
      ask: "What's the most you want to spend?",
      why: "Roundups rarely agree on prices. Journeyman says utilities often offer instant rebates or mail-in credits for Energy Star smart thermostats, so check your utility's site or the maker's rebate finder before buying. The rebate can change which model is cheapest.",
      options: [
        { id: "120", label: "Under $120", budgetCap: "budget",
          note: "Sets your ceiling at budget tier." },
        { id: "200", label: "Up to about $200", budgetCap: "mid",
          note: "Sets your ceiling at mid tier." },
        { id: "any", label: "No hard limit",
          note: "No ceiling. Your other answers decide the tier." }
      ]
    },
    {
      id: "wiring",
      short: "Wiring",
      ask: "Does your old thermostat have a C-wire?",
      why: "AC Direct says most modern smart thermostats need a C-wire for continuous 24-volt power, and without one you need an adapter or a new wire. It suggests photographing the wire terminals on your old thermostat, since that answers most compatibility questions.",
      options: [
        { id: "yes", label: "Yes, there's a C-wire",
          note: "Most models will work. The Amazon Smart Thermostat and ecobee Premium need one." },
        { id: "no", label: "No, or I'm not sure", needs: ["nocwire"], tier: "mid",
          must: ["A model that works without a C-wire, or an adapter or power kit"],
          note: "Google says the Nest works without a C-wire in most cases, but heat-only, cooling-only and heat pump systems may need one, per SlashGear. One Reviewed tester couldn't get a model working properly without it." },
        { id: "photo", label: "I'll check the wires first",
          note: "Take a photo of the terminals before you shop, as AC Direct suggests, and use the maker's online compatibility checker." }
      ]
    },
    {
      id: "system",
      short: "System",
      ask: "What kind of heating and cooling do you have?",
      why: "Consumer Reports says not all smart thermostats support all HVAC types. For example, the Nest Thermostat doesn't support ventilation systems, while the Nest Learning Thermostat does. Coruzant says multi-stage, heat pump, baseboard and radiant systems are more challenging than most forced-air systems.",
      options: [
        { id: "simple", label: "A standard furnace and central AC",
          note: "Most models work. Check the compatibility tool anyway." },
        { id: "heatpump", label: "A heat pump, dual fuel or zoned system", form: { "full": 2 },
          must: ["A model confirmed for your heat pump, aux heat and zones"],
          note: "AC Direct says heat pumps need an O or B terminal for the reversing valve and staging for auxiliary heat. Jaspector says communicating systems and heat pumps cause the most common and expensive mistakes, so call a pro if unsure." },
        { id: "other", label: "Baseboard, radiant or mini-split",
          note: "Coruzant says these are harder cases. CR's list includes models for mini-splits, heat pumps and window ACs, so check those." }
      ]
    },
    {
      id: "rooms",
      short: "Rooms",
      ask: "Are some rooms hotter or colder than the rest?",
      why: "A thermostat reads the temperature where it hangs. Room sensors let some models balance other rooms. The Nest Learning Thermostat includes a sensor, according to This Old House, while sensors are sold separately for the Honeywell T9 and Sensi Touch.",
      options: [
        { id: "uneven", label: "Yes, some rooms are uncomfortable", needs: ["sensor"], form: { "full": 4 },
          note: "Check how many sensors come in the box. Extra sensors add cost." },
        { id: "even", label: "No, the house is even", form: { "basic": 3 },
          note: "A basic thermostat is enough, and you avoid paying for sensors you won't use." },
        { id: "learn", label: "I want it to learn my schedule", form: { "full": 3 },
          note: "A roundup lists the Nest Learning Thermostat as learning with auto-schedule. Learning doesn't guarantee big savings." }
      ]
    },
    {
      id: "eco",
      short: "Assistant",
      ask: "Which voice assistant or smart home do you use?",
      why: "Most smart thermostats work with Alexa and Google Assistant, says one guide, while Apple HomeKit support is less common. The Amazon Smart Thermostat is Alexa-first, per one roundup, and Reviewed lists HomeKit on the ecobee Premium.",
      options: [
        { id: "google", label: "Google Home",
          note: "Tom's Guide calls the Nest Learning Thermostat (4th gen) easily the best in Google's ecosystem." },
        { id: "alexa", label: "Alexa",
          note: "The Amazon Smart Thermostat is Alexa-first and uses Honeywell internals, per one roundup." },
        { id: "apple", label: "Apple Home",
          note: "Reviewed lists HomeKit on the ecobee Premium. Check the maker's page for the model you want." }
      ]
    }
  ],

  brandHeading: "Brands compared",
  brandColumns: ["Google Nest", "ecobee", "Honeywell, Sensi and Amazon"],
  brandRows: [
    { label: "Examples", cells: ["Nest Learning Thermostat (4th gen), Nest Thermostat", "ecobee Smart Thermostat Enhanced and Premium", "Honeywell Home T9 and X8S, Sensi ST55, Amazon Smart Thermostat"] },
    { label: "What stands out", cells: ["Tom's Guide calls the Nest Learning easily the best in Google's ecosystem, and This Old House notes it includes a sensor", "A roundup lists radar occupancy sensing on the Enhanced model, which works with SmartSensor", "Reviewed names the Honeywell X2S its best value and the X8S best for whole-home control. One roundup says Amazon's model uses Honeywell internals"] },
    { label: "Watch out for", cells: ["Google says heat pump and some heat-only or cooling-only systems may need a C-wire or power accessory", "Reviewed says the ecobee Premium needs a C-wire but may work with a power extender", "The Amazon Smart Thermostat needs a C-wire, per one roundup. Sensors are sold separately for the T9"] }
  ],
  brandVerdict: "Check your wiring and heating system before the brand. The best thermostat for your friend's house may not work with yours.",

  traps: [
    { claim: "\"Saves up to 31 percent\"", reality: "One roundup says the up to 31 percent figure comes from manufacturer data from Google and ecobee. Another lists 23 percent for ecobee, so savings depend on your home and habits." },
    { claim: "\"No C-wire needed\"", reality: "SlashGear says Google notes the Nest works without a C-wire in most cases, but heat-only, cooling-only and heat pump systems may need hardwiring. One Reviewed tester couldn't get a model working properly without it." },
    { claim: "\"Works with any system\"", reality: "Consumer Reports says the Nest Thermostat doesn't support ventilation systems while the Nest Learning does. AC Direct says heat pumps need an O or B terminal and staging for auxiliary heat." },
    { claim: "\"The price on the box\"", reality: "Journeyman says utilities often offer instant rebates or mail-in credits for Energy Star thermostats. Jaspector adds that rebate programs can impose product and installation requirements, so read the terms first." },
    { claim: "\"Room sensors included\"", reality: "This Old House's table lists sensors as sold separately for the Honeywell T9 and Sensi Touch, but included with the Nest Learning Thermostat." },
    { claim: "\"Works with my assistant\"", reality: "One guide says most smart thermostats work with Alexa and Google Assistant, while Apple HomeKit support is less common. Check your assistant before you buy." },
    { claim: "\"A 15-minute DIY job\"", reality: "BGR lists not verifying HVAC compatibility as a mistake. Jaspector says to call a professional when the control logic isn't clear, since heat pumps and communicating systems cause the most expensive mistakes." }
  ],

  picksListed: "2026-11",
  factsNote: "C-wire and sensor checks use maker, retailer and reviewer listings, not our own testing. A ? means we haven't confirmed that spec, so check before buying. Prices come from maker and retailer pages and move with sales.",
  picksNote: "A short list of well-reviewed smart thermostats. Models and prices change, so use these to learn what to look for and verify your system's compatibility before you buy.",
  picks: [
    { name: "Amazon Smart Thermostat", facts: { nocwire: false }, tier: "budget", form: "basic", checked: "2026-11",
      why: "Mysa's roundup lists it at about $79.99, and other roundups say it uses Honeywell internals and requires a C-wire." },
    { name: "Wyze Thermostat", facts: {}, tier: "budget", form: "basic", checked: "2026-11",
      why: "Consumer Reports' buying guide lists about $75, though that text may be dated. Check the current price, wiring needs and support." },
    { name: "Google Nest Thermostat", facts: {}, tier: "budget", form: "basic", checked: "2026-11",
      why: "Consumer Reports lists $100 and says it doesn't support ventilation systems. Reviewed says one tester couldn't get a model working properly without a C-wire, so check the wiring." },
    { name: "Emerson Sensi ST55", facts: { nocwire: true }, tier: "budget", form: "basic", checked: "2026-11",
      why: "Home Depot lists $99 against a $129 list price and says no C-wire is needed for most systems. Check your wiring, since the pricier Sensi Touch models do need one." },
    { name: "Honeywell Home T9", facts: {}, tier: "mid", form: "full", checked: "2026-11",
      why: "Retailers list $169.99 to $209.99, with some versions including one room sensor and others selling sensors separately. Check which version you are buying. One roundup says a C-wire adapter is in the box." },
    { name: "ecobee Smart Thermostat Enhanced", facts: {}, tier: "mid", form: "full", checked: "2026-11",
      why: "ecobee and retailers list $199.99, with an MSRP of $189.99 on the spec sheet. A roundup lists radar occupancy sensing and SmartSensor compatibility, and ecobee says it only supports accessories connected by one wire." },
    { name: "ecobee Smart Thermostat Premium", facts: { nocwire: false, sensor: true }, tier: "upper", form: "full", checked: "2026-11",
      why: "Reviewed says it needs a C-wire but may work with a power extender, and lists HomeKit support. ecobee lists it at $259.99, often on sale for $210 to $230. It includes a SmartSensor and an air quality monitor." },
    { name: "Google Nest Learning Thermostat (4th gen)", facts: { nocwire: true, sensor: true }, tier: "upper", form: "full", checked: "2026-11",
      why: "Google lists $279.99 and often $239.99, with one Nest Temperature Sensor in the box. Roundups list no C-wire in most homes, but heat pump and other systems may still need one." },
    { name: "Honeywell Home X8S", facts: {}, tier: "upper", form: "full", checked: "2026-11",
      why: "Reviewed lists $219.99, or $249.99 with a room sensor. Best Buy says a C-wire is required. Reviewed calls it its pick for whole-home comfort control." }
  ]
};
