---
name: Obsidian Precision
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#c8c6c7'
  on-secondary: '#313031'
  secondary-container: '#4a494a'
  on-secondary-container: '#bab8b9'
  tertiary: '#c8c6c8'
  on-tertiary: '#303032'
  tertiary-container: '#929092'
  on-tertiary-container: '#2a292b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#e5e2e3'
  secondary-fixed-dim: '#c8c6c7'
  on-secondary-fixed: '#1c1b1c'
  on-secondary-fixed-variant: '#474647'
  tertiary-fixed: '#e4e2e4'
  tertiary-fixed-dim: '#c8c6c8'
  on-tertiary-fixed: '#1b1b1d'
  on-tertiary-fixed-variant: '#474649'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The brand personality is rooted in the intersection of high-end dental craftsmanship and cutting-edge digital technology. It targets dental clinic owners and restorative surgeons who value precision, sterilization, and aesthetic perfection.

The design style is **Corporate / Modern** with a **Glassmorphic** twist. It utilizes an "Almost Black" foundation to evoke a sense of premium studio environments, where digital scans and porcelain work are the focal points. The interface should feel like a high-end medical diagnostic tool—authoritative, sterile yet sophisticated, and technologically advanced. The emotional response is one of absolute trust in technical mastery.

## Colors
The palette is dominated by **Obsidian** (#0B0B0C), providing a deep, non-distracting background that allows dental photography to pop. 

- **Primary (Electric Violet):** Used sparingly for critical CTAs, active states, and glowing accents to represent the "digital" nature of the work.
- **Surface (Carbon):** A secondary dark grey (#1E1E20) used to define container boundaries and cards.
- **Accents:** Subtle radial gradients should transition from the primary purple to transparent to create "glow" effects behind key portfolio pieces.
- **Text:** High-contrast white for headings, and a muted slate (#94A3B8) for secondary metadata to maintain visual hierarchy.

## Typography
The typographic system balances the geometric strength of **Montserrat** for headlines with the functional clarity of **Inter** for technical data and body copy.

Headlines should use tight letter-spacing to feel "engineered." Display styles are reserved for project titles and major section headers. For technical specs (e.g., material types, micron precision levels), use the **Label-SM** style with uppercase tracking to emulate a technical blueprint or digital readout.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to ensure large-scale dental photography is framed correctly within the center of the viewport. 

- **Desktop:** 12-column grid with wide 64px margins to create a "gallery" feel.
- **Mobile:** 4-column fluid grid with 16px margins.
- **Rhythm:** An 8px linear scale governs all padding and margins. Use larger gaps (80px+) between sections to allow the dark background to provide visual "breathing room," emphasizing the premium nature of the portfolio.

## Elevation & Depth
In this dark UI, depth is created through **Tonal Layers** and **Glow Accents** rather than traditional shadows.

- **Base Level:** The background (#0B0B0C).
- **Mid Level:** Cards and sections use a slightly lighter fill (#1E1E20) with a 1px solid border (#2D2D30).
- **High Level:** Elements that require focus use a **Glassmorphic** effect: 40% opacity background with a 20px backdrop-blur and a subtle top-down linear gradient border (White at 10% to Transparent).
- **Glows:** Primary buttons and active states should emit a soft, 15px-radius outer glow using the Primary Violet color at 30% opacity.

## Shapes
The design system utilizes **Soft** roundedness (4px) to maintain a professional, surgical precision. Avoid fully rounded "pill" shapes except for very small decorative tags.

The 4px radius should be applied to all input fields, buttons, and cards. This sharp-but-refined edge communicates a "machined" quality consistent with dental milling and 3D printing technology.

## Components
- **Buttons:** Primary buttons use a solid Primary Violet fill. On hover, they gain a subtle violet outer glow. Secondary buttons use a "Ghost" style with a 1px violet border.
- **Portfolio Cards:** Feature a full-bleed image with a Glassmorphic overlay at the bottom for the project title. The card border should be a subtle #2D2D30.
- **Inputs:** Dark backgrounds (#0B0B0C) with a 1px border. On focus, the border transitions to Primary Violet with a soft inner glow.
- **Chips/Tags:** Used for "Material Types" (e.g., Zirconia, E-Max). These should be small, 4px rounded boxes with a dark grey background and Montserrat Label-SM text.
- **Case Study Comparison:** A specialized "Before/After" slider component is essential. Use a vertical violet line with a circular handle to divide the two states of a dental restoration.
- **Status Indicators:** Small glowing dots (Primary Violet) to indicate "Available for Commissions" or "Digital Workflow Active."
