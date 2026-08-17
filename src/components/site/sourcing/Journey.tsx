import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/motion";
import { ScrollPath } from "./ScrollPath";

type Step = { title: string; body: string };

/**
 * A full-width zigzag journey: steps alternate left/right, connected by a
 * smooth S-curve that draws itself in as the section scrolls through the
 * viewport. Marker x/y are measured from the real, rendered DOM (variable
 * text height per step), not hard-coded, so the curve always passes
 * exactly through each numbered marker regardless of copy length or
 * viewport width. Collapses to a single straight rail on mobile, where a
 * zigzag has no room to read as one.
 *
 * Each marker fills in with the same primary blue as the line itself, the
 * instant the drawn line reaches it — measured in real path-length pixels
 * per marker, not an approximate scroll-progress fraction, so the fill
 * always lands exactly when the line arrives regardless of how uneven the
 * spacing between steps is.
 */
export function Journey({ steps }: { steps: Step[] }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const markerRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const trackRef = useRef<SVGPathElement | null>(null);
  const fillRef = useRef<SVGPathElement | null>(null);
  const markerLengthsRef = useRef<number[]>([]);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const wrap = wrapRef.current;
    const svg = svgRef.current;
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!wrap || !svg || !track || !fill) return;

    let cancelled = false;
    let ctxRevert: (() => void) | undefined;
    let ro: ResizeObserver | undefined;
    let scrollTriggerInstance:
      { progress: number; refresh: () => void } | undefined;

    const setMarkerActive = (marker: HTMLSpanElement, active: boolean) => {
      // Swap the base/active pairs rather than layering an override class
      // on top — same-layer Tailwind utilities resolve by generation
      // order, not by position in the class list, so leaving both
      // "bg-background" and "bg-primary" present at once is unreliable.
      marker.classList.toggle("bg-background", !active);
      marker.classList.toggle("bg-primary", active);
      marker.classList.toggle("border-border-strong", !active);
      marker.classList.toggle("border-primary", active);
    };

    /** Fills in every marker the line has already reached at this progress
     * (0–1), and only those — reversible, so scrolling back up empties
     * markers again instead of leaving them permanently lit. */
    const applyProgress = (progress: number) => {
      const total = markerLengthsRef.current.at(-1) ?? 0;
      const reached = progress * total;
      markerRefs.current.forEach((marker, i) => {
        const markerLength = markerLengthsRef.current[i];
        if (!marker || markerLength === undefined) return;
        setMarkerActive(marker, reached >= markerLength - 1);
      });
    };

    /** Builds the `d` string from the markers' and text blocks' real
     * rendered positions and applies it to both paths. Also records each
     * marker's cumulative arc-length position along the path. Returns the
     * new total path length, or null when nothing is measurable yet (e.g.
     * fonts still loading). */
    const measureAndDraw = () => {
      const wrapRect = wrap.getBoundingClientRect();
      if (wrapRect.width === 0) return null;
      const rows = Array.from(
        wrap.querySelectorAll<HTMLElement>("[data-step]"),
      );

      const nodes = markerRefs.current.map((marker, i) => {
        if (!marker) return null;
        const mRect = marker.getBoundingClientRect();
        const row = rows[i];
        const title = row?.querySelector("h3");
        const body = row?.querySelector("p");
        return {
          x: mRect.left + mRect.width / 2 - wrapRect.left,
          y: mRect.top + mRect.height / 2 - wrapRect.top,
          // The vertical span this step's own copy actually occupies —
          // used to keep the connecting curve out of it entirely.
          textTop: title
            ? title.getBoundingClientRect().top - wrapRect.top
            : null,
          textBottom: body
            ? body.getBoundingClientRect().bottom - wrapRect.top
            : null,
        };
      });
      const first = nodes[0];
      if (nodes.length < 2 || !first) return null;

      svg.setAttribute("viewBox", `0 0 ${wrapRect.width} ${wrapRect.height}`);

      const margin = 14;
      const lengths = [0];
      let d = `M ${first.x} ${first.y}`;
      for (let i = 1; i < nodes.length; i++) {
        const p0 = nodes[i - 1];
        const p1 = nodes[i];
        if (!p0 || !p1) continue;

        // Run a straight line at the departure marker's own x until past
        // its own copy, and arrive at the destination marker's x along a
        // straight line starting past where its copy begins — a bezier's
        // control points blend across its *whole* length, so nudging them
        // only shifts the curve, it never actually pins the path flush
        // against an endpoint the way an explicit line segment does.
        let lineEndY = Math.max(p0.y, p0.textBottom ?? p0.y) + margin;
        let bendStartY = Math.min(p1.y, p1.textTop ?? p1.y) - margin;
        if (bendStartY <= lineEndY) {
          const mid = (p0.y + p1.y) / 2;
          lineEndY = mid - 1;
          bendStartY = mid + 1;
        }
        const curveMidY = (lineEndY + bendStartY) / 2;
        d += ` L ${p0.x} ${lineEndY} C ${p0.x} ${curveMidY}, ${p1.x} ${curveMidY}, ${p1.x} ${bendStartY} L ${p1.x} ${p1.y}`;

        // Snapshot the arc length up to this marker so scroll progress can
        // later be compared against it directly, in path-length pixels.
        track.setAttribute("d", d);
        lengths.push(track.getTotalLength());
      }
      track.setAttribute("d", d);
      fill.setAttribute("d", d);
      markerLengthsRef.current = lengths;
      return fill.getTotalLength();
    };

    void (async () => {
      const total = measureAndDraw();
      if (total === null) return;
      fill.style.strokeDasharray = `${total}`;
      fill.style.strokeDashoffset = reduced ? "0" : `${total}`;
      if (reduced) {
        applyProgress(1);
        return;
      }
      applyProgress(0);

      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const tween = gsap.to(fill, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top 78%",
            end: "bottom 62%",
            scrub: 0.6,
            onUpdate: (self) => applyProgress(self.progress),
          },
        });
        scrollTriggerInstance = tween.scrollTrigger;
      }, wrap);
      ctxRevert = () => ctx.revert();
      if (scrollTriggerInstance) applyProgress(scrollTriggerInstance.progress);

      // ResizeObserver always fires once immediately on observe(); that
      // first call must be ignored, or it stomps the dashoffset ScrollTrigger
      // just set back to "fully hidden" before the user ever scrolls.
      let firstResize = true;
      ro = new ResizeObserver(() => {
        if (firstResize) {
          firstResize = false;
          return;
        }
        const progress = scrollTriggerInstance?.progress ?? 0;
        const newTotal = measureAndDraw();
        if (newTotal === null) return;
        fill.style.strokeDasharray = `${newTotal}`;
        fill.style.strokeDashoffset = `${newTotal * (1 - progress)}`;
        applyProgress(progress);
        ScrollTrigger.refresh();
      });
      ro.observe(wrap);
    })();

    return () => {
      cancelled = true;
      ctxRevert?.();
      ro?.disconnect();
    };
  }, [reduced, steps.length]);

  return (
    <div ref={wrapRef} className="relative">
      <ScrollPath className="left-[1.125rem] top-3 bottom-6 md:hidden" />
      <svg
        ref={svgRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden w-full md:block"
      >
        <path
          ref={trackRef}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="1.5"
        />
        <path
          ref={fillRef}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {steps.map((step, i) => {
        const rightSide = i % 2 === 1;
        return (
          <div
            key={step.title}
            data-step
            className={`relative flex py-9 first:pt-0 last:pb-0 md:py-16 ${
              rightSide ? "md:justify-end" : "md:justify-start"
            }`}
          >
            <div className="flex gap-5 md:w-[44%] md:gap-6">
              <span
                ref={(el) => {
                  markerRefs.current[i] = el;
                }}
                className="size-9 shrink-0 rounded-full border border-border-strong bg-background transition-colors duration-300 md:size-12"
              />
              <div className="pt-1">
                <h3 className="display-3 text-foreground">{step.title}</h3>
                <p className="small-copy measure mt-3 text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
