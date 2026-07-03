/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
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
                brand: {
                    navy: '#050A18',
                    card: '#0A1128',
                    cyan: '#00E5FF',
                    violet: '#7C3AED',
                    magenta: '#D946EF',
                },
            },
            keyframes: {
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
                'bounce-slow': {
                    '0%,100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(10px)' },
                },
            },
            animation: {
                'orb-1': 'orb-drift-1 22s ease-in-out infinite',
                'orb-2': 'orb-drift-2 28s ease-in-out infinite',
                'orb-3': 'orb-drift-3 25s ease-in-out infinite',
                'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
            }
        }
    },
    plugins: [],
};
