import { blog } from '@/lib/blog-source';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import { format } from 'date-fns';
import { readingTime } from '@/lib/reading-time';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { ExpandableImage } from '@/components/blog/ExpandableImage';
import { cdnUrl } from '@/util/cdn';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import {
  createBlogPostingJsonLd,
  createBreadcrumbJsonLd,
  getSiteUrl,
  serializeJsonLd
} from '@/lib/aeo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost(props: PageProps) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page || page.data.draft) notFound();

  const MDX = page.data.body;
  const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_HOST_URL ?? '';
  const aeoSiteUrl = getSiteUrl();
  const dateStr = String(page.data.date);
  const postPath = `/blog/${params.slug}`;
  const coverUrl = page.data.cover ? cdnUrl(page.data.cover) : undefined;
  const structuredData = [
    createBlogPostingJsonLd(
      {
        title: page.data.title,
        description: page.data.description,
        author: page.data.author,
        date: dateStr,
        path: postPath,
        image: coverUrl,
        tags: page.data.tags
      },
      aeoSiteUrl
    ),
    createBreadcrumbJsonLd(
      [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: page.data.title, path: postPath }
      ],
      aeoSiteUrl
    )
  ];

  return (
    <article className="mx-auto w-full max-w-[920px] px-5 py-12 sm:px-6 md:px-8 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(structuredData)
        }}
      />
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1.5 font-geist text-sm text-[#636a7e] transition-colors hover:text-lp-text-dark dark:text-fd-muted-foreground dark:hover:text-fd-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to blog
      </Link>

      {page.data.cover && (
        <ExpandableImage src={cdnUrl(page.data.cover)} alt={page.data.title}>
          <div className="relative mb-8 aspect-2/1 overflow-hidden rounded-lg border border-lp-divider bg-[#f6f6f9] shadow-card-light">
            <Image
              src={cdnUrl(page.data.cover)}
              alt={page.data.title}
              fill
              className="object-cover"
              unoptimized
              priority
            />
          </div>
        </ExpandableImage>
      )}

      <header className="mb-8 space-y-4">
        <h1 className="font-display text-[40px] leading-[1.08] tracking-tight text-lp-text-title lg:text-[60px] dark:text-fd-foreground">
          {page.data.title}
        </h1>
        {page.data.description && (
          <p className="font-geist text-base italic text-[#636a7e] dark:text-fd-muted-foreground">
            {page.data.description}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-3 font-geist text-sm text-[#636a7e] dark:text-fd-muted-foreground">
          <span className="font-medium text-lp-text-title dark:text-fd-foreground">
            {page.data.author}
          </span>
          <span>·</span>
          <time dateTime={dateStr}>
            {format(new Date(dateStr), 'MMMM d, yyyy')}
          </time>
          <span>·</span>
          <span>
            {readingTime(
              page.data.structuredData?.contents
                ?.map((c) => ('content' in c ? c.content : ''))
                .join(' ') ?? ''
            )}
          </span>
        </div>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none font-geist text-[#546087] dark:text-fd-muted-foreground prose-headings:font-geist prose-headings:font-semibold prose-headings:text-lp-text-title dark:prose-headings:text-fd-foreground prose-p:font-geist prose-p:text-[#546087] dark:prose-p:text-fd-muted-foreground prose-strong:font-geist prose-strong:font-semibold prose-strong:text-lp-text-title dark:prose-strong:text-fd-foreground prose-em:font-geist prose-em:italic prose-em:text-[#546087] dark:prose-em:text-fd-muted-foreground prose-a:font-geist prose-a:text-lp-accent-blue prose-a:hover:text-lp-text-title dark:prose-a:text-fd-primary dark:prose-a:hover:text-fd-foreground prose-li:font-geist prose-li:text-[#546087] dark:prose-li:text-fd-muted-foreground prose-blockquote:font-geist prose-blockquote:text-[#546087] dark:prose-blockquote:text-fd-muted-foreground prose-code:font-geist prose-code:font-normal prose-code:text-lp-text-title dark:prose-code:text-fd-foreground">
        <MDX components={getMDXComponents()} />
      </div>

      <footer className="mt-12 flex items-center justify-between border-t border-lp-divider pt-6 dark:border-fd-border">
        <ShareButtons
          title={page.data.title}
          url={`${siteUrl}/blog/${params.slug}`}
        />
        <Link
          href="/blog"
          className="font-geist text-sm text-[#636a7e] transition-colors hover:text-lp-text-dark dark:text-fd-muted-foreground dark:hover:text-fd-foreground"
        >
          ← All posts
        </Link>
      </footer>
    </article>
  );
}

export function generateStaticParams() {
  return blog
    .getPages()
    .filter((p) => !p.data.draft)
    .map((page) => ({ slug: page.slugs[0] }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_HOST_URL ?? '';
  const coverUrl = page.data.cover ? cdnUrl(page.data.cover) : '';
  // q must be a value in next.config's images.qualities, which defaults to
  // [75]. Next 15 accepted any 1-100, so q=80 silently became a 400 on the
  // Next 16 upgrade and every social preview lost its image.
  //
  // w=1920 rather than 1200: covers are 2:1, so w=1200 yields a 600px-tall
  // image and LinkedIn rejects anything under 1200x630. Next never upscales,
  // so this returns the source size (1774x887 today) and stays correct if a
  // cover is ever smaller.
  const imageUrl = coverUrl
    ? `${siteUrl}/_next/image?url=${encodeURIComponent(coverUrl)}&w=1920&q=75`
    : `${siteUrl}/social-share.png`;

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      type: 'article',
      publishedTime: String(page.data.date),
      authors: [page.data.author],
      tags: page.data.tags,
      // No width/height: the optimizer caps at the source image's size, which
      // varies per cover, and declaring dimensions that do not match what is
      // served is what made this look correct while LinkedIn rejected it.
      images: [imageUrl]
    },
    twitter: {
      card: 'summary_large_image',
      title: page.data.title,
      description: page.data.description,
      images: [imageUrl]
    },
    alternates: {
      canonical: `${siteUrl}/blog/${params.slug}`
    }
  };
}
