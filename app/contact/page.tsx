import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

import { PageHeading } from "@/components/page-heading";
import { Button } from "@/components/ui/button";
import { absoluteUrl, profile } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Tan Ze Xiang about Banking BA, Credit Operations, Loan Origination, and Financial IT opportunities.",
  alternates: { canonical: absoluteUrl("/contact") }
};

export default function ContactPage() {
  return (
    <>
      <PageHeading
        eyebrow="Contact"
        title="Let’s discuss Banking BA and Financial IT opportunities."
        description="Email or LinkedIn is the best starting point for roles involving credit operations, loan origination, requirements, UAT, system enhancement, or delivery assurance."
      />
      <section className="section">
        <div className="container max-w-4xl">
          <div className="grid gap-5 sm:grid-cols-2">
            <a className="panel focus-ring flex items-start gap-4 p-5 hover:border-primary/50" href={`mailto:${profile.email}`}>
              <Mail className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
              <div><p className="font-semibold">Email</p><p className="mt-2 break-all text-sm text-muted-foreground">{profile.email}</p></div>
            </a>
            <a className="panel focus-ring flex items-start gap-4 p-5 hover:border-primary/50" href={profile.linkedin} rel="noreferrer" target="_blank">
              <Linkedin className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
              <div><p className="font-semibold">LinkedIn</p><p className="mt-2 text-sm text-muted-foreground">Professional profile and career history</p></div>
            </a>
            <a className="panel focus-ring flex items-start gap-4 p-5 hover:border-primary/50" href={profile.github} rel="noreferrer" target="_blank">
              <Github className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
              <div><p className="font-semibold">GitHub</p><p className="mt-2 text-sm text-muted-foreground">Public code, BA documents, tests, and project history</p></div>
            </a>
            <div className="panel flex items-start gap-4 p-5">
              <MapPin className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
              <div><p className="font-semibold">Location</p><p className="mt-2 text-sm text-muted-foreground">{profile.location}</p></div>
            </div>
          </div>
          <div className="mt-8 border-l-4 border-accent bg-card p-6">
            <p className="text-sm font-semibold">Current career focus</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{profile.careerStatus}. No contact form or tracking script is used in the MVP; communication goes directly through the channels above.</p>
            <Button asChild className="mt-5" variant="primary"><a href={`mailto:${profile.email}`}>Send email</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
