import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const CANONICAL_ORIGIN = 'https://ripetext.com';

// Hosts parked on this app purely so it can 301 them to CANONICAL_ORIGIN. The
// cluster's ingress controller cannot do this itself, see
// k8s/charts/rt-website/templates/redirect-domains-ingress.yaml
const REDIRECTED_HOSTS = ['nibnab.vip', 'www.nibnab.vip', 'www.ripetext.com'];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.cloudfront.net'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/features/ivy-the-ai-assistant',
        destination: '/features/ivy',
        permanent: true
      },
      ...REDIRECTED_HOSTS.map((host) => ({
        source: '/:path*',
        has: [{ type: 'host', value: host }],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        statusCode: 301
      }))
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' }
        ]
      }
    ];
  }
};

export default withMDX(nextConfig);
