import { useConseilContent } from "@/content/conseil";
import { useScrollReveal } from "@/lib/motion";

/** Editorial dossier: ghost numerals + hairline rows, detail always in the HTML. */
export function Domains() {
  const { conseilDomains } = useConseilContent();
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-domain]",
    variant: "rows",
  });

  return (
    <section id="perimetre" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,34fr)_minmax(0,66fr)] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="display-2 text-foreground">
              {conseilDomains.title}
            </h2>
            <p className="small-copy measure mt-6 text-muted-foreground">
              {conseilDomains.subtitle}
            </p>
            <ol className="mt-10 hidden border-t border-border lg:block">
              {conseilDomains.items.map((it) => (
                <li
                  key={it.title}
                  className="border-b border-border py-3 text-[0.8125rem] text-muted-foreground"
                >
                  {it.title}
                </li>
              ))}
            </ol>
          </div>

          <div ref={ref} className="border-t border-border">
            {conseilDomains.items.map((it) => (
              <article
                key={it.title}
                data-domain
                className="group border-b border-border py-10 md:py-12"
              >
                <div className="max-w-3xl">
                  <h3 className="display-3 text-foreground transition-transform duration-500 ease-out group-hover:translate-x-1">
                    {it.title}
                  </h3>
                  <p className="small-copy measure mt-5 text-muted-foreground">
                    {it.body}
                  </p>
                  {it.note ? (
                    <p className="small-copy measure mt-6 border-l border-primary pl-5 text-foreground">
                      {it.note}
                    </p>
                  ) : null}
                  <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-[0.8125rem] text-muted-foreground">
                    {it.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
