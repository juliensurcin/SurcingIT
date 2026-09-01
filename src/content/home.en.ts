export const hero = {
  title: "A hybrid services company, built on real-world delivery",
  body: "SurcingIT is an IT services company with strong cybersecurity expertise, placing its consultants within its clients' teams. Beyond securing your systems, we vet our consultants and support them at every stage of their career.",
  ctaPrimary: "Book a meeting",
  ctaSecondary: "Our services",
  noAvailability: "No availability right away? Write to us directly at",
};

/** Three facts under the hero: short, checkable, no marketing adjectives. */
export const heroFacts = [
  {
    value: "2 disciplines",
    label: "Cybersecurity and IT sourcing under one roof",
  },
  { value: "48 h", label: "Response time on any inbound request" },
  {
    value: "100%",
    label: "Of profiles technically vetted before being presented",
  },
];

/** Hover panel under the "Services" nav trigger. */
export const navServices = [
  {
    title: "IT Sourcing & Recruitment",
    tagline: "Tech profiles vetted by engineers",
    href: "/sourcing-recrutement-it",
    children: [] as { title: string; tagline: string; href: string }[],
  },
  {
    title: "Cybersecurity",
    tagline: "Protection, testing and compliance",
    href: "/cybersecurite",
    children: [
      {
        title: "Our cyber expertise",
        tagline: "Overview of all three areas of expertise",
        href: "/cybersecurite",
      },
      {
        title: "Managed Detection & Protection",
        tagline: "Continuous protection (SIEM, EPP, EDR, XDR, MDR, SOC)",
        href: "/cybersecurite/securite-managee",
      },
      {
        title: "Pentest & Audit",
        tagline: "Point-in-time testing (pentest, Red Team, audits)",
        href: "/cybersecurite/test-intrusion-audit",
      },
      {
        title: "Governance, Risk & Advisory",
        tagline:
          "GRC and strategic oversight combined (NIS2, ISO 27001, GDPR, CISO as a Service)",
        href: "/cybersecurite/gouvernance-conseil",
      },
    ],
  },
];

export const servicesIntro = {
  eyebrow: "Client services",
  title: "Expertise at the service of your projects",
  subtitle:
    "Cyber and IT advisory delivered by pre-vetted engineers, technically and personally.",
};

export const services = [
  {
    index: "01",
    href: "/sourcing-recrutement-it",
    title: "IT Sourcing & Recruitment",
    description:
      "Identifying and vetting tech profiles across the full spectrum (Dev, Cloud, Data, Ops, Cyber). Every candidate is technically validated by our engineers and assessed on personality, autonomy and fit for the role.",
    tags: ["Staff augmentation", "Recruitment agency", "Try-before-you-hire"],
  },
  {
    index: "02",
    href: "/cybersecurite",
    title: "Cybersecurity Practice",
    description:
      "We cover the full security lifecycle: managed protection for endpoints and infrastructure, penetration testing, technical audits, security governance, NIS2 / ISO 27001 / GDPR compliance, and SOC support. Our cyber consultants are certified and work on critical engagements.",
    tags: [
      "Managed Detection & Protection",
      "Pentest & Audit",
      "Governance, Risk & Advisory",
    ],
  },
  {
    index: "03",
    href: "/cybersecurite/gouvernance-conseil",
    title: "Governance, Risk & Advisory",
    description:
      "GRC and strategic oversight combined: NIS2, ISO 27001, GDPR, and an outsourced CISO available as CISO as a Service or on a one-off advisory basis.",
    tags: ["CISO as a Service", "NIS2", "ISO 27001", "GDPR"],
  },
];

export const whyUs = {
  title: "Why SurcingIT",
  columns: [
    {
      label: "For our clients",
      accent: "primary" as const,
      points: [
        "Profiles technically pre-vetted by senior engineers",
        "Native cyber expertise to secure your critical projects",
        "Consultant stability thanks to our active HR support",
        "One single point of contact, guaranteed responsiveness",
      ],
    },
    {
      label: "For our consultants",
      accent: "consultant" as const,
      points: [
        "Freedom of employment status (permanent, freelance, umbrella) with client agreement",
        "Financial optimisation and compensation advice",
        "Administrative support & help setting up a company",
        "Ongoing coaching and personalised career follow-up",
      ],
    },
  ],
};

export const consultantCare = {
  eyebrow: "Consultant Care",
  title: "Our consultants, our priority",
  subtitle:
    "Because a project's success depends on the expert's fulfilment, SurcingIT offers its talent a complete support ecosystem.",
  cta: "Write to us",
  cards: [
    {
      title: "Compensation engineering",
      description:
        "We advise our consultants on the optimal structure of their income: salary, dividends and the legal form best suited to their activity.",
    },
    {
      title: "Contractual flexibility",
      description:
        "Permanent contract, pure freelance or umbrella employment: we offer the model that fits each need, combining independence with social protection.",
    },
    {
      title: "Entrepreneurial support",
      description:
        "A dedicated service centre helps consultants set up their own company: choice of legal status, bookkeeping, legal advice.",
    },
    {
      title: "Career progression",
      description:
        "Individual coaching and ongoing personalised follow-up, whether the consultant is an employee or independent. Skills growth, certifications, market positioning.",
    },
  ],
};

export const about = {
  eyebrow: "Our DNA",
  title: "People at the centre of every engagement",
  paragraphs: [
    "Founded by cybersecurity and IT advisory practitioners, SurcingIT embodies a different vision of an IT services firm: pairing the technical rigour of a cyber practice with genuine, human support.",
    "Every consultant we place is selected on technical skills, interpersonal qualities, and the ability to fit into your context. No CVs sent at random, only profiles vetted by engineers.",
  ],
  pillars: [
    {
      title: "Rigorous selection",
      description:
        "Every candidate is assessed on 3 dimensions: technical skills, soft skills and fit for the role.",
    },
    {
      title: "Certified cyber expertise",
      description:
        "OSCP-certified pentesters, ISO 27001 auditors, cloud architects: our experts have hands-on experience.",
    },
    {
      title: "Active support",
      description:
        "No CVs sent at random. Mission follow-up, coaching and career progression built in.",
    },
  ],
};

export const contact = {
  eyebrow: "Contact",
  title: "Book a meeting",
  body: "A question, a project, a cyber recruitment need? Write to us directly.",
  cta: "Book a meeting",
};
