# Presentation Slides Design Spec

## Overview

17-slide presentation for BBM485 Software Architectures course evaluating KNIME Workbench's concrete architecture using C&K and LOC metrics. Each slide is a full-viewport React component rendered as a static canvas (no animations).

## Design Source of Truth

**The 4 reference images provided by the user are the ABSOLUTE design authority.** Every slide must match their level of:
- **Typography scale**: Headlines are MASSIVE — 80-120px+ on desktop, filling 50-70% of the slide surface. Not small. Not medium. ENORMOUS.
- **Visual weight**: Bold condensed sans-serif type that dominates the viewport
- **Texture depth**: Full-surface dot patterns, grain overlays with subtle opacity — not flat CSS
- **Color confidence**: Large saturated color blocks, not timid pastels
- **Editorial spacing**: Magazine/poster-level negative space, not PowerPoint margins
- **Card design**: Rounded corners (12-16px), proper padding (24-32px), real visual mass
- **Decorative density**: Asterisks, arrows, plus marks, TM marks, slide numbers placed with intention

### What These Slides Are NOT
- NOT PowerPoint templates
- NOT wireframes with small text
- NOT generic card grids
- NOT minimalist with lots of whitespace
- They are BOLD, LOUD, EDITORIAL, RETRO-MODERN posters

## Typography Stack

| Role | Font | Weight | Size Range | Usage |
|------|------|--------|------------|-------|
| Headlines | Clash Display | 700 | 64-140px | Slide titles, giant statements |
| Section Labels | Playfair Display Italic | 400-700 | 18-28px | "Q1 — Code Size", "About Our Tools" |
| Body | General Sans | 400-600 | 14-18px | Descriptions, explanations |
| Stats | Clash Display | 700 | 80-200px | Giant numbers (576, 7690, 220) |
| Small text | General Sans | 400 | 11-13px | Captions, footnotes |

**Font loading**: Use Fontshare CDN for Clash Display and General Sans. Google Fonts for Playfair Display. Load via `<link>` in layout.tsx or via `next/font`.

## Color Palettes (Per Slide)

| Slide | Name | Primary BG | Secondary | Accent 1 | Accent 2 | Surface |
|-------|------|-----------|-----------|----------|----------|---------|
| 01 | Title | #1a535c (Teal) | #f0a0b0 (Blush) | #c8a832 (Gold) | #f5f0e8 (Cream) | Textured (dots) |
| 02 | OSS Overview | #e85d3a (Coral) | #2b2d8e (Navy) | #f5c842 (Yellow) | #f5f0e8 (Cream) | Matte |
| 03 | GQM | #0d1321 (Midnight) | #c5e84d (Lime) | #3aa68e (Jade) | #4466cc (Royal) | Textured (dots) |
| 04 | Tools | #6b2fa0 (Purple) | #d4a017 (Marigold) | #d4275e (Magenta) | #3d2b8e (Indigo) | Textured (scan lines) |
| 05 | Summary | #e85d3a (Coral) | #2b2d8e (Navy) | #f5c842 (Yellow) | #f5f0e8 (Cream) | Matte |
| 06 | Q1 LOC | #1a535c (Teal) | #f0a0b0 (Blush) | #c8a832 (Gold) | #f5f0e8 (Cream) | Textured (dots) |
| 07 | Q2 CBO | #f5f0e8 (Parchment) | #2c2c2c (Charcoal) | #c8553d (Rust) | #d4a017 (Amber) | Matte |
| 08 | Q3 WMC | #1b1b2f (Ink) | #d4a017 (Gold) | #e23e57 (Cherry) | #f5f0e8 (Cream) | Matte |
| 09 | Q3 RFC | #6b2fa0 (Purple) | #66e6c4 (Mint) | #c8a832 (Gold) | #1a1a1a (Black) | Matte |
| 10 | God Class | #3c1518 (Oxblood) | #d4af37 (Brass) | #f5f0e8 (Ivory) | #69140e (Maroon) | Textured (vignette) |
| 11 | Q4 LCOM | #1d3557 (Navy) | #e63946 (Vermillion) | #a8dadc (Ice) | #f1faee (Mint) | Matte |
| 12 | DIT/NOC | #e8dcc8 (Linen) | #2d4a3e (Forest) | #c8553d (Terra) | #1a1a1a (Black) | Matte |
| 13 | Dep Graph | #0b0c10 (Void) | #66fcf1 (Cyan) | #c5c6c7 (Silver) | #45a29e (Teal) | Textured (crosshatch) |
| 14 | Cyclic Dep | #e63946 (Vermillion) | #1d3557 (Navy) | #f5f0e8 (Cream) | #a8dadc (Ice) | Matte |
| 15 | Evaluation | #264653 (Deep Sea) | #e9c46a (Honey) | #d4a373 (Caramel) | #2a9d8f (Aqua) | Textured (dots) |
| 16 | Recommendations | #0d1321 (Midnight) | #c5e84d (Lime) | #3aa68e (Jade) | #4466cc (Royal) | Matte |
| 17 | Q&A | #2d3436 (Graphite) | #fdcb6e (Lemon) | #00b894 (Emerald) | #e17055 (Paprika) | Textured (dots) |

