import { conseilApproach } from "@/content/conseil";
import { useScrollReveal } from "@/lib/motion";

/** Four moves, laid out as a typographic staircase. No acronym, no twelve phases. */
export function Approach() {
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-move]",
    variant: "rows",
  });

  return (
    <section id="methode" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="max-w-[42rem]">
          <h2 className="display-2 text-foreground">{conseilApproach.title}</h2>
          <p className="lead measure mt-8 border-t border-border pt-8 text-foreground">
            {conseilApproach.pull}
          </p>
        </div>

        <div ref={ref} className="mt-12 md:mt-16">
          {conseilApproach.steps.map((s, i) => (
            <article
              key={s.title}
              data-move
              className={`border-t border-border py-9 last:border-b md:py-10 ${
                ["lg:pl-0", "lg:pl-8", "lg:pl-16", "lg:pl-24"][i] ?? "lg:pl-0"
              }`}
            >
              <h3 className="display-4 text-foreground">{s.title}</h3>
              <p className="small-copy measure mt-3 text-muted-foreground">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
