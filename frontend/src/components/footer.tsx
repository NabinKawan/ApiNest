export default function Footer() {
    return (
        <footer className="relative z-10 mt-20 border-t-4 border-orange-400 py-8 text-center text-base font-semibold text-gray-600">
            <div className="mx-auto mb-3 h-10 w-10 animate-pulse-slow rounded-full bg-pink-200 shadow-cartoon"></div>
            © {new Date().getFullYear()} ApiNest. Built with ❤️ by Nabin Kawan
            🐣✨
        </footer>
    );
}
