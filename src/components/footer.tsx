"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUp, Send, Mail } from "lucide-react";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer id="contact" className="py-32 md:py-64 px-6 md:px-12 lg:px-24 border-t border-foreground/5 bg-dots relative overflow-hidden">
            {/* Background Text */}
            <div className="absolute -bottom-10 -right-20 opacity-[0.015] text-[30vw] font-serif select-none pointer-events-none italic leading-none">
                Contact.
            </div>

            <div className="max-w-[1800px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
                    <div className="lg:col-span-7 space-y-12">
                        <div className="space-y-6">
                            <span className="text-[10px] font-bold tracking-[0.5em] text-accent uppercase flex items-center gap-4">
                                <span className="w-12 h-[1px] bg-accent" /> Connect_Protocol
                            </span>
                            <h2 className="text-5xl md:text-8xl lg:text-9xl font-serif tracking-tighter leading-none">
                                Parlons de <br /> <span className="italic text-stroke hover:text-foreground transition-all duration-1000 cursor-default">demain.</span>
                            </h2>
                        </div>

                        <div className="pt-8">
                            <motion.a
                                href="mailto:enzocouteau.pro@gmail.com"
                                whileHover={{ scale: 1.02 }}
                                className="group inline-flex items-center gap-6 px-10 py-6 border border-foreground/10 rounded-full glass hover:border-accent/40 transition-all duration-500"
                            >
                                <span className="text-xl md:text-2xl font-light tracking-tight group-hover:text-accent transition-colors">
                                    enzocouteau.pro@gmail.com
                                </span>
                                <div className="p-4 bg-foreground/5 rounded-full group-hover:bg-accent group-hover:text-background transition-all duration-500">
                                    <Mail size={18} />
                                </div>
                            </motion.a>
                        </div>
                    </div>

                    <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end gap-16">
                        <div className="space-y-6">
                            <p className="text-[10px] font-mono opacity-40 uppercase tracking-[0.3em]">Networking</p>
                            <div className="flex flex-col gap-4 text-sm font-medium">
                                <a href="https://github.com/zoen-ct" target="_blank" className="hover:text-accent transition-all flex items-center gap-3 hover-underline w-fit">
                                    <Github size={16} strokeWidth={1.5} /> GitHub.com/zoen-ct
                                </a>
                                <a href="https://linkedin.com/in/enzo-couteau" target="_blank" className="hover:text-accent transition-all flex items-center gap-3 hover-underline w-fit">
                                    <Linkedin size={16} strokeWidth={1.5} /> LinkedIn.com/in/enzo-couteau
                                </a>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-[10px] font-mono opacity-40 uppercase tracking-[0.3em]">Localisation</p>
                            <div className="text-sm font-light uppercase tracking-widest flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                                <span>Paris, France / 2025 Edition</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-foreground/10 gap-12">
                    <div className="flex flex-col gap-2">
                        <span className="text-[9px] font-mono opacity-30 uppercase tracking-[0.4em]">© 2025 Precision Engineering</span>
                        <span className="text-[9px] font-mono opacity-30 uppercase tracking-[0.4em]">Designed by Enzo Couteau</span>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="group flex flex-col items-center gap-4 text-[9px] font-bold tracking-[0.6em] uppercase transition-all"
                    >
                        <div className="p-5 border border-foreground/10 rounded-full group-hover:border-accent group-hover:-translate-y-2 transition-all duration-700 glass">
                            <ArrowUp size={16} />
                        </div>
                        <span className="opacity-0 group-hover:opacity-40 transition-opacity">Back to top</span>
                    </button>

                    <div className="flex flex-col items-end gap-2 text-[9px] font-mono opacity-40 tracking-[0.2em] uppercase">
                        <div className="flex gap-2 items-center">
                            <span>Status: Available</span>
                            <div className="flex gap-1">
                                <div className="w-0.5 h-3 bg-accent" />
                                <div className="w-0.5 h-3 bg-accent/40" />
                                <div className="w-0.5 h-3 bg-accent/20" />
                            </div>
                        </div>
                        <span>Build_V1.2.0</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

