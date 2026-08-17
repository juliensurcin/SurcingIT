import { createFileRoute } from "@tanstack/react-router";
import { getRequestOrigin } from "@/lib/origin.functions";
import { ConseilPage } from "@/components/site/conseil/ConseilPage";
import { conseilDomains } from "@/content/conseil";

const title = "RSSI externalisé & conseil IT stratégique - SurcingIT";
const description =
  "CISO as a Service, architecture sécurisée et choix de solutions. Un RSSI externalisé à temps partagé, ou du conseil ponctuel quand vous en avez besoin.";
const path = "/conseil-it-strategique";

export const Route = createFileRoute("/conseil-it-strategique")({
  loader: () => getRequestOrigin(),
  head: ({ loaderData }) => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "RSSI externalisé, CISO as a Service, conseil cybersécurité, architecture sécurisée, transformation numérique, NIS2",
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
              serviceType: "Conseil IT Stratégique",
              name: "RSSI externalisé et conseil IT stratégique",
              description,
              provider: {
                "@type": "Organization",
                name: "SurcingIT",
                url: "/",
              },
              areaServed: "FR",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Périmètre d'intervention",
                itemListElement: conseilDomains.items.map((d) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: d.title,
                    description: d.body,
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
                  name: "Conseil IT Stratégique",
                  item: path,
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: ConseilPage,
});
