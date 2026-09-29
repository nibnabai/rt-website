import Navbar from '@/components/Navbar';
import { TrainingHero } from '@/components/training/TrainingHero';
import { TrainingTheGap } from '@/components/training/TrainingTheGap';
import { TrainingHowItWorks } from '@/components/training/TrainingHowItWorks';
import { TrainingExtraNeeds } from '@/components/training/TrainingExtraNeeds';
import { TrainingOutcomes } from '@/components/training/TrainingOutcomes';
import { TrainingCta } from '@/components/training/TrainingCta';
import Footer from '@/components/Footer';
export const getStaticProps = () => {
  const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_HOST_URL ?? '';

  return {
    props: {
      meta: {
        title: 'AI Persona Training — Practice From Real QA Gaps | RipeText',
        description:
          'RipeText generates lifelike customer personas and drops each agent into scenarios built from their own QA gaps. Practice the hard conversations before they show up in the queue.',
        ogImage: `${siteUrl}/images/features/training/social-share.png`,
        url: `${siteUrl}/features/training`
      }
    }
  };
};

export default function TrainingPage() {
  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden">
      <Navbar />

      <main>
        <TrainingHero />
        <TrainingTheGap />
        <TrainingHowItWorks />
        <TrainingExtraNeeds />
        <TrainingOutcomes />
        <TrainingCta />
      </main>

      <Footer />
    </div>
  );
}
