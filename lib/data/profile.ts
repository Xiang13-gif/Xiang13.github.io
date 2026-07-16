export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://xiang13-gif.github.io/Xiang13.github.io";

export function absoluteUrl(path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl.replace(/\/$/, "")}${path ? normalizedPath : ""}`;
}

export const profile = {
  name: "Tan Ze Xiang",
  initials: "TZ",
  role: "Credit Operations & Banking Systems Business Analyst",
  shortRole: "Credit Operations Business Analyst",
  location: "Kuala Lumpur, Malaysia",
  email: "tanzexiang8@gmail.com",
  github: "https://github.com/Xiang13-gif",
  linkedin: "https://www.linkedin.com/in/tan-ze-xiang-3b213a143",
  resumeUrl: "/resume/Tan-Ze-Xiang-Resume.pdf",
  careerStatus: "Open to Credit Operations, Banking Systems, and Financial IT opportunities",
  headline: "I translate credit operations into testable, controlled banking system change.",
  summary:
    "Banking Business Analyst supporting loan origination, business credit, retail banking, and foreign-exchange system change since 2019 across requirements, UAT, defect triage, and release verification.",
  positioning:
    "I connect business intent, system behavior, change impact, test evidence, and delivery decisions so banking change is understandable, buildable, and safe to release.",
  metaDescription:
    "Portfolio of Tan Ze Xiang, a Malaysia-based Credit Operations and Banking Systems Business Analyst specializing in loan origination, requirements, UAT, traceability, and controlled delivery.",
  focusRoles: [
    "Credit Operations Business Analyst",
    "Loan Origination System Analyst",
    "Banking Systems Business Analyst",
    "Financial IT Business Consultant",
    "Banking UAT and Change Analyst"
  ],
  proofPoints: [
    {
      value: "Since 2019",
      label: "Banking system delivery",
      detail: "Requirements, testing, defects, and release support"
    },
    {
      value: "Credit operations & LOS",
      label: "Domain focus",
      detail: "Loan origination, business credit, retail, and FX systems"
    },
    {
      value: "Requirements to release",
      label: "Delivery coverage",
      detail: "Analysis, traceability, UAT, defects, and production verification"
    },
    {
      value: "BA + system reasoning",
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
  "Portfolio projects use mock data and generalized banking workflows. They are not connected to any bank system and contain no confidential client, customer, policy, or production information. Professional experience summaries are intentionally anonymized, distinguish individual contribution from team delivery, and do not publish confidential or unverified performance metrics.";
