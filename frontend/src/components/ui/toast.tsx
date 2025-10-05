'use client';

import { Toaster } from 'react-hot-toast';

export default function Toast() {
    return (
        <Toaster
            position="top-right"
            toastOptions={{
                duration: 4000,
                style: {
                    background:
                        'linear-gradient(135deg, #fffbeb 0%, #fed7aa 50%, #fbcfe8 100%)',
                    color: '#1f2937',
                    border: '3px solid #000',
                    borderRadius: '1.5rem',
                    boxShadow: '8px 8px 0px #000000',
                    fontFamily: 'var(--font-fredoka), cursive',
                    fontSize: '1rem',
                    fontWeight: '600',
                    padding: '1rem 1.5rem',
                    maxWidth: '400px',
                    transform: 'translateY(0)',
                    transition:
                        'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                },
                success: {
                    iconTheme: {
                        primary: '#22c55e',
                        secondary: '#ffffff',
                    },
                    style: {
                        background:
                            'linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 50%, #86efac 100%)',
                        border: '3px solid #16a34a',
                        boxShadow: '8px 8px 0px #16a34a',
                    },
                },
                error: {
                    iconTheme: {
                        primary: '#ef4444',
                        secondary: '#ffffff',
                    },
                    style: {
                        background:
                            'linear-gradient(135deg, #fef2f2 0%, #fecaca 50%, #fca5a5 100%)',
                        border: '3px solid #dc2626',
                        boxShadow: '8px 8px 0px #dc2626',
                    },
                },
                loading: {
                    iconTheme: {
                        primary: '#f59e0b',
                        secondary: '#ffffff',
                    },
                    style: {
                        background:
                            'linear-gradient(135deg, #fffbeb 0%, #fde68a 50%, #fbbf24 100%)',
                        border: '3px solid #d97706',
                        boxShadow: '8px 8px 0px #d97706',
                    },
                },
            }}
        />
    );
}
