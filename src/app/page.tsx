import Features from '@/components/features';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import RequestAccessCTA from '@/components/request-access-cta';
import Button from '@/components/ui/button';

export default function LandingPage() {
    return (
        <div className="min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 font-sans text-gray-900">
            {/* Floating cartoon elements (global, but could be in a Background component) */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute left-10 top-20 h-20 w-20 animate-bounce rounded-full bg-yellow-300 opacity-20"></div>
                <div className="absolute bottom-20 right-10 h-16 w-16 animate-bounce rounded-full bg-orange-300 opacity-20 delay-1000"></div>
                <div className="absolute left-5 top-1/2 h-12 w-12 animate-pulse rounded-full bg-pink-200 opacity-20"></div>
            </div>

            <Navbar />

            {/* Hero */}
            <section className="relative z-10 mt-16 flex flex-col items-center px-6 text-center md:px-20">
                <div className="absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 transform animate-bounce rounded-full bg-yellow-300 shadow-[4px_4px_0px_#000000]"></div>
                <h2 className="relative z-20 text-5xl font-black leading-tight tracking-tight text-gray-900 md:text-7xl">
                    Create Your Own{' '}
                    <span className="rounded-full bg-yellow-300 px-2 py-1 text-orange-600 shadow-[2px_2px_0px_#000000]">
                        JSON Buckets
                    </span>
                    <br />
                    Served as Easy APIs 🎉
                </h2>
                <p className="mt-8 max-w-2xl text-xl font-medium text-gray-700">
                    NestAPI makes APIs feel fun again ✨. Cartoon-simple,
                    developer-powerful. Paste your JSON, get an endpoint, and
                    bring your projects to life with a wiggle! 🐛
                </p>
                <Button
                    href="#request"
                    className="mt-12 px-10 py-5 text-xl hover:-translate-y-2 hover:rotate-3 hover:scale-105"
                >
                    🚀 Request Access Now!
                </Button>
            </section>

            <Features />

            <RequestAccessCTA />

            <Footer />
        </div>
    );
}
