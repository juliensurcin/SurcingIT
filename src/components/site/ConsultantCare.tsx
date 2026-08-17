import { consultantCare } from "@/content/home";
import { useScrollReveal } from "@/lib/motion";

export function ConsultantCare() {
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-care-row]",
    variant: "rows",
  });

  return (
    <section
      id="consultants"
      className="border-t border-border bg-surface-raised"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="max-w-[42rem]">
          <h2 className="display-2 text-foreground">{consultantCare.title}</h2>
          <p className="small-copy measure mt-4 text-muted-foreground">
            {consultantCare.subtitle}
          </p>
        </div>

        <div ref={ref} className="mt-12 border-t border-border md:mt-16">
          {consultantCare.cards.map((c) => (
            <article
              key={c.title}
              data-care-row
              className="grid gap-2 border-b border-border py-8 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:gap-12"
            >
              <h3 className="display-4 text-foreground">{c.title}</h3>
              <p className="small-copy measure text-muted-foreground">
                {c.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
