import { blog } from '@/lib/blog-source';
import { BlogCard } from '@/components/blog/BlogCard';
import { createBreadcrumbJsonLd, getSiteUrl, serializeJsonLd } from '@/lib/aeo';

export default function BlogIndex() {
  const posts = blog
    .getPages()
    .filter((p) => !p.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    );
  const structuredData = createBreadcrumbJsonLd(
    [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' }
    ],
    getSiteUrl()
  );

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(structuredData)
        }}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((page) => (
          <BlogCard
            key={page.slugs[0]}
            title={page.data.title}
            description={page.data.description}
            date={String(page.data.date)}
            author={page.data.author}
            slug={page.slugs[0]}
            cover={page.data.cover}
          />
        ))}
      </div>
    </div>
  );
}
