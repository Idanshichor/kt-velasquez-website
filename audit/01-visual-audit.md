# Visual audit: ktvelasquez.com to a $100k site

Date: 2026-10-18. Branch: `feature/premium-rebuild`. Nothing built yet. Quality bar: the Mango Creative Studio site (`Brands/kt360/sites/mango-creative-studio`).

## What the site is today

One long home page (about 11,000 px) made of 12 sections. Every section is the same recipe: padded block, centered title, a grid of rounded cards, one fade-up on entry. Backgrounds alternate white, pink, gold-light, pink-light. The brand is strong (pink and gold, Playfair italics, Great Vibes script, Katherine's photography). The motion and the rhythm are not.

## Findings

### Motion and feel

1. **One effect only.** Every section uses the same `ScrollReveal` fade-up. Twelve sections behaving identically read as one section shown twelve times. Mango uses a different device per section (sticky stacks, scrubbed depth, card rails).
2. **No smooth scroll.** The page scrolls at native speed. `scroll-smooth` is set on `<html>`, which would fight a smooth-scroll library, so it has to go.
3. **The hero is a still photo with static text.** No entrance, no depth, nothing happens when you scroll away from it. It is the most valuable screen on the site and it does the least.
4. **The pink "para quienes están construyendo algo real" banner** is the best brand moment and it is static.
5. **The marquee runs at one fixed speed**, unrelated to what the visitor does.
6. **Method (4 pillars) and Services are plain grids.** The method is the core idea of the whole business ("360") and it is shown as four small text blocks.

### Layout and rhythm

7. **Same card pattern five times** (services, newsletter, podcast, testimonials, final CTA). Rounded-[2rem] white card on a tinted band, again and again.
8. **"Quién soy" and the About preview are split in two**, with the About preview being a single wall of centered text on pink-light. Weak between two strong sections.
9. **Services is 2,285 px tall.** Three tall cards with long feature lists, the middle one lifted. It is the section that makes money and it is the hardest to read.
10. **Section padding is uniform** (py-24 / py-32), so there is no calm part, no loud part and no peak.

### Type and readability

11. **Text is too small in the money section.** Feature lists are 12 px, plan descriptions 10 px, badges 8 px, labels 10 px. Below 12 px is a legibility and accessibility problem on phones.
12. **Gold text on white** (the "360" script, the ✦ bullets, "Inversión" label) is about 1.8 to 1 contrast. Fails WCAG even for large text. Fix with a darker gold used only for text; the brand gold stays for fills and borders.
13. **Four fonts** (Playfair, Inter, Great Vibes, Playball). It works because Great Vibes is used only for single words. Keep, but do not add a fifth.

### Images and performance

14. `KTSecondPhoto.webp` is 2.9 MB. `ktspacepodcast.webp` is 0.7 MB. The hero is `unoptimized`. These cost seconds on a Colombian mobile connection.
15. The gallery images (`public/images/gallery`, 10 photos) are not used on the home page.
16. The Mango Creative logo exists in `public/images` but is not in the trust strip.

### What is already good (keep it)

Brand colors and fonts. Katherine's photography. The "Sin Pelos en la Lengua" voice. The service-tier structure and the dropdown plan picker. The ✦ motif. Bilingual toggle.

## The plan: the page as a film with seven different scenes

Rule from the scroll-craft skill: at least four device families, never the same one twice in a row, one engineered peak, one signature move. The brand stays. The copy stays.

| # | Scene | Device | What happens | Feeling |
|---|---|---|---|---|
| 1 | Hero | Layered parallax + line mask reveal | Photo settles in slowly. Name rises line by line from a mask. Script line writes in. On scroll the photo drifts up slower than the text, then darkens into the pink banner. | Presence |
| 2 | Pink banner | Pinned word scrub | The pink floods in as a circle wipe. "para quienes" drops in as script, the headline words light up as you scroll. | Recognition |
| 3 | Marquee + logos | Velocity marquee + staggered rise | Marquee speeds up with scroll speed and flips direction on reverse. Logos rise in a stagger. | Proof, light |
| 4 | Quién soy | Image mask reveal + inner parallax | The photo opens with a clip-path wipe, moves inside its frame. The gold frame draws itself. Headline by line. | Tension, then relief |
| 5 | About preview | Word-by-word scrub | The long paragraph lights up as you read, bold keywords land last. Quiet, big type. | Calm |
| 6 | Method 360 (the peak) | Pinned, four steps | Left: the big script "360" and a line that draws. Right: the four pillars activate one by one. Most scroll room on the page. | Understanding |
| 7 | Services | Staggered tiers + spotlight | Tiers enter in sequence, the featured tier gets a slow gold border sweep. Text raised to 14 px minimum. Plan dropdown and all Wompi links untouched. | Choice |
| 8 | Newsletter | Quiet inline form | Slim band, animated underline field. Less card, more breath. | Calm |
| 9 | Podcast | Image mask + soundwave | Image opens with a wipe, a decorative soundwave pulses behind the logo. | Warmth |
| 10 | Testimonials | Pinned quote rail | One big quote at a time, you scroll through three. The "$250,000" figure from the existing quote counts up. No new numbers. | Trust |
| 11 | FAQ | Smooth height accordion | Same questions, GSAP height, plus/minus morph. | Calm |
| 12 | Final CTA + footer | Scrub scale + magnetic button | Big script line scales up, the button is magnetic, ✦ stars drift. Footer wordmark reveals. Page ends on a held frame, not a fade. | Commitment |

Signature move (only on this site): **the ✦ star as a cursor and a progress device.** On desktop a small gold star follows the pointer and turns into a "ver" or "talk" label over images and buttons. A thin star-tipped line on the page edge tracks reading progress. The ✦ already runs through the brand (marquee, bullets); here it becomes the interaction.

Smooth scroll: Lenis driven from the GSAP ticker, as in the hub README. Anchor links go through `lenis.scrollTo`. Off for `prefers-reduced-motion`.

## Rules for the build

- GSAP + ScrollTrigger + Lenis only. No Framer Motion on new work (it is installed but unused; leave it, do not remove).
- Animate `transform`, `opacity` and `clip-path` only.
- `prefers-reduced-motion`: no pinning, no scrub, content visible at once.
- Mobile gets lighter versions (no heavy pins, simple stagger) using `ScrollTrigger.matchMedia`.
- Minimum text size 12 px for labels, 14 px for body in the service tiers.
- New text-gold token (darker) for gold on light backgrounds.
- Hero and Quién soy photos converted to lighter files. Originals stay.
- No payment code changes. Wompi links and the plan picker logic stay as they are.
- Branch work stays on `feature/premium-rebuild`. No push, no deploy without asking.

## Decisions for Idan

1. **Star cursor:** build it (recommended, it is the signature move) or skip it for a quieter site.
2. **Inner pages** (`/sobre-mi`, `/podcast`): rebuild after the home page is approved (recommended), or in the same pass.
