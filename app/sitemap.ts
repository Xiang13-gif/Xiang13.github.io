import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/data/profile";
import { projects } from "@/lib/data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/experience", "/projects", "/about", "/resume", "/contact"];
  return [
    ...routes.map((route) => ({
      url: absoluteUrl(route),
      changeFrequency: route === "" ? ("monthly" as const) : ("yearly" as const),
      priority: route === "" ? 1 : route === "/projects" ? 0.9 : 0.7
    })),
    ...projects.map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      changeFrequency: "yearly" as const,
      priority: project.type === "Portfolio Project" ? 0.9 : 0.75
    }))
  ];
}
