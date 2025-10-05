export default function Footer() {
    return (
        <footer className="relative z-10 mt-20 border-t-4 border-orange-400 py-8 text-center text-base font-semibold text-gray-600">
            © {new Date().getFullYear()} ApiNest. Built with ❤️ by Nabin Kawan
        </footer>
    );
}
