# Property & Construction

Broad-category index for **Property & Construction** samples.

## Summary
| Field | Value |
|---|---|
| Folder | `property-construction` |
| Sub-categories | 2 |
| Variants per sub-category | 10 |
| Pages per variant | 2 (`customer.html`, `admin.html`) |
| UI pairs | 20 |
| Total pages | 40 |

## Sub-categories
| Folder | Index | Guide | Pairs | Pages |
|---|---|---|---:|---:|
| `construction-architecture` | [Construction Architecture](./construction-architecture/index.html) | [README](./construction-architecture/README.md) | 10 | 20 |
| `real-estate` | [Real Estate](./real-estate/index.html) | [README](./real-estate/README.md) | 10 | 20 |

## Variant Guidance
- `main/classic`: UCD baselines for clarity and familiarity.
- `modern/premium`: visual storytelling and polished presentation.
- `minimal/compact`: goal-directed, low-friction task UIs.
- `mobile-first/express`: Lean UX, fast conversion/mobile flows.
- `service-plus/booking`: contextual workflows (service ops, scheduling, transactions).

## Run
```bash
cd ui-collection
python3 -m http.server 8000
```
Open `http://localhost:8000/property-construction/<sub-category>/index.html`.
