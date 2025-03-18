"use client";

import React, { useEffect, useState } from "react";
import DealsCard from "./ReusableComponents/DealVapeCard";
// import { deals } from '@/lib/deals';
import { fetchVapeDeals, VapeDeal } from "./../app/actions/vapesDeals";
import { fetchMediaBucketUrl } from "./../app/actions/mediaBucketURL";
import Image from "next/image";

const heroBgImage = "/assets/hero/hero-bg2.jpg";

const Deals = () => {
  const [vapeDeals, setVapeDeals] = useState<VapeDeal[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [baseUrl, setBaseUrl] = useState<string>("");


  // Fetch deals from Supabase
  useEffect(() => {
    async function loadDeals() {
      try {
        const res = await fetchVapeDeals();
        if (res.success) {
          setVapeDeals(res.data);
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
    <div id="vapeDeals" className="relative w-full h-full py-8 pt-16 pb-16 ">
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
            Deals & Promotions
          </h1>
        </div>

        {/* Deals Cards */}
        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            {vapeDeals.map((deal) => (
              <DealsCard
                key={deal.id}
                vape_company={deal.vape_company}
                base_deal={[{ buy_1: deal.deal_tagline, buy_2: deal.deal_tagline }]}  // using deal_tagline as base_deal
                discount_percent={deal.discount_percent}
                deal_tagline={deal.deal_tagline}
                short_title={deal.short_title}
                imgSrc={`${baseUrl}${deal.image_src}`}
                bgGradient={deal.bg_gradient}
                is_enabled={deal.is_enabled}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Deals;