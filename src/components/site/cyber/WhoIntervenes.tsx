import { useCyberContent } from "@/content/cyber";
import { useScrollReveal } from "@/lib/motion";
import { CertMosaic } from "@/components/site/cyber/CertMosaic";

/**
 * Was the same IconCloud sphere as the home page's About section (dev/cyber
 * tool logos, drag-to-spin) — swapped for CertMosaic (a flat scattered
 * grid, see CertMosaic.tsx) once the two spheres started reading as the
 * same animation applied twice, one page-hop apart. IconCloud itself is
 * untouched and still lives on About.
 */
export function WhoIntervenes() {
  const { whoIntervenes } = useCyberContent();
  const ref = useScrollReveal<HTMLDivElement>({ variant: "block" });

  return (
    <section
      id="consultants-cyber"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
        <div
          ref={ref}
          className="grid gap-12 md:grid-cols-[minmax(0,1fr)_22rem] md:items-center md:gap-16"
        >
          <div className="max-w-[42rem]">
            <h2 className="display-2 text-foreground">{whoIntervenes.title}</h2>
            <p className="lead measure mt-4 text-muted-foreground">
              {whoIntervenes.body}
            </p>
          </div>

          <CertMosaic />
        </div>
      </div>
    </section>
  );
}
