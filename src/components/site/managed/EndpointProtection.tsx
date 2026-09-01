import { useEffect, useRef } from "react";
import { useManagedContent } from "@/content/securite-managee";
import { usePrefersReducedMotion, useScrollReveal } from "@/lib/motion";
import { OrbitCluster } from "./OrbitCluster";

/**
 * Same scrub-fill horizontal rail as EmailProtection.tsx — deliberate
 * reuse this time, not a gap: the two sections are genuine siblings (the
 * #1 and #2 attack vectors from the same CESIN figure), so sharing the
 * rail motif reads as "these are a matched pair" rather than as drift.
 * The side widget still varies (OrbitCluster vs SolutionsCluster's
 * magnetic hover) so the page doesn't repeat one single trick everywhere.
 */
export function EndpointProtection() {
  const { endpointProtectionSection } = useManagedContent();
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const reduced = usePrefersReducedMotion();
  const revealRef = useScrollReveal<HTMLDivElement>({
    stagger: "[data-line]",
    variant: "lines",
  });

  const stageCount = endpointProtectionSection.stages.length;

  useEffect(() => {
    const wrap = wrapRef.current;
    const fill = fillRef.current;
    const titles = titleRefs.current.filter(
      (t): t is HTMLHeadingElement => !!t,
    );
    if (!wrap || !fill || !titles.length) return;

    const setStage = (progress: number) => {
      titles.forEach((title, i) => {
        const reached = progress >= (i + 0.15) / stageCount;
        title.classList.toggle("text-foreground", reached);
        title.classList.toggle("text-muted-foreground/45", !reached);
      });
    };

    if (reduced) {
      fill.style.transform = "scaleX(1)";
      setStage(1);
      return;
    }

    setStage(0);
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
        gsap.fromTo(
          fill,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top 85%",
              end: "bottom 25%",
              scrub: 0.6,
              onUpdate: (self) => setStage(self.progress),
            },
          },
        );
      }, wrap);
      ctxRevert = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      ctxRevert?.();
    };
  }, [reduced, stageCount]);

  return (
    <section
      id="protection-endpoint"
      className="border-t border-border bg-surface"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center lg:gap-16">
          <div ref={revealRef} className="max-w-[46rem]">
            <h2 data-line className="display-2 text-foreground">
              {endpointProtectionSection.title}
            </h2>
            <p data-line className="lead measure mt-4 text-muted-foreground">
              {endpointProtectionSection.intro}
            </p>
            <div data-line className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {endpointProtectionSection.sources.map((source) => (
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

          <OrbitCluster logos={endpointProtectionSection.solutionLogos} />
        </div>

        <div ref={wrapRef} className="mt-12 md:mt-16">
          <div className="relative h-px w-full bg-border">
            <div
              ref={fillRef}
              className="absolute inset-y-0 left-0 w-full origin-left bg-primary"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-5 md:gap-6">
            {endpointProtectionSection.stages.map((stage, i) => (
              <div key={stage.title}>
                <h3
                  ref={(el) => {
                    titleRefs.current[i] = el;
                  }}
                  className="display-4 text-muted-foreground/45 transition-colors duration-500"
                >
                  {stage.title}
                </h3>
                <p className="small-copy mt-3 text-muted-foreground">
                  {stage.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
