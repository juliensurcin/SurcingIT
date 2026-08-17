import { whyUs } from "@/content/home";
import { useScrollReveal } from "@/lib/motion";
import { ScrollPath } from "@/components/site/sourcing/ScrollPath";

const clientColumn = whyUs.columns[0]!;
const consultantColumn = whyUs.columns[1]!;
const rows = clientColumn.points.map((client, i) => ({
  client,
  consultant: consultantColumn.points[i]!,
}));

/** Dot marker on the rail, matching sourcing/Formulas.tsx exactly. */
function RailDot({ className = "" }: { className?: string }) {
  return <span className={`size-2.5 rounded-full bg-primary ${className}`} />;
}

export function WhyUs() {
  const desktopRef = useScrollReveal<HTMLDivElement>({
    stagger: "[data-why-row]",
    variant: "rows",
  });
  const mobileRef = useScrollReveal<HTMLDivElement>({
    stagger: "[data-why-row]",
    variant: "rows",
  });

  return (
    <section id="pourquoi" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <h2 className="display-2 max-w-[42rem] text-foreground">
          {whyUs.title}
        </h2>

        {/* Desktop: shared centre rail, client/consultant claims mirrored
            left/right of it per row — same rail+dot mechanism as the
            Sourcing page's "Trois façons de travailler ensemble", adapted
            from a sequential list to two parallel, equally-weighted
            columns instead of forcing an artificial single-file order. */}
        <div
          ref={desktopRef}
          className="relative mt-12 hidden md:mt-16 md:block"
        >
          <ScrollPath className="left-1/2 top-16 bottom-8" />

          <div className="grid grid-cols-2 gap-0 pb-8">
            <p className="display-4 pr-12 text-right text-foreground lg:pr-16">
              {clientColumn.label}
            </p>
            <p className="display-4 pl-12 text-foreground lg:pl-16">
              {consultantColumn.label}
            </p>
          </div>

          {rows.map((row, i) => (
            <div
              key={i}
              data-why-row
              className="relative grid grid-cols-2 gap-0 pb-16 last:pb-0"
            >
              <RailDot className="absolute left-1/2 top-2 -translate-x-1/2" />
              <p className="display-3 border-r border-border pr-12 text-right text-foreground lg:pr-16">
                {row.client}
              </p>
              <p className="display-3 border-l border-border pl-12 text-foreground lg:pl-16">
                {row.consultant}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: keep the two audiences visually grouped and labelled
            (collapsing straight to interleaved rows would blur which
            claim is for which audience) — one continuous rail runs
            through both groups. */}
        <div ref={mobileRef} className="relative mt-12 pl-12 md:hidden">
          <ScrollPath className="left-[0.9375rem] top-3 bottom-6" />
          {whyUs.columns.map((col) => (
            <div key={col.label}>
              <p className="display-4 mb-2 mt-10 text-foreground first:mt-0">
                {col.label}
              </p>
              {col.points.map((p) => (
                <div
                  key={p}
                  data-why-row
                  className="relative border-b border-border py-5 first:border-t"
                >
                  <RailDot className="absolute -left-12 top-6" />
                  <p className="body-copy text-foreground">{p}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
