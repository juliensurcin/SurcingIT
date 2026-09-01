import { useGouvernanceConseilContent } from "@/content/gouvernance-conseil";
import { useScrollReveal } from "@/lib/motion";

export function Argument() {
  const { gouvernanceConseilArgument } = useGouvernanceConseilContent();
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-stat]",
    variant: "rows",
  });

  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div
          ref={ref}
          className="grid gap-12 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:gap-24"
        >
          <div data-stat>
            <h2 className="display-2 text-foreground">
              {gouvernanceConseilArgument.title}
            </h2>
            <p className="small-copy measure mt-6 text-muted-foreground">
              {gouvernanceConseilArgument.body}
            </p>
          </div>

          <div
            data-stat
            className="grid gap-px border border-border sm:grid-cols-2"
          >
            {gouvernanceConseilArgument.stats.map((s) => (
              <div key={s.label} className="bg-background p-8 md:p-10">
                <p className="display-2 text-primary">{s.value}</p>
                <p className="small-copy mt-4 text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
