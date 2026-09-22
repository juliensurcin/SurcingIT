import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { CyberPage } from "@/components/site/cyber/CyberPage";
import { pillarsSection } from "@/content/cyber";

const title = "Pôle Cybersécurité : protection & conformité - SurcingIT";
const description =
  "Sécurité managée, tests d'intrusion, audits et gouvernance : des consultants certifiés pour protéger, tester et sécuriser votre système d'information.";
const path = "/cybersecurite";

export const Route = createFileRoute("/cybersecurite/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "cybersécurité, pôle cyber, sécurité informatique entreprise, protection SI, ESN cyber",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}${path}` },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}${path}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              serviceType: "Pôle Cybersécurité",
              name: "Pôle Cybersécurité",
              description,
              provider: {
                "@type": "Organization",
                name: "SurcingIT",
                url: "/",
              },
              areaServed: "FR",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Nos trois piliers",
                itemListElement: pillarsSection.items.map((p) => ({
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
              "@type": "ItemList",
              name: "Sous-services du pôle cybersécurité",
              itemListElement: pillarsSection.items.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: p.title,
                description: p.body,
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Accueil",
                  item: SITE_URL,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Pôle Cybersécurité",
                  item: `${SITE_URL}${path}`,
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: CyberPage,
});