## Texture System

Applied as CSS pseudo-elements or overlays on the slide container:

- **Micro dots**: `repeating-radial-gradient(circle, rgba(255,255,255,0.06) 0.5px, transparent 0.5px); background-size: 6px 6px;` — covers full slide surface
- **Scan lines**: `repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 4px);`
- **Crosshatch**: Both 45deg and -45deg linear gradients at 0.02 opacity
- **Vignette**: `radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 100%)`
- **Matte**: No texture overlay — clean flat color

## Decorative Elements

| Element | Usage | Rendering |
|---------|-------|-----------|
| Asterisk ✳ | Corner accent, section marker | `&#10038;` at 32-64px, colored in accent |
| Arrow ↗ | Card accent, direction indicator | `&#8599;` at 24-40px |
| Plus + | Section marker, emphasis | `+` in accent color, 24-36px |
| TM | Above headline keywords | Small caps, accent color, 14-18px |
| Slide number | Top-right of every slide | `/(XX-017)` in monospace, accent color, 14px |
| Em dash | Section separator | 32-48px wide, 3px height bar |
| Pull quote | Before quoted text | `"` in large italic serif, 48-72px |
| Rings | Background decorative | CSS border-radius circles, low opacity |

## Layout Patterns

### Pattern 1: Type Flood (Slides 01, 15)
- Giant headline fills 50-70% of slide area
- Small supporting text in remaining space
- Small accent cards or chips at edges
- Reference: Example slide 01 "The Global Digital Marketing Market"

### Pattern 2: Hard Split (Slides 02, 05, 08)
- Slide divided into 2 color blocks (roughly 55/45 or 50/50)
- Left = editorial text wall with giant headline
- Right = stats, circles, data cards
- Reference: Example slide 02 "Why Brands Struggle"

### Pattern 3: Overlapping Circles (Slide 04)
- Large circles (50-65% of slide width) overlapping
- Content placed INSIDE circles
- Background color visible in gaps
- Reference: Example slide 03 "We're Not Just Another Marketing Agency"

### Pattern 4: Bento + Stacked Cards (Slides 03, 16)
- Left = headline text block
- Right = 3-4 stacked colored cards with rounded corners
- Cards have arrow decorative in top-right corner
- Reference: Example slide 04 "Why Brands Choose to Work With Us"

### Pattern 5: Chart + Stat Sidebar (Slides 06, 07, 11)
- Top = section headline
- Bottom-left = chart area (recharts component)
- Bottom-right = stat cards stacked vertically
- Reference: User's earlier slide 06 (Q1 Code Size)

### Pattern 6: Corner Bleed (Slide 09)
- Primary color background with headline
- Secondary color block bleeds from bottom-right corner
- Giant stat inside the bleed area
- Reference: User's earlier slide 09 (RFC)

