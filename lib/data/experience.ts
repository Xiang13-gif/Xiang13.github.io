export type Experience = {
  period: string;
  company: string;
  title: string;
  domains: string[];
  summary: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    period: "Apr 2023 - Present",
    company: "Hitachi eBworx",
    title: "Business Analyst",
    domains: ["Loan Origination", "Business Credit", "Retail Banking", "FX Dealing"],
    summary:
      "Support banking system enhancements from requirement clarification through testing, defect triage, production verification, and post-release follow-up.",
    responsibilities: [
      "Analyze and translate requirements across business, operations, and technology stakeholders for loan origination and business credit enhancements.",
      "Maintain requirement-to-test traceability and support VSIT, SIT, UAT, regression, and production verification across interconnected modules.",
      "Prepare reusable test assets, review UI and system behavior, and validate functional, interface, and backend outcomes with delivery teams.",
      "Facilitate defect triage and root-cause investigation using reproducible evidence, logs, business impact, and controlled retest scope.",
      "Support document-generation automation, field mapping, template validation, and output verification for operational documentation.",
      "Coordinate release readiness, post-release monitoring, issue follow-up, and stakeholder decisions without exposing internal bank information."
    ]
  },
  {
    period: "Sep 2019 - Apr 2023",
    company: "Hitachi eBworx",
    title: "Associate Business Analyst",
    domains: ["Requirement Documentation", "UAT", "Defect Management", "Production Support"],
    summary:
      "Built a foundation in banking requirement documentation, test execution, defect control, audit evidence, and post-go-live support.",
    responsibilities: [
      "Translated business requirements into functional specifications and testable behavior for SIT, UAT, and regression delivery.",
      "Prepared and maintained structured test cases, evidence templates, execution status, and end-to-end audit records.",
      "Coordinated defect ownership, business-impact clarification, retest evidence, closure decisions, and release-day verification.",
      "Used JIRA, Confluence, and HP ALM to manage requirements, test execution, defects, traceability, and delivery communication.",
      "Supported users after go-live by clarifying reported behavior, reproducing issues, and coordinating resolution within agreed service expectations."
    ]
  }
];

export const resumeHighlights = [
  "6+ years supporting banking and financial-system change across loan origination, business credit, retail banking, and FX dealing workflows.",
  "Requirements experience spanning stakeholder clarification, functional behavior, business rules, impact analysis, traceability, and acceptance criteria.",
  "Delivery assurance across VSIT, SIT, UAT, regression, defect triage, retesting, production verification, and post-release follow-up.",
  "Technical collaboration through SQL, log analysis, data validation, UI/backend behavior, API awareness, and GitHub project execution."
];
