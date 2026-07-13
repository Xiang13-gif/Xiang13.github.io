import { Github, Linkedin, Mail } from "lucide-react";

import { portfolioDisclaimer, profile } from "@/lib/data/profile";
import { assetPath } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="container grid gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.role}</p>
          <p className="mt-4 text-xs leading-5 text-muted-foreground">{portfolioDisclaimer}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
          <a className="focus-ring rounded-md hover:text-foreground" href={assetPath("/projects")}>Projects</a>
          <a className="focus-ring rounded-md hover:text-foreground" href={`mailto:${profile.email}`}>
            <Mail className="mr-1 inline h-4 w-4" aria-hidden="true" /> Email
          </a>
          <a className="focus-ring rounded-md hover:text-foreground" href={profile.github} rel="noreferrer" target="_blank">
            <Github className="mr-1 inline h-4 w-4" aria-hidden="true" /> GitHub
          </a>
          <a className="focus-ring rounded-md hover:text-foreground" href={profile.linkedin} rel="noreferrer" target="_blank">
            <Linkedin className="mr-1 inline h-4 w-4" aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
