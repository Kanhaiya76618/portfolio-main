/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ["'Space Grotesk'", "sans-serif"],
                mono: ["'JetBrains Mono'", "monospace"],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                brand: {
                    navy: '#050A18',
                    card: '#0A1128',
                    cyan: '#00E5FF',
                    violet: '#7C3AED',
                    magenta: '#D946EF',
                },
            },
            keyframes: {
                'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
                'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
                'orb-drift-1': {
                    '0%,100%': { transform: 'translate(0,0) scale(1)' },
                    '50%': { transform: 'translate(60px,-40px) scale(1.15)' },
                },
                'orb-drift-2': {
                    '0%,100%': { transform: 'translate(0,0) scale(1.05)' },
                    '50%': { transform: 'translate(-80px,60px) scale(0.95)' },
                },
                'orb-drift-3': {
                    '0%,100%': { transform: 'translate(0,0) scale(1)' },
                    '50%': { transform: 'translate(40px,80px) scale(1.1)' },
                },
                'pulse-glow': {
                    '0%,100%': { opacity: '0.5' },
                    '50%': { opacity: '1' },
                },
                'circuit-flow': {
                    '0%': { transform: 'translateX(-20%)', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { transform: 'translateX(120%)', opacity: '0' },
                },
                'bounce-slow': {
                    '0%,100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(10px)' },
                },
                'gradient-shift': {
                    '0%,100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'orb-1': 'orb-drift-1 22s ease-in-out infinite',
                'orb-2': 'orb-drift-2 28s ease-in-out infinite',
                'orb-3': 'orb-drift-3 25s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
                'gradient-shift': 'gradient-shift 6s ease-in-out infinite',
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
