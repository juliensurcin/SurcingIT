import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { LegalPage } from "@/components/site/LegalPage";

const title = "Mentions légales | SurcingIT";
const description =
  "Mentions légales de SurcingIT : identification de l'éditeur, responsable de publication, hébergeur et droits de propriété du site surcingit.fr.";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: `${SITE_URL}/mentions-legales` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/mentions-legales` }],
  }),
  component: () => <LegalPage variant="notice" />,
});
