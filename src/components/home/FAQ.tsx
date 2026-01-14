"use client";

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

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
                    <div key={index} className="border border-border rounded-lg bg-card overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="flex items-center justify-between w-full p-4 text-left font-medium text-foreground hover:bg-slate-50 transition-colors"
                        >
                            {faq.question}
                            {openIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-muted-foreground" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-muted-foreground" />
                            )}
                        </button>
                        <div
                            className={cn(
                                "overflow-hidden transition-all duration-200 ease-in-out",
                                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                            )}
                        >
                            <div className="p-4 pt-0 text-muted-foreground text-sm leading-relaxed border-t border-border/50 bg-slate-50/50">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
