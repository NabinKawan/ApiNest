export default function Navbar() {
    return (
        <header className="relative z-10 flex items-center justify-between border-b-4 border-orange-300 px-8 py-6 shadow-[4px_4px_0px_#000000]">
            <h1 className="flex items-center text-3xl font-black tracking-wider text-orange-600">
                🐣 <span className="ml-2 text-yellow-500">Api</span>Nest
            </h1>
            <nav className="hidden space-x-8 md:block">
                {[
                    { href: '#features', label: 'Features' },
                    { href: '#docs', label: 'Docs' },
                    { href: '#about', label: 'About' },
                ].map(({ href, label }) => (
                    <a
                        key={href}
                        href={href}
                        className="font-semibold text-gray-700 transition-all hover:scale-110 hover:text-orange-500"
                    >
                        {label}
                    </a>
                ))}
            </nav>
        </header>
    );
}
