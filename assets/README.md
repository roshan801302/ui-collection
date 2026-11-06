# Shared Assets

This folder contains shared/global assets used by the UI collection.

## Contents
- `css/` — shared CSS placeholders (`tailwind.min.css`, `main.css`). The shipped sample pages currently use embedded/local static styles and `assets/ui-enhance/`; Tailwind files are placeholders for optional conversion.
- `js/` — shared JS placeholders (`alpine.min.js`, `main.js`) for optional interactivity/framework adoption.
- `images/` — global placeholders (`logo-placeholder.svg`, `avatar-placeholder.png`).
- `photos/` — shared local sample images referenced by many templates. Replace or extend with project/client-approved assets.
- `ui-enhance/` — shared contrast/enhancement styles/scripts referenced by static sample pages (if present).

## Path Guidance
- From `ui-collection/<broad>/<sub>/<variant>/<page>.html`, shared assets are typically referenced as `../../../../assets/...`.
- From `ui-collection/<broad>/<sub>/index.html`, use `../../../assets/...`.
- After moving files into another project, update relative paths or use a build-time/public asset strategy.

## Production Checklist
- [ ] Replace placeholders and sample photos with licensed/final assets.
- [ ] Verify image paths, alt text, and responsive behavior.
- [ ] Remove unused placeholder dependencies (Tailwind/Alpine) or replace with real builds.
- [ ] Confirm accessibility and contrast after asset/theme changes.
