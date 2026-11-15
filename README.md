# Gigi's Prompt Journal (PDC10)

A flipbook portfolio for PDC10: Conversational AI and Prompt Engineering.

## Edit your content
Open `js/data.js` and replace every text in `[square brackets]`.
- Screenshots: save them in `assets/` as `.webp` (about 300 KB each), then add them to a chapter's `evidence`, for example
  `{ img: "assets/ch1-1.webp", caption: "Comparison table" }`
- Prompt parts in `revised` use these tags: role, audience, task, context, format, constraint, example.
- Add credential links in `profile.certs` → `url`.

## Preview
Open the folder in VS Code → right-click `index.html` → **Open with Live Server**.

## Deploy
Push to GitHub, then import the repository in Vercel (Framework Preset: Other, no build command).

## Files
- `index.html` – page shell
- `css/style.css` – notebook look
- `js/data.js` – all your content (filled from your compiled lab answers)
- `js/app.js` – builds the pages (no need to edit)
- `js/page-flip.browser.js` – StPageFlip 2.0.7 (MIT), the page-turn library
