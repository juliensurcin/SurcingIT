import { useSourcingContent } from "@/content/sourcing";
import { useScrollReveal } from "@/lib/motion";

export function ConsultantSide() {
  const { consultantSide } = useSourcingContent();
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-benefit]",
    variant: "rows",
  });

  return (
    <section id="consultants" className="border-t border-border bg-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="max-w-[42rem]">
          <h2 className="display-2 text-background">{consultantSide.title}</h2>
          <p className="lead measure mt-4 text-background/70">
            {consultantSide.intro}
          </p>
        </div>

        <div ref={ref} className="mt-12 border-t border-background/15 md:mt-16">
          {consultantSide.benefits.map((b) => (
            <article
              key={b.title}
              data-benefit
              className="grid gap-3 border-b border-background/15 py-8 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:gap-12"
            >
              <h3 className="display-4 text-background">{b.title}</h3>
              <p className="small-copy measure text-background/70">{b.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
