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
                // Primary color palette - Orange/Yellow theme
                primary: {
                    50: '#fff7ed', // Lightest orange
                    100: '#ffedd5', // Very light orange
                    200: '#fed7aa', // Light orange
                    300: '#fdba74', // Medium light orange
                    400: '#fb923c', // Medium orange
                    500: '#f97316', // Base orange
                    600: '#ea580c', // Medium dark orange
                    700: '#c2410c', // Dark orange
                    800: '#9a3412', // Very dark orange
                    900: '#7c2d12', // Darkest orange
                    DEFAULT: '#f97316',
                },
                // Secondary color palette - Pink/Purple theme
                secondary: {
                    50: '#fdf2f8', // Lightest pink
                    100: '#fce7f3', // Very light pink
                    200: '#fbcfe8', // Light pink
                    300: '#f9a8d4', // Medium light pink
                    400: '#f472b6', // Medium pink
                    500: '#ec4899', // Base pink
                    600: '#db2777', // Medium dark pink
                    700: '#be185d', // Dark pink
                    800: '#9d174d', // Very dark pink
                    900: '#831843', // Darkest pink
                },
                // Success color palette - Green theme
                success: {
                    50: '#f0fdf4', // Lightest green
                    100: '#dcfce7', // Very light green
                    200: '#bbf7d0', // Light green
                    300: '#86efac', // Medium light green
                    400: '#4ade80', // Medium green
                    500: '#22c55e', // Base green
                    600: '#16a34a', // Medium dark green
                    700: '#15803d', // Dark green
                    800: '#166534', // Very dark green
                    900: '#14532d', // Darkest green
                },
                // Error color palette - Red theme
                error: {
                    50: '#fef2f2', // Lightest red
                    100: '#fee2e2', // Very light red
                    200: '#fecaca', // Light red
                    300: '#fca5a5', // Medium light red
                    400: '#f87171', // Medium red
                    500: '#ef4444', // Base red
                    600: '#dc2626', // Medium dark red
                    700: '#b91c1c', // Dark red
                    800: '#991b1b', // Very dark red
                    900: '#7f1d1d', // Darkest red
                },
                // Warning color palette - Yellow theme
                warning: {
                    50: '#fffbeb', // Lightest yellow
                    100: '#fef3c7', // Very light yellow
                    200: '#fde68a', // Light yellow
                    300: '#fcd34d', // Medium light yellow
                    400: '#fbbf24', // Medium yellow
                    500: '#f59e0b', // Base yellow
                    600: '#d97706', // Medium dark yellow
                    700: '#b45309', // Dark yellow
                    800: '#92400e', // Very dark yellow
                    900: '#78350f', // Darkest yellow
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
