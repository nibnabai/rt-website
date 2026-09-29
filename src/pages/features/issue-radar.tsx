import Navbar from '@/components/Navbar';
import { IssueRadarHero } from '@/components/issue-radar/IssueRadarHero';
import { IssueRadarDemo } from '@/components/issue-radar/IssueRadarDemo';
import { IssueRadarIntegrations } from '@/components/issue-radar/IssueRadarIntegrations';
import { IssueRadarProblem } from '@/components/issue-radar/IssueRadarProblem';
import { IssueRadarSolution } from '@/components/issue-radar/IssueRadarSolution';
import { IssueRadarHowItWorks } from '@/components/issue-radar/IssueRadarHowItWorks';
import { IssueRadarOutcomes } from '@/components/issue-radar/IssueRadarOutcomes';
import { IssueRadarCta } from '@/components/issue-radar/IssueRadarCta';
import Footer from '@/components/Footer';

export const getStaticProps = () => {
  const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_HOST_URL ?? '';
  return {
    props: {
      meta: {
        title:
          'Issue Radar — Cluster, Detect & Prioritize Support Issues | RipeText',
        description:
          'Issue Radar clusters your support tickets by the underlying problem they report, measures how those clusters grow, and shows you the impact to your revenue.',
        ogImage: `${siteUrl}/images/features/issue-radar/social-share.png`,
        url: `${siteUrl}/features/issue-radar`
      }
    }
  };
};

export default function IssueRadarPage() {
  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden">
      <Navbar />

      <main>
        <IssueRadarHero />
        <IssueRadarIntegrations />
        <IssueRadarDemo />
        <IssueRadarProblem />
        <IssueRadarSolution />
        <IssueRadarHowItWorks />
        <IssueRadarOutcomes />
        <IssueRadarCta />
      </main>

      <Footer />
    </div>
  );
}
