import Link from 'next/link';
import Image from 'next/image';
import { useCallback } from 'react';
import { cdnUrl } from '@/util/cdn';

const PRODUCT_LINKS = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'FAQ', href: '#faq' }
];

const LEGAL_LINKS = [
  { label: 'Privacy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms-of-service' }
];

const COMPANY_LINKS = [
  { label: 'About', href: '/team' },
  { label: 'Blog', href: '/blog' }
];

function FooterLink({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!href.startsWith('#')) return;
      const el = document.getElementById(href.slice(1));
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [href]
  );

  if (href.startsWith('#')) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className="text-[14px] leading-5 text-[#636a7e] transition-colors hover:text-[#151a28]"
      >
        {children}
      </a>
    );
  }

  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[14px] leading-5 text-[#636a7e] transition-colors hover:text-[#151a28]"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="text-[14px] leading-5 text-[#636a7e] transition-colors hover:text-[#151a28]"
    >
      {children}
    </Link>
  );
}

export function FhaFooter() {
  return (
    <footer className="border-t border-[#e3e6ed] bg-[#fcfcfd]">
      <div className="mx-auto max-w-[1400px] px-5 py-[49px] lg:px-8">
        {/* Top row: logo/tagline + link columns */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col gap-[23px] lg:col-span-5">
            <Link href="/" className="shrink-0">
              <Image
                src={cdnUrl('/images/fha-compliance/logo.png')}
                alt="RipeText"
                width={107}
                height={22}
                unoptimized
                className="h-[22px] w-auto object-contain"
              />
            </Link>
            <p className="text-[14px] leading-5 text-[#636a7e]">
              Where conversations become intelligence.
            </p>
          </div>

          {/* Right: 3 link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {/* Product */}
            <div className="flex flex-col gap-[17px]">
              <h4 className="text-[12px] font-semibold uppercase leading-4 tracking-[0.6px] text-[#151a28]">
                Product
              </h4>
              <ul className="flex flex-col gap-2">
                {PRODUCT_LINKS.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-[17px]">
              <h4 className="text-[12px] font-semibold uppercase leading-4 tracking-[0.6px] text-[#151a28]">
                Legal
              </h4>
              <ul className="flex flex-col gap-2">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-[17px]">
              <h4 className="text-[12px] font-semibold uppercase leading-4 tracking-[0.6px] text-[#151a28]">
                Company
              </h4>
              <ul className="flex flex-col gap-2">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row: copyright + disclaimer */}
        <div className="mt-[32px] flex flex-col gap-3 border-t border-[#e3e6ed] pt-6 sm:flex-row sm:items-start sm:justify-between">
          <p className="whitespace-nowrap text-[12px] leading-4 text-[#636a7e]">
            &copy; 2026 nibnab, Inc. (DBA RipeText). All rights reserved.
          </p>
          <p className="max-w-[450px] text-[12px] leading-4 text-[#636a7e] sm:text-right">
            RipeText is a compliance review tool. It does not provide legal
            advice and is not a substitute for qualified counsel.
          </p>
        </div>
      </div>
    </footer>
  );
}
