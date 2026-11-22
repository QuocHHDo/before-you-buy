# Before You Buy

The questions you didn't know to ask before buying electronics. Twelve guides: headphones, TVs, smartwatches, keyboards, mice, laptops, SSDs, power banks, electric toothbrushes, air purifiers, video doorbells and robot vacuums.

Beyond the questions: compare any two picks side by side, search every guide's traps, questions and picks from the hub, and picks whose price check is over 90 days old show a "Price may have changed" badge.

A static site with no build step: plain HTML, CSS and JS. Answers are saved in your browser (localStorage).

## Structure

```
guides.html           hub page listing every guide, grouped by theme
index.html            headphones page (kept at the root so old shared links work)
smartwatch.html, keyboard.html, mouse.html, charger.html,
toothbrush.html, air-purifier.html, robot-vacuum.html, tv.html, ssd.html, video-doorbell.html, laptop.html
                      one page per guide (same shell, different data file)
nav.js                "All guides" menu, footer links and the hub list; reads data/catalog.js
styles.css            all styling (light + dark mode)
logic.js              pure recommendation + must-have matching (no DOM, unit tested)
app.js                rendering (category-agnostic)
tests/*.test.js       example-buyer tests, one per guide: node tests/rules.test.js (headphones), toothbrush, keyboard, mouse, charger, smartwatch, air-purifier, robot-vacuum, tv, ssd, video-doorbell, laptop
                      plus search.test.js, which fails if data/search-index.js is out of date
search.js             site search on the hub page (reads data/search-index.js)
data/search-index.js  generated; rebuild with: node tools/build-search-index.js
tools/build-search-index.js  builds the search index from every data file
data/headphones.js    all headphone content: questions, tiers, brand table, traps, picks
data/toothbrushes.js  same shape for toothbrushes
data/keyboards.js     same shape for keyboards
data/mice.js          same shape for mice
data/smartwatches.js, chargers.js, air-purifiers.js, robot-vacuums.js, tvs.js, ssds.js, video-doorbells.js, laptops.js
                      same shape for the other guides
data/catalog.js       the list of guides and their themes (menu, hub and footer read this)
```

To change the content, edit `data/headphones.js`. Each category declares `needDefs` (what a "must have" checks) and each pick can carry `facts` (e.g. `anc`, `ipx`, `multipoint`, `pressure`, `ada`); leave a fact out when unconfirmed and the site shows "?" instead of guessing. You shouldn't need to touch `app.js`.

## Run locally

Just open `index.html` in a browser. It works over `file://` because the data is loaded with a `<script>` tag, not `fetch`.

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial headphones page"
git branch -M main
git remote add origin https://github.com/<your-username>/before-you-buy.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save.**

After a minute or so it's live at `https://<your-username>.github.io/before-you-buy/`.

## How the recommendation works

Each answer option in `data/headphones.js` can set:

- `tier`: a minimum price tier. The result uses the highest one across all answers.
- `form`: votes for a form factor (earbuds, over-ear, wired IEM...). The most votes wins.
- `must` / `skip`: lines added to the "Must have" and "You can skip" lists.
- `note`: shown under the question and in "Worth knowing".
- `budgetCap` (budget question only): the highest tier the person will pay for. If their needs point higher, the result drops to the cap and lists what they give up.

The result panel also explains **why** it chose a tier, listing each answer that raised it.

## Share links

Answers are kept in the URL hash, e.g. `#budget=150&use=commute&calls=often`. "Share this result" copies that link (or opens the share sheet on phones). Opening a shared link loads those answers; if the visitor had their own saved answers, they get a button to go back to them.

## Keeping it fresh

Only `picks` and `lastChecked` go stale. Each pick shows "Listed Nov 2026" (from `picksListed`) until you verify its price; then add `checked: "YYYY-MM"` to that pick and it shows "Price checked …" instead. Review about once a year.

## Link preview & icons

`og.png` (1200×630) is the image shown when the link is shared. `favicon.svg`, `favicon-32.png` and `apple-touch-icon.png` are the site icons. The `og:url` / `og:image` tags in `index.html` use the absolute GitHub Pages URL. Update them if you move to a custom domain.

## Add a category

1. Copy `data/headphones.js` to `data/<name>.js` and fill in forms, tiers, questions, `needDefs`, brand table, traps and picks.
2. Copy any category page (for example `keyboard.html`) to `<name>.html`, point it at the new data file, and update the title and meta tags. The nav comes from `nav.js`.
3. Add the guide to `data/catalog.js` (pick a theme group, or add one). The menu, hub page and footer update on their own.
4. Add an `og-<name>.png` and a `tests/<name>.test.js`.

## After changing any guide data

Run `node tools/build-search-index.js`, then every `tests/*.test.js`. When you verify a pick's price, set its `checked: "YYYY-MM"`; the badge appears once that date is over 90 days old.
