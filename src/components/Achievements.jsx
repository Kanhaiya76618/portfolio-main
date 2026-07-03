import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "../data/portfolio";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const Achievements = () => {
    return (
        <section
            id="achievements"
            data-testid="achievements-section"
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
                        02 · Achievements
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-brand-violet/40 via-white/10 to-transparent" />
                </motion.div>

                <motion.h2
                    variants={item}
                    className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-12"
                >
                    Highlights from{" "}
                    <span className="gradient-text">competitive builds</span>.
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ACHIEVEMENTS.map((a, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            whileHover={{ y: -6 }}
                            data-testid={`achievement-card-${i}`}
                            className="gradient-border relative rounded-2xl p-6 glass overflow-hidden group"
                        >
                            {/* animated glow blob */}
                            <div
                                className={`absolute -top-16 -right-16 w-52 h-52 rounded-full opacity-30 group-hover:opacity-60 transition-opacity blur-3xl bg-gradient-to-br ${a.accent}`}
                                aria-hidden="true"
                            />

                            <div className="relative">
                                <div className="flex items-start justify-between mb-5">
                                    <div className="p-2 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                                        <Trophy size={18} strokeWidth={1.5} />
                                    </div>
                                    <span className="font-display font-bold text-2xl gradient-text" data-testid={`achievement-rank-${i}`}>
                                        {a.rank}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xl leading-none" aria-hidden="true">{a.emoji}</span>
                                    <h3 className="font-display text-lg font-bold text-white">
                                        {a.title}
                                    </h3>
                                </div>
                                <p className="font-mono text-xs text-brand-cyan/80 mb-3">
                                    {a.subtitle}
                                </p>
                                <p className="font-mono text-sm text-slate-300 leading-relaxed">
                                    {a.detail}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Achievements;
