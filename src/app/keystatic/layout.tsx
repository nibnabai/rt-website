import { ImageUploadWidget } from '@/components/blog/ImageUploadWidget';

export default function KeystaticLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ImageUploadWidget />
    </>
  );
}
