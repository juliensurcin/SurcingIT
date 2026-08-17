import { Link } from "@tanstack/react-router";
import { pillarsSection } from "@/content/cyber";
import { useScrollReveal } from "@/lib/motion";

export function Pillars() {
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-pillar]",
    variant: "rows",
  });

  return (
    <section id="piliers" className="border-t border-border bg-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="max-w-[42rem]">
          <h2 className="display-2 text-background">{pillarsSection.title}</h2>
        </div>

        <div ref={ref} className="mt-12 border-t border-background/15 md:mt-16">
          {pillarsSection.items.map((item) => (
            <article
              key={item.title}
              data-pillar
              className="group grid gap-6 border-b border-background/15 py-10 md:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] md:gap-16 md:py-14"
            >
              <div>
                <h3 className="display-3 text-background">{item.title}</h3>
                <p className="small-copy mt-3 text-background/70">
                  {item.lead}
                </p>
              </div>
              <div>
                <p className="small-copy measure text-background/70">
                  {item.body}
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.8125rem] text-background/60">
                  {item.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {item.title === "Sécurité Managée" && (
                  <Link
                    to="/cybersecurite/securite-managee"
                    className="link-underline mt-6 inline-block text-[0.9375rem] font-medium text-primary hover:text-primary/80"
                  >
                    Découvrir la sécurité managée
                  </Link>
                )}
                {item.title === "Test d'intrusion & Audit" && (
                  <Link
                    to="/cybersecurite/test-intrusion-audit"
                    className="link-underline mt-6 inline-block text-[0.9375rem] font-medium text-primary hover:text-primary/80"
                  >
                    Découvrir les tests d'intrusion et audits
                  </Link>
                )}
                {item.title === "GRC : Gouvernance, Risque, Conformité" && (
                  <Link
                    to="/cybersecurite/grc"
                    className="link-underline mt-6 inline-block text-[0.9375rem] font-medium text-primary hover:text-primary/80"
                  >
                    Découvrir la gouvernance, le risque et la conformité
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
