"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-dots pt-32 md:pt-40">
            {/* Éléments de fond techniques */}
            <div className="absolute top-24 left-12 hidden lg:block">
                <div className="technical-line w-48 mb-2" />
                <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest">Statut_Système: Optimal // v0.24.1</span>
            </div>

            <div className="max-w-[1800px] mx-auto w-full editorial-grid relative z-10 font-[family-name:var(--font-inter)]">
                <div className="col-span-12 md:col-start-1 md:col-span-10 xl:col-span-9">
                    <div className="flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-[1px] bg-accent/30" />
                            <span className="text-accent text-[11px] md:text-xs tracking-[0.4em] font-bold uppercase">
                                Basé à Paris, France
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col"
                        >
                            <h1 className="text-[12vw] md:text-[8rem] lg:text-[9rem] font-serif leading-[0.85] tracking-tighter">
                                Concevoir des <br />
                                <span className="italic relative inline-block">
                                    interfaces
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: 1, duration: 1.5 }}
                                        className="absolute -bottom-2 left-0 h-[1px] bg-accent/20"
                                    />
                                </span> <br />
                                techniques.
                            </h1>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 1 }}
                                className="max-w-md text-sm md:text-base text-foreground/70 leading-relaxed font-light"
                            >
                                Salut, je suis <span className="text-foreground font-medium uppercase tracking-tight">Enzo Couteau</span>. Un développeur web passionné par l&apos;intersection du code précis et du design éditorial. Je crée des expériences digitales à la fois techniques et élégantes.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-col justify-end items-start md:items-end gap-4"
                            >
                                <div className="flex flex-col md:items-end font-mono text-[10px] opacity-40">
                                    <span>LAT: 48.8566</span>
                                    <span>LONG: 2.3522</span>
                                </div>
                                <a
                                    href="#work"
                                    className="group flex items-center gap-3 px-6 py-3 border border-foreground/10 hover:border-foreground/40 transition-all rounded-full glass"
                                >
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Voir mes travaux</span>
                                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative vertical number strip */}
            <div className="absolute right-12 top-0 bottom-0 flex flex-col justify-between py-24 opacity-10 font-mono text-[9px] hidden lg:flex select-none">
                {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i}>0{i + 1}</span>
                ))}
            </div>
        </section>
    );
}
