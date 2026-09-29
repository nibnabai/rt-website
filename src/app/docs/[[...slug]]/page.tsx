import { source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import type { Metadata } from 'next';
import { createBreadcrumbJsonLd, getSiteUrl, serializeJsonLd } from '@/lib/aeo';

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const slug = params.slug ?? [];
  const pagePath = slug.length ? `/docs/${slug.join('/')}` : '/docs';
  const structuredData = createBreadcrumbJsonLd(
    [
      { name: 'Home', path: '/' },
      { name: 'Docs', path: '/docs' },
      ...(slug.length ? [{ name: page.data.title, path: pagePath }] : [])
    ],
    getSiteUrl()
  );

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(structuredData)
        }}
      />
      <DocsTitle className="font-display text-4xl font-semibold tracking-tight text-lp-text-title md:text-5xl dark:text-fd-foreground">
        {page.data.title}
      </DocsTitle>
      <DocsDescription className="font-geist text-base text-[#636a7e] dark:text-fd-muted-foreground">
        {page.data.description}
      </DocsDescription>
      <DocsBody className="font-geist prose prose-neutral dark:prose-invert max-w-none text-[#546087] dark:text-fd-muted-foreground prose-headings:font-geist prose-headings:font-semibold prose-headings:text-lp-text-title dark:prose-headings:text-fd-foreground prose-p:text-[#546087] dark:prose-p:text-fd-muted-foreground prose-strong:font-semibold prose-strong:text-lp-text-title dark:prose-strong:text-fd-foreground prose-em:italic prose-li:text-[#546087] dark:prose-li:text-fd-muted-foreground prose-code:font-geist prose-code:font-normal prose-code:text-lp-text-title dark:prose-code:text-fd-foreground">
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page)
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description
  };
}
