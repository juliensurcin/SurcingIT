import { brand, useHomeContent } from "@/content/home";
import { useScrollReveal } from "@/lib/motion";

/** "Une société de services hybride, orientée terrain" → two lines, second one in the accent. */
function splitTitle(title: string): [string, string | null] {
  const i = title.indexOf(",");
  if (i === -1) return [title, null];
  return [title.slice(0, i + 1), title.slice(i + 1).trim()];
}

/** Centered stack — title, body, CTAs, contact line — instead of the
 * previous title-left/body-right split, so the hero reads as one confident
 * statement rather than two columns competing for attention. */
export function Hero() {
  const { hero } = useHomeContent();
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-hero-line]",
    variant: "lines",
  });
  const [lead, accent] = splitTitle(hero.title);

  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-16 md:pb-24 md:pt-20 lg:px-10 lg:pt-24">
        <div
          ref={ref}
          className="mx-auto flex max-w-[50rem] flex-col items-center text-center"
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

          <p data-hero-line className="lead measure mt-8 text-foreground">
            {hero.body}
          </p>

          <div
            data-hero-line
            className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
          >
            <a
              href={`mailto:${brand.email}?subject=${encodeURIComponent(hero.ctaPrimary)}`}
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
            className="mt-7 text-[0.8125rem] text-muted-foreground"
          >
            {hero.noAvailability}{" "}
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
