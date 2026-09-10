# Interior Design Website Template

A conversion-optimised website template for high-end residential interior designers. Built to turn browsing homeowners into booked discovery calls.

## Quick Start

1. Open `index.html` in your browser — no build tools required
2. Replace placeholder images in `assets/images/` with real photography
3. Update contact details (search for `PHONE`, `hello@vossstudio.com`, etc.)
4. Deploy to any static hosting (Netlify, Vercel, GitHub Pages, shared hosting)

## File Structure

```
interior-demo/
├── index.html          # Homepage — all 17 sections
├── projects.html       # Portfolio listing with filters
├── project.html        # Individual project case study
├── about.html          # Designer biography & credentials
├── contact.html        # Dedicated contact page with multi-step form
│
├── assets/
│   ├── css/
│   │   └── style.css   # Complete design system & styles
│   ├── js/
│   │   ├── main.js     # Nav, scroll reveals, sticky bar, exit-intent modal
│   │   ├── slider.js   # Before/after comparison slider
│   │   ├── form.js     # Multi-step contact form
│   │   └── filters.js  # Portfolio grid filtering
│   ├── images/         # Project & portrait photography
│   ├── icons/          # SVG icons (currently inline)
│   └── videos/         # Hero video (if applicable)
│
└── README.md
```

## Design System

All design tokens are defined as CSS custom properties in `style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--ivory` | `#F5F2EC` | Page background |
| `--chalk` | `#FDFCFA` | Cards, elevated surfaces |
| `--ink` | `#1A1916` | Primary text |
| `--stone` | `#7A776F` | Secondary text |
| `--dust` | `#C8C4BB` | Borders, dividers |
| `--bronze` | `#9C7B4E` | Accent, CTAs |
| `--bronze-light` | `#EDE5D8` | Light accent backgrounds |
| `--night` | `#1E1C18` | Dark section backgrounds |

**Fonts:** Cormorant Garamond (display) + DM Sans (body) — loaded from Google Fonts.

**Breakpoints:** 480px → 768px → 1024px → 1200px (mobile-first).

## Customisation Checklist

### Must Replace

- [ ] Studio name ("Voss Studio" → your studio name)
- [ ] Designer name ("Elara Voss" → your name)
- [ ] All images in `assets/images/` with real project photography
- [ ] WhatsApp number (`+447700000000`)
- [ ] Email address (`hello@vossstudio.com`)
- [ ] Instagram handle (`@voss.studio`)
- [ ] Pinterest handle (`/voss-studio`)
- [ ] Stats (47 projects, 12 years, 8 cities)
- [ ] Testimonial names and quotes
- [ ] GA4 measurement ID (`G-XXXXXXXX` in `<head>`)

### Integration Placeholders

- **Calendly**: Look for `<!-- Wire Calendly embed here -->` in the contact section
- **Google Maps**: Look for `<!-- Replace src with Google Maps Embed API URL -->`
- **Instagram API**: Look for the comment block in the Instagram section of `index.html`
- **Newsletter**: Form submissions currently show an alert — connect to Mailchimp/ConvertKit
- **Contact Form**: Form submissions log to console — connect to your backend or Formspree

### Optional Customisation

- [ ] Scarcity banner text ("Currently accepting 3 new projects for early 2027")
- [ ] Budget ranges in the contact form (£20–50k, £50–100k, £100k+)
- [ ] Press logos (currently text-based — replace with SVG logos)
- [ ] Journal articles (add real blog content)

## Technical Notes

- **No build tools** — pure HTML, CSS, JavaScript
- **No dependencies** — only Google Fonts external resource
- **Semantic HTML5** with proper heading hierarchy
- **Accessible**: keyboard-navigable, ARIA labels, focus states, `prefers-reduced-motion` respected
- **Mobile-first** responsive design
- **No box shadows** — depth from background colour layering
- **Motion**: scroll reveals via IntersectionObserver, all transitions respect `prefers-reduced-motion`

## Deployment

This is a static site. Deploy anywhere:

```bash
# Netlify
netlify deploy --prod --dir=.

# Vercel
vercel --prod

# GitHub Pages
# Push to repo, enable Pages in Settings
```

## Conversion Features

- **Sticky CTA bar** — appears after 50% scroll depth
- **Exit-intent modal** — desktop: cursor leaves viewport; mobile: 3-min inactivity
- **Multi-step form** — starts at lowest commitment (project type), escalates to contact details
- **WhatsApp bubble** — persistent, bottom-right
- **Scarcity banner** — calm, factual availability statement
- **Style quiz CTA** — zero-commitment lead capture

## Browser Support

- Chrome 80+
- Firefox 80+
- Safari 14+
- Edge 80+

## License

Template code is provided as-is. Replace all placeholder content before publishing.
