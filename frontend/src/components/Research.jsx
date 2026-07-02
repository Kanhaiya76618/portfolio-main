import { motion } from "framer-motion";
import { FileText, Atom } from "lucide-react";
import { RESEARCH } from "../data/portfolio";

const Research = () => {
    return (
        <section
            id="research"
            data-testid="research-section"
            className="relative py-24 lg:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 flex items-center gap-4"
                >
                    <span className="text-xs font-mono tracking-[0.28em] uppercase text-brand-cyan/80">
                        05 · Research
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-brand-violet/40 via-white/10 to-transparent" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-12"
                >
                    Ongoing <span className="gradient-text">research</span>.
                </motion.h2>

                <motion.article
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    data-testid="research-card"
                    className="relative rounded-2xl border border-white/10 bg-brand-card/60 backdrop-blur-xl overflow-hidden"
                >
                    {/* Paper-style side accent */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-cyan via-brand-violet to-brand-magenta"
                        aria-hidden="true"
                    />
                    {/* Corner glow */}
                    <div
                        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-40 blur-3xl"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(124,58,237,0.55) 0%, rgba(124,58,237,0) 70%)",
                        }}
                        aria-hidden="true"
                    />

                    <div className="relative p-8 md:p-12">
                        {/* Header */}
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-brand-violet/30 bg-brand-violet/10 text-brand-violet text-[10px] font-mono uppercase tracking-widest">
                                <FileText size={12} strokeWidth={1.5} />
                                Preprint · In Preparation
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-white/10 bg-white/[0.03] text-slate-300 text-[10px] font-mono uppercase tracking-widest">
                                <Atom size={12} strokeWidth={1.5} />
                                Quantum · Databases
                            </span>
                        </div>

                        {/* Title */}
                        <h3
                            className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug mb-4 tracking-tight"
                            data-testid="research-title"
                        >
                            {RESEARCH.title}
                        </h3>

                        {/* Authors */}
                        <div className="font-mono text-sm text-brand-cyan/90 mb-2">
                            {RESEARCH.authors.join(", ")}
                        </div>
                        <div className="font-mono text-xs text-slate-400 mb-8">
                            {RESEARCH.affiliation} · {RESEARCH.status}
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-8" />

                        {/* Abstract */}
                        <div className="text-[10px] font-mono uppercase tracking-widest text-brand-cyan/80 mb-3">
                            Abstract
                        </div>
                        <p className="font-mono text-sm leading-relaxed text-slate-200 mb-8">
                            {RESEARCH.summary}
                        </p>

                        {/* Stat badges */}
                        <div className="flex flex-wrap gap-2">
                            {RESEARCH.badges.map((b, i) => (
                                <span
                                    key={b}
                                    data-testid={`research-badge-${i}`}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.03] text-[11px] font-mono text-slate-200"
                                >
                                    <span className="w-1 h-1 rounded-full bg-brand-cyan" />
                                    {b}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.article>
            </div>
        </section>
    );
};

export default Research;
