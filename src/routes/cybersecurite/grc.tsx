import { createFileRoute } from "@tanstack/react-router";
import { getRequestOrigin } from "@/lib/origin.functions";
import { GrcPage } from "@/components/site/grc/GrcPage";
import { grcPillars } from "@/content/grc";

const title = "GRC : Gouvernance, Risque, Conformité : SurcingIT";
const description =
  "Politique de sécurité, gestion des risques, conformité NIS2, ISO 27001 et RGPD. On traduit les obligations réglementaires en plan d'action concret.";
const path = "/cybersecurite/grc";

export const Route = createFileRoute("/cybersecurite/grc")({
  loader: () => getRequestOrigin(),
  head: ({ loaderData }) => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "GRC cybersécurité, gouvernance sécurité, NIS2, ISO 27001, RGPD entreprise, ReCyF ANSSI, politique de sécurité SI",
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
              serviceType: "GRC : Gouvernance, Risque, Conformité",
              name: "GRC : gouvernance, risque et conformité cybersécurité",
              description,
              provider: {
                "@type": "Organization",
                name: "SurcingIT",
                url: "/",
              },
              areaServed: "FR",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Piliers GRC",
                itemListElement: grcPillars.items.map((p) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: p.title,
                    description: p.body,
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
                { "@type": "ListItem", position: 3, name: "GRC", item: path },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: GrcPage,
});
