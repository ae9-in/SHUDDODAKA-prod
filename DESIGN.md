---
name: Sacred Luminescence
colors:
  surface: '#10131c'
  surface-dim: '#10131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#e0e2ee'
  on-surface-variant: '#d0c5b2'
  inverse-surface: '#e0e2ee'
  inverse-on-surface: '#2d303a'
  outline: '#99907e'
  outline-variant: '#4d4637'
  surface-tint: '#e6c364'
  primary: '#e6c364'
  on-primary: '#3d2e00'
  primary-container: '#c9a84c'
  on-primary-container: '#503d00'
  inverse-primary: '#755b00'
  secondary: '#ffb689'
  on-secondary: '#512400'
  secondary-container: '#a34e00'
  on-secondary-container: '#ffdecb'
  tertiary: '#e3c476'
  on-tertiary: '#3d2e00'
  tertiary-container: '#c6a95d'
  on-tertiary-container: '#503d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe08f'
  primary-fixed-dim: '#e6c364'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#584400'
  secondary-fixed: '#ffdbc7'
  secondary-fixed-dim: '#ffb689'
  on-secondary-fixed: '#311300'
  on-secondary-fixed-variant: '#733500'
  tertiary-fixed: '#ffdf91'
  tertiary-fixed-dim: '#e2c375'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#584400'
  background: '#10131c'
  on-background: '#e0e2ee'
  surface-variant: '#31353e'
  bg-void: '#020407'
  bg-deep: '#050810'
  gold-pure: '#C9A84C'
  gold-shimmer: '#E8C97A'
  white-pure: '#FAFAFA'
  saffron-sacred: '#E8833A'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.15em
spacing:
  unit: 8px
  margin-page: 64px
  margin-mobile: 24px
  gutter: 32px
  section-gap: 128px
---

## Brand & Style

The design system embodies a "Sacred Luminescence"—a sanctuary of visual calm that bridges the gap between ancient ritualistic gravity and contemporary precision. It is designed for a discerning audience seeking products that feel both timeless and technologically advanced.

The aesthetic follows a **Sacred Minimalist** movement. It takes the architectural restraint of high-end skincare (Aesop) and infuses it with the spiritual geometry of Rajasthani temple architecture. The UI is characterized by expansive "void" spaces, rhythmic symmetry, and tactile elements that suggest physical weight and divine craftsmanship. Interaction should feel deliberate and reverent, utilizing soft transitions that mimic the flicker of a flame or the slow movement of shadows across carved stone.

## Colors

The palette is anchored in the "Void"—a deep, layered darkness that provides a canvas for sacred illumination. 

- **The Deep Palette:** Use `#020407` for primary backgrounds and `#050810` for secondary containers or layered surfaces.
- **The Gold Standard:** `--gold-pure` is used for primary actions and critical iconography. `--gold-shimmer` is reserved for highlights and subtle gradients.
- **Saffron Accent:** Used sparingly as a "living" accent for active states or notifications, representing the heat of a ritual lamp.
- **Contrast:** Typography primarily uses `--white-pure` at varying opacities to maintain an ethereal, legible quality against the dark ground.

## Typography

The typographic hierarchy balances aristocratic tradition with modern clarity. 

- **Serif (Display):** EB Garamond (substituting for Cormorant Garamond for system compatibility) is the voice of the brand. Use it for storytelling, headings, and evocative quotes. For Devanagari script, use weight-matched traditional fonts to maintain the "sacred" character.
- **Sans-Serif (Body):** Hanken Grotesk (substituting for Jost) provides a clean, geometric counterpoint. It ensures readability in technical descriptions and navigation.
- **Styling:** Large headlines should use tighter letter-spacing for a sophisticated look, while small labels should be generously tracked out in uppercase to evoke a premium, editorial feel.

## Layout & Spacing

The layout philosophy is **Editorial and Expansive**. It prioritizes "The Breath"—wide margins and significant vertical gaps between sections to prevent the dark UI from feeling claustrophobic.

- **Grid:** A 12-column fixed grid on desktop (max-width 1440px) with 32px gutters. On mobile, a 4-column fluid grid.
- **Rhythm:** Use an 8px base unit. Section spacing should be aggressive (128px+) to create a sense of movement through a physical gallery or temple corridor.
- **Alignment:** Central alignment is preferred for hero moments; asymmetrical left-alignment is used for product details and long-form text.

## Elevation & Depth

Depth in this design system is achieved through light and translucency rather than traditional shadows.

- **Glassmorphism:** Use "Sacred Glass" containers for overlays and cards. These utilize a `backdrop-filter: blur(20px)` with a very low-opacity white or gold tint (`rgba(255, 255, 255, 0.03)`).
- **Inner Glow:** Instead of drop shadows, use subtle inner borders or box-shadows with a spread of 1px in `--gold-pure` at 20% opacity to simulate the "carved stone" edge catching a light source.
- **Tonal Layering:** Objects closer to the user are lighter in base color (shifting from `--bg-void` to `--bg-deep`).

## Shapes

The shape language is **Architectural and Sharp**. 

- **Primary Geometry:** 0px border radius (Sharp) is the standard for buttons, cards, and image containers to mimic the precision of cut stone and contemporary minimalist architecture.
- **Accents:** Only use circular shapes for functional icons or specific ritualistic elements (like a circular progress loader representing a mandala).
- **Dividers:** Horizontal rules must be hairline (0.5pt to 1pt) and should use a subtle gold-to-transparent gradient.

## Components

- **Buttons:** Primary buttons are sharp-edged with a 1px solid `--gold-pure` border. The background should be transparent, filling with a gold-to-saffron gradient only on hover. Text is always centered and tracked out.
- **Glassmorphic Cards:** Used for secondary information. These feature a heavy blur, a 0.5px border in white-pure (10% opacity), and no drop shadow.
- **Input Fields:** Minimalist underlines only. The label sits above the line in `label-caps`. The underline glows with a soft saffron pulse when focused.
- **Chips/Tags:** Small, sharp rectangles with a `--bg-deep` background and gold text.
- **Stone Textures:** Incorporate subtle CSS noise filters or SVG textures on `--bg-deep` surfaces to create the "carved stone" haptic effect without sacrificing clean lines.
- **Dividers:** Use "The Golden Thread"—a thin horizontal line that spans the container width, using a linear gradient: `transparent, #C9A84C, transparent`.