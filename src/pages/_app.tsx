import { useEffect } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import posthog from 'posthog-js';
import { Router } from 'next/router';
import { useRouter } from 'next/router';
import { env } from '@/env';
import { GoogleAnalytics } from '@/analytics/google';
import { CrispChat } from '@/components/crisp-chat';
import {
  createBreadcrumbJsonLd,
  createOrganizationJsonLd,
  createSoftwareJsonLd,
  createWebsiteJsonLd,
  type JsonLd,
  productRouteFacts,
  serializeJsonLd
} from '@/lib/aeo';

interface PageMeta {
  title: string;
  description: string;
  ogImage: string;
  url: string;
}

export default function App({ Component, pageProps }: AppProps) {
  const siteUrl = env.client.NEXT_PUBLIC_WEBSITE_HOST_URL;
  const router = useRouter();

  const routeFact = productRouteFacts[router.pathname];

  const defaultMeta: PageMeta = {
    title: 'RipeText',
    description: 'A Performance OS for Support Teams',
    ogImage: `${siteUrl}/social-share.png`,
    url: siteUrl
  };

  const meta: PageMeta = pageProps.meta ?? defaultMeta;
  const softwareJsonLd = createSoftwareJsonLd(router.pathname, siteUrl);
  const structuredData: JsonLd | JsonLd[] =
    pageProps.structuredData ??
    (routeFact && softwareJsonLd
      ? [
          createOrganizationJsonLd(siteUrl),
          createWebsiteJsonLd(siteUrl),
          softwareJsonLd,
          createBreadcrumbJsonLd(
            [
              { name: 'Home', path: '/' },
              { name: routeFact.name, path: router.pathname }
            ],
            siteUrl
          )
        ]
      : [createOrganizationJsonLd(siteUrl), createWebsiteJsonLd(siteUrl)]);

  useEffect(() => {
    if (env.client.NEXT_PUBLIC_POSTHOG_API_KEY) {
      posthog.init(env.client.NEXT_PUBLIC_POSTHOG_API_KEY, {
        api_host:
          env.client.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: false,
        loaded: (posthog) => {
          if (env.server.NODE_ENV === 'development') posthog.debug();
        }
      });
    }

    const handleRouteChange = () => posthog?.capture('$pageview');

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="RipeText" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={meta.url} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.ogImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(structuredData)
          }}
        />
      </Head>

      <GoogleAnalytics />
      <CrispChat />
      <Component {...pageProps} />
    </>
  );
}
