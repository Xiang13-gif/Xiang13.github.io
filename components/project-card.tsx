import Image from "next/image";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/lib/data/projects";
import { assetPath } from "@/lib/utils";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      {project.image ? (
        <div className="relative aspect-[16/9] overflow-hidden border-b bg-muted">
          <Image
            alt={project.imageAlt ?? ""}
            className="object-cover object-top"
            fill
            sizes={featured ? "(min-width: 1024px) 64vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
            src={assetPath(project.image)}
          />
        </div>
      ) : null}
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <Badge className={project.type === "Portfolio Project" ? "border-primary/30 bg-primary/10 text-primary" : "border-accent/40 bg-accent/10 text-foreground"}>
            {project.type}
          </Badge>
          <span className="text-xs text-muted-foreground">{project.category}</span>
        </div>
        <CardTitle className="pt-2 text-xl">{project.title}</CardTitle>
        <p className="text-sm leading-6 text-muted-foreground">{project.subtitle}</p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <p className="text-sm leading-6 text-muted-foreground">{project.summary}</p>
        <ul className="mt-5 space-y-2" aria-label="Evidence available">
          {project.evidence.slice(0, 3).map((item) => (
            <li className="flex gap-2 text-sm leading-5" key={item}>
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button asChild variant="primary">
            <a href={assetPath(`/projects/${project.slug}`)}>
              Read case study
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          {project.live ? (
            <Button asChild variant="outline">
              <a href={project.live} rel="noreferrer" target="_blank">
                Live demo
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
