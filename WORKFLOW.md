# Hotel Demo Site — Project Workflow

## Stack
- **Google AI Studio (Imagen 3)** — all visual assets (free, 2K output)
- **Claude Code** — site build + antigravity scroll animations (GSAP)
- **GitHub** — new repo, deploy live

## Steps

### Step 1 — Define Requirements
Alex provides bullet points: key things he wants in the site (feel, sections, interactions, priorities).

### Step 2 — Claude Design Skill
Create a custom Claude skill for high-end, clean design to guide all UI/UX decisions consistently throughout the build.

### Step 3 — Imagen 3 Prompts (Hero + Section Images)
Craft image generation prompts for Google AI Studio. Hero image is the aerial establishing shot of the hotel. Section images are generated during the build as each section is built.

### Step 4 — Build & Go Live
Integrate all assets, implement scroll animations with GSAP, push to live URL, ready for TikTok/LinkedIn content.

## Status
- [x] Step 1 — Requirements bullet points
- [x] Step 2 — Design skill created
- [ ] Step 3 — Hero image generated
- [ ] Step 4 — Site live

## Asset Strategy
- **Exploded view effect** → built in code with GSAP (scroll drives the animation)
- **Images** → Imagen 3 via Google AI Studio, downloaded to assets/
- **Video** → not needed; scroll mechanic IS the cinematic experience
