import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Wordmark } from "@/components/site/Wordmark";
import { brand } from "@/content/home";
import { useLegalContent } from "@/content/legal";
import { useUiContent } from "@/content/ui";

type Props = {
  variant: "notice" | "privacy";
};

export function LegalPage({ variant }: Props) {
  const { legalNotice, privacyPolicy } = useLegalContent();
  const { breadcrumb, footer, legal } = useUiContent();
  const { title, intro, sections } =
    variant === "notice" ? legalNotice : privacyPolicy;
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-10 md:pb-24 md:pt-12 lg:px-10">
            <nav
              aria-label={breadcrumb.label}
              className="text-[0.8125rem] text-muted-foreground"
            >
              <Link to="/" className="link-underline hover:text-foreground">
                {breadcrumb.home}
              </Link>
              <span className="px-2 text-border-strong">/</span>
              <span className="text-foreground">{title}</span>
            </nav>

            {/* Same column split (34fr/66fr) and gap as the section rows
                below, so the intro paragraph's left edge lines up exactly
                with each row's body-copy column instead of drifting per
                its own ratio. */}
            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,34fr)_minmax(0,66fr)] lg:gap-20">
              <h1 className="display-2 text-foreground">{title}</h1>
              <p className="body-copy measure text-muted-foreground lg:self-end">
                {intro}
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-24 lg:px-10">
            <div className="grid gap-0 border-t border-border">
              {sections.map((section) => (
                <article
                  key={section.heading}
                  className="grid gap-6 border-b border-border py-10 lg:grid-cols-[minmax(0,34fr)_minmax(0,66fr)] lg:gap-20"
                >
                  <h2 className="display-4 text-foreground">
                    {section.heading}
                  </h2>
                  <div>
                    {section.paragraphs.map((p) => (
                      <p
                        key={p}
                        className="small-copy measure text-muted-foreground [&+p]:mt-5"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-6">
              <a
                href={`mailto:${brand.email}?subject=${encodeURIComponent(legal.questionSubject)}`}
                className="press border border-border-strong px-5 py-3 text-[0.875rem] font-medium text-foreground hover:border-foreground hover:bg-foreground hover:text-background"
              >
                {brand.email}
              </a>
              <Link
                to="/"
                className="link-underline text-[0.875rem] text-muted-foreground"
              >
                {breadcrumb.backHome}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-4 px-6 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center lg:px-10">
          <Wordmark className="text-[0.95rem] text-foreground" />
          <p className="text-[0.8125rem] text-muted-foreground md:text-right">
            © {new Date().getFullYear()} {brand.name} ·{" "}
            {footer.copyrightTagline}
          </p>
        </div>
      </footer>
    </div>
  );
}
