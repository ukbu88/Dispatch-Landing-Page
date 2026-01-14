import { Section } from '@/components/ui/Section';
import { Hammer, Briefcase, CheckCircle2 } from 'lucide-react';

export function WhoItsFor() {
    return (
        <Section>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Built for local business</h2>
                <p className="mt-4 text-lg text-muted-foreground">Tailored for trades and service providers who need results, not fluff.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {/* Trades */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                            <Hammer className="w-5 h-5 text-slate-700" />
                        </div>
                        <h3 className="text-xl font-semibold">For Trades</h3>
                    </div>
                    <ul className="space-y-3">
                        {['Plumbing & Gas', 'Electrical', 'HVAC & Air Con', 'Landscaping', 'Construction'].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-slate-700" />
                        </div>
                        <h3 className="text-xl font-semibold">For Services</h3>
                    </div>
                    <ul className="space-y-3">
                        {['Cleaning Services', 'Dog Grooming', 'Auto Detailing', 'Pest Control', 'Removalists'].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}
