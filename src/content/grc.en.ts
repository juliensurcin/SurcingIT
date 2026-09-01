export const grcPillars = {
  eyebrow: "The fundamentals",
  title: "The three pillars of GRC, explained simply",
  items: [
    {
      letter: "G",
      title: "Governance",
      body: "The set of rules and responsibilities that frame your information system's security: who decides what, who is responsible in the event of an incident, what procedures exist. Without formalised governance, security decisions get made on the fly, usually under pressure.",
    },
    {
      letter: "R",
      title: "Risk",
      body: "Not every company faces the same threats, and not every company has the same resources. Risk management means identifying what could go wrong, assessing the likelihood and impact of each scenario, then prioritising actions accordingly, rather than treating every issue with the same urgency.",
    },
    {
      letter: "C",
      title: "Compliance",
      body: "Actually meeting the legal and regulatory obligations that apply to your business, and being able to demonstrate it in the event of an inspection, a client audit, or an insurance questionnaire.",
    },
  ],
};

export const nis2Section = {
  eyebrow: "Regulation",
  title: "NIS2: where things actually stand in 2026",
  paragraphs: [
    "NIS2 (Network and Information Security 2) is an EU directive that requires companies deemed important to the economy or society to meet a minimum cybersecurity baseline: protecting their systems, managing risk, being able to detect and report an incident, and verifying security at their suppliers. It succeeds an earlier directive (NIS1) whose scope was much narrower, and aims to raise the security level consistently across the European Union.",
    "In France, this directive is being transposed into national law via the Résilience bill. The text isn't yet definitively in force, but its scope is already largely known and stable, so there's no need to wait for final enactment to start preparing.",
  ],
  callout: {
    label: "ReCyF, your reference roadmap",
    body: "In March 2026, ANSSI (the French cybersecurity agency) published the Référentiel Cyber France (ReCyF): a document that translates NIS2 obligations into 20 concrete security objectives, backed by 152 acceptable compliance measures. It's not yet legally binding, but it's already the reference — aligning with it puts you in a favourable position for any future inspection.",
    stats: [
      { value: "20", label: "security objectives" },
      { value: "152", label: "compliance measures" },
    ],
    linkBody:
      "A self-assessment tool is available on ANSSI's MesServicesCyber platform to evaluate an initial level of compliance.",
    linkLabel: "MesServicesCyber (ANSSI)",
    linkHref: "https://www.monespacenis2.cyber.gouv.fr/",
  },
  role: "Our role: helping you determine whether you fall within NIS2's scope, then structuring a roadmap based on ReCyF rather than waiting for final enactment to start acting.",
};
