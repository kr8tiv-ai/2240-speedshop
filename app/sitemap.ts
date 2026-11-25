import type { MetadataRoute } from "next";
import { canonicalPageUrl, publicFileUrl, services, areas } from "@/lib/site";
import { builds } from "@/lib/builds";
import { articles } from "@/lib/blog/registry";

// Metadata routes must declare staticness explicitly under `output: export`.
export const dynamic = "force-static";

/**
 * Build case-study slugs come straight from lib/builds.ts ? the same array
 * that drives generateStaticParams ? so every URL emitted here resolves.
 * (A previous hand-maintained list had drifted and emitted 404s.)
 */
const buildSlugs = builds.map((b) => b.slug);

type Entry = MetadataRoute.Sitemap[number];

/** Shared lastmod for non-blog money URLs: shop moved to 4507 82 Ave NW (address in every footer). */
const SITE_LASTMOD = new Date("2026-11-25T00:00:00.000Z");

/** Home lastmod: new address 4507 82 Ave NW and its coordinates. */
const HOME_LASTMOD = new Date("2026-11-25T00:00:00.000Z");

/** Edmonton hub and area pages: drive times re-routed from 4507 82 Ave NW. */
const EDMONTON_LASTMOD = new Date("2026-11-25T00:00:00.000Z");

/** Machine-readable layer (llms.txt, markdown mirrors, IndexNow key). */
const AI_LAYER_LASTMOD = new Date("2026-11-25T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  // Journal entries use article dateModified. Other money URLs share SITE_LASTMOD
  // (repo HEAD author date at SEO brief implementation) so lastmod is stable across rebuilds.
  const url = canonicalPageUrl;

  const home: Entry = {
    url: url("/"),
    lastModified: HOME_LASTMOD,
    changeFrequency: "weekly",
    priority: 1,
  };

  // Money pages ? the six service pillars each own one keyword cluster.
  const serviceHub: Entry = {
    url: url("/services"),
    lastModified: SITE_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.9,
  };

  const servicePages: Entry[] = services.map((s) => ({
    url: url(`/services/${s.slug}`),
    lastModified: SITE_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Conversion.
  const quote: Entry = {
    url: url("/quote"),
    lastModified: SITE_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.9,
  };

  // Proof layer ? build case studies, one vehicle keyword each.
  const buildsHub: Entry = {
    url: url("/builds"),
    lastModified: SITE_LASTMOD,
    changeFrequency: "weekly",
    priority: 0.8,
  };

  const buildPages: Entry[] = buildSlugs.map((slug) => ({
    url: url(`/builds/${slug}`),
    lastModified: SITE_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Local hub + suburbs.
  const edmontonHub: Entry = {
    url: url("/edmonton"),
    lastModified: EDMONTON_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.8,
  };

  const areaPages: Entry[] = areas.map((a) => ({
    url: url(`/edmonton/${a.slug}`),
    lastModified: a.slug === "fort-saskatchewan" ? EDMONTON_LASTMOD : SITE_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Informational layer ? three pillar hubs.
  const guidesHub: Entry = {
    url: url("/guides"),
    lastModified: SITE_LASTMOD,
    changeFrequency: "weekly",
    priority: 0.7,
  };

  const guidePages: Entry[] = ["costs", "alberta-laws", "winter"].map((slug) => ({
    url: url(`/guides/${slug}`),
    lastModified: SITE_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // The Shop Journal ? editorial layer.
  const blogHub: Entry = {
    url: url("/blog"),
    lastModified: SITE_LASTMOD,
    changeFrequency: "weekly",
    priority: 0.7,
  };

  const blogPages: Entry[] = articles.map((a) => ({
    url: url(`/blog/${a.meta.slug}`),
    lastModified: new Date(`${a.meta.dateModified}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Trust and contact.
  const support: Entry[] = [
    { url: url("/faq"), lastModified: SITE_LASTMOD, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/contact"), lastModified: SITE_LASTMOD, changeFrequency: "yearly", priority: 0.7 },
    { url: url("/reviews"), lastModified: SITE_LASTMOD, changeFrequency: "monthly", priority: 0.6 },
    { url: url("/about"), lastModified: SITE_LASTMOD, changeFrequency: "yearly", priority: 0.6 },
  ];


  // Machine-readable copies for crawlers. Same facts as the HTML pages; not advertised in the UI.
  const markdownPages: Entry[] = [
    "/index.md",
    "/about.md",
    "/services.md",
    "/contact.md",
    "/edmonton.md",
    "/quote.md",
    "/faq.md",
    "/reviews.md",
    "/guides.md",
    ...services.map((s) => `/services/${s.slug}.md`),
  ].map((path) => ({
    url: publicFileUrl(path),
    lastModified: path === "/edmonton.md" ? EDMONTON_LASTMOD : AI_LAYER_LASTMOD,
    changeFrequency: "monthly" as const,
    priority: 0.3,
  }));

  const aiFiles: Entry[] = ["/llms.txt", "/llms-full.txt"].map((path) => ({
    url: publicFileUrl(path),
    lastModified: AI_LAYER_LASTMOD,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  return [
    home,
    serviceHub,
    ...servicePages,
    quote,
    buildsHub,
    ...buildPages,
    edmontonHub,
    ...areaPages,
    guidesHub,
    ...guidePages,
    blogHub,
    ...blogPages,
    ...support,
    ...markdownPages,
    ...aiFiles,
  ];
}
