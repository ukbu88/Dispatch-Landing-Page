import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export function FinalCTA() {
    return (
        <Section>
            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-16 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                    Ready to get more work?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Get a free audit of your current online presence. No obligation.
                </p>
                <div className="pt-4">
                    <Button href="/contact" size="lg" className="h-14 px-8 text-lg">
                        Get your free audit
                    </Button>
                </div>
            </div>
        </Section>
    );
}
