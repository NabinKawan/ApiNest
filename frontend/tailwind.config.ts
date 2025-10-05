import type { Config } from 'tailwindcss';

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                nunito: ['var(--font-nunito)', 'sans-serif'],
                fredoka: ['var(--font-fredoka)', 'cursive'],
            },
            animation: {
                'bounce-slow': 'bounce 2s infinite',
                wiggle: 'wiggle 1s ease-in-out infinite',
                float: 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            colors: {
                orange: {
                    50: '#fff7ed',
                },
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            boxShadow: {
                cartoon: '6px 6px 0px #000000',
                'cartoon-lg': '8px 8px 0px #000000',
                'cartoon-xl': '12px 12px 0px #000000',
            },
        },
    },
} satisfies Config;

export default config;
