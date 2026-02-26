import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { caseStudies } from "@/content/caseStudies";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/services",
    "/services/workflow-audit",
    "/services/workshops",
    "/services/automations",
    "/case-studies",
    "/about",
    "/blog",
    "/contact",
    "/legal/privacy",
    "/legal/terms"
  ];

  const pageEntries = pages.map((page) => ({
    url: `${siteConfig.url}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1 : 0.7
  }));

  const caseStudyEntries = caseStudies.map((study) => ({
    url: `${siteConfig.url}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65
  }));

  const postEntries = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...pageEntries, ...caseStudyEntries, ...postEntries];
}
