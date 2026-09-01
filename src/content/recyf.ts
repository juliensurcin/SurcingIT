import { createLocaleContent } from "@/lib/i18n";
import * as en from "./recyf.en";

export const recyfIntro = {
  title: "EI ou EE : vos obligations ne sont pas les mêmes",
  body: "Le ReCyF distingue deux statuts NIS2 : entité importante (EI) et entité essentielle (EE). Les 15 premiers objectifs de sécurité s'appliquent aux deux statuts ; les 5 derniers, plus exigeants, ne concernent que les entités essentielles. Indiquez votre statut pour voir ce qui s'applique à vous.",
  note: "Au sein des 15 objectifs communs, le niveau d'exigence de certaines mesures diffère aussi entre EI et EE (version de travail ReCyF 2.5, 17/03/2026) : cette vue présente les objectifs, pas le détail mesure par mesure.",
  statusAriaLabel: "Votre statut NIS2",
  applicableLabelPrefix: "objectifs de sécurité applicables sur",
  eeOnlyLabel: "EE uniquement",
  mailtoSubject: "ReCyF : mon statut NIS2",
};

export type RecyfObjective = {
  number: number;
  title: string;
  eeOnly: boolean;
};

/** 20 objectifs de sécurité, tels que numérotés et regroupés par pilier dans
 * le ReCyF (Référentiel Cyber France, ANSSI, v2.5 du 17/03/2026 — document
 * de travail). Objectifs 16 à 20 réservés aux EE (principe de
 * proportionnalité, cf. « Présentation du document » du référentiel). */
export const recyfPillars: { pillar: string; objectives: RecyfObjective[] }[] =
  [
    {
      pillar: "Gouvernance",
      objectives: [
        {
          number: 1,
          title: "Recensement des systèmes d'information",
          eeOnly: false,
        },
        {
          number: 2,
          title:
            "Mise en œuvre d'un cadre de gouvernance de la sécurité numérique",
          eeOnly: false,
        },
        { number: 3, title: "Maîtrise de l'écosystème", eeOnly: false },
        {
          number: 4,
          title:
            "Intégration de la sécurité numérique dans la gestion des ressources humaines",
          eeOnly: false,
        },
        {
          number: 5,
          title: "Maîtrise des systèmes d'information",
          eeOnly: false,
        },
        {
          number: 16,
          title: "Mise en œuvre d'une approche par les risques",
          eeOnly: true,
        },
        {
          number: 17,
          title: "Audit de la sécurité des systèmes d'information",
          eeOnly: true,
        },
      ],
    },
    {
      pillar: "Protection",
      objectives: [
        {
          number: 6,
          title: "Maîtrise des accès physiques aux locaux",
          eeOnly: false,
        },
        {
          number: 7,
          title: "Sécurisation de l'architecture des systèmes d'information",
          eeOnly: false,
        },
        {
          number: 8,
          title: "Sécurisation des accès distants aux systèmes d'information",
          eeOnly: false,
        },
        {
          number: 9,
          title:
            "Protection des systèmes d'information contre les codes malveillants",
          eeOnly: false,
        },
        {
          number: 10,
          title:
            "Gestion des identités et des accès des utilisateurs aux systèmes d'information",
          eeOnly: false,
        },
        {
          number: 11,
          title: "Maîtrise de l'administration des systèmes d'information",
          eeOnly: false,
        },
        {
          number: 18,
          title:
            "Sécurisation de la configuration des ressources des systèmes d'information",
          eeOnly: true,
        },
        {
          number: 19,
          title:
            "Administration des systèmes d'information depuis des ressources dédiées",
          eeOnly: true,
        },
      ],
    },
    {
      pillar: "Défense",
      objectives: [
        {
          number: 12,
          title: "Identification et réaction aux incidents de sécurité",
          eeOnly: false,
        },
        {
          number: 20,
          title: "Supervision de la sécurité des systèmes d'information",
          eeOnly: true,
        },
      ],
    },
    {
      pillar: "Résilience",
      objectives: [
        {
          number: 13,
          title: "Continuité et reprise d'activité",
          eeOnly: false,
        },
        {
          number: 14,
          title: "Réaction aux crises d'origine cyber",
          eeOnly: false,
        },
        {
          number: 15,
          title: "Exercices, tests et entraînements",
          eeOnly: false,
        },
      ],
    },
  ];

export const recyfCta = {
  cta: "Faire le point sur mon statut",
};

export const useRecyfContent = createLocaleContent(
  { recyfIntro, recyfPillars, recyfCta },
  en,
);
