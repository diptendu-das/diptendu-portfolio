import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Terminal } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative w-full min-h-[85vh] flex flex-col lg:flex-row items-center justify-center px-6 md:px-16 overflow-hidden mt-10 z-10 py-10 lg:py-0">

            {/* Light Mode Glow Orbs - behind text */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 dark:opacity-0 animate-blob"></div>
            <div className="absolute top-0 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 dark:opacity-0 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 dark:opacity-0 animate-blob animation-delay-4000"></div>

            {/* Left Subject Area */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20 space-y-6">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-black/30 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-sm"
                >
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-medium tracking-wide text-gray-800 dark:text-gray-300">
                        Welcome to my creative universe
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight"
                >
                    Hi, I'm <br />
                    <span className="text-gradient">Diptendu Das</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg mt-4 font-light leading-relaxed"
                >
                    I build beautiful, interactive, and high-performance digital experiences. Crafting pixel-perfect web applications with modern technologies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
                >
                    <a
                        href="#work"
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white bg-gray-900 dark:bg-white dark:text-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-xl"
                    >
                        <span>View My Work</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="#contact"
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-gray-900 dark:text-white bg-white/50 dark:bg-black/20 backdrop-blur-sm border-2 border-gray-900/10 dark:border-white/10 rounded-full transition-all hover:bg-gray-100 dark:hover:bg-white/10 hover:neon-shadow-light dark:hover:neon-shadow active:scale-95"
                    >
                        <span>Contact Me</span>
                    </a>
                </motion.div>
            </div>

            {/* Right Graphic/Animatable Area */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "anticipate" }}
                className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-16 lg:mt-0 z-20 relative perspective-[1000px]"
            >
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotateX: [0, 5, 0],
                        rotateY: [0, 10, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="relative w-72 h-72 md:w-96 md:h-96"
                >
                    {/* Abstract rotating glowing shape behind */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-3xl blur-2xl opacity-40 dark:opacity-70 animate-[spin_10s_linear_infinite]" />

                    {/* Main Card */}
                    <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col items-center justify-center neon-shadow-light dark:neon-shadow p-8 overflow-hidden group">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            className="relative z-10 w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-cyan-300 to-purple-500 p-[2px] shadow-lg"
                        >
                            <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                                <Code2 className="w-12 h-12 text-gray-800 dark:text-white/90" />
                            </div>
                        </motion.div>

                        <h3 className="relative z-10 text-2xl font-bold text-gray-800 dark:text-white mb-2">Frontend Developer</h3>
                        <div className="relative z-10 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-black/50 px-4 py-2 rounded-full">
                            <Terminal className="w-4 h-4" />
                            <span>React • Tailwind • Node</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};
