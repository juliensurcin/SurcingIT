import { createFileRoute } from "@tanstack/react-router";
import { getRequestOrigin } from "@/lib/origin.functions";
import { GouvernanceConseilPage } from "@/components/site/gouvernance-conseil/GouvernanceConseilPage";
import { gouvernanceConseilArgument } from "@/content/gouvernance-conseil";

const title = "Gouvernance, Risque & Conseil IT - SurcingIT";
const description =
  "GRC (NIS2, ISO 27001, RGPD) et CISO as a Service réunis dans un même accompagnement : pilotage de la sécurité sans le poste de RSSI à temps plein.";
const path = "/cybersecurite/gouvernance-conseil";

export const Route = createFileRoute("/cybersecurite/gouvernance-conseil")({
  loader: () => getRequestOrigin(),
  head: ({ loaderData }) => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "gouvernance cybersécurité, GRC, RSSI externalisé, CISO as a Service, NIS2, ISO 27001, RGPD, conseil IT stratégique",
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
              serviceType: "Gouvernance, Risque & Conseil IT",
              name: "Gouvernance, Risque, Conformité et conseil IT stratégique",
              description,
              provider: {
                "@type": "Organization",
                name: "SurcingIT",
                url: "/",
              },
              areaServed: "FR",
              offers: gouvernanceConseilArgument.stats.map((s) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: s.value,
                  description: s.label,
                },
              })),
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
                  name: "Gouvernance, Risque & Conseil",
                  item: path,
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: GouvernanceConseilPage,
});
