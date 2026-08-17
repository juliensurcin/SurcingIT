# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two primary audiences, served with equal priority:

1. **B2B decision-makers** (DSI, RSSI, dirigeants, RH) at companies evaluating whether to trust SurcingIT with sensitive infrastructure (cybersecurity services) or with hiring (IT staffing/recruitment). They are risk-averse, compare against competing cyber vendors and recruitment cabinets, and need to justify the choice internally.
2. **IT/cyber consultants and candidates** evaluating SurcingIT as a career partner. They compare status options (CDI, freelance, portage salarial), care about technical vetting quality (being placed on genuinely matching missions), and ongoing career support after signature.

## Product Purpose

SurcingIT is a French "ESN hybride" combining two business lines under one structure: cybersecurity services and IT talent sourcing/recruitment. It exists so a client can solve both a security need and a staffing need with a single accountable partner, and so consultants get technically rigorous vetting plus active, continued career support rather than a one-off CV placement. Success = qualified client leads/mandates and durable, well-matched consultant placements.

## Positioning

Dual expertise under one roof — cybersecurity + IT staffing — with every candidate technically vetted by an engineer in the relevant domain (not keyword-matched by a generalist recruiter), and consultants receiving continued coaching/administrative support after placement, not a CV drop-and-forget. A pure-play recruitment cabinet or a pure-play cyber shop could not truthfully copy this combination.

## Operating Context

Client-facing service lines:
- **Sourcing & Recrutement IT** — cabinet de recrutement (direct hire), assistance technique (staff augmentation), pré-embauche (hybrid trial-to-hire). 5-step process: sourcing/contact → technical interview with an engineer → shortlist presentation → client meeting → contract + ongoing mission follow-up.
- **Pôle Cybersécurité** — Sécurité Managée (SIEM/EPP/EDR/XDR/MDR/SOC), Test d'intrusion & Audit (pentest, Red Team), GRC (NIS2, ISO 27001, RGPD).
- **Conseil IT Stratégique** — CISO as a Service, ponctuel consulting.

Consultants can work under CDI, freelance, or portage salarial (subject to client agreement), with support on compensation structuring, company creation, and career coaching.

## Capabilities and Constraints

- Legal entity: SurcingIT (SASU), 95 montée des Mauruches, 06220 Vallauris — RCS Antibes 106271661. Président: Julien Surcin.
- Every CTA on the site currently opens a bare `mailto:` link; there is no booking widget or contact form. This was flagged in the 2026-08-05 critique as a P1 gap (no fallback if the visitor has no default mail client) — durable fact for redesign to account for, not to silently redesign around.
- Text contrast currently fails WCAG AA (4.5:1) on several supporting-copy elements (measured 4.2:1) — known defect to fix as part of the redesign's typographic rework, not a style choice to preserve.

## Brand Commitments

- Name **"SurcingIT"** stays as-is.
- Existing copy discipline (explicit in source comments): checkable, specific claims over marketing adjectives — e.g. "48h response," "100% technically validated" rather than "best-in-class" or "leading." This voice principle should survive the visual redesign.
- User has explicitly briefed a visual direction for this redesign (binding, recorded as-is, not to be expanded on here — visual-world decisions belong to `new-work`):
  - Move away from a generic "AI-generated" look.
  - Apple-inspired typeface.
  - Full alignment consistency between left and right content blocks across all sections (currently inconsistent).
  - Clear, uniform typographic hierarchy across every section: titles distinctly larger than subtitles, subtitles distinctly larger than body text, body text kept at a minimal/restrained size.
  - Overall feel: premium, clean, classy — not "AI."
  - Craft bar / canon references, confirmed by the user: a mix of **Apple.com** (confident large-scale typography, generous negative space, restrained motion) and **Notion** (clean but warmer/more approachable hierarchy than a colder tool-brand like Linear). This pins the direction as the canon path, not an open concept exploration — execute at that fidelity, no irony or smuggled quirk.
  - Redesign proceeds homepage-first: commit the new visual system on the homepage, then decline it across the rest of the site in a later pass.
  - The "Consultant Care" section's actual content (status flexibility, financial/admin support, career coaching) must be **preserved** — only its label/framing changes, since the current title/framing reads as generic AI-marketing copy to the user.

## Evidence on Hand

- Photo asset: `src/assets/team-catamaran.jpg`.
- OG image: `public/og-image.jpg`.
- **No client logos, testimonials, case studies, or verifiable certification badges are currently available** (explicitly confirmed absent during init — the 2026-08-05 critique flagged this as a trust gap). The redesign must not fabricate any of these; design must work credibly without them.

## Product Principles

1. Every consultant is technically vetted by an engineer before being presented to a client — never keyword-matched. This is the core trust claim; it must stay visible and unwatered-down through any redesign.
2. Client value and consultant value are both real and both matter equally — the site's structure should not let one audience visually dominate the other.
3. Claims stay checkable and adjective-free ("48h," "5 étapes," "3 dimensions d'évaluation") rather than generic superlatives.
4. Post-placement support (coaching, admin help, status flexibility) is real product substance, not decoration — its content survives even when its presentation and labeling change.
5. In the absence of third-party proof (logos, testimonials), credibility must be earned through specificity and craft, not asserted.

## Accessibility & Inclusion

Text must meet WCAG AA contrast (4.5:1 for body text) — currently failing on several elements; the redesign's typography/color system must resolve this as a baseline requirement, not an afterthought.
