import { motion } from "framer-motion";
import { SKILL_GROUPS } from "../data/portfolio";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const Skills = () => {
    return (
        <section
            id="skills"
            data-testid="skills-section"
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
                        03 · Skills
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-brand-cyan/40 via-white/10 to-transparent" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-12"
                >
                    A stack that spans the{" "}
                    <span className="gradient-text">classical to the quantum</span>.
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {SKILL_GROUPS.map((group, gi) => (
                        <motion.div
                            key={group.category}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={container}
                            data-testid={`skill-group-${gi}`}
                            className="glass rounded-2xl p-6 gradient-border"
                        >
                            <motion.div
                                variants={item}
                                className="flex items-center gap-2 mb-4"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan glow-cyan" />
                                <h3 className="font-display font-bold text-lg text-white">
                                    {group.category}
                                </h3>
                            </motion.div>

                            <div className="flex flex-wrap gap-2.5">
                                {group.items.map((s, si) => (
                                    <motion.span
                                        key={s}
                                        variants={item}
                                        whileHover={{ y: -2 }}
                                        data-testid={`skill-chip-${gi}-${si}`}
                                        className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-slate-200 hover:bg-brand-cyan/10 hover:border-brand-cyan/30 hover:text-brand-cyan transition-all cursor-default"
                                    >
                                        {s}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
