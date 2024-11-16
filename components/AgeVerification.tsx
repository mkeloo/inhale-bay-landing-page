// components/AgeVerification.tsx
import React from "react";
import { useRouter } from "next/navigation";

const AgeVerification = ({ onAccept }: { onAccept: () => void }) => {
    const router = useRouter();

    const handleReject = () => {
        router.push("https://www.google.com");
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center  z-50">
            <div className="bg-white text-black rounded-lg shadow-lg p-6 max-w-lg w-full text-center">
                <h2 className="text-xl font-bold mb-4 w-full p-2 rounded-2xl bg-lime-400">Age Verification</h2>
                <p className="mb-6">
                    Inhale Bay Smoke Shop is an <span className="font-bold">age-restricted physical store intended for adults of legal smoking age only</span>. This website provides information about our products and store location. No online sales are offered.
                </p>
                <p className="mb-8">
                    By entering our website, you affirm that you are of legal smoking age in your jurisdication and you agree to be Age Verified.                </p>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={onAccept}
                        className="px-6 py-2 bg-lime-400 text-black rounded-md font-semibold hover:bg-lime-500 transition-colors"
                    >
                        Yes, I Am of Legal Age
                    </button>
                    <button
                        onClick={handleReject}
                        className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md font-semibold hover:bg-gray-400 transition-colors"
                    >
                        No, I Don’t Agree
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgeVerification;