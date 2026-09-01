import { address } from "./legal-address";
import type { LegalSection } from "./legal";

const identity = `SurcingIT, a French single-shareholder simplified joint-stock company (SASU) with share capital of €1,000, whose registered office is located at ${address}`;

export const legalNotice = {
  title: "Legal notice",
  intro:
    "Identification of the site's publisher, publication director, and host.",
  sections: [
    { heading: "General information", paragraphs: [identity] },
    {
      heading: "Site publisher",
      paragraphs: [`This site is published by ${identity}`],
    },
    {
      heading: "Publication director",
      paragraphs: ["Julien SURCIN, President of SurcingIT."],
    },
    {
      heading: "Web host",
      paragraphs: [
        "This site is hosted by Vercel Inc., a company incorporated under the laws of Delaware, USA, whose registered office is located at 440 N Barranca Ave #4133, Covina, CA 91723, United States. Website: vercel.com",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "All text, illustrations and images on this site are protected under copyright and intellectual property law. It is prohibited to copy, reproduce, distribute, sell, publish, exploit or disseminate the information present on the site. Any full or partial representation, reproduction, or imitation without the author's consent, or that of their successors or assigns, is unlawful. The same applies to translation, adaptation, or arrangement by any process whatsoever (French law 57-298 of 11 March 1957).",
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        "Information published online is regularly updated and may be changed at any time, without SurcingIT's liability being engaged as a result; SurcingIT may make improvements and/or changes to the services described on this site at any time. Users are aware of this and are required to verify the information they consult.",
      ],
    },
    {
      heading: "Personal data",
      paragraphs: [
        "No personal data is collected directly by this site. See our privacy policy for details on existing data flows (third-party fonts, email contact).",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "For any question regarding the site or its services, you may contact us at: contact@surcingit.fr.",
      ],
    },
  ] satisfies LegalSection[],
};

export const privacyPolicy = {
  title: "Privacy policy",
  intro:
    "This site is a static showcase: no data collection, no cookies, no audience measurement.",
  sections: [
    {
      heading: "Publisher",
      paragraphs: [
        "This policy applies to the site surcingit.fr, published by SurcingIT (see the legal notice for full identification of the publisher and host).",
      ],
    },
    {
      heading: "No collection by the site itself",
      paragraphs: [
        "This site is a simple static showcase: it contains no forms, no user accounts, no cookies, and no audience measurement tool (no Google Analytics or equivalent). No personal data is stored on our servers or transmitted to an analytics service.",
      ],
    },
    {
      heading: "Getting in touch by email",
      paragraphs: [
        'The "contact@surcingit.fr" button opens your usual email client directly ("mailto:"): it never passes through our site or our servers at any point. The content you send us by email (name, email address, message content) is handled directly in our business mailbox, for the sole purpose of responding to your request. This correspondence is kept for as long as necessary to handle the exchange, then archived or deleted in line with our legal retention obligations.',
      ],
    },
    {
      heading: "Typefaces (Google Fonts)",
      paragraphs: [
        "The Inter and JetBrains Mono typefaces used on this site are currently loaded from Google's servers (fonts.googleapis.com and fonts.gstatic.com). This loading sends Google the standard technical information of any web request (IP address, user agent); Google acts here as a technical data processor. See Google's privacy policy for further details.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "In accordance with the General Data Protection Regulation (GDPR) and French data protection law, you have the right to access, rectify, erase and object to any data we may hold about you (for example, arising from an email exchange). To exercise these rights, contact us at contact@surcingit.fr.",
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        "This policy may evolve if the site adds new tools (forms, audience measurement, etc.). The version published on this page is the one that applies.",
      ],
    },
  ] satisfies LegalSection[],
};
