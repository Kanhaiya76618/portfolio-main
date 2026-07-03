import { useEffect } from "react";

/**
 * Full-viewport drifting gradient orbs. Renders behind all sections.
 * Uses pure CSS transforms (no WebGL/canvas). Respects prefers-reduced-motion via tailwind base.
 * Fixed positioning so orbs follow scroll and create continuous "interference".
 */
const GradientOrbs = () => {
    // Pause offscreen: use visibility observer to disable animations when hidden
    useEffect(() => {
        // no-op; kept simple to keep bundle small. Prefers-reduced-motion handled globally.
    }, []);

    return (
        <div
            data-testid="gradient-orbs-bg"
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
            {/* Cyan orb — top-left */}
            <div
                className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full opacity-40 animate-orb-1"
                style={{
                    background: "radial-gradient(circle, rgba(0,229,255,0.55) 0%, rgba(0,229,255,0) 70%)",
                    filter: "blur(120px)",
                }}
            />
            {/* Violet orb — bottom-right */}
            <div
                className="absolute -bottom-48 -right-32 w-[620px] h-[620px] rounded-full opacity-45 animate-orb-2"
                style={{
                    background: "radial-gradient(circle, rgba(124,58,237,0.55) 0%, rgba(124,58,237,0) 70%)",
                    filter: "blur(140px)",
                }}
            />
            {/* Magenta orb — center */}
            <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[440px] h-[440px] rounded-full opacity-30 animate-orb-3"
                style={{
                    background: "radial-gradient(circle, rgba(217,70,239,0.45) 0%, rgba(217,70,239,0) 70%)",
                    filter: "blur(130px)",
                }}
            />
            {/* Deep-navy vignette overlay so orbs never overwhelm text */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(5,10,24,0) 0%, rgba(5,10,24,0.55) 100%)",
                }}
            />
            {/* Subtle grain */}
            <div
                className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
                }}
            />
        </div>
    );
};

export default GradientOrbs;
