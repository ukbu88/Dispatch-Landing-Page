"use client";

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    staggerDelay?: number;
}

export function StaggerContainer({ children, className, delay = 0, staggerDelay = 0.1 }: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: delay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export const StaggerItem = motion.div;

export const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1.0] as any // Framer Motion Cubic Bezier
        }
    },
};
