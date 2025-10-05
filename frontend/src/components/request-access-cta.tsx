'use client';

import { useCreateWaitingList } from '@/@api/gen/apiComponents';
import Button from './ui/button';
import Input from './ui/input';
import { useToast } from '@/hooks/useToast';

export default function RequestAccessCTA() {
    const toast = useToast();

    const { mutate: mutateCreateWaitingList, isPending } = useCreateWaitingList(
        {
            onSuccess: () => {
                toast.success(
                    "Welcome to the ApiNest family! You're now on our exclusive waitlist!"
                );
            },
            onError: (error: any) => {
                const status = error?.status ?? 400;
                const errorMsg =
                    error?.payload ??
                    'Oops! Something went wrong. Please try again or contact support!';

                if (status === 409) {
                    toast.error('This email is already on the waiting list.');
                    return;
                }

                toast.error(errorMsg);
            },
        }
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;

        if (!email) {
            toast.error(
                'Please enter your email address to join the waitlist! 📧'
            );
            return;
        }

        mutateCreateWaitingList({
            body: { email },
        });
    };

    return (
        <section
            id="request"
            className="relative z-10 mx-6 mt-24 rounded-4xl border-4 border-dashed border-primary-400 bg-gradient-to-r from-primary-100 via-secondary-100 to-warning-100 py-16 text-center shadow-cartoon md:mx-20"
        >
            <div className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 transform animate-bounce rounded-full bg-warning-300 shadow-cartoon"></div>
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
                onSubmit={handleSubmit}
            >
                <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email 😊"
                    required
                />
                <Button
                    type="submit"
                    disabled={isPending}
                    className="font-fredoka hover:-translate-y-2 hover:rotate-2 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:transform-none"
                >
                    {isPending ? 'Adding you... ⏳' : 'Join Waitlist ✨'}
                </Button>
            </form>
        </section>
    );
}
