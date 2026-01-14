import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Work | dispatch.au',
    description: 'Examples of our high-converting websites for trades and services.',
};

export default function WorkPage() {
    const examples = [
        { title: 'Apex Plumbing', type: 'Trade', desc: '40% increase in quote requests in month 1.' },
        { title: 'Bright Spark Electrical', type: 'Trade', desc: 'Rebrand and lead-gen focused landing page.' },
        { title: 'Pristine Cleaners', type: 'Service', desc: 'Booking system integration and mobile optimization.' },
        { title: 'Green Thumb Landscaping', type: 'Trade', desc: 'Showcase gallery and local SEO setup.' },
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-12 md:pt-20">
                <Section>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Work</h1>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            We build clean, fast sites that get results. Here are a few examples of recent projects.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {examples.map((ex, i) => (
                            <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                                <div className="aspect-video bg-slate-100 flex items-center justify-center border-b border-border">
                                    <span className="text-slate-400 font-medium">Project Preview Image</span>
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-center mb-2">
                                        <CardTitle className="text-xl">{ex.title}</CardTitle>
                                        <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">{ex.type}</span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">{ex.desc}</p>
                                    <Button variant="outline" size="sm" className="w-full">View Case Study</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Want a site like these?</h3>
                        <Button href="/contact" size="lg">Get a free audit</Button>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
