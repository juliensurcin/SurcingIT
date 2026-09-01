export const managedHero = {
  breadcrumb: "Managed Detection & Protection",
  eyebrow: "Cybersecurity Practice",
  titleLead: "Protection that covers",
  titleAccent: "mail, endpoints and network",
  pull: "Endpoint antivirus, a properly configured firewall: most companies have that. Few cover the whole chain, from the mailbox through to their teams' vigilance.",
  paragraphs: [
    'That\'s precisely what separates "equipped" from "protected". We cover every link — mail, endpoints and servers, monitoring, your teams — with solutions sized to your actual maturity level, not a vendor\'s standard catalogue.',
    "The goal: neutralise threats before they affect your business.",
  ],
  cta: "Review your protection level",
};

export const emailProtectionSection = {
  eyebrow: "Before EDR even comes in",
  title: "Mail, the number one entry point",
  intro:
    "Phishing remains the most-used attack vector (60% of attacks, per CESIN), and it keeps getting more sophisticated: over 40% of French companies received an AI-powered phishing attempt in the last six months, a 210% increase versus 2024 (ANSSI). Before talking about EDR or a SOC, we secure what lands in the inbox first.",
  sources: [
    {
      label: "Baromètre Cyber 2026 (CESIN)",
      href: "https://www.mailinblack.com/ressources/guides/barometre-cyber-2026/",
    },
    {
      label: "ANSSI report on AI-assisted phishing",
      href: "https://comprendre-ingenierie-sociale.fr/phishing-ia-le-danger-n1-pour-les-cyberattaquants-en-2026/",
    },
  ],
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
      title: "Anti-spam filtering",
      body: "Noise is eliminated before it reaches the inbox: mass campaigns, already-flagged senders, unwanted content.",
    },
    {
      title: "Behavioural anti-phishing",
      body: "Analysis of domain and link reputation and message tone, to catch targeted attempts — including AI-generated ones — that classic filters let through.",
    },
    {
      title: "Attachment sandboxing",
      body: "Every suspicious attachment is opened in an isolated environment before delivery, to observe its actual behaviour rather than trust its signature alone.",
    },
    {
      title: "SPF, DKIM, DMARC authentication",
      body: "Without these three protocols correctly configured, anyone can send an email that appears to come from your own domain. We verify the sender really is who they claim to be, not just the message content.",
    },
    {
      title: "Quarantine and reporting",
      body: "A suspicious email goes to quarantine instead of the inbox, and a staff member can report one with a single click: the monitoring team handles the report, not the other way round.",
    },
  ],
};

export const endpointProtectionSection = {
  eyebrow: "The second entry point",
  title: "The endpoint, right behind mail",
  intro:
    "Exploiting a vulnerability ranks second among significant attack vectors (41%), just behind phishing (55%), per the CESIN 2026 barometer. A poorly patched workstation or server remains an easier target to hit than to fix after the fact.",
  sources: [
    {
      label: "Baromètre CESIN 2026, attack vectors (informatiquenews.fr)",
      href: "https://www.informatiquenews.fr/barometre-cesin-2026-moins-dattaques-plus-dimpacts-109218",
    },
  ],
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
      title: "Asset inventory",
      body: "A device that isn't tracked is a device that isn't protected. We maintain an up-to-date map of endpoints, servers and connected devices on your network.",
    },
    {
      title: "Next-gen protection (EPP)",
      body: "A next-generation antivirus blocks known threats and generic malicious behaviour, without waiting for human intervention.",
    },
    {
      title: "Behavioural detection (EDR)",
      body: "Continuous monitoring of endpoints and servers to catch what EPP can't see: lateral movement, privilege escalation, mass encryption in progress.",
    },
    {
      title: "Patch management",
      body: "Already-known vulnerabilities remain the most common entry point. A managed update cycle shrinks the exposure window instead of leaving it open for months.",
    },
    {
      title: "Isolation and response",
      body: "A compromised endpoint is isolated from the network within minutes, while the incident is being assessed — not left connected for hours.",
    },
  ],
};

export const levelsSection = {
  eyebrow: "The levels, explained simply",
  title: "SIEM, EPP, EDR, XDR, MDR: what these acronyms actually mean",
  intro:
    "You'll inevitably hear about EPP, EDR, XDR, MDR and SIEM. These acronyms actually describe a fairly logical progression. Here's what they mean, without the sales jargon.",
  items: [
    {
      code: "SIEM",
      metaphor: "The central ledger",
      full: "Security Information and Event Management",
      body: "The foundation of it all. SIEM collects and centralises all the event logs of your information system — endpoints, servers, network, applications, cloud — in one place. It's the complete memory of what happens in your organisation, queryable and correlatable at any time: essential for investigating an incident, responding to an audit, or demonstrating regulatory compliance (NIS2, ISO 27001).",
      scope: "Logs, correlation, evidence",
      coverage: 24,
    },
    {
      code: "EPP",
      metaphor: "The reinforced door",
      full: "Endpoint Protection Platform",
      body: "The next-generation antivirus. It blocks what's known: viruses, catalogued ransomware, malicious files. It's the baseline, essential, but it only sees what it has already learned to recognise.",
      scope: "Endpoints, servers",
      coverage: 42,
    },
    {
      code: "EDR",
      metaphor: "The camera in the corridor",
      full: "Endpoint Detection and Response",
      body: "Where EPP blocks, EDR watches. It monitors behaviour on endpoints and servers: a process launching at an unusual time, an account accessing unusual files, mass encryption starting up. It detects even attacks never seen before, and lets you trace back what happened.",
      scope: "Behaviour, investigation",
      coverage: 62,
    },
    {
      code: "XDR",
      metaphor: "The whole house under watch",
      full: "Extended Detection and Response",
      body: "EDR only looks at endpoints. XDR extends to mail, network, cloud and identities — and, crucially, correlates these signals. A suspicious email in the morning, an unusual login in the afternoon, a data transfer in the evening.",
      scope: "Mail, network, cloud, identities",
      coverage: 82,
    },
    {
      code: "MDR",
      metaphor: "Someone behind the screen",
      full: "Managed Detection and Response",
      body: "The best tools in the world are useless if no one reads the alerts. MDR is the human service layered on top: a team that monitors, sorts real threats from false positives, and intervenes.",
      scope: "Human monitoring, response",
      coverage: 100,
    },
  ],
};

