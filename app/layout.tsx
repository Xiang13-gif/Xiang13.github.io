import type { Metadata } from "next";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl, profile, siteUrl } from "@/lib/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | ${profile.shortRole}`,
    template: `%s | ${profile.name}`
  },
  description: profile.metaDescription,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  alternates: { canonical: absoluteUrl() },
  keywords: [
    "Banking Business Analyst Malaysia",
    "Credit Operations Business Analyst",
    "Loan Origination System Analyst",
    "Financial IT Consultant",
    "Banking UAT Analyst",
    "FinTech Business Analyst"
  ],
  openGraph: {
    title: `${profile.name} | ${profile.shortRole}`,
    description: profile.metaDescription,
    type: "profile",
    url: absoluteUrl(),
    siteName: `${profile.name} Portfolio`,
    locale: "en_MY",
    images: [{ url: absoluteUrl("/projects/creditflow-workspace.png"), width: 1265, height: 712, alt: "CreditFlow banking BA portfolio case" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.shortRole}`,
    description: profile.metaDescription,
    images: [absoluteUrl("/projects/creditflow-workspace.png")]
  },
  icons: { icon: absoluteUrl("/favicon.svg") }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.shortRole,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Kuala Lumpur", addressCountry: "MY" },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: [
    "Banking business analysis",
    "Credit operations",
    "Loan origination systems",
    "Requirements analysis",
    "User acceptance testing",
    "Requirement traceability"
  ]
};

const themeInitScript = `
  (() => {
    try {
      const stored = localStorage.getItem("tz-portfolio-theme");
      const dark = stored ? stored === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", dark);
      document.documentElement.style.colorScheme = dark ? "dark" : "light";
    } catch {}
  })();
`;

const controlsScript = `
  (() => {
    const root = document.documentElement;
    const button = document.querySelector("[data-theme-toggle]");
    const syncTheme = () => button?.setAttribute("aria-pressed", root.classList.contains("dark") ? "true" : "false");
    button?.addEventListener("click", () => {
      const dark = !root.classList.contains("dark");
      root.classList.toggle("dark", dark);
      root.style.colorScheme = dark ? "dark" : "light";
      localStorage.setItem("tz-portfolio-theme", dark ? "dark" : "light");
      syncTheme();
    });
    document.querySelectorAll("[data-mobile-nav] a").forEach((link) => {
      link.addEventListener("click", () => link.closest("details")?.removeAttribute("open"));
    });
    syncTheme();
  })();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeInitScript }} /></head>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script dangerouslySetInnerHTML={{ __html: controlsScript }} />
        <script dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} type="application/ld+json" />
      </body>
    </html>
  );
}
