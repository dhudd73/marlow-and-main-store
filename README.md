# Marlow & Main — static site

Plain HTML/CSS/JS implementation of the approved Marlow & Main design
(disclosure strip, "Chosen well, for living well" hero, Home/Pet/Beauty
aisles, "How We Choose" trust rules, review template, Suggestion Box,
founder strip "From Hot Springs, Arkansas"). No build step, no backend,
no external images — upload the whole folder to Cloudflare Pages as-is.

## Structure

| File | What it is |
|---|---|
| `index.html` | Home: hero, three aisles, filterable sample picks, email capture, founder strip |
| `home-aisle.html` | Home aisle sample picks |
| `pet-aisle.html` | Pet aisle + **Pet Vitamins & Supplements** shelf (Daily Multivitamins / Joint Support / Skin & Coat / Calming; supports-only wording, "Talk to your vet first," no disease/cure claims; no human nutrition anywhere) |
| `beauty-aisle.html` | Beauty aisle sample picks |
| `how-we-choose.html` | The six trust rules |
| `review-template.html` | Review structure: disclosure → verdict box → Best for → How we tested → pros/cons → who should skip → FAQ → update log (all content honestly labeled placeholder) |
| `suggest.html` | Suggestion Box: sample form + "Most requested right now" board + the rule that repeat requests move a product to the front of the review line |
| `styles.css` | Single shared stylesheet (warm paper #FAF7F1 / deep green #2F5233 / clay #C08A5A; Newsreader + Karla via Google Fonts with system fallbacks) |
| `app.js` | Pick filtering only — progressive enhancement; site works fully with JS off |
| `assets/` | Original store images only (copied from `store-design-assets/`): hero street scene (chosen main photo), nature hero, home/pet/beauty aisle images, profile photo |
| `robots.txt`, `sitemap.xml` | For https://shopmarlowandmain.com/ |

Every page carries the affiliate disclosure strip at the top. All picks are
labeled "Sample pick — review in progress"; there are no invented prices,
ratings, or test results anywhere.

## The three integration points (marked `INTEGRATION POINT` in the HTML)

1. **Kit email form** — `index.html`, "Small Kitchen Reset" checklist form.
   Currently a disabled placeholder. Paste the Kit embed/form action,
   remove `disabled`, and the free checklist offer goes live.
2. **Formspree/Web3Forms suggestion form** — `suggest.html`.
   Disabled placeholder with fields already named (`name`, `email`,
   `aisle`, `product_or_problem`, `why_it_matters`). Point the form
   `action` at the Formspree/Web3Forms endpoint and remove `disabled`.
3. **Real affiliate links** — every "Check price (coming soon)" button
   (in `index.html`, the three aisle pages, and `review-template.html`).
   Each is a disabled placeholder with an HTML comment. Replace with the
   merchant's real affiliate link only after that program has approved
   the store and the full review is published. Never add a fake price
   and never label it "Buy now."

Also marked in the footer comment: `hello@shopmarlowandmain.com` is shown
as the contact address, but **domain email forwarding is not yet
configured** — set it up (Cloudflare/Porkbun) before relying on it.
