import { Hero } from '@/components/home/Hero';
import { InfiniteMarquee } from '@/components/home/InfiniteMarquee';
import { CountUpStats } from '@/components/home/CountUpStats';
import { OutcomeBlocks } from '@/components/home/OutcomeBlocks';
import { StickyScrollShowcase } from '@/components/home/StickyScrollShowcase';
import { WhoItsFor } from '@/components/home/WhoItsFor';
import { Packages } from '@/components/home/Packages';
import { Process } from '@/components/home/Process';
import { FAQ } from '@/components/home/FAQ';
import { FinalCTA } from '@/components/home/FinalCTA';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingCTA } from '@/components/ui/FloatingCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        <InfiniteMarquee />
        <CountUpStats />
        <OutcomeBlocks />
        <StickyScrollShowcase />
        <WhoItsFor />
        <Process />
        <Packages />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
