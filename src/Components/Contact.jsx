import { motion } from "framer-motion";
import { Send, Mail, MapPin, Linkedin, Github } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="relative w-full py-32 px-4 md:px-16 z-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">

                {/* Left side: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-5/12 flex flex-col justify-center"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                        Let's <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 font-light mb-12 text-lg">
                        I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to engineer something cool together, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-sm">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Email</h4>
                                <a href="mailto:diptendudas522@gmail.com" className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-cyan-500 transition-colors">diptendudas522@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Location</h4>
                                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">Bhubaneswar, Odisha</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h4 className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-4">Social Profiles</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/diptendu-das" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-cyan-500 hover:text-white hover:-translate-y-1 transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEYlQlVWC9rpwAAAZy3OuwQWVZg90XlbjFTUDLvnqrFuR5couC82XY26IyanTVeVoYRHpEj1o1KBOfYa0nehxKH9GalYRMdmh0gb2KmPdgKlxjKwIOo6QNKE2EoaSAQu9DS_J0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdiptendu-das-35a614334" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-cyan-500 hover:text-white hover:-translate-y-1 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right side: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full md:w-7/12"
                >
                    <form className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-8 rounded-3xl shadow-xl relative overflow-hidden group">

                        {/* Hover glow tint inside card */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-500" />

                        <div className="relative z-10 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Project collaboration"
                                    className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    placeholder="Tell me about your project or idea..."
                                    className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-cyan-500/25 active:scale-95 group/btn"
                            >
                                Send Message
                                <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </form>
                </motion.div>

            </div>
        </section>
    );
};
