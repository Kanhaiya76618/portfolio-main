import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Download, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data/portfolio";

const ICON_LINKS = [
    { icon: Github, label: "GitHub", href: PROFILE.github, testid: "contact-github" },
    { icon: Linkedin, label: "LinkedIn", href: PROFILE.linkedin, testid: "contact-linkedin" },
    { icon: Twitter, label: "X (Twitter)", href: PROFILE.twitter, testid: "contact-twitter" },
    { icon: Mail, label: "Email", href: `mailto:${PROFILE.email}`, testid: "contact-email" },
];

const Contact = () => {
    return (
        <section
            id="contact"
            data-testid="contact-section"
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
                        06 · Contact
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-brand-cyan/40 via-white/10 to-transparent" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="glass gradient-border rounded-3xl p-8 sm:p-12 relative overflow-hidden"
                >
                    <div
                        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(0,229,255,0.55) 0%, rgba(0,229,255,0) 70%)",
                        }}
                        aria-hidden="true"
                    />
                    <div
                        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-30 blur-3xl"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(124,58,237,0.55) 0%, rgba(124,58,237,0) 70%)",
                        }}
                        aria-hidden="true"
                    />

                    <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                        <div className="max-w-xl">
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
                                Let&apos;s build{" "}
                                <span className="gradient-text">something serious</span>.
                            </h2>
                            <p className="font-mono text-sm text-slate-300 leading-relaxed">
                                Open to internships, research collaborations, and hackathon partnerships in
                                full-stack, AI/ML, and quantum. Fastest reply: email.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap items-center gap-3">
                                {ICON_LINKS.map(({ icon: Icon, label, href, testid }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target={href.startsWith("mailto") ? "_self" : "_blank"}
                                        rel="noreferrer"
                                        aria-label={label}
                                        data-testid={testid}
                                        className="p-3.5 rounded-full border border-white/10 bg-white/[0.03] text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/40 hover:bg-brand-cyan/5 hover:-translate-y-1 transition-all"
                                    >
                                        <Icon size={18} strokeWidth={1.5} />
                                    </a>
                                ))}
                            </div>

                            <a
                                href={PROFILE.cv}
                                download
                                data-testid="contact-download-cv"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-mono text-sm text-brand-navy bg-brand-cyan hover:bg-cyan-300 transition-colors glow-cyan"
                            >
                                <Download size={16} strokeWidth={1.5} />
                                Download CV
                            </a>

                            <a
                                href={`mailto:${PROFILE.email}`}
                                data-testid="contact-email-cta"
                                className="group inline-flex items-center justify-center gap-2 font-mono text-sm text-slate-300 hover:text-brand-cyan transition-colors"
                            >
                                {PROFILE.email}
                                <ArrowUpRight
                                    size={14}
                                    strokeWidth={1.5}
                                    className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                                />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Footer line */}
                <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[11px] text-slate-500">
                    <div>
                        © {new Date().getFullYear()} Kanhaiya Mehta · Crafted with{" "}
                        <span className="text-brand-cyan">React</span> +{" "}
                        <span className="text-brand-violet">Framer Motion</span>.
                    </div>
                    <div className="tracking-widest uppercase">
                        IIIT Dharwad · India
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
