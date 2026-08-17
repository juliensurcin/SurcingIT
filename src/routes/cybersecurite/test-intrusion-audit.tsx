import { createFileRoute } from "@tanstack/react-router";
import { getRequestOrigin } from "@/lib/origin.functions";
import { PentestPage } from "@/components/site/pentest/PentestPage";
import { boxesSection } from "@/content/pentest-audit";

const title = "Test d'intrusion & audit technique - SurcingIT";
const description =
  "Tests d'intrusion boîte noire, grise et blanche, Red Team et audits techniques. Consultants certifiés OSCP, rapport exploitable, pas un scan automatique.";
const path = "/cybersecurite/test-intrusion-audit";

export const Route = createFileRoute("/cybersecurite/test-intrusion-audit")({
  loader: () => getRequestOrigin(),
  head: ({ loaderData }) => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "test d'intrusion, pentest, audit cybersécurité, red team, pentest web, audit technique",
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
              serviceType: "Test d'intrusion & Audit",
              name: "Test d'intrusion et audit technique",
              description,
              provider: {
                "@type": "Organization",
                name: "SurcingIT",
                url: "/",
              },
              areaServed: "FR",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Approches de test",
                itemListElement: boxesSection.items.map((b) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: `Test d'intrusion ${b.name.toLowerCase()}`,
                    description: b.body,
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
                  name: "Test d'intrusion & Audit",
                  item: path,
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: PentestPage,
});
