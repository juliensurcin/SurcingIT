import { createLocaleContent } from "@/lib/i18n";
import * as en from "./grc.en";

export const grcPillars = {
  eyebrow: "Les fondamentaux",
  title: "Les trois piliers de la GRC, expliqués simplement",
  items: [
    {
      letter: "G",
      title: "Gouvernance",
      body: "L'ensemble des règles et responsabilités qui encadrent la sécurité de votre système d'information : qui décide quoi, qui est responsable en cas d'incident, quelles procédures existent. Sans gouvernance formalisée, les décisions de sécurité se prennent au coup par coup, généralement dans l'urgence.",
    },
    {
      letter: "R",
      title: "Risque",
      body: "Toutes les entreprises ne sont pas exposées aux mêmes menaces, et toutes n'ont pas les mêmes moyens. La gestion des risques consiste à identifier ce qui pourrait mal tourner, évaluer la probabilité et l'impact de chaque scénario, puis prioriser les actions en fonction, plutôt que de traiter tous les sujets avec la même urgence.",
    },
    {
      letter: "C",
      title: "Conformité",
      body: "Le respect effectif des obligations légales et réglementaires qui s'appliquent à votre activité, et la capacité à le démontrer en cas de contrôle, d'audit client, ou de questionnaire d'assurance.",
    },
  ],
};

export const nis2Section = {
  eyebrow: "Réglementation",
  title: "NIS2 : où en est-on réellement en 2026",
  paragraphs: [
    "NIS2 (Network and Information Security 2) est une directive européenne qui impose aux entreprises considérées comme importantes pour l'économie ou la société un socle minimal de cybersécurité : protection de leurs systèmes, gestion des risques, capacité à détecter et signaler un incident, et vérification de la sécurité chez leurs prestataires. Elle succède à une première directive (NIS1) dont le périmètre était beaucoup plus restreint, et vise à élever le niveau de sécurité de façon homogène à l'échelle de l'Union européenne.",
    "En France, cette directive est en cours de transposition en droit national via la loi Résilience. Le texte n'est pas encore définitivement en vigueur, mais son périmètre est déjà largement connu et stabilisé, il n'est donc pas nécessaire d'attendre la promulgation définitive pour commencer à s'y préparer.",
  ],
  callout: {
    label: "Le ReCyF, votre feuille de route de référence",
    body: "En mars 2026, l'ANSSI a publié le Référentiel Cyber France (ReCyF) : un document qui traduit les obligations NIS2 en 20 objectifs de sécurité concrets, accompagnés de 152 mesures de conformité acceptables. Il n'est pas encore juridiquement contraignant, mais il constitue déjà la référence, s'y conformer vous met en position favorable en cas de contrôle futur.",
    stats: [
      { value: "20", label: "objectifs de sécurité" },
      { value: "152", label: "mesures de conformité" },
    ],
    linkBody:
      "Un outil d'auto-diagnostic est disponible sur la plateforme MesServicesCyber de l'ANSSI pour évaluer un premier niveau de conformité.",
    linkLabel: "MesServicesCyber (ANSSI)",
    linkHref: "https://www.monespacenis2.cyber.gouv.fr/",
  },
  role: "Notre rôle : vous aider à déterminer si vous entrez dans le périmètre NIS2, puis à structurer une feuille de route sur la base du ReCyF plutôt que d'attendre la promulgation définitive pour commencer à agir.",
};

export const useGrcContent = createLocaleContent(
  { grcPillars, nis2Section },
  en,
);
