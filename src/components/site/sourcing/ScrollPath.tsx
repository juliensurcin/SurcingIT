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
      {/* dotted track */}
      <div
        className="absolute inset-0 w-px"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 26%, transparent) 0 2px, transparent 2px 8px)",
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
