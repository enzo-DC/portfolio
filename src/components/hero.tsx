"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const { scrollY } = useScroll();

    // Magnetic logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
    const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Max displacement of 20px
        mouseX.set(distanceX * 0.35);
        mouseY.set(distanceY * 0.35);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    // Parallax effect for the background elements
    const y1 = useTransform(scrollY, [0, 500], [0, -100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -200]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: "100%", opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1] as any,
            },
        },
    };

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden bg-dots pt-32 md:pt-40">
            {/* Éléments de fond techniques avec parallaxe */}
            <motion.div style={{ y: y1 }} className="absolute top-20 left-12 hidden lg:block select-none pointer-events-none">
                <div className="technical-line w-64 mb-3" />
                <span className="text-[10px] font-mono opacity-50 uppercase tracking-[0.5em] font-medium">
                    Creative Developer
                </span>
            </motion.div>

            <motion.div style={{ y: y2 }} className="absolute bottom-40 right-24 hidden lg:block opacity-10 select-none pointer-events-none">
                <span className="text-[15vw] font-serif italic leading-none">Design</span>
            </motion.div>

            <div className="max-w-[1800px] mx-auto w-full relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-4 md:gap-8"
                >
                    <div className="flex flex-col">
                        <div className="overflow-hidden py-2 px-1">
                            <motion.h1
                                variants={itemVariants}
                                className="text-[14vw] sm:text-[12vw] md:text-[8rem] lg:text-[10rem] font-serif leading-[0.82] tracking-tighter"
                            >
                                Concevoir <br className="hidden md:block" />
                                des <span className="text-stroke text-foreground/80 italic hover:text-foreground transition-all duration-700 cursor-default">interfaces</span> <br />
                                techniques.
                            </motion.h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-8 md:mt-16 items-end pb-12">
                        <motion.div
                            variants={itemVariants}
                            className="md:col-span-6 lg:col-span-5"
                        >
                            <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-light">
                                <span className="font-medium text-foreground uppercase tracking-tight">Enzo Couteau</span> —
                                Développeur web explorant les limites entre l'esthétique minimaliste et la précision technique.
                                Basé à Paris, créant des expériences digitales haut de gamme.
                            </p>

                            <div className="mt-8 flex items-center gap-6">
                                <div className="flex flex-col font-mono text-[10px] opacity-40 uppercase tracking-widest">
                                    <span>Paris / France</span>
                                    <span>© 2025 Edition </span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="md:col-start-8 md:col-span-5 lg:col-start-9 lg:col-span-4 flex justify-end md:justify-end pr-4 md:pr-0"
                        >
                            <motion.a
                                ref={buttonRef}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                href="#work"
                                style={{ x: springX, y: springY }}
                                className="group relative flex flex-col items-center justify-center w-40 h-40 md:w-56 md:h-56 border border-foreground/10 hover:border-accent/40 transition-all duration-300 rounded-full glass cursor-none bg-background/5"
                            >
                                {/* Magnetic Inner Content */}
                                <motion.div
                                    className="relative z-10 flex flex-col items-center gap-4"
                                    style={{ x: useTransform(springX, v => v * 0.4), y: useTransform(springY, v => v * 0.4) }}
                                >
                                    <span className="text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase text-center leading-tight">
                                        Voir mes <br /> travaux
                                    </span>
                                    <motion.div
                                        animate={{ y: [0, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40 group-hover:opacity-100 group-hover:text-accent transition-all duration-500">
                                            <path d="M7 1V13M7 13L1 7M7 13L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </motion.div>
                                </motion.div>

                                {/* Hover backgrounds */}
                                <motion.div
                                    className="absolute inset-2 border border-accent/0 group-hover:border-accent/20 rounded-full transition-colors duration-700"
                                />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-accent/5 rounded-full group-hover:w-[110%] group-hover:h-[110%] transition-all duration-1000 ease-out" />

                                <div className="absolute inset-0 overflow-hidden rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                                    <div className="w-full h-[1px] bg-accent absolute top-0 left-0 animate-[scan_3s_linear_infinite]" />
                                </div>
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative vertical number strip with scroll sync */}
            <div className="absolute right-12 top-0 bottom-0 flex flex-col justify-between py-24 opacity-10 font-mono text-[10px] hidden lg:flex select-none pointer-events-none">
                {Array.from({ length: 10 }).map((_, i) => (
                    <motion.span
                        key={i}
                        animate={{ opacity: (i + 1) * 10 < scrollY.get() / 5 ? 1 : 0.1 }}
                    >
                        0{i + 1}
                    </motion.span>
                ))}
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[8px] font-mono uppercase tracking-[0.4em] opacity-30">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-foreground/20 to-transparent" />
            </motion.div>
        </section>
    );
}
