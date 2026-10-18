# SEO audit (recommendations only)

Date: 2026-10-18. Builds on the earlier `SEO-AUDIT.md` (June 2026). Rebuild rule: the rebuild must not lose any of the SEO work already shipped, and must not change copy.

## Already in place (keep)

- Sitemap with www URLs, robots.txt, canonical tags, security headers, apex to www 308 redirect.
- Page-specific titles on `/sobre-mi`, `/podcast`, `/privacidad`, `/gracias`.
- JSON-LD on home (WebSite + Person).
- Descriptive hero alt text on `/sobre-mi` and `/podcast`.
- Vercel Analytics.

## Findings

### High

1. **English is not indexable.** Language is client state (`useState("es")`, localStorage, `?lang=` parameter). Google sees only Spanish. Fix: real URLs per language (`/en/...`) with `hreflang`. This is a structural change and doubles the pages. Recommended, but only after the visual rebuild lands. The earlier audit parked it as Phase 2 pending Katherine's positioning approval.
2. **Hidden H1 keyword text** (`sr-only` span in the H1). Search engines may treat it as hidden text. Safer: keep the visible H1 as the name, put the keyword phrase in a visible sub-heading or the hero description. Needs a copy decision.
3. **Hero image is `unoptimized`** (245 KB, kept on purpose to avoid blur). The big source photos go through `next/image`, so visitors do not download the originals. Check LCP with Lighthouse after the rebuild; only change images if the numbers say so.

### Medium

4. **No Organization or Service schema.** Add `ProfessionalService` with the three service tiers (no prices in markup unless Katherine wants them), `FAQPage` for the FAQ, `PodcastSeries` for `/podcast`, `BreadcrumbList` for inner pages.
5. **Home page has one OG image for everything** (`KT_Hero.webp`, not 1200x630). Make a proper 1200x630 share image per page.
6. **Podcast platform links point to platform home pages**, not the show (earlier item #14). Waiting on launch URLs.
7. **`/sobre-mi` has no credentials section** (earlier item #15). Credentials are a trust and E-E-A-T signal. Waiting on Katherine.
8. **FAQ content is client-rendered via the translation context.** Server HTML for Spanish should contain the text. Check with "view source" after the rebuild. Moving to server components for text blocks (animations on top) fixes it.

### Low

9. Web3Forms access key is hard-coded in `web3-form.tsx`. Public by design, but move to an env var (earlier item #16). Not touched in this rebuild unless asked.
10. `/logos` page (1,346 lines) returns 404 in production. Dead weight; leave unless Idan says remove.
11. Unused dependencies (`@21st-sdk/*`, `framer-motion`, `ai`, `@ai-sdk/react`, `zod`, `/api/an-token` route). Do not remove without asking. Slows install, no SEO effect.

## What the rebuild will protect

- Heading order (one H1, H2 per section) stays.
- All text stays in the HTML (animations use opacity and transform, never `display:none` or JS-injected text).
- Scroll animations must not delay LCP: hero text is visible at first paint, motion starts after.
- Reduced motion shows everything at once.
- Lighthouse check before and after (target: mobile performance 90+, SEO 100).

## Needs approval or input

| Item | From |
|---|---|
| English URLs and `hreflang` (Phase 2) | Idan, Katherine |
| H1 keyword treatment | Idan |
| Real podcast URLs | Katherine |
| Credentials | Katherine |
| Search Console and Bing set up for www.ktvelasquez.com | Idan (typing their own logins) |
