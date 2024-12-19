import React from "react";
import { dealsFlowerBuds } from "@/lib/dealsFlowerBuds";
import DealFlowerBudCard from "./ReusableComponents/DealFlowerBudCard";


const heroBgImage = "/assets/hero/hero-bg2.jpg";

const Deals = () => {
    return (
        <div id="flowerDeals" className="relative w-full h-full py-8 pt-16 pb-16 ">
            {/* <Image
                src={heroBgImage}
                alt="Background with smoke"
                width={500}
                height={500}
                quality={100}
                className="absolute object-cover inset-0 z-[-10] opacity-50"
            /> */}
            <div className="max-w-7xl mx-auto w-full h-full px-4">
                <div className="flex items-center justify-center mb-8 py-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
                        Flower Buds Deals
                    </h1>
                </div>

                {/* Bento Box Items */}
                {/* <DealsBentoBox /> */}

                {/* Deals Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
                    {dealsFlowerBuds.map((deal) => (
                        <DealFlowerBudCard
                            key={deal.id}
                            id={deal.id}
                            budName={deal.budName}
                            OneGramPrice={deal.OneGramPrice}
                            FourGramPrice={deal.FourGramPrice}
                            imgSrc={deal.imageSrc}
                            bgGradient={deal.bgGradient}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Deals;
