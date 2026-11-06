# Health & Fitness

Broad-category index for **Health & Fitness** samples.

## Summary
| Field | Value |
|---|---|
| Folder | `health-fitness` |
| Sub-categories | 3 |
| Variants per sub-category | 10 |
| Pages per variant | 2 (`customer.html`, `admin.html`) |
| UI pairs | 30 |
| Total pages | 60 |

## Sub-categories
| Folder | Index | Guide | Pairs | Pages |
|---|---|---|---:|---:|
| `fitness-gym` | [Fitness Gym](./fitness-gym/index.html) | [README](./fitness-gym/README.md) | 10 | 20 |
| `healthcare-clinic` | [Healthcare Clinic](./healthcare-clinic/index.html) | [README](./healthcare-clinic/README.md) | 10 | 20 |
| `salon-spa` | [Salon Spa](./salon-spa/index.html) | [README](./salon-spa/README.md) | 10 | 20 |

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
Open `http://localhost:8000/health-fitness/<sub-category>/index.html`.
