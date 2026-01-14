import { Button } from '@/components/ui/Button';
import { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import { StaggerContainer, StaggerItem, fadeInVariants } from '@/components/ui/Stagger';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { BorderBeam } from '@/components/ui/BorderBeam';
import { Check } from 'lucide-react';

const packages = [
    {
        name: 'Starter',
        price: 'A$800',
        description: 'Perfect for new businesses needing a professional presence.',
        features: ['One Page Site', 'Mobile Optimized', 'Contact Form', 'Hosting Setup'],
    },
    {
        name: 'Lead Gen',
        price: 'A$1,500',
        description: 'Multi-page site designed to capture leads and showcase work.',
        features: ['5 Page Site', 'SEO Optimization', 'Portfolio / Gallery', 'Advanced Contact Forms', 'Google Business Integration'],
        popular: true,
    },
    {
        name: 'Care Plan',
        price: 'A$50/mo',
        description: 'Ongoing peace of mind. We handle the updates and tech.',
        features: ['Hosting Included', 'Monthly Content Updates', 'Security Monitoring', 'Priority Support'],
    },
];

export function Packages() {
    return (
        <Section>
            <FadeIn className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Simple Packages</h2>
                <p className="mt-4 text-lg text-muted-foreground">Transparent pricing. No hidden fees.</p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packages.map((pkg) => (
                    <StaggerItem
                        key={pkg.name}
                        variants={fadeInVariants}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    >
                        <SpotlightCard className={`flex flex-col h-full ${pkg.popular ? 'border-primary shadow-lg ring-1 ring-primary relative overflow-hidden' : 'hover:border-primary/50 hover:shadow-md'}`}>
                            {pkg.popular && (
                                <>
                                    <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-t-lg absolute -mt-8 top-0 mx-auto w-full text-center max-w-[100px] left-0 right-0 z-10">
                                        POPULAR
                                    </div>
                                    <BorderBeam duration={8} size={100} colorFrom="#2563EB" colorTo="#38bdf8" />
                                </>
                            )}
                            <CardHeader>
                                <CardTitle className="text-xl">{pkg.name}</CardTitle>
                                <div className="mt-4 flex items-baseline text-3xl font-bold tracking-tight">
                                    {pkg.price}
                                    {pkg.name === 'Care Plan' && <span className="text-base font-normal text-muted-foreground">/mo</span>}
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <ul className="space-y-3">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <Check className="w-4 h-4 text-primary shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button href="/contact" variant={pkg.popular ? 'primary' : 'outline'} className="w-full">
                                    Get Started
                                </Button>
                            </CardFooter>
                        </SpotlightCard>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </Section>
    );
}
