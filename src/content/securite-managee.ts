export const managedHero = {
  breadcrumb: "Sécurité managée",
  eyebrow: "Pôle Cybersécurité",
  titleLead: "La sécurité managée,",
  titleAccent: "sans la charge opérationnelle",
  pull: "La plupart des entreprises disposent d'un antivirus. Peu savent réellement ce qui se passe sur leur réseau à 3 h du matin, un samedi.",
  paragraphs: [
    "C'est précisément ce qui distingue « être équipé » de « être protégé ». Nous déployons et opérons des solutions dimensionnées selon la maturité réelle de votre système d'information, et non selon le catalogue standard d'un éditeur.",
    "L'objectif : neutraliser les menaces avant qu'elles n'affectent votre activité.",
  ],
  cta: "Faire le point sur votre niveau de protection",
};

export const levelsSection = {
  eyebrow: "Les niveaux, expliqués simplement",
  title: "SIEM, EPP, EDR, XDR, MDR : ce que ces sigles veulent vraiment dire",
  intro:
    "On vous parlera forcément d'EPP, d'EDR, de XDR, de MDR et de SIEM. Ces sigles décrivent en réalité une progression assez logique. Voilà ce qu'ils veulent dire, sans le jargon commercial.",
  items: [
    {
      code: "SIEM",
      metaphor: "Le registre central",
      full: "Security Information and Event Management",
      body: "La base de tout. Le SIEM collecte et centralise l'ensemble des journaux d'événements de votre système d'information : postes, serveurs, réseau, applications, cloud, au même endroit. C'est la mémoire complète de ce qui se passe chez vous, interrogeable et corrélable à tout moment : indispensable pour investiguer un incident, répondre à un audit, ou démontrer votre conformité réglementaire (NIS2, ISO 27001).",
      scope: "Journaux, corrélation, preuve",
      coverage: 24,
    },
    {
      code: "EPP",
      metaphor: "La porte blindée",
      full: "Endpoint Protection Platform",
      body: "L'antivirus nouvelle génération. Il bloque ce qui est connu : virus, ransomwares répertoriés, fichiers malveillants. C'est le socle, indispensable, mais il ne voit que ce qu'il a déjà appris à reconnaître.",
      scope: "Postes, serveurs",
      coverage: 42,
    },
    {
      code: "EDR",
      metaphor: "La caméra dans le couloir",
      full: "Endpoint Detection and Response",
      body: "Là où l'EPP bloque, l'EDR observe. Il surveille les comportements sur les postes et serveurs : un processus qui se lance à une heure anormale, un compte qui accède à des fichiers inhabituels, un chiffrement massif qui démarre. Il détecte l'attaque même jamais vue avant, et permet de remonter le fil pour comprendre ce qui s'est passé.",
      scope: "Comportements, investigation",
      coverage: 62,
    },
    {
      code: "XDR",
      metaphor: "Toute la maison sous surveillance",
      full: "Extended Detection and Response",
      body: "L'EDR ne regarde que les postes. Le XDR élargit à la messagerie, au réseau, au cloud et aux identités, et surtout il croise ces signaux. Un mail suspect le matin, une connexion inhabituelle l'après-midi, un transfert de données le soir.",
      scope: "Messagerie, réseau, cloud, identités",
      coverage: 82,
    },
    {
      code: "MDR",
      metaphor: "Quelqu'un derrière l'écran",
      full: "Managed Detection and Response",
      body: "Les meilleurs outils du monde ne servent à rien si personne ne lit les alertes. Le MDR, c'est le service humain par-dessus : une équipe qui surveille, qui trie le vrai du faux positif, qui intervient.",
      scope: "Surveillance humaine, réponse",
      coverage: 100,
    },
  ],
};

export const socSection = {
  eyebrow: "Supervision",
  title: "Un SOC, sans construire un SOC",
  paragraphs: [
    "Monter son propre centre de supervision, c'est du 24/7, des équipes en rotation, des outils, et un budget qui ferme la porte à la plupart des PME et ETI.",
    "Nous vous donnons accès à la capacité de supervision sans l'infrastructure. Détection, qualification des alertes, réponse à incident, et un interlocuteur qui vous explique ce qui s'est passé en français, pas en extraits de logs.",
  ],
  facts: [
    {
      value: "24/7",
      label: "Supervision continue, sans équipe interne à recruter",
    },
    { value: "0", label: "Infrastructure à construire de votre côté" },
    {
      value: "1",
      label: "Interlocuteur qui vous explique l'incident en clair",
    },
  ],
};

