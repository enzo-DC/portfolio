"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Vera",
        type: "Fact-checking",
        tech: ["Angular", "Node.js", "Tailwind CSS", "Vera API"],
        year: "2025",
        link: "https://vera-app-client.vercel.app/",
        image: "/images/vera.png",
        color: "#0a0a0a"
    },
    {
        title: "Bot Vera",
        type: "Fact-checking, Bot Telegram",
        tech: ["Python", "Vera API"],
        year: "2025",
        link: "https://github.com/enzo-DC/bot",
        image: "/images/vera.png",
        color: "#0a0a0a"
    },
    {
        title: "Lalachante",
        type: "Vitrines, Back-office",
        tech: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Livewire"],
        year: "2024",
        link: "https://www.lalachante.fr/",
        image: "/images/lalachante.png",
        color: "#0a0a0a"
    },
    {
        title: "Visu",
        type: "App de suivi de séries et films",
        tech: ["Flutter", "Firebase", "TMDb API"],
        year: "2025",
        link: "https://github.com/zoen-ct/visu",
        image: "/images/visu.png",
        color: "#111111"
    },
    {
        title: "Sebi",
        type: "Application éducative",
        tech: ["Interactive", "Node.js", "Next.js", "Tailwind CSS", "PWA"],
        year: "2025",
        link: "https://sebi-kids.vercel.app/",
        image: "/images/sebi.png",
        color: "#171717"
    },
    {
        title: "Tools for Schools",
        type: "Passassion d'examen",
        tech: ["Django", "Python", "Tailwind CSS", "React", "PostgreSQL", "Docker"],
        year: "2026",
        link: "https://github.com/iMxSquash/django_projet",
        image: "/images/django_scool.png",
        color: "#171717"
    },
    {
        title: "Garde Temps",
        type: "bibliothèque de montres",
        tech: ["Django", "Python", "Tailwind CSS", "Vue", "PostgreSQL"],
        year: "2026",
        link: "https://github.com/enzo-DC/garde_temps",
        image: "/images/garde_temps.png",
        color: "#171717"
    },
    {
        title: "Echec Pro",
        type: "Jeu d'échecs",
        tech: ["Next.js", "Tailwind CSS", "Chess.js", "Chessboard.js", "PWA"],
        year: "2026",
        link: "https://echecs-app.vercel.app/",
        image: "/images/echec_pro.png",
        color: "#1c1c1c"
    },
    {
        title: "Anomi",
        type: "Media sur l'animation",
        tech: ["Next.js", "Tailwind CSS", "MongoDB", "Supabase", "PWA"],
        year: "2025",
        link: "https://anomi-six.vercel.app/",
        image: "/images/anomi.webp",
        color: "#1c1c1c"
    },
    {
        title: "Elkair",
        type: "Site vitrine",
        tech: ["Wordpress", "PHP", "Tailwind CSS", "MySQL"],
        year: "2025",
        link: "https://github.com/zoen-ct/Elkhair",
        image: "/images/elkair.jpg",
        color: "#1c1c1c"
    }
];

export function ProjectList() {
    return (
        <section id="work" className="py-32 md:py-64 px-6 md:px-12 lg:px-24 border-t border-foreground/5 relative">
            <div className="max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 md:mb-40 gap-8">
                    <div className="space-y-6">
                        <span className="text-[10px] font-bold tracking-[0.5em] text-accent uppercase flex items-center gap-4">
                            <span className="w-12 h-[1.5px] bg-accent" /> Portfolio_Work
                        </span>
                        <h2 className="text-5xl md:text-8xl lg:text-9xl font-serif tracking-tighter leading-none">
                            Sélection <br className="md:hidden" /> <span className="italic text-stroke hover:text-foreground transition-all duration-1000 cursor-default">de projets</span>
                        </h2>
                    </div>
                    <div className="flex flex-col items-end gap-2 font-mono text-[10px] opacity-40 uppercase tracking-[0.2em] select-none">
                        <span>Total_Items: 0{projects.length}</span>
                        <span>Built with Precision</span>
                    </div>
                </div>

                <div className="flex flex-col">
                    {projects.map((project, index) => (
                        <ProjectItem key={index} project={project} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 border-t border-foreground/10 pt-12 flex justify-between items-center"
                >
                    <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.5em]">Archives complètes bientôt disponibles</span>
                    <a href="https://github.com/enzo-DC" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest hover:text-accent transition-colors">
                        Voir plus sur GitHub
                        <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

function ProjectItem({ project, index }: { project: any; index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 200 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        // Offset the preview relative to the mouse
        mouseX.set(clientX + 20);
        mouseY.set(clientY - 120);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            className="group relative border-b border-foreground/10 py-12 md:py-20 cursor-none"
        >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10 transition-all duration-700">
                <div className="flex items-start md:items-center gap-6 md:gap-12">
                    <span className="text-[11px] font-mono opacity-20 mt-2 md:mt-0 select-none">0{index + 1}</span>
                    <div className="flex flex-col gap-2">
                        <span className="text-[9px] tracking-[0.4em] uppercase text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.type}</span>
                        <h3 className="text-4xl md:text-7xl lg:text-8xl font-serif tracking-tighter transition-all duration-700 group-hover:pl-4 group-hover:italic">
                            {project.title}
                        </h3>
                    </div>
                </div>

                <div className="flex flex-col md:items-end gap-6">
                    <div className="flex gap-3 flex-wrap md:justify-end">
                        {project.tech.map((t: string) => (
                            <span key={t} className="text-[8px] uppercase tracking-[0.2em] font-bold border border-foreground/10 px-4 py-1.5 rounded-full glass group-hover:border-accent/40 transition-colors">
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] font-mono opacity-30 tracking-tighter">{project.year}</span>
                        <div className="w-16 h-[1.5px] bg-foreground/10 group-hover:w-32 group-hover:bg-accent transition-all duration-700 ease-[0.16,1,0.3,1]" />
                    </div>
                </div>
            </a>

            {/* Floating Image Preview */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        style={{ x, y, position: "fixed", top: 0, left: 0 }}
                        className="pointer-events-none z-50 hidden lg:block"
                    >
                        <div className="relative w-[400px] h-[260px] rounded-lg overflow-hidden glass border-2 border-accent/20 shadow-2xl">
                            <div
                                className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000"
                                style={{
                                    backgroundColor: project.color,
                                    backgroundImage: project.image ? `url(${project.image})` : undefined
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay" />
                            <div className="absolute top-4 left-4 flex gap-2">
                                <span className="px-2 py-1 bg-black/40 backdrop-blur-md rounded text-[8px] font-mono text-white/80 uppercase">Modèle_Active</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

