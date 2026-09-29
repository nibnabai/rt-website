import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { FhaHero } from '@/components/fha/FhaHero';
import { FhaProblem } from '@/components/fha/FhaProblem';
import { FhaSolution } from '@/components/fha/FhaSolution';
import { FhaHowItWorks } from '@/components/fha/FhaHowItWorks';
import { FhaPrevention } from '@/components/fha/FhaPrevention';
import { FhaReports } from '@/components/fha/FhaReports';
import { FhaAnalytics } from '@/components/fha/FhaAnalytics';
import { FhaOutcomes } from '@/components/fha/FhaOutcomes';
import { FhaFaq } from '@/components/fha/FhaFaq';
import { FhaCta } from '@/components/fha/FhaCta';

export const getStaticProps = () => {
  const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_HOST_URL ?? '';
  return {
    props: {
      meta: {
        title: 'FHA Compliance Monitoring — RipeText',
        description:
          'RipeText scans every customer conversation for Fair Housing Act risk — flagging problematic language, citing the exact statute, and estimating your exposure.',
        ogImage: `${siteUrl}/images/fha-compliance/social-share.png`,
        url: `${siteUrl}/fha-compliance`
      }
    }
  };
};

export default function FhaCompliancePage() {
  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden">
      <Navbar />

      <main>
        <FhaHero />
        <FhaProblem />
        <FhaSolution />
        <FhaHowItWorks />
        <FhaAnalytics />
        <FhaOutcomes />
        <FhaPrevention />
        <FhaReports />
        <FhaFaq />
        <FhaCta />
      </main>

      <Footer />
    </div>
  );
}
