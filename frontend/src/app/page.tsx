import Features from '@/components/features';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import RequestAccessCTA from '@/components/request-access-cta';
import Button from '@/components/ui/button';

export default function LandingPage() {
    return (
        <div className="min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 font-nunito text-gray-900">
            <Navbar />

            {/* Hero */}
            <section className="relative z-10 mt-16 flex flex-col items-center px-6 text-center md:px-20">
                <h2 className="relative z-20 font-fredoka text-3xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
                    Create Your Own{' '}
                    <span className="rounded-full bg-yellow-300 px-3 py-1 text-orange-600 shadow-cartoon">
                        JSON Buckets
                    </span>
                    <br />
                    Served as Easy APIs 🎉
                </h2>
                <p className="mt-6 max-w-2xl text-lg font-medium text-gray-700">
                    ApiNest transforms your JSON data into instant REST
                    endpoints! 🚀 Simply paste your JSON, and we'll create a
                    fully functional API with automatic documentation. No setup,
                    no hassle - just pure developer magic! ✨
                </p>
                <Button
                    href="#request"
                    className="mt-8 px-8 py-4 font-fredoka text-lg hover:-translate-y-2 hover:rotate-3 hover:scale-105"
                >
                    🚀 Join Waitlist Now!
                </Button>
            </section>

            <Features />

            <RequestAccessCTA />

            <Footer />
        </div>
    );
}
