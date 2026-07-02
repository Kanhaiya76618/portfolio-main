import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Github, ArrowUpRight, Sparkles } from "lucide-react";
import { PROJECTS, PROFILE } from "../data/portfolio";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const Projects = () => {
    const [active, setActive] = useState(null);
    const activeProject = PROJECTS.find((p) => p.id === active);

    useEffect(() => {
        if (!active) return;
        const onKey = (e) => e.key === "Escape" && setActive(null);
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [active]);

    return (
        <section
            id="projects"
            data-testid="projects-section"
            className="relative py-24 lg:py-32"
        >
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={container}
                className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
            >
                <motion.div variants={item} className="mb-10 flex items-center gap-4">
                    <span className="text-xs font-mono tracking-[0.28em] uppercase text-brand-cyan/80">
                        04 · Projects
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-brand-magenta/40 via-white/10 to-transparent" />
                </motion.div>

                <motion.h2
                    variants={item}
                    className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3"
                >
                    Selected <span className="gradient-text">work</span>.
                </motion.h2>
                <motion.p variants={item} className="font-mono text-sm text-slate-400 mb-12 max-w-2xl">
                    Click any card to open the full brief — architecture, tech stack, results, and links.
                </motion.p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((p, i) => (
                        <motion.button
                            key={p.id}
                            variants={item}
                            whileHover={{ y: -6 }}
                            onClick={() => setActive(p.id)}
                            data-testid={`project-card-${p.id}`}
                            className="text-left glass gradient-border rounded-2xl p-6 relative overflow-hidden group cursor-pointer flex flex-col min-h-[280px]"
                        >
                            {/* animated color blob */}
                            <div
                                className={`absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-40 group-hover:opacity-70 transition-opacity blur-3xl bg-gradient-to-br ${p.color}`}
                                aria-hidden="true"
                            />

                            <div className="relative flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan">
                                        {p.badge}
                                    </span>
                                    <ArrowUpRight
                                        size={18}
                                        strokeWidth={1.5}
                                        className="text-slate-400 group-hover:text-brand-cyan group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                                    />
                                </div>

                                <h3 className="font-display font-bold text-xl text-white leading-tight mb-1">
                                    {p.name}
                                </h3>
                                <div className="font-mono text-[11px] text-brand-cyan/80 mb-3">
                                    {p.tagline}
                                </div>
                                <p className="font-mono text-sm text-slate-300 leading-relaxed line-clamp-4 mb-4">
                                    {p.summary}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-1.5">
                                    {p.tech.slice(0, 4).map((t) => (
                                        <span
                                            key={t}
                                            className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/10 bg-white/[0.03] text-slate-300"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                    {p.tech.length > 4 && (
                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/10 bg-white/[0.03] text-slate-400">
                                            +{p.tech.length - 4}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>

                <motion.div
                    variants={item}
                    className="mt-12 flex justify-center"
                >
                    <a
                        href={PROFILE.github}
                        target="_blank"
                        rel="noreferrer"
                        data-testid="projects-github-all"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm text-slate-200 border border-white/15 bg-white/[0.03] hover:border-brand-cyan/40 hover:text-brand-cyan hover:bg-brand-cyan/5 transition-all"
                    >
                        <Github size={16} strokeWidth={1.5} />
                        View all projects on GitHub
                        <ArrowUpRight size={14} strokeWidth={1.5} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </motion.div>
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        data-testid="project-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
                    >
                        <div
                            className="absolute inset-0 bg-brand-navy/80 backdrop-blur-md"
                            onClick={() => setActive(null)}
                            aria-hidden="true"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.98 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-3xl max-h-[85vh] modal-scroll overflow-y-auto glass-strong rounded-2xl border border-white/10 shadow-[0_0_60px_rgba(0,229,255,0.12)]"
                        >
                            <div
                                className={`absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-40 blur-3xl bg-gradient-to-br ${activeProject.color}`}
                                aria-hidden="true"
                            />

                            <button
                                onClick={() => setActive(null)}
                                data-testid="project-modal-close"
                                aria-label="Close"
                                className="absolute top-4 right-4 z-10 p-2 rounded-full border border-white/10 bg-white/[0.03] text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/30 transition-colors"
                            >
                                <X size={16} strokeWidth={1.5} />
                            </button>

                            <div className="relative p-6 sm:p-10">
                                <div className="mb-2 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan">
                                    <Sparkles size={12} strokeWidth={1.5} />
                                    {activeProject.badge}
                                </div>
                                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                                    {activeProject.name}
                                </h3>
                                <div className="font-mono text-sm text-brand-cyan/90 mt-1 mb-2">
                                    {activeProject.tagline}
                                </div>
                                <div className="font-mono text-[11px] text-slate-400 mb-6">
                                    {activeProject.tag}
                                </div>

                                <p className="font-mono text-sm leading-relaxed text-slate-200 mb-6">
                                    {activeProject.overview}
                                </p>

                                {activeProject.highlights?.length > 0 && (
                                    <>
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-brand-cyan/80 mb-3">
                                            Highlights
                                        </div>
                                        <ul className="mb-6 space-y-2">
                                            {activeProject.highlights.map((h, i) => (
                                                <li key={i} className="flex gap-3 font-mono text-sm text-slate-300">
                                                    <span className="mt-1.5 h-1 w-1 rounded-full bg-brand-cyan shrink-0" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                <div className="text-[10px] font-mono uppercase tracking-widest text-brand-cyan/80 mb-3">
                                    Tech Stack
                                </div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {activeProject.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-[11px] font-mono px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.03] text-slate-200"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {activeProject.links?.length > 0 && (
                                    <>
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-brand-cyan/80 mb-3">
                                            Links
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {activeProject.links.map((l) => (
                                                <a
                                                    key={l.href}
                                                    href={l.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    data-testid={`project-modal-link-${activeProject.id}-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border border-white/10 bg-white/[0.03] text-slate-200 hover:border-brand-cyan/40 hover:text-brand-cyan hover:bg-brand-cyan/5 transition-all"
                                                >
                                                    <ExternalLink size={12} strokeWidth={1.5} />
                                                    {l.label}
                                                </a>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
