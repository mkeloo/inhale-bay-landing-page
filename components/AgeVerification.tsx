// components/AgeVerification.tsx
import React, { useState } from "react";
import Image from "next/image";
import navbarLogo from "@/public/logo/inhalebayLogo-nav1.svg";
import { useRouter } from "next/navigation";

// const heroBgImage = "/assets/hero/smoking-background.webp";
const heroBgImage2 = "/assets/hero/hero-bg3.webp";

const AgeVerification = ({ onAccept }: { onAccept: () => void }) => {
    const router = useRouter();

    const handleReject = () => {
        router.push("https://www.google.com");
    };
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="fixed inset-0 flex items-center justify-center px-4 md:px-6 lg:px-8 py-20 z-50">

            {/* Background Image */}
            <Image
                src={heroBgImage2}
                alt="Background with smoke"
                width={500}
                height={500}
                priority
                onLoad={() => setIsLoaded(true)}
                className={`absolute inset-0 w-full h-full object-cover -z-20 opacity-100 ${!isLoaded ? "filter blur-lg" : "filter blur-0"
                    } transition-all duration-700`}
            />

            {/* Content */}
            <div className="relative bg-black z-10 text-white border-slate-500 border-2 rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 w-full max-w-sm md:max-w-lg lg:max-w-2xl text-center">
                {/* Overlay Image */}
                {/* <Image
                    src={heroBgImage}
                    alt="Background with smoke"
                    width={500}
                    height={500}
                    className="absolute inset-0 w-full h-full object-cover -z-10 opacity-50 rounded-2xl"
                /> */}

                {/* Title */}
                <h2 className="text-lg md:text-xl lg:text-2xl font-oxanium font-bold mb-4 p-2 rounded-2xl bg-lime-400 text-black">
                    Age Verification
                </h2>

                {/* Logo */}
                <div className="bg-black px-3 rounded-xl flex flex-col items-center justify-center my-4 mx-auto max-w-[100px]">
                    <Image
                        src={navbarLogo}
                        alt="Inhale Bay Logo"
                        width={90}
                        height={18}
                        priority
                        className="my-2 md:my-4"
                    />
                </div>

                {/* Description */}
                <p className="mb-4 md:mb-6 font-poppins text-xs md:text-sm lg:text-base">
                    Inhale Bay Smoke Shop is an{" "}
                    <span className="font-bold">
                        age-restricted physical store intended for adults of legal smoking age only
                    </span>
                    . This website provides information about our products and store location. No online
                    sales are offered.
                </p>
                <p className="mb-6 md:mb-8 font-poppins text-xs md:text-sm lg:text-base">
                    By entering our website, you affirm that you are of legal smoking age in your
                    jurisdiction and{" "}
                    <span className="font-bold">you agree to be Age Verified</span>.
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                    <button
                        onClick={onAccept}
                        className="w-full md:w-auto px-4 md:px-6 py-2 text-sm md:text-base font-oxanium bg-lime-400 text-black rounded-md font-semibold hover:bg-lime-500 transition-colors"
                    >
                        Yes, I Am of Legal Age
                    </button>
                    <button
                        onClick={handleReject}
                        className="w-full md:w-auto px-4 md:px-6 py-2 text-sm md:text-base font-oxanium bg-gray-300 text-gray-700 rounded-md font-semibold hover:bg-gray-400 transition-colors"
                    >
                        No, I Don’t Agree
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgeVerification;