import { Link } from "@tanstack/react-router";
import { brand } from "@/content/home";
import { grcHero, grcCta } from "@/content/grc";
import { useScrollReveal, useSmoothScroll } from "@/lib/motion";
import { Nav } from "@/components/site/Nav";
import { Wordmark } from "@/components/site/Wordmark";

import { Pillars } from "./Pillars";
import { Nis2 } from "./Nis2";
import { Scale } from "./Scale";
import { Process } from "./Process";

const mailto = `mailto:${brand.email}?subject=GRC%20%3A%20gouvernance%2C%20risque%2C%20conformit%C3%A9`;

export function GrcPage() {
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
              <Link
                to="/cybersecurite"
                className="link-underline hover:text-foreground"
              >
                Pôle Cybersécurité
              </Link>
              <span className="px-2 text-border-strong">/</span>
              <span className="text-foreground">GRC</span>
            </nav>

            <div ref={heroRef} className="mt-10 grid gap-12">
              <div className="max-w-4xl">
                <h1 data-line className="display-1 text-foreground">
                  {grcHero.titleLead}
                  <br />
                  <span className="font-normal text-primary">
                    {grcHero.titleAccent}
                  </span>
                </h1>
                <blockquote
                  data-line
                  className="measure-tight mt-12 border-t border-border pt-10"
                >
                  <p className="lead text-foreground">{grcHero.pull}</p>
                </blockquote>
              </div>
            </div>

            <div className="mt-14 grid gap-10 border-t border-border pt-12 lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)] lg:gap-24">
              <div>
                {grcHero.paragraphs.map((p) => (
                  <p
                    key={p}
                    className="small-copy measure text-muted-foreground [&+&]:mt-5"
                  >
                    {p}
                  </p>
                ))}
              </div>
              <div className="lg:flex lg:items-start lg:justify-end">
                <a
                  href={mailto}
                  className="press inline-block bg-primary px-6 py-4 text-[0.9375rem] font-medium text-primary-foreground hover:bg-primary/90"
                >
                  {grcHero.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <Pillars />
        <Nis2 />
        <Scale />
        <Process />

        <section className="bg-foreground">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)] lg:items-end lg:gap-20">
              <div>
                <h2 className="display-2 text-background">{grcCta.title}</h2>
                <p className="lead measure mt-7 text-background/70">
                  {grcCta.body}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-6 lg:justify-end">
                <a
                  href={mailto}
                  className="press bg-background px-6 py-4 text-[0.9375rem] font-medium text-foreground hover:bg-background/90"
                >
                  {grcCta.cta}
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
