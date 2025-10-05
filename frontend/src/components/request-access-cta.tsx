'use client';

import Button from './ui/button';
import Input from './ui/input';

export default function RequestAccessCTA() {
    return (
        <section
            id="request"
            className="relative z-10 mx-6 mt-24 rounded-4xl border-4 border-dashed border-orange-400 bg-gradient-to-r from-orange-100 via-pink-100 to-yellow-100 py-16 text-center shadow-cartoon md:mx-20"
        >
            <div className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 transform animate-bounce rounded-full bg-yellow-300 shadow-cartoon"></div>
            <h3 className="mb-6 font-fredoka text-2xl font-black text-gray-900">
                Ready to Build APIs the Easy Way? 🚀
            </h3>
            <p className="mb-8 text-lg font-medium text-gray-700">
                Stop writing boilerplate API code! With ApiNest, upload your
                JSON data and instantly get REST endpoints with full CRUD
                operations, automatic documentation, and zero configuration.
            </p>
            <form
                className="flex flex-col items-center justify-center gap-6 md:flex-row"
                onSubmit={(e) => e.preventDefault()}
            >
                <Input type="email" placeholder="Enter your email 😊" />
                <Button
                    type="submit"
                    className="font-fredoka hover:-translate-y-2 hover:rotate-2 hover:scale-105"
                >
                    Join Waitlist ✨
                </Button>
            </form>
        </section>
    );
}
