export type JsonLd = Record<string, unknown>;

export const DEFAULT_SITE_URL = 'https://www.ripetext.com';

export const RIPE_TEXT_DESCRIPTION =
  'RipeText is a Performance OS for support teams that analyzes customer conversations to uncover QA gaps, recurring issues, sentiment trends, automation opportunities, and training needs.';

export const FHA_COMPLIANCE_DESCRIPTION =
  'RipeText FHA Compliance applies the same conversation intelligence platform to leasing and property-management communications to detect risky fair housing language early.';

export const publicWebsiteRoutes = [
  '/',
  '/features/automated-qa',
  '/features/automations',
  '/features/issue-radar',
  '/features/ivy',
  '/features/topic-discovery',
  '/features/training',
  '/fha-compliance',
  '/blog',
  '/docs',
  '/team',
  '/privacy-policy',
  '/terms-of-service'
];

export const productRouteFacts: Record<
  string,
  {
    name: string;
    description: string;
  }
> = {
  '/': {
    name: 'RipeText',
    description: RIPE_TEXT_DESCRIPTION
  },
  '/features/automated-qa': {
    name: 'Automated Support QA',
    description:
      'RipeText scores support conversations and helps support teams understand quality gaps across every customer interaction.'
  },
  '/features/automations': {
    name: 'Automations',
    description:
      'RipeText Automations triggers Slack messages, emails, and webhooks when support quality, topic volume, or performance signals cross the thresholds you define.'
  },
  '/features/issue-radar': {
    name: 'Issue Radar',
    description:
      'RipeText Issue Radar clusters support conversations by underlying customer problems and helps teams prioritize growing issues.'
  },
  '/features/ivy': {
    name: 'Ivy AI Teammate',
    description:
      "Ivy is RipeText's AI support analyst that answers natural-language questions about agent performance, issue trends, customer risk, and training opportunities."
  },
  '/features/topic-discovery': {
    name: 'Topic Discovery',
    description:
      'RipeText Topic Discovery groups support conversations into living topics and surfaces emerging customer issues.'
  },
  '/features/training': {
    name: 'AI Persona Training',
    description:
      'RipeText AI Persona Training creates practice scenarios from real QA gaps so agents can rehearse difficult support conversations.'
  },
  '/fha-compliance': {
    name: 'FHA Compliance Monitoring',
    description: FHA_COMPLIANCE_DESCRIPTION
  }
};

export function getSiteUrl(siteUrl?: string) {
  return (
    siteUrl ||
    process.env.NEXT_PUBLIC_WEBSITE_HOST_URL ||
    DEFAULT_SITE_URL
  ).replace(/\/+$/, '');
}

export function absoluteUrl(pathOrUrl: string, siteUrl?: string) {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${getSiteUrl(siteUrl)}${path}`;
}

export function routeUrl(path: string, siteUrl?: string) {
  if (path === '/') return getSiteUrl(siteUrl);
  return absoluteUrl(path, siteUrl);
}

export function createOrganizationJsonLd(siteUrl?: string): JsonLd {
  const baseUrl = getSiteUrl(siteUrl);

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'RipeText',
    legalName: 'nibnab, Inc.',
    url: baseUrl,
    logo: absoluteUrl('/images/ripetext-new-logo.webp', baseUrl),
    description: RIPE_TEXT_DESCRIPTION
  };
}

export function createWebsiteJsonLd(siteUrl?: string): JsonLd {
  const baseUrl = getSiteUrl(siteUrl);

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: 'RipeText',
    url: baseUrl,
    description: RIPE_TEXT_DESCRIPTION,
    publisher: {
      '@id': `${baseUrl}/#organization`
    }
  };
}

export function createSoftwareJsonLd(
  path: string,
  siteUrl?: string
): JsonLd | null {
  const fact = productRouteFacts[path];
  if (!fact) return null;

  const baseUrl = getSiteUrl(siteUrl);

  return {
    '@context': 'https://schema.org',
    '@type': ['SoftwareApplication', 'Product'],
    '@id': `${routeUrl(path, baseUrl)}#software`,
    name: fact.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: routeUrl(path, baseUrl),
    description: fact.description,
    brand: {
      '@id': `${baseUrl}/#organization`
    },
    provider: {
      '@id': `${baseUrl}/#organization`
    },
    featureList: [
      'Automated support QA',
      'Issue detection',
      'Topic discovery',
      'Sentiment trend analysis',
      'Automation opportunity detection',
      'AI persona training',
      'Fair housing compliance monitoring'
    ]
  };
}

export function createBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
  siteUrl?: string
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: routeUrl(item.path, siteUrl)
    }))
  };
}

export function createBlogPostingJsonLd(
  post: {
    title: string;
    description?: string;
    author: string;
    date: string;
    path: string;
    image?: string;
    tags?: string[];
  },
  siteUrl?: string
): JsonLd {
  const baseUrl = getSiteUrl(siteUrl);

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author
    },
    publisher: {
      '@id': `${baseUrl}/#organization`
    },
    mainEntityOfPage: routeUrl(post.path, baseUrl),
    image: post.image
      ? absoluteUrl(post.image, baseUrl)
      : absoluteUrl('/social-share.png', baseUrl),
    keywords: post.tags
  };
}

export function serializeJsonLd(data: JsonLd | JsonLd[]) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
