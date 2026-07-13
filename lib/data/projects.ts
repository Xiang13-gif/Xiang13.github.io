export type ProjectType = "Portfolio Project" | "Professional Experience";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  type: ProjectType;
  category: string;
  role: string;
  timeline: string;
  summary: string;
  problem: string;
  stakeholders: string[];
  scope: string[];
  outOfScope: string[];
  assumptions: string[];
  requirements: string[];
  businessRules: string[];
  edgeCases: string[];
  uatCoverage: string[];
  riskControls: string[];
  decisions: string[];
  tradeoffs: string[];
  technical: string[];
  outcome: string[];
  lessons: string[];
  future: string[];
  tags: string[];
  evidence: string[];
  disclaimer: string;
  image?: string;
  imageAlt?: string;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "creditflow-ba-toolkit",
    title: "CreditFlow BA Toolkit",
    subtitle: "A controlled commercial-credit change lifecycle from case intake to release evidence",
    type: "Portfolio Project",
    category: "Commercial Credit Transformation",
    role: "Portfolio author and Business Analyst",
    timeline: "Independent portfolio project - 2026",
    summary:
      "An interactive banking BA case that connects requirements, business rules, approval routing, document controls, UAT, defects, change impact, traceability, and release readiness.",
    problem:
      "Commercial credit change becomes risky when requirements, operational rules, approvals, test evidence, and release decisions are maintained in disconnected documents and trackers. The project demonstrates how a BA can connect those decisions without using confidential bank material.",
    stakeholders: [
      "Relationship Manager and Credit Analyst",
      "Credit Approver and Credit Administration",
      "Business Product Owner and Operations Lead",
      "Developers, QA, UAT users, and Release Steering Committee"
    ],
    scope: [
      "Commercial-credit case workflow and stage controls",
      "Document checklist, approval routing, and policy exceptions",
      "Requirement, rule, UAT, defect, CR, and release traceability",
      "Mock dashboards and evidence views for BA decision support"
    ],
    outOfScope: [
      "Real customer data, internal bank policy wording, or production integration",
      "Authentication, entitlement administration, payments, accounting, or live credit scoring",
      "Claims of production deployment or measured bank outcomes"
    ],
    assumptions: [
      "All data, names, thresholds, metrics, and workflows are illustrative.",
      "Rules are generalized from common commercial-credit operating patterns.",
      "Local browser state is sufficient for a public demonstration; no database is required."
    ],
    requirements: [
      "A case cannot advance when mandatory evidence or controlled approvals are incomplete.",
      "Every material rule or workflow change must identify affected roles, data, tests, and release gates.",
      "UAT failures and open defects must remain visible in the release recommendation.",
      "Decision views must preserve traceability back to requirements and evidence."
    ],
    businessRules: [
      "Missing mandatory documents block submission unless an approved waiver is present.",
      "Risk, exposure, collateral, and exception severity influence approval routing.",
      "Rule activation requires maker-checker approval and passed regression evidence.",
      "High-priority failed UAT or unresolved blocking defects produce a No-Go posture."
    ],
    edgeCases: [
      "A document is waived but the waiver has no reason or checker approval.",
      "A change request alters a rule while linked regression coverage is incomplete.",
      "A defect is fixed but has no retest evidence or accepted residual risk.",
      "A stage transition is requested by the wrong role or with missing tasks."
    ],
    uatCoverage: [
      "Positive, negative, boundary, role, and regression scenarios",
      "Requirement-to-test and defect-to-retest traceability",
      "Blocked-path validation for missing evidence and unauthorized transitions",
      "Release verification for gates, rollback triggers, and post-release monitoring"
    ],
    riskControls: [
      "Maker-checker segregation for waivers, rule changes, and sensitive decisions",
      "Audit evidence for state changes, approvals, overrides, and exports",
      "Explicit residual-risk acceptance before controlled release",
      "Mock-data disclaimer and confidentiality boundary on public surfaces"
    ],
    decisions: [
      "Designed one evidence chain across analysis and delivery instead of isolated mini-tools.",
      "Kept rules deterministic and explainable so expected behavior can be reviewed and tested.",
      "Used progressive detail: recruiter summary first, interactive modules and artefacts second."
    ],
    tradeoffs: [
      "Local persistence keeps the demo safe and deployable, but does not model multi-user concurrency.",
      "Generalized rules protect confidentiality, but should not be interpreted as any bank's policy.",
      "Broad lifecycle coverage demonstrates BA thinking, while production integrations remain intentionally out of scope."
    ],
    technical: [
      "Next.js, React, strict TypeScript, Tailwind CSS, Lucide, and Recharts",
      "Typed mock data, deterministic business-rule functions, and local browser state",
      "Vitest business-rule tests, Playwright workflow tests, static export, and GitHub Pages",
      "Supporting OpenAPI contract, SQL analysis, BA documents, and CI checks"
    ],
    outcome: [
      "Provides a live, inspectable demonstration of BA reasoning rather than a feature-only UI showcase.",
      "Connects requirement analysis, rules, UAT, defects, CR impact, controls, and release decisions.",
      "Creates concrete interview material without using confidential client artefacts."
    ],
    lessons: [
      "Case-study depth is more persuasive when every screen points back to a business decision.",
      "Control logic needs negative and blocked scenarios, not only a happy-path workflow.",
      "A public banking portfolio must state assumptions and evidence boundaries as clearly as features."
    ],
    future: [
      "Improve mobile table semantics and labelled controls across the deep workspace.",
      "Add a print-friendly one-page case summary after the core portfolio is launched.",
      "Keep database, login, CMS, and enterprise integrations out of the public MVP."
    ],
    tags: ["Credit Operations", "Requirements", "Business Rules", "UAT", "Traceability", "Risk & Control"],
    evidence: ["Live interactive workspace", "17 BA and governance documents", "Automated rules and workflow tests"],
    disclaimer:
      "Portfolio project built with mock data and generalized banking workflows. It is not connected to a real bank system and contains no confidential information.",
    image: "/projects/creditflow-workspace.png",
    imageAlt: "CreditFlow unified commercial-credit case workflow using mock data",
    github: "https://github.com/Xiang13-gif/business-credit-system-enhancement-case-study",
    live: "https://xiang13-gif.github.io/business-credit-system-enhancement-case-study/"
  },
  {
    slug: "loan-origination-enhancement-delivery",
    title: "Loan Origination Enhancement Delivery",
    subtitle: "An anonymized professional experience summary covering requirements, UAT, defects, and release support",
    type: "Professional Experience",
    category: "Loan Origination System",
    role: "Business Analyst",
    timeline: "Professional experience - details anonymized",
    summary:
      "A concise account of how I supported banking system change across business clarification, functional behavior, test coverage, cross-layer validation, and release follow-up.",
    problem:
      "Changes in a large loan-origination environment can affect multiple modules, roles, validations, documents, interfaces, and operating procedures. The BA challenge is to identify the real impact early and keep implementation and testing aligned.",
    stakeholders: ["Banking business and operations users", "Product and project leads", "Developers and vendors", "QA, UAT users, and release teams"],
    scope: [
      "Requirement analysis and functional clarification",
      "Impact assessment across UI, workflow, validation, and backend behavior",
      "Test planning, defect triage, retest, and production verification",
      "Stakeholder coordination and traceability through delivery"
    ],
    outOfScope: [
      "Client names, programme names, screenshots, requirement IDs, policy wording, and production data",
      "Claims of sole ownership for team delivery outcomes"
    ],
    assumptions: [
      "This case summarizes transferable working methods rather than one identifiable release.",
      "Examples are generalized to preserve client and employer confidentiality."
    ],
    requirements: [
      "Separate business objective, user action, system behavior, validation, and exception handling.",
      "Identify upstream and downstream impacts before confirming scope.",
      "Make acceptance criteria specific enough for development and independent testing."
    ],
    businessRules: [
      "Validation and routing behavior must be consistent across relevant roles and channels.",
      "Changed rules require regression coverage for existing journeys and products.",
      "Unclear or conflicting behavior returns to the decision owner before sign-off."
    ],
    edgeCases: [
      "The same field behaves differently by role, facility, or workflow state.",
      "A UI change leaves backend validation or document output unchanged.",
      "A production issue cannot be reproduced without the original data sequence."
    ],
    uatCoverage: [
      "Business scenarios with positive, negative, boundary, and permission checks",
      "Cross-layer validation covering functional, UI, and backend outcomes",
      "Defect severity, business impact, retest evidence, and regression scope",
      "Production smoke checks and monitored post-release follow-up"
    ],
    riskControls: [
      "Traceable requirement, test, defect, and decision evidence",
      "Explicit sign-off dependencies and unresolved-risk follow-up",
      "Controlled defect closure based on evidence, not status alone"
    ],
    decisions: [
      "Prioritized business-impact clarity before technical solution discussion.",
      "Used reusable test assets and evidence structures to improve consistency.",
      "Kept business, QA, and development interpretation aligned through defect triage."
    ],
    tradeoffs: [
      "Detailed traceability increases preparation effort but reduces late ambiguity.",
      "Some internal artefacts cannot be shown publicly, so evidence is limited to an anonymized method summary."
    ],
    technical: ["SQL and log-assisted investigation", "UI, service, and backend behavior awareness", "JIRA, Confluence, HP ALM, and document-generation tooling"],
    outcome: [
      "Supported clearer requirements and more controlled test and release decisions.",
      "Improved the quality of cross-team issue discussion through evidence and business-impact framing.",
      "Built reusable delivery methods now demonstrated safely in the CreditFlow portfolio project."
    ],
    lessons: [
      "A requirement is incomplete until affected data, roles, exceptions, and regression areas are understood.",
      "The fastest defect conversation starts with reproducible evidence and clear business impact.",
      "Release support is part of BA ownership, not an activity that ends at UAT sign-off."
    ],
    future: ["Continue strengthening product discovery and value-measurement capability alongside delivery assurance."],
    tags: ["Loan Origination", "Impact Analysis", "UAT", "Defect Triage", "Release Support"],
    evidence: ["Verified work history", "Anonymized contribution summary", "Methods reflected in public CreditFlow artefacts"],
    disclaimer:
      "Anonymized professional experience summary. No client material, internal requirement, system screenshot, policy wording, customer data, or production information is reproduced."
  },
  {
    slug: "fx-deal-system-regulatory-support",
    title: "FX Deal System Enhancement Support",
    subtitle: "An anonymized temporary assignment supporting regulated transaction-banking change",
    type: "Professional Experience",
    category: "Foreign Exchange Deal System",
    role: "Business Analyst",
    timeline: "Professional experience - temporary assignment",
    summary:
      "A focused experience summary showing how I approached requirement clarification, regulatory alignment, testing, and stakeholder coordination in an unfamiliar financial domain.",
    problem:
      "Regulated dealing-system change requires precise interpretation, clear control ownership, and careful validation because a small workflow or data change may affect compliance, operations, downstream processing, and audit evidence.",
    stakeholders: ["Transaction-banking operations", "Compliance and control stakeholders", "Technology delivery teams", "QA and business testers"],
    scope: [
      "Requirement clarification and process-impact analysis",
      "Control, data, workflow, and test implication review",
      "Delivery coordination and evidence-based validation"
    ],
    outOfScope: [
      "Trading strategy, pricing logic, market risk models, or confidential regulatory interpretation",
      "Client identity, system architecture, screenshots, data, and internal documents"
    ],
    assumptions: [
      "The summary describes transferable BA practice and does not identify a specific change.",
      "Regulatory and policy details remain with authorized bank stakeholders."
    ],
    requirements: [
      "Confirm the regulatory or control intent with the accountable owner.",
      "Translate the intent into observable workflow, validation, data, and evidence behavior.",
      "Define expected behavior and exception handling before test execution."
    ],
    businessRules: [
      "Control-sensitive changes require accountable review and traceable approval.",
      "Validation failures must provide clear user action and preserve audit evidence.",
      "Regression scope must include downstream and operational handoffs."
    ],
    edgeCases: [
      "A control is technically applied but produces unclear operational handling.",
      "A data correction fixes the screen while leaving downstream output inconsistent.",
      "A user exception path bypasses the intended review evidence."
    ],
    uatCoverage: [
      "Expected, rejected, exception, and downstream handoff scenarios",
      "Role and approval validation for control-sensitive actions",
      "Evidence checks for auditability and operational follow-up"
    ],
    riskControls: [
      "Decision ownership remains with authorized business and control stakeholders.",
      "Requirements, tests, and approvals retain traceable evidence.",
      "Public content excludes all confidential bank and regulatory detail."
    ],
    decisions: [
      "Used structured questions to learn a new domain without making unsupported assumptions.",
      "Separated regulatory intent from system implementation and test behavior.",
      "Escalated ambiguous control ownership rather than inventing a rule."
    ],
    tradeoffs: [
      "A short assignment limits domain breadth, but demonstrates adaptable BA method and control awareness.",
      "Confidentiality prevents artefact display, so this case is intentionally concise."
    ],
    technical: ["Workflow and data-impact reasoning", "Testable validation behavior", "Cross-system and downstream-awareness"],
    outcome: [
      "Contributed to structured, regulatory-aligned process improvement during a temporary banking assignment.",
      "Demonstrated the ability to transfer BA discipline from credit systems into another controlled financial domain."
    ],
    lessons: [
      "In regulated change, the BA must know which decisions require an authorized owner.",
      "Clear assumptions are especially important when entering a new domain.",
      "Technical understanding is most valuable when it improves control and test clarity."
    ],
    future: ["Deepen transaction-banking product knowledge while maintaining a primary credit-operations focus."],
    tags: ["Transaction Banking", "Regulatory Change", "Requirements", "UAT", "Risk & Control"],
    evidence: ["Verified work-history context", "Anonymized method summary", "No confidential artefacts published"],
    disclaimer:
      "Anonymized professional experience summary. It contains no client identity, regulatory wording, internal process detail, customer data, or production information."
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
