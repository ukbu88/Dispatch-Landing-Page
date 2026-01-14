"use client";

import { Wrench, Zap, Fan, Hammer, Paintbrush, Trees, Car, Key, Home, Truck } from "lucide-react";

const industries = [
    { name: "Plumbers", icon: Wrench },
    { name: "Electricians", icon: Zap },
    { name: "HVAC", icon: Fan },
    { name: "Builders", icon: Hammer },
    { name: "Painters", icon: Paintbrush },
    { name: "Landscapers", icon: Trees },
    { name: "Mechanics", icon: Car },
    { name: "Locksmiths", icon: Key },
    { name: "Roofers", icon: Home },
    { name: "Movers", icon: Truck },
];

export function InfiniteMarquee() {
    return (
        <div className="relative flex overflow-hidden py-10 bg-slate-50 border-y border-border/40 select-none">
            {/* Masks for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex whitespace-nowrap animate-scroll hover:[animation-play-state:paused]">
                {/* Render the list twice for seamless loop */}
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-16 pr-16 items-center">
                        {industries.map((item, index) => (
                            <div key={`${i}-${index}`} className="flex items-center gap-3 text-muted-foreground/60 hover:text-primary transition-colors cursor-default group">
                                <item.icon className="w-6 h-6 stroke-[1.5] group-hover:scale-110 transition-transform" />
                                <span className="text-xl font-semibold uppercase tracking-widest">{item.name}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
