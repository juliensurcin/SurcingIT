import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Wordmark } from "@/components/site/Wordmark";
import { brand } from "@/content/home";
import type { LegalSection } from "@/content/legal";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, intro, sections }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-20 md:pb-24 md:pt-28 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:gap-24">
              <div>
                <p className="label-mono text-primary">{eyebrow}</p>
                <h1 className="display-1 mt-6 text-foreground">{title}</h1>
              </div>
              <p className="lead measure text-muted-foreground lg:self-end">{intro}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-24 lg:px-10">
            <div className="grid gap-0 border-t border-border">
              {sections.map((section, i) => (
                <article
                  key={section.heading}
                  className="grid gap-6 border-b border-border py-10 lg:grid-cols-[minmax(0,34fr)_minmax(0,66fr)] lg:gap-20"
                >
                  <div className="flex gap-4">
                    <span className="num-mono text-[0.75rem] text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="display-4 text-foreground">{section.heading}</h2>
                  </div>
                  <div>
                    {section.paragraphs.map((p) => (
                      <p key={p} className="body-copy measure text-muted-foreground [&+p]:mt-5">
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-6">
              <a
                href={`mailto:${brand.email}?subject=Question%20juridique`}
                className="press border border-border-strong px-5 py-3 text-[0.875rem] font-medium text-foreground hover:border-foreground hover:bg-foreground hover:text-background"
              >
                {brand.email}
              </a>
              <Link to="/" className="link-underline text-[0.875rem] text-muted-foreground">
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-4 px-6 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center lg:px-10">
          <Wordmark className="text-[0.95rem] text-foreground" />
          <p className="text-[0.8125rem] text-muted-foreground md:text-right">
            © {new Date().getFullYear()} {brand.name} · ESN cybersécurité &amp; sourcing IT
          </p>
        </div>
      </footer>
    </div>
  );
}
