import { Link } from "@tanstack/react-router";
import { brand, useHomeContent } from "@/content/home";
import { useUiContent } from "@/content/ui";
import { useScrollReveal } from "@/lib/motion";
import { Wordmark } from "./Wordmark";

export function ContactFooter() {
  const { contact } = useHomeContent();
  const { footer } = useUiContent();
  const meta = [
    { heading: footer.sectionsHeading, items: footer.sectionsLinks },
    { heading: footer.expertiseHeading, items: footer.expertiseLinks },
  ];
  const ref = useScrollReveal<HTMLDivElement>({ variant: "block" });

  return (
    <>
      <section id="contact" className="bg-foreground">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
          <div
            ref={ref}
            className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,auto)] lg:gap-20"
          >
            <div>
              <h2 className="display-1 text-background">{contact.title}</h2>
              <p className="lead measure mt-8 text-background/70">
                {contact.body}
              </p>
              <a
                href={`mailto:${brand.email}?subject=Prise%20de%20rendez-vous`}
                className="link-underline mt-12 inline-block font-display text-[clamp(1.25rem,2.6vw,2rem)] font-bold tracking-[-0.02em] text-background"
              >
                {brand.email}
              </a>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:gap-16 lg:pt-[42px]">
              {meta.map((group) => (
                <nav key={group.heading} aria-label={group.heading}>
                  <p className="display-4 border-b border-background/15 pb-3 text-background/70">
                    {group.heading}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li key={item.label}>
                        {item.href.startsWith("/") ? (
                          <Link
                            to={item.href}
                            className="link-underline text-[0.9375rem] text-background/80 transition-colors hover:text-background"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <a
                            href={item.href}
                            className="link-underline text-[0.9375rem] text-background/80 transition-colors hover:text-background"
                          >
                            {item.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>

          <p className="mt-16 max-w-md text-[0.875rem] leading-relaxed text-background/50">
            {contact.cta}. {footer.responseNote}
          </p>
        </div>
      </section>

      <footer className="bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-4 px-6 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center lg:px-10">
          <Wordmark className="text-[0.95rem] text-foreground" />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.8125rem] text-muted-foreground md:justify-end">
            <Link
              to="/faq"
              className="link-underline transition-colors hover:text-foreground"
            >
              {footer.faq}
            </Link>
            <Link
              to="/mentions-legales"
              className="link-underline transition-colors hover:text-foreground"
            >
              {footer.legalNotice}
            </Link>
            <Link
              to="/politique-de-confidentialite"
              className="link-underline transition-colors hover:text-foreground"
            >
              {footer.privacyPolicy}
            </Link>
            <p>
              © {new Date().getFullYear()} {brand.name} ·{" "}
              {footer.copyrightTagline}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
