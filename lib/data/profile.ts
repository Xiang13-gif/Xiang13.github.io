export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://xiang13-gif.github.io/Xiang13.github.io";

export function absoluteUrl(path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl.replace(/\/$/, "")}${path ? normalizedPath : ""}`;
}

export const profile = {
  name: "Tan Ze Xiang",
  initials: "TZ",
  role: "Banking Business Analyst | Credit Operations & Financial Systems",
  shortRole: "Banking Business Analyst",
  location: "Kuala Lumpur, Malaysia",
  email: "tanzexiang8@gmail.com",
  github: "https://github.com/Xiang13-gif",
  linkedin: "https://www.linkedin.com/in/tan-ze-xiang-3b213a143",
  resumeUrl: "/resume/Tan-Ze-Xiang-Resume.pdf",
  careerStatus: "Open to Banking BA and Financial IT opportunities",
  headline: "I turn complex credit operations into clear, testable, and controlled system change.",
  summary:
    "Banking Business Analyst with 6+ years of experience supporting loan origination, business credit, retail banking, and foreign-exchange system change across requirements, UAT, defect triage, and release verification.",
  positioning:
    "I connect business intent, system behavior, test evidence, and delivery decisions so banking change is understandable, buildable, and safe to release.",
  metaDescription:
    "Portfolio of Tan Ze Xiang, a Malaysia-based Banking Business Analyst specializing in credit operations, loan origination systems, requirements, UAT, traceability, and controlled delivery.",
  focusRoles: [
    "Banking Business Analyst",
    "Credit Operations Business Analyst",
    "Financial IT Consultant",
    "Loan Origination System Analyst",
    "FinTech Product Analyst"
  ],
  proofPoints: [
    {
      value: "6+ years",
      label: "Banking system delivery",
      detail: "Business analysis experience since 2019"
    },
    {
      value: "Credit & LOS",
      label: "Domain focus",
      detail: "Loan origination, business credit, retail, and FX systems"
    },
    {
      value: "Requirements to release",
      label: "Delivery coverage",
      detail: "Analysis, traceability, UAT, defects, and production verification"
    },
    {
      value: "Business + technical",
      label: "Collaboration strength",
      detail: "Business rules, SQL, logs, APIs, data, and UI behavior"
    }
  ],
  careerValues: [
    "Evidence before claims",
    "Clear requirements before build",
    "Testable rules and traceable decisions",
    "Controlled delivery over rushed sign-off"
  ]
} as const;

export const portfolioDisclaimer =
  "Portfolio projects use mock data and generalized banking workflows. They are not connected to any bank system and contain no confidential client, customer, policy, or production information. Professional experience summaries are intentionally anonymized and describe contribution areas only.";
