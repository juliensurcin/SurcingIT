import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { brand } from "@/content/home";
import { useFaqContent } from "@/content/faq";
import { useUiContent } from "@/content/ui";
import { useScrollReveal, useSmoothScroll } from "@/lib/motion";
import { Nav } from "@/components/site/Nav";
import { Wordmark } from "@/components/site/Wordmark";

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function FaqCategoryBlock({
  title,
  items,
}: {
  title: string;
  items: { q: string; a: string }[];
}) {
  const ref = useScrollReveal<HTMLDivElement>({
    stagger: "[data-faq]",
    variant: "rows",
  });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const slug = slugify(title);

  return (
    <div className="border-t border-border py-14 first:border-t-0 first:pt-0 md:py-16">
      <h2 id={slug} className="display-3 scroll-mt-24 text-foreground">
        {title}
      </h2>
      <div ref={ref} className="mt-8 border-t border-border">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q} data-faq className="border-b border-border">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="group flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-${slug}-answer-${i}`}
              >
                <h3
                  className={`display-4 transition-colors duration-300 ${
                    isOpen
                      ? "text-primary"
                      : "text-foreground group-hover:text-primary"
                  }`}
                >
                  {item.q}
                </h3>
                <span className="relative mt-1.5 size-3.5 shrink-0">
                  <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-foreground" />
                  <motion.span
                    className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-foreground"
                    initial={false}
                    animate={{ scaleY: isOpen ? 0 : 1 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-${slug}-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="overflow-hidden"
                  >
                    <p className="small-copy measure pb-6 text-muted-foreground">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function FaqPage() {
  const { faqPage, faqCategories } = useFaqContent();
  const { breadcrumb, footer } = useUiContent();
  const mailto = `mailto:${brand.email}?subject=${encodeURIComponent(faqPage.mailtoSubject)}`;
  useSmoothScroll();

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
              <span className="text-foreground">FAQ</span>
            </nav>

            <div className="mt-10 max-w-[42rem]">
              <h1 className="display-1 text-foreground">{faqPage.title}</h1>
              <p className="lead measure mt-6 text-muted-foreground">
                {faqPage.intro}
              </p>
            </div>

            <nav
              aria-label={faqPage.categoriesLabel}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6"
            >
              {faqCategories.map((category) => (
                <a
                  key={category.title}
                  href={`#${slugify(category.title)}`}
                  className="link-underline text-[0.875rem] text-muted-foreground hover:text-foreground"
                >
                  {category.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
            {faqCategories.map((category) => (
              <FaqCategoryBlock
                key={category.title}
                title={category.title}
                items={category.items}
              />
            ))}
          </div>
        </section>

        <section className="bg-foreground">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)] lg:items-center lg:gap-20">
              <div>
                <h2 className="display-2 text-background">
                  {faqPage.closingTitle}
                </h2>
                <p className="lead measure mt-7 text-background/70">
                  {faqPage.closingBody}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-6 lg:justify-end">
                <a
                  href={mailto}
                  className="press bg-background px-6 py-4 text-[0.9375rem] font-medium text-foreground hover:bg-background/90"
                >
                  {faqPage.closingCta}
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
