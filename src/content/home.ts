export const brand = {
  name: "SurcingIT",
  email: "contact@surcingit.fr",
};

export const hero = {
  title: "Une ESN hybride, orientée terrain",
  body: "SurcingIT est une ESN spécialisée en cybersécurité et en sourcing de talents IT. Au-delà de la sécurisation de vos systèmes, nous qualifions nos consultants et les accompagnons à chaque étape de leur carrière.",
  ctaPrimary: "Prendre rendez-vous",
  ctaSecondary: "Nos services",
};

/** Three facts under the hero: short, checkable, no marketing adjectives. */
export const heroFacts = [
  {
    value: "2 métiers",
    label: "Cybersécurité et sourcing IT dans une seule structure",
  },
  { value: "48 h", label: "Délai de réponse à toute demande entrante" },
  {
    value: "100 %",
    label: "Des profils validés techniquement avant présentation",
  },
];

/** Hover panel under the "Services" nav trigger. */
export const navServices = [
  {
    title: "Sourcing & Recrutement IT",
    tagline: "Des profils tech validés par des ingénieurs",
    href: "/sourcing-recrutement-it",
    children: [
      {
        title: "Cabinet de Recrutement",
        tagline: "Recrutement direct de profils tech qualifiés",
        href: "/sourcing-recrutement-it",
      },
      {
        title: "Consultants",
        tagline: "Accompagnement, statuts et carrière",
        href: "/sourcing-recrutement-it#consultants",
      },
    ] as { title: string; tagline: string; href: string }[],
  },
  {
    title: "Pôle Cybersécurité",
    tagline: "Protection, tests et conformité",
    href: "/cybersecurite",
    children: [
      {
        title: "Sécurité Managée",
        tagline: "Protéger en continu (SIEM, EPP, EDR, XDR, MDR, SOC)",
        href: "/cybersecurite/securite-managee",
      },
      {
        title: "Test d'intrusion & Audit",
        tagline: "Tester ponctuellement (pentest, Red Team, audits)",
        href: "/cybersecurite/test-intrusion-audit",
      },
      {
        title: "GRC : Gouvernance, Risque, Conformité",
        tagline:
          "Structurer et sécuriser dans la durée (NIS2, ISO 27001, RGPD)",
        href: "/cybersecurite/grc",
      },
    ],
  },
  {
    title: "Conseil IT Stratégique",
    tagline: "CISO as a Service et conseil ponctuel",
    href: "/conseil-it-strategique",
    children: [],
  },
];

export const servicesIntro = {
  eyebrow: "Services clients",
  title: "L'expertise au service de vos projets",
  subtitle:
    "Des prestations de conseil cyber et IT menées par des ingénieurs pré-qualifiés, techniquement et humainement.",
};

export const services = [
  {
    index: "01",
    href: "/sourcing-recrutement-it",
    title: "Sourcing & Recrutement IT",
    description:
      "Identification et qualification de profils tech sur tout le spectre (Dev, Cloud, Data, Ops, Cyber). Chaque candidat est validé techniquement par nos ingénieurs et évalué sur sa personnalité, son autonomie et son adéquation au poste.",
    tags: ["Cabinet de recrutement", "Assistance technique", "Pré-embauche"],
  },
  {
    index: "02",
    href: "/cybersecurite",
    title: "Pôle Cybersécurité",
    description:
      "Nous couvrons l'ensemble du cycle de sécurité : protection managée des postes et de l'infrastructure, tests d'intrusion, audits techniques, gouvernance SSI, conformité NIS2 / ISO 27001 / RGPD, et accompagnement SOC. Nos consultants cyber sont certifiés et interviennent sur des problématiques critiques.",
    tags: [
      "Sécurité Managée",
      "Test d'intrusion & Audit",
      "GRC : Gouvernance, Risque, Conformité",
    ],
  },
  {
    index: "03",
    href: "/conseil-it-strategique",
    title: "Conseil IT Stratégique",
    description:
      "Accompagnement sur vos projets de transformation numérique, architecture sécurisée et sélection de solutions. Disponibles en mode CISO as a Service ou conseil ponctuel.",
    tags: ["NIS2", "ISO 27001", "RGPD", "ANSSI"],
  },
];

export const whyUs = {
  title: "Pourquoi SurcingIT",
  columns: [
    {
      label: "Pour nos clients",
      accent: "primary" as const,
      points: [
        "Profils pré-qualifiés techniquement par des ingénieurs seniors",
        "Expertise Cyber native pour sécuriser vos projets critiques",
        "Stabilité des prestataires grâce à notre accompagnement RH actif",
        "Interlocuteur unique, réactivité garantie",
      ],
    },
    {
      label: "Pour nos consultants",
      accent: "consultant" as const,
      points: [
        "Liberté du statut (CDI, Freelance, Portage) avec l'accord du client",
        "Optimisation financière et conseil sur la rémunération",
        "Support administratif & aide à la création d'entreprise",
        "Coaching continu et suivi personnalisé de carrière",
      ],
    },
  ],
};

export const consultantCare = {
  eyebrow: "Consultant Care",
  title: "Nos consultants, notre priorité",
  subtitle:
    "Parce que la réussite d'un projet dépend de l'épanouissement de l'expert, SurcingIT propose un écosystème complet à ses talents.",
  cta: "Nous écrire",
  cards: [
    {
      title: "Ingénierie de la rémunération",
      description:
        "Nous conseillons nos consultants sur la structure optimale de leurs revenus : salaire, dividendes et forme juridique la plus adaptée à leur activité.",
    },
    {
      title: "Flexibilité contractuelle",
      description:
        "CDI, Freelance pur ou Portage Salarial : nous proposons le modèle adapté à chaque besoin, alliant l'indépendance à la protection sociale.",
    },
    {
      title: "Accompagnement entrepreneurial",
      description:
        "Un centre de services dédié aide les consultants dans leurs démarches de création de société : choix du statut, gestion comptable, conseils juridiques.",
    },
    {
      title: "Évolution de carrière",
      description:
        "Coaching individuel et suivi personnalisé continu, que le consultant soit salarié ou indépendant. Montée en compétences, certifications, positionnement marché.",
    },
  ],
};

export const about = {
  eyebrow: "Notre ADN",
  title: "L'humain au centre de chaque mission",
  paragraphs: [
    "Fondée par des praticiens de la cybersécurité et du conseil IT, SurcingIT incarne une vision différente de l'ESN : allier la rigueur technique d'un cabinet cyber à la chaleur d'un vrai accompagnement humain.",
    "Chaque consultant que nous positionnons est sélectionné sur ses compétences techniques, son savoir-être, et sa capacité à s'intégrer dans votre contexte. Aucun envoi de CV à la volée, seulement des profils validés par des ingénieurs.",
  ],
  pillars: [
    {
      title: "Sélection rigoureuse",
      description:
        "Chaque candidat est évalué sur 3 dimensions : compétences techniques, soft skills et adéquation au poste.",
    },
    {
      title: "Expertise cyber certifiée",
      description:
        "Pentesters OSCP, auditeurs ISO 27001, architectes cloud : nos experts ont du terrain.",
    },
    {
      title: "Accompagnement actif",
      description:
        "Pas de CV envoyés à la volée. Suivi de mission, coaching, évolution de carrière intégrés.",
    },
  ],
};

export const contact = {
  eyebrow: "Contact",
  title: "Prendre rendez-vous",
  body: "Une question, un projet, un besoin de recrutement cyber ? Écrivez-nous directement.",
  cta: "Prendre rendez-vous",
};
