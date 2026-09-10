# SDD — Interior Design Web Studio Landing Page

## 1. Overview

A short, premium landing page for a boutique web design studio specializing in websites for interior design studios.

### Primary goal

Convert interior design studio owners into project inquiries.

### Core positioning

> **Your work deserves more than an Instagram grid.**

We create premium portfolio websites that help interior design studios look established, communicate their work clearly, and generate qualified inquiries.

---

## 2. Target User

### Ideal customer

Founder-led interior design studio with:

- 2–15 employees
- Strong residential portfolio
- Professional project photography
- Active Instagram presence
- Weak, outdated, or missing website
- Mid-to-high-end positioning
- UK, Australia, Ireland, or New Zealand as initial target markets

### Primary decision maker

Founder / Principal Designer / Studio Owner.

---

## 3. Conversion Goal

Primary CTA:

**START A PROJECT →**

CTA should lead to a simple inquiry form or contact email.

Secondary goal:

Get visitors to view the portfolio and understand the studio's specialization.

---

# 4. Page Structure

The page contains **6 sections**.

## Section 01 — Hero

### Content

Eyebrow:
`WEB DESIGN / INTERIOR STUDIOS`

Headline:

> **WEBSITES FOR INTERIOR DESIGN STUDIOS.**

Supporting copy:

> Premium portfolio websites designed to make exceptional studios look as good online as they do in real life.

CTA:

`START A PROJECT →`

### Visual

Large interior-design project image with small editorial metadata:

- PROJECT / 001
- RESIDENTIAL
- LOCATION
- YEAR

---

## Section 02 — Selected Work

Eyebrow:

`SELECTED WORK / 001—003`

Headline:

> **THE WORK SHOULD SPEAK FIRST.**

Display 3 projects.

Each project contains:

- Large image
- Project name
- Location
- Project type
- Year

Avoid conventional rounded cards.

---

## Section 03 — Problem / Positioning

Headline:

> **YOUR WORK DESERVES MORE THAN AN INSTAGRAM GRID.**

Supporting copy explains that exceptional projects should be presented with the same level of care online.

Use editorial imagery and annotations.

---

## Section 04 — What We Build

Eyebrow:

`THE SYSTEM`

Three capabilities:

### 01 / POSITION

Structure and content designed around the studio and ideal client.

### 02 / DESIGN

An art-directed digital portfolio built around the studio's projects.

### 03 / BUILD

Fast, responsive, maintainable website development.

Optional:

`AI-powered visitor assistance available.`

---

## Section 05 — Process

Four steps:

### 01 — DISCOVER

Understand the studio, projects and ideal client.

### 02 — DESIGN

Develop visual direction and website structure.

### 03 — BUILD

Turn the approved design into a responsive website.

### 04 — LAUNCH

Test, hand off and launch.

Display as a simple editorial timeline.

---

## Section 06 — Final CTA

Headline:

> **LET'S BUILD YOUR STUDIO'S NEXT ADDRESS ON THE INTERNET.**

CTA:

`START A PROJECT →`

Contact information underneath.

---

# 5. Visual Design System

## Design Direction

Use the uploaded reference image as visual inspiration.

Desired characteristics:

- Editorial
- Architectural
- Art-directed
- Minimal
- Slightly experimental
- Premium
- Asymmetric
- Print/editorial inspired

Do not directly copy the reference's layouts or artwork.

---

## Colors

### Background

Warm off-white / paper.

### Text

Near-black / charcoal.

### Accent

Restrained cobalt / royal blue.

Use the accent only for:

- Links
- Arrows
- Annotations
- Small highlights
- Occasional typography emphasis

Avoid gradients.

---

## Typography

Use two typefaces:

### Display

Distinctive editorial serif or grotesk.

Used for:

- Hero
- Major section headings
- CTA

### Utility

Clean sans-serif.

Used for:

- Body copy
- Metadata
- Navigation
- Labels
- Buttons

