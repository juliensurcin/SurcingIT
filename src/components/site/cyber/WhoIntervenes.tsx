import { whoIntervenes } from "@/content/cyber";
import { useScrollReveal } from "@/lib/motion";

export function WhoIntervenes() {
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-profile]",
    variant: "rows",
  });

  return (
    <section
      id="consultants-cyber"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="max-w-[42rem]">
          <h2 className="display-2 text-foreground">{whoIntervenes.title}</h2>
          <p className="lead measure mt-4 text-muted-foreground">
            {whoIntervenes.body}
          </p>
        </div>
        <div ref={ref} className="mt-12 border-t border-border">
          {whoIntervenes.profiles.map((p) => (
            <div
              key={p.title}
              data-profile
              className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-border py-6"
            >
              <h3 className="display-4 text-foreground">{p.title}</h3>
              <p className="small-copy text-muted-foreground">{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
