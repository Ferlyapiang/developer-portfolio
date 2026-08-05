import type { MetadataRoute } from "next";
import { blogPosts, projects, services, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/services", "/blog", "/contact"].map(
    (path) => ({
      url: `${siteConfig.domain}${path}`,
      lastModified: new Date(),
    }),
  );

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.domain}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.domain}/services#${service.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.domain}/blog#${post.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes, ...blogRoutes];
}
