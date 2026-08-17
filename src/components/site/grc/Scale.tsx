import { scaleSection } from "@/content/grc";
import { useScrollReveal } from "@/lib/motion";

export function Scale() {
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-bucket]",
    variant: "rows",
  });

  return (
    <section
      id="proportionnalite"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:gap-24">
          <div>
            <h2 className="display-2 text-foreground">{scaleSection.title}</h2>
            {scaleSection.paragraphs.map((p) => (
              <p
                key={p}
                className="small-copy measure mt-4 text-muted-foreground [&+p]:mt-4"
              >
                {p}
              </p>
            ))}
          </div>

          <div ref={ref} className="flex flex-col justify-center gap-6">
            {scaleSection.buckets.map((b, i) => (
              <div key={b.label} data-bucket>
                <div className="flex items-baseline justify-between gap-6">
                  <p
                    className={`text-[0.9375rem] font-medium ${
                      i === 0 ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {b.label}
                  </p>
                  <p className="text-[0.8125rem] text-muted-foreground">
                    {b.note}
                  </p>
                </div>
                <div className="mt-3 h-1.5 w-full bg-surface-strong">
                  <div
                    className={`h-full ${i === 0 ? "bg-primary" : "bg-border-strong"}`}
                    style={{ width: `${b.weight}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
