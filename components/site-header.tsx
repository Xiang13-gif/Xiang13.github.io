import { Github, Linkedin, Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data/profile";
import { assetPath } from "@/lib/utils";

const navItems = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container">
        <div className="flex min-h-16 items-center justify-between gap-3">
          <a className="flex min-w-0 items-center gap-3 rounded-md focus-ring" href={assetPath("/")}>
            <span className="grid h-9 w-9 flex-none place-items-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
              {profile.initials}
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-sm font-semibold">{profile.name}</span>
              <span className="hidden truncate text-xs text-muted-foreground min-[390px]:block">Banking Business Analyst</span>
            </span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 text-sm font-medium text-muted-foreground md:flex">
            {navItems.map((item) => (
              <a className="focus-ring whitespace-nowrap rounded-md px-3 py-2 transition hover:bg-muted hover:text-foreground" href={assetPath(item.href)} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-none items-center gap-2">
            <span className="hidden items-center gap-2 lg:flex">
              <Button asChild size="icon" variant="outline">
                <a aria-label="Open GitHub profile" href={profile.github} rel="noreferrer" target="_blank" title="GitHub">
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="icon" variant="outline">
                <a aria-label="Open LinkedIn profile" href={profile.linkedin} rel="noreferrer" target="_blank" title="LinkedIn">
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </span>
            <ThemeToggle />
            <Button asChild className="hidden md:inline-flex" variant="primary">
              <a href={assetPath("/contact")}>Contact</a>
            </Button>
            <details className="group relative md:hidden" data-mobile-nav>
              <summary className="focus-ring flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border bg-card hover:bg-muted [&::-webkit-details-marker]:hidden" aria-label="Toggle navigation">
                <Menu className="h-4 w-4 group-open:hidden" aria-hidden="true" />
                <X className="hidden h-4 w-4 group-open:block" aria-hidden="true" />
              </summary>
              <nav aria-label="Mobile navigation" className="absolute right-0 top-12 z-50 grid w-[min(88vw,320px)] gap-1 rounded-lg border bg-card p-3 text-sm font-medium text-muted-foreground shadow-panel">
                {[...navItems, { href: "/contact", label: "Contact" }].map((item) => (
                  <a className="focus-ring rounded-md px-3 py-2.5 transition hover:bg-muted hover:text-foreground" href={assetPath(item.href)} key={item.href}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
