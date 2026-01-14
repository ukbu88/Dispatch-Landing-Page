import { Hero } from '@/components/home/Hero';
import { OutcomeBlocks } from '@/components/home/OutcomeBlocks';
import { WhoItsFor } from '@/components/home/WhoItsFor';
import { Packages } from '@/components/home/Packages';
import { Process } from '@/components/home/Process';
import { FAQ } from '@/components/home/FAQ';
import { FinalCTA } from '@/components/home/FinalCTA';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        <OutcomeBlocks />
        <WhoItsFor />
        <Process />
        <Packages />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
