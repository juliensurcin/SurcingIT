import { createFileRoute } from "@tanstack/react-router";
import { getRequestOrigin } from "@/lib/origin.functions";
import { SourcingPage } from "@/components/site/sourcing/SourcingPage";

const title = "Recrutement IT & sourcing de profils techniques - SurcingIT";
const description =
  "Cabinet de recrutement IT, assistance technique et pré-embauche. Chaque profil est validé techniquement par nos ingénieurs avant de vous être présenté.";
const path = "/sourcing-recrutement-it";

export const Route = createFileRoute("/sourcing-recrutement-it")({
  loader: () => getRequestOrigin(),
  head: ({ loaderData }) => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "recrutement IT, sourcing profils tech, assistance technique, cabinet de recrutement informatique, pré-embauche, ESN",
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
              serviceType: "Sourcing & Recrutement IT",
              name: "Sourcing & Recrutement IT",
              description,
              provider: {
                "@type": "Organization",
                name: "SurcingIT",
                url: "/",
              },
              areaServed: "FR",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Modalités de collaboration",
                itemListElement: [
                  "Cabinet de recrutement",
                  "Assistance technique",
                  "Pré-embauche",
                ].map((n) => ({
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: n },
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
                  name: "Sourcing & Recrutement IT",
                  item: path,
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: SourcingPage,
});
