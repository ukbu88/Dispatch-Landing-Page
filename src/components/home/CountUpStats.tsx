"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Section } from "@/components/ui/Section";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 60,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.round(latest).toLocaleString() + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} className="tabular-nums" />;
}

const stats = [
    { label: "Mobile Score", value: 100, suffix: "%" },
    { label: "Turnaround", value: 7, suffix: " Days" },
    { label: "Client Satisfaction", value: 100, suffix: "%" },
    { label: "Sites Deployed", value: 50, suffix: "+" },
];

export function CountUpStats() {
    return (
        <Section className="py-12 border-b border-border/40 bg-slate-50/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border/40">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-4">
                        <div className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">
                            <Counter value={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wide">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
