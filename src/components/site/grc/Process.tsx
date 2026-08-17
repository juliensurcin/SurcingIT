import { processSection } from "@/content/grc";
import { useScrollReveal } from "@/lib/motion";

export function Process() {
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-step]",
    variant: "rows",
  });

  return (
    <section id="methode" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="max-w-[42rem]">
          <h2 className="display-2 text-foreground">{processSection.title}</h2>
        </div>

        <div ref={ref} className="mt-12 border-t border-border md:mt-16">
          {processSection.steps.map((step) => (
            <article
              key={step.title}
              data-step
              className="group grid gap-4 border-b border-border py-10 md:grid-cols-[minmax(0,36fr)_minmax(0,64fr)] md:gap-16 md:py-12"
            >
              <h3 className="display-3 text-foreground transition-colors duration-300 group-hover:text-primary">
                {step.title}
              </h3>
              <p className="small-copy measure text-muted-foreground">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
