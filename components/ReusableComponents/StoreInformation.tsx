import React from 'react'
import Image from "next/image";
import { Phone, MapPin, Clock } from 'lucide-react';
const heroBgImage = "/assets/hero/bg-smoke3.jpg";


export default function StoreInformation() {
    return (
        <div className="relative h-[40%] bg-black p-4 md:p-6 lg:p-10 z-20 rounded-lg shadow-lg w-full text-white flex-grow-0 flex flex-col items-center lg:items-start justify-center">
            <Image
                src={heroBgImage}
                alt="Background with smoke"
                width={500}
                height={500}
                className="absolute inset-0 w-full rounded-lg h-full object-cover -z-10 opacity-60"
            />
            <h2 className="text-2xl md:text-3xl lg:text-[40px] font-normal font-oxanium mb-4 md:mb-5 lg:mb-8">
                Our Store Information
            </h2>
            <div>

                {/* Phone Number */}
                <div className="flex items-center mb-3 md:mb-4">
                    <Phone className="text-yellow-500 mr-2 md:mr-3 w-6 h-6 md:w-7 md:h-7" size={32} strokeWidth={2} />
                    <div>
                        <p className="text-base md:text-lg lg:text-xl font-grotesk font-semibold tracking-wider">
                            904-290-3459
                        </p>
                    </div>
                </div>

                {/* Address */}
                <div className="flex items-center mb-3 md:mb-4">
                    <MapPin className="text-yellow-500 mr-2 md:mr-3  w-6 h-6 md:w-7 md:h-7" size={32} strokeWidth={2} />
                    <div>
                        <p className="text-base md:text-lg lg:text-xl font-grotesk font-semibold tracking-wider">
                            5751 N Main St <br />
                            Suite #108, <br />
                            Jacksonville, FL 32208
                        </p>
                    </div>
                </div>

                {/* Hours */}
                <div className="flex items-center mb-4 md:mb-5 lg:mb-6">
                    <Clock className="text-yellow-500 mr-2 md:mr-3  w-6 h-6 md:w-7 md:h-7" size={32} strokeWidth={2} />
                    <div>
                        <p className="text-base md:text-lg lg:text-xl font-grotesk font-semibold tracking-wider">
                            <span className="font-bold font-poppins">Everyday:</span> 10:00 AM - 8:00 PM <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
