import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_SECTIONS } from "../data/portfolio";

/**
 * Navbar — fixed, glassmorphic, active-section highlighting via IntersectionObserver.
 */
const Navbar = () => {
    const [active, setActive] = useState("home");
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const observers = [];
        NAV_SECTIONS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) setActive(id);
                    });
                },
                { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const goTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setMobileOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            data-testid="site-navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "backdrop-blur-xl bg-brand-navy/70 border-b border-white/10" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
                <button
                    onClick={() => goTo("home")}
                    data-testid="nav-logo"
                    className="font-display font-bold text-lg tracking-tight text-white hover:text-brand-cyan transition-colors"
                >
                    <span className="gradient-text">km</span>
                    <span className="text-white/70">.dev</span>
                </button>

                {/* Desktop */}
                <ul className="hidden md:flex items-center gap-1">
                    {NAV_SECTIONS.map((s) => (
                        <li key={s.id}>
                            <button
                                onClick={() => goTo(s.id)}
                                data-testid={`nav-link-${s.id}`}
                                className={`relative px-3 py-2 text-sm font-mono tracking-wide transition-colors ${
                                    active === s.id
                                        ? "text-brand-cyan"
                                        : "text-slate-300 hover:text-white"
                                }`}
                            >
                                {s.label}
                                {active === s.id && (
                                    <motion.span
                                        layoutId="nav-underline"
                                        className="absolute left-2 right-2 -bottom-0.5 h-px bg-gradient-to-r from-brand-cyan to-brand-violet"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label="Toggle menu"
                    data-testid="nav-mobile-toggle"
                    className="md:hidden p-2 text-slate-200 hover:text-brand-cyan transition-colors"
                >
                    {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        data-testid="nav-mobile-menu"
                        className="md:hidden border-t border-white/10 bg-brand-navy/95 backdrop-blur-xl"
                    >
                        <ul className="px-6 py-4 flex flex-col gap-1">
                            {NAV_SECTIONS.map((s) => (
                                <li key={s.id}>
                                    <button
                                        onClick={() => goTo(s.id)}
                                        data-testid={`nav-mobile-${s.id}`}
                                        className={`w-full text-left px-3 py-2 rounded-md text-sm font-mono transition-colors ${
                                            active === s.id
                                                ? "text-brand-cyan bg-white/[0.04]"
                                                : "text-slate-300 hover:text-white hover:bg-white/[0.03]"
                                        }`}
                                    >
                                        {s.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
