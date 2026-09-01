export const recyfIntro = {
  title: "EI or EE: your obligations aren't the same",
  body: "ReCyF distinguishes two NIS2 statuses: important entity (EI) and essential entity (EE). The first 15 security objectives apply to both statuses; the last 5, more demanding, apply only to essential entities. Select your status to see what applies to you.",
  note: "Within the 15 shared objectives, the level of requirement for certain measures also differs between EI and EE (ReCyF working draft 2.5, 17/03/2026): this view shows the objectives, not the measure-by-measure detail.",
  statusAriaLabel: "Your NIS2 status",
  applicableLabelPrefix: "applicable security objectives out of",
  eeOnlyLabel: "EE only",
  mailtoSubject: "ReCyF: my NIS2 status",
};

export type RecyfObjective = {
  number: number;
  title: string;
  eeOnly: boolean;
};

export const recyfPillars: { pillar: string; objectives: RecyfObjective[] }[] =
  [
    {
      pillar: "Governance",
      objectives: [
        {
          number: 1,
          title: "Information system inventory",
          eeOnly: false,
        },
        {
          number: 2,
          title: "Implementing a digital security governance framework",
          eeOnly: false,
        },
        { number: 3, title: "Ecosystem oversight", eeOnly: false },
        {
          number: 4,
          title: "Integrating digital security into HR management",
          eeOnly: false,
        },
        {
          number: 5,
          title: "Information system control",
          eeOnly: false,
        },
        {
          number: 16,
          title: "Implementing a risk-based approach",
          eeOnly: true,
        },
        {
          number: 17,
          title: "Information system security audit",
          eeOnly: true,
        },
      ],
    },
    {
      pillar: "Protection",
      objectives: [
        {
          number: 6,
          title: "Physical access control for premises",
          eeOnly: false,
        },
        {
          number: 7,
          title: "Securing information system architecture",
          eeOnly: false,
        },
        {
          number: 8,
          title: "Securing remote access to information systems",
          eeOnly: false,
        },
        {
          number: 9,
          title: "Protecting information systems against malicious code",
          eeOnly: false,
        },
        {
          number: 10,
          title: "Managing user identities and access to information systems",
          eeOnly: false,
        },
        {
          number: 11,
          title: "Information system administration control",
          eeOnly: false,
        },
        {
          number: 18,
          title: "Securing the configuration of information system resources",
          eeOnly: true,
        },
        {
          number: 19,
          title: "Administering information systems from dedicated resources",
          eeOnly: true,
        },
      ],
    },
    {
      pillar: "Defence",
      objectives: [
        {
          number: 12,
          title: "Identifying and responding to security incidents",
          eeOnly: false,
        },
        {
          number: 20,
          title: "Information system security monitoring",
          eeOnly: true,
        },
      ],
    },
    {
      pillar: "Resilience",
      objectives: [
        {
          number: 13,
          title: "Business continuity and recovery",
          eeOnly: false,
        },
        {
          number: 14,
          title: "Responding to cyber-origin crises",
          eeOnly: false,
        },
        {
          number: 15,
          title: "Exercises, tests and drills",
          eeOnly: false,
        },
      ],
    },
  ];

export const recyfCta = {
  cta: "Review my status",
};
