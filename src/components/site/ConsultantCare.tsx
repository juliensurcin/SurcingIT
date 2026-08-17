import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { consultantCare } from "@/content/home";
import { useScrollReveal } from "@/lib/motion";

/**
 * Same editorial accordion pattern as securite-managee's Levels.tsx: each
 * item expands in place on click, one open by default. No floating
 * diagram — the content is the interaction.
 */
export function ConsultantCare() {
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-care-item]",
    variant: "rows",
  });

  return (
    <section
      id="consultants"
      className="border-t border-border bg-surface-raised"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="max-w-[42rem]">
          <h2 className="display-2 text-foreground">{consultantCare.title}</h2>
          <p className="small-copy measure mt-4 text-muted-foreground">
            {consultantCare.subtitle}
          </p>
        </div>

        <div ref={ref} className="mt-12 md:mt-16">
          <Accordion
            type="single"
            collapsible
            defaultValue={consultantCare.cards[0]!.title}
            className="border-t border-border"
          >
            {consultantCare.cards.map((c) => (
              <AccordionItem
                key={c.title}
                value={c.title}
                data-care-item
                className="group border-b border-border"
              >
                <AccordionTrigger className="items-start gap-6 py-7 hover:no-underline md:py-9 [&>svg]:mt-2 [&>svg]:size-5 [&>svg]:text-muted-foreground [&>svg]:transition-transform [&>svg]:duration-500 group-data-[state=open]:[&>svg]:text-primary">
                  <h3 className="display-3 text-foreground transition-colors duration-500 group-hover:text-primary group-data-[state=open]:text-primary">
                    {c.title}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="pb-10 pt-0 md:pb-14">
                  <p className="small-copy measure text-muted-foreground">
                    {c.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
