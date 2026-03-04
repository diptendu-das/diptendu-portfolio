import { motion, AnimatePresence } from "framer-motion";
import { Zap, Code2, LayoutTemplate, Bot } from "lucide-react";
import { useState } from "react";

export const About = () => {
    const [isAiPopupOpen, setIsAiPopupOpen] = useState(false);

    // Updated stats cards matching the EE/Frontend background
    const stats = [
        {
            label: "My Roots",
            value: "Electrical",
            icon: <Zap className="w-6 h-6 text-amber-500" />,
            color: "from-amber-400 to-orange-600",
            desc: "Engineer by Degree",
        },
        {
            label: "My Passion",
            value: "Frontend",
            icon: <Code2 className="w-6 h-6 text-cyan-500" />,
            color: "from-cyan-400 to-blue-600",
            desc: "React & TailWind",
        },
        {
            label: "My Eye",
            value: "UI & UX",
            icon: <LayoutTemplate className="w-6 h-6 text-purple-500" />,
            color: "from-purple-400 to-pink-600",
            desc: "Design & Interaction",
        },
        {
            label: "My Tools",
            value: "AI & Tech",
            icon: <Bot className="w-6 h-6 text-emerald-500" />,
            color: "from-emerald-400 to-green-600",
            desc: "Working Smarter",
        },
    ];

    return (
        <section id="about" className="relative w-full py-24 px-6 md:px-16 z-10 overflow-hidden">

            {/* Background Decorators */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-cyan-500 mx-auto"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    {/* Left Side: Text and Story wrapped with Running Neon */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full lg:w-1/2 p-[2px] rounded-[34px] overflow-hidden group shadow-xl"
                    >
                        {/* Animated Neon Borders */}
                        <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,#06b6d4_360deg)] opacity-70 group-hover:bg-[conic-gradient(from_0deg,transparent_0_300deg,#a855f7_360deg)] transition-colors duration-500"></div>
                        <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_300deg,#06b6d4_360deg)] opacity-70 group-hover:bg-[conic-gradient(from_180deg,transparent_0_300deg,#a855f7_360deg)] transition-colors duration-500"></div>

                        {/* Inner Content Box */}
                        <div className="relative h-full w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl p-8 rounded-[32px] border border-white/20 dark:border-white/5 space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light z-10">
                            <p className="text-xl font-medium text-gray-800 dark:text-gray-200">
                                I'm an <strong className="text-amber-600 dark:text-amber-400">Electrical Engineer</strong> who fell in love with <strong className="text-cyan-600 dark:text-cyan-400">Web Development</strong> and UI/UX.
                            </p>
                            <p>
                                While my academic background gave me a deep understanding of circuitry and logic, my sheer passion lies in crafting visually stunning, responsive, and accessible user interfaces for the web.
                            </p>
                            <p>
                                By combining my engineering mindset with a creative eye, I continuously explore modern tools (like React, Tailwind) to build scalable, highly-polished frontend architectures. I believe that an optimized web application is no different than an optimized circuit block!
                            </p>

                            {/* Glowing Signature / Callout -> Also acts as button to open AI Popup */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setIsAiPopupOpen(true)}
                                className="mt-8 p-4 rounded-xl cursor-pointer bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 dark:border-emerald-500/30 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
                            >
                                <div className="flex items-center gap-3">
                                    <Bot className="w-6 h-6 text-emerald-500 animate-pulse" />
                                    <p className="text-emerald-700 dark:text-emerald-300 font-medium font-mono text-sm tracking-tight">
                                        Click me for a secret message about AI...
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side: Bento Grid Stats */}
                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05, translateY: -5 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    scale: { duration: 0.2 },
                                    translateY: { duration: 0.2 }
                                }}
                                className="group relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-white/20 dark:border-white/10 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                            >
                                {/* Subtle Hover Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                                    <div className="p-4 bg-gray-100 dark:bg-black/50 rounded-2xl group-hover:neon-shadow-light dark:group-hover:neon-shadow transition-shadow duration-300">
                                        {stat.icon}
                                    </div>
                                    <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                                        {stat.value}
                                    </h3>
                                    <p className="text-xs font-bold text-gray-800 dark:text-gray-300 uppercase tracking-wider">
                                        {stat.label}
                                    </p>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 leading-tight">
                                        {stat.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* Resume Download Button - Centered below About content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 flex justify-center w-full"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/resume.pdf"
                        download="Diptendu_Das_Resume.pdf"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-cyan-500/30 transition-all text-lg tracking-wide group"
                    >
                        <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Resume
                    </motion.a>
                </motion.div>
            </div>

            {/* AI Message Pop-up Modal */}
            <AnimatePresence>
                {isAiPopupOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsAiPopupOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative max-w-lg w-full bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-2xl border border-emerald-500/30 dark:border-emerald-500/50"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors"
                                onClick={() => setIsAiPopupOpen(false)}
                            >
                                ✕
                            </button>

                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-2">
                                    <Bot className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Is AI replacing us?
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-mono text-sm bg-gray-50 dark:bg-black/30 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                    <span className="text-emerald-600 dark:text-emerald-400 font-bold opacity-80">{"<message>"}</span>
                                    <br />
                                    Today, everyone is saying AI is replacing your job, but I don't agree. If you can smartly use AI to showcase your work and enhance your productivity, you can stand out globally.
                                    <br /><br />
                                    Nothing better than <strong className="text-cyan-600 dark:text-cyan-400">this portfolio</strong> as a live example of it! haha 😄
                                    <br />
                                    <span className="text-emerald-600 dark:text-emerald-400 font-bold opacity-80">{"</message>"}</span>
                                </p>
                                <div className="mt-6 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30 rounded-full"></div>
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                                    Powered by human creativity & AI collaboration.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};
