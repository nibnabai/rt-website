import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamHero from '@/components/team/TeamHero';
import TeamGrid from '@/components/team/TeamGrid';
import Head from 'next/head';

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Team - RipeText</title>
        <meta
          name="description"
          content="Meet the team behind RipeText - building the future of customer support intelligence."
        />
        <meta property="og:title" content="Team - RipeText" />
        <meta
          property="og:description"
          content="Meet the team behind RipeText - building the future of customer support intelligence."
        />
      </Head>
      <div className="min-h-screen scroll-smooth overflow-x-hidden">
        <Navbar />
        <main className="pt-[70px]">
          <TeamHero />
          <TeamGrid />
        </main>
        <Footer />
      </div>
    </>
  );
}
