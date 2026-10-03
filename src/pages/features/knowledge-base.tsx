import Footer from '@/components/Footer';
import { KnowledgeBaseAskIvy } from '@/components/knowledge-base/KnowledgeBaseAskIvy';
import { KnowledgeBaseCta } from '@/components/knowledge-base/KnowledgeBaseCta';
import { KnowledgeBaseFactReview } from '@/components/knowledge-base/KnowledgeBaseFactReview';
import { KnowledgeBaseHero } from '@/components/knowledge-base/KnowledgeBaseHero';
import { KnowledgeBaseHowItWorks } from '@/components/knowledge-base/KnowledgeBaseHowItWorks';
import { KnowledgeBaseProblem } from '@/components/knowledge-base/KnowledgeBaseProblem';
import { KnowledgeBaseTraining } from '@/components/knowledge-base/KnowledgeBaseTraining';
import { KnowledgeBaseTrust } from '@/components/knowledge-base/KnowledgeBaseTrust';
import Navbar from '@/components/Navbar';

export const getStaticProps = () => {
  const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_HOST_URL ?? '';

  return {
    props: {
      meta: {
        title:
          "Knowledge Base: Every Customer's Setup, Cited and Verified | RipeText",
        description:
          'Turn onboarding notes, runbooks and call transcripts into verified facts about each customer. Ivy answers with citations, and agents train on scenarios built from the real environment.',
        ogImage: `${siteUrl}/images/features/knowledge-base/social-share.png`,
        url: `${siteUrl}/features/knowledge-base`
      }
    }
  };
};

export default function KnowledgeBasePage() {
  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden">
      <Navbar />

      <main>
        <KnowledgeBaseHero />
        <KnowledgeBaseProblem />
        <KnowledgeBaseHowItWorks />
        <KnowledgeBaseFactReview />
        <KnowledgeBaseAskIvy />
        <KnowledgeBaseTraining />
        <KnowledgeBaseTrust />
        <KnowledgeBaseCta />
      </main>

      <Footer />
    </div>
  );
}
