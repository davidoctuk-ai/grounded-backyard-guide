import type { MetadataRoute } from "next";

const baseUrl = "https://grounded-backyard-guide.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "", "/guides", "/guides/small-space-vegetable-garden-plan",
    "/guides/rain-barrel-sizing-guide", "/guides/home-project-quote-checklist",
    "/starter-plan", "/home-services", "/current-offers", "/about", "/disclosure", "/privacy",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
