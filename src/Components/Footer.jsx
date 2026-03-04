import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="relative w-full border-t border-gray-200 dark:border-white/10 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl z-20 mt-20">
            {/* Top Glowing Trim */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand / Logo */}
                    <div className="flex flex-col items-center md:items-start">
                        <span className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white flex items-center gap-2">
                            <span className="text-cyan-500">&lt;</span>
                            Diptendu Das
                            <span className="text-cyan-500">/&gt;</span>
                        </span>
                        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm text-center md:text-left">
                            Electrical Engineer <span className="text-cyan-500 font-bold px-1">×</span> Web Developer
                        </p>
                    </div>

                    {/* Quick Socials */}
                    <div className="flex gap-4">
                        <a href="https://github.com/diptendu-das" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-cyan-500 hover:text-white hover:-translate-y-1 transition-all shadow-sm">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEYlQlVWC9rpwAAAZy3OuwQWVZg90XlbjFTUDLvnqrFuR5couC82XY26IyanTVeVoYRHpEj1o1KBOfYa0nehxKH9GalYRMdmh0gb2KmPdgKlxjKwIOo6QNKE2EoaSAQu9DS_J0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdiptendu-das-35a614334" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-cyan-500 hover:text-white hover:-translate-y-1 transition-all shadow-sm">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-cyan-500 hover:text-white hover:-translate-y-1 transition-all shadow-sm">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="mailto:diptendudas522@gmail.com" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-cyan-500 hover:text-white hover:-translate-y-1 transition-all shadow-sm">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center gap-1.5">
                        Designed & Built with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by Diptendu
                    </p>
                    <p className="text-gray-400 dark:text-gray-600 text-sm">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};