import { createLocaleContent } from "@/lib/i18n";
import * as en from "./conseil.en";

export const conseilDomains = {
  eyebrow: "Périmètre",
  title: "Ce sur quoi on intervient",
  subtitle:
    "Quatre terrains où un avis extérieur, pris au bon moment, change le coût et la trajectoire d'un projet.",
  items: [
    {
      title: "Transformation numérique",
      body: "Migration vers le cloud, refonte d'infrastructure, changement d'ERP, ouverture d'un service en ligne. Ces projets créent de nouvelles surfaces d'exposition, et la sécurité arrive presque toujours trop tard dans le calendrier.",
      note: "On intervient en amont, quand les choix structurants se font, pas à la recette, quand corriger coûte dix fois plus cher.",
      tags: ["Cloud", "Refonte SI", "ERP"],
    },
    {
      title: "Architecture sécurisée",
      body: "Concevoir ou revoir une architecture en intégrant la sécurité dès le départ : segmentation réseau, gestion des identités et des accès, cloisonnement, sauvegardes réellement testées.",
      note: null,
      tags: ["Segmentation", "IAM", "Sauvegardes"],
    },
    {
      title: "Choix de solutions",
      body: "Le marché de la cybersécurité est saturé d'offres qui se ressemblent toutes sur le papier. Nous vous aidons à cadrer le besoin réel, à comparer objectivement, et éviter la solution surdimensionnée.",
      note: "Notre avantage : on déploie et on opère ces outils au quotidien via l'offre de sécurité managée. On sait lesquels vieillissent bien et lesquels sont pénibles à vivre après six mois.",
      tags: ["Cadrage", "Comparatif", "Terrain"],
    },
    {
      title: "Conformité et cadres de référence",
      body: "NIS2, ISO 27001, RGPD, référentiels de l'ANSSI : on vous aide à identifier ce qui s'applique réellement à votre structure, et à construire une feuille de route proportionnée.",
      note: null,
      tags: ["NIS2", "ISO 27001", "RGPD", "ANSSI"],
    },
  ],
};

export const conseilFormats = {
  eyebrow: "Formats",
  title: "Deux formats, selon votre besoin",
  forWhoLabel: "Pour qui",
  items: [
    {
      kicker: "Récurrent",
      title: "CISO as a Service",
      body: "Un RSSI externalisé, présent de façon récurrente. Il porte la stratégie de sécurité, arbitre les priorités, pilote les chantiers, et fait le lien entre la technique et la direction.",
      forWho:
        "Les structures qui ont des obligations réelles mais pas le volume qui justifie un poste à temps plein.",
    },
    {
      kicker: "Ponctuel",
      title: "Conseil ponctuel",
      body: "Une question précise, une décision à prendre, un projet à cadrer. On intervient sur un périmètre défini, avec un livrable clair et une fin annoncée.",
      forWho:
        "Ceux qui savent exactement ce qu'ils cherchent et veulent un avis technique solide, sans engagement dans la durée.",
    },
  ],
};

export const useConseilContent = createLocaleContent(
  { conseilDomains, conseilFormats },
  en,
);
