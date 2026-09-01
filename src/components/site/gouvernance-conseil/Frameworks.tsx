import { useGrcContent } from "@/content/grc";
import { useGouvernanceConseilContent } from "@/content/gouvernance-conseil";
import { useScrollReveal } from "@/lib/motion";
import { CertMosaic, type Tile } from "@/components/site/cyber/CertMosaic";

/**
 * GRC-specific reuse of cyber/CertMosaic.tsx (see that file — same tile
 * styling, entrance stagger, idle ripple), swapped to the standards/
 * regulatory bodies that actually govern NIS2/ISO 27001/RGPD work rather
 * than the cyber page's broader offensive/defensive/infra spread. ANSSI,
 * ISO, CNIL and BSI aren't in simple-icons' catalog (checked, same gap as
 * OSCP before) — self-hosted from each body's own official site/branding
 * instead of forced low-res or dropped, same posture as offsec.svg.
 */
const GRC_CERTS: Tile[] = [
  { kind: "logo", slug: "/certs/iso.svg", local: true, alt: "ISO 27001" },
  { kind: "logo", slug: "/certs/anssi.png", local: true, alt: "ANSSI" },
  { kind: "logo", slug: "isc2", alt: "(ISC)² — CISSP" },
  {
    kind: "logo",
    slug: "/certs/isaca.png",
    local: true,
    alt: "ISACA — CISA, CRISC",
  },
  {
    kind: "logo",
    slug: "/certs/pecb.png",
    local: true,
    alt: "PECB — ISO 27001 Lead Auditor",
  },
  { kind: "logo", slug: "/certs/cnil.svg", local: true, alt: "CNIL — RGPD" },
  { kind: "logo", slug: "/certs/bsi.svg", local: true, alt: "BSI Group" },
];

const GRC_COLS = 3;
const GRC_FILLED = [
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
  false,
];

export function Frameworks() {
  const { nis2Section } = useGrcContent();
  const { frameworksSection, iso27001Section } = useGouvernanceConseilContent();
  /**
   * NIS2 and ISO 27001 unified under one heading and one shared intro
   * paragraph, with just the two stat callout boxes side by side below.
   * `nis2Section` still lives in content/grc.ts (grcPillars' home too) —
   * the standalone /cybersecurite/grc page and its own single-framework
   * Nis2.tsx layout were retired once this merged page fully replaced it.
   */
  const frameworks = [
    { key: "nis2", topLabel: frameworksSection.nis2TopLabel, ...nis2Section },
    { key: "iso", topLabel: "ISO/IEC 27001:2022", ...iso27001Section },
  ];
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-framework]",
    variant: "rows",
  });

  return (
    <section id="conformite" className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-center lg:gap-16">
          <div className="max-w-[46rem]">
            <h2 className="display-2 text-foreground">
              {frameworksSection.title}
            </h2>
            <p className="lead measure mt-6 text-foreground">
              {frameworksSection.intro}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {frameworksSection.sources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[0.8125rem] font-medium text-primary hover:text-primary/80"
                >
                  {source.label} ↗
                </a>
              ))}
            </div>
          </div>

          <CertMosaic
            certs={GRC_CERTS}
            filled={GRC_FILLED}
            cols={GRC_COLS}
            maxWidthClassName="max-w-[14rem]"
          />
        </div>

        <div
          ref={ref}
          className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-2 lg:gap-16"
        >
          {frameworks.map((fw) => (
            <div
              key={fw.key}
              data-framework
              className="border border-border bg-surface p-8 md:p-10"
            >
              <p className="text-[0.8125rem] font-semibold text-primary">
                {fw.topLabel}
              </p>
              <h3 className="display-3 mt-6 text-foreground">
                {fw.callout.label}
              </h3>

              <div className="mt-8 grid grid-cols-2 border-y border-border py-8">
                {fw.callout.stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={i === 0 ? "pr-6" : "border-l border-border pl-6"}
                  >
                    <p className="display-2 text-primary">{s.value}</p>
                    <p className="mt-2 text-[0.8125rem] text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="small-copy mt-8 text-muted-foreground">
                {fw.callout.body}
              </p>
              <p className="small-copy mt-6 text-muted-foreground">
                {fw.callout.linkBody}
              </p>
              <a
                href={fw.callout.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-6 inline-block text-[0.9375rem] font-medium text-primary hover:text-primary/80"
              >
                {fw.callout.linkLabel} ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
