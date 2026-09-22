import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { ConsultantCare } from "@/components/site/ConsultantCare";
import { About } from "@/components/site/About";
import { ContactFooter } from "@/components/site/ContactFooter";
import { useSmoothScroll } from "@/lib/motion";
import { SITE_URL } from "@/lib/site";

const title =
  "SurcingIT | Société de services cybersécurité & sourcing de talents IT";
const description =
  "Société de services hybride orientée terrain : sécurité managée, tests d'intrusion, conseil IT et sourcing de consultants qualifiés.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Index,
});

function Index() {
  useSmoothScroll();
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:bg-primary focus-visible:px-4 focus-visible:py-2 focus-visible:text-[0.9375rem] focus-visible:font-medium focus-visible:text-primary-foreground"
      >
        Aller au contenu
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <WhyUs />
        <ConsultantCare />
        <About />
        <ContactFooter />
      </main>
    </div>
  );
}
