export type MatrixArtifact = {
  kind: "matrix";
  label: string;
  title: string;
  description: string;
  columns: string[];
  rows: string[][];
};

export type FlowArtifact = {
  kind: "flow";
  label: string;
  title: string;
  description: string;
  steps: string[];
};

export type ChecklistArtifact = {
  kind: "checklist";
  label: string;
  title: string;
  description: string;
  items: Array<{ name: string; status: string }>;
};

export type ProjectArtifact = MatrixArtifact | FlowArtifact | ChecklistArtifact;

export const projectArtifacts: Record<string, ProjectArtifact[]> = {
  "creditflow-ba-toolkit": [
    {
      kind: "matrix",
      label: "Impact analysis",
      title: "Change impact matrix",
      description: "A concise example showing how one change is assessed across behavior, control risk, and validation.",
      columns: ["Area", "Expected change", "Risk", "Validation"],
      rows: [
        ["Requirement", "Waiver path", "Medium", "Acceptance criteria"],
        ["Workflow", "Checker gate", "High", "Role-based UAT"],
        ["Release", "Open-defect gate", "High", "Regression + sign-off"]
      ]
    },
    {
      kind: "flow",
      label: "Traceability",
      title: "Requirement-to-release path",
      description: "The core evidence chain used throughout the interactive workspace.",
      steps: ["Business need", "Functional rule", "UAT evidence", "Release decision"]
    },
    {
      kind: "checklist",
      label: "Release control",
      title: "Readiness evidence",
      description: "A controlled sign-off view that distinguishes readiness from unresolved risk.",
      items: [
        { name: "Acceptance criteria traced", status: "Ready" },
        { name: "Regression scope agreed", status: "Ready" },
        { name: "Open defects assessed", status: "Review" }
      ]
    }
  ]
};

export const selectedArtifacts = [
  { slug: "creditflow-ba-toolkit", artifact: projectArtifacts["creditflow-ba-toolkit"][0] },
  { slug: "creditflow-ba-toolkit", artifact: projectArtifacts["creditflow-ba-toolkit"][1] }
];
