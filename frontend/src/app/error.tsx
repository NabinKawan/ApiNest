'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex w-full flex-col items-center pt-40">
            <div className="mt-2 flex flex-col items-center space-y-2">
                <p className="font-medium text-black">
                    Oops something went wrong!
                </p>
                <p
                    className="text-primary cursor-pointer font-medium"
                    onClick={() => reset()}
                >
                    Try again
                </p>
            </div>
        </div>
    );
}
