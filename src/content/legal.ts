import { createLocaleContent } from "@/lib/i18n";
import { address } from "./legal-address";
import * as en from "./legal.en";

export type LegalSection = { heading: string; paragraphs: string[] };

const identity = `SurcingIT, Société par actions simplifiée unipersonnelle, au capital social de 1 000 euros, dont le siège social est sis ${address}`;

export const legalNotice = {
  title: "Mentions légales",
  intro:
    "Identification de l'éditeur du site, de son responsable de publication et de son hébergeur.",
  sections: [
    { heading: "Généralités", paragraphs: [identity] },
    {
      heading: "Édition du site",
      paragraphs: [`Le site est édité par ${identity}`],
    },
    {
      heading: "Responsable de la publication",
      paragraphs: ["Julien SURCIN, Président de SurcingIT."],
    },
    {
      heading: "Hébergeur web",
      paragraphs: [
        "Le site est hébergé par la société Vercel Inc., société de droit américain (Delaware), dont le siège social est situé 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Site web : vercel.com",
      ],
    },
    {
      heading: "Droits de propriété",
      paragraphs: [
        "Tous les textes, illustrations et images présents sur le site sont soumis au titre du droit d'auteur ainsi qu'au titre de la propriété intellectuelle. Il est interdit de copier, reproduire, diffuser, vendre, publier, exploiter et diffuser les informations présentes sur le site. Toute représentation, reproduction, ou démarquage, total ou partiel, fait sans le consentement de l'auteur, ou de ses ayants droit, ou de ses ayants cause est illicite. Il en est de même pour la traduction, l'adaptation, l'arrangement par quelque procédé que ce soit (Loi 57298 du 11 mars 1957).",
      ],
    },
    {
      heading: "Modifications",
      paragraphs: [
        "Les informations publiées en ligne font l'objet de mises à jour régulières et sont sujettes à des modifications à tout moment, sans que la responsabilité de SurcingIT puisse être engagée de ce fait, cette dernière pouvant apporter à tout moment des améliorations et/ou changements aux services décrits sur ce site. L'utilisateur est conscient de cette dynamique et est tenu de vérifier les informations qu'il consulte.",
      ],
    },
    {
      heading: "Données personnelles",
      paragraphs: [
        "Aucune donnée personnelle n'est collectée directement par ce site. Voir notre politique de confidentialité pour le détail des flux de données existants (polices tierces, contact par email).",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "Pour toute question relative au site ou à ses services, vous pouvez nous contacter à l'adresse : contact@surcingit.fr.",
      ],
    },
  ] satisfies LegalSection[],
};

export const privacyPolicy = {
  title: "Politique de confidentialité",
  intro:
    "Ce site est une vitrine statique : aucune collecte de données, aucun cookie, aucune mesure d'audience.",
  sections: [
    {
      heading: "Éditeur",
      paragraphs: [
        "Cette politique s'applique au site surcingit.fr, édité par SurcingIT (voir les mentions légales pour l'identification complète de l'éditeur et de l'hébergeur).",
      ],
    },
    {
      heading: "Aucune collecte par le site lui-même",
      paragraphs: [
        "Ce site est une simple vitrine statique : il ne contient aucun formulaire, aucun compte utilisateur, aucun cookie et aucun outil de mesure d'audience (pas de Google Analytics ni équivalent). Aucune donnée personnelle n'est stockée sur nos serveurs ni transmise à un service d'analyse.",
      ],
    },
    {
      heading: "Prise de contact par email",
      paragraphs: [
        "Le bouton « contact@surcingit.fr » ouvre directement votre client de messagerie habituel (« mailto: ») : il ne transite à aucun moment par notre site ou nos serveurs. Le contenu que vous nous envoyez par email (nom, adresse email, contenu du message) est traité directement dans notre messagerie professionnelle, dans le seul but de répondre à votre demande. Cette correspondance est conservée le temps nécessaire au traitement de l'échange, puis archivée ou supprimée selon nos obligations légales de conservation.",
      ],
    },
    {
      heading: "Police de caractères (Google Fonts)",
      paragraphs: [
        "Les polices Inter et JetBrains Mono utilisées sur ce site sont actuellement chargées depuis les serveurs de Google (fonts.googleapis.com et fonts.gstatic.com). Ce chargement transmet à Google des informations techniques standard de toute requête web (adresse IP, user-agent) ; Google agit ici en tant que sous-traitant technique. Consultez la politique de confidentialité de Google pour plus de détails.",
      ],
    },
    {
      heading: "Vos droits",
      paragraphs: [
        "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur les données vous concernant que nous détiendrions (par exemple issues d'un échange par email). Pour exercer ces droits, contactez-nous à contact@surcingit.fr.",
      ],
    },
    {
      heading: "Modifications",
      paragraphs: [
        "Cette politique peut évoluer si le site ajoute de nouveaux outils (formulaire, mesure d'audience, etc.). La version en ligne sur cette page fait foi.",
      ],
    },
  ] satisfies LegalSection[],
};

export const useLegalContent = createLocaleContent(
  { legalNotice, privacyPolicy },
  en,
);
