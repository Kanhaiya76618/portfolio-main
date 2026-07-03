import { motion } from "framer-motion";

/**
 * QuantumCircuit — decorative absolute layer for the Hero.
 * 5 horizontal glowing "qubit wires" with gate symbols (H, X, RZ, CX)
 * and slow left-to-right pulses. Rendered at very low opacity so hero
 * text stays fully readable. Pure CSS + Framer Motion (no canvas).
 */
const WIRES = [
    { top: "18%", gates: [{ x: "22%", label: "H" }, { x: "58%", label: "RZ" }, { x: "82%", label: "M" }] },
    { top: "34%", gates: [{ x: "14%", label: "X" }, { x: "44%", label: "H" }, { x: "70%", label: "CX" }] },
    { top: "50%", gates: [{ x: "28%", label: "H" }, { x: "52%", label: "RZ" }, { x: "78%", label: "M" }] },
    { top: "66%", gates: [{ x: "18%", label: "X" }, { x: "46%", label: "H" }, { x: "74%", label: "CX" }] },
    { top: "82%", gates: [{ x: "24%", label: "H" }, { x: "60%", label: "RZ" }, { x: "84%", label: "M" }] },
];

// CX vertical control-target segments (dot on one wire, target on next)
const CX_LINKS = [
    { top1: "34%", top2: "50%", x: "70%" },
    { top1: "66%", top2: "82%", x: "74%" },
];

const QuantumCircuit = () => {
    return (
        <div
            data-testid="quantum-circuit-bg"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
            style={{ opacity: 0.16 }}
        >
            {/* Wires */}
            {WIRES.map((wire, wIdx) => (
                <div key={wIdx} className="absolute left-0 right-0" style={{ top: wire.top }}>
                    {/* Static wire line */}
                    <div
                        className="w-full"
                        style={{
                            height: "1px",
                            background:
                                "linear-gradient(90deg, rgba(0,229,255,0) 0%, rgba(0,229,255,0.55) 50%, rgba(0,229,255,0) 100%)",
                        }}
                    />
                    {/* Moving pulse */}
                    <div
                        className="circuit-pulse"
                        style={{ animationDelay: `${wIdx * 1.3}s`, animationDuration: `${6 + wIdx * 0.6}s` }}
                    />
                    {/* Gates */}
                    {wire.gates.map((g, gi) => (
                        <div
                            key={gi}
                            className="absolute -translate-x-1/2 -translate-y-1/2 circuit-gate"
                            style={{ left: g.x, top: 0 }}
                        >
                            {g.label === "M" ? (
                                <motion.span
                                    initial={{ opacity: 0.6 }}
                                    animate={{ opacity: [0.6, 1, 0.6] }}
                                    transition={{ duration: 2.4, repeat: Infinity, delay: gi * 0.5 }}
                                >
                                    ⌾
                                </motion.span>
                            ) : (
                                g.label
                            )}
                        </div>
                    ))}
                </div>
            ))}

            {/* CX vertical links */}
            {CX_LINKS.map((link, i) => (
                <div key={i} className="absolute" style={{ left: link.x, top: link.top1 }}>
                    <div
                        style={{
                            width: "1px",
                            background: "rgba(0,229,255,0.5)",
                            height: `calc(${link.top2} - ${link.top1})`,
                        }}
                    />
                    {/* dot */}
                    <div
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{
                            top: 0,
                            left: 0,
                            width: 8,
                            height: 8,
                            borderRadius: "999px",
                            background: "#00E5FF",
                            boxShadow: "0 0 10px rgba(0,229,255,0.9)",
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default QuantumCircuit;
