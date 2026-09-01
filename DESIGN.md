---
name: SurcingIT
description: ESN hybride — cybersécurité et sourcing de talents IT
colors:
  primary: "oklch(0.718 0.124 307.6)"
  primary-active: "oklch(0.611 0.147 306.4)"
  ink: "oklch(0.208 0.04 265.8)"
  background: "oklch(1 0 0)"
  surface: "oklch(0.979 0.003 264.5)"
  surface-raised: "oklch(0.96 0.005 258.3)"
  muted-foreground: "oklch(0.49 0.036 257.4)"
  border-hairline: "oklch(0.208 0.04 265.8 / 8%)"
typography:
  display-1:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 5.6vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  display-2:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 3.3vw, 2.65rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  display-3:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1.5vw, 1.4rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.012em"
  display-4:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.008em"
  lead:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1.25vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.6
  ui-chrome-sm:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
  ui-chrome-md:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.4
  ui-chrome-lg:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.4
  ui-chrome-wordmark:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.2
  label-mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.7rem"
    fontWeight: 500
    letterSpacing: "0.22em"
rounded:
  all: "0px"
spacing:
  rail: "360px"
  gutter: "1400px container, px-6 / lg:px-10"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background}"
    rounded: "{rounded.all}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-active}"
---

# Design System: SurcingIT

## Overview

**Creative North Star: "The Frosted Ledger"**

A calm, editorial system built on hairlines and negative space rather than cards and gradients — the visual register of a firm whose whole pitch is that it doesn't send you noise: every candidate is vetted, every claim is checkable, every reply comes within 48h. The system earns "premium" through restraint (one accent color, one type family doing all the work at different scales, generous whitespace) rather than through ornament. It sits in the register of Apple.com and Notion: confident, oversized headlines; quiet, small-weight supporting text; sharp, architectural edges instead of soft rounded chrome.

Confirmed visual rejections (from the 2026-08-05 critique and redesign brief): no tracked-uppercase "eyebrow" labels above headings, no decorative section numbering (01/02/03), no dual-hue audience color-coding, no card-grid-of-icons scaffolding, no mono-as-technical-costume outside real code/measurement contexts, no inline stat/fact line under the hero (even restyled as plain text, it still read as a generic SaaS trust-signal tell — removed entirely rather than reformatted again).

**Key Characteristics:**
- One accent color (lavender), used sparingly — links, the primary CTA, the second line of the hero headline.
- Sharp corners everywhere (0px radius) — hairline borders do the structural work cards would otherwise do.
- Every editorial section (Services, Pourquoi, Consultants, ADN) opens with a wide, capped-width header instead of a narrow fixed rail, so the title uses the horizontal space rather than leaving it empty beside a thin sidebar.
- A single confident system-sans typeface, rendering as real SF Pro on Apple devices via the `-apple-system` stack, Inter everywhere else.

## Colors

Restrained: near-white surfaces, near-black ink, one accent. No secondary/tertiary hue — the former client/consultant dual-color coding was removed in the 2026-08 redesign in favor of typographic weight for that distinction.

### Primary
- **Lavender** (`oklch(0.718 0.124 307.6)` / `#b98ee0`): the one accent, replacing Confident Blue as of 2026-08-18. Primary CTA background, links on hover/underline, the second line of the hero headline. **Known, accepted tradeoff:** this specific step does *not* clear AA as running text on white (~2.6:1, well under the 4.5:1 minimum) — a darker step (`#8c55c4`, "Amethyst") was tried first specifically to avoid that, tested and briefly shipped, then explicitly overridden back to this lighter value on direct request. `--primary-foreground` is the ink color, not white, because white-on-fill also fails at this lightness. If a future session is asked to "fix" faded-looking accent text/links on white backgrounds, that's this tradeoff surfacing — the fix is a deliberate one-off darkening of that specific instance's text color (as already done for CTA-band/dark-surface instances, see Accent-off-on-dark below), not a token-wide revert; re-litigate the token value itself only if asked.
- **Lavender, Active** (`oklch(0.611 0.147 306.4)` / `#9a69c8`): primary button's pressed/hover state.

