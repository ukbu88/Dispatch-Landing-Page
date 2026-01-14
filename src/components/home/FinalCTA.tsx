"use client";

import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';

export function FinalCTA() {
    return (
        <Section>
            <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-16 text-center space-y-6 overflow-hidden"
            >
                {/* Background Decor */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"
                />

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground relative z-10">
                    Ready to get more work?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto relative z-10">
                    Get a free audit of your current online presence. No obligation.
                </p>
                <div className="pt-4 relative z-10">
                    <Button href="/contact" size="lg" className="h-14 px-8 text-lg shadow-xl hover:shadow-primary/20 hover:scale-105 transition-all">
                        Get your free audit
                    </Button>
                </div>
            </motion.div>
        </Section>
    );
}
