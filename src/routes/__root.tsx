import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import faviconSvg from "../assets/favicon.svg?url";
import { LocaleProvider } from "../lib/i18n";

const fallbackText = {
  fr: {
    notFoundTitle: "Page introuvable",
    notFoundBody: "La page que vous cherchez n'existe pas ou a été déplacée.",
    goHome: "Retour à l'accueil",
    errorTitle: "Cette page n'a pas pu se charger",
    errorBody:
      "Une erreur est survenue de notre côté. Vous pouvez réessayer ou revenir à l'accueil.",
    tryAgain: "Réessayer",
  },
  en: {
    notFoundTitle: "Page not found",
    notFoundBody:
      "The page you're looking for doesn't exist or has been moved.",
    goHome: "Go home",
    errorTitle: "This page didn't load",
    errorBody:
      "Something went wrong on our end. You can try refreshing or head back home.",
    tryAgain: "Try again",
  },
} as const;

/** Rendered outside <LocaleProvider>'s reach in some error paths, so this
 * reads localStorage directly rather than via useLocale(). */
function useFallbackLocale() {
  const [locale, setLocale] = useState<"fr" | "en">("fr");
  useEffect(() => {
    const stored = window.localStorage.getItem("surcingit-locale");
    if (stored === "en") setLocale("en");
  }, []);
  return locale;
}

function NotFoundComponent() {
  const t = fallbackText[useFallbackLocale()];
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          {t.notFoundTitle}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">{t.notFoundBody}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.goHome}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const t = fallbackText[useFallbackLocale()];

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {t.errorTitle}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{t.errorBody}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.tryAgain}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t.goHome}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "SurcingIT" },
        {
          name: "description",
          content:
            "Société de services spécialisée en cybersécurité et en sourcing de talents IT.",
        },
        { name: "author", content: "SurcingIT" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "SurcingIT" },
        { property: "og:locale", content: "fr_FR" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap",
        },
        { rel: "icon", href: faviconSvg, type: "image/svg+xml" },
        { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://surcingit.fr/#organization",
                name: "SurcingIT",
                url: "https://surcingit.fr/",
                description:
                  "Société de services hybride spécialisée en cybersécurité et en sourcing de talents IT.",
                email: "contact@surcingit.fr",
                areaServed: { "@type": "Country", name: "France" },
                knowsAbout: [
                  "Cybersécurité",
                  "Sécurité managée",
                  "Tests d'intrusion",
                  "Gouvernance, risque et conformité",
                  "Recrutement IT",
                  "Conseil IT",
                ],
              },
              {
                "@type": "WebSite",
                "@id": "https://surcingit.fr/#website",
                name: "SurcingIT",
                url: "https://surcingit.fr/",
                inLanguage: "fr-FR",
                publisher: { "@id": "https://surcingit.fr/#organization" },
              },
            ],
          }),
        },
      ],
    }),

    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </LocaleProvider>
    </QueryClientProvider>
  );
}
