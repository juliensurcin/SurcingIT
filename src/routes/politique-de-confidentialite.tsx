import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { LegalPage } from "@/components/site/LegalPage";

const title = "Politique de confidentialité | SurcingIT";
const description =
  "Politique de confidentialité de SurcingIT : aucune collecte de données par le site, contact par email, polices Google et vos droits RGPD.";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:url",
        content: `${SITE_URL}/politique-de-confidentialite`,
      },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/politique-de-confidentialite` },
    ],
  }),
  component: () => <LegalPage variant="privacy" />,
});
