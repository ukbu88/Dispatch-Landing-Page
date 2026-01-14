import Link from 'next/link';
import { Section } from '@/components/ui/Section';

export function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <Section className="py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
                            dispatch
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Premium sites dispatched in days. Built for local trades and services.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/work" className="hover:text-foreground">Examples</Link></li>
                            <li><Link href="/pricing" className="hover:text-foreground">Packages</Link></li>
                            <li><Link href="/contact" className="hover:text-foreground">Site Audit</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Contact</h3>
                        <p className="text-sm text-muted-foreground">
                            Based in Australia.
                            <br />
                            <a href="mailto:hello@dispatch.au" className="hover:text-foreground mt-1 block">hello@dispatch.au</a>
                        </p>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} dispatch.au. All rights reserved.
                </div>
            </Section>
        </footer>
    );
}
