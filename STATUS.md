# Status: kt360 / website (ktvelasquez.com)

## Before you begin
- Branch `feature/premium-rebuild` (off main). Never commit to main. Push only to remote `live` and only when Idan asks.
- `npm install` then `npm run dev -- -p 3210`. Next.js 16 differs from older versions: read `node_modules/next/dist/docs/` first.
- Copy stays word for word. No em dashes in anything new. No payment code changes (Wompi links, plan picker).
- Audits live in `audit/` (01 visual, 02 copy, 03 SEO). Detailed history in `project_log.md`.
- Hub tools: GSAP + ScrollTrigger + Lenis (setup in `Websites/_shared/lenis/README.md`). No React Bits, no new installs beyond gsap and lenis.

## Where things stand (2026-10-18)
- Live site: https://www.ktvelasquez.com (Vercel, Katherine's account). Unchanged by this work.
- Audits done and waiting for Idan's read. Rebuild started on the branch.

## Task list
Audits
- [x] Visual audit
- [x] Copy audit (recommendations only)
- [x] SEO audit (recommendations only)

Foundation
- [ ] Install gsap + lenis
- [ ] Lenis + GSAP ticker provider, remove `scroll-smooth`, reduced-motion off
- [ ] Motion helpers (reveal, line mask, word scrub, magnetic, star cursor)
- [ ] Darker gold text token, min text sizes
- [ ] Lighter hero and About photos (keep originals)

Home page scenes
- [ ] 1 Hero
- [ ] 2 Pink banner
- [ ] 3 Marquee + logos
- [ ] 4 Quién soy
- [ ] 5 About preview
- [ ] 6 Method 360 (peak)
- [ ] 7 Services (plan picker and links untouched)
- [ ] 8 Newsletter
- [ ] 9 Podcast
- [ ] 10 Testimonials
- [ ] 11 FAQ
- [ ] 12 Final CTA + footer + nav

Checks
- [ ] `npm run build` clean
- [ ] Desktop and mobile check, reduced motion check
- [ ] Spanish and English both
- [ ] Plan dropdown and WhatsApp links still work

After approval
- [ ] Inner pages (/sobre-mi, /podcast, /gracias, /privacidad)
- [ ] Deploy (only when Idan says)

## Open items
- Idan: star cursor yes/no; inner pages same pass or after.
- Katherine: real results for hero and testimonials, credentials, podcast URLs.
- SEO phase 2 (English URLs, hreflang) waits for approval.

## Last changes
- 2026-10-18: created audits, STATUS.md, branch.
