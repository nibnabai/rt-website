/**
 * Converts a local image path to a CDN URL.
 * Falls back to local path if CDN is not configured (local development).
 *
 * @param imagePath - The local image path (e.g., '/images/hero-section/logo.webp')
 * @returns The CDN URL or the original path if CDN is not configured
 *
 * @example
 * With CDN configured (production):
 * cdnUrl('/images/logo.webp') => 'https://d1234.cloudfront.net/images/logo.webp'
 *
 * Without CDN configured (local development):
 * cdnUrl('/images/logo.webp') => '/images/logo.webp'
 */
export const cdnUrl = (imagePath: string): string => {
  if (
    imagePath.startsWith('http') ||
    imagePath.startsWith('/_next/') ||
    process.env.NODE_ENV !== 'production'
  ) {
    return imagePath;
  }

  const cdnBase = process.env.NEXT_PUBLIC_CDN_URL;

  if (!cdnBase) return imagePath;

  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;

  return `${cdnBase}/${cleanPath}`;
};
