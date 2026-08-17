import { nis2Section } from "@/content/grc";
import { useScrollReveal } from "@/lib/motion";

export function Nis2() {
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-block]",
    variant: "rows",
  });

  return (
    <section id="nis2" className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="max-w-[42rem]">
          <h2 className="display-2 text-foreground">{nis2Section.title}</h2>
        </div>

        <div
          ref={ref}
          className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,52fr)_minmax(0,48fr)] lg:gap-24"
        >
          <div data-block className="border-t border-border pt-10">
            {nis2Section.paragraphs.map((p) => (
              <p
                key={p}
                className="small-copy measure text-muted-foreground [&+&]:mt-6"
              >
                {p}
              </p>
            ))}
            <p className="small-copy measure mt-10 border-l-2 border-primary pl-6 text-foreground">
              {nis2Section.role}
            </p>
          </div>

          <div
            data-block
            className="border border-border bg-surface p-8 md:p-10"
          >
            <p className="text-[0.8125rem] font-semibold text-primary">
              ANSSI, mars 2026
            </p>
            <h3 className="display-3 mt-6 text-foreground">
              {nis2Section.callout.label}
            </h3>

            <div className="mt-8 grid grid-cols-2 gap-4 border-y border-border py-8">
              {nis2Section.callout.stats.map((s) => (
                <div key={s.label}>
                  <p className="display-2 text-primary">{s.value}</p>
                  <p className="mt-2 text-[0.8125rem] text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="small-copy mt-8 text-muted-foreground">
              {nis2Section.callout.body}
            </p>
            <p className="small-copy mt-6 text-muted-foreground">
              {nis2Section.callout.linkBody}
            </p>
            <a
              href={nis2Section.callout.linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-6 inline-block text-[0.9375rem] font-medium text-primary hover:text-primary/80"
            >
              {nis2Section.callout.linkLabel} ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
