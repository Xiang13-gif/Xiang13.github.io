import type { Metadata } from "next";
import { FileSearch, Handshake, ListChecks, ShieldCheck } from "lucide-react";

import { PageHeading } from "@/components/page-heading";
import { Button } from "@/components/ui/button";
import { absoluteUrl, profile } from "@/lib/data/profile";
import { assetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: "Working principles and professional focus of Banking Business Analyst Tan Ze Xiang.",
  alternates: { canonical: absoluteUrl("/about") }
};

const principles = [
  { icon: FileSearch, title: "Clarify before specifying", text: "Separate business objective, policy intent, user action, system behavior, and exception ownership." },
  { icon: ListChecks, title: "Make change testable", text: "Requirements should support acceptance criteria, edge cases, UAT, regression, and sign-off." },
  { icon: ShieldCheck, title: "Keep risk visible", text: "Trace downstream impacts, control gaps, open defects, and release conditions instead of hiding uncertainty." },
  { icon: Handshake, title: "Create shared understanding", text: "Help business users, developers, QA, vendors, and approvers work from the same expected behavior." }
];

export default function AboutPage() {
  return (
    <>
      <PageHeading
        eyebrow="About"
        title="A Banking Business Analyst focused on system behavior, delivery evidence, and control."
        description={profile.summary}
      />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="eyebrow">Professional focus</span>
            <h2 className="mt-4 text-3xl font-semibold">Credit operations is where business judgment meets system discipline.</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-muted-foreground">
              <p>I work best where a banking process must be translated into precise workflow, rules, data, validation, evidence, and release behavior.</p>
              <p>My experience spans requirement analysis, functional clarification, UAT and regression, defect triage, root-cause investigation, document automation, production verification, and stakeholder coordination.</p>
              <p>The technical work in this portfolio supports that identity. It demonstrates that I can reason about frontend, backend, API, data, and test behavior without presenting myself as a software architect.</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="primary"><a href={assetPath("/projects")}>Explore case studies</a></Button>
              <Button asChild variant="outline"><a href={assetPath("/contact")}>Contact</a></Button>
            </div>
          </div>
          <div className="divide-y border-y">
            {principles.map((principle) => (
              <article className="grid gap-4 py-5 sm:grid-cols-[36px_1fr]" key={principle.title}>
                <principle.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <div><h3 className="font-semibold">{principle.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{principle.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y bg-card py-9">
        <div className="container">
          <p className="text-xs font-semibold uppercase text-primary">Language capability</p>
          <p className="mt-2 text-base">English, Chinese, and Malay</p>
        </div>
      </section>
    </>
  );
}