export const partnerLogos = [
  { slug: "trendmicro", name: "Trend Micro" },
  { slug: "bitdefender", name: "Bitdefender" },
  { slug: "fortinet", name: "Fortinet" },
  { slug: "cisco", name: "Cisco" },
  { slug: "cloudflare", name: "Cloudflare" },
  { slug: "okta", name: "Okta" },
  { slug: "splunk", name: "Splunk" },
  { slug: "mcafee", name: "McAfee" },
].map((p) => ({
  src: `https://cdn.simpleicons.org/${p.slug}`,
  alt: p.name,
}));

export const partnersSection = {
  eyebrow: "Nos partenaires et vos contraintes",
  title: "Des solutions choisies pour leur pertinence, pas par habitude",
  body: "Nous travaillons avec plusieurs éditeurs reconnus du marché tels que Trend Micro et Bitdefender, et bien d'autres. Cela signifie des solutions éprouvées et un accès support privilégié pour vous. Le choix de la solution dépend de votre existant et de votre niveau de maturité, pas de nos habitudes.",
  constraints: [
    {
      title: "Où sont vos données ?",
      body: "Sur demande, l'hébergement des données peut être assuré en Europe. C'est une question qui revient systématiquement, à juste titre : la localisation des données conditionne votre conformité RGPD et, dans certains secteurs, votre capacité même à contractualiser.",
    },
    {
      title: "Des secteurs à contraintes fortes",
      body: "Santé, défense, secteurs réglementés : ces environnements imposent des exigences particulières sur l'hébergement, les accès et la traçabilité. Nous savons travailler avec ces contraintes et adapter l'architecture en conséquence, avec les partenaires habilités.",
    },
  ],
};

export const peopleSection = {
  eyebrow: "Le maillon qu'on oublie toujours",
  title: "Vos équipes",
  paragraphs: [
    "On peut empiler les meilleures technologies. Il suffit d'un clic sur le mauvais lien un mardi matin pour tout contourner.",
    "Le phishing reste une porte d'entrée, et ce n'est pas un problème d'outil, c'est un problème d'habitude. Nous accompagnons vos équipes avec des solutions simples : campagnes de simulation d'hameçonnage, formations courtes, contenus digestes.",
    "Pas de séminaire de trois heures que tout le monde oublie le lendemain. Des exercices réguliers, des rappels concrets, et une progression mesurable avec des KPIs à vous délivrer.",
  ],
  demoLabel: "Démonstration : sauriez-vous repérer les indices ?",
  demoHint: "Cliquez sur les trois zones signalées dans cet e-mail.",
  email: {
    from: "Service Comptabilité <compta@surcingit-fr.secure-billing.com>",
    to: "vous@votre-entreprise.fr",
    subject: "URGENT : facture impayée à régler avant 17 h",
    lines: [
      "Bonjour,",
      "Notre service constate qu'une facture reste impayée. Merci de vérifier le document joint et de confirmer le règlement via le lien ci-dessous avant 17 h afin d'éviter la suspension du compte.",
    ],
    linkText: "Vérifier et régler ma facture",
    attachment: "Facture_2024_087.pdf.exe",
    signature: "Cordialement, Service Comptabilité",
  },
  clues: [
    {
      id: "sender",
      label: "L'adresse d'expéditeur",
      title: "Un domaine qui imite le vrai",
      body: "« surcingit-fr.secure-billing.com » n'est pas le domaine de l'entreprise : le vrai nom est placé en sous-domaine d'un domaine tiers. Un réflexe simple : lire l'adresse de droite à gauche.",
    },
    {
      id: "link",
      label: "Le lien",
      title: "Le texte ne correspond pas à la destination",
      body: "Le libellé rassure, mais l'URL réelle pointe ailleurs. Survoler le lien avant de cliquer révèle la destination, et l'urgence affichée sert justement à empêcher ce réflexe.",
    },
    {
      id: "attachment",
      label: "La pièce jointe",
      title: "Une double extension",
      body: "« Facture_2024_087.pdf.exe » n'est pas un PDF : c'est un exécutable déguisé. Toute double extension sur une pièce jointe est un signal d'alerte immédiat.",
    },
  ],
};

export const managedCta = {
  title: "Faisons un point sur votre niveau de protection",
  body: "Un échange court permet souvent d'identifier les priorités les plus urgentes.",
  cta: "Contactez-nous",
};
