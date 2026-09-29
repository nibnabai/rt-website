import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { cdnUrl } from '@/util/cdn';
import { ExpandableImage } from '@/components/blog/ExpandableImage';

type MdxImgSrc = string | { src?: string } | undefined;

function normalizeMdxImageSrc(src: MdxImgSrc): string | undefined {
  if (typeof src === 'string') return src;
  if (src && typeof src === 'object' && typeof src.src === 'string') {
    return src.src;
  }
  return undefined;
}

function BlogImg(props: React.ComponentProps<'img'>) {
  const rawSrc = normalizeMdxImageSrc(props.src);
  const src = rawSrc ? cdnUrl(rawSrc) : undefined;
  if (!src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} loading="lazy" />;
  }
  const alt = props.alt ?? '';
  return (
    <ExpandableImage src={src} alt={alt}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...props}
        src={src}
        alt={alt}
        loading="lazy"
        className="rounded-lg border border-border shadow-md"
      />
    </ExpandableImage>
  );
}

function BlogImage({ src, alt }: { src?: string; alt?: string }) {
  const resolvedSrc = src ? cdnUrl(src) : undefined;
  if (!resolvedSrc) return null;
  const resolvedAlt = alt ?? '';
  return (
    <ExpandableImage src={resolvedSrc} alt={resolvedAlt}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={resolvedSrc}
        alt={resolvedAlt}
        loading="lazy"
        className="rounded-lg border border-border shadow-md"
        style={{ maxWidth: '100%' }}
      />
    </ExpandableImage>
  );
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    img: BlogImg as MDXComponents['img'],
    BlogImage,
    ...components
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