export const socSection = {
  eyebrow: "Monitoring",
  title: "A SOC, without building a SOC",
  paragraphs: [
    "Building your own security operations centre means 24/7 coverage, rotating teams, tooling, and a budget that shuts the door on most SMEs and mid-sized companies.",
    "We give you access to monitoring capability without the infrastructure. Detection, alert triage, incident response, and a point of contact who explains what happened in plain language, not log excerpts.",
  ],
  facts: [
    {
      value: "24/7",
      label: "Continuous monitoring, with no in-house team to recruit",
    },
    { value: "0", label: "Infrastructure to build on your side" },
    {
      value: "1",
      label: "Point of contact who explains the incident clearly",
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
  eyebrow: "Our partners and your constraints",
  title: "Solutions chosen for their relevance, not out of habit",
  body: "We work with several established vendors such as Trend Micro and Bitdefender, and many others. That means proven solutions and privileged support access for you. The choice of solution depends on your existing setup and maturity level, not our habits.",
  constraints: [
    {
      title: "Where is your data hosted?",
      body: "On request, data hosting can be guaranteed within Europe. This question comes up consistently, and rightly so: data location determines your GDPR compliance and, in some sectors, your very ability to contract.",
    },
    {
      title: "Sectors with strict constraints",
      body: "Healthcare, defence, regulated sectors: these environments impose specific requirements on hosting, access and traceability. We know how to work within these constraints and adapt the architecture accordingly, with accredited partners.",
    },
  ],
};

export const peopleSection = {
  eyebrow: "The link everyone forgets",
  title: "Your teams",
  paragraphs: [
    "You can stack up the best technology available. One click on the wrong link on a Tuesday morning bypasses all of it.",
    "Phishing remains an entry point, and it's not a tooling problem — it's a habit problem. We support your teams with simple solutions: phishing simulation campaigns, short training sessions, digestible content.",
    "No three-hour seminar everyone forgets the next day. Regular exercises, concrete reminders, and measurable progress with KPIs delivered to you.",
  ],
  demoLabel: "Demo: could you spot the clues?",
  demoHint: "Click the four flagged areas in this email.",
  clueAriaPrefix: "Clue:",
  cluesWord: "clues",
  cluesHint: "Select an underlined area in the email to see the explanation.",
  metricsHeading: "What we measure",
  email: {
    fromLabel: "From",
    toLabel: "To",
    attachmentLabel: "Attachment",
    from: "Accounts Team <billing@surcingit-uk.secure-billing.com>",
    to: "you@your-company.com",
    subject: "URGENT: unpaid invoice due before 5 PM",
    lines: [
      "Hello,",
      "Our department has identified an unpaid invoice on your account. Please check the attached document and confirm payment via the link below before 5 PM to avoid account suspension.",
    ],
    linkText: "Check and settle my invoice",
    attachment: "Invoice_2024_087.pdf.exe",
    signature: "Regards, Accounts Team",
  },
  clues: [
    {
      id: "sender",
      label: "The sender's address",
      title: "A domain impersonating the real one",
      body: "\"surcingit-uk.secure-billing.com\" isn't the company's domain: the real name is placed as a subdomain of a third-party domain. A simple habit: read the address from right to left.",
    },
    {
      id: "link",
      label: "The link",
      title: "The text doesn't match the destination",
      body: "The label is reassuring, but the real URL points elsewhere. Hovering over the link before clicking reveals the destination — and the displayed urgency exists precisely to prevent that habit.",
    },
    {
      id: "attachment",
      label: "The attachment",
      title: "A double extension",
      body: "\"Invoice_2024_087.pdf.exe\" isn't a PDF: it's a disguised executable. Any double extension on an attachment is an immediate red flag.",
    },
    {
      id: "subject",
      label: "The subject line",
      title: "Artificial urgency",
      body: 'A tight deadline ("before 5 PM") pushes people to act fast without checking: it\'s a classic phishing psychological lever, made even more effective when the message is written or polished by AI to look authentic.',
    },
  ],
  metrics: [
    {
      title: "Click-through rate",
      body: "The share of staff who click the simulated link or attachment, campaign after campaign.",
    },
    {
      title: "Reporting rate",
      body: "The share of staff who report the message instead of acting on it — the indicator that really matters over time.",
    },
    {
      title: "Reaction time",
      body: "The time elapsed between receipt and the first report, to measure whether the habit is taking hold.",
    },
  ],
};

export const managedCta = {
  title: "Let's review your protection level",
  body: "A short conversation is often enough to identify the most urgent priorities.",
  cta: "Contact us",
};
