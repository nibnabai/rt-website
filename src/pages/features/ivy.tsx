import Footer from '@/components/Footer';
import { IvyAskSection } from '@/components/ivy-assistant/IvyAskSection';
import { IvyCapabilities } from '@/components/ivy-assistant/IvyCapabilities';
import { IvyCta } from '@/components/ivy-assistant/IvyCta';
import { IvyTheShift } from '@/components/ivy-assistant/IvyTheShift';
import { IvyTrust } from '@/components/ivy-assistant/IvyTrust';
import { IvyHero } from '@/components/ivy-assistant/IvyHero';
import { IvyWorkspaceMockup } from '@/components/ivy-assistant/IvyWorkspaceMockup';
import Navbar from '@/components/Navbar';

export const getStaticProps = () => {
  const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_HOST_URL ?? '';

  return {
    props: {
      meta: {
        title:
          'Ivy — Your AI Teammate. Knowledgeable, Skilled, Proactive | RipeText',
        description:
          'Ivy is your AI CX Data Scientist. Not just an assistant — she answers your questions, identifies your blind spots, and keeps an eye on every detail of how your customer conversations develop, 24/7.',
        ogImage: `${siteUrl}/images/features/ivy/social-share.png`,
        url: `${siteUrl}/features/ivy`
      }
    }
  };
};

export default function IvyAssistantPage() {
  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden">
      <Navbar />

      <main>
        <IvyHero />
        <IvyWorkspaceMockup />
        <IvyCapabilities />
        <IvyAskSection />
        <IvyTheShift />
        <IvyTrust />
        <IvyCta />
      </main>

      <Footer />
    </div>
  );
}
