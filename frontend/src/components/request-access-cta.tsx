'use client';

import Button from './ui/button';
import Input from './ui/input';

export default function RequestAccessCTA() {
    return (
        <section
            id="request"
            className="relative z-10 mx-6 mt-32 rounded-3xl border-4 border-dashed border-orange-400 bg-gradient-to-r from-orange-100 via-pink-100 to-yellow-100 py-24 text-center md:mx-20"
        >
            <div className="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 transform animate-bounce rounded-full bg-yellow-300 shadow-[4px_4px_0px_#000000]"></div>
            <h3 className="mb-8 text-4xl font-black text-gray-900">
                Ready to Build APIs the Easy Way? 🚀
            </h3>
            <p className="mb-10 text-xl font-medium text-gray-700">
                Say goodbye to boilerplate! With ApiNest, turn your JSON into
                ready-to-use APIs in seconds.
            </p>
            <form
                className="flex flex-col items-center justify-center gap-6 md:flex-row"
                onSubmit={(e) => e.preventDefault()}
            >
                <Input type="email" placeholder="Enter your email 😊" />
                <Button
                    type="submit"
                    className="hover:-translate-y-2 hover:rotate-2 hover:scale-105"
                >
                    Join Waitlist ✨
                </Button>
            </form>
        </section>
    );
}
