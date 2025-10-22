# Estate.elixflare.com — Real‑Estate Brochure (Next.js 14 + Tailwind + TS)

**Frontend‑only** brochure for a Port Elizabeth (Gqeberha) real‑estate agency. Uses **Next.js 14 (App Router)**, **React 18**, **Tailwind 3**, **TypeScript**, and a single `data/site.json` as the source of truth for theme, copy and listings.

> **Note on versions**: We pin Next.js to `14.2.10`. You may see a **"Next.js outdated"** warning at build time — this is expected and can be **ignored**.

## Quickstart
```bash
npm install
npm run dev
# open http://localhost:3030
```

## Architecture (fixed)
```
app/
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
  manifest.json
  globals.css
  (optional) about/page.tsx
  (optional) contact/page.tsx
  (required) listings/page.tsx
components/
  layout/{Header.client.tsx, Footer.tsx}
  sections/{Hero.tsx, ValueProps.tsx, Features.tsx, PortfolioOrMenu.tsx, Testimonials.tsx, FAQ.tsx, CTA.tsx}
  ui/{Button.tsx, Card.tsx, Container.tsx, Badge.tsx, Input.tsx}
  widgets/{Carousel.client.tsx, Accordion.tsx, Tabs.tsx, Toast.client.tsx, Modal.client.tsx, QrCode.client.tsx, MapEmbed.client.tsx, Reveal.client.tsx}
data/site.json
lib/utils.ts
public/{favicon.ico, logo/logo.png, og-image.png, icons/*, images/*}
```

### Navbar Rule (strict)
Limit to **3–4 items** even if more exist in `site.json`. Default:
- Home (`/`)
- Listings (`/listings`)
- About (`/about`) (optional)
- Contact (`#contact`) preferred

### Client vs Server split
- Any file using React hooks (`useState`, `useEffect`) or DOM events **must** be a separate `*.client.tsx` with `'use client'` on **line 1**.
- Server components contain **no** browser‑only APIs.

### Data & Theming
Edit everything in `data/site.json`:
- `theme` (CSS variables -> applied inline on `<body>`)
- `layout` (container max width, section paddings, hero slider height)
- `nav`, `hero`, `valueProps`, `features`
- `listings` (add/change items; prices in rounded ZAR)
- `contact` (phone, WhatsApp, email, address, `mapQuery`, `mapEmbedSrc`)
- `org` for brand/domain/social

### Hero Slider & Effects
- `sections/Hero.tsx` uses `widgets/Carousel.client.tsx` (autoplay 5–6s, loop, swipe/drag, keyboard, pause on hover; respects `prefers-reduced-motion`).
- Hover style: **outline‑glow** in `--brand` + subtle **zoom** + **deeper shadow**.
- Scroll reveal via `Reveal.client.tsx` (disabled for reduced motion).

### QR & MAP
- `QrCode.client.tsx` renders a QR pointing to `site.org.domain + site.routes.listingsRoot` with an option to **Download PNG**.
- `MapEmbed.client.tsx` is implemented exactly per spec. CSS for responsive `iframe` in `globals.css`.

### SEO & Essentials
- `metadataBase` is `https://Estate.elixflare.com`.
- `robots.ts` and `sitemap.ts` include `/` and `/listings` (and optional `/about`).
- `manifest.json` pulls theme color from `site.theme.brand`.
- `public/favicon.ico` **exists** and is referenced.

### Replace Assets
- Replace images in `public/images/*` and the logo in `public/logo/logo.png`.
- Keep descriptive `alt` text for accessibility.

### Lighthouse Targets
Aim for **≥ 90** on Performance, Accessibility, Best Practices and SEO.
- Use compressed images.
- Avoid heavy third‑party scripts.
- Respect reduced motion preferences.

---

**Disclaimer**: Prices, availability and details are subject to change without notice. Images may be illustrative. This repository provides informational content only — not legal or financial advice.