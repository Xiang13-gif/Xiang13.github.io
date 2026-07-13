import { ArrowRight, Check, FileSpreadsheet, ListChecks, Workflow } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { ProjectArtifact } from "@/lib/data/deliverables";
import { cn } from "@/lib/utils";

const artifactIcons = {
  matrix: FileSpreadsheet,
  flow: Workflow,
  checklist: ListChecks
};

export function DeliverablePreview({ artifact, compact = false }: { artifact: ProjectArtifact; compact?: boolean }) {
  const Icon = artifactIcons[artifact.kind];

  return (
    <article className={cn("deliverable-preview", compact && "h-full")}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <Badge className="border-primary/30 bg-primary/10 text-primary">{artifact.label}</Badge>
          <h3 className="mt-3 text-base font-semibold leading-6">{artifact.title}</h3>
        </div>
        <span className="grid h-9 w-9 flex-none place-items-center rounded-md border bg-background text-primary">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>

      <div className="artifact-canvas mt-5">
        {artifact.kind === "matrix" ? (
          <table className="w-full min-w-[520px] border-collapse text-left text-xs">
            <caption className="sr-only">{artifact.title}</caption>
            <thead>
              <tr>
                {artifact.columns.map((column) => (
                  <th className="border-b bg-muted px-3 py-2 font-semibold text-muted-foreground" key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {artifact.rows.map((row, rowIndex) => (
                <tr key={row.join("-")}>
                  {row.map((cell, cellIndex) => (
                    <td className="border-b px-3 py-2.5 leading-5 last:border-r-0" key={`${rowIndex}-${cellIndex}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}

        {artifact.kind === "flow" ? (
          <ol className="grid gap-2 sm:grid-cols-4">
            {artifact.steps.map((step, index) => (
              <li className="relative rounded-md border bg-card p-3" key={step}>
                <span className="text-[10px] font-semibold text-primary">0{index + 1}</span>
                <p className="mt-1 text-xs font-medium leading-5">{step}</p>
                {index < artifact.steps.length - 1 ? (
                  <ArrowRight className="absolute -right-2.5 top-1/2 z-10 hidden h-3.5 w-3.5 -translate-y-1/2 bg-background text-primary sm:block" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
        ) : null}

        {artifact.kind === "checklist" ? (
          <ul className="space-y-2">
            {artifact.items.map((item) => (
              <li className="flex items-center gap-3 rounded-md border bg-card p-3" key={item.name}>
                <span className="grid h-6 w-6 flex-none place-items-center rounded-md bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1 text-xs font-medium">{item.name}</span>
                <span className="text-[10px] font-semibold text-muted-foreground">{item.status}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <p className="mt-4 text-xs leading-5 text-muted-foreground">{artifact.description}</p>
    </article>
  );
}
