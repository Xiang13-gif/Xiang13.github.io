export type Experience = {
  period: string;
  company: string;
  title: string;
  domains: string[];
  summary: string;
  contributionFocus: string;
  responsibilities: string[];
  methods: string[];
  tools: string[];
};

export const experiences: Experience[] = [
  {
    period: "Apr 2023 - Present",
    company: "Hitachi eBworx",
    title: "Business Analyst",
    domains: ["Loan Origination", "Business Credit", "Retail Banking", "FX Dealing"],
    summary:
      "Support banking system enhancements from requirement clarification through testing, defect triage, production verification, and post-release follow-up.",
    contributionFocus:
      "Translate business change into observable system behavior and delivery evidence, while keeping decision ownership with the accountable business and control stakeholders.",
    responsibilities: [
      "Analyze and translate requirements across business, operations, and technology stakeholders for loan origination and business credit enhancements.",
      "Maintain requirement-to-test traceability and support integration testing, SIT, UAT, regression, and production verification across interconnected modules.",
      "Prepare reusable test assets, review UI and system behavior, and validate functional, interface, and backend outcomes with delivery teams.",
      "Facilitate defect triage and root-cause investigation using reproducible evidence, logs, business impact, and controlled retest scope.",
      "Support document-generation automation, field mapping, template validation, and output verification for operational documentation.",
      "Coordinate release readiness, post-release monitoring, issue follow-up, and stakeholder decisions without exposing internal bank information."
    ],
    methods: [
      "Requirement clarification, functional behavior, business rules, and acceptance criteria",
      "Impact and regression scoping across UI, workflow, data, document, interface, and backend behavior",
      "UAT planning, defect triage, evidence-based retest, release readiness, and post-release follow-up"
    ],
    tools: [
      "JIRA, Confluence, and HP ALM for traceability and delivery communication",
      "SQL, logs, data validation, and UI/service/backend reasoning for investigation",
      "Document-generation tooling for field mapping, template validation, and output checks"
    ]
  },
  {
    period: "Sep 2019 - Apr 2023",
    company: "Hitachi eBworx",
    title: "Associate Business Analyst",
    domains: ["Requirement Documentation", "UAT", "Defect Management", "Production Support"],
    summary:
      "Built a foundation in banking requirement documentation, test execution, defect control, audit evidence, and post-go-live support.",
    contributionFocus:
      "Turn requirements into structured test coverage and evidence that lets business, QA, and technology teams make clearer delivery and closure decisions.",
    responsibilities: [
      "Translated business requirements into functional specifications and testable behavior for SIT, UAT, and regression delivery.",
      "Prepared and maintained structured test cases, evidence templates, execution status, and end-to-end audit records.",
      "Coordinated defect ownership, business-impact clarification, retest evidence, closure decisions, and release-day verification.",
      "Used JIRA, Confluence, and HP ALM to manage requirements, test execution, defects, traceability, and delivery communication.",
      "Supported users after go-live by clarifying reported behavior, reproducing issues, and coordinating resolution within agreed service expectations."
    ],
    methods: [
      "Functional specification, test-case design, execution tracking, and audit-evidence management",
      "Positive, negative, regression, retest, and release-day verification",
      "Business-impact clarification, defect lifecycle control, and production-issue reproduction"
    ],
    tools: [
      "JIRA, Confluence, and HP ALM for requirements, testing, defects, and traceability",
      "Structured evidence templates, status reporting, and controlled release communication"
    ]
  }
];

export const resumeHighlights = [
  "Banking and financial-system delivery experience since 2019 across loan origination, business credit, retail banking, and FX dealing workflows.",
  "Requirements experience spanning stakeholder clarification, functional behavior, business rules, impact analysis, traceability, and acceptance criteria.",
  "Delivery assurance across integration testing, SIT, UAT, regression, defect triage, retesting, production verification, and post-release follow-up.",
  "Technical collaboration through SQL, log analysis, data validation, field mapping, UI/backend behavior, API awareness, and GitHub project execution.",
  "A contribution style that surfaces ambiguity, affected journeys, and decision ownership before build, test, or release sign-off."
];
