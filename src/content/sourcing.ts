import { createLocaleContent } from "@/lib/i18n";
import * as en from "./sourcing.en";

export const sourcingHero = {
  eyebrow: "Sourcing & Recrutement IT",
  titleLead: "Recrutement IT :",
  titleAccent: "des profils validés par des ingénieurs,",
  titleTail: "pas par des mots-clés",
  paragraphs: [
    "Avez-vous déjà trié dix CV pour n'en garder aucun ? Ou reçu des CV de recruteurs qui vous envoient tout ce qu'ils trouvent, en espérant que ça colle ?",
    "Chez SurcingIT, aucun profil ne part chez un client sans être passé devant un de nos ingénieurs. Pas un recruteur qui coche des cases sur une fiche de poste, un ingénieur qui parle le même langage que le candidat, et qui sait faire la différence entre quelqu'un qui a mis une compétence sur son CV et quelqu'un qui l'a vraiment pratiquée.",
    "On ne vous envoie pas des CV en masse, on vous envoie des CV qui répondent à vos besoins précis.",
  ],
  cta: "Parlons de votre besoin",
};

export const processSection = {
  eyebrow: "Méthode",
  title: "Notre processus, étape par étape",
  subtitle:
    "Cinq étapes. Pas une de plus, pas une de moins. Vous savez à tout moment où on en est.",
  steps: [
    {
      title: "Sourcing et prise de contact",
      body: "On part de votre besoin réel, pas d'une fiche de poste recopiée : stack technique, contexte d'équipe, contraintes du poste. C'est ce qui nous permet d'anticiper les points de friction avant même de lancer la recherche. Nous mobilisons ensuite notre réseau et une démarche de sourcing actif pour identifier les bons profils et entrer en contact avec eux.",
    },
    {
      title: "Entretien technique avec un ingénieur",
      body: "Chaque candidat passe un entretien technique mené par un ingénieur du domaine concerné. L'évaluation porte sur la pratique réelle du candidat, pas sur son seul déclaratif. En parallèle, nous évaluons des critères qui n'apparaissent pas sur un CV : autonomie, qualité de communication, capacité d'intégration dans votre environnement de travail.",
    },
    {
      title: "Organisation de la rencontre",
      body: "Nous vous présentons une short-list des candidats que nous avons sélectionnés. Pour chaque profil : les raisons de sa sélection, ses compétences clés, ses axes de progression, et notre évaluation objective, y compris nos réserves éventuelles.",
    },
    {
      title: "Rencontre client",
      body: "Vous rencontrez le candidat dans le cadre d'un entretien que nous accompagnons à chaque étape : préparation du candidat en amont, cadrage des attentes réciproques, puis recueil des retours des deux côtés.",
    },
    {
      title: "Contrat et accompagnement",
      body: "Le contrat est établi selon le format le plus adapté à chaque situation : CDI, freelance ou portage salarial. Notre accompagnement ne s'arrête pas à la signature : le consultant bénéficie d'un suivi tout au long de la mission.",
    },
  ],
};

export const formulasSection = {
  eyebrow: "Modalités",
  title: "Trois façons de travailler ensemble",
  items: [
    {
      title: "Assistance technique",
      body: "Vous avez un projet, un pic de charge, une compétence qui vous manque pour six mois ou pour trois ans. Le consultant intervient chez vous sur la mission, sans passer sur votre masse salariale.",
      noteLabel: "Ce que ça vous apporte",
      note: "De la souplesse. Vous ajustez la présence et la disponibilité du consultant selon vos projets, sans les contraintes d'un recrutement définitif.",
    },
    {
      title: "Cabinet de recrutement",
      body: "Vous cherchez à recruter en interne, directement dans vos effectifs. On s'occupe du sourcing, de la qualification technique et de la présentation des candidats. Vous, vous rencontrez uniquement des profils qui tiennent la route et vous embauchez en direct.",
      noteLabel: "Ce que ça vous évite",
      note: "Les heures passées à trier des candidatures, les entretiens techniques qui mobilisent vos meilleurs ingénieurs, et le coût d'une erreur de recrutement.",
    },
    {
      title: "Pré-embauche",
      body: "Une formule hybride, souvent la plus pertinente. Le consultant démarre en assistance technique : vous travaillez ensemble en conditions réelles. Si la collaboration confirme l'adéquation, vous intégrez en interne, nous levons la clause de non-concurrence, sans pénalité de conversion.",
      noteLabel: "Pourquoi c'est intéressant",
      note: "Vous ne pariez pas sur un entretien d'une heure, vous décidez après plusieurs mois de collaboration réelle. Le consultant, lui, garde sa flexibilité au départ et gagne en stabilité ensuite.",
    },
  ],
};

export const consultantSide = {
  eyebrow: "Côté consultants",
  title: "On ne place pas des CV, on accompagne des carrières",
  intro:
    "La signature du contrat marque le début de notre accompagnement, pas sa fin. C'est à ce moment-là que le suivi de mission, le coaching et l'attention portée à chaque consultant prennent tout leur sens.",
  benefits: [
    {
      title: "Liberté du statut",
      body: "CDI, freelance ou portage salarial : sous réserve de l'accord du client, vous choisissez le format le plus adapté à votre situation.",
    },
    {
      title: "Optimisation financière",
      body: "Nous conseillons nos consultants sur la structuration de leurs revenus, salaire, dividendes, forme juridique, selon leur activité.",
    },
    {
      title: "Support administratif et création d'entreprise",
      body: "Nous accompagnons les consultants qui souhaitent créer leur structure dans le choix du statut, gestion comptable, conseils juridiques.",
    },
    {
      title: "Coaching et évolution de carrière",
      body: "Suivi individuel dans la durée, quel que soit le statut. Montée en compétences, certifications, positionnement sur le marché.",
    },
  ],
};

export const sourcingCta = {
  title: "Un poste à pourvoir, ou simplement une question ?",
  body: "Décrivez-nous votre besoin : nous vous répondrons avec franchise sur notre capacité à y répondre, y compris si ce n'est pas le cas.",
  cta: "Contactez-nous",
};

export const useSourcingContent = createLocaleContent(
  {
    sourcingHero,
    processSection,
    formulasSection,
    consultantSide,
    sourcingCta,
  },
  en,
);
