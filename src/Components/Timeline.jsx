import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award, Calendar } from "lucide-react";

export const Timeline = () => {
    const educationData = [
        {
            id: 1,
            year: "2019 - 2021",
            title: "10th Grade",
            institution: "P.P.N.V.M, Kalahari",
            marks: "87%",
            board: "HSCE",
            icon: <GraduationCap className="w-5 h-5 text-amber-500" />,
            color: "amber"
        },
        {
            id: 2,
            year: "2021 - 2023",
            title: "12th Grade (CHSE)",
            institution: "R.I.H.S, Bhograi, Balasore, Odisha",
            marks: "83%",
            board: "CHSE",
            icon: <Award className="w-5 h-5 text-cyan-500" />,
            color: "cyan"
        },
        {
            id: 3,
            year: "2024 - Present",
            title: "B.Tech in Electrical Engineering",
            institution: "OUTR, Bhubaneswar",
            marks: "CGPA: - / 10",
            board: "University",
            icon: <MapPin className="w-5 h-5 text-emerald-500" />,
            color: "emerald"
        }
    ];

    return (
        <section id="timeline" className="relative w-full py-24 px-6 md:px-16 z-10 overflow-hidden">
            {/* Background ambiance */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 flex flex-col items-center"
                >
                    <div className="mb-4 p-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 animate-pulse">
                        <GraduationCap className="w-8 h-8" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                        My <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
                        An educational timeline tracing the path that forged my engineering logic and creative vision.
                    </p>
                    <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-500 mx-auto mt-6"></div>
                </motion.div>

                {/* Vertical Timeline container */}
                <div className="relative wrap overflow-hidden p-4 sm:p-10 h-full">

                    {/* Center glowing line for desktop / left line for mobile */}
                    <div className="absolute border-opacity-20 border-gray-700 bg-gray-200 dark:bg-gray-800 h-full border 
                                    left-[40px] md:left-1/2 md:-translate-x-1/2 w-[2px] 
                                    shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-full z-0 overflow-hidden">

                        {/* Animated traveling light along the central wire */}
                        <motion.div
                            animate={{ y: ["-10%", "110%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-[2px]"
                        />
                    </div>

                    {educationData.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={item.id} className="mb-12 flex justify-between items-center w-full relative z-10 flex-col md:flex-row">

                                {/* Left Spacer (Desktop Only) */}
                                <div className={`hidden md:block w-5/12 ${isEven ? 'order-1' : 'order-3'}`}></div>

                                {/* Central Timeline Dot / Node */}
                                <div className="z-20 flex items-center bg-white dark:bg-gray-900 shadow-xl w-12 h-12 rounded-full border-4 absolute left-[15px] md:left-1/2 md:-translate-x-1/2 group-hover:scale-110 transition-transform md:order-2"
                                    style={{ borderColor: item.color === 'amber' ? '#f59e0b' : item.color === 'cyan' ? '#06b6d4' : '#10b981' }}>
                                    <h1 className="mx-auto font-semibold text-lg flex justify-center items-center w-full h-full">
                                        <div className="w-3 h-3 rounded-full animate-ping-slow"
                                            style={{ backgroundColor: item.color === 'amber' ? '#f59e0b' : item.color === 'cyan' ? '#06b6d4' : '#10b981' }}></div>
                                    </h1>
                                </div>

                                {/* Timeline Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    whileHover={{ y: -5 }}
                                    className={`bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl shadow-lg hover:shadow-2xl transition-all p-6 md:p-8 w-full md:w-5/12 ml-16 md:ml-0 group relative overflow-hidden ${isEven ? 'md:order-3' : 'md:order-1'}`}
                                >
                                    {/* Hover glow tint inside card */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                        style={{ backgroundImage: `linear-gradient(to bottom right, transparent, ${item.color === 'amber' ? '#f59e0b' : item.color === 'cyan' ? '#06b6d4' : '#10b981'})` }} />

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300`}>
                                                <Calendar className="w-3.5 h-3.5" />
                                                {item.year}
                                            </span>
                                            <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
                                                {item.icon}
                                            </div>
                                        </div>

                                        <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-1">
                                            {item.title}
                                        </h3>
                                        <h4 className="text-md font-medium text-gray-700 dark:text-gray-400 mb-4 flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-gray-400" />
                                            {item.institution}
                                        </h4>

                                        <div className="flex items-center gap-4 border-t border-gray-200 dark:border-white/10 pt-4 mt-2">
                                            <div className="flex flex-col">
                                                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Marks/Score</span>
                                                <span className="font-bold text-lg text-gray-900 dark:text-gray-200">{item.marks}</span>
                                            </div>
                                            <div className="h-8 w-px bg-gray-200 dark:bg-white/10 mx-2"></div>
                                            <div className="flex flex-col">
                                                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Board/Uni</span>
                                                <span className="font-medium text-sm text-gray-700 dark:text-gray-400">{item.board}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
