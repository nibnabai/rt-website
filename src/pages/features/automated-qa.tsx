import Navbar from '@/components/Navbar';
import { AutomatedQaHero } from '@/components/automated-qa/AutomatedQaHero';
import { AutomatedQaProductMockup } from '@/components/automated-qa/AutomatedQaProductMockup';
import { AutomatedQaStatusQuo } from '@/components/automated-qa/AutomatedQaStatusQuo';
import { AutomatedQaWhatWeScore } from '@/components/automated-qa/AutomatedQaWhatWeScore';
import { AutomatedQaDrilldown } from '@/components/automated-qa/AutomatedQaDrilldown';
import { AutomatedQaCta } from '@/components/automated-qa/AutomatedQaCta';
import { LpIntegrationsBanner } from '@/components/lp/LpIntegrationsBanner';
import Footer from '@/components/Footer';

export const getStaticProps = () => {
  const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_HOST_URL ?? '';

  return {
    props: {
      meta: {
        title: 'Automated Support QA — Score Every Conversation | RipeText',
        description:
          'Grade every support ticket across six QA dimensions—automatically. From team overview to one message, see why a conversation went wrong in two clicks.',
        ogImage: `${siteUrl}/images/features/automated-qa/social-share.png`,
        url: `${siteUrl}/features/automated-qa`
      }
    }
  };
};

export default function AutomatedQaPage() {
  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden">
      <Navbar />

      <main>
        <AutomatedQaHero />
        <AutomatedQaProductMockup />
        <LpIntegrationsBanner />
        <AutomatedQaStatusQuo />
        <AutomatedQaWhatWeScore />
        <AutomatedQaDrilldown />
        <AutomatedQaCta />
      </main>

      <Footer />
    </div>
  );
}
