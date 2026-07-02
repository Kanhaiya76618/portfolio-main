import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import QuantumCircuit from "./QuantumCircuit";
import { PROFILE } from "../data/portfolio";

/**
 * Hero — cinematic typewriter/fade sequence:
 *   step 0: "Hi..."   fade in / hold / fade out
 *   step 1: "Welcome" fade in / hold / fade out
 *   step 2: name + rotating subtitle (persists)
 */
const INTRO_SEQ = ["Hi...", "Welcome"];

const Hero = () => {
    const [phase, setPhase] = useState(0); // 0,1 intro words; 2 = main
    const [roleIdx, setRoleIdx] = useState(0);

    // Advance intro phases
    useEffect(() => {
        if (phase >= INTRO_SEQ.length) return;
        const t = setTimeout(() => setPhase((p) => p + 1), 1600);
        return () => clearTimeout(t);
    }, [phase]);

    // Rotate subtitle after intro completes
    useEffect(() => {
        if (phase < INTRO_SEQ.length) return;
        const t = setInterval(() => setRoleIdx((i) => (i + 1) % PROFILE.roles.length), 2400);
        return () => clearInterval(t);
    }, [phase]);

    const goAbout = () => {
        const el = document.getElementById("about");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            data-testid="hero-section"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            <QuantumCircuit />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
                <div className="flex flex-col items-start md:items-center text-left md:text-center gap-6">
                    {/* Overline */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-3 text-xs font-mono tracking-[0.28em] uppercase text-brand-cyan/80"
                    >
                        <span className="h-px w-8 bg-brand-cyan/60" />
                        Portfolio · 2026
                    </motion.div>

                    {/* Intro sequence */}
                    <div className="min-h-[6.5rem] sm:min-h-[8rem] flex items-center justify-start md:justify-center">
                        <AnimatePresence mode="wait">
                            {phase < INTRO_SEQ.length ? (
                                <motion.h2
                                    key={`intro-${phase}`}
                                    data-testid={`hero-intro-${phase}`}
                                    initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                                    className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white/90"
                                >
                                    {INTRO_SEQ[phase]}
                                </motion.h2>
                            ) : (
                                <motion.h1
                                    key="name"
                                    data-testid="hero-name"
                                    initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                                    className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter"
                                >
                                    <span className="gradient-text text-glow-cyan">Kanhaiya Mehta</span>
                                </motion.h1>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Rotating subtitle */}
                    <div className="h-8 flex items-center justify-start md:justify-center">
                        {phase >= INTRO_SEQ.length && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="flex items-center gap-3 font-mono text-sm sm:text-base text-slate-300"
                            >
                                <span className="text-brand-cyan/70">{"~"}</span>
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={roleIdx}
                                        data-testid={`hero-role-${roleIdx}`}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.35 }}
                                        className="inline-block"
                                    >
                                        {PROFILE.roles[roleIdx]}
                                    </motion.span>
                                </AnimatePresence>
                                <motion.span
                                    className="inline-block w-2 h-4 bg-brand-cyan"
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 0.9, repeat: Infinity }}
                                />
                            </motion.div>
                        )}
                    </div>

                    {/* CTA row */}
                    {phase >= INTRO_SEQ.length && (
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.6 }}
                            className="mt-6 flex flex-wrap items-center gap-3"
                        >
                            <button
                                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                                data-testid="hero-cta-projects"
                                className="group relative px-6 py-3 rounded-full font-mono text-sm text-brand-navy bg-brand-cyan hover:bg-cyan-300 transition-colors glow-cyan"
                            >
                                See projects →
                            </button>
                            <button
                                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                data-testid="hero-cta-contact"
                                className="px-6 py-3 rounded-full font-mono text-sm text-slate-200 border border-white/15 bg-white/[0.03] hover:border-brand-cyan/40 hover:text-brand-cyan hover:bg-brand-cyan/5 transition-all"
                            >
                                Get in touch
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Scroll indicator */}
            {phase >= INTRO_SEQ.length && (
                <motion.button
                    onClick={goAbout}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                    data-testid="hero-scroll-indicator"
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-brand-cyan transition-colors group"
                    aria-label="Scroll down"
                >
                    <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
                    <span className="animate-bounce-slow">
                        <ChevronDown size={18} strokeWidth={1.5} />
                    </span>
                </motion.button>
            )}
        </section>
    );
};

export default Hero;
