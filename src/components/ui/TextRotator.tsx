"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TextRotatorProps {
    texts: string[];
    interval?: number;
    className?: string;
}

export function TextRotator({ texts, interval = 4000, className }: TextRotatorProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, interval);

        return () => clearInterval(timer);
    }, [texts.length, interval]);

    return (
        <div className={`relative h-[1.5em] overflow-hidden ${className}`}>
            <AnimatePresence mode="wait">
                <motion.p
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute width-full"
                >
                    {texts[index]}
                </motion.p>
            </AnimatePresence>
        </div>
    );
}
