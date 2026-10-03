import Image from 'next/image';
import Link from 'next/link';
import { cdnUrl } from '@/util/cdn';

interface FooterLink {
  label: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Product',
    links: [
      { label: 'Home', href: '/#home' },
      { label: 'FHA Compliance', href: '/fha-compliance' },
      { label: 'Issue Radar', href: '/features/issue-radar' },
      { label: 'Automated QA', href: '/features/automated-qa' },
      { label: 'Training', href: '/features/training' },
      { label: 'Topic Discovery', href: '/features/topic-discovery' },
      { label: 'Ivy', href: '/features/ivy' },
      { label: 'Automations', href: '/features/automations' },
      { label: 'Knowledge Base', href: '/features/knowledge-base' }
    ]
  },
  {
    heading: 'Company',
    links: [
      { label: 'Team', href: '/team' },
      { label: 'Contact', href: 'mailto:sales@ripetext.com', external: true }
    ]
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Docs', href: '/docs' },
      { label: 'Blog', href: '/blog' }
    ]
  },
  {
    heading: 'Connect',
    links: [
      {
        label: 'Linkedin',
        href: 'https://www.linkedin.com/showcase/ripetext/',
        external: true
      },
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/nibnab.fb',
        external: true
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/nibnabai/',
        external: true
      },
      { label: 'X', href: 'https://x.com/nibnab_ai', external: true }
    ]
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' }
    ]
  }
];

const FooterLinkItem = ({ link }: { link: FooterLink }) => {
  if (link.disabled) {
    return (
      <span className="text-sm leading-[20px] text-[#636a7e] opacity-50">
        {link.label}
      </span>
    );
  }

  if (link.external) {
    return (
      <a
        href={link.href}
        target={link.href.startsWith('mailto:') ? undefined : '_blank'}
        rel={
          link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'
        }
        className="text-sm leading-[20px] text-[#636a7e] hover:text-[#151a28] transition-colors"
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link
      href={link.href}
      className="text-sm leading-[20px] text-[#636a7e] hover:text-[#151a28] transition-colors"
    >
      {link.label}
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-[#e3e6ed] bg-[#fcfcfd]">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/">
              <Image
                src={cdnUrl('/images/fha-compliance/logo.png')}
                alt="RipeText"
                width={107}
                height={22}
                unoptimized
                className="h-[22px] w-auto object-contain"
              />
            </Link>
            <p className="mt-[23px] max-w-[384px] text-sm leading-[20px] text-[#636a7e]">
              Where conversations become intelligence.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.heading} className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.6px] text-[#151a28] leading-[16px]">
                  {column.heading}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <FooterLinkItem link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#e3e6ed] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs leading-[16px] text-[#636a7e]">
          <p>&copy; 2026 nibnab, Inc. (DBA RipeText) All rights reserved.</p>
          <p className="sm:text-right">
            RipeText is a compliance review tool. It does not provide legal
            advice and is not a substitute for qualified counsel.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
