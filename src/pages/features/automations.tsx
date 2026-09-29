import Footer from '@/components/Footer';
import { AutomationsActionTypes } from '@/components/automations/AutomationsActionTypes';
import { AutomationCta } from '@/components/automations/AutomationsCta';
import { AutomationsDestinations } from '@/components/automations/AutomationsDestinations';
import { AutomationsGap } from '@/components/automations/AutomationsGap';
import { AutomationsHowItWorks } from '@/components/automations/AutomationsHowItWorks';
import Navbar from '@/components/Navbar';
import { AutomationsHero } from '@/components/automations/AutomationsHero';
import { AutomationsWhyTeamsChooseIt } from '@/components/automations/AutomationsWhyTeamsChooseIt';

export const getStaticProps = () => {
  const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_HOST_URL ?? '';

  return {
    props: {
      meta: {
        title: 'Automations - Trigger Slack, Email & Webhooks | RipeText',
        description:
          'Turn QA failures, topic spikes, and score drops into instant Slack alerts, emails, and webhook actions without writing code.',
        ogImage: `${siteUrl}/images/features/automation/social-share.png`,
        url: `${siteUrl}/features/automations`
      }
    }
  };
};

export default function AutomationsPage() {
  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden">
      <Navbar />

      <main>
        <AutomationsHero />
        <AutomationsDestinations />
        <AutomationsGap />
        <AutomationsActionTypes />
        <AutomationsHowItWorks />
        <AutomationsWhyTeamsChooseIt />
        <AutomationCta />
      </main>

      <Footer />
    </div>
  );
}
