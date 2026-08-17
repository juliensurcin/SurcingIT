import { socSection } from "@/content/securite-managee";
import { useScrollReveal } from "@/lib/motion";

export function Soc() {
  const ref = useScrollReveal<HTMLDListElement>({
    stagger: "[data-fact]",
    variant: "rows",
  });

  return (
    <section id="soc" className="border-t border-border bg-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="max-w-[42rem]">
          <h2 className="display-2 text-background">{socSection.title}</h2>
          {socSection.paragraphs.map((p, i) => (
            <p
              key={p}
              className={`measure ${i === 0 ? "lead mt-4 text-background" : "small-copy mt-6 text-background/70"}`}
            >
              {p}
            </p>
          ))}
        </div>

        <dl
          ref={ref}
          className="mt-12 grid divide-y divide-background/15 border-t border-background/15 md:mt-16 md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          {socSection.facts.map((f, i) => (
            <div
              key={f.label}
              data-fact
              className={`py-8 ${i === 0 ? "md:pr-10" : "md:px-10"}`}
            >
              <dt className="text-3xl font-semibold tracking-tight text-primary">
                {f.value}
              </dt>
              <dd className="small-copy mt-3 text-background/70">{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
