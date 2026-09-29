import type { MetadataRoute } from 'next';
import { blog } from '@/lib/blog-source';
import { source } from '@/lib/source';
import { getSiteUrl, publicWebsiteRoutes, routeUrl } from '@/lib/aeo';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const staticPages: MetadataRoute.Sitemap = [
    ...publicWebsiteRoutes.map((path) => ({
      url: routeUrl(path, siteUrl),
      lastModified: new Date(),
      changeFrequency:
        path === '/blog'
          ? ('daily' as const)
          : path.includes('privacy') || path.includes('terms')
          ? ('yearly' as const)
          : ('weekly' as const),
      priority:
        path === '/'
          ? 1
          : path.startsWith('/features') || path === '/fha-compliance'
          ? 0.9
          : path === '/blog' || path === '/docs'
          ? 0.8
          : 0.5
    }))
  ];

  const docsPages: MetadataRoute.Sitemap = source.getPages().map((page) => ({
    url: `${siteUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page.url === '/docs' ? 0.8 : 0.7
  }));

  const blogPages: MetadataRoute.Sitemap = blog
    .getPages()
    .filter((p) => !p.data.draft)
    .map((page) => ({
      url: `${siteUrl}/blog/${page.slugs[0]}`,
      lastModified: new Date(page.data.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7
    }));

  return [...staticPages, ...docsPages, ...blogPages].filter(
    (page, index, pages) =>
      pages.findIndex((candidate) => candidate.url === page.url) === index
  );
}
