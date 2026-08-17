export type FaqItem = { q: string; a: string };
export type FaqCategory = { title: string; items: FaqItem[] };

export const faqPage = {
  title: "Questions fréquentes",
  intro:
    "Les questions qu'on nous pose le plus souvent, classées par domaine d'intervention.",
};

export const faqCategories: FaqCategory[] = [
  {
    title: "Sourcing & Recrutement IT",
    items: [
      {
        q: "Quelle différence entre cabinet de recrutement et assistance technique ?",
        a: "En cabinet de recrutement, vous embauchez la personne directement : elle rejoint vos effectifs. En assistance technique, le consultant intervient sur votre projet mais reste rattaché à SurcingIT.",
      },
      {
        q: "C'est quoi exactement la pré-embauche ?",
        a: "Une formule hybride : le consultant commence en assistance technique chez vous, et vous pouvez l'intégrer en interne ensuite, sans clause de non-concurrence ni pénalité de conversion.",
      },
      {
        q: "Vos consultants sont testés sur quoi ?",
        a: "Sur trois dimensions : compétences techniques (entretien mené par un ingénieur du domaine), qualités humaines et autonomie, et adéquation avec le contexte précis du client.",
      },
      {
        q: "Sur quels profils intervenez-vous ?",
        a: "Sur tout le spectre technique : développement, Cloud, Data, Ops et Cybersécurité, avec une profondeur particulière sur les profils en cybersécurité.",
      },
      {
        q: "Je suis consultant : dois-je choisir entre CDI et freelance ?",
        a: "Non. Nous proposons trois formats : CDI, freelance et portage salarial, sous réserve de l'accord du client, et vous conseillons sur le format le plus adapté à votre situation personnelle.",
      },
      {
        q: "Quel est le délai pour recevoir des profils ?",
        a: "Les premiers profils qualifiés vous sont présentés en quelques jours ouvrés sur la plupart des besoins techniques, car la validation technique est menée en interne par nos ingénieurs. Sur des expertises rares, notamment en cybersécurité, comptez davantage : nous préférons vous annoncer un délai réaliste plutôt que de vous envoyer des CV non filtrés.",
      },
      {
        q: "Comment se passe la facturation d'un recrutement IT ?",
        a: "En cabinet de recrutement, notre rémunération intervient au moment de l'embauche, avec une période de garantie. En assistance technique, la facturation est un taux journalier sur les jours réellement travaillés. En pré-embauche, vous passez de l'un à l'autre sans pénalité de conversion. Les conditions sont posées noir sur blanc avant de démarrer.",
      },
    ],
  },
  {
    title: "Cybersécurité",
    items: [
      {
        q: "Quelle est la différence entre sécurité managée et test d'intrusion ?",
        a: "La sécurité managée est un service continu : elle surveille et protège votre système d'information en permanence. Le test d'intrusion est ponctuel : il évalue à un instant T la résistance de vos défenses face à une attaque simulée. Les deux sont complémentaires : l'un protège au quotidien, l'autre vérifie que la protection tient.",
      },
      {
        q: "Dois-je faire les trois (sécurité managée, tests, gouvernance) ?",
        a: "Pas nécessairement en même temps. Beaucoup de nos clients commencent par un seul pilier selon leur priorité du moment, souvent la sécurité managée ou un audit initial, puis élargissent progressivement. Nous vous aidons à identifier par où commencer selon votre contexte.",
      },
      {
        q: "À quoi sert un audit de cybersécurité ?",
        a: "Un audit de cybersécurité mesure l'écart entre votre niveau de sécurité réel et le niveau attendu, qu'il soit défini par un référentiel (ISO 27001, ReCyF/NIS2) ou par votre propre exposition au risque. Il produit un état des lieux documenté, une liste de vulnérabilités et de faiblesses d'organisation, et un plan d'action priorisé. C'est le point de départ le plus courant quand on ne sait pas encore où investir.",
      },
      {
        q: "Combien coûte la cybersécurité pour une PME ?",
        a: "Il n'existe pas de tarif unique : le coût dépend du nombre de postes et serveurs à protéger, du niveau de surveillance retenu (EDR, XDR, SOC ou MDR) et de l'accompagnement en gouvernance. Nous construisons systématiquement une proposition dimensionnée à votre périmètre réel, en séparant ce qui est urgent de ce qui peut attendre le prochain exercice.",
      },
    ],
  },
  {
    title: "Sécurité managée",
    items: [
      {
        q: "Comment fonctionne un EDR ?",
        a: "Un logiciel installé sur vos postes et serveurs qui surveille en permanence ce qui s'y passe. Contrairement à un antivirus classique, l'EDR détecte les comportements anormaux et permet de reconstituer l'historique complet d'une attaque après coup.",
      },
      {
        q: "Quelle est la différence entre EDR et XDR ?",
        a: "L'EDR surveille uniquement les postes de travail et serveurs. Le XDR étend la surveillance à la messagerie, au réseau, au cloud et aux identités, puis corrèle tous ces signaux entre eux.",
      },
      {
        q: "MDR ou SOC, c'est pareil ?",
        a: "Pas tout à fait. Un SOC est un centre de supervision (interne ou externalisé). Le MDR est un service packagé où un prestataire fournit à la fois les outils et l'équipe qui les exploite.",
      },
      {
        q: "On a déjà un antivirus, ça ne suffit pas ?",
        a: "Un antivirus bloque les menaces répertoriées. Mais les attaques actuelles utilisent souvent des outils légitimes détournés ou du code jamais vu, exactement le trou que comble un EDR.",
      },
      {
        q: "Mes données peuvent-elles rester en Europe ?",
        a: "Oui, l'hébergement en Europe est possible sur demande, important pour votre conformité RGPD et vos obligations contractuelles.",
      },
      {
        q: "Qu'est-ce qu'un SOC managé ?",
        a: "Un SOC managé est un centre de supervision de la sécurité opéré par un prestataire : collecte et corrélation des journaux (SIEM), détection des signaux d'attaque, qualification des alertes et alerte de vos équipes avec les actions à mener. Vous bénéficiez d'une surveillance continue sans recruter, former et maintenir une équipe d'analystes en interne.",
      },
      {
        q: "À quoi sert un SIEM ?",
        a: "Un SIEM centralise les journaux de vos équipements, serveurs, applications et services cloud, puis les corrèle pour faire remonter les scénarios suspects qu'aucune source ne révèle seule. C'est aussi la brique qui permet de reconstituer précisément le déroulé d'un incident après coup, et de conserver des preuves exploitables.",
      },
      {
        q: "MDR : qu'est-ce que ça couvre exactement ?",
        a: "Le MDR (Managed Detection and Response) combine les outils de détection, l'équipe d'analystes qui les exploite en 24/7 et la capacité d'intervention : isolement d'un poste compromis, blocage d'un compte, arrêt d'un processus malveillant. La différence avec une simple supervision, c'est qu'on ne se contente pas de vous prévenir, on agit dans le périmètre convenu avec vous.",
      },
    ],
  },
  {
    title: "Test d'intrusion & Audit",
    items: [
      {
        q: "C'est quoi un test d'intrusion ?",
        a: "Une attaque volontaire de votre système d'information, avec votre autorisation écrite et dans un cadre défini, pour identifier les failles réellement exploitables, en enchaînant les vulnérabilités comme le ferait un vrai attaquant.",
      },
      {
        q: "Quelle différence entre un audit et un test d'intrusion ?",
        a: "Le test d'intrusion répond à « qu'est-ce qu'on peut me faire aujourd'hui ? ». L'audit répond à « qu'est-ce qui est mal conçu ou mal configuré chez moi ? ».",
      },
      {
        q: "Boîte noire, grise ou blanche : que choisir ?",
        a: "La boîte noire simule un attaquant externe. La boîte grise part d'un accès limité : souvent le scénario le plus réaliste. La boîte blanche donne un accès complet et la meilleure couverture pour un budget donné.",
      },
      {
        q: "Red Team et pentest, c'est la même chose ?",
        a: "Non. Le pentest identifie un maximum de vulnérabilités sur un périmètre défini. La Red Team poursuit un objectif précis, sans prévenir les équipes de détection.",
      },
      {
        q: "Un test d'intrusion peut-il casser ma production ?",
        a: "Le périmètre, les horaires, les techniques autorisées et les points de contact sont définis avec vous avant de commencer. Rien n'est lancé sans validation.",
      },
      {
        q: "Combien coûte un test d'intrusion ?",
        a: "Le prix dépend du périmètre (application web, infrastructure interne, cloud, mobile), du niveau d'information fourni (boîte noire, grise ou blanche) et du nombre de jours nécessaires. Un test applicatif ciblé se chiffre en quelques jours d'intervention, un test d'infrastructure complète demande davantage. Nous cadrons le périmètre avant de chiffrer, pour éviter de vous faire payer une couverture inutile.",
      },
      {
        q: "Combien de temps dure un test d'intrusion ?",
        a: "En général de 3 à 10 jours d'intervention selon le périmètre, plus quelques jours de rédaction du rapport. Un point d'avancement est fait pendant le test si une faille critique est découverte : vous n'attendez pas le rapport final pour corriger l'urgent.",
      },
      {
        q: "À quelle fréquence faut-il refaire un test d'intrusion ?",
        a: "Au minimum une fois par an, et systématiquement après une évolution significative : nouvelle application exposée, refonte d'architecture, migration cloud ou ouverture d'un accès partenaire. Un test vaut pour un instant T : c'est le rythme, plus que le test isolé, qui fait progresser le niveau de sécurité.",
      },
    ],
  },
  {
    title: "GRC : Gouvernance, Risque, Conformité",
    items: [
      {
        q: "C'est quoi la GRC, en une phrase ?",
        a: "La GRC regroupe trois activités liées : définir les règles de sécurité de votre organisation (Gouvernance), identifier et prioriser ce qui pourrait mal tourner (Risque), et respecter, en le démontrant si besoin, les obligations légales qui s'appliquent à vous (Conformité).",
      },
      {
        q: "C'est quoi le ReCyF ?",
        a: "Le Référentiel Cyber France, publié par l'ANSSI en mars 2026. Il traduit les obligations NIS2 en 20 objectifs de sécurité concrets et 152 mesures de conformité. Il n'est pas encore juridiquement contraignant, mais il constitue déjà la référence à suivre pour anticiper la mise en conformité.",
      },
      {
        q: "Ma certification ISO 27001:2013 est-elle encore valable ?",
        a: "Non. Le délai de transition vers la version 2022 a expiré le 31 octobre 2025. Toute certification, nouvelle ou renouvelée, doit désormais se faire sur la base de la version 2022, dont l'Annexe A a été restructurée.",
      },
      {
        q: "On n'a pas de RSSI en interne, est-ce bloquant pour avancer sur la GRC ?",
        a: "Non. C'est même une situation fréquente. Voir notre page Conseil IT Stratégique pour le format d'accompagnement (RSSI externalisé ou conseil ponctuel) qui porte la mise en œuvre de ce qui est défini ici.",
      },
      {
        q: "Qui est concerné par NIS2 ?",
        a: "La directive NIS2 élargit fortement le périmètre de NIS1 : elle couvre 18 secteurs, dont l'énergie, la santé, les transports, l'eau, le numérique, la gestion des déchets, l'agroalimentaire et l'administration publique. En pratique, sont visées les entités moyennes (50 salariés ou 10 M€ de chiffre d'affaires) et grandes de ces secteurs, ainsi que leurs sous-traitants critiques. Beaucoup d'entreprises découvrent qu'elles sont concernées indirectement, par la chaîne d'approvisionnement de leurs clients.",
      },
      {
        q: "NIS2, c'est quoi concrètement ?",
        a: "NIS2 est une directive européenne de cybersécurité transposée en droit français. Elle impose aux entités concernées un socle de mesures de gestion des risques, une gouvernance impliquant la direction, la notification des incidents significatifs à l'ANSSI sous 24 heures puis 72 heures, et la sécurisation de la chaîne d'approvisionnement. En France, le Référentiel Cyber France (ReCyF) de l'ANSSI en détaille les objectifs et les mesures attendues.",
      },
      {
        q: "Combien de temps prend une certification ISO 27001 ?",
        a: "Comptez généralement 9 à 18 mois entre le lancement et l'audit de certification, selon la taille du périmètre et la maturité de départ. La durée dépend surtout du temps nécessaire à faire vivre le système de management : analyse de risques, politiques, preuves d'application, audit interne et revue de direction. Un pré-diagnostic permet d'estimer ce délai de façon réaliste avant de s'engager.",
      },
      {
        q: "Faut-il être certifié ISO 27001 pour être conforme NIS2 ?",
        a: "Non, la certification n'est pas exigée par NIS2. Mais un système de management de la sécurité aligné sur ISO 27001:2022 couvre une grande partie des attentes du ReCyF, ce qui évite de mener deux chantiers en parallèle. Beaucoup d'organisations utilisent ISO 27001 comme colonne vertébrale, puis complètent avec les exigences propres à NIS2, notamment la notification d'incidents.",
      },
    ],
  },
  {
    title: "Conseil IT Stratégique",
    items: [
      {
        q: "C'est quoi un RSSI, et pourquoi en aurais-je besoin ?",
        a: "Le RSSI (ou CISO) porte la stratégie de sécurité d'une organisation : règles, arbitrage des priorités, gestion des risques, réponse aux exigences réglementaires et aux questionnaires clients.",
      },
      {
        q: "C'est quoi le CISO as a Service ?",
        a: "Un RSSI externalisé, mobilisé quelques jours par mois selon vos besoins, plutôt qu'un recrutement à temps plein. Vous bénéficiez du même niveau d'expertise, avec un coût et un engagement proportionnés à votre taille. C'est devenu la norme pour beaucoup de PME et d'ETI soumises à des obligations croissantes.",
      },
      {
        q: "On est une petite structure, est-ce que c'est pour nous ?",
        a: "Souvent, oui, surtout depuis que vos clients ou votre assureur vous envoient des questionnaires de sécurité. La bonne nouvelle, c'est que le dispositif s'ajuste : une entreprise de 30 personnes n'a pas besoin du même niveau de formalisme qu'un groupe de 3 000. L'erreur classique est de vouloir appliquer les méthodes des grands comptes.",
      },
      {
        q: "Quelle différence avec un audit ?",
        a: "Un audit donne une photo à un instant T. Le conseil stratégique accompagne dans la durée : il part de cette photo pour construire et piloter un plan. Les deux se combinent bien, l'audit ou le test d'intrusion fournit le diagnostic, le conseil pilote le traitement.",
      },
      {
        q: "Vous intervenez sur les outils que vous vendez par ailleurs ?",
        a: "On est transparents là-dessus : nous déployons et opérons certaines solutions via notre offre de sécurité managée, ce qui nous donne une connaissance concrète du terrain. Si la meilleure réponse à votre besoin est une solution que nous n'opérons pas, on vous le dit.",
      },
      {
        q: "Combien coûte un RSSI externalisé ?",
        a: "Le coût dépend du nombre de jours mobilisés par mois, ce qui dépend lui-même de votre taille, de vos obligations réglementaires et de la maturité de départ. Beaucoup d'organisations démarrent sur un rythme léger de quelques jours par mois, puis ajustent. L'intérêt du format est justement de payer un niveau d'expertise senior sans porter un salaire à temps plein.",
      },
      {
        q: "Le RSSI externalisé peut-il porter notre conformité NIS2 ou ISO 27001 ?",
        a: "Oui, c'est un des cas d'usage les plus fréquents : le RSSI externalisé pilote la mise en conformité, arbitre les priorités, prépare les instances de gouvernance et fait le lien avec les auditeurs et vos clients. Le travail de fond sur les référentiels est mené avec notre pôle Gouvernance, Risque et Conformité.",
      },
    ],
  },
];
