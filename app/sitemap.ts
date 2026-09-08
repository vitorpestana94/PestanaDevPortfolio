import type { MetadataRoute } from "next";

const baseUrl = "https://www.pestanadev.com.br";

const routes = [
  "",
  "/art-exhibition",
  "/nasa",
  "/privacy-policy",
  "/terms-and-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ["pt", "en"].flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
    }))
  );
}