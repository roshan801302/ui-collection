# UI Collection

A structured library of static, responsive UI demos for customer and admin experiences across multiple business categories. Use it to explore layouts, compare design directions, and quickly prototype front-end ideas without a backend.

[View live demo](https://roshan801302.github.io/ui-collection/) · [Browse the source](https://github.com/theomatrix/ui-collection/tree/check)

## Why this repo matters

- 13 broad categories and 59 sub-categories
- 10 UI/UX variants for each sub-category
- 590 paired customer/admin demos
- 1,180 static HTML sample pages in total
- Built with plain HTML, CSS, and JavaScript

This repository is a collection of UI starter screens and preview pages for rapid concept validation, client pitching, and front-end exploration. The content is intentionally sample-only and does not include production data, authentication, or a live backend.

## Live preview

Open the hosted gallery here:

- https://roshan801302.github.io/ui-collection/

You can also run it locally with a simple web server:

```bash
git clone https://github.com/theomatrix/ui-collection.git
cd ui-collection
python3 -m http.server 8000
```

Then open http://localhost:8000/ in your browser.

## What’s included

- `index.html` — central gallery and demo launcher
- category folders — grouped sample sets by industry
- reusable/shared assets in `assets/`
- variant-based customer/admin pages for each layout direction

## Design variants

Each sub-category includes multiple UX directions such as:

- Main
- Classic
- Modern
- Minimal
- Premium
- Compact
- Mobile First
- Express
- Service Plus
- Booking

These are intended as exploration variants, not final production designs.

## Project structure

```text
ui-collection/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── photos/
│   └── ui-enhance/
├── automobile-repair/
├── business-workspace/
├── creative-services/
├── education-coaching/
├── events-hospitality/
├── food-restaurant/
├── health-fitness/
├── local-community/
├── pet-care/
├── professional-services/
├── property-construction/
├── retail-shopping/
├── travel-tourism/
└── ...
```

## Notes

- This is a static showcase, not a backend-powered application.
- Demo pages use placeholder content and sample images.
- Replace dummy text, colors, and assets before using any page in a real project.
- `assets/css/` is a shared CSS starting point; keep browser-safe defaults there and avoid relying on incomplete placeholder rules.

## Contributing

This repo is best used for UI inspiration and design iteration. If you improve layouts, accessibility, or project documentation, keep examples static, readable, and easy to explore.
