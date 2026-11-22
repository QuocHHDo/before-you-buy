// Single list of every guide. The menu, the hub page and the footer all read from here,
// so adding a category means adding one entry (plus its page and data file).
window.BYB_CATALOG = {
  groups: [
    { id: "audio", name: "Audio, video and wearables", items: [
      { id: "headphones", name: "Headphones", href: "./", blurb: "Which features are worth paying for, and which are marketing." },
      { id: "tvs", name: "TVs", href: "tv.html", blurb: "Panel type, fake motion rates, and what your smart TV reports." },
      { id: "smartwatches", name: "Smartwatches and fitness trackers", short: "Smartwatches", href: "smartwatch.html", blurb: "Whether it works with your phone, and what you pay for monthly." }
    ]},
    { id: "computer", name: "Computer and power", items: [
      { id: "keyboards", name: "Keyboards", href: "keyboard.html", blurb: "Switch type, noise, and what wireless really costs." },
      { id: "mice", name: "Mice", href: "mouse.html", blurb: "Hand size and comfort before sensor specs." },
      { id: "laptops", name: "Laptops", href: "laptop.html", blurb: "RAM you can't add later, battery claims, and rising prices." },
      { id: "ssds", name: "SSDs", href: "ssd.html", blurb: "Peak speeds, fake drives, and why prices have jumped." },
      { id: "chargers", name: "Power banks", href: "charger.html", blurb: "Real capacity, real output, and what you can fly with." }
    ]},
    { id: "home", name: "Home and health", items: [
      { id: "toothbrushes", name: "Electric toothbrushes", short: "Toothbrushes", href: "toothbrush.html", blurb: "What the brush heads cost over the years." },
      { id: "air-purifiers", name: "Air purifiers", href: "air-purifier.html", blurb: "Room size, filter costs, and designs that make ozone." },
      { id: "doorbells", name: "Video doorbells", href: "video-doorbell.html", blurb: "Monthly fees, local storage, and what you can see." },
      { id: "robot-vacuums", name: "Robot vacuums", href: "robot-vacuum.html", blurb: "Mapping, mopping, and who runs the app." }
    ]}
  ]
};
