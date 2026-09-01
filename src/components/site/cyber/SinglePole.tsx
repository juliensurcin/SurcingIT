import { useCyberContent } from "@/content/cyber";
import { useScrollReveal } from "@/lib/motion";

export function SinglePole() {
  const { singlePole } = useCyberContent();
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-panel]",
    variant: "rows",
  });

  return (
    <section id="approche" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div className="max-w-[42rem]">
          <h2 className="display-2 text-foreground">{singlePole.title}</h2>
        </div>

        <div
          ref={ref}
          className="mt-12 grid gap-px bg-border md:mt-16 md:grid-cols-2"
        >
          <div data-panel className="bg-background p-8 md:p-12">
            <p className="text-[0.8125rem] font-semibold text-muted-foreground">
              {singlePole.fragmented.label}
            </p>
            <p className="lead measure mt-6 text-muted-foreground">
              {singlePole.fragmented.body}
            </p>
          </div>
          <div data-panel className="bg-background p-8 md:p-12">
            <p className="text-[0.8125rem] font-semibold text-primary">
              {singlePole.ours.label}
            </p>
            <p className="lead measure mt-6 text-foreground">
              {singlePole.ours.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
