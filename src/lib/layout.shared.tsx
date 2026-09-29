import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Navbar from '@/components/Navbar';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      component: <Navbar />
    },
    links: [
      {
        text: 'Home',
        url: '/docs'
      }
    ]
  };
}
