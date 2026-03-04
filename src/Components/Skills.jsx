import { motion } from "framer-motion";
import { Plug, Zap, Cpu, SearchCode, Database, Layers, Blocks, Terminal, Bot, Code } from "lucide-react";

export const Skills = () => {

    const skillCategories = [
        {
            title: "Core Languages",
            icon: <Terminal className="w-6 h-6 text-amber-500" />,
            items: [
                { name: "HTML5", score: 90 },
                { name: "CSS3", score: 85 },
                { name: "JavaScript", score: 88 },
                { name: "C", score: 80 }
            ],
            color: "amber"
        },
        {
            title: "Frameworks & Libraries",
            icon: <Layers className="w-6 h-6 text-cyan-500" />,
            items: [
                { name: "ReactJS", score: 85 },
                { name: "Tailwind CSS", score: 95 },
                { name: "Bootstrap", score: 85 }
            ],
            color: "cyan" // Maps to our Tailwind classes manually below
        },
        {
            title: "Tools & AI",
            icon: <Cpu className="w-6 h-6 text-emerald-500" />,
            items: [
                { name: "Git / GitHub", score: 85 },
                { name: "VS Code", score: 90 },
                { name: "Google Antigravity", score: 95 }, // AI Collaboration Tools
            ],
            color: "emerald"
        }
    ];

    return (
        <section id="skills" className="relative w-full py-24 px-6 md:px-16 z-10 overflow-hidden bg-white/30 dark:bg-black/20 backdrop-blur-3xl shadow-[inset_0_0_100px_rgba(0,0,0,0.05)] border-y border-gray-200 dark:border-white/5">

            {/* Background Decorators - "Glowing Nodes" */}
            <div className="absolute top-20 left-10 w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_30px_10px_rgba(245,158,11,0.4)] animate-pulse"></div>
            <div className="absolute bottom-40 right-20 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_30px_10px_rgba(6,182,212,0.4)] animate-bounce"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 flex flex-col items-center"
                >
                    {/* Fun Hardware/EE Iconography */}
                    <div className="mb-4 p-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 animate-pulse">
                        <Plug className="w-8 h-8" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                        Technical <span className="text-gradient">Circuitry</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
                        My skill set is wired for performance, efficiency, and beautiful interfaces. From the core syntax to the modern AI tools that amplify execution.
                    </p>
                    <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-cyan-500 mx-auto mt-6"></div>
                </motion.div>

                {/* The "Circuit Board" Grid */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

                    {/* Animated SVG "Wires" connecting the cards (Visible mostly on Desktop) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" preserveAspectRatio="none">
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.3 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            d="M 200,100 C 400,100 400,200 600,200"
                            className="stroke-amber-500 dark:stroke-amber-400"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4 4"
                        />
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.3 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                            d="M 600,200 C 800,200 800,100 1000,100"
                            className="stroke-cyan-500 dark:stroke-cyan-400"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4 4"
                        />
                    </svg>

                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="relative group bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Fake inner circuit traces top right */}
                            <div className="absolute top-4 right-4 opacity-20 dark:opacity-40 pointer-events-none">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M40 10 L20 10 L10 20 L0 20" stroke={category.color === "amber" ? "#f59e0b" : category.color === "cyan" ? "#06b6d4" : "#10b981"} strokeWidth="2" />
                                    <circle cx="20" cy="10" r="3" fill={category.color === "amber" ? "#f59e0b" : category.color === "cyan" ? "#06b6d4" : "#10b981"} />
                                </svg>
                            </div>

                            <div className="flex items-center gap-4 mb-8">
                                <div className={`p-4 rounded-2xl bg-${category.color}-500/10 border border-${category.color}-500/20 shadow-[0_0_15px_rgba(0,0,0,0.05)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-shadow`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="space-y-6 relative">
                                {/* Internal glowing line connector */}
                                <div className={`absolute left-2.5 top-0 bottom-6 w-px bg-gradient-to-b from-${category.color}-500/50 to-transparent -z-10`}></div>

                                {category.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="relative z-10 pl-8">
                                        {/* Circuit Node Pulse Dot */}
                                        <div className={`absolute left-1.5 top-2 w-2 h-2 rounded-full bg-${category.color}-500 shadow-[0_0_8px_rgba(0,0,0,0.5)] bg-gradient-to-r from-${category.color}-400 to-${category.color}-600`}></div>

                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-semibold text-gray-800 dark:text-gray-200">{item.name}</span>
                                            <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{item.score}%</span>
                                        </div>

                                        {/* Skill Bar - looks like an energy meter */}
                                        <div className="h-2 w-full bg-gray-200 dark:bg-gray-800/80 rounded-full overflow-hidden border border-gray-300 dark:border-gray-700/50">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.score}%` }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ duration: 1.5, delay: 0.2 + (itemIdx * 0.1), ease: "easeOut" }}
                                                className="h-full relative overflow-hidden"
                                                style={{
                                                    background: category.color === "amber"
                                                        ? "linear-gradient(90deg, #fbbf24, #d97706)"
                                                        : category.color === "cyan"
                                                            ? "linear-gradient(90deg, #22d3ee, #0284c7)"
                                                            : "linear-gradient(90deg, #34d399, #059669)",
                                                    boxShadow: category.color === "amber"
                                                        ? "0 0 10px rgba(245,158,11,0.5)"
                                                        : category.color === "cyan"
                                                            ? "0 0 10px rgba(6,182,212,0.5)"
                                                            : "0 0 10px rgba(16,185,129,0.5)"
                                                }}
                                            >
                                                {/* Animated current reflection inside the bar */}
                                                <motion.div
                                                    animate={{ x: ["-100%", "200%"] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                    className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
                                                />
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                </div>

                {/* Infinite Logo Carousel */}
                <div className="mt-24 pt-12 border-t border-gray-200 dark:border-white/10 w-full overflow-hidden">
                    <h3 className="text-xl font-bold text-center text-gray-500 tracking-[0.2em] uppercase mb-12">
                        Trusted Technologies
                    </h3>

                    <div className="w-full relative flex overflow-x-hidden group">
                        {/* Gradient Mask for fading edges */}
                        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#eff6ff] dark:from-[#0f172a] to-transparent z-10 pointer-events-none fade-left"></div>
                        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#eff6ff] dark:from-[#0f172a] to-transparent z-10 pointer-events-none fade-right"></div>

                        {/* Two instances of the logo list to create the infinite loop */}
                        <div className="flex animate-marquee group-hover:hover-pause whitespace-nowrap py-4">
                            {[1, 2].map((loop) => (
                                <div key={loop} className="flex gap-16 md:gap-24 px-8 md:px-12 items-center">
                                    {/* Tech Icons - replaced with real logos */}
                                    {[
                                        { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                                        { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
                                        { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                                        { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
                                        { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                                        { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                                        { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
                                        { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                                        { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
                                    ].map((tech, i) => (
                                        <motion.div
                                            key={`${loop}-${i}`}
                                            className="flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                                            whileHover={{
                                                scale: 1.2,
                                                rotateY: 15,
                                                rotateX: 10,
                                                filter: "drop-shadow(0px 0px 10px rgba(6,182,212,0.5))"
                                            }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <div className="w-12 h-12 relative flex justify-center items-center">
                                                <img
                                                    src={tech.src}
                                                    alt={`${tech.name} logo`}
                                                    className="w-full h-full object-contain drop-shadow-md"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <span className="text-xs font-bold text-gray-500 dark:text-gray-400">{tech.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
