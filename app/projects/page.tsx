import type { Metadata } from "next";

import { PageHeading } from "@/components/page-heading";
import { ProjectCard } from "@/components/project-card";
import { absoluteUrl } from "@/lib/data/profile";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Banking BA evidence covering a public CreditFlow portfolio project and anonymized loan-origination and FX-system experience summaries.",
  alternates: { canonical: absoluteUrl("/projects") }
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeading
        eyebrow="Projects & evidence"
        title="Three case studies, each proving a different part of the role."
        description="CreditFlow provides public, inspectable BA artefacts. The professional cases explain transferable delivery experience while protecting client and bank confidentiality."
      />
      <section className="section">
        <div className="container grid gap-5 lg:grid-cols-2">
          <div className="lg:row-span-2"><ProjectCard featured project={projects[0]} /></div>
          {projects.slice(1).map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
      <section className="border-y bg-card py-8">
        <div className="container grid gap-6 text-sm leading-6 text-muted-foreground md:grid-cols-3">
          <div><p className="font-semibold text-foreground">Portfolio Project</p><p className="mt-2">Built independently with mock data, public code, tests, and a live demo.</p></div>
          <div><p className="font-semibold text-foreground">Professional Experience</p><p className="mt-2">Based on verified work history, summarized at contribution level only.</p></div>
          <div><p className="font-semibold text-foreground">Evidence Boundary</p><p className="mt-2">No internal screenshot, requirement ID, client data, policy wording, or production detail is published.</p></div>
        </div>
      </section>
    </>
  );
}
