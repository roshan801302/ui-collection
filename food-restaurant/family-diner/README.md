# Family Diner — UI Samples

Detailed guide for the **Family Diner** sub-category under **Food & Restaurant**.

## Overview
| Field | Value |
|---|---|
| Broad category | Food & Restaurant (`food-restaurant`) |
| Sub-category | Family Diner (`family-diner`) |
| Path | `ui-collection/food-restaurant/family-diner/` |
| Variants | 10 |
| Pages per variant | 2 (`customer.html`, `admin.html`) |
| UI pairs | 10 |
| Total pages | 20 |
| Category index | [`index.html`](index.html) |
| Data | Dummy/placeholder only |
| Backend | None (static UI sample) |

## What to Review
- **Customer page:** public/user-facing journey, messaging, primary CTA, key information hierarchy, and conversion/task flow.
- **Admin page:** operational workflow, status visibility, data tables/forms, filters/actions, and staff-oriented task handling.
- **Pair cohesion:** customer and admin files in the same variant share cohesive visual direction/tokens while serving different user roles.

## Variant Matrix
| Variant | UX model | Intent | Customer | Admin |
|---|---|---|---|---|
| `main` | User-Centered Design (UCD) | Balanced default experience with familiar patterns and clear utility. Best baseline for most buyers/clients. | `./main/customer.html` | `./main/admin.html` |
| `classic` | User-Centered Design (UCD) | Conservative, readable structure with traditional UI patterns and low learning effort. | `./classic/customer.html` | `./classic/admin.html` |
| `modern` | Design Thinking / Aesthetic Usability Effect | Contemporary visual hierarchy, negative space, and polished storytelling. | `./modern/customer.html` | `./modern/admin.html` |
| `minimal` | Goal-Directed Design | Low-friction layout focused on essential actions and content. | `./minimal/customer.html` | `./minimal/admin.html` |
| `premium` | Design Thinking / Aesthetic Usability Effect | Elevated brand presentation, refined surfaces, and premium positioning. | `./premium/customer.html` | `./premium/admin.html` |
| `compact` | Goal-Directed Design | Dense, scan-friendly UI for fast task completion and operational views. | `./compact/customer.html` | `./compact/admin.html` |
| `mobile-first` | Lean UX / Rapid Prototyping | Thumb-friendly, conversion-oriented layout prioritizing small screens and speed. | `./mobile-first/customer.html` | `./mobile-first/admin.html` |
| `express` | Lean UX / Rapid Prototyping | Speed-first flows for quick actions, lightweight decisions, and high conversion. | `./express/customer.html` | `./express/admin.html` |
| `service-plus` | Contextual Design | Service-workflow UI with operational context, multi-step handling, and status visibility. | `./service-plus/customer.html` | `./service-plus/admin.html` |
| `booking` | Contextual Design | Scheduling/transaction workflow UI for slots, requests, approvals, and confirmations. | `./booking/customer.html` | `./booking/admin.html` |

## File/Folder Structure
```text
family-diner/
├── README.md
├── index.html
├── main/
│   ├── customer.html
│   ├── admin.html
│   └── assets/
├── classic/ ... booking/
│   ├── customer.html
│   ├── admin.html
│   └── assets/
```

## How to Run
From repository/workspace root:
```bash
cd ui-collection
python3 -m http.server 8000
```
Open `http://localhost:8000/food-restaurant/family-diner/index.html` or launch a specific variant:
- `http://localhost:8000/food-restaurant/family-diner/mobile-first/customer.html`
- `http://localhost:8000/food-restaurant/family-diner/booking/admin.html`

Direct file open also works in most cases, but a local server is recommended for consistent relative-path behavior.

## Shared Dependencies / Assets
- Shared photos: `../../../assets/photos/` (resolved from variant pages as `../../../../assets/photos/...`)
- Shared UI enhancement (if present): `../../../assets/ui-enhance/`
- Global placeholders: `ui-collection/assets/css|js|images/`
- Variant-specific assets: `./<variant>/assets/` (add custom CSS/JS/images here without affecting other variants)

## Customization Checklist
- [ ] Replace business name, tagline, contacts, address, hours, and legal/policy text.
- [ ] Swap demo records (orders, bookings, customers, services, statuses, prices) with realistic placeholders or integrated data.
- [ ] Update CTAs and forms to match the real workflow (fields, validation, success/error states).
- [ ] Confirm image relevance and accessibility (`alt` text, contrast, readability).
- [ ] Adjust variant choice using `UX_MODEL_MAPPING.md` (e.g., `express/mobile-first` for fast local commerce, `service-plus/booking` for workflows).
- [ ] Connect admin actions and customer submissions to backend APIs/services if moving beyond static UI.
- [ ] Remove any placeholder/demo-only copy before production use.

## Integration Notes
- These files are **static UI samples**. Forms, filters, save actions, and status updates may be visual only.
- Admin pages may include local browser `localStorage` demo editors; treat as non-production unless replaced.
- Preserve semantic structure and responsive behavior when porting into React/Next/Vue/CMS templates.

## Recommended Use Cases
- Client demos and requirement clarification for family diner workflows.
- Choosing a UX direction (UCD, Goal-Directed, Lean UX, Contextual Design, premium/modern visual style).
- Frontend handoff baseline before API/data integration.

## Related Docs
- [`../../README.md`](../../README.md)
- [`../../UX_MODEL_MAPPING.md`](../../UX_MODEL_MAPPING.md)
- [`../../CLIENT_UI_UX_QUESTIONNAIRE.md`](../../CLIENT_UI_UX_QUESTIONNAIRE.md)
- [`../../SAMPLE_CATEGORIES.md`](../../SAMPLE_CATEGORIES.md)
- [`../../index.html`](../../index.html)
