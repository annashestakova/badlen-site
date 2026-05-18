import type { MetadataRoute } from "next";

const routes = [
  "",
  "/corsets",
  "/corset-constructor",
  "/measurements-guide",
  "/wedding-dresses",
  "/evening-dresses",
  "/atelier",
  "/about",
  "/lookbook",
  "/fabrics",
  "/prices",
  "/contacts",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `https://www.badelen.by${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
