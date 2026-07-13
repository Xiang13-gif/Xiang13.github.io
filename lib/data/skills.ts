export type SkillGroup = {
  title: string;
  description: string;
  evidence: string;
  href: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Requirements & Analysis",
    description: "Turn business intent into scoped, testable system behavior.",
    evidence: "CreditFlow requirements, rules, assumptions, and traceability",
    href: "/projects/creditflow-ba-toolkit#analysis",
    items: ["Requirement clarification", "Functional specification", "Impact analysis", "Acceptance criteria", "Process and gap analysis"]
  },
  {
    title: "Banking & Credit Operations",
    description: "Understand the controls and handoffs behind financial-system change.",
    evidence: "Loan origination experience and commercial-credit portfolio case",
    href: "/projects/loan-origination-enhancement-delivery",
    items: ["Loan origination", "Business credit", "Document controls", "Approval workflow", "Retail and FX systems"]
  },
  {
    title: "UAT & Delivery Assurance",
    description: "Keep requirements, tests, defects, and release decisions connected.",
    evidence: "UAT coverage, defect controls, and release gates",
    href: "/projects/creditflow-ba-toolkit#delivery-assurance",
    items: ["VSIT / SIT / UAT", "Regression", "Defect triage", "Retest evidence", "Production verification"]
  },
  {
    title: "Technical Collaboration",
    description: "Work with engineers using clear data, interface, and system reasoning.",
    evidence: "Strict TypeScript app, tests, OpenAPI contract, SQL, and GitHub history",
    href: "https://github.com/Xiang13-gif/business-credit-system-enhancement-case-study",
    items: ["SQL", "Log analysis", "API awareness", "Data validation", "UI and backend behavior", "GitHub"]
  }
];
