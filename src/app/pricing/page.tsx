import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Packages } from '@/components/home/Packages';
import { FAQ } from '@/components/home/FAQ';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing | dispatch.au',
    description: 'Simple, transparent pricing for local business websites.',
};

export default function PricingPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-12 md:pt-20 pb-20">
                <div className="container mx-auto px-4 text-center mb-8">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Pricing</h1>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Choose the package that fits your business stage.
                    </p>
                </div>
                <Packages />
                <div className="mt-20">
                    <FAQ />
                </div>
            </main>
            <Footer />
        </>
    );
}
