import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { levelsSection } from "@/content/securite-managee";
import { useScrollReveal } from "@/lib/motion";

/**
 * Editorial numbered accordion: each acronym expands in place with a slow,
 * smooth height reveal. No floating diagram — the content is the interaction.
 */
export function Levels() {
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-level]",
    variant: "rows",
  });

  return (
    <section id="niveaux" className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="max-w-[42rem]">
          <h2 className="display-2 text-foreground">{levelsSection.title}</h2>
          <p className="small-copy measure mt-4 text-muted-foreground">
            {levelsSection.intro}
          </p>
        </div>

        <div ref={ref} className="mt-12 md:mt-16">
          <Accordion
            type="single"
            collapsible
            defaultValue={levelsSection.items[0]!.code}
            className="border-t border-border"
          >
            {levelsSection.items.map((l) => (
              <AccordionItem
                key={l.code}
                value={l.code}
                data-level
                className="group border-b border-border"
              >
                <AccordionTrigger className="items-start gap-6 py-7 hover:no-underline md:py-9 [&>svg]:mt-2 [&>svg]:size-5 [&>svg]:text-muted-foreground [&>svg]:transition-transform [&>svg]:duration-500 group-data-[state=open]:[&>svg]:text-primary">
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                    <h3 className="display-3 text-foreground transition-colors duration-500 group-hover:text-primary group-data-[state=open]:text-primary">
                      {l.code}
                    </h3>
                    <span className="display-4 font-normal text-muted-foreground">
                      {l.metaphor}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-10 pt-0 md:pb-14">
                  <div>
                    <p className="text-[0.8125rem] font-semibold text-primary">
                      {l.full}
                    </p>
                    <p className="small-copy measure mt-5 text-muted-foreground">
                      {l.body}
                    </p>
                    <p className="mt-8 border-t border-border pt-6 text-[0.8125rem] text-muted-foreground">
                      {l.scope}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
