import { Link } from "@tanstack/react-router";
import { brand } from "@/content/home";
import { useSourcingContent } from "@/content/sourcing";
import { useUiContent } from "@/content/ui";
import { useScrollReveal, useSmoothScroll } from "@/lib/motion";
import { Nav } from "@/components/site/Nav";
import { Wordmark } from "@/components/site/Wordmark";
import { Process } from "./Process";
import { Formulas } from "./Formulas";
import { ConsultantSide } from "./ConsultantSide";

export function SourcingPage() {
  const { sourcingHero, sourcingCta } = useSourcingContent();
  const { breadcrumb, footer } = useUiContent();
  const mailto = `mailto:${brand.email}?subject=${encodeURIComponent(sourcingHero.eyebrow)}`;
  useSmoothScroll();
  const heroRef = useScrollReveal<HTMLDivElement>({
    stagger: "[data-line]",
    variant: "lines",
  });

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-[1400px] px-6 pb-14 pt-10 md:pb-16 md:pt-12 lg:px-10">
            <nav
              aria-label={breadcrumb.label}
              className="text-[0.8125rem] text-muted-foreground"
            >
              <Link to="/" className="link-underline hover:text-foreground">
                {breadcrumb.home}
              </Link>
              <span className="px-2 text-border-strong">/</span>
              <span className="text-foreground">{sourcingHero.eyebrow}</span>
            </nav>

            <div
              ref={heroRef}
              className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,54fr)_minmax(0,46fr)] lg:gap-24"
            >
              <h1 data-line className="display-1 text-foreground">
                <span className="whitespace-nowrap">
                  {sourcingHero.titleLead}
                </span>{" "}
                <span className="text-primary">{sourcingHero.titleAccent}</span>{" "}
                {sourcingHero.titleTail}
              </h1>
              <div className="lg:self-end">
                {sourcingHero.paragraphs.map((p, i) => (
                  <p
                    key={p}
                    data-line
                    className={`measure ${i === 0 ? "lead text-foreground" : "small-copy mt-5 text-muted-foreground"}`}
                  >
                    {p}
                  </p>
                ))}
                <a
                  href={mailto}
                  data-line
                  className="press mt-10 inline-block bg-primary px-6 py-4 text-[0.9375rem] font-medium text-primary-foreground hover:bg-primary/90"
                >
                  {sourcingHero.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <Process />
        <Formulas />
        <ConsultantSide />

        <section className="border-t border-background/15 bg-foreground">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)] lg:items-center lg:gap-20">
              <div>
                <h2 className="display-2 text-background">
                  {sourcingCta.title}
                </h2>
                <p className="lead measure mt-7 text-background/70">
                  {sourcingCta.body}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-6 lg:justify-end">
                <a
                  href={mailto}
                  className="press bg-background px-6 py-4 text-[0.9375rem] font-medium text-foreground hover:bg-background/90"
                >
                  {sourcingCta.cta}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-4 px-6 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center lg:px-10">
          <Wordmark className="text-[0.95rem] text-foreground" />
          <div className="flex flex-wrap items-center gap-6 text-[0.8125rem] text-muted-foreground md:justify-end">
            <Link to="/faq" className="link-underline hover:text-foreground">
              {footer.faq}
            </Link>
            <Link
              to="/mentions-legales"
              className="link-underline hover:text-foreground"
            >
              {footer.legalNotice}
            </Link>
            <Link
              to="/politique-de-confidentialite"
              className="link-underline hover:text-foreground"
            >
              {footer.privacyPolicy}
            </Link>
            <p>
              © {new Date().getFullYear()} {brand.name}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
