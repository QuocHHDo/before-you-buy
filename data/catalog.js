// Single list of every guide. The menu, the hub page and the footer all read from here,
// so adding a category means adding one entry (plus its page and data file).
window.BYB_CATALOG = {
  groups: [
    { id: "audio", name: "Audio, video and wearables", items: [
      { id: "headphones", name: "Headphones", href: "./", blurb: "Which features are worth paying for, and which are marketing." },
      { id: "tvs", name: "TVs", href: "tv.html", blurb: "Panel type, fake motion rates, and what your smart TV reports." },
      { id: "cameras", name: "Cameras", href: "camera.html", blurb: "Lenses cost more than the body, and prices are rising." },
      { id: "speakers", name: "Speakers and soundbars", short: "Speakers", href: "speaker.html", blurb: "Waterproof ratings, HDMI eARC, and what Atmos really costs." },
      { id: "smartwatches", name: "Smartwatches and fitness trackers", short: "Smartwatches", href: "smartwatch.html", blurb: "Whether it works with your phone, and what you pay for monthly." },
      { id: "smart-rings", name: "Smart rings", short: "Rings", href: "smart-ring.html", blurb: "Membership fees, battery claims, and getting the size right." },
      { id: "microphones", name: "Microphones", href: "microphone.html", blurb: "Dynamic or condenser, USB or XLR, and what your room does to it." }
    ]},
    { id: "computer", name: "Computer and power", items: [
      { id: "tablets", name: "Tablets and e-readers", short: "Tablets", href: "tablet.html", blurb: "Years of updates, price rises, and store lock-in." },
      { id: "phones", name: "Phones", href: "phone.html", blurb: "Years of updates, base storage, and rising prices." },
      { id: "monitors", name: "Monitors", href: "monitor.html", blurb: "HDR400, response-time claims, and OLED burn-in warranties." },
      { id: "keyboards", name: "Keyboards", href: "keyboard.html", blurb: "Switch type, noise, and what wireless really costs." },
      { id: "mice", name: "Mice", href: "mouse.html", blurb: "Hand size and comfort before sensor specs." },
      { id: "laptops", name: "Laptops", href: "laptop.html", blurb: "RAM you can't add later, battery claims, and rising prices." },
      { id: "ssds", name: "SSDs", href: "ssd.html", blurb: "Peak speeds, fake drives, and why prices have jumped." },
      { id: "chargers", name: "Power banks", href: "charger.html", blurb: "Real capacity, real output, and what you can fly with." },
      { id: "graphics-cards", name: "Graphics cards", short: "GPUs", href: "graphics-card.html", blurb: "8 GB or 16 GB, street prices, and whether your power supply copes." }
    ]},
    { id: "home", name: "Home", items: [
      { id: "air-purifiers", name: "Air purifiers", href: "air-purifier.html", blurb: "Room size, filter costs, and designs that make ozone." },
      { id: "vacuums", name: "Vacuum cleaners", short: "Vacuums", href: "vacuum.html", blurb: "Real run time, battery swaps, and filter costs." },
      { id: "robot-vacuums", name: "Robot vacuums", href: "robot-vacuum.html", blurb: "Mapping, mopping, and who runs the app." },
      { id: "water-filters", name: "Water filters", short: "Filters", href: "water-filter.html", blurb: "What NSF numbers cover, and what refills cost." },
      { id: "laundry", name: "Washers and dryers", short: "Laundry", href: "laundry.html", blurb: "Front or top load, heat pump dryers, and real capacity." },
      { id: "refrigerators", name: "Refrigerators", short: "Fridges", href: "refrigerator.html", blurb: "Ice maker repairs, French-door reliability, and counter-depth storage." },
      { id: "dishwashers", name: "Dishwashers", href: "dishwasher.html", blurb: "Real noise, tub myths, and drying." },
      { id: "doorbells", name: "Video doorbells", href: "video-doorbell.html", blurb: "Monthly fees, local storage, and what you can see." },
      { id: "security-cameras", name: "Security cameras", short: "Cameras", href: "security-camera.html", blurb: "Subscriptions, local storage, and battery or solar." }
    ]},
    { id: "life", name: "Car, sleep and care", items: [
      { id: "dashcams", name: "Dash cams", href: "dashcam.html", blurb: "Parking mode, memory cards, heat, and cloud fees." },
      { id: "tires", name: "Car tires", short: "Tires", href: "tire.html", blurb: "Date codes, the winter snowflake, and install fees." },
      { id: "mattresses", name: "Mattresses", href: "mattress.html", blurb: "Trial rules, fake list prices, and warranty fine print." },
      { id: "toothbrushes", name: "Electric toothbrushes", short: "Toothbrushes", href: "toothbrush.html", blurb: "What the brush heads cost over the years." }
    ]}
  ]
};
