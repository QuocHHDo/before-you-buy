# Before You Buy

The questions you didn't know to ask before buying electronics. Starting with headphones.

A static site with no build step: plain HTML, CSS and JS. Answers are saved in your browser (localStorage).

## Structure

```
index.html            page shell
styles.css            all styling (light + dark mode)
app.js                rendering + recommendation logic (category-agnostic)
data/headphones.js    all headphone content: questions, tiers, brand table, traps, picks
```

To change the content, edit `data/headphones.js`. You shouldn't need to touch `app.js`.

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

## Adding a category later

1. Copy `data/headphones.js` to `data/keyboards.js` and rewrite the content.
2. Copy `index.html` to `keyboards.html` and change the data `<script>` tag.
3. Update the nav links.

(At 3+ categories, it's worth moving to Astro so one template generates every page.)

## Keeping it fresh

Only `picks` and `lastChecked` go stale. Review them about once a year.
