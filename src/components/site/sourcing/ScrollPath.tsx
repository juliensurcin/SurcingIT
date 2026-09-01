import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/motion";

/**
 * A vertical dotted rail with a solid progress line that draws itself as the
 * parent section scrolls through the viewport. Under reduced motion the
 * progress line is simply shown at full height, no scrubbing.
 */
export function ScrollPath({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const wrap = wrapRef.current;
    const fill = fillRef.current;
    if (!wrap || !fill) return;
    if (reduced) {
      fill.style.transform = "scaleY(1)";
      return;
    }
    let revert: (() => void) | undefined;
    let cancelled = false;

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
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top 72%",
              end: "bottom 62%",
              scrub: 0.6,
            },
          },
        );
      }, wrap);
      revert = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      revert?.();
    };
  }, [reduced]);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
    >
      {/* Faint solid track, not dashed — a dashed pattern read as "disabled"
       * for whichever rows the scrub hadn't reached yet on a long mobile
       * list (WhyUs' 8 stacked points in particular), since the scrub
       * distance scales with the rail's own height: it can sit at a
       * visible partial fill for a good stretch of scroll on a tall single
       * column, even though every row's own text and dot are already
       * fully rendered. A faint-to-vivid solid line reads as "progress,"
       * not "half of this content isn't ready yet." */}
      <div
        className="absolute inset-0 w-px"
        style={{
          backgroundColor:
            "color-mix(in oklab, var(--color-foreground) 14%, transparent)",
        }}
      />
      {/* progress fill */}
      <div
        ref={fillRef}
        className="absolute inset-0 w-px origin-top bg-primary"
        style={{ transform: "scaleY(0)" }}
      />
    </div>
  );
}
