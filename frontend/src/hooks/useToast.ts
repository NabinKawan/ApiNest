import { toast } from 'react-hot-toast';

export const useToast = () => {
    const showSuccess = (message: string) => {
        toast.success(message, {
            duration: 4000,
            style: {
                background:
                    'linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 50%, #86efac 100%)',
                color: '#14532d',
                border: '3px solid #16a34a',
                borderRadius: '1.5rem',
                boxShadow: '8px 8px 0px #16a34a',
                fontFamily: 'var(--font-fredoka), cursive',
                fontSize: '1rem',
                fontWeight: '600',
                padding: '1rem 1.5rem',
                maxWidth: '400px',
            },
            icon: '🎉',
        });
    };

    const showError = (message: string) => {
        toast.error(message, {
            duration: 4000,
            style: {
                background:
                    'linear-gradient(135deg, #fef2f2 0%, #fecaca 50%, #fca5a5 100%)',
                color: '#7f1d1d',
                border: '3px solid #dc2626',
                borderRadius: '1.5rem',
                boxShadow: '8px 8px 0px #dc2626',
                fontFamily: 'var(--font-fredoka), cursive',
                fontSize: '1rem',
                fontWeight: '600',
                padding: '1rem 1.5rem',
                maxWidth: '400px',
            },
            icon: '😅',
        });
    };

    const showLoading = (message: string) => {
        return toast.loading(message, {
            style: {
                background:
                    'linear-gradient(135deg, #fffbeb 0%, #fde68a 50%, #fbbf24 100%)',
                color: '#78350f',
                border: '3px solid #d97706',
                borderRadius: '1.5rem',
                boxShadow: '8px 8px 0px #d97706',
                fontFamily: 'var(--font-fredoka), cursive',
                fontSize: '1rem',
                fontWeight: '600',
                padding: '1rem 1.5rem',
                maxWidth: '400px',
            },
            icon: '⏳',
        });
    };

    return {
        success: showSuccess,
        error: showError,
        loading: showLoading,
        dismiss: toast.dismiss,
    };
};
