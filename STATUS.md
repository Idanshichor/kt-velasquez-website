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
- 2026-10-19 (v7 logo pink, branch `feature/premium-rebuild-v7-logo-pink`, commit 151f7e5): Idan disliked Hola, soy Katherine and the doubled 360. Method shows 360 once, centered script inside the orbit circle. Hero tag is a kit eyebrow, h1 uses .kt-title, direccion line on a logo-pink strap with black text. About rebuilt 5/7: photo in kt-card with pink strap title, rule + lead + Scrub italic heading. Preview: https://kt-velasquez-website-9fio1163b-ktvelasquez.vercel.app
- 2026-10-18 (v7, branch `feature/premium-rebuild-v7`, off v6): Idan asked to redo the home with the KT360 video design kit (`ds-bundle`, skill kt360-motion-overlay). Titles now kit-style (`.kt-title`: Playfair uppercase, tight), script only for 1-3 words, lower-third eyebrows (`.kt-eyebrow` pink bar), short gold rules (`.kt-rule`). Offset-shadow cards from v6 replaced by soft kit cards. Colour follows kit meaning: Diagnóstico purple (before), Method gold (builds), marquee magenta (breaks), podcast + CTA pink (recovers), statement/services/testimonials black (holds), about/logos/newsletter/FAQ white (structures). Fixed a phone overflow in the services panel (also present in v4-v6).
- 2026-10-18 (v6, branch `feature/premium-rebuild-v6`, off v5): Idan found color contrast and component types dull. Full-strength section colors (hot pink marquee + Method 360, gold Diagnóstico + newsletter, pink podcast, black services/testimonials, white about/FAQ/logos). New shared components in globals.css + scrub.tsx: `.kt-card` (1.5px black outline, solid 6px offset shadow, `--kt-shadow` to recolor) and `KtCta` (pill + round star badge, tones dark/gold/pink) used in hero, Diagnóstico, podcast. FAQ open item turns pink with offset shadow. Payment buttons in the services panel left as they were.
- 2026-10-18 (v5 update): Idan disliked v4's hero, Diagnóstico and Hola soy Katherine. Hero intro now a calm settle (photo eases from slight zoom, words float up in sequence). Diagnóstico back to v3 photo layout with the lit headline. Hola, soy Katherine: big pink script title, lead paragraph, then the pillars paragraph lights up word by word in large italic serif.
- 2026-10-18 (v5, branch `feature/premium-rebuild-v5`, off v4): Idan said "para quienes" and "deja de improvisar" speak most to the brand, so their language spreads: Diagnóstico headline lights up word by word with script pink "¿qué sigue?"; Soluciones Estratégicas on a black block with big type + swaying gold star, pink active tab; testimonials on black with a pink quote card; newsletter heading bigger with a gold star on an outlined card.
- 2026-10-18 (v4, branch `feature/premium-rebuild-v4`, off v3): Idan's notes on v3. Nav no longer hides on scroll. Services rebuilt as 3 tabs (number, subtitle, title, price) + one detail panel with full feature text and a pink price side panel (plan picker unchanged). Hero intro: photo opens from a framed window, name letters settle from blur, gold rule draws, slow breathing zoom after. Podcast sound bars restored from v1. Testimonials: one-at-a-time slider (arrows, swipe, progress), opens on the $250,000 quote with that figure in gold. FAQ: numbered cards beside a sticky title. Method orbit hidden below 1024 px. Diagnóstico: arch photo, turning brand badge, drawn underline. Hola, soy Katherine: photo + 360 badge, pink marker on the three pillars. New UI words only: Anterior/Siguiente (aria labels).
- 2026-10-18 (v3, branch `feature/premium-rebuild-v3`, off v2): Idan found v2 too plain and pointed at the Mango site. Borrowed Mango patterns in KT colors: banner as a black statement with scroll-lit words and swaying gold star; marquee moves only with scroll (Playfair italic on pink); Method 360 as an orbit (nodes light up per pillar) beside sticky stacked cards (desktop with room only, no pin); service features as tappable pills that grow into the full sentence (FLIP), tier 3 inclusions as the last pill; closing CTA full-bleed pink with turning orbit. About section now white. Desktop height ~12,300 px. Copy, Wompi links, plan picker unchanged.
- 2026-10-18 (v2, branch `feature/premium-rebuild-v2`, off `feature/premium-rebuild`): second pass after Idan said the first felt almost unusable. Removed star cursor, reading line, all scroll pins (banner, method, testimonials), word-by-word scroll fade, magnetic buttons, velocity marquee, gold border sweep, podcast sound bars, floating CTA stars. Lenis lighter (lerp 0.16). Services: compact cards show feature labels only, "Ver todo lo que incluye" opens the full text; featured tier dark; swipe rail on phones; fixed doubled "Incluido en todas las sesiones:". Logos evened out. Desktop page height ~10,700 px (first pass ~17,000). Copy, Wompi links and plan picker unchanged. New UI labels only: "Ver todo lo que incluye / Ver menos" (EN "See everything included / Show less").
- 2026-10-18: home page rebuilt. Lenis + GSAP/ScrollTrigger/SplitText; sticky-based pins (banner, method, testimonials, desktop only); velocity marquee; mask reveals; star cursor + reading line; nav hides on scroll down; FAQ height via grid rows; services text raised to 12 px min, gold sweep on featured tier; `--color-brand-gold-deep` for gold text. Inner pages untouched (still old fade-up, now with smooth scroll and star cursor). Hero image left as in main.
- 2026-10-18: created audits, STATUS.md, branch.
- 2026-10-19 (branch `feature/services-page-mango`): Added /servicios page and redesigned home services as a Mango-style numbered list. Copy, prices and Wompi links unchanged (moved to /servicios). Open: Idan to review preview.
- 2026-10-20: Per Idan: home rows open a bubble, /servicios shows one service at a time, new service card. Same copy/prices/Wompi links.
- 2026-10-22: Private intake form at /empecemos (branch feature/intake-form, Vercel preview only). Details in project_log.md.
- 2026-10-22 (branch `feature/en-routes-hreflang`): SEO plan step 2.3. English now lives at real URLs: /en, /en/about, /en/services, /en/podcast, /en/privacy (English slugs, per Idan), each with English title, description and hreflang (es, en, x-default = Spanish). Sitemap lists both languages. ES/EN toggle now changes the URL; old ?lang=en links redirect (308) to /en. Em dashes removed from the Sobre mí and Servicios titles. Open: the services copy (services-data.ts) has no English yet, so /en/services and the home services list still show Spanish service text. /gracias and /empecemos keep the old toggle (noindex).
