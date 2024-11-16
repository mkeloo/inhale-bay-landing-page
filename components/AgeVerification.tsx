// components/AgeVerification.tsx
import React from "react";
import Image from "next/image";
import navbarLogo from "@/public/logo/inhalebayLogo-nav1.svg";
import { useRouter } from "next/navigation";
const heroBgImage = "/assets/hero/smoking-background.png";
const heroBgImage2 = "/assets/hero/hero-bg3.jpg";


const AgeVerification = ({ onAccept }: { onAccept: () => void }) => {
    const router = useRouter();

    const handleReject = () => {
        router.push("https://www.google.com");
    };

    return (
        <div className="fixed inset-0  flex items-start justify-center py-20 z-50">
            <Image
                src={heroBgImage2}
                alt="Background with smoke"
                width={500}
                height={500}
                className="absolute inset-0 w-full rounded-lg h-full object-cover -z-20 opacity-100"
            />
            <div className="relative bg-black z-10 text-white border-slate-500 border-2 rounded-2xl shadow-lg p-6 max-w-2xl w-full text-center">
                <Image
                    src={heroBgImage}
                    alt="Background with smoke"
                    width={500}
                    height={500}
                    className="absolute inset-0 w-full rounded-lg h-full object-cover -z-20 opacity-50"
                />
                <h2 className="text-xl font-oxanium font-bold mb-4 w-full p-2 rounded-2xl bg-lime-400 text-black">
                    Age Verification
                </h2>
                <div className="bg-black px-3 rounded-xl flex flex-col items-center justify-center my-4 mx-auto max-w-[100px]">
                    <Image
                        src={navbarLogo}
                        alt="Inhale Bay Logo"
                        width={110}
                        height={18}
                        className="my-4 "
                    />
                </div>
                <p className="mb-6 font-poppins text-sm">
                    Inhale Bay Smoke Shop is an{" "}
                    <span className="font-bold">
                        age-restricted physical store intended for adults of legal smoking age only
                    </span>
                    . This website provides information about our products and store location. No online sales are offered.
                </p>
                <p className="mb-8 font-poppins text-sm">
                    By entering our website, you affirm that you are of legal smoking age in your jurisdiction and <span className="font-bold">you agree to be Age Verified</span>.
                </p>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={onAccept}
                        className="px-6 py-2 font-oxanium bg-lime-400 text-black rounded-md font-semibold hover:bg-lime-500 transition-colors"
                    >
                        Yes, I Am of Legal Age
                    </button>
                    <button
                        onClick={handleReject}
                        className="px-6 py-2 font-oxanium bg-gray-300 text-gray-700 rounded-md font-semibold hover:bg-gray-400 transition-colors"
                    >
                        No, I Don’t Agree
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgeVerification;