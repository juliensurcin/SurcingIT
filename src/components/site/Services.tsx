import { Link } from "@tanstack/react-router";
import { useHomeContent } from "@/content/home";
import { useScrollReveal } from "@/lib/motion";

export function Services() {
  const { services, servicesIntro } = useHomeContent();
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-service-row]",
    variant: "rows",
  });

  return (
    <section id="services" className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        {/* Header runs wide instead of sitting in a narrow rail with empty
            space beside it: title and subtitle share the same block. */}
        <div className="max-w-[42rem]">
          <h2 className="display-2 text-foreground">{servicesIntro.title}</h2>
          <p className="small-copy measure mt-4 text-muted-foreground">
            {servicesIntro.subtitle}
          </p>
        </div>

        {/* Rows, not cards. Hairlines do the structural work. */}
        <div ref={ref} className="mt-12 border-t border-border md:mt-16">
          {services.map((s) => (
            <article
              key={s.title}
              data-service-row
              className="group grid gap-3 border-b border-border py-10 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:gap-12 md:py-12"
            >
              <h3 className="display-3 text-foreground">
                {"href" in s && s.href ? (
                  <Link
                    to={s.href}
                    className="link-underline transition-colors hover:text-primary"
                  >
                    {s.title}
                  </Link>
                ) : (
                  s.title
                )}
              </h3>
              <div>
                <p className="small-copy measure text-muted-foreground">
                  {s.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[0.8125rem] text-muted-foreground">
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
