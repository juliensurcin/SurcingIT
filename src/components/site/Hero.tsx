import { brand, hero } from "@/content/home";
import { useScrollReveal } from "@/lib/motion";

/** "Une ESN hybride, orientée terrain" → two lines, second one in the accent. */
function splitTitle(title: string): [string, string | null] {
  const i = title.indexOf(",");
  if (i === -1) return [title, null];
  return [title.slice(0, i + 1), title.slice(i + 1).trim()];
}

export function Hero() {
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-hero-line]",
    variant: "lines",
  });
  const [lead, accent] = splitTitle(hero.title);

  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Single confident column: type and space carry the hero, no
            unexplained empty half. */}
        <div
          ref={ref}
          className="max-w-[46rem] pb-10 pt-10 md:pb-12 md:pt-12 lg:pt-14"
        >
          <h1 data-hero-line className="display-1 text-foreground">
            {lead}
            {accent ? (
              <>
                <br />
                <span className="font-normal text-primary">{accent}</span>
              </>
            ) : null}
          </h1>
          <p data-hero-line className="lead measure mt-8 text-muted-foreground">
            {hero.body}
          </p>
          <div
            data-hero-line
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            <a
              href={`mailto:${brand.email}?subject=Prise%20de%20rendez-vous`}
              className="press bg-primary px-7 py-3.5 text-[0.9375rem] font-medium text-primary-foreground hover:bg-primary-active"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#services"
              className="link-underline text-[0.9375rem] font-medium text-foreground"
            >
              {hero.ctaSecondary}
            </a>
          </div>
          <p
            data-hero-line
            className="mt-6 text-[0.8125rem] text-muted-foreground"
          >
            Pas de disponibilité tout de suite&nbsp;? Écrivez-nous directement à{" "}
            <a
              href={`mailto:${brand.email}`}
              className="link-underline text-foreground"
            >
              {brand.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
