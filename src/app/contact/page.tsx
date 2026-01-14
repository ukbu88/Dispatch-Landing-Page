import { AuditForm } from '@/components/forms/AuditForm';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | dispatch.au',
    description: 'Get in touch for a free site audit. Websites for trades and local services.',
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-12 md:pt-20">
                <div className="container mx-auto px-4 text-center mb-8">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Ready to upgrade your online presence? Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                </div>
                <AuditForm />
            </main>
            <Footer />
        </>
    );
}
