import { blog } from '@/lib/blog-source';

export async function GET() {
  const siteUrl =
    process.env.NEXT_PUBLIC_WEBSITE_HOST_URL ?? 'https://ripetext.com';

  const posts = blog
    .getPages()
    .filter((p) => !p.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    );

  const escapeXml = (s: string) =>
    s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');

  const items = posts
    .map(
      (page) => `    <item>
      <title>${escapeXml(page.data.title)}</title>
      <link>${siteUrl}/blog/${page.slugs[0]}</link>
      <description>${escapeXml(page.data.description ?? '')}</description>
      <pubDate>${new Date(page.data.date).toUTCString()}</pubDate>
      <guid>${siteUrl}/blog/${page.slugs[0]}</guid>
      ${page.data.tags
        .map((t: string) => `<category>${escapeXml(t)}</category>`)
        .join('\n      ')}
    </item>`
    )
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>RipeText Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Insights on customer experience, support intelligence, and building better conversations.</description>
    <language>en</language>
    <atom:link href="${siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}
