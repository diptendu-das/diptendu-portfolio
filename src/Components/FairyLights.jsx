import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const FairyLights = () => {
    const [lights, setLights] = useState([]);

    useEffect(() => {
        // Generate random fairy lights across the document
        const generateLights = () => {
            // Read dark mode state from document to adjust intensity
            const isDark = document.documentElement.classList.contains('dark');

            // Major rendering reduction: significantly fewer lights, especially in light mode
            // Divded by 60 for dark mode, by 150 for light mode
            const density = isDark ? 60 : 150;
            // Cap at a safe limit to avoid DOM flooding and lag
            const maxLights = isDark ? 30 : 15;
            const count = Math.min(Math.floor(window.innerWidth / density), maxLights);

            const newLights = [];

            for (let i = 0; i < count; i++) {
                // Determine colors based on electrical/magic vibe
                const colors = ['bg-amber-400', 'bg-cyan-400', 'bg-purple-400', 'bg-emerald-400'];
                const color = colors[Math.floor(Math.random() * colors.length)];

                newLights.push({
                    id: i,
                    left: Math.random() * 100, // percentage string
                    top: Math.random() * 100, // percentage string
                    size: Math.random() * 4 + 2, // px
                    // Make animations slightly slower to reduce repaints
                    duration: Math.random() * 5 + 3, // seconds
                    color: color,
                    delay: Math.random() * 3 // seconds
                });
            }
            setLights(newLights);
        };

        generateLights();

        // Debounce resize to recalculate lights less frequently to save CPU
        let timeout;
        const handleResize = () => {
            clearTimeout(timeout);
            timeout = setTimeout(generateLights, 800);
        };

        // MutationObserver to watch for dark mode class changes on the HTML tag
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    // Recalculate lights when theme changes
                    generateLights();
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            observer.disconnect();
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Faint "wire" - reduced opacity over light backgrounds */}
            <svg className="absolute top-0 left-0 w-full h-32 opacity-10 dark:opacity-30" preserveAspectRatio="none">
                <path d="M 0,10 Q 250,80 500,20 T 1000,40 T 1500,10 T 2000,60" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-500 dark:text-gray-400" />
            </svg>

            {lights.map(light => (
                <motion.div
                    key={light.id}
                    className={`absolute rounded-full ${light.color} mix-blend-screen shadow-[0_0_10px_2px_currentColor]`}
                    style={{
                        left: `${light.left}%`,
                        top: `${light.top}%`,
                        width: light.size,
                        height: light.size,
                    }}
                    animate={{
                        opacity: [0.1, 0.8, 0.1], // slightly less aggressive opacity jump
                        scale: [1, 1.4, 1], // less aggressive scaling
                    }}
                    transition={{
                        duration: light.duration,
                        repeat: Infinity,
                        delay: light.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};
