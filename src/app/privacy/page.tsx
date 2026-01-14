import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | dispatch.au',
    description: 'Privacy policy for dispatch.au',
};

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background">
                <Section className="prose prose-slate max-w-3xl mx-auto py-12 md:py-20">
                    <h1>Privacy Policy</h1>
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to dispatch.au. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website
                        and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h2>2. Data We Collect</h2>
                    <p>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul>
                        <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                    </ul>

                    <h2>3. How We Use Your Data</h2>
                    <p>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul>
                        <li>Note: This is a demo privacy policy for the MVP build.</li>
                        <li>To respond to your inquiries (Lead Forms).</li>
                        <li>To manage our relationship with you.</li>
                    </ul>

                    <h2>4. Contact Us</h2>
                    <p>
                        If you have any questions about this privacy policy or our privacy practices, please contact us at hello@dispatch.au.
                    </p>
                </Section>
            </main>
            <Footer />
        </>
    );
}
