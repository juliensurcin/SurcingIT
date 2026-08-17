import { formulasSection } from "@/content/sourcing";
import { useScrollReveal } from "@/lib/motion";
import { ScrollPath } from "./ScrollPath";

export function Formulas() {
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-formula]",
    variant: "rows",
  });

  return (
    <section id="formules" className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="max-w-[42rem]">
          <h2 className="display-2 text-foreground">{formulasSection.title}</h2>
        </div>

        <div ref={ref} className="relative mt-12 pl-12 md:mt-16 md:pl-0">
          {/* mobile rail */}
          <ScrollPath className="left-[0.9375rem] top-3 bottom-6 md:hidden" />
          {/* desktop centre rail */}
          <ScrollPath className="left-1/2 top-2 bottom-8 hidden md:block" />

          {formulasSection.items.map((item, i) => {
            const right = i % 2 === 1;
            return (
              <article
                key={item.title}
                data-formula
                className="relative pb-14 last:pb-0 md:grid md:grid-cols-2 md:gap-0 md:pb-20"
              >
                <span
                  className={`absolute -left-12 top-2 size-2.5 rounded-full bg-primary md:left-1/2 md:-translate-x-1/2 ${
                    right ? "" : ""
                  }`}
                />
                <div
                  className={
                    right
                      ? "md:col-start-2 md:border-l md:border-border md:pl-12 lg:pl-16"
                      : "md:col-start-1 md:border-r md:border-border md:pr-12 md:text-right lg:pr-16"
                  }
                >
                  <h3 className="display-3 text-foreground">{item.title}</h3>
                  <p
                    className={`small-copy mt-4 text-muted-foreground ${right ? "measure" : "measure md:ml-auto"}`}
                  >
                    {item.body}
                  </p>
                  <div
                    className={`mt-6 border-t border-border pt-5 ${right ? "" : "md:ml-auto"} max-w-[46ch]`}
                  >
                    <p className="text-[0.8125rem] font-semibold text-foreground">
                      {item.noteLabel}
                    </p>
                    <p className="small-copy mt-2 text-muted-foreground">
                      {item.note}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
