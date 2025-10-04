import { cn } from '@/lib/utils';

interface BaseButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
}

type ButtonProps = BaseButtonProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
    children,
    href,
    className,
    variant = 'primary',
    onClick,
}: ButtonProps) {
    const baseClasses =
        'font-black text-white shadow-[4px_4px_0px_#000000] transition-all rounded-3xl px-6 py-3';
    const variants = {
        primary:
            'bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 hover:-translate-y-1 hover:rotate-1',
        secondary: 'bg-gray-300 text-gray-900 hover:bg-gray-400',
    };

    const Component = href ? 'a' : 'button';

    return (
        <Component
            href={href}
            onClick={onClick}
            className={cn(baseClasses, variants[variant], className)}
        >
            {children}
        </Component>
    );
}
