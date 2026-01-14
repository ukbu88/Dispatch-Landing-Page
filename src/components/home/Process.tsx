"use client";

import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import { StaggerContainer, StaggerItem, fadeInVariants } from '@/components/ui/Stagger';
import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Audit',
        description: 'We review your current presence and requirements to map out the perfect site structure.',
    },
    {
        number: '02',
        title: 'Build',
        description: 'We build your site using our premium components, optimizing for speed and conversion.',
    },
    {
        number: '03',
        title: 'Review',
        description: 'You get a private link to review the site. We make refinements until you are 100% happy.',
    },
    {
        number: '04',
        title: 'Launch',
        description: 'We connect your domain, set up hosting, and submit your site to Google.',
    },
];

export function Process() {
    return (
        <Section className="bg-muted/30">
            <FadeIn className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">How it works</h2>
                <p className="mt-4 text-lg text-muted-foreground">Dispatched fast. Minimal effort required from you.</p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map((step) => (
                    <StaggerItem key={step.number} variants={fadeInVariants} className="relative group">
                        <motion.div
                            initial={{ opacity: 0.5 }}
                            whileInView={{ opacity: 1 }}
                            className="text-5xl font-bold text-slate-200 mb-4 relative"
                        >
                            {step.number}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -skew-x-12"
                                animate={{
                                    x: ['-100%', '200%'],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                    repeatDelay: 2
                                }}
                                style={{ pointerEvents: 'none' }}
                            />
                        </motion.div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </Section>
    );
}
