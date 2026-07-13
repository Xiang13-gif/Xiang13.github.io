import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  ExternalLink,
  FileCheck2,
  Github,
  ShieldCheck
} from "lucide-react";

import { DeliverablePreview } from "@/components/deliverable-preview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectArtifacts } from "@/lib/data/deliverables";
import { absoluteUrl } from "@/lib/data/profile";
import { getProject, projects } from "@/lib/data/projects";
import { assetPath, cn } from "@/lib/utils";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: absoluteUrl(`/projects/${project.slug}`) },
    openGraph: project.image ? { images: [{ url: absoluteUrl(project.image), alt: project.imageAlt }] } : undefined
  };
}

function EvidenceList({ items, compact = false }: { items: string[]; compact?: boolean }) {
  return (
    <ul className={cn("space-y-3", compact && "space-y-2")}>
      {items.map((item) => (
        <li className="flex gap-3 text-sm leading-6 text-muted-foreground" key={item}>
          <span className="mt-1 grid h-4 w-4 flex-none place-items-center rounded-sm bg-primary/10 text-primary">
            <Check className="h-3 w-3" aria-hidden="true" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CaseSection({
  id,
  number,
  label,
  title,
  children,
  last = false
}: {
  id: string;
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section className={cn("case-study-section scroll-mt-24", last && "border-b-0 pb-0")} id={id}>
      <span className="case-study-number">{number}</span>
      <div>
        <p className="text-xs font-semibold uppercase text-primary">{label}</p>
        <h2 className="mt-3 text-2xl font-semibold">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const artifacts = projectArtifacts[project.slug] ?? [];
  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    author: { "@type": "Person", name: "Tan Ze Xiang" },
    genre: project.category,
    isBasedOn: project.type === "Professional Experience" ? "Anonymized professional experience" : "Generalized banking workflows",
    url: absoluteUrl(`/projects/${project.slug}`)
  };

  return (
    <>
      <section className="border-b bg-card py-10 sm:py-12">
        <div className="container max-w-6xl">
          <Button asChild variant="ghost"><a href={assetPath("/projects")}><ArrowLeft className="h-4 w-4" aria-hidden="true" />Back to projects</a></Button>
          <div className="mt-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className={project.type === "Portfolio Project" ? "border-primary/30 bg-primary/10 text-primary" : "border-accent/40 bg-accent/10 text-foreground"}>{project.type}</Badge>
              <span className="text-sm text-muted-foreground">{project.category}</span>
            </div>
            <h1 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">{project.title}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">{project.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-3 no-print">
              {project.live ? <Button asChild variant="primary"><a href={project.live} rel="noreferrer" target="_blank">Open live workspace<ExternalLink className="h-4 w-4" aria-hidden="true" /></a></Button> : null}
              {project.github ? <Button asChild variant="outline"><a href={project.github} rel="noreferrer" target="_blank"><Github className="h-4 w-4" aria-hidden="true" />View GitHub evidence</a></Button> : null}
            </div>
          </div>

          {project.image ? (
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg border bg-muted">
              <Image alt={project.imageAlt ?? ""} className="object-cover object-top" fill priority sizes="(min-width: 1200px) 1100px, 100vw" src={assetPath(project.image)} />
            </div>
          ) : null}

          <dl className="mt-8 grid border-y sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Role", project.role],
              ["Format", project.timeline],
              ["Evidence", project.evidence[0]],
              ["Confidentiality", project.type === "Portfolio Project" ? "Mock data only" : "Anonymized summary"]
            ].map(([label, value]) => (
              <div className="border-b py-4 last:border-b-0 sm:border-r sm:px-4 lg:border-b-0" key={label}>
                <dt className="text-xs font-semibold uppercase text-muted-foreground">{label}</dt>
                <dd className="mt-2 text-sm font-semibold leading-6">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex gap-3 rounded-lg border border-accent/40 bg-accent/10 p-4 text-sm leading-6" role="note">
            <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
            <p><strong>Evidence boundary:</strong> {project.disclaimer}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
            <aside className="no-print">
              <nav aria-label="Case study sections" className="space-y-1 lg:sticky lg:top-24">
                {[
                  ["context", "Context"],
                  ["scope", "Scope & assumptions"],
                  ["analysis", "Analysis & rules"],
                  ["delivery-assurance", "Delivery assurance"],
                  ["decisions", "Decisions & trade-offs"],
                  ["implementation", "Implementation"],
                  ["reflection", "Outcome & reflection"]
                ].map(([href, label]) => <a className="focus-ring block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground" href={`#${href}`} key={href}>{label}</a>)}
              </nav>
            </aside>

            <article>
              <CaseSection id="context" label="Business problem" number="01" title="Context, users, and the problem behind the screen.">
                <p className="text-base leading-8 text-muted-foreground">{project.problem}</p>
                <div className="mt-7"><h3 className="text-base font-semibold">Users and stakeholders</h3><div className="mt-4"><EvidenceList items={project.stakeholders} /></div></div>
              </CaseSection>

              <CaseSection id="scope" label="Boundaries" number="02" title="Scope, non-goals, and assumptions.">
                <div className="grid gap-8 md:grid-cols-2">
                  <div><h3 className="font-semibold">In scope</h3><div className="mt-4"><EvidenceList items={project.scope} /></div></div>
                  <div><h3 className="font-semibold">Out of scope</h3><div className="mt-4"><EvidenceList items={project.outOfScope} /></div></div>
                </div>
                <div className="mt-8 border-l-2 border-accent pl-5"><h3 className="font-semibold">Assumptions</h3><div className="mt-4"><EvidenceList items={project.assumptions} /></div></div>
              </CaseSection>

              <CaseSection id="analysis" label="BA analysis" number="03" title="Requirements, business rules, and edge cases.">
                <div className="grid gap-8 md:grid-cols-2">
                  <div><h3 className="font-semibold">Functional requirements</h3><div className="mt-4"><EvidenceList items={project.requirements} /></div></div>
                  <div><h3 className="font-semibold">Business rules</h3><div className="mt-4"><EvidenceList items={project.businessRules} /></div></div>
                </div>
                <div className="mt-8"><h3 className="font-semibold">Edge cases considered</h3><div className="mt-4"><EvidenceList items={project.edgeCases} /></div></div>
              </CaseSection>

              <CaseSection id="delivery-assurance" label="Validation & control" number="04" title="UAT coverage, defects, risk, and release confidence.">
                <div className="grid gap-8 md:grid-cols-2">
                  <div><h3 className="font-semibold">UAT coverage</h3><div className="mt-4"><EvidenceList items={project.uatCoverage} /></div></div>
                  <div><h3 className="font-semibold">Risk and control</h3><div className="mt-4"><EvidenceList items={project.riskControls} /></div></div>
                </div>
              </CaseSection>

              <CaseSection id="decisions" label="Judgment" number="05" title="Key decisions and the trade-offs behind them.">
                <div className="grid gap-8 md:grid-cols-2">
                  <div><h3 className="font-semibold">Design decisions</h3><div className="mt-4"><EvidenceList items={project.decisions} /></div></div>
                  <div><h3 className="font-semibold">Trade-offs</h3><div className="mt-4"><EvidenceList items={project.tradeoffs} /></div></div>
                </div>
              </CaseSection>

              <CaseSection id="implementation" label="System understanding" number="06" title="Technical implementation at the level a BA should explain.">
                <details className="rounded-lg border bg-card p-5" open={project.type === "Portfolio Project"}>
                  <summary className="cursor-pointer font-semibold">Technical details</summary>
                  <div className="mt-5"><EvidenceList items={project.technical} /></div>
                </details>
              </CaseSection>

              <CaseSection id="reflection" label="Outcome & learning" last number="07" title="What this proves, what I learned, and what comes next.">
                <div className="grid gap-8 md:grid-cols-2">
                  <div><h3 className="font-semibold">Outcome</h3><div className="mt-4"><EvidenceList items={project.outcome} /></div></div>
                  <div><h3 className="font-semibold">Lessons learned</h3><div className="mt-4"><EvidenceList items={project.lessons} /></div></div>
                </div>
                <details className="mt-8 rounded-lg border bg-card p-5">
                  <summary className="cursor-pointer font-semibold">Future enhancement</summary>
                  <div className="mt-5"><EvidenceList items={project.future} /></div>
                </details>
              </CaseSection>
            </article>
          </div>
        </div>
      </section>

      {artifacts.length > 0 ? (
        <section className="section border-y bg-card" id="artefacts">
          <div className="container max-w-6xl">
            <div className="max-w-3xl">
              <span className="eyebrow"><FileCheck2 className="h-4 w-4" aria-hidden="true" />BA artefact previews</span>
              <h2 className="mt-4 text-3xl font-semibold">Sanitized evidence, not decorative UI.</h2>
              <p className="mt-3 leading-7 text-muted-foreground">These mock examples show the structure of impact analysis, traceability, and release control without reproducing internal bank artefacts.</p>
            </div>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {artifacts.map((artifact) => <DeliverablePreview artifact={artifact} key={artifact.title} />)}
            </div>
          </div>
        </section>
      ) : null}

      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema).replace(/</g, "\\u003c") }} type="application/ld+json" />
    </>
  );
}
