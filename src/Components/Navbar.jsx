import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Home, User, Cpu, Clock, Briefcase, Mail } from 'lucide-react';

export const Navbar = ({ isDarkMode, isSidebarOpen, setIsDarkMode, setIsSidebarOpen }) => {

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="">
                {/* Overlay for sidebar on mobile */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
                        onClick={toggleSidebar}
                    ></div>
                )}

                {/* Sidebar for mobile */}
                <div className={`fixed top-0 left-0 h-full w-72 bg-white/20 dark:bg-black/10 backdrop-blur-2xl border-r border-white/50 dark:border-gray-500/70 shadow-2xl transform transition-all duration-500 ease-in-out z-50 md:hidden ${isSidebarOpen ? 'translate-x-0 scale-100' : '-translate-x-full scale-95'}`}>
                    <div className="flex flex-col p-6 space-y-6">
                        <div className="flex flex-row justify-between items-center">

                            {/* Logo */}

                            <a href="#" className="text-2xl font-black tracking-tight text-gray-900 dark:text-white transition-all duration-300 hover:scale-105 flex items-center gap-1 group mb-4-p-3">
                                <span className="text-cyan-500 dark:text-cyan-400 group-hover:text-purple-500 transition-colors">&lt;</span>
                                <span className="group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">Dipten</span>
                                <span className="text-cyan-500 dark:text-cyan-400 group-hover:text-emerald-500 transition-colors">/&gt;</span>
                            </a>


                            {/* Close button (cross) */}
                            <button
                                onClick={toggleSidebar}
                                className="text-amber-50 bg-white/20 backdrop-blur-xl mb-3 border-0 rounded-full p-2">
                                <X />
                            </button>

                        </div>

                        {/* Nav Links with icons and enhanced hover */}
                        <a href="#" onClick={toggleSidebar} className="group relative flex items-center space-x-3 text-gray-900 dark:text-white px-4 py-3 transition-colors duration-300 hover:text-cyan-500">
                            <Home className="w-5 h-5 relative z-10" />
                            <span className="relative z-10">Home</span>
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#about" onClick={toggleSidebar} className="group relative flex items-center space-x-3 text-gray-900 dark:text-white px-4 py-3 transition-colors duration-300 hover:text-cyan-500">
                            <User className="w-5 h-5 relative z-10" />
                            <span className="relative z-10">About</span>
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#skills" onClick={toggleSidebar} className="group relative flex items-center space-x-3 text-gray-900 dark:text-white px-4 py-3 transition-colors duration-300 hover:text-cyan-500">
                            <Cpu className="w-5 h-5 relative z-10" />
                            <span className="relative z-10">Skills</span>
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#timeline" onClick={toggleSidebar} className="group relative flex items-center space-x-3 text-gray-900 dark:text-white px-4 py-3 transition-colors duration-300 hover:text-cyan-500">
                            <Clock className="w-5 h-5 relative z-10" />
                            <span className="relative z-10">Timeline</span>
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#works" onClick={toggleSidebar} className="group relative flex items-center space-x-3 text-gray-900 dark:text-white px-4 py-3 transition-colors duration-300 hover:text-cyan-500">
                            <Briefcase className="w-5 h-5 relative z-10" />
                            <span className="relative z-10">Works</span>
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#contact" onClick={toggleSidebar} className="group relative flex items-center space-x-3 text-gray-900 dark:text-white px-4 py-3 transition-colors duration-300 hover:text-cyan-500">
                            <Mail className="w-5 h-5 relative z-10" />
                            <span className="relative z-10">Contact</span>
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>
                </div>

                {/* Main Nav Bar */}
                <nav className="fixed top-0 left-0 w-full z-30 bg-white/10 dark:bg-black/ backdrop-blur-[1px] border-b border-white/50 dark:border-gray-500/70 shadow-2xl">
                    <div className="container mx-auto pr-4 pl-3 py-3 flex items-center justify-between">


                        <div className='flex justify-center items-center gap-3.5'>
                            {/* Mobile hamburger menu button */}
                            <button
                                onClick={toggleSidebar}
                                className="md:hidden bg-white/30 dark:bg-black/40 backdrop-blur-xl text-gray-900 dark:text-white p-2 rounded-full border border-white/60 dark:border-gray-400/80 shadow-lg hover:bg-white/60 dark:hover:bg-black/60 hover:scale-102 transition-all duration-200"
                            >
                                <Menu />
                            </button>

                            {/* Logo on the left */}
                            {!isSidebarOpen && (
                                <a href="#" className="text-2xl font-black tracking-tight text-gray-900 dark:text-white transition-all duration-300 hover:scale-105 flex items-center gap-1 group">
                                    <span className="text-cyan-500 dark:text-cyan-400 group-hover:text-purple-500 transition-colors">&lt;</span>
                                    <span className="group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">Dipten</span>
                                    <span className="text-cyan-500 dark:text-cyan-400 group-hover:text-emerald-500 transition-colors">/&gt;</span>
                                </a>
                            )}

                        </div>

                        {/* Desktop Center nav links wrapped in another glass box */}
                        <div className="hidden md:flex space-x-6 bg-white/30 dark:bg-black/40 backdrop-blur-xl rounded-full px-6 py-2 border border-white/60 dark:border-gray-400/80 shadow-xl">
                            <a href="#" className="group relative text-gray-900 dark:text-white px-3 py-1 transition-colors duration-300 hover:text-cyan-500">
                                <span className="relative z-10">Home</span>
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a href="#about" className="group relative text-gray-900 dark:text-white px-3 py-1 transition-colors duration-300 hover:text-cyan-500">
                                <span className="relative z-10">About</span>
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a href="#skills" className="group relative text-gray-900 dark:text-white px-3 py-1 transition-colors duration-300 hover:text-cyan-500">
                                <span className="relative z-10">Skills</span>
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a href="#timeline" className="group relative text-gray-900 dark:text-white px-3 py-1 transition-colors duration-300 hover:text-cyan-500">
                                <span className="relative z-10">Timeline</span>
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a href="#works" className="group relative text-gray-900 dark:text-white px-3 py-1 transition-colors duration-300 hover:text-cyan-500">
                                <span className="relative z-10">Works</span>
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a href="#contact" className="group relative text-gray-900 dark:text-white px-3 py-1 transition-colors duration-300 hover:text-cyan-500">
                                <span className="relative z-10">Contact</span>
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </div>

                        {/* Toggle theme button on the right */}
                        <button
                            onClick={toggleTheme}
                            className="bg-white/5 dark:bg-black/5 backdrop-blur-xl text-gray-900 dark:text-white px-1 py-1 rounded-full shadow-lg hover:bg-white/40 dark:hover:bg-black/50 hover:scale-105 transition-all duration-200"
                        >
                            {isDarkMode ? <Sun className='text-yellow-300' /> : <Moon />}
                        </button>

                    </div>
                </nav>
            </div>
        </>
    );
};
