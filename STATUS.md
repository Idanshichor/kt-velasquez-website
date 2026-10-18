# Status: kt360 / website (ktvelasquez.com)

## Before you begin
- Branch `feature/premium-rebuild` (off main). Never commit to main. Push only to remote `live` and only when Idan asks.
- `npm install` then `npm run dev -- -p 3210`. Next.js 16 differs from older versions: read `node_modules/next/dist/docs/` first.
- Copy stays word for word. No em dashes in anything new. No payment code changes (Wompi links, plan picker).
- Audits live in `audit/` (01 visual, 02 copy, 03 SEO). Detailed history in `project_log.md`.
- Hub tools: GSAP + ScrollTrigger + Lenis (setup in `Websites/_shared/lenis/README.md`). No React Bits, no new installs beyond gsap and lenis.

## Where things stand (2026-10-18)
- Live site: https://www.ktvelasquez.com (Vercel, Katherine's account). Unchanged by this work.
- Audits done. Home page rebuilt on `feature/premium-rebuild` (2 commits). Not pushed, not deployed. Build clean, copy and Wompi links unchanged.
- Contact sheet: `audit/home-contact-sheet.png`. Run: `npm run dev -- -p 3210`.

## Task list
Audits
- [x] Visual audit
- [x] Copy audit (recommendations only)
- [x] SEO audit (recommendations only)

Foundation
- [x] Install gsap + lenis
- [x] Lenis + GSAP ticker provider, remove `scroll-smooth`, reduced-motion off
- [x] Motion helpers (reveal, line mask, word scrub, magnetic, star cursor)
- [x] Darker gold text token, min text sizes

Home page scenes
- [x] 1 Hero
- [x] 2 Pink banner
- [x] 3 Marquee + logos
- [x] 4 Quién soy
- [x] 5 About preview
- [x] 6 Method 360 (peak)
- [x] 7 Services (plan picker and links untouched)
- [x] 8 Newsletter
- [x] 9 Podcast
- [x] 10 Testimonials
- [x] 11 FAQ
- [x] 12 Final CTA + footer + nav

Checks
- [x] Reduced motion (headless Chrome): no pins, no splits, content static
- [ ] Real phone and Safari (not testable here)
- [ ] Lighthouse before/after
- [ ] Optional: count-up on the $250,000 testimonial
- [x] `npm run build` clean
- [x] Desktop and mobile check, reduced motion check
- [x] Spanish and English both
- [x] Plan dropdown and WhatsApp links still work

After approval
- [ ] Inner pages (/sobre-mi, /podcast, /gracias, /privacidad)
- [ ] Deploy (only when Idan says)

## Open items
- Idan: compare v1 and v2 previews; pick one. Inner pages after.
- Katherine: real results for hero and testimonials, credentials, podcast URLs.
- SEO phase 2 (English URLs, hreflang) waits for approval.

## Last changes
- 2026-10-18 (v2, branch `feature/premium-rebuild-v2`, off `feature/premium-rebuild`): second pass after Idan said the first felt almost unusable. Removed star cursor, reading line, all scroll pins (banner, method, testimonials), word-by-word scroll fade, magnetic buttons, velocity marquee, gold border sweep, podcast sound bars, floating CTA stars. Lenis lighter (lerp 0.16). Services: compact cards show feature labels only, "Ver todo lo que incluye" opens the full text; featured tier dark; swipe rail on phones; fixed doubled "Incluido en todas las sesiones:". Logos evened out. Desktop page height ~10,700 px (first pass ~17,000). Copy, Wompi links and plan picker unchanged. New UI labels only: "Ver todo lo que incluye / Ver menos" (EN "See everything included / Show less").
- 2026-10-18: home page rebuilt. Lenis + GSAP/ScrollTrigger/SplitText; sticky-based pins (banner, method, testimonials, desktop only); velocity marquee; mask reveals; star cursor + reading line; nav hides on scroll down; FAQ height via grid rows; services text raised to 12 px min, gold sweep on featured tier; `--color-brand-gold-deep` for gold text. Inner pages untouched (still old fade-up, now with smooth scroll and star cursor). Hero image left as in main.
- 2026-10-18: created audits, STATUS.md, branch.
