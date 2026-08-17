import { createFileRoute } from "@tanstack/react-router";
import { getRequestOrigin } from "@/lib/origin.functions";
import { ManagedPage } from "@/components/site/managed/ManagedPage";
import { levelsSection } from "@/content/securite-managee";

const title = "Sécurité managée : EDR, XDR, MDR, SIEM & SOC - SurcingIT";
const description =
  "Déploiement et pilotage de vos solutions de sécurité : EPP, EDR, XDR, MDR, SIEM et SOC. Partenaires Trend Micro et Bitdefender, données en Europe.";
const path = "/cybersecurite/securite-managee";

export const Route = createFileRoute("/cybersecurite/securite-managee")({
  loader: () => getRequestOrigin(),
  head: ({ loaderData }) => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "sécurité managée, EDR, XDR, MDR, SIEM, EPP, SOC managé, protection endpoint, détection et réponse",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
      ...(loaderData
        ? [
            { property: "og:image", content: `${loaderData}/og-image.jpg` },
            { name: "twitter:image", content: `${loaderData}/og-image.jpg` },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              serviceType: "Sécurité Managée",
              name: "Sécurité managée : EPP, EDR, XDR, MDR, SIEM & SOC",
              description,
              provider: {
                "@type": "Organization",
                name: "SurcingIT",
                url: "/",
              },
              areaServed: "FR",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Niveaux de protection managée",
                itemListElement: levelsSection.items.map((l) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: `${l.code} : ${l.full}`,
                    description: l.body,
                  },
                })),
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Accueil",
                  item: "/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Pôle Cybersécurité",
                  item: "/cybersecurite",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Sécurité Managée",
                  item: path,
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: ManagedPage,
});
