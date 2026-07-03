import { motion } from "framer-motion";
import { ABOUT } from "../data/portfolio";
import { GraduationCap, Atom, Code2 } from "lucide-react";

const stats = [
    { icon: GraduationCap, label: "B.Tech CSE · IIIT Dharwad", value: "CGPA 8.10 / 10" },
    { icon: Atom, label: "Minor · Quantum Information Science", value: "CGPA 10 / 10" },
    { icon: Code2, label: "Focus", value: "Full-Stack · AI/ML · Quantum" },
];

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};
const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const About = () => {
    return (
        <section
            id="about"
            data-testid="about-section"
            className="relative py-24 lg:py-32"
        >
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={container}
                className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
            >
                <motion.div variants={item} className="mb-10 flex items-center gap-4">
                    <span className="text-xs font-mono tracking-[0.28em] uppercase text-brand-cyan/80">
                        01 · About
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-brand-cyan/40 via-white/10 to-transparent" />
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-10">
                    <motion.div variants={item} className="lg:col-span-8">
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                            Building at the intersection of{" "}
                            <span className="gradient-text">web, AI, and quantum</span>.
                        </h2>
                        <p className="font-mono text-sm sm:text-base leading-relaxed text-slate-300 max-w-2xl">
                            {ABOUT}
                        </p>
                    </motion.div>

                    <motion.div variants={item} className="lg:col-span-4">
                        <div className="grid gap-3">
                            {stats.map(({ icon: Icon, label, value }, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -3 }}
                                    className="glass rounded-xl p-4 flex items-start gap-3 hover:border-brand-cyan/30 transition-colors"
                                    data-testid={`about-stat-${i}`}
                                >
                                    <div className="mt-0.5 p-2 rounded-md bg-brand-cyan/10 text-brand-cyan">
                                        <Icon size={16} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
                                            {label}
                                        </div>
                                        <div className="font-display font-semibold text-white text-base">
                                            {value}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
