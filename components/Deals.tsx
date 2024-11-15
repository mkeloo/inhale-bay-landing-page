import React from "react";
import Image from "next/image";
import DealsBentoBox from "./DealsBentoBox";
import DealsCard from "./ReusableComponents/DealsCard";
import { deals } from '@/lib/deals';


const heroBgImage = "/assets/hero/hero-bg2.jpg";

const Deals = () => {
  return (
    <div id="deals" className="relative w-full h-full py-8 pt-16 pb-16 ">
      <Image
        src={heroBgImage}
        alt="Background with smoke"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-[-10] opacity-50"
      />
      <div className="max-w-7xl mx-auto w-full h-full px-12">
        <div className="flex items-center justify-start mb-8 py-8">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
            Deals & Promotions
          </h1>
        </div>

        {/* Bento Box Items */}
        {/* <DealsBentoBox /> */}

        {/* Deals Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
          {deals.map((deal) => (
            <DealsCard
              key={deal.id}
              vape_company={deal.vape_company}
              base_deal={deal.base_deal}
              discount_percent={deal.discount_percent}
              deal_tagline={deal.deal_tagline}
              short_title={deal.short_title}
              imgSrc={deal.imgSrc}
              bgGradient={deal.bgGradient}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
