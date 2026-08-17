export const grcHero = {
  breadcrumb: "GRC : Gouvernance, Risque, Conformité",
  eyebrow: "Pôle Cybersécurité",
  titleLead: "GRC : transformer une obligation réglementaire",
  titleAccent: "en plan d'action",

  pull: "NIS2, ISO 27001, RGPD : trois cadres, trois vocabulaires différents, et souvent la même question de votre part « Qu'est-ce que je dois faire, et par où je commence ? »",
  paragraphs: [
    "La GRC (Gouvernance, Risque, Conformité), c'est exactement ça : transformer un texte réglementaire en règles internes claires, en priorités hiérarchisées, et en actions que vos équipes peuvent réellement mettre en œuvre.",
    "Pas de documentation empilée pour cocher une case.",
  ],
  cta: "Faire le point sur vos obligations",
};

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

export const scaleSection = {
  eyebrow: "Proportionnalité",
  title: "Une approche qui s'ajuste à votre taille",
  paragraphs: [
    "L'erreur la plus fréquente est d'appliquer à une PME de 30 personnes le niveau de formalisme conçu pour un grand groupe. Les 152 mesures du ReCyF, par exemple, ne s'appliquent pas toutes de la même façon selon la maturité et la taille de votre structure, c'est justement l'objet du travail de priorisation.",
    "Nous structurons une feuille de route proportionnée : ce qui doit être traité en premier parce que le risque est réel et l'obligation immédiate, ce qui peut attendre, et ce qui ne vous concerne probablement pas du tout.",
  ],
  buckets: [
    {
      label: "À traiter en premier",
      note: "Risque réel, obligation immédiate",
      weight: 100,
    },
    { label: "Peut attendre", note: "Important, non urgent", weight: 60 },
    {
      label: "Probablement hors périmètre",
      note: "Ne vous concerne pas",
      weight: 22,
    },
  ],
};

export const processSection = {
  eyebrow: "Méthode",
  title: "Comment ça se passe",
  steps: [
    {
      title: "Diagnostic",
      body: "On évalue votre situation actuelle par rapport aux cadres qui s'appliquent réellement à vous, pas à tous les cadres existants par précaution.",
    },
    {
      title: "Priorisation",
      body: "On identifie ce qui est urgent, ce qui est important mais non urgent, et ce qui est secondaire, en tenant compte de votre budget et de vos équipes.",
    },
    {
      title: "Mise en œuvre",
      body: "Politique de sécurité, procédures, formalisation des responsabilités : on rédige ce qui doit l'être, à un niveau que vos équipes peuvent réellement s'approprier.",
    },
    {
      title: "Suivi dans la durée",
      body: "La réglementation évolue (NIS2 en est l'exemple le plus actuel), et une feuille de route figée devient vite obsolète. On reste dans la boucle pour l'ajuster.",
    },
  ],
};

export const grcCta = {
  title: "Vous ne savez pas par où commencer ?",
  body: "C'est le point de départ le plus courant. Un échange suffit souvent à clarifier ce qui s'applique réellement à vous, et ce qui peut attendre.",
  cta: "Faire le point sur vos obligations",
};
