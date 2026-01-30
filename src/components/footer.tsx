"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUp, Send } from "lucide-react";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer id="contact" className="py-48 px-6 md:px-12 border-t border-foreground/10 bg-dots relative overflow-hidden">
            {/* Decorative large text */}
            <div className="absolute -bottom-24 -left-20 opacity-[0.02] text-[20vw] font-serif select-none pointer-events-none line-clamp-1 italic">
                Esprit_Technique
            </div>

            <div className="max-w-[1800px] mx-auto relative z-10">
                <div className="editorial-grid mb-32">
                    <div className="col-span-12 lg:col-span-7 space-y-12">
                        <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-accent" /> Protocole_Contact
                        </span>
                        <h2 className="text-5xl md:text-9xl font-serif tracking-tighter leading-none italic">
                            Disponibilité <br /> <span className="text-stroke not-italic opacity-40 italic">immédiate.</span>
                        </h2>

                        <div className="pt-12">
                            <a
                                href="mailto:enzocouteau.pro@gmail.com"
                                className="group inline-flex items-center gap-6 text-2xl md:text-4xl hover:text-accent transition-all duration-700"
                            >
                                enzocouteau.pro@gmail.com
                                <div className="p-4 border border-foreground/10 rounded-full group-hover:bg-accent group-hover:text-background transition-all">
                                    <Send size={20} />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-start-9 lg:col-span-4 flex flex-col justify-end gap-16 mt-20 lg:mt-0">
                        <div className="space-y-4">
                            <p className="text-xs font-mono opacity-40 uppercase tracking-widest ">Réseaux_Sociaux</p>
                            <div className="flex gap-8 text-sm font-medium tracking-tight">
                                <a href="https://github.com/zoen-ct" target="_blank" className="hover:text-accent transition-all flex items-center gap-2 hover-underline">
                                    <Github size={14} /> GitHub
                                </a>
                                <a href="https://linkedin.com/in/enzo-couteau" target="_blank" className="hover:text-accent transition-all flex items-center gap-2 hover-underline">
                                    <Linkedin size={14} /> LinkedIn
                                </a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-xs font-mono opacity-40 uppercase tracking-widest">Heure_Locale</p>
                            <p className="text-sm font-light uppercase tracking-widest">{new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })} Paris, FR</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-24 border-t border-foreground/5 gap-8">
                    <div className="flex flex-col gap-1">
                        <span className="text-[9px] font-mono opacity-30 uppercase tracking-[0.2em]">© 2024 Conçu avec Précision</span>
                        <span className="text-[9px] font-mono opacity-30 uppercase tracking-[0.2em]">Réalisé par Enzo Couteau®</span>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="group flex flex-col items-center gap-4 text-[9px] font-bold tracking-[0.4em] uppercase"
                    >
                        HAUT
                        <div className="p-4 border border-foreground/10 rounded-full group-hover:border-accent group-hover:-translate-y-2 transition-all duration-500">
                            <ArrowUp size={14} />
                        </div>
                    </button>

                    <div className="flex flex-col items-end gap-1">
                        <span className="text-[9px] font-mono opacity-30 uppercase tracking-[0.2em]">Version_0.8.2_Bêta</span>
                        <div className="flex gap-1">
                            <div className="w-1 h-1 bg-accent/20 rounded-full" />
                            <div className="w-1 h-1 bg-accent/20 rounded-full" />
                            <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
