import { whyUs } from "@/content/home";
import { useScrollReveal } from "@/lib/motion";

export function WhyUs() {
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-why-point]",
    variant: "rows",
  });

  return (
    <section id="pourquoi" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <h2 className="display-2 max-w-[42rem] text-foreground">
          {whyUs.title}
        </h2>

        <div
          ref={ref}
          className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-10"
        >
          {whyUs.columns.map((col) => (
            <div key={col.label}>
              <p className="display-4 border-b border-border-strong pb-4 text-foreground">
                {col.label}
              </p>
              <ol className="mt-2">
                {col.points.map((p) => (
                  <li
                    key={p}
                    data-why-point
                    className="border-b border-border py-5 first:pt-6"
                  >
                    <span className="small-copy text-foreground">{p}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
