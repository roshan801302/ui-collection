# Creative Services

Broad-category index for **Creative Services** samples.

## Summary
| Field | Value |
|---|---|
| Folder | `creative-services` |
| Sub-categories | 1 |
| Variants per sub-category | 10 |
| Pages per variant | 2 (`customer.html`, `admin.html`) |
| UI pairs | 10 |
| Total pages | 20 |

## Sub-categories
| Folder | Index | Guide | Pairs | Pages |
|---|---|---|---:|---:|
| `photography-studio` | [Photography Studio](./photography-studio/index.html) | [README](./photography-studio/README.md) | 10 | 20 |

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
Open `http://localhost:8000/creative-services/<sub-category>/index.html`.
