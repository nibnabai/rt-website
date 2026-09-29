import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | RipeText Blog',
    default: 'Blog | RipeText'
  },
  description:
    'Insights on customer experience, support intelligence, and building better conversations.',
  alternates: {
    types: {
      'application/rss+xml': '/blog/rss.xml'
    }
  }
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14 lg:pt-[89px]">{children}</main>
      <Footer />
    </>
  );
}