### Pattern 7: Orbital Concentric (Slide 10)
- Dark dramatic background
- Concentric circle outlines emanating from center
- Centered headline with supporting chips below
- Vignette texture for cinematic mood

### Pattern 8: Centered Monument (Slide 17)
- Giant centered "Questions?" headline
- Team cards horizontally below
- Textured background, breathing space

## Slide-by-Slide Specifications

### Slide 01: Title Slide
- **Layout**: Type Flood
- **Palette**: Teal + Blush + Cream + Gold
- **Headline**: "Concrete Architecture Evaluation: KNIME Workbench" — Clash Display 700, ~100px, cream colored. "KNIME" in blush (#f0a0b0)
- **Section label**: "BBM485 — Software Architectures" — Playfair Display Italic, 18px, top-left
- **Subtitle**: "Analysis of Maintainability via C&K and LOC Metrics (T1 Report)" — General Sans 400, 14px, below headline
- **Team chips**: 3 small rounded rectangles at bottom with team names
- **Decoratives**: Gold asterisk top-right corner, slide number /(01-017)
- **Texture**: Micro dots full surface
- **Course info**: "2025-2026 Spring" small text

### Slide 02: OSS Product Overview
- **Layout**: Hard Split
- **Palette**: Coral + Navy + Yellow + Cream
- **Left (coral)**: Section label "Product Overview" in Playfair italic. Giant "KNIME Workbench" headline — Clash Display, ~90px. "Graphical front-end (Eclipse RCP) for data analysis workflows" body text below.
- **Right (navy)**: 3 stacked info cards with dark translucent background — Language: "Java (OOP)", Codebase: "97.66 KLOC" (in yellow), Classes: "672". Small "GNU GPL" badge at bottom.
- **Decoratives**: Quote mark, em dash, slide number

### Slide 03: GQM Methodology
- **Layout**: Bento + Stacked Cards
- **Palette**: Midnight + Lime + Jade + Royal
- **Left**: "Goal Question Metric" as giant stacked headline — Clash Display, ~80px each word on its own line. "Metric" in lime. Subtitle: "Evaluate maintainability, testability, and modifiability"
- **Right**: 4 stacked colored cards:
  - Q1 Size — LOC (lime card)
  - Q2 Coupling — CBO (jade card)
  - Q3 Complexity — WMC & RFC (royal card)
  - Q4 Structure — LCOM, DIT, NOC (lime card, slightly dimmed)
- Each card has arrow ↗ decorative
- **Texture**: Micro dots
- **Decoratives**: Asterisk, slide number

### Slide 04: Tools Used
- **Layout**: Overlapping Circles
- **Palette**: Purple + Marigold + Magenta + Indigo
- **Circle 1 (largest, marigold)**: "SciTools Understand" — Clash Display, ~50px. "Metric Extraction & Dependency Graphs" subtitle. TM mark above.
- **Circle 2 (magenta, overlapping right)**: "Python" — Clash Display, ~40px. "Pandas, Matplotlib, SciPy — Statistical analysis & visualization" body text.
- **Circle 3 (indigo, smaller, bottom)**: Asterisk decorative + "SonarQube" — "Code Smells" subtitle.
- **Section label**: "About Our Tools" — Playfair italic, top-left
- **Texture**: Scan lines
- **Decoratives**: Arrow ↗, slide number, TM mark

### Slide 05: System-Level Summary
- **Layout**: Hard Split
- **Palette**: Coral + Navy + Yellow + Cream
- **Left (coral)**: Section label "System Overview" in Playfair italic. Pull quote mark. "Medians are healthy. Max values reveal severe outliers." body text. Giant headline: "Most Classes Are Well-Designed. A Few Are Catastrophic." — "A Few Are Catastrophic" in yellow.
- **Right (navy)**: Large circle with "7,690" stat (giant, ~120px) + "Max LCOM — WorkflowEditor" label. Small percentage circle "%" accent. Yellow banner at bottom: "672 Classes Analyzed".
- **Note**: Table 5 data should be displayed — consider a compact data table or key stats extracted
- **Decoratives**: Pull quote mark, brand circles (M, E initials for team), slide number

### Slide 06: Q1 — Code Size (LOC)
- **Layout**: Chart + Stat Sidebar
- **Palette**: Teal + Blush + Cream + Gold
- **Top**: Section label "Q1 — Code Size" in Playfair italic. Headline: "Where Is the Code Hiding?" — "Hiding?" in blush. Subtitle: "LOC Distribution across 672 classes"
- **Bottom-left**: Cream card area for LOC histogram (recharts BarChart). Chart styled with teal bars on cream background.
- **Bottom-right**: Stat cards stacked:
  - "52" (large, blush) — "Median LOC"
  - "2,688" (large, blush) — "WorkflowEditor"
  - Blush badge: "75% of classes < 111 LOC"
- **Texture**: Micro dots
- **Decoratives**: Asterisk, slide number
- **Chart**: recharts BarChart showing LOC distribution histogram

### Slide 07: Q2 — Coupling (CBO)
- **Layout**: Hard Split (light left, dark right cards)
- **Palette**: Parchment + Charcoal + Rust + Amber
- **Left (parchment)**: Section label "Q2 — Coupling" in Playfair italic. Giant headline: "The Butterfly Effect" — "Effect" in rust. Body: "A tiny change breaks 220 components."
- **Right**: Stacked cards:
  - Charcoal card: "220" giant stat (rust colored) — "CBO — WorkflowEditor"
  - Rust card: "21%" stat — "violate CBO > 14"
  - Cream card: CBO boxplot chart placeholder
- **Texture**: None (matte)
- **Chart**: recharts boxplot or bar showing CBO distribution

### Slide 08: Q3 — Structural Complexity (WMC)
- **Layout**: Hard Split
- **Palette**: Ink + Gold + Cherry + Cream
- **Left (gold card filling left half)**: Section label "Q3 — Structural Complexity" Playfair italic. Giant "576" (~160px). "Weighted Methods per Class" subtitle. "WorkflowEditor — by far the most complex class". WMC boxplot in a cream sub-card at bottom.
- **Right (ink/dark)**: "12.65%" giant stat in cherry. "of classes violate WMC > 40". Cherry badge: "Practically Untestable". Asterisk decorative. Arrow decorative.
- **Texture**: None (matte)
- **Chart**: recharts WMC boxplot inside gold card

### Slide 09: Q3 — Behavioral Complexity (RFC)
- **Layout**: Corner Bleed
- **Palette**: Purple + Mint + Gold
- **Top-left (purple)**: Section label "Q3 — Behavioral Complexity" Playfair italic. Headline: "Response for a Class" — Clash Display, ~70px. "RFC measures behavioral reach" body. Asterisk decorative.
- **Bottom-right (mint, bleeding from corner)**: Badge: "2.68% exceed RFC > 100". Giant "531" stat (~140px). "RFC — WorkflowEditor" subtitle. Body: "WMC and RFC perfectly correlated — confirming God Classes are complex in every dimension."
- **Decoratives**: Arrow, slide number, asterisk

### Slide 10: Deep Dive — The "God Class" Pattern
- **Layout**: Orbital Concentric
- **Palette**: Oxblood + Brass + Ivory + Maroon
- **Background**: Dark oxblood with vignette texture
- **Center**: Concentric brass ring outlines (2-3 rings). Centered headline: 'The "God Class" Pattern' — "God Class" in brass/gold.
- **Below headline**: 3 class name chips: WorkflowEditor, NodeContainerEditPart, StyledTextEditor
- **Secondary stats**: "Depth of 8 nested blocks" + "24 Try-Catch blocks" + "Fan-in: 166"
- **Mood**: Most dramatic slide — villain reveal. Dark, cinematic.
- **Decoratives**: Concentric rings, slide number

### Slide 11: Q4 — Lack of Cohesion (LCOM)
- **Layout**: Hard Split (type left, alarm cards right)
- **Palette**: Navy + Vermillion + Ice + Mint
- **Left (navy)**: Section label "Q4 — Cohesion" Playfair italic. Headline: "Lack of Cohesion" — "Cohesion" in vermillion. Body: 'Methods share almost no data. A "Dumping Ground" for logic.'
- **Right**: Stacked:
  - Vermillion card: "64.14%" giant stat — "violate LCOM > 1" (this is the alarming number)
  - Dark card: "7,690" stat in ice blue — "LCOM — WorkflowEditor"
  - Chart card: LCOM boxplot
- **Texture**: None (matte)
- **Chart**: recharts LCOM boxplot

### Slide 12: Q4 — Inheritance (DIT & NOC)
- **Layout**: Split (light left, cards right)
- **Palette**: Linen + Forest + Terra + Black
- **Left (linen)**: Section label "Q4 — Inheritance" Playfair italic. Headline: "A Healthy Flat Tree" — in forest green. Body: "Not all news is bad. DIT averages 2.22. Only 1 class > 5."
- **Right**: Cards:
  - Forest card: "2.22" stat — "Mean DIT — Healthy"
  - Terra card: "NOC: 50" — "AbstractNodeAction"
- **Mood**: Calm, positive — contrast to alarm slides. Reader gets a breather.
- **Texture**: None (matte)

### Slide 13: Concrete Architecture (Dependency Graph)
- **Layout**: Image slide with annotation
- **Palette**: Void + Cyan + Silver + Teal
- **Top**: Section label "Architecture" Playfair italic. Headline: "Concrete Architecture" — "Architecture" in cyan.
- **Center**: Large area for dependency graph image (user will provide the SciTools screenshot as a static image). Framed in a dark card with cyan border.
- **Bottom**: 3 annotation chips: "core: utility base", "editor: central hub", "test: isolated"
- **Texture**: Crosshatch
- **Note**: The SciTools graph image will be placed as a static `<Image>` from `/public/`

### Slide 14: Architectural Smell — Cyclic Dependency
- **Layout**: Hard Split
- **Palette**: Vermillion (dominant) + Navy + Cream
- **Left (vermillion)**: Section label "Architectural Smell" Playfair italic. Headline: "Cyclic Dependency" — "Dependency" in navy. Body: "editor ↔ ui.layout — Prevents independent compilation and testing"
- **Right (navy)**: Two direction cards with bidirectional arrow:
  - Navy card: "105" — "editor → layout"
  - Lighter card: "12" — "layout → editor"
  - ⇅ arrow between them
- **Mood**: DANGER — red alarm. This is bad news.
- **Texture**: None (matte)

### Slide 15: Overall Evaluation
- **Layout**: Type Flood with bullet list
- **Palette**: Deep Sea + Honey + Caramel + Aqua
- **Headline**: "Functional Software. Heavy Technical Debt." — "Heavy" in honey. Giant type, ~80px.
- **Below**: 3 bullet points with honey dot markers:
  - "God Class pattern — centralized responsibilities harm testability"
  - "Low cohesion — 64% LCOM violations indicate poor encapsulation"
  - "Cyclic dependency — breaks layered architecture at module level"
- **Section label**: "Summary" Playfair italic
- **Texture**: Micro dots
- **Mood**: Authoritative, calm conclusion after the alarm slides

### Slide 16: Recommendations
- **Layout**: Bento + Stacked Cards
- **Palette**: Midnight + Lime + Jade + Royal
- **Left**: Section label "Recommendations" Playfair italic. Asterisk. "How to reduce technical debt" body text. Headline: "Three Steps to a Cleaner Architecture" — "Cleaner Architecture" in lime.
- **Right**: 3 stacked colored cards with arrow ↗:
  - Lime: "Decompose God Classes" — "Break down WorkflowEditor → solve LOC, WMC, LCOM"
  - Jade: "Interface Segregation" — "Use interfaces to reduce CBO coupling"
  - Royal: "Dependency Inversion" — "Apply DIP to break editor ↔ layout cycle"
- **Texture**: None (matte)
- **Decoratives**: Asterisk, slide number, arrows on cards

### Slide 17: Team Allocation & Q&A
- **Layout**: Centered Monument
- **Palette**: Graphite + Lemon + Emerald + Paprika
- **Center**: Giant "Questions?" — with "?" in lemon. ~120px.
- **Below**: 3 team cards horizontally:
  - Lemon card: "Mert Ergün" — "OSS selection, Tool setup, Q1, Q2, Graph generation"
  - Emerald card: "Tahacan Çelebi" — "GQM tree design, Q3 analysis, Outlier identification"
  - Paprika card: "Serhat Akbulut" — "Q4 analysis, Package aggregation, Overall evaluation"
- **Bottom**: Small text: "References: Chidamber & Kemerer (1994), Basili (1994), KNIME GitHub"
- **Texture**: Micro dots
- **Course label**: "BBM485 Software Architectures — 2025-2026 Spring"

## Component Architecture

```
src/
  app/
    page.tsx                    → Slide viewer/navigator (keyboard nav)
    globals.css                 → Font imports, base reset, texture mixins
    layout.tsx                  → Root layout with font loading
  components/
    slides/
      Slide01.tsx ... Slide17.tsx  → Each slide component
    shared/
      SlideShell.tsx            → Full-viewport wrapper, texture overlay, slide number
      Texture.tsx               → Texture overlay component (dots, grain, scanlines, etc.)
      StatCard.tsx              → Stat number + label card
      InfoCard.tsx              → Colored content card with arrow
  lib/
    palettes.ts                 → Color palette definitions per slide
    fonts.ts                    → Font configuration
  public/
    images/
      dependency-graph.png      → SciTools screenshot (user provides)
```

### SlideShell Component
Every slide wraps in this. It provides:
- Full viewport sizing (`w-screen h-screen`)
- Background color from palette
- Optional texture overlay
- Slide number in top-right corner (`/(XX-017)`)
- Overflow hidden

### Slide Viewer (page.tsx)
- Shows one slide at a time, full viewport
- Keyboard navigation: ArrowRight/ArrowDown = next, ArrowLeft/ArrowUp = prev
- URL hash for direct slide access: `#slide-5`
- No transitions/animations — instant cut between slides

## Libraries

| Library | Purpose | Version |
|---------|---------|---------|
| recharts | Charts (histograms, boxplots, bar charts) | latest |
| lucide-react | Icons (arrows, chart icons) | latest |
| tailwindcss | All styling | v4 (already installed) |

**NOT using**: react-bits, framer-motion, react-type-animation, react-countup (user confirmed no animations)

## Chart Styling Rules

All recharts charts must be styled to match the slide's palette:
- No default blue/gray colors
- Bar fills use slide accent colors
- Grid lines at very low opacity (0.1)
- Axis text in General Sans, small (11-12px)
- No chart borders — charts sit inside rounded cards
- Responsive containers that fill their parent

## Implementation Priority

Build in this order:
1. Shared components (SlideShell, Texture, StatCard, InfoCard, fonts, palettes)
2. Slide viewer with keyboard navigation
3. Slides 01-04 (match the 4 original reference images exactly)
4. Slides 05-09 (match user's earlier slides)
5. Slides 10-17 (new designs following established patterns)
6. Charts integration with recharts
7. Polish pass — spacing, typography sizing, decorative placement

## Key Design Rules

1. **Typography MUST be massive** — if it doesn't feel uncomfortably large in the code editor, it's too small
2. **No gradients** — flat colors only
3. **Textures are full-surface** — when used, they cover the entire slide background
4. **Matte slides exist** — not everything is textured, ~50/50 split
5. **Every slide has its own emotional palette** — no two adjacent slides share the same dominant color
6. **Stats are the hero** — when a number is the point, it should be 100-200px
7. **Cards support, never dominate** — cards are secondary to the headline typography
8. **Faithful to examples** — when in doubt, look at the 4 reference images and match that energy
