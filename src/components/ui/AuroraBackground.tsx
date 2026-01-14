"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children?: ReactNode;
    showRadialGradient?: boolean;
}

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}: AuroraBackgroundProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div
            className={cn(
                "relative flex flex-col min-h-screen h-[100dvh] items-center justify-center bg-slate-50 dark:bg-slate-900 text-slate-950 transition-bg",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className={cn(
                        `
            [--aurora:repeating-linear-gradient(100deg,#60a5fa_10%,#e879f9_15%,#60a5fa_20%,#a78bfa_25%,#60a5fa_30%)]
            [background-image:var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-overlay
            pointer-events-none
            absolute -inset-[10px] opacity-100 will-change-transform`,
                        showRadialGradient &&
                        `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
                    )}
                ></div>
                {/* Fallback/Boost layer - reduced opacity on mobile */}
                {mounted && (
                    <div
                        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-30 md:opacity-50 blur-[100px] -z-10 animate-aurora"
                        style={{
                            background: 'conic-gradient(from 0deg at 50% 50%, #60a5fa 0deg, #e879f9 70deg, #a78bfa 180deg, #60a5fa 360deg)',
                            animationDuration: '10s'
                        }}
                    />
                )}
            </div>
            {children}
        </div>
    );
};
