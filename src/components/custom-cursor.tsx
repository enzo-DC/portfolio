"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 30, stiffness: 300 };
    const ringConfig = { damping: 20, stiffness: 150 };

    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const ringXSpring = useSpring(cursorX, ringConfig);
    const ringYSpring = useSpring(cursorY, ringConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button");

            setIsHovering(!!isClickable);
        };

        const handleMouseDown = () => setIsPressed(true);
        const handleMouseUp = () => setIsPressed(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [cursorX, cursorY]);

    return (
        <div className="hidden md:block fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
            {/* Main Dot */}
            <motion.div
                className="absolute top-0 left-0 w-3 h-3 bg-[var(--foreground)] rounded-full z-10 pointer-events-none"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isPressed ? 0.5 : isHovering ? 1.5 : 1,
                }}
            />

            {/* Outer Ring */}
            <motion.div
                className="absolute top-0 left-0 w-8 h-8 border-[1.5px] border-[var(--foreground)] rounded-full z-0 pointer-events-none"
                style={{
                    x: ringXSpring,
                    y: ringYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isPressed ? 1.5 : isHovering ? 2.5 : 1,
                    opacity: isHovering ? 1 : 0.4,
                    borderWidth: isHovering ? "1px" : "1.5px"
                }}
            />

            {/* Hover Label Placeholder (Optional: Add "VIEW" text on hover) */}
            <AnimatePresence>
                {isHovering && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        style={{
                            x: cursorXSpring,
                            y: cursorYSpring,
                            translateX: "20px",
                            translateY: "20px",
                        }}
                        className="absolute text-[8px] font-mono font-bold tracking-[0.2em] text-accent uppercase"
                    >
                        Action_Required
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