Use dramatic type scale differences.

---

# 6. Layout System

Use an editorial grid rather than conventional centered layouts.

Characteristics:

- Asymmetrical compositions
- Large whitespace
- Thin rules
- Image/text overlaps
- Large typography
- Small metadata labels
- Handwritten-style arrows/underlines
- Intentional grid breaks

The design should feel experimental but remain highly usable.

---

# 7. Components

Required reusable components:

```text
Navbar
Hero
ProjectShowcase
ProjectMeta
SectionLabel
CapabilityBlock
ProcessTimeline
EditorialAnnotation
CTASection
Footer
```

### ProjectShowcase

Props:

```text
projectName
location
type
year
image
description (optional)
```

### CapabilityBlock

Props:

```text
number
title
description
```

### ProcessTimeline

Props:

```text
stepNumber
title
description
```

---

# 8. Content Model

Projects should be structured so additional projects can be added without rebuilding the page.

Example:

```js
{
  name: "Casa No. 07",
  location: "London",
  type: "Residential",
  year: "2026",
  image: "/images/project-01.webp"
}
```

---

# 9. Responsive Behavior

## Desktop

- Full editorial grid
- Large typography
- Asymmetric compositions
- Large project imagery
- Visible annotations

## Tablet

- Reduce typography scale
- Preserve asymmetric layouts where practical
- Simplify overlapping elements

## Mobile

Do not simply stack desktop sections.

Instead:

- Rebuild compositions for narrow screens
- Keep project images prominent
- Reduce decorative annotations
- Prevent horizontal overflow
- Maintain strong typography hierarchy
- Keep CTA easily accessible

---

# 10. Interaction

Animations should be subtle.

Allowed:

- Image reveal on scroll
- Gentle hover movement
- Link underline animation
- Small metadata transitions
- Smooth section entrance

Avoid:

- Excessive parallax
- Large page transitions
- Constant movement
- Heavy 3D effects
- Distracting animations

The site should feel calm and sophisticated.

---

# 11. Performance

Priorities:

1. Fast initial load
2. Optimized images
3. Responsive images
4. Minimal JavaScript
5. Lazy-load below-the-fold imagery
6. Avoid unnecessary animation libraries

Use WebP/AVIF where supported.

---

# 12. Accessibility

Required:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Sufficient text contrast
- Alt text for meaningful images
- Proper heading hierarchy
- Accessible buttons and links
- Respect reduced-motion preferences

---

# 13. SEO

Basic SEO only.

Required:

- Descriptive title
- Meta description
- One H1
- Proper H2 hierarchy
- Descriptive image alt text
- Open Graph metadata
- Favicon
- Clean URL structure

Example title:

`Premium Websites for Interior Design Studios | [Studio Name]`

---

# 14. Lead Capture

The primary CTA should open a simple inquiry form.

Required fields:

- Name
- Studio name
- Email
- Website / Instagram
- Location
- What are you looking for?
- Approximate project budget
- Message

Keep the form short.

---

# 15. Technical Recommendation

Build as a lightweight modern frontend.

Suggested stack:

- React
- Vite
- CSS / Tailwind
- Framer Motion only if animation complexity requires it

Use reusable components and keep the project easy to modify for future portfolio projects.

---

# 16. Out of Scope

Do NOT add:

- Pricing section
- Blog
- Large team section
- Testimonials carousel
- FAQ
- Social media management
- Ads
- Branding services
- Marketing services
- Large service catalog
- Client portal
- CMS unless needed for the initial portfolio

The first version should remain focused on one objective:

> **Make an interior design studio owner want to start a project.**

---

# 17. Success Criteria

The landing page is successful if a first-time visitor can understand within ~10 seconds:

1. What we do
2. Who we do it for
3. Why the work is different
4. What the work looks like
5. How to start a project

The site should feel like a **small premium creative studio**, not a generic freelancer portfolio or SaaS landing page.
