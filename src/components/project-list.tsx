"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";
import { MoveRight } from "lucide-react";

const projects = [
    {
        title: "Clone X",
        type: "Architecture System",
        tech: ["Next.js", "MongoDB", "High-Performance"],
        year: "2024",
        link: "#",
        color: "#0F172A"
    },
    {
        title: "EcoMotion",
        type: "Sustainable Platform",
        tech: ["Search Engine", "Next.js", "SEO"],
        year: "2024",
        link: "#",
        color: "#1E293B"
    },
    {
        title: "Kids Hub",
        type: "Educational WebApp",
        tech: ["Interactive", "React", "Node.js"],
        year: "2023",
        link: "#",
        color: "#334155"
    },
    {
        title: "Minimal Bio",
        type: "Personal Design",
        tech: ["Minimalism", "Portfolio", "Framer"],
        year: "2024",
        link: "#",
        color: "#475569"
    }
];

export function ProjectList() {
    return (
        <section id="work" className="py-64 px-6 md:px-12 bg-foreground/[0.02]">
            <div className="max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-8">
                    <div className="space-y-4">
                        <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-accent" /> Travaux_Sélectionnés
                        </span>
                        <h2 className="text-5xl md:text-8xl font-serif tracking-tighter">
                            Archive <span className="italic">Saisonnière.</span>
                        </h2>
                    </div>
                    <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest bg-foreground/5 px-4 py-2 rounded-full">
                        Éléments_Totaux: 0{projects.length} // Vol. 1
                    </span>
                </div>

                <div className="space-y-0">
                    {projects.map((project, index) => (
                        <ProjectItem key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectItem({ project, index }: { project: any; index: number }) {
    const [isHovered, setIsHovered] = React.useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = 150; // Half of preview width
        const centerY = 100; // Half of preview height
        mouseX.set(e.clientX - rect.left - centerX);
        mouseY.set(e.clientY - rect.top - centerY);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            className="group relative border-b border-foreground/10 py-16 md:py-24 cursor-none overflow-visible"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 relative z-10 transition-transform duration-700 group-hover:translate-x-4">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-6">
                        <span className="text-[11px] font-mono opacity-30 select-none">/ 0{index + 1}</span>
                        <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-bold">{project.type}</span>
                    </div>
                    <h3 className="text-5xl md:text-9xl font-serif tracking-tighter transition-all duration-700 group-hover:italic group-hover:opacity-100 opacity-60">
                        {project.title}
                    </h3>
                </div>

                <div className="flex flex-col md:items-end gap-8">
                    <div className="flex gap-4 flex-wrap md:justify-end">
                        {project.tech.map((t: string) => (
                            <span key={t} className="text-[9px] uppercase tracking-widest font-mono border border-foreground/10 px-3 py-1 rounded-full bg-foreground/[0.02]">
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="text-xs font-mono opacity-40">{project.year}</span>
                        <div className="w-12 h-[1px] bg-foreground/10 group-hover:w-24 group-hover:bg-accent transition-all duration-700" />
                        <MoveRight size={24} className="group-hover:translate-x-2 transition-transform duration-700 opacity-20 group-hover:opacity-100" />
                    </div>
                </div>
            </div>

            {/* Floating Canvas Preview */}
            <motion.div
                style={{ x, y }}
                className="pointer-events-none absolute left-0 top-0 z-0 hidden lg:block"
                animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8,
                    rotate: isHovered ? 2 : 0
                }}
            >
                <div className="relative w-[300px] h-[200px] rounded-sm overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-accent/10">
                    <div
                        className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
                        style={{ backgroundColor: project.color }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                        <span className="text-[10px] font-mono text-white/60 tracking-tighter uppercase">Aperçu_Modèle_0{index + 1}</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
