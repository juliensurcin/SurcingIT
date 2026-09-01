import { createLocaleContent } from "@/lib/i18n";
import * as en from "./securite-managee.en";

export const managedHero = {
  breadcrumb: "Supervision & Protection",
  eyebrow: "Pôle Cybersécurité",
  titleLead: "Une protection qui couvre",
  titleAccent: "mail, poste et réseau",
  pull: "Un antivirus sur les postes, un pare-feu bien configuré : la plupart des entreprises sont équipées. Peu couvrent l'ensemble de la chaîne, de la messagerie jusqu'à la vigilance de leurs équipes.",
  paragraphs: [
    "C'est précisément ce qui distingue « être équipé » de « être protégé ». Nous couvrons chaque maillon, la messagerie, les postes et serveurs, la supervision, vos équipes, avec des solutions dimensionnées selon votre maturité réelle, et non selon le catalogue standard d'un éditeur.",
    "L'objectif : neutraliser les menaces avant qu'elles n'affectent votre activité.",
  ],
  cta: "Faire le point sur votre niveau de protection",
};

export const emailProtectionSection = {
  eyebrow: "Avant même l'EDR",
  title: "La messagerie, la porte d'entrée numéro un",
  intro:
    "Le phishing reste le vecteur d'attaque le plus utilisé (60 % des attaques, selon le CESIN), et il se sophistique : plus de 40 % des entreprises françaises ont reçu une tentative de phishing propulsée par l'IA au cours des six derniers mois, une hausse de 210 % par rapport à 2024 (ANSSI). Avant de parler d'EDR ou de SOC, on sécurise ce qui arrive en premier dans la boîte mail.",
  sources: [
    {
      label: "Baromètre Cyber 2026 (CESIN)",
      href: "https://www.mailinblack.com/ressources/guides/barometre-cyber-2026/",
    },
    {
      label: "Rapport ANSSI sur le phishing assisté par IA",
      href: "https://comprendre-ingenierie-sociale.fr/phishing-ia-le-danger-n1-pour-les-cyberattaquants-en-2026/",
    },
  ],
  /** Not on simple-icons (checked) — self-hosted from each vendor's own
   * official mark, same posture as the OSCP/ANSSI/ISO assets elsewhere in
   * this repo. Deliberately distinct from Partners.tsx's logo set further
   * down this same page (trendmicro, bitdefender, fortinet, cisco,
   * cloudflare, okta, splunk, mcafee) — no overlap. */
  solutionLogos: [
    { src: "/email-security/proofpoint.svg", alt: "Proofpoint" },
    { src: "/email-security/mimecast.png", alt: "Mimecast" },
    { src: "/email-security/barracuda.svg", alt: "Barracuda Networks" },
    { src: "/email-security/defender.svg", alt: "Microsoft Defender" },
    { src: "/email-security/sophos.svg", alt: "Sophos" },
    { src: "/email-security/checkpoint.svg", alt: "Check Point" },
  ],
  stages: [
    {
      title: "Filtrage anti-spam",
      body: "Le bruit est éliminé avant d'atteindre la boîte de réception : campagnes massives, expéditeurs déjà signalés, contenus indésirables.",
    },
    {
      title: "Anti-phishing comportemental",
      body: "Analyse de la réputation des domaines, des liens et du ton du message, pour repérer les tentatives ciblées, y compris celles générées par IA, que les filtres classiques laissent passer.",
    },
    {
      title: "Sandboxing des pièces jointes",
      body: "Chaque pièce jointe suspecte est ouverte dans un environnement isolé avant d'être remise, pour observer son comportement réel plutôt que de se fier à sa seule signature.",
    },
    {
      title: "Authentification SPF, DKIM, DMARC",
      body: "Sans ces trois protocoles correctement configurés, n'importe qui peut envoyer un e-mail qui semble provenir de votre propre domaine. On vérifie que l'expéditeur est bien qui il prétend être, pas seulement le contenu du message.",
    },
    {
      title: "Quarantaine et signalement",
      body: "Un e-mail douteux part en quarantaine plutôt qu'en boîte de réception, et un collaborateur peut en signaler un d'un clic : l'équipe de supervision traite le signalement, pas l'inverse.",
    },
  ],
};

