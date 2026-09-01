import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { brand } from "@/content/home";
import { useRecyfContent } from "@/content/recyf";
import { useUiContent } from "@/content/ui";
import { usePrefersReducedMotion, useScrollReveal } from "@/lib/motion";

type Status = "EI" | "EE";

const SHARED_COUNT = 15;
const EE_ONLY_COUNT = 5;

/**
 * The page's one authored *interaction* moment (distinct from the shared
 * scroll-reveal entrance every section already uses): a real EI/EE toggle
 * against the ReCyF's own 20 objectives, sourced from the ANSSI working
 * document (v2.5, 17/03/2026) rather than approximated — objectifs 16-20
 * are EE-only per the document's own proportionality principle.
 */
export function RecyfSimulator() {
  const { recyfIntro, recyfPillars, recyfCta } = useRecyfContent();
  const { recyfToggle } = useUiContent();
  const mailto = `mailto:${brand.email}?subject=${encodeURIComponent(recyfIntro.mailtoSubject)}`;
  const [status, setStatus] = useState<Status>("EI");
  const reduced = usePrefersReducedMotion();
  const countRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useScrollReveal<HTMLDivElement>({
    stagger: "[data-line]",
    variant: "lines",
  });

  const applicableCount =
    status === "EI" ? SHARED_COUNT : SHARED_COUNT + EE_ONLY_COUNT;

  useEffect(() => {
    const el = countRef.current;
    if (!el) return;
    if (reduced) {
      el.textContent = String(applicableCount);
      return;
    }
    const current = Number(el.textContent) || SHARED_COUNT;
    const obj = { val: current };
    const tween = gsap.to(obj, {
      val: applicableCount,
      duration: 0.6,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = String(Math.round(obj.val));
      },
    });
    return () => {
      tween.kill();
    };
  }, [applicableCount, reduced]);

  return (
    <section
      id="recyf-simulateur"
      className="border-t border-border bg-surface"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div
          ref={sectionRef}
          className="grid gap-12 lg:grid-cols-[minmax(0,40fr)_minmax(0,60fr)] lg:gap-24"
        >
          <div data-line className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="display-2 text-foreground">{recyfIntro.title}</h2>
            <p className="small-copy measure mt-6 text-muted-foreground">
              {recyfIntro.body}
            </p>

            <div
              role="group"
              aria-label={recyfIntro.statusAriaLabel}
              className="relative mt-10 inline-flex border border-border bg-background p-1"
            >
              {(["EI", "EE"] as Status[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={status === s}
                  onClick={() => setStatus(s)}
                  className={`relative z-10 cursor-pointer px-5 py-2.5 text-[0.8125rem] font-medium transition-colors duration-300 ${
                    status === s
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {status === s && (
                    <motion.span
                      layoutId="recyf-toggle-pill"
                      className="absolute inset-0 -z-10 bg-primary"
                      transition={
                        reduced
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 420, damping: 34 }
                      }
                    />
                  )}
                  {s === "EI" ? recyfToggle.ei : recyfToggle.ee}
                </button>
              ))}
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <p className="display-2 text-primary">
                <span ref={countRef}>{SHARED_COUNT}</span>
              </p>
              <p className="small-copy mt-2 text-muted-foreground">
                {recyfIntro.applicableLabelPrefix}{" "}
                {recyfPillars.reduce((n, g) => n + g.objectives.length, 0)}
              </p>
            </div>

            <p className="small-copy measure mt-8 border-l-2 border-primary pl-6 text-foreground">
              {recyfIntro.note}
            </p>

            <a
              href={mailto}
              className="press mt-8 inline-block bg-primary px-6 py-4 text-[0.9375rem] font-medium text-primary-foreground hover:bg-primary/90"
            >
              {recyfCta.cta}
            </a>
          </div>

          <div data-line>
            {recyfPillars.map((group) => (
              <div
                key={group.pillar}
                className="border-t border-border py-8 first:pt-0"
              >
                <p className="text-[0.8125rem] font-semibold text-primary">
                  {group.pillar}
                </p>
                <ul className="mt-4">
                  {group.objectives.map((obj) => {
                    const inactive = obj.eeOnly && status === "EI";
                    return (
                      <li
                        key={obj.number}
                        className={`flex items-baseline gap-4 border-t border-border py-3 transition-opacity duration-500 first:border-t-0 ${
                          inactive ? "opacity-35" : "opacity-100"
                        }`}
                      >
                        <span className="w-6 shrink-0 text-[0.8125rem] tabular-nums text-muted-foreground">
                          {String(obj.number).padStart(2, "0")}
                        </span>
                        <span
                          className={`small-copy ${inactive ? "text-muted-foreground" : "text-foreground"}`}
                        >
                          {obj.title}
                        </span>
                        {obj.eeOnly && (
                          <span className="ml-auto shrink-0 whitespace-nowrap text-[0.8125rem] text-muted-foreground">
                            {recyfIntro.eeOnlyLabel}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
