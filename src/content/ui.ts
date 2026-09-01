import { createLocaleContent } from "@/lib/i18n";
import { en } from "./ui.en";

/** Chrome text that lives in component JSX rather than in a page-specific
 * content file: nav aria-labels, the breadcrumb "Accueil" word repeated
 * across every sub-page hero, footer labels, and a few other shared bits. */
const fr = {
  nav: {
    primaryLabel: "Navigation principale",
    mobileLabel: "Navigation mobile",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    about: "À propos",
  },
  breadcrumb: {
    label: "Fil d'ariane",
    home: "Accueil",
    cyberPole: "Pôle Cybersécurité",
    backHome: "Retour à l'accueil",
  },
  legal: {
    questionSubject: "Question juridique",
  },
  meshLabel: "Représentation d'un réseau supervisé : nœuds reliés entre eux",
  footer: {
    sectionsHeading: "Sections",
    expertiseHeading: "Expertises",
    sectionsLinks: [
      { label: "Services", href: "#services" },
      { label: "Pourquoi nous", href: "#pourquoi" },
      { label: "Consultants", href: "#consultants" },
      { label: "Notre ADN", href: "#adn" },
    ],
    expertiseLinks: [
      {
        label: "Supervision & Protection",
        href: "/cybersecurite/securite-managee",
      },
      {
        label: "Test d'intrusion",
        href: "/cybersecurite/test-intrusion-audit",
      },
      {
        label: "Gouvernance, Risque & Conseil",
        href: "/cybersecurite/gouvernance-conseil",
      },
      {
        label: "Sourcing & Recrutement IT",
        href: "/sourcing-recrutement-it",
      },
    ],
    faq: "FAQ",
    legalNotice: "Mentions légales",
    privacyPolicy: "Politique de confidentialité",
    copyrightTagline: "Société de services cybersécurité & sourcing IT",
    responseNote:
      "Nous répondons sous 48 h, en direct, sans formulaire intermédiaire.",
  },
  recyfToggle: {
    ei: "Entité Importante",
    ee: "Entité Essentielle",
  },
};

export const useUiContent = createLocaleContent(fr, en);
