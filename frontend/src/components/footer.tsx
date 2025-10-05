export default function Footer() {
    return (
        <footer className="relative z-10 mt-24 border-t-4 border-orange-400 py-12 text-center text-lg font-semibold text-gray-600">
            <div className="mx-auto mb-4 h-12 w-12 animate-pulse rounded-full bg-pink-200 shadow-[3px_3px_0px_#000000]"></div>
            © {new Date().getFullYear()} ApiNest. Built with ❤️ by Nabin Kawan
            🐣✨
        </footer>
    );
}
