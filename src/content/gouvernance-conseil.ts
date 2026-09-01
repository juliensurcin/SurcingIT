import { createLocaleContent } from "@/lib/i18n";
import * as en from "./gouvernance-conseil.en";

export const gouvernanceConseilHero = {
  breadcrumb: "Gouvernance, Risque & Conseil",
  titleLead: "La gouvernance de votre sécurité,",
  titleAccent: "sans le poste à temps plein",
  pull: "Recruter un RSSI en interne, c'est un salaire brut annuel de 80 000 à 110 000 € (jusqu'à 115 500 € en région parisienne), plusieurs mois de recherche, et un seul point de vue. Nous couvrons la gouvernance, les risques et la conformité (NIS2, ISO 27001, RGPD) en continu ou ponctuellement, sans les contraintes d'un recrutement classique.",
  paragraphs: [
    "Gouvernance, gestion des risques, mise en conformité réglementaire, arbitrages techniques et stratégiques : ce sont des compétences rarement réunies chez une seule personne, et pourtant c'est ce qu'on attend d'un RSSI recruté en interne.",
    "Nous les réunissons dans un même accompagnement, en mode CISO as a Service ou sur une question précise, selon ce dont vous avez réellement besoin.",
  ],
  cta: "Échanger avec un consultant",
};

export const gouvernanceConseilArgument = {
  title: "Le calcul qui change",
  body: "Un recrutement interne fige un budget sur une seule personne, disponible à plein temps même quand le besoin ne l'est pas. Un accompagnement à la carte s'ajuste à la charge réelle : plus présent pendant un audit NIS2 ou une refonte d'architecture, plus léger le reste du temps.",
  stats: [
    {
      value: "80 000 € à 110 000 €",
      label:
        "Salaire brut annuel moyen d'un RSSI recruté en interne, hors charges patronales (jusqu'à 115 500 € à Paris)",
    },
    {
      value: "Quelques jours / mois",
      label:
        "Le format CISO as a Service avec SurcingIT, sans le poste à temps plein",
    },
  ],
};

export const frameworksSection = {
  title: "NIS2 et ISO 27001, les deux cadres qui structurent votre conformité",
  nis2TopLabel: "ANSSI, mars 2026",
  intro:
    "Ce ne sont pas deux chantiers séparés. L'ANSSI a publié en mars 2026, sur MesServicesCyber, un comparateur officiel qui fait correspondre chaque objectif du ReCyF (la traduction opérationnelle de NIS2) aux mesures de l'Annexe A d'ISO 27001, et l'ENISA estime qu'une certification ISO 27001 couvre déjà environ 70 % des exigences NIS2. Les écarts réels se concentrent sur quelques points précis, notamment la notification d'incidents et la supervision de la chaîne d'approvisionnement, qu'ISO 27001 seule ne couvre pas. Concrètement : un diagnostic unique plutôt que deux audits distincts, une feuille de route qui sert les deux objectifs en parallèle, et un effort concentré sur l'écart réel plutôt que sur ce qui est déjà en place.",
  sources: [
    {
      label: "Certification ISO 27001, un levier pour la conformité NIS2",
      href: "https://www.lsti-certification.fr/fr-FR/Actualites/Certification-ISO-27001-structurer-sa-conformite-NIS-2",
    },
    {
      label: "ReCyF : publication du comparateur (ANSSI)",
      href: "https://lab.cyber.gouv.fr/les-actualit%C3%A9s-du-lab-anssi/recyf--publication-du-r%C3%A9f%C3%A9rentiel-dexigences-et-du-comparateur/",
    },
  ],
};

export const iso27001Section = {
  callout: {
    label: "Annexe A 2022 : 93 mesures, 4 thèmes",
    stats: [
      { value: "93", label: "mesures de sécurité dans l'Annexe A" },
      { value: "3 ans", label: "durée de validité de la certification" },
    ],
    body: "Les 93 mesures se répartissent en 4 thèmes : 37 organisationnelles, 8 humaines, 14 physiques et 34 technologiques. Toutes ne s'appliquent pas avec la même intensité à votre structure, c'est l'objet de la déclaration d'applicabilité (SoA).",
    linkBody:
      "Le texte de référence et le catalogue officiel sont publiés par l'ISO.",
    linkLabel: "ISO/IEC 27001:2022 (iso.org)",
    linkHref: "https://www.iso.org/standard/27001",
  },
};

export const gouvernanceConseilCta = {
  title: "Vous ne savez pas par où commencer ?",
  body: "C'est le point de départ le plus courant, que la question soit réglementaire ou stratégique. Un échange suffit souvent à clarifier ce qui s'applique réellement à vous.",
  cta: "Échanger avec un consultant",
};

export const useGouvernanceConseilContent = createLocaleContent(
  {
    gouvernanceConseilHero,
    gouvernanceConseilArgument,
    frameworksSection,
    iso27001Section,
    gouvernanceConseilCta,
  },
  en,
);
