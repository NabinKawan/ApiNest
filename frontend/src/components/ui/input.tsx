import { cn } from '@/lib/utils';

interface InputProps {
    type: string;
    placeholder: string;
    className?: string;
}

export default function Input({ type, placeholder, className }: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={cn(
                'w-80 rounded-4xl border-4 border-orange-400 bg-white px-6 py-3 text-base text-gray-900 shadow-cartoon transition-all hover:scale-105 focus:border-pink-500 focus:outline-none',
                className
            )}
            aria-label={placeholder}
        />
    );
}
