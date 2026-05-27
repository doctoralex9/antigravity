# Greek Luxury Hotel — Design Skill

You are acting as a senior UI/UX designer for a world-class Greek luxury summer island hotel demo website. Every decision must reflect international luxury standards. Reference: Casa Angelina (casangelina.com) — take their restraint and add cinematic motion.

---

## Core Philosophy
Luxury is defined by what is NOT there. Generous whitespace, minimal decoration, every element intentional. The site should feel like arriving at the hotel — calm, elevated, unhurried.

---

## Color System

```
--white:        #FFFFFF
--off-white:    #F8F6F2   ← warm, not sterile
--aegean:       #0E3D6E   ← deep Greek sea blue (primary accent)
--aegean-light: #1A6BA0   ← lighter blue for hover states
--sand:         #D9C9A8   ← warm sand, used sparingly
--terracotta:   #B5603A   ← minimal use, warmth only
--text-primary: #1A1A1A   ← near-black, never pure black
--text-muted:   #6B6B6B   ← secondary text
--overlay:      rgba(14, 61, 110, 0.35) ← aegean tint over images
```

**Rules:**
- Background is always --white or --off-white
- Color lives in photography, not in UI elements
- Aegean blue only for CTAs, active states, and key accents
- Never use gradients except on the scroll overlay transitions

---

## Typography

**Display font:** `Cormorant Garamond` (Google Fonts) — serif, elegant, used for all headlines and section titles
**Body font:** `Inter` (Google Fonts) — clean sans-serif, used for all body text, navigation, labels

```
--font-display: 'Cormorant Garamond', Georgia, serif
--font-body:    'Inter', system-ui, sans-serif

/* Scale */
--text-hero:    clamp(3.5rem, 8vw, 7rem)    /* hero headline */
--text-title:   clamp(2rem, 4vw, 3.5rem)    /* section titles */
--text-subtitle:clamp(1.25rem, 2vw, 1.75rem)/* taglines */
--text-body:    1rem                         /* body copy */
--text-label:   0.75rem                      /* labels, caps */

/* Style rules */
letter-spacing: 0.04em on display fonts
letter-spacing: 0.12em on uppercase labels
line-height: 1.15 for headlines, 1.7 for body
Taglines: always lowercase italic, Cormorant Garamond
Labels/nav: uppercase, Inter, tracked out
```

---

## Spacing System

```
--space-xs:  0.5rem   (8px)
--space-sm:  1rem     (16px)
--space-md:  2rem     (32px)
--space-lg:  4rem     (64px)
--space-xl:  8rem     (128px)
--space-2xl: 14rem    (224px)  ← section breathing room
```

**Rule:** Between major sections, use --space-2xl minimum. Luxury breathes.

---

## Layout Grid

```
max-width: 1440px, centered
padding: 0 clamp(1.5rem, 5vw, 6rem)
content columns: 12-column grid
image-to-text ratio: 60/40 or 70/30 — images always dominate
```

---

## Scroll & Animation System (Antigravity)

The entire site is a cinematic walk-through. Scroll drives the experience.

**Journey order:**
1. Hero — aerial exterior of hotel (exploded view intro)
2. Arrival — hotel entrance, outdoor grounds
3. Outdoor Facilities — pools, pool bar, courts
4. Indoor Spaces — lobby, cafe-bar, restaurant
5. Rooms & Suites — luxury interiors
6. Amenities — gym, sauna, spa
7. Rooftop — rooftop bar, panoramic views
8. Contact / Book

**Animation principles:**
- Elements enter from opacity: 0 → 1 combined with Y-axis translate (40px → 0)
- Easing: cubic-bezier(0.16, 1, 0.3, 1) — ease-out expo, feels physical
- Duration: 0.9s–1.2s for section reveals, never faster
- Stagger: 0.15s between sibling elements
- Scroll-triggered: use IntersectionObserver (threshold: 0.15)
- Parallax: background images move at 0.4x scroll speed
- The "exploded view" hero: elements float apart on load, reassemble as user scrolls in

**What NOT to animate:**
- Navigation
- Text that needs to be read immediately
- Booking CTAs

---

## Component Patterns

### Section Header
```
[label — uppercase, tracked, --text-muted]
[Title — Cormorant Garamond, --text-title, --text-primary]
[tagline — lowercase italic, --text-subtitle, --text-muted]
max-width: 640px, left-aligned (never centered on desktop)
```

### Cards (Rooms, Facilities)
```
image: aspect-ratio 3/4 (portrait) for rooms, 16/9 for facilities
hover: image scales to 1.04, transition 0.6s ease
title below image, no borders, no shadows
CTA: text link with underline animation, not a button box
```

### Full-bleed Sections
```
100vw wide, image as background
text overlaid with --overlay color
min-height: 80vh
```

### Navigation
```
position: fixed, top
background: transparent → rgba(255,255,255,0.92) blur(12px) on scroll
logo: left, Cormorant Garamond
links: uppercase Inter, 0.75rem, tracked
CTA "Book Now": aegean background, white text, no border-radius (square)
```

---

## Photography & Imagery Rules

- All images must feel like editorial photography, not stock
- Dominant colors in photos: white, blue, warm neutrals
- No busy or colorful interiors — Greek summer = clean and bright
- Lifestyle shots: adults, elegant, unhurried
- Always show the sea or sky in at least 30% of images
- Rooms: natural light, linens in white or sand tones

---

## What to Avoid

- Drop shadows on UI elements
- Border radius > 4px (luxury is sharp, not bubbly)
- Bright colors in the UI (color lives in photos only)
- Centered text on desktop (left-aligned is more confident)
- Animations that bounce or overshoot
- More than 2 fonts
- Any element that feels "templated" or generic
- Carousel dots (use prev/next text arrows instead)
