'use client';

import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useRouter } from 'next/router';

// Speed Insights component compatible with Next.js versions < 13.3
// This component uses the React version and manually provides the route
export const CompatibleSpeedInsights = () => {
  const router = useRouter();

  return <SpeedInsights route={router.asPath} />;
};
