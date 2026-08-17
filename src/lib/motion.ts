import { useEffect, useRef, useState } from "react";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

/** Feature-detect WebGL rather than sniffing user agents. */
export function useWebglSupport() {
  const [state, setState] = useState<"unknown" | "yes" | "no">("unknown");
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      setState(gl ? "yes" : "no");
    } catch {
      setState("no");
    }
  }, []);
  return state;
}

export function useIsCompact(breakpoint = 768) {
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    setCompact(mq.matches);
    const on = () => setCompact(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [breakpoint]);
  return compact;
}

/**
 * Lenis smooth scroll, disabled entirely under reduced motion.
 *
 * Driven by gsap.ticker (not a bare requestAnimationFrame loop) and wired
 * to call ScrollTrigger.update() on every Lenis scroll tick. Without this,
 * Lenis moves window.scrollY correctly but GSAP's own scroll listener
 * never sees it fire in sync, so every ScrollTrigger-driven animation on
 * the site (scrubbed fills, reveals) reads a stale, frozen progress value
 * until something else happens to force a recalculation.
 */
export function useSmoothScroll() {
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced) return;
    let destroy: (() => void) | undefined;
    let cancelled = false;
    void (async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] =
        await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      destroy = () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    })();
    return () => {
      cancelled = true;
      destroy?.();
    };
  }, [reduced]);
}

/**
 * GSAP + ScrollTrigger reveal. The element renders at its END state in the
 * static HTML; JS only hides it after mount, so no-JS output stays complete.
 */
export type RevealVariant = "lines" | "rows" | "rule" | "block";

const VARIANTS: Record<
  RevealVariant,
  { from: Record<string, unknown>; stagger: number; duration: number }
> = {
  // Hero headline stack: one confident staggered entrance, tiny offset.
  lines: { from: { opacity: 0, y: 18 }, stagger: 0.09, duration: 0.75 },
  // List rows: no opacity flicker, just a short lift.
  rows: { from: { y: 14, opacity: 0.001 }, stagger: 0.07, duration: 0.6 },
  // Hairlines draw in from the left.
  rule: {
    from: { scaleX: 0, transformOrigin: "left center" },
    stagger: 0.06,
    duration: 0.9,
  },
  block: { from: { opacity: 0, y: 22 }, stagger: 0, duration: 0.8 },
};

export function useScrollReveal<T extends HTMLElement>(options?: {
  stagger?: string;
  delay?: number;
  variant?: RevealVariant;
}) {
  const ref = useRef<T | null>(null);
  const reduced = usePrefersReducedMotion();
  const { stagger, delay = 0, variant = "block" } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    let ctxRevert: (() => void) | undefined;
    let fallbackTimer: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    void (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const targets = stagger
        ? Array.from(el.querySelectorAll<HTMLElement>(stagger))
        : [el];
      if (!targets.length) return;
      const spec = VARIANTS[variant];

      // Hard fallback: a stalled tween (backgrounded tab, a scroll-lib race,
      // slow device) must never leave content permanently faded. Whatever
      // the tween is doing, force the end state once this fires.
      const settle = () => {
        gsap.killTweensOf(targets);
        gsap.set(targets, { opacity: 1, y: 0, scaleX: 1 });
      };
      fallbackTimer = setTimeout(settle, 1600 + delay * 1000);

      const ctx = gsap.context(() => {
        gsap.set(targets, spec.from);
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          scaleX: 1,
          duration: spec.duration,
          delay,
          ease: "power3.out",
          stagger: stagger ? spec.stagger : 0,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onComplete: () => {
            if (fallbackTimer) clearTimeout(fallbackTimer);
          },
        });
      }, el);
      ctxRevert = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      if (fallbackTimer) clearTimeout(fallbackTimer);
      ctxRevert?.();
    };
  }, [reduced, stagger, delay, variant]);

  return ref;
}

/** True once the page has scrolled past `offset`. Used for the nav hairline. */
export function useScrolled(offset = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > offset);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [offset]);
  return scrolled;
}