### Neutral
- **Ink Navy** (`oklch(0.208 0.04 265.8)` / `#0f172a`): all body and heading text.
- **Paper** (`oklch(1 0 0)` / `#ffffff`): base background.
- **Fog** (`oklch(0.979 0.003 264.5)` / `#f7f8fa`): quiet section backgrounds (e.g. "Pourquoi SurcingIT").
- **Mist** (`oklch(0.96 0.005 258.3)` / `#f0f2f5`): raised-panel backgrounds (e.g. the Consultants section).
- **Slate** (`oklch(0.49 0.036 257.4)`): muted/supporting text. Darkened during the 2026-08 redesign from the previous `#64748b` so small-copy clears WCAG AA (4.5:1) even on Mist, not just on white — the prior value only cleared 4.2:1 there.
- **Hairline** (`oklch(0.208 0.04 265.8 / 8%)`): the default border/divider — the system's primary structural device instead of card outlines or shadows.

### Named Rules
**The One Voice Rule.** The accent appears in at most a handful of places per viewport: never as a background fill for large regions, never doubled up with a second hue for "meaning" (e.g. audience-coding). Its rarity is what makes it register — this held when the accent was Confident Blue and holds unchanged now that it's Lavender.

**Accent-off-on-dark.** On any inverted/dark surface (`bg-foreground` sections — the CTA bands that close every service page, the site footer, and standalone dark sections like `managed/Soc.tsx`'s stats or `cyber/Pillars.tsx`'s links), the accent is never used for text or fill; those surfaces use white (`background`/`background/NN`) instead, same as ink navy is dropped for white ink. This isn't a style preference — even the current lighter Lavender, which reads fine as text on *white*'s opposite problem (it's actually high-contrast on dark, ~6.8:1), was deliberately kept off dark surfaces anyway for consistency rather than making the rule shade-dependent; the previous, darker accent step measured a failing ~3.6:1 there, which is what surfaced this rule in the first place. Every CTA band, plus `Soc.tsx`, `Pillars.tsx`, `People.tsx`'s phishing-demo panel, and `pentest/Beyond.tsx`'s inverted card, all use white text/fill inside their dark sections — documented here so a future session doesn't "fix" that into a regression by swapping any of them for `bg-primary`/`text-primary`.

## Typography

**Display Font:** `-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
**Body Font:** same stack — one family, no separate "display" identity.
**Label/Mono Font:** JetBrains Mono — retained token for other pages' real technical/measurement content, not used for decoration on the redesigned homepage.

**Character:** One confident system-native sans across every weight and size. On Apple devices this renders genuine SF Pro (the actual "Apple font," delivered legally via the system stack rather than an embedded/pirated font file); everywhere else it falls back to Inter, which is visually near-identical in proportion and near-indistinguishable to a visitor.

### Hierarchy
- **Display 1** (700, `clamp(2.5rem, 5.6vw, 4.75rem)`, line-height 1.04, tracking -0.025em): hero H1 only. Sized down from the first pass (`5.5rem` max) — the user felt it read too large against the rest of the page.
- **Display 2** (700, `clamp(1.75rem, 3.3vw, 2.65rem)`, line-height 1.08, tracking -0.02em): section H2s. Sized down from the first pass (`3.1rem` max) for the same reason.
- **Display 3** (600, `clamp(1.15rem, 1.5vw, 1.4rem)`, line-height 1.25): service-row headings.
- **Display 4** (600, `1.0625rem`, line-height 1.3): card/pillar headings, nav mega-menu titles.
- **Lead** (`clamp(1.0625rem, 1.25vw, 1.25rem)`, line-height 1.6): hero subhead and pulled-out lead sentences. Measure capped at 62ch.
- **Body** (400, `1rem`, line-height 1.65): running prose. Measure capped at 62ch.
- **Small** (400, `0.9rem`, line-height 1.6): supporting/secondary copy.
- **UI chrome** (400, four steps — `0.8125rem` tags/nav-sub-links, `0.875rem` meta/legal text, `0.9375rem` buttons/CTAs/primary links, `0.95rem` semibold wordmark — line-height ~1.4): a pre-existing micro-scale (not introduced by the 2026-08 redesign) used as literal Tailwind arbitrary values (`text-[0.8125rem]` etc.) rather than named utilities. Documented here so it reads as system, not drift.
- **Label mono** (JetBrains Mono, 500, `0.7rem`, tracking 0.22em, uppercase): reserved for real technical/measurement labels on not-yet-redesigned pages. Not used anywhere on the redesigned homepage (see the No-Kicker Rule).

### Named Rules
**The No-Kicker Rule.** No tracked-uppercase eyebrow label sits above a heading anywhere in the redesigned system. The heading carries its own weight; a label above it is a tell, not a hierarchy device.

## Layout

1400px max-width container, `px-6` mobile / `lg:px-10` desktop gutters, shared by every section including the dark contact block — this is what keeps the page's left edge constant at `x=60` (desktop) regardless of section.

**The Wide-Header Rule** (supersedes the first pass's "Rail Rule," 2026-08-05). Every editorial section (Services, Pourquoi SurcingIT, Consultants, Notre ADN) opens with a title (+ optional subtitle) block capped at `max-w-[42rem]`–`max-w-[46rem]`, full-width within that cap rather than confined to a narrow sidebar — the original 360px fixed-width left rail left an awkward band of empty space beside the title before the row content began, which read as wasted space rather than intentional whitespace. The header sits directly above the section's content, not beside it. Section vertical padding was tightened at the same time, from `py-24/32/36` to `py-16/20`, to close the gap this exposed.

Section padding: `py-16 md:py-20` (was `py-24 md:py-32/36` in the first pass).

Below the header, per-row content (Services, Consultants) uses its own compact two-column split — a `320px` title column and a `minmax(0,1fr)` description column, `gap-12` — repeated identically per row, not as a section-wide rail. Pourquoi SurcingIT's two-column client/consultant comparison and Notre ADN's three-column pillar row are unrelated content grids, not header rails, and are unaffected by this rule.

Below `lg`, every section collapses to a single column, full width.

Rows, not cards: list-like content (services, why-us points, consultant-care cards, pillars) is separated by 1px hairlines, not by boxed containers.

## Elevation & Depth

Flat by default — the hairline is the primary depth signal, not shadow. The two exceptions: the desktop nav's hover mega-panel (`0 24px 60px -30px rgb(15 23 42 / 0.25)`, a real soft-blurred drop shadow, because it's a floating overlay that must read as detached from the page) and the sticky nav's frosted-glass effect (`backdrop-blur` + 90%-opacity background) while scrolled, which is a specific legibility effect for content passing underneath it, not decoration.

### Named Rules
**The Flat-Except-Floating Rule.** Elevation (shadow, blur) is reserved for elements that are genuinely floating above the page (menus, overlays). In-flow content never gets a shadow.

## Shapes

Zero border-radius everywhere *except buttons* (`--radius: 0px` at every scale token, still governs panels, callouts, cards, images). Sharp, architectural corners; hairlines define edges instead of rounded chrome or card outlines.

**Buttons are the one deliberate exception** (2026-08-29, direct request): `12px` border-radius on the shared `.press` utility (`src/styles.css`), not the `--radius` token system — a scoped override, not a system-wide reversal. Reasoning at the time: the user felt every CTA read as "too square, dated"; full pill (`rounded-full`) was considered and rejected as reading too close to generic current-SaaS ("Linear/Stripe-adjacent"), which is exactly the "AI slop" look this system was built to avoid — 12px was picked as visibly softer without abandoning the site's architectural character. If a future session is asked to make buttons sharp again "to match the design system," that's this exception surfacing — confirm before reverting, it was a considered choice, not drift.

**The floating nav capsule is a second, narrower exception** (2026-08-31, direct request against a supplied reference site): past a scroll threshold, on desktop only, `Nav.tsx`'s bar animates from the flat/full-bleed `0px` state into a `20px`-radius floating capsule (shrunk max-width, top margin, the mega-panel's own drop-shadow value) — inline styles animated by framer-motion, not the `--radius` token. Scoped to that one component's scrolled state; every other surface, including the nav itself while at the top of the page, stays sharp. The reference also used a tracked-uppercase eyebrow line above its hero title — that part was deliberately **not** carried over, since it collides directly with the No-Kicker Rule below; only the centered-hero layout and the nav's scroll behaviour were adopted.

## Components

### Buttons
- **Shape:** `12px` radius (see Shapes above) — the one exception to the site's 0px rule.
- **Primary:** Lavender background, ink text (not white — see the Primary color entry), `px-7 py-4` (hero) / `px-4 py-2` (nav), medium weight. Hover → Lavender Active. Active state presses 1px down (`translateY(1px)`).
- **Secondary / Ghost:** no fill; underline-grows-from-left on hover (text links) or a 1px border that inverts to solid ink on hover (nav's outlined CTA).

### Navigation
Sticky, frosted-glass on scroll (`bg-background/90` → `/95` + `backdrop-blur`). On desktop, past the scroll threshold the bar also shrinks into a floating rounded capsule (see the Shapes exception above) with the mega-panel's own drop-shadow; on mobile it stays flat with a hairline border instead — narrow viewports don't have the side margin for a capsule to read as detached. Desktop: text links + a hover mega-panel for "Services" with a soft shadow. Mobile: full-screen overlay panel, large tap targets, accordion for the Services sub-list. Wordmark set in the display font, semibold, tight tracking — not mono (mono read as a coder/dev-tool costume, inconsistent with the premium-services positioning).

### Hero
Centered single-column stack (2026-08-31, direct request against a supplied reference) — title, body copy, CTAs and the contact fallback line all centre-aligned in one `max-w-[50rem]` column, replacing the earlier title-left/body-right two-column split. No eyebrow/kicker above the title (No-Kicker Rule).

### Hero facts / stat line
Removed entirely (2026-08-05, second pass). The first pass tried the three checkable facts (2 métiers / 48h / 100%) as a plain inline text line instead of boxed stat tiles; even restyled as quiet text, the user felt it still read as a generic SaaS trust-signal pattern. The facts themselves already live in the hero body copy and elsewhere on the site — don't reintroduce a dedicated stat line in any form without asking first.

## Do's and Don'ts

### Do:
- **Do** open every editorial section with a wide capped-width header (title + subtitle) per the Wide-Header Rule in Layout, not a narrow fixed-width rail.
- **Do** use `py-16 md:py-20` section padding — the first pass's `py-24/32/36` read as too much empty space.
- **Do** keep body/small-copy on the Slate token — it's calibrated to clear 4.5:1 even on Mist/Fog backgrounds.
- **Do** let headings carry their own weight without a label above them.
- **Do** use the `-apple-system` / Inter stack for all type; don't introduce a second family for "display" purposes.

### Don't:
- **Don't** add a tracked-uppercase eyebrow/kicker above any heading.
- **Don't** add decorative section numbering (01/02/03) — the detector flags this and it reads as generic-AI scaffolding.
- **Don't** reintroduce per-section color-coding (e.g. a second accent hue for a second audience) — differentiate by typographic weight and copy, not hue.
- **Don't** confuse the current Lavender accent with the old, unrelated `--color-consultant` purple (`#7c3aed`) from the pre-2026-08-05 client/consultant color-coding system — that token was already retired then and was deleted outright on 2026-08-18 (it had zero remaining call sites). Lavender is a distinct, newer decision, not a revival of it.
- **Don't** add rounded corners to any non-button component; the system is 0px radius throughout except buttons (see Shapes).
- **Don't** "fix" buttons back to sharp corners to match the 0px rule without asking first — the 12px button radius is a confirmed, deliberate exception (2026-08-29), not an inconsistency.
- **Don't** add a card/icon-grid scaffold where a hairline-divided row list would do the same job.
- **Don't** use the accent (Lavender) for text or fill on a dark/inverted surface (`bg-foreground` sections) — use white instead. See "Accent-off-on-dark" under Colors.
- **Don't** darken or swap the Lavender accent token to "fix" faded-looking text/links on white backgrounds without asking first — that faintness on white is a known, deliberately accepted tradeoff of this exact shade (see the Primary color entry under Colors), not a bug.
