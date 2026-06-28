import type { MetadataRoute } from "next";
import { dharmaArticles } from "@/data/articles";
import { emergencyGuides } from "@/data/emergency";
import { mindfulnessPractices } from "@/data/practices";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fengling999.github.io/----";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["", "/daily", "/emergency", "/articles", "/practice", "/about"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8
  }));

  const articleRoutes = dharmaArticles.map((article) => ({
    url: `${siteUrl}/articles/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const emergencyRoutes = emergencyGuides.map((guide) => ({
    url: `${siteUrl}/emergency/${guide.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const practiceRoutes = mindfulnessPractices.map((practice) => ({
    url: `${siteUrl}/practice/${practice.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...articleRoutes, ...emergencyRoutes, ...practiceRoutes];
}
