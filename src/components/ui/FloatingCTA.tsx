"use client";

import { Button } from "@/components/ui/Button";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function FloatingCTA() {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Show button after scrolling past 500px (roughly past Hero)
        const shouldShow = latest > 500;
        if (shouldShow !== visible) {
            setVisible(shouldShow);
        }
    });

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    <Button
                        href="/contact"
                        size="lg"
                        className="shadow-2xl shadow-primary/30 rounded-full px-6 h-12 text-base font-semibold border-2 border-white/20 backdrop-blur-sm"
                    >
                        Get Free Audit
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
