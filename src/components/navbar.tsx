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
        <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 md:px-12 md:py-10 flex justify-between items-center pointer-events-none">
            {/* Brand */}
            <div className="pointer-events-auto flex flex-col gap-0.5">
                <a href="#" className="flex flex-col group">
                    <motion.span
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-lg md:text-xl font-serif tracking-tighter italic font-medium leading-none"
                    >
                        Enzo Couteau.
                    </motion.span>
                    <motion.span
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-[9px] font-mono tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100 transition-opacity"
                    >
                        Développeur_Créatif
                    </motion.span>
                </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12 pointer-events-auto">
                <ul className="flex gap-10 font-mono text-[10px] tracking-[0.3em] uppercase opacity-40">
                    {navItems.map((item, i) => (
                        <motion.li
                            key={item.id}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                        >
                            <a href={`#${item.id}`} className="hover:text-accent hover:opacity-100 transition-all hover-underline">
                                {item.label}
                            </a>
                        </motion.li>
                    ))}
                </ul>

                <div className="h-6 w-[1px] bg-foreground/10 mx-2" />

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-3 border border-foreground/5 rounded-full hover:bg-foreground hover:text-background transition-all glass"
                >
                    {mounted && (theme === "dark" ? <Sun size={12} strokeWidth={3} /> : <Moon size={12} strokeWidth={3} />)}
                </motion.button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center gap-4 pointer-events-auto">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-3 border border-foreground/5 rounded-full glass"
                >
                    {isOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-background/95 backdrop-blur-xl z-[90] flex flex-col justify-center items-center p-12 md:hidden pointer-events-auto"
                    >
                        <ul className="flex flex-col gap-12 text-center">
                            {navItems.map((item, i) => (
                                <motion.li
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                >
                                    <a
                                        href={`#${item.id}`}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-serif italic hover:text-accent transition-all"
                                    >
                                        {item.label}.
                                    </a>
                                </motion.li>
                            ))}
                        </ul>

                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="mt-24 p-6 border border-foreground/10 rounded-full"
                        >
                            {theme === "dark" ? "Mode Clair" : "Mode Sombre"}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
