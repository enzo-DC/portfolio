"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = {
    frontend: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"],
    backend: ["Laravel", "Symfony", "Node.js", "Livewire", "SQL"],
    design: ["Photoshop", "Illustrator", "UI Design"],
};

const experiences = [
    {
        role: "Stage Développeur Web",
        company: "Lalachante",
        location: "Toulouse",
        period: "2024",
        description: "Intégration de l'écosystème TALL pour des applications haute performance."
    },
    {
        role: "Job Étudiant",
        company: "Leclerc",
        location: "Achères",
        period: "2023 — Présent",
    }
];

export function About() {
    return (
        <section id="about" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 border-t border-foreground/5 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none select-none">
                <div className="bg-grid w-full h-full" />
            </div>

            <div className="max-w-[1800px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-end mb-16 md:mb-24">
                    {/* Left Column: Image & Intro */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-foreground/10"
                        >
                            <Image
                                src="/images/abstract.png"
                                alt="Technical Abstract"
                                fill
                                className="object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
                        </motion.div>
                    </div>

                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="pb-1"
                        >
                            <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.1] font-light tracking-tight">
                                Je cherche à apporter <span className="text-stroke italic">mes valeurs</span> à un environnement professionnel.
                                <span className="text-foreground font-medium underline underline-offset-[12px] decoration-accent/30 decoration-[1.5px]"> Rigoureux et déterminé</span>,
                                j'ai appris à collaborer efficacement pour atteindre des objectifs communs.
                            </h2>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Section: Details & Skills */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
                    <div className="lg:col-span-5 px-1">
                        <div className="space-y-6 sticky top-32">
                            <span className="text-[10px] font-bold tracking-[0.5em] text-accent uppercase flex items-center gap-4">
                                <span className="w-12 h-[1.5px] bg-accent" /> Profil_Info
                            </span>
                            <h3 className="text-3xl md:text-4xl font-serif italic">L&apos;approche technique.</h3>
                            <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-light max-w-md">
                                Fusionner la rigueur du sport de haut niveau avec la précision chirurgicale du développement moderne.
                                Mon parcours est guidé par une quête constante de simplicité et de performance.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Bio & Skills */}
                    <div className="lg:col-span-7 space-y-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                            <div className="space-y-8 pt-6 border-t border-foreground/10">
                                <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-40">Compétences</span>
                                <div className="space-y-8">
                                    {Object.entries(skills).map(([category, items], i) => (
                                        <motion.div
                                            key={category}
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="space-y-2"
                                        >
                                            <h4 className="text-[11px] uppercase font-bold text-accent tracking-widest">{category}</h4>
                                            <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm font-light">
                                                {items.map((skill, si) => (
                                                    <span key={skill} className="hover:text-accent transition-colors">
                                                        {skill}{si < items.length - 1 ? " /" : ""}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-8 pt-6 border-t border-foreground/10">
                                <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-40">Expériences</span>
                                <div className="space-y-10">
                                    {experiences.map((exp, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="group relative"
                                        >
                                            <span className="text-[10px] font-mono opacity-30 mb-2 block tracking-widest">{exp.period}</span>
                                            <h4 className="text-xl font-serif group-hover:italic transition-all duration-500">{exp.role}</h4>
                                            <div className="flex justify-between items-baseline mt-2">
                                                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">{exp.company}</span>
                                                <span className="text-[9px] opacity-40 uppercase tracking-widest">{exp.location}</span>
                                            </div>
                                            {exp.description && (
                                                <p className="text-[11px] mt-4 text-foreground/50 leading-relaxed font-light group-hover:text-foreground/70 transition-colors">
                                                    {exp.description}
                                                </p>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
