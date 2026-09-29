import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { TopicDiscoveryHero } from '@/components/topic-discovery/TopicDiscoveryHero';
import {
  TopicDiscoveryBlindSpot,
  TopicDiscoveryCta,
  TopicDiscoveryHowItWorks,
  TopicDiscoveryOutcomes,
  TopicDiscoveryTailoring
} from '@/components/topic-discovery/TopicDiscoverySections';

export const getStaticProps = () => {
  const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_HOST_URL ?? '';

  return {
    props: {
      meta: {
        title:
          'Topic Discovery — Find Emerging Customer Issues Earlier | RipeText',
        description:
          'RipeText reads every ticket, groups them into living topics, and surfaces spikes before they turn into escalations.',
        ogImage: `${siteUrl}/images/features/topic-discovery/social-share.png`,
        url: `${siteUrl}/features/topic-discovery`
      }
    }
  };
};

export default function TopicDiscoveryPage() {
  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden">
      <Navbar />

      <main>
        <TopicDiscoveryHero />
        <TopicDiscoveryBlindSpot />
        <TopicDiscoveryHowItWorks />
        <TopicDiscoveryTailoring />
        <TopicDiscoveryOutcomes />
        <TopicDiscoveryCta />
      </main>

      <Footer />
    </div>
  );
}
