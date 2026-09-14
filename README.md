# Helfy marketing web assignment

## Project status

This repository contains the completed mobile-first implementation of the Helfy marketing web assignment, built from the supplied Figma file.

## Included files

- `index.html` — page structure and Figma-based sections
- `styles.css` — responsive palette and component styles
- `script.js` — vanilla JavaScript interaction logic
- `assets/hero_desktop.png` — exported desktop hero subject
- `assets/hero_mobile.png` — exported mobile hero subject
- `assets/card_1.png` — exported consultation-card artwork
- `assets/card_2.png` and `assets/card_3.png` — additional exported card artwork
- `assets/logo-header/Main/Vector.png` — exported Doktorabc logo mark
- `assets/trusted.png` — Trusted Shops protection badge
- `assets/check_icon.png` — benefit-list check icon
- `assets/benefits/` — separate SVG assets for the JavaScript-rendered “Why Us?” rail
- `assets/fb_svg.svg`, `assets/in_svg.svg`, `assets/yt_svg.svg`, `assets/x_svg.svg`, `assets/insta_svg.svg` — exported social icons
- `assets/footer/` — exported footer certification and payment badges
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

## Implemented functionality

The page uses only HTML, CSS, and vanilla JavaScript and includes:

- Hero section with the exact ID `real_helfy_hero_section`
- JavaScript-rendered “Why Us?” benefits rail
- Trust elements
- CTA
- Responsive testimonials carousel with pagination and navigation controls
- Responsive how-it-works cards with Figma artwork and background line treatment
- Responsive footer with JavaScript-rendered social icons and badges
- Sticky header with scroll blur treatment
- Smooth section scrolling
- Mobile hero CTA overlay with viewport-based slide/fade animation

## Responsive coverage

The layout has been refined for mobile, tablet, 1024px, 1280px, 1440px, and large desktop widths. No build step or dependency installation is required.

Backend or form submission integration is outside the scope of this assignment.
