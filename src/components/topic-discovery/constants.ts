import type { CSSProperties } from 'react';

export const AURORA_STYLE: CSSProperties = {
  backgroundImage:
    'radial-gradient(ellipse 18% 14% at 44% 8%, rgba(0,123,173,0.1) 0%, rgba(248,248,251,0) 72%)'
};

export const TRENDING_TOPICS = [
  {
    rank: '01',
    title: 'Card declined at checkout',
    meta: '184 tickets · 24h',
    delta: '+38%',
    positive: true,
    dot: '#ef5350'
  },
  {
    rank: '02',
    title: '2FA email never arrives',
    meta: '121 tickets · 24h',
    delta: '+62%',
    positive: true,
    dot: '#ef5350'
  },
  {
    rank: '03',
    title: 'Export to CSV missing rows',
    meta: '74 tickets · 24h',
    delta: '+12%',
    positive: true,
    dot: '#bcc1cb'
  },
  {
    rank: '04',
    title: 'Mobile app crashes on launch',
    meta: '58 tickets · 24h',
    delta: '+9%',
    positive: true,
    dot: '#ef5350'
  },
  {
    rank: '05',
    title: 'Refund taking longer than 5 days',
    meta: '42 tickets · 24h',
    delta: '-4%',
    positive: false,
    dot: '#bcc1cb'
  },
  {
    rank: '06',
    title: 'Praise: new dashboard',
    meta: '29 tickets · 24h',
    delta: '+18%',
    positive: true,
    dot: '#43a047'
  },
  {
    rank: '07',
    title: 'Login session expires too quickly',
    meta: '23 tickets · 24h',
    delta: '-6%',
    positive: false,
    dot: '#bcc1cb'
  }
] as const;

export const CLUSTER_QUOTES = [
  {
    text: '"both codes together"',
    className: 'left-[6%] top-[18%] sm:left-[5%] sm:top-[22%]'
  },
  {
    text: '"promo not combining"',
    className: 'left-[24%] top-[4%] sm:left-[29%] sm:top-[15%]'
  },
  {
    text: '"stacked discount stopped"',
    className: 'right-[4%] top-[18%] sm:right-[7%] sm:top-[24%]'
  },
  {
    text: '"used referral and promo"',
    className: 'left-[2%] top-[62%] sm:left-[5%] sm:top-[59%]'
  },
  {
    text: '"coupon worked before"',
    className: 'left-[35%] top-[82%] sm:left-[41%] sm:top-[70%]'
  },
  {
    text: '"why second code failed"',
    className: 'right-[1.5%] top-[61%] sm:right-[2%] sm:top-[58%]'
  }
] as const;

export const METRICS = [
  { label: 'Sentiment', value: 'Negative · 91%', tone: 'text-[#e64343]' },
  { label: 'Segment', value: 'EU · Visa', tone: 'text-[#101116]' },
  { label: 'First seen', value: '14h ago', tone: 'text-[#101116]' }
] as const;
