import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHeading } from "@/components/page-heading";
import { Button } from "@/components/ui/button";
import { experiences } from "@/lib/data/experience";
import { absoluteUrl } from "@/lib/data/profile";
import { assetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Experience",
  description: "Banking Business Analyst experience across loan origination, credit systems, UAT, defects, and release support.",
  alternates: { canonical: absoluteUrl("/experience") }
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeading
        eyebrow="Professional experience"
        title="Banking system change from requirements through release verification."
        description="6+ years at Hitachi eBworx supporting loan origination, business credit, retail banking, and FX-system delivery. Responsibilities are written at contribution level and exclude confidential client details."
      >
        <Button asChild variant="outline"><a href={assetPath("/resume")}>View resume summary</a></Button>
      </PageHeading>

      <section className="section">
        <div className="container max-w-5xl">
          <div className="border-l-2 border-primary/30 pl-5 sm:pl-8">
            {experiences.map((experience) => (
              <article className="relative border-b py-8 first:pt-0 last:border-b-0 last:pb-0" key={`${experience.title}-${experience.period}`}>
                <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full border-2 border-background bg-primary sm:-left-[39px]" aria-hidden="true" />
                <div className="grid gap-5 md:grid-cols-[190px_1fr]">
                  <div>
                    <p className="text-sm font-semibold text-primary">{experience.period}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{experience.company}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">{experience.title}</h2>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">{experience.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.domains.map((domain) => <span className="rounded-md border bg-card px-2.5 py-1 text-xs" key={domain}>{domain}</span>)}
                    </div>
                    <ul className="mt-6 grid gap-3">
                      {experience.responsibilities.map((item) => (
                        <li className="flex gap-3 text-sm leading-6 text-muted-foreground" key={item}>
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-primary" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-end">
            <Button asChild variant="primary"><a href={assetPath("/projects")}>See evidence-based case studies<ArrowRight className="h-4 w-4" aria-hidden="true" /></a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