export const endpointProtectionSection = {
  eyebrow: "La deuxième porte d'entrée",
  title: "Le poste de travail, juste derrière la messagerie",
  intro:
    "L'exploitation d'une vulnérabilité arrive en deuxième position des vecteurs d'attaque significatifs (41 %), juste derrière le phishing (55 %), selon le baromètre CESIN 2026. Un poste ou un serveur mal tenu à jour reste une cible plus simple à atteindre qu'à corriger après coup.",
  sources: [
    {
      label: "Baromètre CESIN 2026, vecteurs d'attaque (informatiquenews.fr)",
      href: "https://www.informatiquenews.fr/barometre-cesin-2026-moins-dattaques-plus-dimpacts-109218",
    },
  ],
  /** Not on simple-icons (checked) — self-hosted from each vendor's own
   * official mark. Distinct from Partners.tsx's set further down this page
   * and from EmailProtection's solutionLogos — no overlap across the three
   * logo groups on this page.
   *
   * CrowdStrike/SentinelOne/Trellix are square icon marks (favicons, saved
   * from each vendor's own site), not their full wordmark lockups — those
   * wordmark SVGs (Commons) had 4:1–6:1 aspect ratios that rendered as
   * unreadable slivers once squeezed into this cluster's square tiles,
   * unlike the simple-icons marks below which are already pre-cropped to
   * a square viewBox. */
  solutionLogos: [
    { src: "/endpoint-security/crowdstrike.png", alt: "CrowdStrike" },
    { src: "/endpoint-security/sentinelone.png", alt: "SentinelOne" },
    { src: "/endpoint-security/trellix.png", alt: "Trellix" },
    { src: "https://cdn.simpleicons.org/kaspersky", alt: "Kaspersky" },
    { src: "https://cdn.simpleicons.org/malwarebytes", alt: "Malwarebytes" },
    {
      src: "https://cdn.simpleicons.org/paloaltonetworks",
      alt: "Palo Alto Networks",
    },
  ],
  stages: [
    {
      title: "Inventaire des actifs",
      body: "Un appareil non recensé est un appareil qu'on ne protège pas. On maintient une cartographie à jour des postes, serveurs et objets connectés à votre réseau.",
    },
    {
      title: "Protection nouvelle génération (EPP)",
      body: "Un antivirus nouvelle génération bloque les menaces connues et les comportements malveillants génériques, sans attendre une intervention humaine.",
    },
    {
      title: "Détection comportementale (EDR)",
      body: "Surveillance continue des postes et serveurs pour repérer ce que l'EPP ne voit pas : mouvement latéral, escalade de privilèges, chiffrement massif en cours.",
    },
    {
      title: "Gestion des correctifs",
      body: "Les vulnérabilités déjà connues restent la porte d'entrée la plus commune. Un cycle de mise à jour piloté réduit la fenêtre d'exposition, plutôt que de la laisser ouverte des mois.",
    },
    {
      title: "Isolation et réponse",
      body: "Un poste compromis est isolé du réseau en quelques minutes, le temps que l'incident soit qualifié, pas laissé connecté pendant des heures.",
    },
  ],
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
  demoHint: "Cliquez sur les quatre zones signalées dans cet e-mail.",
  clueAriaPrefix: "Indice :",
  cluesWord: "indices",
  cluesHint:
    "Sélectionnez une zone soulignée dans l'e-mail pour afficher l'explication.",
  metricsHeading: "Ce qu'on mesure",
  email: {
    fromLabel: "De",
    toLabel: "À",
    attachmentLabel: "PJ",
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
    {
      id: "subject",
      label: "L'objet du message",
      title: "Une urgence artificielle",
      body: "Une échéance serrée (« avant 17 h ») pousse à agir vite sans vérifier : c'est un ressort psychologique classique du phishing, d'autant plus efficace quand le message est rédigé ou peaufiné par IA pour sembler authentique.",
    },
  ],
  metrics: [
    {
      title: "Taux de clic",
      body: "La part de collaborateurs qui cliquent sur le lien ou la pièce jointe simulés, campagne après campagne.",
    },
    {
      title: "Taux de signalement",
      body: "La part de collaborateurs qui signalent le message au lieu d'y réagir, l'indicateur qui compte vraiment sur la durée.",
    },
    {
      title: "Délai de réaction",
      body: "Le temps écoulé entre la réception et le premier signalement, pour mesurer si le réflexe s'installe.",
    },
  ],
};

export const managedCta = {
  title: "Faisons un point sur votre niveau de protection",
  body: "Un échange court permet souvent d'identifier les priorités les plus urgentes.",
  cta: "Contactez-nous",
};

export const useManagedContent = createLocaleContent(
  {
    managedHero,
    emailProtectionSection,
    endpointProtectionSection,
    levelsSection,
    socSection,
    partnerLogos,
    partnersSection,
    peopleSection,
    managedCta,
  },
  en,
);
