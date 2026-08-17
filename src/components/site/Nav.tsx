import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { brand, hero, navServices } from "@/content/home";
import { useScrolled } from "@/lib/motion";
import { Wordmark } from "./Wordmark";

const links = [{ label: "À propos", href: "/#adn" }];

const spring = {
  type: "spring" as const,
  stiffness: 350,
  damping: 32,
  bounce: 0,
};

function BurgerIcon({ open }: { open: boolean }) {
  const line = "h-[2px] w-6 bg-current transition-all duration-300 ease-out";
  return (
    <span className="grid gap-1.5" aria-hidden="true">
      <span
        className={`${line} ${open ? "translate-y-[5px] rotate-45" : ""}`}
      />
      <span className={`${line} ${open ? "opacity-0" : "opacity-100"}`} />
      <span
        className={`${line} ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
      />
    </span>
  );
}

/** Internal routes go through <Link>; hash targets stay plain anchors. */
function NavLink({
  href,
  onClick,
  className,
  children,
}: {
  href: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("/")) {
    return (
      <Link to={href} onClick={onClick} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}

/**
 * Two stacked grids (headers, then sub-items) instead of one grid per
 * column: CSS Grid's default row-stretch then guarantees every header
 * block is exactly the same height — and the divider that follows is a
 * single full-width rule, not three independent ones that can drift
 * apart depending on how long each tagline happens to be.
 */
function ServicesPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="w-[min(92vw,880px)] border border-border bg-background shadow-[0_24px_60px_-30px_rgb(15_23_42/0.25)]">
      <div className="grid md:grid-cols-3">
        {navServices.map((card) => (
          <NavLink
            key={card.title}
            href={card.href}
            onClick={onNavigate}
            className="group block border-border px-6 py-6 transition-colors hover:bg-surface md:border-l md:first:border-l-0"
          >
            <h3 className="display-4 text-foreground group-hover:text-primary">
              {card.title}
            </h3>
            <p className="small-copy mt-2 text-muted-foreground">
              {card.tagline}
            </p>
          </NavLink>
        ))}
      </div>
      <div className="grid border-t border-border md:grid-cols-3">
        {navServices.map((card) => (
          <div
            key={card.title}
            className="border-border md:border-l md:first:border-l-0"
          >
            {card.children.length > 0 ? (
              <ul className="px-6 py-4">
                {card.children.map((sub) => (
                  <li key={sub.title}>
                    <a
                      href={sub.href}
                      onClick={onNavigate}
                      className="block py-2 text-[0.8125rem] leading-snug text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="text-foreground">{sub.title}</span>
                      <br />
                      {sub.tagline}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Nav() {
  const scrolled = useScrolled(12);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-background/90 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="relative mx-auto grid h-14 max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 lg:px-10">
        <div className="flex min-w-0 items-center gap-10">
          <Link to="/" className="text-[0.95rem] text-foreground">
            <Wordmark />
          </Link>
          <nav aria-label="Navigation principale" className="hidden md:block">
            <ul className="flex items-center gap-5 lg:gap-7">
              <li onMouseEnter={openNow} onMouseLeave={closeSoon}>
                <button
                  type="button"
                  aria-expanded={open}
                  onFocus={openNow}
                  onClick={() => setOpen((v) => !v)}
                  className="flex items-center gap-1.5 text-[0.8125rem] text-muted-foreground transition-colors hover:text-foreground data-[state=open]:text-foreground"
                  data-state={open ? "open" : "closed"}
                >
                  Services
                  <ChevronDown
                    className={`size-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  />
                </button>
              </li>
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link-underline text-[0.8125rem] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${brand.email}?subject=Prise%20de%20rendez-vous`}
            className="press hidden border border-border-strong px-4 py-2 text-[0.8125rem] font-medium text-foreground hover:border-foreground hover:bg-foreground hover:text-background md:block"
          >
            {hero.ctaPrimary}
          </a>
          <button
            id="mobile-menu-button"
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center text-foreground md:hidden"
          >
            <BurgerIcon open={mobileOpen} />
          </button>
        </div>

        {/* Desktop hover panel */}
        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={spring}
              onMouseEnter={openNow}
              onMouseLeave={closeSoon}
              className="absolute left-6 top-full hidden lg:left-10 md:block"
            >
              <ServicesPanel onNavigate={() => setOpen(false)} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 top-14 z-40 h-[calc(100dvh-3.5rem)] w-full bg-background md:hidden"
          >
            <motion.nav
              aria-label="Navigation mobile"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-full flex-col justify-between overflow-y-auto px-6 py-8"
            >
              <div className="space-y-2">
                <div className="border-b border-border">
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-5 text-left"
                  >
                    <span className="display-2 text-foreground">Services</span>
                    <ChevronDown
                      className={`size-5 text-muted-foreground transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {servicesOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6">
                          {navServices.map((card) => (
                            <div
                              key={card.title}
                              className="border-b border-border last:border-b-0"
                            >
                              <NavLink
                                href={card.href}
                                onClick={handleMobileClose}
                                className="block py-3"
                              >
                                <span className="display-4 text-foreground">
                                  {card.title}
                                </span>
                                <p className="small-copy mt-1 text-muted-foreground">
                                  {card.tagline}
                                </p>
                              </NavLink>
                              {card.children.length > 0 ? (
                                <ul className="mb-3 space-y-2 pl-4">
                                  {card.children.map((sub) => (
                                    <li key={sub.title}>
                                      <a
                                        href={sub.href}
                                        onClick={handleMobileClose}
                                        className="text-[0.875rem] text-muted-foreground"
                                      >
                                        {sub.title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>

                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={handleMobileClose}
                    className="display-2 block border-b border-border py-5 text-foreground"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <a
                href={`mailto:${brand.email}?subject=Prise%20de%20rendez-vous`}
                onClick={handleMobileClose}
                className="press mt-8 bg-primary px-6 py-4 text-center text-[0.9375rem] font-medium text-primary-foreground"
              >
                {hero.ctaPrimary}
              </a>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
