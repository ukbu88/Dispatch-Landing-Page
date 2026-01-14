"use client";

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'How long does it take?',
        answer: 'Most sites are dispatched within 5-7 days after we receive your details and content. More complex sites may take up to 2 weeks.',
    },
    {
        question: 'What do I need to provide?',
        answer: 'Just your logo, photos of your work, and basic business details. We can write the text copy for you based on standard industry templates if you prefer.',
    },
    {
        question: 'Can I update the site myself?',
        answer: 'Yes. We build on Next.js but can set up a CMS if requested. However, our Care Plans cover all updates for you so you don’t have to touch a thing.',
    },
    {
        question: 'Is hosting included?',
        answer: 'Hosting is included in our maintenance packages. If you prefer to manage it yourself, we can hand off the code to your Vercel account.',
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <Section className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Common Questions</h2>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-border rounded-xl bg-card overflow-hidden transition-all duration-200 hover:border-primary/30">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="flex items-center justify-between w-full p-5 text-left font-semibold text-foreground hover:bg-slate-50/50 transition-colors"
                        >
                            <span className="pr-8">{faq.question}</span>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronDown className="w-5 h-5 text-muted-foreground" />
                            </motion.div>
                        </button>
                        <AnimatePresence initial={false}>
                            {openIndex === index && (
                                <motion.div
                                    key="content"
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={{
                                        open: { opacity: 1, height: "auto" },
                                        collapsed: { opacity: 0, height: 0 }
                                    }}
                                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                >
                                    <div className="p-5 pt-0 text-muted-foreground text-sm leading-relaxed border-t border-border/50 bg-slate-50/30">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </Section>
    );
}
