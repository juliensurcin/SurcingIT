import { useEffect, useRef } from "react";
import { useManagedContent } from "@/content/securite-managee";
import { usePrefersReducedMotion } from "@/lib/motion";

/**
 * A magnetic hover cluster: logos sit at hand-placed, loosely scattered
 * positions (not a grid — DESIGN.md bans icon-grid scaffolding), each
 * pulled gently toward the cursor when it passes nearby. Distinct from
 * every other logo treatment on the site: IconCloud's drag-to-spin 3D
 * sphere (home About), CertMosaic's scatter-grid with a center-out
 * entrance and idle ripple (cyber/gouvernance pages), and the horizontal
 * infinite marquee (Partners.tsx, lower on this very page).
 */
const LAYOUT = [
  { top: "6%", left: "10%", rotate: -6 },
  { top: "2%", left: "56%", rotate: 4 },
  { top: "34%", left: "0%", rotate: 3 },
  { top: "30%", left: "62%", rotate: -4 },
  { top: "62%", left: "22%", rotate: 5 },
  { top: "60%", left: "72%", rotate: -3 },
] as const;

const RADIUS = 120;
const STRENGTH = 0.32;

export function SolutionsCluster() {
  const { emailProtectionSection } = useManagedContent();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container || reduced) return;

    const handleMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      tileRefs.current.forEach((el, i) => {
        if (!el) return;
        const lx = el.offsetLeft + el.offsetWidth / 2;
        const ly = el.offsetTop + el.offsetHeight / 2;
        const dx = px - lx;
        const dy = py - ly;
        const dist = Math.hypot(dx, dy);
        const base = LAYOUT[i]!.rotate;
        if (dist < RADIUS) {
          const pull = 1 - dist / RADIUS;
          el.style.transform = `translate(${dx * STRENGTH * pull}px, ${dy * STRENGTH * pull}px) scale(${1 + 0.16 * pull}) rotate(${base * (1 - pull)}deg)`;
        } else {
          el.style.transform = `rotate(${base}deg)`;
        }
      });
    };

    const handleLeave = () => {
      tileRefs.current.forEach((el, i) => {
        if (el) el.style.transform = `rotate(${LAYOUT[i]!.rotate}deg)`;
      });
    };

    container.addEventListener("pointermove", handleMove);
    container.addEventListener("pointerleave", handleLeave);
    return () => {
      container.removeEventListener("pointermove", handleMove);
      container.removeEventListener("pointerleave", handleLeave);
    };
  }, [reduced]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto h-[16rem] w-full max-w-[22rem]"
    >
      {emailProtectionSection.solutionLogos.map((logo, i) => {
        const pos = LAYOUT[i]!;
        return (
          <div
            key={logo.alt}
            ref={(el) => {
              tileRefs.current[i] = el;
            }}
            title={logo.alt}
            style={{
              top: pos.top,
              left: pos.left,
              transform: reduced ? undefined : `rotate(${pos.rotate}deg)`,
              transitionProperty: "transform",
            }}
            className="absolute flex size-20 items-center justify-center border border-border bg-background p-4 transition-transform duration-300 ease-out"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              width={64}
              height={64}
              loading="lazy"
              className="pointer-events-none max-h-full max-w-full select-none object-contain"
            />
          </div>
        );
      })}
    </div>
  );
}
