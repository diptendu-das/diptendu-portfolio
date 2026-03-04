import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
    // Track vertical scroll progress
    const { scrollYProgress } = useScroll();

    // Smooth the progress value so the circle draws cleanly
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility based on scroll depth
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-8 right-8 z-50 ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
            <div className="relative flex items-center justify-center p-1 cursor-pointer group" onClick={scrollToTop}>

                {/* SVG Progress Circle Background */}
                <svg className="absolute w-14 h-14 -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        className="stroke-gray-200 dark:stroke-gray-800"
                        strokeWidth="8"
                    />
                    {/* SVG Progress Circle Foreground (Animated) */}
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        className="stroke-cyan-500 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                        strokeWidth="8"
                        strokeLinecap="round"
                        style={{ pathLength: smoothProgress }}
                    />
                </svg>

                {/* Inner Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-xl border border-gray-100 dark:border-gray-800 text-gray-800 dark:text-white hover:text-cyan-500 transition-colors z-10"
                >
                    <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </motion.button>

            </div>
        </motion.div>
    );
};
