# UI Template Collection

A structured catalog of static, responsive **Customer + Admin UI pairs** for rapid prototyping, demos, sales previews, and frontend handoff. The collection is organized by broad business category, then sub-category, then 10 UI/UX variants.

## Quick Facts
| Item | Value |
|---|---|
| Broad categories | 13 |
| Business sub-categories | 59 |
| Variants per sub-category | 10 |
| Pages per variant | 2 (`customer.html`, `admin.html`) |
| Total UI pairs | 590 |
| Total HTML sample pages | 1,180 |
| Data | Dummy/placeholder only (no real PII/business data) |
| Backend | None — static UI samples |
| Stack | Vanilla HTML/CSS/JS (static). Global `assets/css|js` contains placeholders for optional Tailwind/Alpine adoption. |

## Directory Structure
```text
ui-collection/
├── README.md                            # This file
├── index.html                           # Central interactive launcher/preview hub
├── CLIENT_UI_UX_QUESTIONNAIRE.md        # Client discovery questions for UI/UX builds
├── UX_MODEL_MAPPING.md                  # Variant-to-UX-framework mapping
├── SAMPLE_CATEGORIES.md                 # Broad category summary
├── UI_SAMPLES_LIST.md                   # Full list of categories and variant links
├── samples-gallery.html                 # Legacy/gallery view (copied)
├── gallery-admin.html                   # Gallery admin view (copied)
├── gallery-panel.html                   # Gallery panel view (copied)
├── assets/
│   ├── css/
│   │   ├── tailwind.min.css             # Placeholder
│   │   └── main.css                     # Shared overrides placeholder
│   ├── js/
│   │   ├── alpine.min.js                # Placeholder
│   │   └── main.js                      # Shared JS placeholder
│   ├── images/
│   │   ├── logo-placeholder.svg
│   │   └── avatar-placeholder.png
│   ├── photos/                          # Shared local sample photos used by templates
│   └── ui-enhance/                      # Shared contrast/enhancement CSS+JS used by templates
│
└── <broad-category>/
    └── <sub-category>/
        ├── README.md                    # Detailed category guide
        ├── index.html                   # Category variant table/links
        ├── main|classic|modern|minimal|premium|compact|mobile-first|express|service-plus|booking/
        │   ├── customer.html            # Customer-facing sample
        │   ├── admin.html               # Admin/operations sample
        │   └── assets/                  # Variant-specific assets (empty by default)
        └── ...
```

## Broad Categories
| Folder | Label | Sub-categories |
|---|---|---:|
| `automobile-repair` | Automobile Repair | 1 |
| `business-workspace` | Business & Workspace | 1 |
| `creative-services` | Creative Services | 1 |
| `education-coaching` | Education & Coaching | 1 |
| `events-hospitality` | Events & Hospitality | 2 |
| `food-restaurant` | Food & Restaurant | 18 |
| `health-fitness` | Health & Fitness | 3 |
| `local-community` | Local & Community Services | 26 |
| `pet-care` | Pet Care | 1 |
| `professional-services` | Professional Services | 1 |
| `property-construction` | Property & Construction | 2 |
| `retail-shopping` | Retail & Shopping | 1 |
| `travel-tourism` | Travel & Tourism | 1 |

## Variant / UX Model Mapping
| Variant | UX framework / model | Intent |
|---|---|---|
| `main` | User-Centered Design (UCD) | Balanced, familiar default. |
| `classic` | User-Centered Design (UCD) | Conservative, readable, low learning effort. |
| `modern` | Design Thinking / Aesthetic Usability Effect | Contemporary hierarchy and brand storytelling. |
| `premium` | Design Thinking / Aesthetic Usability Effect | Refined, premium presentation. |
| `minimal` | Goal-Directed Design | Minimal friction for key tasks. |
| `compact` | Goal-Directed Design | Dense, scan-friendly task UI. |
| `mobile-first` | Lean UX / Rapid Prototyping | Mobile-priority, thumb-friendly, fast conversion. |
| `express` | Lean UX / Rapid Prototyping | Speed-first actions and lightweight decisions. |
| `service-plus` | Contextual Design | Operational/service workflows and context. |
| `booking` | Contextual Design | Scheduling/transaction workflows. |

## How to Run Locally
### Option 1: Direct file open
- Open `index.html` in a browser to use the launcher.
- Open any `.../<variant>/customer.html` or `admin.html` directly.

### Option 2: Local web server (recommended)
Serving over HTTP avoids browser restrictions and is closer to deployment behavior.

```bash
cd ui-collection
python3 -m http.server 8000
# then open http://localhost:8000/
```

VS Code: run **Open with Live Server** from the `ui-collection/` folder.

## Using the Samples
1. Start at `index.html` and filter by broad category, business category, or variant.
2. Open **Customer** for the user-facing flow and **Admin** for the operations/staff flow.
3. Compare variants by UX intent (UCD, Goal-Directed, Lean UX, Contextual, visual storytelling).
4. Copy the selected sub-category/variant into a project and replace dummy content.

## Customization Guide
- **Text/content:** replace placeholder headings, labels, CTA text, and demo records.
- **Branding:** update colors, typography, logo, and imagery. Current samples use local CSS variables; adapt to Tailwind/design tokens as needed.
- **Images:** replace files in `assets/photos/` or point templates to project assets. Keep accessible `alt` text.
- **Contact/legal:** replace `+00 00000 00000`, `contact@sample-business.demo`, demo address, and add real policies.
- **Admin editor demo:** admin pages include a local customer-panel editor (`localStorage`, browser-only). Treat as UI demo unless wired to a backend/CMS.
- **Data/integration:** connect forms, tables, status changes, booking/payment/order actions to real APIs/services.
- **Accessibility:** verify contrast, focus states, labels, keyboard navigation, semantic headings, and responsive behavior after edits.

## Quality / Safety Notes
- **Dummy data only.** No production credentials, real customer PII, or live business records should remain.
- **No backend behavior.** Buttons/forms/status updates are UI samples unless implemented.
- **Relative paths matter.** Serve from `ui-collection/` root or adjust asset/link paths after moving files.
- **Browser differences:** native `<select>` option rendering varies by OS/browser; custom accessible listboxes are not implemented.

## Recommended Client Discovery
Use `CLIENT_UI_UX_QUESTIONNAIRE.md` before implementation to confirm goals, users, MVP scope, content, branding, integrations, and approvals.

## Public Demo Scope
This public repository contains only the static showcase and the sample pages and assets needed to run it. Distribution bundles and downloadable product packages are kept out of this repository; `/bundles/` is ignored by Git.
