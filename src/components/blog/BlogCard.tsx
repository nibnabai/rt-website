import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { cdnUrl } from '@/util/cdn';

interface BlogCardProps {
  title: string;
  description?: string;
  date: string;
  author: string;
  slug: string;
  cover?: string;
}

export function BlogCard({
  title,
  description,
  date,
  author,
  slug,
  cover
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-lp-divider bg-white shadow-card-light transition-shadow duration-200 hover:shadow-card-strong"
    >
      {cover && (
        <div className="relative aspect-video overflow-hidden bg-[#f6f6f9]">
          <Image
            src={cdnUrl(cover)}
            alt={title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2 font-geist text-sm text-[#636a7e]">
          <time dateTime={date}>{format(new Date(date), 'MMM d, yyyy')}</time>
          <span>·</span>
          <span>{author}</span>
        </div>
        <h3 className="line-clamp-2 font-geist text-lg font-semibold leading-snug text-lp-text-title transition-colors group-hover:text-lp-accent-blue">
          {title}
        </h3>
        {description && (
          <p className="line-clamp-3 flex-1 font-geist text-sm text-[#636a7e]">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}
