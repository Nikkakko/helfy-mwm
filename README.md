# Helfy marketing web assignment

## Project status

This repository contains the first mobile-first implementation pass for the Helfy marketing web assignment. The page is being built step-by-step from the Figma file.

## Included files

- `index.html` — page structure and first Figma pattern
- `styles.css` — responsive palette and component styles
- `script.js` — starter interaction logic
- `assets/hero_desktop.png` — exported desktop hero subject
- `assets/hero_mobile.png` — exported mobile hero subject
- `assets/card_1.png` — exported consultation-card artwork
- `assets/card_2.png` and `assets/card_3.png` — additional exported card artwork
- `assets/logo-header/Main/Vector.png` — exported Doktorabc logo mark
- `README.md` — setup and project notes

The private working brief is stored in `TECH_TASK.md`. It is intentionally ignored by Git.

## Run locally

No dependencies or build tools are required.

You can open `index.html` directly in a browser, or use VS Code with the Live Server extension.

If Python is available, a local server can also be started with:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Planned implementation

The final page will use only HTML, CSS, and vanilla JavaScript and will include:

- Hero section with the exact ID `real_helfy_hero_section`
- Benefits
- Trust elements
- CTA
- Testimonials
- How it works
- Footer

The page will be checked at 1920px, 1280px, 390px, and intermediate widths. Figma interactions will be added only after the source design is available.

## Current unfinished work

- Remaining Figma design sections
- Required landing-page sections
- Remaining images, icons, fonts, and other brand assets
- Full responsive layouts
- Prototype interactions
- Backend or form submission integration

## Implemented so far

- Mobile-first dark “Why Us?” benefits rail based on the supplied screenshots.
- Swipeable horizontal feature items on small screens.
- Compact desktop presentation at widths of 900px and above.
- The required hero ID `real_helfy_hero_section` will be added with the next implementation step.
- Figma color tokens added as semantic CSS variables.
- Shared border color added as `--border-default: #BEBEBE`.
