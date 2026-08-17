import { createFileRoute } from "@tanstack/react-router";
import { FaqPage } from "@/components/site/FaqPage";
import { faqCategories } from "@/content/faq";

const title = "Questions fréquentes | SurcingIT";
const description =
  "Les questions les plus fréquentes sur le sourcing IT, la sécurité managée, le test d'intrusion, la GRC et le conseil IT stratégique chez SurcingIT.";
const path = "/faq";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: path },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Accueil",
                  item: "/",
                },
                { "@type": "ListItem", position: 2, name: "FAQ", item: path },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: faqCategories.flatMap((category) =>
                category.items.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              ),
            },
          ],
        }),
      },
    ],
  }),
  component: FaqPage,
});
