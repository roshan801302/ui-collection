# Food & Restaurant

Broad-category index for **Food & Restaurant** samples.

## Summary
| Field | Value |
|---|---|
| Folder | `food-restaurant` |
| Sub-categories | 18 |
| Variants per sub-category | 10 |
| Pages per variant | 2 (`customer.html`, `admin.html`) |
| UI pairs | 180 |
| Total pages | 360 |

## Sub-categories
| Folder | Index | Guide | Pairs | Pages |
|---|---|---|---:|---:|
| `bbq-grill` | [Bbq Grill](./bbq-grill/index.html) | [README](./bbq-grill/README.md) | 10 | 20 |
| `canteen-management` | [Canteen Management](./canteen-management/index.html) | [README](./canteen-management/README.md) | 10 | 20 |
| `cloud-kitchen` | [Cloud Kitchen](./cloud-kitchen/index.html) | [README](./cloud-kitchen/README.md) | 10 | 20 |
| `coastal-seafood` | [Coastal Seafood](./coastal-seafood/index.html) | [README](./coastal-seafood/README.md) | 10 | 20 |
| `coffee-roastery` | [Coffee Roastery](./coffee-roastery/index.html) | [README](./coffee-roastery/README.md) | 10 | 20 |
| `dessert-bakery` | [Dessert Bakery](./dessert-bakery/index.html) | [README](./dessert-bakery/README.md) | 10 | 20 |
| `family-diner` | [Family Diner](./family-diner/index.html) | [README](./family-diner/README.md) | 10 | 20 |
| `fine-dining` | [Fine Dining](./fine-dining/index.html) | [README](./fine-dining/README.md) | 10 | 20 |
| `juice-smoothie-bar` | [Juice Smoothie Bar](./juice-smoothie-bar/index.html) | [README](./juice-smoothie-bar/README.md) | 10 | 20 |
| `modern-bistro` | [Modern Bistro](./modern-bistro/index.html) | [README](./modern-bistro/README.md) | 10 | 20 |
| `modern-japanese` | [Modern Japanese](./modern-japanese/index.html) | [README](./modern-japanese/README.md) | 10 | 20 |
| `north-indian-thali` | [North Indian Thali](./north-indian-thali/index.html) | [README](./north-indian-thali/README.md) | 10 | 20 |
| `pizza-woodfired` | [Pizza Woodfired](./pizza-woodfired/index.html) | [README](./pizza-woodfired/README.md) | 10 | 20 |
| `rooftop-lounge` | [Rooftop Lounge](./rooftop-lounge/index.html) | [README](./rooftop-lounge/README.md) | 10 | 20 |
| `rustic-italian` | [Rustic Italian](./rustic-italian/index.html) | [README](./rustic-italian/README.md) | 10 | 20 |
| `street-food` | [Street Food](./street-food/index.html) | [README](./street-food/README.md) | 10 | 20 |
| `vegan-organic` | [Vegan Organic](./vegan-organic/index.html) | [README](./vegan-organic/README.md) | 10 | 20 |
| `warm-signature-restaurant` | [Warm Signature Restaurant](./warm-signature-restaurant/index.html) | [README](./warm-signature-restaurant/README.md) | 10 | 20 |

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
Open `http://localhost:8000/food-restaurant/<sub-category>/index.html`.
