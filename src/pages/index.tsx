import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HeroAnimationSection from '@/components/HeroAnimationSection';
import Problem from '@/components/Problem';
import BlueCard from '@/components/BlueCard';
import Solution from '@/components/Solution';
import PricingSection from '@/components/Pricing';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden bg-white">
      <Navbar />
      <main>
        <Hero />
        <HeroAnimationSection />
        <Problem />
        <BlueCard />
        <Solution />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
