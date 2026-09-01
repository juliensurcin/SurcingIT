import { createLocaleContent } from "@/lib/i18n";
import * as en from "./cyber.en";

export const cyberHero = {
  eyebrow: "Pôle Cybersécurité",
  titleAccent: "Protéger, tester, sécuriser",
  titleTail: ": notre pôle cybersécurité",
  paragraphs: [
    "La cybersécurité n'est pas un produit qu'on achète une fois. C'est une combinaison de protection continue, de vérifications régulières, et de règles qui tiennent dans le temps.",
    "Notre pôle cybersécurité couvre ces trois dimensions avec la même exigence : des consultants certifiés, une approche adaptée à votre contexte réel, et des résultats exploitables, pas un rapport de plus dans un tiroir.",
  ],
  cta: "Parlons de votre système d'information",
};

export const pillarsSection = {
  eyebrow: "Nos trois piliers",
  title: "Trois expertises, une seule équipe",
  items: [
    {
      title: "Supervision & Protection",
      lead: "Protéger en continu.",
      body: "SIEM, EPP, EDR, XDR, MDR et SOC : nous déployons et pilotons les outils qui surveillent votre système d'information 24/7, pour neutraliser une menace avant qu'elle n'ait d'impact.",
      tags: ["SIEM", "EPP", "EDR", "XDR", "MDR", "SOC"],
      href: "/cybersecurite/securite-managee",
      linkLabel: "En savoir plus sur la supervision et la protection",
    },
    {
      title: "Test d'intrusion & Audit",
      lead: "Vérifier ce qui tient vraiment.",
      body: "Tests d'intrusion (boîte noire, grise, blanche), Red Team, audits techniques : nos consultants attaquent vos systèmes dans les conditions d'un vrai attaquant pour révéler ce qui doit être corrigé.",
      tags: [
        "Boîte noire",
        "Boîte grise",
        "Boîte blanche",
        "Red Team",
        "Audit technique",
      ],
      href: "/cybersecurite/test-intrusion-audit",
      linkLabel: "En savoir plus sur les tests d'intrusion et audits",
    },
    {
      title: "Gouvernance, Risque & Conseil",
      lead: "Structurer et sécuriser dans la durée.",
      body: "Un RSSI externalisé, disponible en mode CISO as a Service ou pour une question ponctuelle, qui pilote la conformité NIS2 et ISO 27001, arbitre les priorités et formalise les règles qui font tenir votre sécurité au-delà des outils.",
      tags: ["CISO as a Service", "NIS2", "ISO 27001", "RGPD"],
      href: "/cybersecurite/gouvernance-conseil",
      linkLabel: "En savoir plus sur la gouvernance, le risque et le conseil",
    },
  ],
};

export const singlePole = {
  eyebrow: "Notre parti pris",
  title: "Pourquoi un seul pôle plutôt que des prestataires séparés",
  fragmented: {
    label: "L'approche fragmentée",
    body: "Beaucoup d'entreprises font appel à un éditeur pour l'EDR, un cabinet différent pour le pentest annuel, et personne pour la partie gouvernance. Le résultat : des angles morts entre les prestataires, et personne qui a la vision d'ensemble.",
  },
  ours: {
    label: "L'approche SurcingIT",
    body: "La même équipe qui déploie votre sécurité managée peut aussi tester sa robustesse par un pentest, puis vous aider à formaliser la gouvernance qui va avec. Vous gagnez en cohérence, et vous gagnez du temps : un seul interlocuteur qui connaît déjà votre contexte.",
  },
};

export const whoIntervenes = {
  eyebrow: "Qui intervient",
  title: "Des consultants certifiés, qualifiés par nos soins",
  body: "Nos consultants cyber sont certifiés et interviennent sur des problématiques critiques : pentesters OSCP, Lead Implementor ISO 27001, architectes cloud. Des personnes que nous qualifions nous-mêmes avant de les proposer à nos clients.",
};

export const cyberCta = {
  title: "Un besoin précis, ou une vision d'ensemble à construire ?",
  body: "Parlons de votre système d'information : nous vous orientons vers le pilier le plus pertinent, ou construisons une approche combinée si nécessaire.",
  cta: "Contactez-nous",
};

export const useCyberContent = createLocaleContent(
  { cyberHero, pillarsSection, singlePole, whoIntervenes, cyberCta },
  en,
);
