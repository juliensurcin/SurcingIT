import { useConseilContent } from "@/content/conseil";
import { useScrollReveal } from "@/lib/motion";

/** Diptych: recurring engagement (light) vs one-off engagement (inverted). */
export function Formats() {
  const { conseilFormats } = useConseilContent();
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-format]",
    variant: "rows",
  });

  return (
    <section id="formats" className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="max-w-[42rem]">
          <h2 className="display-2 text-foreground">{conseilFormats.title}</h2>
        </div>

        <div
          ref={ref}
          className="mt-12 grid gap-px border border-border md:mt-16 md:grid-cols-2"
        >
          {conseilFormats.items.map((f, i) => {
            const dark = i === 1;
            return (
              <article
                key={f.title}
                data-format
                className={`group flex flex-col p-8 md:p-12 ${
                  dark ? "bg-foreground" : "bg-surface"
                }`}
              >
                <span
                  className={`text-[0.8125rem] font-semibold ${
                    dark ? "text-background/60" : "text-primary"
                  }`}
                >
                  {f.kicker}
                </span>

                <h3
                  className={`display-3 mt-8 transition-transform duration-500 ease-out group-hover:translate-x-1 ${
                    dark ? "text-background" : "text-foreground"
                  }`}
                >
                  {f.title}
                </h3>
                <p
                  className={`small-copy measure mt-6 ${
                    dark ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {f.body}
                </p>

                <div
                  className={`mt-10 border-t pt-6 md:mt-auto md:pt-8 ${
                    dark ? "border-background/20" : "border-border"
                  }`}
                >
                  <p
                    className={`text-[0.8125rem] font-semibold ${
                      dark ? "text-background/50" : "text-muted-foreground"
                    }`}
                  >
                    {conseilFormats.forWhoLabel}
                  </p>
                  <p
                    className={`small-copy measure mt-3 ${
                      dark ? "text-background/80" : "text-foreground"
                    }`}
                  >
                    {f.forWho}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
