import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/motion";

export type Tile =
  | { kind: "logo"; slug: string; alt: string; local?: boolean }
  | { kind: "text"; label: string; alt: string };

/**
 * Certification-issuing bodies + a couple of exam-specific marks that don't
 * exist as brand logos (OSCP/CRTO are exam names, not companies — see
 * below). Same governance/offensive/defensive/infra spread as the previous
 * sphere's slug set (cyber/WhoIntervenes.tsx git history), plus the two the
 * user specifically asked for.
 */
const CERTS: Tile[] = [
  // Governance / general security
  { kind: "logo", slug: "isc2", alt: "(ISC)² — CISSP, SSCP" },
  { kind: "logo", slug: "comptia", alt: "CompTIA — Security+, CySA+" },
  { kind: "logo", slug: "cisco", alt: "Cisco — CCNA/CCNP Security" },
  { kind: "logo", slug: "googlecloud", alt: "Google Cloud Security Engineer" },
  // Offensive / pentest, red team
  { kind: "logo", slug: "hackthebox", alt: "Hack The Box — CPTS" },
  { kind: "logo", slug: "tryhackme", alt: "TryHackMe — PJPT" },
  { kind: "logo", slug: "burpsuite", alt: "Burp Suite Certified Practitioner" },
  { kind: "logo", slug: "paloaltonetworks", alt: "Palo Alto Networks — PCNSE" },
  {
    kind: "logo",
    slug: "/certs/offsec.svg",
    local: true,
    alt: "OffSec — OSCP",
  },
  { kind: "text", label: "CRTO", alt: "Zero-Point Security — CRTO" },
  // Defensive / blue team, SOC
  { kind: "logo", slug: "splunk", alt: "Splunk Certified" },
  { kind: "logo", slug: "elastic", alt: "Elastic Certified Engineer/Analyst" },
  { kind: "logo", slug: "fortinet", alt: "Fortinet NSE" },
  // Infra / cloud, underpins most of the above in practice
  { kind: "logo", slug: "redhat", alt: "Red Hat — RHCSA/RHCE" },
  { kind: "logo", slug: "vmware", alt: "VMware — VCP" },
  { kind: "logo", slug: "hashicorp", alt: "HashiCorp — Terraform Associate" },
  { kind: "logo", slug: "linuxfoundation", alt: "Linux Foundation — CKA/CKS" },
];

// 5x6 grid, hand-scattered (not a strict checkerboard, to avoid reading as
// a mechanical repeat) — 17 filled cells matching CERTS.length exactly, 13
// left empty as breathing room between marks.
const COLS = 5;
const FILLED = [
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  true,
];

/**
 * A different mechanic again from both the home About sphere and the
 * previous version of this section (canvas fibonacci-sphere, drag-to-spin
 * — IconCloud.tsx): a flat scattered grid of logo tiles, hairline-bordered
 * squares in a loose mosaic (masked to fade at the edges), no canvas/WebGL
 * at all. Two authored motions instead of drag: tiles scale+fade in with a
 * center-out stagger as the section scrolls into view, then settle into a
 * slow ambient "scan" — a faint primary-tinted overlay that ripples across
 * the filled tiles on a loop, the site's first idle animation that runs
 * independent of scroll or user input.
 *
 * Flag: DESIGN.md explicitly bans "icon-grid scaffolding" as a hard rule
 * from the 2026-08-05 critique. Built anyway because the user supplied
 * this exact component and asked for it directly — stripped of its
 * original rounded corners/shadow/bg-card styling to land as close to the
 * flat, zero-radius, no-shadow system as the concept allows (hairline
 * border, bg-background/bg-surface only), same posture as the earlier
 * IconCloud multi-color exception: implemented as asked and flagged here,
 * not silently reshaped into something DESIGN.md would have picked instead.
 */
type CertMosaicProps = {
  /** Defaults to the full cyber-consultant set below. */
  certs?: Tile[];
  /** Scatter pattern, same length as `certs` worth of `true` cells. Must
   * match `certs.length` exactly or extra/missing tiles silently drop. */
  filled?: boolean[];
  /** Grid column count the scatter pattern is laid out against. */
  cols?: number;
  /** Overall component width — smaller for a denser placement. */
  maxWidthClassName?: string;
};

export function CertMosaic({
  certs = CERTS,
  filled = FILLED,
  cols = COLS,
  maxWidthClassName = "max-w-[22rem]",
}: CertMosaicProps = {}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glowRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const wrap = wrapRef.current;
    const tiles = tileRefs.current.filter((t): t is HTMLDivElement => !!t);
    const glows = glowRefs.current.filter((g): g is HTMLSpanElement => !!g);
    if (!wrap || !tiles.length) return;

    if (reduced) {
      // Static: fully visible, no entrance, no idle ripple.
      return;
    }

    let cancelled = false;
    let ctxRevert: (() => void) | undefined;

    void (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.set(tiles, { opacity: 0, scale: 0.82, y: 10 });
        gsap.to(tiles, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: {
            each: 0.035,
            from: "center",
            grid: [filled.length / cols, cols],
          },
          scrollTrigger: { trigger: wrap, start: "top 82%", once: true },
          onComplete: () => {
            if (glows.length) {
              gsap.to(glows, {
                opacity: 0.14,
                duration: 1.1,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                stagger: { each: 0.4, repeat: -1, yoyo: true },
              });
            }
          },
        });
      }, wrap);
      ctxRevert = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      ctxRevert?.();
    };
  }, [reduced, filled.length, cols]);

  let certIndex = 0;

  return (
    <div
      ref={wrapRef}
      className={`mx-auto w-full ${maxWidthClassName}`}
      style={{
        maskImage:
          "radial-gradient(ellipse at center, black 55%, transparent 95%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, black 55%, transparent 95%)",
      }}
    >
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {filled.map((isFilled, i) => {
          if (!isFilled) {
            return (
              <div
                key={i}
                aria-hidden="true"
                className="aspect-square bg-surface"
              />
            );
          }
          const tile = certs[certIndex];
          const idx = certIndex;
          certIndex += 1;
          if (!tile)
            return (
              <div
                key={i}
                aria-hidden="true"
                className="aspect-square bg-surface"
              />
            );

          return (
            <div
              key={i}
              ref={(el) => {
                tileRefs.current[idx] = el;
              }}
              title={tile.kind === "logo" ? tile.alt : tile.alt}
              className="relative flex aspect-square items-center justify-center overflow-hidden border border-border bg-background"
            >
              <span
                ref={(el) => {
                  glowRefs.current[idx] = el;
                }}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-primary opacity-0"
              />
              {tile.kind === "logo" ? (
                <img
                  src={
                    tile.local
                      ? tile.slug
                      : `https://cdn.simpleicons.org/${tile.slug}`
                  }
                  alt={tile.alt}
                  width={32}
                  height={32}
                  loading="lazy"
                  className="pointer-events-none relative size-8 select-none object-contain"
                />
              ) : (
                // label-mono, not a one-off size: the same fixed type-scale
                // step already used project-wide for small inline mono
                // labels (managed/People.tsx's "De"/"À"), never as a
                // section-heading kicker — that distinction is what keeps
                // this off DESIGN.md's eyebrow ban.
                <span className="label-mono relative text-foreground">
                  {tile.label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
