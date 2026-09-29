import { notFound } from 'next/navigation';
import { ImageUploadWidget } from '@/components/blog/ImageUploadWidget';

export default function KeystaticLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // The editor writes to local files, so it only exists on a dev server.
  if (process.env.NODE_ENV !== 'development') {
    notFound();
  }

  return (
    <>
      {children}
      <ImageUploadWidget />
    </>
  );
}
