import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Layers, FileCode2, Cpu, Globe } from "lucide-react";

export const Works = () => {

    // Project Data Structure - No strict color classes to make adding new items easy
    const projects = [
        {
            id: 1,
            title: "OUTR Lab CoverPage Generator",
            description: "A specialized tool for generating university lab report cover pages instantly. Reduces repetitive formatting and outputs ready-to-print PDFs.",
            tools: ["React", "Tailwind CSS", "JavaScript"],
            liveUrl: "https://outr-lab-record-frontpage-generator.netlify.app/",
            githubUrl: "https://github.com/diptendu-das/OUTR-Lab-Record-FrontPage-Generator.git",
            icon: <FileCode2 className="w-12 h-12 text-cyan-500" />
        },
        {
            id: 2,
            title: "Interactive Portfolio Website",
            description: "An open-source collection of glowing, 3D interactive components. Heavily relies on mathematical scaling and physics-based interactions. 90% build with AI assistance",
            tools: ["React.js", "Tailwind Css", "Lucid-React", "Framer Motion", "Antigravity"],
            liveUrl: "#",
            githubUrl: "https://github.com/diptendu-das/diptendu-portfolio.git",
            icon: <Layers className="w-12 h-12 text-cyan-500" />
        },
        {
            id: 3,
            title: "AI-Powered Hardware Analytics",
            description: "Dashboard exploring hardware load patterns and energy consumption using predictive AI modeling.",
            tools: ["Python", "TensorFlow", "React"],
            liveUrl: "#",
            githubUrl: "#",
            icon: <Cpu className="w-12 h-12 text-cyan-500" />
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleCardClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section id="works" className="relative w-full py-32 px-4 md:px-16 z-20 overflow-hidden">

            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/20 dark:bg-violet-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/20 dark:bg-fuchsia-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative group">
                {/* Glow behind the glass */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-500/10 to-fuchsia-600/20 dark:from-violet-500/20 dark:via-fuchsia-500/10 dark:to-purple-500/20 rounded-[3rem] blur-2xl group-hover:blur-3xl opacity-80 transition-all duration-700"></div> */}

                {/* Glass Container - Increased Transparency & Cool reflection */}
                <div
                    className="relative bg-transparent dark:bg-transparent backdrop-blur-sm hover:backdrop-blur-md transition-all duration-500 border border-white/20 dark:border-cyan-500/20 rounded-[3rem] p-8 md:p-16 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] overflow-hidden"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(150,150,150,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(150,150,150,0.07) 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                    }}
                >
                    {/* Inner subtle reflection highlight */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent dark:from-white/0 dark:to-white/5 pointer-events-none rounded-[3rem] z-[-1]"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16 flex flex-col items-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                            My <span className="text-gradient">Creations</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
                            A showcase of applications merging algorithmic logic with premium user interfaces.
                        </p>
                        <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-6"></div>
                    </motion.div>

                    {/* 3D Carousel Container */}
                    <div className="relative w-full h-[520px] flex items-center justify-center perspective-[1500px] mb-12">

                        <AnimatePresence initial={false}>
                            {projects.map((project, index) => {

                                // Determine relative offset from the currently active item
                                let offset = index - currentIndex;
                                if (offset > Math.floor(projects.length / 2)) offset -= projects.length;
                                if (offset < -Math.floor(projects.length / 2)) offset += projects.length;

                                // Only render items close to the center for performance
                                const isVisible = Math.abs(offset) <= 2;
                                if (!isVisible) return null;

                                const isActive = offset === 0;

                                // Calculate 3D transforms
                                const scale = 1 - Math.abs(offset) * 0.2;
                                const opacity = 1 - Math.abs(offset) * 0.4;
                                const rotateY = offset * -25;
                                const translateX = offset * 120;
                                const zIndex = projects.length - Math.abs(offset);

                                return (
                                    <motion.div
                                        key={project.id}
                                        className={`absolute w-full max-w-xs md:max-w-md h-[420px] rounded-3xl p-8 cursor-pointer 
                                                    shadow-xl border border-gray-200 dark:border-white/10 
                                                    bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl
                                                    flex flex-col justify-between`}
                                        style={{
                                            boxShadow: isActive
                                                ? `0 20px 50px -10px rgba(6,182,212,0.3)`
                                                : "none"
                                        }}
                                        animate={{
                                            x: translateX,
                                            scale: scale,
                                            rotateY: rotateY,
                                            opacity: opacity,
                                            zIndex: zIndex,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeInOut"
                                        }}
                                        onClick={() => handleCardClick(index)}
                                    >
                                        {/* Card Content - Uniform styling across all items */}
                                        <div className={`transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'} h-full flex flex-col`}>

                                            {/* Icon Header */}
                                            <div className="w-16 h-16 mb-6 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-100 dark:border-cyan-500/20 flex items-center justify-center flex-none">
                                                {project.icon || <Globe className="w-8 h-8 text-cyan-500" />}
                                            </div>

                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                                {project.title}
                                            </h3>

                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 grow line-clamp-3">
                                                {project.description}
                                            </p>

                                            {/* Tools / Tech array */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tools.map((tool, i) => (
                                                    <span key={i} className="text-xs font-semibold px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons - only clickable if active card */}
                                        {isActive ? (
                                            <div className="flex gap-4 border-t border-gray-200 dark:border-white/10 pt-4 mt-auto">
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    // Fixed Contrast Theme
                                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm text-white bg-gray-900 hover:bg-black dark:text-white dark:bg-cyan-600 dark:hover:bg-cyan-500 transition-colors shadow-md"
                                                >
                                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                                </a>
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="flex-none px-4 flex items-center justify-center py-2.5 rounded-xl font-bold text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                                                >
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            </div>
                                        ) : (
                                            // Empty spacer to ensure grid holds layout height when inactive buttons hide
                                            <div className="pt-4 mt-auto"></div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center items-center gap-6 mt-4">
                        <button
                            onClick={handlePrev}
                            className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:scale-110 active:scale-95 transition-transform text-gray-700 dark:text-gray-300 hover:text-cyan-500"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Dots indicator */}
                        <div className="flex gap-2">
                            {projects.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleCardClick(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-cyan-500 w-8' : 'bg-gray-300 dark:bg-gray-600'}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:scale-110 active:scale-95 transition-transform text-gray-700 dark:text-gray-300 hover:text-cyan-500"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
