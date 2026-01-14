"use client";

import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import { AuroraBackground } from '@/components/ui/AuroraBackground';

export function Hero() {
    return (
        <AuroraBackground>
            <div className="relative flex flex-col items-center justify-center min-h-[80vh] px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                    <FadeIn delay={0.1} direction="down">
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                            {["Mobile-first", "SEO-ready", "Google Business setup"].map((chip) => (
                                <span key={chip} className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Fast, conversion-focused websites for <span className="text-primary">local services and trades</span>.
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed flex flex-col items-center justify-center">
                            <TextGenerateEffect
                                words="Premium sites dispatched in days—built to generate calls and quote requests."
                                className="text-center font-normal"
                            />
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                            <Button href="/contact" size="lg" className="w-full sm:w-auto text-lg h-14 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                Get a free site audit
                            </Button>
                            <Button href="/work" variant="secondary" size="lg" className="w-full sm:w-auto text-lg h-14 hover:bg-slate-200/80 backdrop-blur-sm">
                                View example sites
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </AuroraBackground>
    );
}
