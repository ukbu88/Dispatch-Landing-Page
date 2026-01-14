import { Section } from '@/components/ui/Section';
import { Hammer, Briefcase, CheckCircle2, Zap, Truck, Home, Sparkles, Dog, Bug } from 'lucide-react';
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid';

export function WhoItsFor() {
    return (
        <Section>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Built for local business</h2>
                <p className="mt-4 text-lg text-muted-foreground">Tailored for trades and service providers who need results, not fluff.</p>
            </div>

            <BentoGrid className="max-w-4xl mx-auto">
                {/* Visual Header for Trades */}
                <BentoGridItem
                    title="For Trades"
                    description="Essential services that keep homes running."
                    header={
                        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 items-center justify-center">
                            <Hammer className="w-12 h-12 text-blue-600" />
                        </div>
                    }
                    className="md:col-span-1"
                />

                {/* Trade Items */}
                <BentoGridItem
                    title="Plumbing & Electrical"
                    description="Emergency repairs & installations."
                    icon={<Zap className="h-4 w-4 text-neutral-500" />}
                    className="md:col-span-1"
                />
                <BentoGridItem
                    title="Construction & HVAC"
                    description="Building & climate control."
                    icon={<Home className="h-4 w-4 text-neutral-500" />}
                    className="md:col-span-1"
                />

                {/* Visual Header for Services */}
                <BentoGridItem
                    title="For Services"
                    description="Personal & professional care."
                    header={
                        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 items-center justify-center">
                            <Briefcase className="w-12 h-12 text-purple-600" />
                        </div>
                    }
                    className="md:col-span-1"
                />

                {/* Service Items */}
                <BentoGridItem
                    title="Cleaning & Pest Control"
                    description="Keeping spaces pristine."
                    icon={<Sparkles className="h-4 w-4 text-neutral-500" />}
                    className="md:col-span-1"
                />
                <BentoGridItem
                    title="Pet Services"
                    description="Grooming & mobile vet care."
                    icon={<Dog className="h-4 w-4 text-neutral-500" />}
                    className="md:col-span-1"
                />
            </BentoGrid>
        </Section>
    );
}
