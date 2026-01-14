"use client";

import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Search, TabletSmartphone, ShieldCheck } from "lucide-react";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
        icon: any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        // uncomment line below and comment line above if you want to use container scroll
        // container: ref,
        target: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    return (
        <motion.div
            className="flex flex-col lg:flex-row justify-center relative space-x-0 lg:space-x-10 rounded-md p-10"
            ref={ref}
        >
            <div className="div relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20 min-h-[50vh] flex flex-col justify-center">
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-2xl font-bold text-slate-900"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-lg text-slate-600 max-w-sm mt-10"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <div
                className={cn(
                    "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-40 overflow-hidden shadow-xl",
                    contentClassName
                )}
            >
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};


const dummyContent = [
    {
        title: "Built for SEO",
        description:
            "Every site is built with semantic HTML and optimized metadata to help you rank higher on Google Maps and Search.",
        content: (
            <div className="h-full w-full bg-[#1e293b] flex items-center justify-center text-white">
                <Search className="w-20 h-20 text-blue-500" />
            </div>
        ),
        icon: Search
    },
    {
        title: "Mobile First Design",
        description:
            "Your customers are on their phones. We build experiences that look perfect on every device, from iPhone to Desktop.",
        content: (
            <div className="h-full w-full bg-[#1e293b] flex items-center justify-center text-white">
                <TabletSmartphone className="w-20 h-20 text-emerald-500" />
            </div>
        ),
        icon: TabletSmartphone
    },
    {
        title: "Secure & Fast",
        description:
            "Lightning fast loading times and best-in-class security to keep your business running smoothly without downtime.",
        content: (
            <div className="h-full w-full bg-[#1e293b] flex items-center justify-center text-white">
                <ShieldCheck className="w-20 h-20 text-orange-500" />
            </div>
        ),
        icon: ShieldCheck
    },
];

export function StickyScrollShowcase() {
    return (
        <Section className="py-20 bg-slate-50 border-y border-border/40">
            <FadeIn className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Choose Dispatch?</h2>
                <p className="mt-4 text-lg text-muted-foreground">We handle the technical details so you can focus on the work.</p>
            </FadeIn>
            <StickyScroll content={dummyContent} />
        </Section>
    )
}
