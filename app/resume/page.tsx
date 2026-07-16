import type { Metadata } from "next";
import { CheckCircle2, Download, ExternalLink, FileText } from "lucide-react";

import { PageHeading } from "@/components/page-heading";
import { Button } from "@/components/ui/button";
import { experiences, resumeHighlights } from "@/lib/data/experience";
import { absoluteUrl, profile } from "@/lib/data/profile";
import { assetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume summary and downloadable PDF for Banking Business Analyst Tan Ze Xiang.",
  alternates: { canonical: absoluteUrl("/resume") }
};

export default function ResumePage() {
  return (
    <>
      <PageHeading
        eyebrow="Resume"
        title="Credit Operations and Banking Systems Business Analyst, delivering change since 2019."
        description="A recruiter-friendly summary of role fit, experience, and capabilities. The downloadable PDF excludes phone number and street address for public-site privacy."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="primary"><a download href={assetPath(profile.resumeUrl)}><Download className="h-4 w-4" aria-hidden="true" />Download resume PDF</a></Button>
          <Button asChild variant="outline"><a href={profile.linkedin} rel="noreferrer" target="_blank">LinkedIn<ExternalLink className="h-4 w-4" aria-hidden="true" /></a></Button>
        </div>
      </PageHeading>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside>
            <div className="border-l-4 border-accent bg-card p-5">
              <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-semibold">{profile.role}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{profile.summary}</p>
              <p className="mt-4 text-sm font-medium">{profile.location}</p>
            </div>
            <div className="mt-7">
              <h2 className="text-sm font-semibold uppercase text-primary">Target roles</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {profile.focusRoles.map((role) => <li key={role}>{role}</li>)}
              </ul>
            </div>
          </aside>

          <div>
            <h2 className="text-2xl font-semibold">Core evidence</h2>
            <ul className="mt-5 space-y-4">
              {resumeHighlights.map((highlight) => (
                <li className="flex gap-3 text-sm leading-6 text-muted-foreground" key={highlight}>
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-primary" aria-hidden="true" /><span>{highlight}</span>
                </li>
              ))}
            </ul>
            <h2 className="mt-10 text-2xl font-semibold">Experience</h2>
            <div className="mt-4 divide-y border-y">
              {experiences.map((experience) => (
                <article className="grid gap-2 py-5 sm:grid-cols-[170px_1fr]" key={`${experience.title}-${experience.period}`}>
                  <p className="text-sm font-semibold text-primary">{experience.period}</p>
                  <div><h3 className="font-semibold">{experience.title} · {experience.company}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{experience.summary}</p></div>
                </article>
              ))}
            </div>
            <div className="mt-8"><Button asChild variant="outline"><a href={assetPath("/experience")}>Read full experience</a></Button></div>
          </div>
        </div>
      </section>
    </>
  );
}
