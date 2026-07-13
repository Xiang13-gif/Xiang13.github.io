import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  FileCheck2,
  Github,
  Linkedin,
  MapPin,
  SearchCheck,
  ShieldCheck,
  TestTube2
} from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { experiences } from "@/lib/data/experience";
import { profile } from "@/lib/data/profile";
import { projects } from "@/lib/data/projects";
import { skillGroups } from "@/lib/data/skills";
import { assetPath } from "@/lib/utils";

const deliverySteps = [
  {
    icon: SearchCheck,
    title: "Clarify",
    text: "Separate the business objective, policy intent, user action, and decision owner."
  },
  {
    icon: FileCheck2,
    title: "Define",
    text: "Specify workflow, rules, data, validations, exceptions, and acceptance criteria."
  },
  {
    icon: TestTube2,
    title: "Validate",
    text: "Trace requirements into UAT, defects, retests, regression, and sign-off evidence."
  },
  {
    icon: ShieldCheck,
    title: "Control",
    text: "Carry unresolved risk, release gates, and production verification into a clear decision."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="border-b bg-card">
        <div className="container py-10 sm:py-14">
          <div className="max-w-5xl">
            <span className="eyebrow">{profile.role}</span>
            <h1 className="mt-5 text-4xl font-semibold leading-none sm:text-5xl">{profile.name}</h1>
            <p className="mt-5 max-w-4xl text-2xl font-semibold leading-tight sm:text-3xl">
              {profile.headline}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              {profile.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="primary">
                <a href={assetPath("/projects/creditflow-ba-toolkit")}>
                  View flagship case
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a download href={assetPath(profile.resumeUrl)}>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Resume PDF
                </a>
              </Button>
              <Button asChild size="icon" variant="outline">
                <a aria-label="Open LinkedIn profile" href={profile.linkedin} rel="noreferrer" target="_blank" title="LinkedIn">
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="icon" variant="outline">
                <a aria-label="Open GitHub profile" href={profile.github} rel="noreferrer" target="_blank" title="GitHub">
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
                {profile.careerStatus}
              </span>
            </div>
          </div>

          <dl className="mt-10 grid border-y sm:grid-cols-2 lg:grid-cols-4">
            {profile.proofPoints.map((point) => (
              <div className="border-b py-5 last:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:[&:nth-child(2)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2)]:border-r" key={point.label}>
                <dt className="text-xs font-semibold uppercase text-muted-foreground">{point.label}</dt>
                <dd className="mt-2 text-base font-semibold">{point.value}</dd>
                <dd className="mt-1 text-xs leading-5 text-muted-foreground">{point.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="featured-work">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <span className="eyebrow">Selected evidence</span>
            <h2 className="mt-4 text-3xl font-semibold" id="featured-work">Three views of the same professional story.</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              The flagship project proves BA reasoning in public. The two experience summaries show where that method comes from, without exposing client material.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="lg:row-span-2">
              <ProjectCard featured project={projects[0]} />
            </div>
            {projects.slice(1).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y bg-card" aria-labelledby="delivery-method">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">BA delivery method</span>
            <h2 className="mt-4 text-3xl font-semibold" id="delivery-method">A clear line from request to release decision.</h2>
            <p className="mt-3 leading-7 text-muted-foreground">{profile.positioning}</p>
          </div>
          <ol className="mt-8 grid border-y md:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map((step, index) => (
              <li className="border-b py-5 md:border-r md:px-5 md:[&:nth-child(2)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2)]:border-r" key={step.title}>
                <div className="flex items-center justify-between gap-3">
                  <step.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="skill-evidence">
        <div className="container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="eyebrow">Skill to evidence</span>
            <h2 className="mt-4 text-3xl font-semibold" id="skill-evidence">Claims should lead somewhere verifiable.</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Instead of a long keyword wall, each capability points to a case, artefact, test, or work-history summary.
            </p>
          </div>
          <div className="divide-y border-y">
            {skillGroups.map((group) => {
              const external = group.href.startsWith("http");
              const content = (
                <>
                  <div>
                    <h3 className="font-semibold">{group.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{group.description}</p>
                    <p className="mt-2 text-xs font-medium text-primary">Evidence: {group.evidence}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-none text-primary" aria-hidden="true" />
                </>
              );
              return external ? (
                <a className="focus-ring grid gap-4 py-5 sm:grid-cols-[1fr_auto] sm:items-center" href={group.href} key={group.title} rel="noreferrer" target="_blank">
                  {content}
                </a>
              ) : (
                <a className="focus-ring grid gap-4 py-5 sm:grid-cols-[1fr_auto] sm:items-center" href={assetPath(group.href)} key={group.title}>
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section border-t bg-card" aria-labelledby="experience-snapshot">
        <div className="container">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <span className="eyebrow">Experience snapshot</span>
              <h2 className="mt-4 text-3xl font-semibold" id="experience-snapshot">Banking delivery experience since 2019.</h2>
            </div>
            <Button asChild variant="outline"><a href={assetPath("/experience")}>Full experience</a></Button>
          </div>
          <div className="mt-8 divide-y border-y">
            {experiences.map((experience) => (
              <article className="grid gap-3 py-6 md:grid-cols-[190px_1fr]" key={`${experience.title}-${experience.period}`}>
                <div>
                  <p className="text-sm font-semibold text-primary">{experience.period}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{experience.company}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{experience.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">{experience.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {experience.domains.map((domain) => (
                      <span className="rounded-md border bg-background px-2.5 py-1 text-xs" key={domain}>{domain}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-heading">
        <div className="container flex flex-col justify-between gap-6 border-l-4 border-accent bg-card px-6 py-8 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary">
              <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase">Career conversations</p>
            </div>
            <h2 className="mt-3 text-2xl font-semibold" id="contact-heading">Banking BA, Credit Operations, and Financial IT roles.</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">For opportunities or case-study discussion, email or LinkedIn is the best starting point.</p>
          </div>
          <Button asChild size="lg" variant="primary"><a href={assetPath("/contact")}>Contact Tan Ze Xiang</a></Button>
        </div>
      </section>
    </>
  );
}
