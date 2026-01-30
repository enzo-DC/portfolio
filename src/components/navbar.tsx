"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    const navItems = [
        { id: "work", label: "Projets" },
        { id: "about", label: "Profil" },
        { id: "skills", label: "Compétences" },
        { id: "contact", label: "Contact" }
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 md:px-12 lg:px-24 flex justify-between items-center pointer-events-none">
            {/* Brand */}
            <div className="pointer-events-auto">
                <a href="#" className="flex flex-col group">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xl md:text-2xl font-serif tracking-tighter italic font-medium leading-none"
                    >
                        Enzo Couteau.
                    </motion.span>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        className="h-[1px] bg-foreground/10 group-hover:bg-accent transition-colors"
                    />
                </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-16 pointer-events-auto">
                <ul className="flex gap-12 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
                    {navItems.map((item, i) => (
                        <motion.li
                            key={item.id}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i + 0.5 }}
                        >
                            <a href={`#${item.id}`} className="opacity-40 hover:opacity-100 transition-all hover-underline">
                                {item.label}
                            </a>
                        </motion.li>
                    ))}
                </ul>

                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-4 border border-foreground/5 rounded-full hover:bg-foreground hover:text-background transition-all glass flex items-center justify-center"
                >
                    {mounted && (theme === "dark" ? <Sun size={14} /> : <Moon size={14} />)}
                </motion.button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center gap-4 pointer-events-auto">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-4 border border-foreground/10 rounded-full glass"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 bg-background/98 backdrop-blur-2xl z-[90] flex flex-col justify-center p-12 md:hidden pointer-events-auto"
                    >
                        <ul className="flex flex-col gap-6">
                            {navItems.map((item, i) => (
                                <motion.li
                                    key={item.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + 0.1 * i }}
                                >
                                    <a
                                        href={`#${item.id}`}
                                        onClick={() => setIsOpen(false)}
                                        className="text-6xl font-serif italic hover:text-accent transition-all leading-tight block border-b border-foreground/5 py-4"
                                    >
                                        {item.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="mt-auto flex justify-between items-end pb-12">
                            <div className="flex flex-col font-mono text-[10px] opacity-40 uppercase tracking-widest gap-2">
                                <span>Basé à Paris / France</span>
                                <span>Disponibilité 2025</span>
                            </div>
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-8 border border-foreground/10 rounded-full glass"
                            >
                                {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

