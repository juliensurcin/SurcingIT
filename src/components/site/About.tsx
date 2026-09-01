import { useHomeContent } from "@/content/home";
import { useScrollReveal } from "@/lib/motion";
import { IconCloud } from "@/components/site/IconCloud/IconCloud";

export function About() {
  const { about } = useHomeContent();
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-pillar]",
    variant: "rows",
  });
  const [firstParagraph, ...rest] = about.paragraphs;

  return (
    <section id="adn" className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_22rem] md:items-center md:gap-16">
          <div>
            <h2 className="display-2 max-w-[42rem] text-foreground">
              {about.title}
            </h2>

            <div className="mt-8 max-w-[46rem] md:mt-10">
              {/* Pulled-out lead sentence, then the quieter supporting copy. */}
              <p className="lead measure font-medium text-foreground">
                {firstParagraph}
              </p>
              {rest.map((p) => (
                <p
                  key={p}
                  className="body-copy measure mt-6 text-muted-foreground"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <IconCloud />
        </div>

        <div
          ref={ref}
          className="mt-16 grid border-t border-border md:mt-20 md:grid-cols-3"
        >
          {about.pillars.map((p, i) => (
            <div
              key={p.title}
              data-pillar
              className={`border-b border-border py-8 md:border-b-0 md:pr-10 ${
                i > 0 ? "md:border-l md:border-border md:pl-10" : ""
              }`}
            >
              <h3 className="display-4 text-foreground">{p.title}</h3>
              <p className="small-copy mt-3 text-muted-foreground">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
