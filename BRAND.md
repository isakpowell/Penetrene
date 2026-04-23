# Penetrene Industrial — Brand Guidelines

## Brand Voice
Industrial, authoritative, proven. Every element should feel like it belongs in a workshop, not a boardroom. Copy is terse, technical, and confident. Established 1924.

---

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--y` | `#FFD000` | Primary brand yellow. CTAs, highlights, stat values, hover states |
| `--r` | `#CC0000` | Accent red. Used sparingly — hero text accent only |
| `--black` | `#000000` | Nav background, primary text on light |
| `--dark` | `#111111` | Footer background |
| `--dark2` | `#1a1a1a` | Secondary dark surfaces |
| `--w` | `#ffffff` | Light section backgrounds, reversed text |
| `--card` | `#ebebeb` | Product card background (light sections) |

### Blueprint / Specs Palette
| Name | Hex | Usage |
|------|-----|-------|
| Specs BG | `#111416` | Technical specs section background |
| Specs Card | `#000000` | Main card fill |
| Specs Panel | `#0C0E10` | Inner right panel in specs |
| Specs Border | `rgba(70,72,74,0.3)` | Subtle borders on dark cards |
| Light Text | `#EEEEF0` | Headings on dark backgrounds |
| Muted Text | `#AAABAD` | Labels and secondary text on dark |
| Stat Yellow | `#FBD91F` | Stat values in specs panel |

---

## Typography

### Fonts in use
- **Space Grotesk** (700, 800) — Section headings only
- **Open Sans** (400, 500, 600, 700, 800, 800 italic) — Everything else: nav, body, labels, buttons, values

### Rules
- Section headings (`h2` for named sections like "Product Range", "Industrial Grade Specifications"): **Space Grotesk 800**
- UI labels, nav links, buttons, spec keys: **Open Sans 600–700, uppercase, tracked**
- Body copy: **Open Sans 400**, `line-height: 1.7`
- Hero `h1`: **Open Sans 800 italic**, very large, tight negative letter-spacing
- Never use default Tailwind blue/indigo as a primary color

### Letter Spacing
- Body: default
- Uppercase labels/nav: `0.10em–0.20em`
- Feature headings: `0.04em`
- Large display numbers: `0.01em–0.03em`

---

## Spacing & Layout

- Max content width: `1280px`, centered with `margin: 0 auto`
- Section horizontal padding: `40px`
- Section vertical padding: `72px–100px` depending on weight
- Card gap (product grid): `16px`
- Consistent spacing tokens — avoid arbitrary Tailwind steps

---

## Border Radius

| Element | Radius |
|---------|--------|
| Product cards | `20px` |
| Specs card / blueprint | `30px` |
| Buttons | `4px` |
| Stat boxes (specs) | `6px` |

---

## Buttons

### Primary (dark fill)
- Background: `#000`, color: `#fff`
- Font: Open Sans 700, `13px`, `letter-spacing: 0.14em`, uppercase
- Padding: `20px 60px`
- Hover: `opacity: 0.8`

### Secondary (outline)
- Background: transparent, border: `1.5px solid #000`, color: `#000`
- Same font/size as primary
- Hover: fill black, text white

### Nav CTA
- Background: `#FFD000`, color: `#000`
- Font: Open Sans 700, uppercase

---

## Cards

### Product Cards
- Background: `#ebebeb`
- Border-radius: `20px`
- Hover: background becomes `#FFD000`, product image scales to `1.25` with spring easing `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Image transition: `0.4s`

---

## Section Patterns

### Dark sections (Hero, Specs, Footer)
- Always use `#000` or `#111416` or `#111` as background
- Text is `#EEEEF0` or `rgba(255,255,255,0.45)` for muted
- Accent values always in `#FFD000` or `#FBD91F`

### Light sections (Products, Trusted By)
- Background: `#fff` or `#ebebeb`
- Watermark text: large uppercase, `rgba(0,0,0,0.05)`, positioned absolute, pointer-events none

### Watermarks
Every major section uses a large background watermark word (e.g. "Range", "Penetrene"). Style:
```css
font-weight: 800;
font-size: 130–180px;
letter-spacing: 0.04em;
color: rgba(0,0,0,0.05);   /* light bg */
color: rgba(255,255,255,0.04); /* dark bg */
text-transform: uppercase;
pointer-events: none;
user-select: none;
```

### Blueprint / Technical sections
Use the specs card pattern for any "data readout" or technical content:
- Outer section: `#111416`
- Card: black, `border-radius: 30px`, `border: 1px solid rgba(70,72,74,0.3)`
- Corner monospace labels (system log style): `font-family: 'Courier New', monospace`, `9px`, `color: rgba(70,72,74,0.7)`
- Inner panel: `#0C0E10`, inset with margin, rounded

---

## Animations

- Only animate `transform` and `opacity` — never `transition-all`
- Spring easing for image/card interactions: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Standard UI transitions: `0.2s ease`
- Every interactive element needs `:hover`, `:focus-visible`, and `:active` states

---

## Do Nots

- Do not use default Tailwind blue/indigo as a primary color
- Do not use `transition-all`
- Do not add sections not in the design
- Do not use flat `shadow-md` — prefer layered, color-tinted shadows
- Do not use the same font for headings and body (Space Grotesk = headings, Open Sans = UI/body)
- Do not use italic Open Sans outside of the hero `h1`
