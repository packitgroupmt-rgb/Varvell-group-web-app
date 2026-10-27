import type { MetadataRoute } from "next";

const baseUrl = "https://www.varvellgroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/construction",
    "/hospitality",
    "/logistics",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/legal-notice"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
