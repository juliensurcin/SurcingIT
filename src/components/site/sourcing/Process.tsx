import { processSection } from "@/content/sourcing";
import { Journey } from "./Journey";

export function Process() {
  return (
    <section id="processus" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="max-w-[42rem]">
          <h2 className="display-2 text-foreground">{processSection.title}</h2>
          <p className="small-copy measure mt-4 text-muted-foreground">
            {processSection.subtitle}
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <Journey steps={processSection.steps} />
        </div>
      </div>
    </section>
  );
}
