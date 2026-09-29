import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import { CrispChat } from '@/components/crisp-chat';
import {
  createOrganizationJsonLd,
  createWebsiteJsonLd,
  getSiteUrl,
  serializeJsonLd
} from '@/lib/aeo';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_WEBSITE_HOST_URL ?? 'https://ripetext.com'
  ),
  title: 'RipeText',
  description: 'A Performance OS for Support Teams',
  openGraph: {
    type: 'website',
    siteName: 'RipeText',
    title: 'RipeText',
    description: 'A Performance OS for Support Teams',
    images: [{ url: '/social-share.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RipeText',
    description: 'A Performance OS for Support Teams',
    images: ['/social-share.png']
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = [
    createOrganizationJsonLd(siteUrl),
    createWebsiteJsonLd(siteUrl)
  ];

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="flex flex-col min-h-screen font-sans">
        <RootProvider
          theme={{
            defaultTheme: 'light',
            attribute: 'class'
          }}
        >
          {children}
        </RootProvider>
        <CrispChat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(structuredData)
          }}
        />
      </body>
    </html>
  );
}
