import React from 'react';
import Script from 'next/script';
import { CompatibleSpeedInsights } from './speed-insights';

export const GoogleAnalytics = () => (
  <>
    <CompatibleSpeedInsights />
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=G-G1SXP48SQZ`}
    />
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G1SXP48SQZ');
      `}
    </Script>
  </>
);
