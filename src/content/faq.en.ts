import type { FaqCategory } from "./faq";

export const faqPage = {
  title: "Frequently asked questions",
  intro: "The questions we're asked most often, sorted by area of expertise.",
  categoriesLabel: "Categories",
  mailtoSubject: "Question",
  closingTitle: "A question we haven't covered here?",
  closingBody: "Write to us directly, we'll answer you in person.",
  closingCta: "Contact us",
};

export const faqCategories: FaqCategory[] = [
  {
    title: "IT Sourcing & Recruitment",
    items: [
      {
        q: "What's the difference between a recruitment agency and staff augmentation?",
        a: "With a recruitment agency, you hire the person directly: they join your headcount. With staff augmentation, the consultant works on your project but remains employed by SurcingIT.",
      },
      {
        q: "What exactly is try-before-you-hire?",
        a: "A hybrid format: the consultant starts on staff augmentation at your company, and you can bring them on board internally afterwards, with no non-compete clause or conversion penalty.",
      },
      {
        q: "What are your consultants tested on?",
        a: "On three dimensions: technical skills (interview led by an engineer from the relevant field), interpersonal qualities and autonomy, and fit with the client's specific context.",
      },
      {
        q: "Which profiles do you work with?",
        a: "The full technical spectrum: development, Cloud, Data, Ops and Cybersecurity, with particular depth in cybersecurity profiles.",
      },
      {
        q: "I'm a consultant: do I have to choose between a permanent contract and freelancing?",
        a: "No. We offer three formats: permanent contract, freelance and umbrella employment, subject to client agreement, and we advise you on the format best suited to your personal situation.",
      },
      {
        q: "What's the turnaround time to receive profiles?",
        a: "The first qualified profiles are presented within a few business days for most technical needs, since technical vetting is done in-house by our engineers. For rare expertise, particularly in cybersecurity, allow more time: we'd rather give you a realistic timeline than send you unfiltered CVs.",
      },
      {
        q: "How does billing work for IT recruitment?",
        a: "With a recruitment agency, our fee is due at the time of hire, with a guarantee period. With staff augmentation, billing is a daily rate on days actually worked. With try-before-you-hire, you move from one to the other with no conversion penalty. Terms are set out clearly before we start.",
      },
    ],
  },
  {
    title: "Cybersecurity",
    items: [
      {
        q: "What's the difference between managed security and penetration testing?",
        a: "Managed security is a continuous service: it monitors and protects your information system at all times. A penetration test is point-in-time: it assesses, at a given moment, how well your defences hold up against a simulated attack. The two are complementary: one protects day to day, the other verifies that the protection actually holds.",
      },
      {
        q: "Do I need all three (managed security, testing, governance)?",
        a: "Not necessarily all at once. Many of our clients start with a single pillar based on their current priority, often managed security or an initial audit, then expand gradually. We help you identify where to start based on your context.",
      },
      {
        q: "What's a cybersecurity audit for?",
        a: "A cybersecurity audit measures the gap between your actual security level and the expected level, whether defined by a framework (ISO 27001, ReCyF/NIS2) or by your own risk exposure. It produces a documented assessment, a list of vulnerabilities and organisational weaknesses, and a prioritised action plan. It's the most common starting point when you don't yet know where to invest.",
      },
      {
        q: "How much does cybersecurity cost for an SME?",
        a: "There's no single price: the cost depends on the number of endpoints and servers to protect, the level of monitoring chosen (EDR, XDR, SOC or MDR) and the governance support involved. We always build a proposal sized to your actual perimeter, separating what's urgent from what can wait for the next review cycle.",
      },
    ],
  },
  {
    title: "Managed Detection & Protection",
    items: [
      {
        q: "How does an EDR work?",
        a: "Software installed on your endpoints and servers that continuously monitors what happens on them. Unlike a classic antivirus, EDR detects abnormal behaviour and lets you reconstruct the full history of an attack after the fact.",
      },
      {
        q: "What's the difference between EDR and XDR?",
        a: "EDR only monitors endpoints and servers. XDR extends monitoring to mail, network, cloud and identities, then correlates all these signals together.",
      },
      {
        q: "Are MDR and SOC the same thing?",
        a: "Not quite. A SOC is a monitoring centre (in-house or outsourced). MDR is a packaged service where a provider supplies both the tools and the team that operates them.",
      },
      {
        q: "We already have an antivirus, isn't that enough?",
        a: "An antivirus blocks catalogued threats. But current attacks often use legitimate tools turned against you, or code never seen before, exactly the gap EDR fills.",
      },
      {
        q: "Can our data stay in Europe?",
        a: "Yes, hosting within Europe is possible on request, important for your GDPR compliance and contractual obligations.",
      },
      {
        q: "What's a managed SOC?",
        a: "A managed SOC is a security monitoring centre operated by a provider: log collection and correlation (SIEM), attack signal detection, alert triage, and alerting your teams with the actions to take. You get continuous monitoring without recruiting, training and maintaining an in-house analyst team.",
      },
      {
        q: "What's a SIEM for?",
        a: "A SIEM centralises the logs from your equipment, servers, applications and cloud services, then correlates them to surface suspicious scenarios that no single source would reveal on its own. It's also the component that lets you precisely reconstruct how an incident unfolded after the fact, and preserve usable evidence.",
      },
      {
        q: "MDR: what exactly does it cover?",
        a: "MDR (Managed Detection and Response) combines detection tools, the analyst team operating them 24/7, and response capability: isolating a compromised endpoint, blocking an account, stopping a malicious process. The difference from simple monitoring is that we don't just alert you, we act within the perimeter agreed with you.",
      },
    ],
  },
  {
    title: "Pentest & Audit",
    items: [
      {
        q: "What's a penetration test?",
        a: "A deliberate attack on your information system, with your written authorisation and within a defined scope, to identify genuinely exploitable flaws by chaining vulnerabilities the way a real attacker would.",
      },
      {
        q: "What's the difference between an audit and a penetration test?",
        a: 'A penetration test answers "what can be done to me today?". An audit answers "what\'s poorly designed or misconfigured in my setup?".',
      },
      {
        q: "Black box, grey box or white box: which to choose?",
        a: "Black box simulates an external attacker. Grey box starts from limited access: often the most realistic scenario. White box gives full access and the best coverage for a given budget.",
      },
      {
        q: "Are Red Team and pentest the same thing?",
        a: "No. A pentest identifies as many vulnerabilities as possible within a defined perimeter. A Red Team pursues a specific objective, without warning the detection teams.",
      },
      {
        q: "Can a penetration test break my production environment?",
        a: "The scope, hours, authorised techniques and points of contact are all defined with you before we start. Nothing is launched without sign-off.",
      },
      {
        q: "How much does a penetration test cost?",
        a: "The price depends on the perimeter (web application, internal infrastructure, cloud, mobile), the level of information provided (black, grey or white box) and the number of days required. A targeted application test runs to a few days of work; a full infrastructure test requires more. We scope the perimeter before quoting, to avoid charging you for coverage you don't need.",
      },
      {
        q: "How long does a penetration test take?",
        a: "Generally 3 to 10 days of work depending on the perimeter, plus a few days to write the report. A progress update is given during the test if a critical flaw is found: you don't wait for the final report to fix what's urgent.",
      },
      {
        q: "How often should a penetration test be redone?",
        a: "At least once a year, and systematically after a significant change: a newly exposed application, an architecture overhaul, a cloud migration, or opening a partner access. A test is a snapshot of a single point in time: it's the cadence, more than any single test, that raises your security level.",
      },
    ],
  },
  {
    title: "Governance, Risk & Advisory",
    items: [
      {
        q: "What's GRC, in one sentence?",
        a: "GRC brings together three related activities: defining your organisation's security rules (Governance), identifying and prioritising what could go wrong (Risk), and meeting, and demonstrating if needed, the legal obligations that apply to you (Compliance).",
      },
      {
        q: "What's ReCyF?",
        a: "The Référentiel Cyber France, published by ANSSI in March 2026. It translates NIS2 obligations into 20 concrete security objectives and 152 compliance measures. It's not yet legally binding, but it's already the reference to follow to anticipate compliance.",
      },
      {
        q: "Is our ISO 27001:2013 certification still valid?",
        a: "No. The transition period to the 2022 version expired on 31 October 2025. Any certification, new or renewed, must now be based on the 2022 version, whose Annex A has been restructured.",
      },
      {
        q: "Who's affected by NIS2?",
        a: "The NIS2 directive significantly widens NIS1's scope: it covers 18 sectors, including energy, healthcare, transport, water, digital infrastructure, waste management, food production and public administration. In practice, it targets medium-sized entities (50 employees or €10M turnover) and large entities in these sectors, as well as their critical subcontractors. Many companies discover they're affected indirectly, through their clients' supply chains.",
      },
      {
        q: "What does NIS2 actually mean in practice?",
        a: "NIS2 is a European cybersecurity directive transposed into French law. It requires affected entities to implement a baseline of risk management measures, governance involving leadership, notification of significant incidents to ANSSI within 24 then 72 hours, and supply-chain security. In France, ANSSI's Référentiel Cyber France (ReCyF) details the expected objectives and measures.",
      },
      {
        q: "How long does ISO 27001 certification take?",
        a: "Generally 9 to 18 months between kick-off and the certification audit, depending on the size of the perimeter and starting maturity. The duration mainly depends on the time needed to actually operate the management system: risk analysis, policies, evidence of application, internal audit and management review. A pre-assessment lets you estimate this timeline realistically before committing.",
      },
      {
        q: "Do I need ISO 27001 certification to be NIS2 compliant?",
        a: "No, certification isn't required by NIS2. But a security management system aligned with ISO 27001:2022 covers a large share of ReCyF's expectations, avoiding two parallel projects. Many organisations use ISO 27001 as their backbone, then add NIS2-specific requirements on top, notably incident notification.",
      },
      {
        q: "We don't have an in-house CISO, does that block us from moving forward on GRC?",
        a: "No. It's actually a common situation: it's precisely the role of CISO as a Service or one-off advisory, which carry out the implementation of what's defined here.",
      },
      {
        q: "What's a CISO, and why would I need one?",
        a: "The CISO drives an organisation's security strategy: rules, priority arbitration, risk management, and responding to regulatory requirements and client questionnaires.",
      },
      {
        q: "What's CISO as a Service?",
        a: "An outsourced CISO, engaged a few days a month based on your needs, rather than a full-time hire. You get the same level of expertise, with a cost and commitment proportionate to your size. It's become the norm for many SMEs and mid-sized companies facing growing obligations.",
      },
      {
        q: "We're a small organisation, is this for us?",
        a: "Often, yes, especially now that your clients or insurer are sending you security questionnaires. The good news is the setup scales: a 30-person company doesn't need the same level of formality as a 3,000-person group. The classic mistake is trying to apply large-company methods.",
      },
      {
        q: "What's the difference with an audit?",
        a: "An audit gives a snapshot at a given moment. Strategic advisory supports you over time: it starts from that snapshot to build and steer a plan. The two combine well, the audit or penetration test provides the diagnosis, advisory drives the treatment.",
      },
      {
        q: "Do you work on the tools you also sell?",
        a: "We're transparent about this: we deploy and operate certain solutions through our managed security offering, which gives us hands-on knowledge of the field. If the best answer to your need is a solution we don't operate, we'll tell you.",
      },
      {
        q: "How much does an outsourced CISO cost?",
        a: "The cost depends on the number of days engaged per month, which itself depends on your size, regulatory obligations and starting maturity. Many organisations start at a light pace of a few days a month, then adjust. The point of the format is precisely to pay for senior-level expertise without carrying a full-time salary.",
      },
      {
        q: "Can an outsourced CISO drive our NIS2 or ISO 27001 compliance?",
        a: "Yes, it's one of the most common use cases: the outsourced CISO drives compliance efforts, arbitrates priorities, prepares governance instances and liaises with auditors and your clients. The underlying framework work is carried out with our Governance, Risk & Advisory practice.",
      },
    ],
  },
];
