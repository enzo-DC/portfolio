"use client";

import { motion } from "framer-motion";

const skills = {
    frontend: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Alpine.js", "Framer Motion"],
    backend: ["PHP", "Laravel", "Symfony", "Node.js", "Livewire", "SQL", "MongoDB"],
    design: ["Photoshop", "Illustrator", "InDesign", "UI Design"],
};

const experiences = [
    {
        role: "Stage Développeur Web",
        company: "Lalachante",
        location: "Toulouse",
        period: "Avr — Juin 2024",
        description: "Intégration de l'écosystème TALL pour des applications haute performance."
    },
    {
        role: "Job Étudiant",
        company: "Leclerc",
        location: "Achères",
        period: "2023 — Présent",
    },
    {
        role: "Stage Graphisme PAO",
        company: "Copietout",
        location: "Romorantin",
        period: "2020",
    }
];

export function About() {
    return (
        <section id="about" className="py-48 px-6 md:px-12 border-t border-foreground/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full border-l border-foreground/5 hidden lg:block" />

            <div className="max-w-[1800px] mx-auto relative z-10">
                <div className="editorial-grid">
                    {/* Section Header */}
                    <div className="col-span-12 lg:col-span-4 mb-24 lg:mb-0">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="sticky top-32 space-y-4"
                        >
                            <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-accent" /> Profil_Info
                            </span>
                            <h2 className="text-6xl md:text-8xl font-serif leading-none italic opacity-10 select-none absolute -top-12 -left-8">
                                Profil
                            </h2>
                            <h3 className="text-4xl md:text-6xl font-serif relative">L&apos;approche.</h3>
                            <p className="text-sm text-foreground/50 max-w-xs mt-12 font-light leading-relaxed">
                                Fusionner la rigueur du sport de haut niveau (Rugby) avec la précision chirurgicale du développement moderne.
                            </p>
                        </motion.div>
                    </div>

                    {/* Bio Content */}
                    <div className="col-span-12 lg:col-span-8 space-y-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <p className="text-2xl md:text-5xl leading-[1.1] font-light tracking-tight pr-12">
                                Je cherche à apporter <span className="text-stroke italic">mes valeurs</span> à un environnement professionnel. <span className="text-foreground font-medium underline underline-offset-8 decoration-accent/30 decoration-1">Rigoureux et déterminé</span>, j'ai appris à collaborer efficacement avec les autres pour atteindre des objectifs communs.
                            </p>

                            <div className="technical-line w-full" />
                        </motion.div>

                        {/* Skills & Experience Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                            <div className="space-y-12">
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Compétences_Techniques</span>
                                <div className="space-y-8">
                                    {Object.entries(skills).map(([category, items]) => (
                                        <div key={category} className="space-y-3">
                                            <h4 className="text-[11px] uppercase font-bold text-accent">{category}</h4>
                                            <div className="flex flex-wrap gap-2 text-sm font-light">
                                                {items.join(" / ")}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-12">
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Expériences_Clés</span>
                                <div className="space-y-12">
                                    {experiences.map((exp, i) => (
                                        <div key={i} className="group relative">
                                            <span className="text-[10px] font-mono opacity-30 mb-2 block">{exp.period}</span>
                                            <h4 className="text-xl font-serif group-hover:italic transition-all">{exp.role}</h4>
                                            <div className="flex justify-between items-baseline mt-1">
                                                <span className="text-xs font-bold uppercase tracking-widest">{exp.company}</span>
                                                <span className="text-[9px] opacity-40">{exp.location}</span>
                                            </div>
                                            {exp.description && (
                                                <p className="text-[11px] mt-2 text-foreground/50 leading-relaxed max-w-xs">
                                                    {exp.description}
                                                </p>
                                            )}
                                        </div>
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
