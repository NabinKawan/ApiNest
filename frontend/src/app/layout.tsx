import type { Metadata } from 'next';
import { Nunito, Fredoka } from 'next/font/google';
import './global.css';
import Providers from '@/providers';
import Toast from '@/components/ui/toast';

const nunito = Nunito({
    subsets: ['latin'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
});

const fredoka = Fredoka({
    subsets: ['latin'],
    variable: '--font-fredoka',
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'ApiNest - Transform JSON into REST APIs Instantly',
    description:
        'Upload your JSON data and get instant REST endpoints with full CRUD operations, automatic documentation, and zero configuration.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${nunito.variable} ${fredoka.variable} font-nunito`}
            >
                <Providers>{children}</Providers>
                <Toast />
            </body>
        </html>
    );
}
