import { useGrcContent } from "@/content/grc";
import { useScrollReveal } from "@/lib/motion";

export function Pillars() {
  const { grcPillars } = useGrcContent();
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-pillar]",
    variant: "rows",
  });

  return (
    <section id="piliers" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="max-w-[42rem]">
          <h2 className="display-2 text-foreground">{grcPillars.title}</h2>
        </div>

        <div ref={ref} className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-3">
          {grcPillars.items.map((item) => (
            <article
              key={item.title}
              data-pillar
              className="group relative flex flex-col overflow-hidden border border-border bg-background p-8 transition-colors duration-500 hover:border-primary/40 md:p-10"
            >
              <span
                aria-hidden="true"
                className="display-1 pointer-events-none absolute -right-2 -top-6 text-[6rem] leading-none text-border transition-colors duration-500 group-hover:text-primary/15 md:text-[7.5rem]"
              >
                {item.letter}
              </span>
              <h3 className="display-3 relative text-foreground">
                {item.title}
              </h3>
              <p className="small-copy relative mt-6 text-muted-foreground">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
