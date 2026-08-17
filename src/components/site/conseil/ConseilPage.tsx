import { Link } from "@tanstack/react-router";
import { brand } from "@/content/home";
import { conseilHero, conseilCta } from "@/content/conseil";
import { useScrollReveal, useSmoothScroll } from "@/lib/motion";
import { Nav } from "@/components/site/Nav";
import { Wordmark } from "@/components/site/Wordmark";

import { Domains } from "./Domains";
import { Formats } from "./Formats";
import { Approach } from "./Approach";

const mailto = `mailto:${brand.email}?subject=Conseil%20IT%20strat%C3%A9gique`;

export function ConseilPage() {
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
              aria-label="Fil d'ariane"
              className="text-[0.8125rem] text-muted-foreground"
            >
              <Link to="/" className="link-underline hover:text-foreground">
                Accueil
              </Link>
              <span className="px-2 text-border-strong">/</span>
              <span className="text-foreground">{conseilHero.breadcrumb}</span>
            </nav>

            <div ref={heroRef} className="mt-10 max-w-[42rem]">
              <h1 data-line className="display-1 text-foreground">
                {conseilHero.titleLead}
                <br />
                <span className="font-normal text-primary">
                  {conseilHero.titleAccent}
                </span>
              </h1>
              <div data-line className="mt-12 border-t border-border pt-10">
                {conseilHero.paragraphs.map((p) => (
                  <p
                    key={p}
                    className="small-copy measure text-muted-foreground [&+&]:mt-5"
                  >
                    {p}
                  </p>
                ))}
              </div>
              <div data-line className="mt-10">
                <a
                  href={mailto}
                  className="press inline-block bg-primary px-6 py-4 text-[0.9375rem] font-medium text-primary-foreground hover:bg-primary/90"
                >
                  {conseilHero.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <Domains />
        <Formats />
        <Approach />

        <section className="bg-foreground">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)] lg:items-end lg:gap-20">
              <div>
                <h2 className="display-2 text-background">
                  {conseilCta.title}
                </h2>
                <p className="lead measure mt-7 text-background/70">
                  {conseilCta.body}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-6 lg:justify-end">
                <a
                  href={mailto}
                  className="press bg-background px-6 py-4 text-[0.9375rem] font-medium text-foreground hover:bg-background/90"
                >
                  {conseilCta.cta}
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
              FAQ
            </Link>
            <Link
              to="/mentions-legales"
              className="link-underline hover:text-foreground"
            >
              Mentions légales
            </Link>
            <Link
              to="/politique-de-confidentialite"
              className="link-underline hover:text-foreground"
            >
              Politique de confidentialité
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
