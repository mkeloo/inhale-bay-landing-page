import React, { useEffect, useState } from "react";
import { dealsFlowerBuds } from "@/lib/dealsFlowerBuds";
import DealFlowerBudCard from "./ReusableComponents/DealFlowerBudCard";
import { fetchHempFlowerDeals, HempFlowerDeal } from "./../app/actions/hempFlowerDeals";
import { fetchMediaBucketUrl } from "@/app/actions/mediaBucketURL";


const heroBgImage = "/assets/hero/hero-bg2.jpg";


const Deals = () => {
    const [hempFlowerDeal, setHempFlowerDeal] = useState<HempFlowerDeal[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [baseUrl, setBaseUrl] = useState<string>("");

    // Fetch deals from Supabase
    useEffect(() => {
        async function loadDeals() {
            try {
                const res = await fetchHempFlowerDeals();
                if (res.success) {
                    setHempFlowerDeal(res.data);
                    // console.log("Hemp Flower Deals", res.data);
                } else {
                    setError(res.error || "Error loading deals");
                }
            } catch (err: any) {
                setError(err.message);
            }
        }
        loadDeals();
    }, []);


    // Fetch the media bucket base URL from settings
    useEffect(() => {
        async function loadBaseUrl() {
            try {
                const url = await fetchMediaBucketUrl();
                setBaseUrl(url);
            } catch (err: any) {
                console.error("Error fetching base URL", err);
            }
        }
        loadBaseUrl();
    }, []);



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
            <div className="max-w-7xl mx-auto w-full h-full px-2">
                <div className="flex items-center justify-center mb-8 py-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
                        Flower Buds Deals
                    </h1>
                </div>

                {/* Bento Box Items */}
                {/* <DealsBentoBox /> */}

                {/* Deals Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
                    {hempFlowerDeal.map((deal) => (
                        <DealFlowerBudCard
                            key={deal.id}
                            id={deal.id}
                            budName={deal.bud_name}
                            OneGramPrice={deal.one_gram_price}
                            FourGramPrice={deal.four_gram_price}
                            imgSrc={`${baseUrl}${deal.image_src}`}
                            bgGradient={deal.bg_gradient}
                            is_enabled={deal.is_enabled}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Deals;
