# BVC brand palette from the logo

Your logo uses one dominant colour: a deep royal navy sampled at **#023386** (plus white). The site currently runs on institutional crimson, which fights the logo. Recommended direction: make the logo blue the primary colour, keep the crisp white canvas and cool grays, and add a single warm accent for calls to action so buttons don't disappear into the blue.

## Recommended combination

| Role | Colour | Use |
| --- | --- | --- |
| Primary (brand blue) | `#023386` | Top nav band, headings accent, links, module keylines |
| Primary deep (ink) | `#011E4F` | Dark facts band, footer, tooltips |
| Primary tint | `#E8EEF9` | Section surfaces, hover fills, sidebar plates |
| Accent (warm gold) | `#C8901E` | Buttons, badges, "apply" CTAs — pulled from academic crest convention, high contrast on navy |
| Canvas / neutrals | `#FFFFFF`, `#F5F7FA`, `#8B94A3`, `#1B1F27` | Body background, cards, muted text, body text |

Why this works: single-hue brand systems (one blue + neutrals) read most institutional and are what technical schools and universities use; the gold accent gives contrast for actions without introducing a second competing brand colour. Gold on navy also echoes the flamingo crest's formality.

Alternative if you want a livelier feel: swap the gold for a **teal `#0F8F91`** accent — cooler, more "technical/industrial", still clearly secondary to the navy.

## Implementation (technical)

- Replace crimson tokens in `src/styles.css`: `--primary`, `--ring`, `--ink`, `--surface`, `--accent`, plus new `--brand-tint` and `--accent-gold` tokens, all in `oklch()` to match the existing format.
- Adjust the `.dark` block so the blue lightens (roughly `oklch(0.62 0.15 262)`) for contrast on dark backgrounds.
- No component edits needed for colour — header, sidebar buttons, cards, marquee and footer all use semantic tokens already; only the CTA buttons on `/`, `/admissions`, `/contact` get the new accent variant.
- Add the logo as the header mark (via a `lovable-assets` pointer) replacing the "B" square, and set it as the favicon in `public/` + `src/routes/__root.tsx`.

## Scope

Colour tokens, CTA accent styling, header logo and favicon. No layout, content or data changes.
