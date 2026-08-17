import { partnersSection, partnerLogos } from "@/content/securite-managee";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { useScrollReveal } from "@/lib/motion";

export function Partners() {
  const ref = useScrollReveal<HTMLDivElement>({ variant: "block" });

  return (
    <section id="partenaires" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="max-w-[42rem]">
          <h2 className="display-2 text-foreground">{partnersSection.title}</h2>
          <p className="small-copy measure mt-4 text-muted-foreground">
            {partnersSection.body}
          </p>
        </div>

        <div ref={ref} className="mt-12 border-t border-border md:mt-16">
          <LogoCloud logos={partnerLogos} className="py-10 md:py-12" />
        </div>

        <div className="mt-12 grid gap-px bg-border md:mt-16 md:grid-cols-2">
          {partnersSection.constraints.map((c) => (
            <div key={c.title} className="bg-background p-8 md:p-10">
              <h3 className="display-3 text-foreground">{c.title}</h3>
              <p className="small-copy measure mt-6 text-muted-foreground">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
