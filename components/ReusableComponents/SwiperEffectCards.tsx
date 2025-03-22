import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

import fallbackImg from '@/public/assets/skeleton/flower_placeholder.webp'


type ImageCards = {
    id: number;
    src: string;
    colors: string;
};

export default function SwiperEffectCards({
    imageCards,
    autoplay = true,
}: {
    imageCards: ImageCards[];
    autoplay?: boolean;
}) {
    const [isLoaded, setIsLoaded] = useState(false);

    const adjustedCards =
        imageCards.length >= 3
            ? imageCards
            : [...imageCards, ...imageCards, ...imageCards].slice(0, 3);

    return (
        <div className="flex flex-col items-center justify-center">
            <Swiper
                effect="cards"
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                slidesPerView={1}
                loop={imageCards.length > 2}
                {...(autoplay ? {
                    autoplay: {
                        delay: 1100,
                        disableOnInteraction: false,
                    }
                } : {})}
                className="w-[220px] h-[270px] md:w-[300px] md:h-[300px] "
            >
                {adjustedCards.map((card) => (
                    <SwiperSlide
                        key={card.id}
                        className={`flex items-center justify-center rounded-[18px] text-white font-bold text-[22px] shadow-lg shadow-neutral-300 bg-gradient-to-br ${card.colors}`}
                    >
                        <img
                            src={card.src}
                            alt={`Slide ${card.id}`}
                            loading="lazy"
                            onLoad={() => setIsLoaded(true)}
                            className={`w-full h-full p-2 object-contain rounded-[18px] border-dotted border-[3px] border-lime-200 ${!isLoaded ? "filter blur-lg" : "filter blur-0"
                                } transition-all duration-700`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex items-center justify-center gap-2 px-4 font-bold text-base md:text-lg text-center mt-6 md:mt-10 md:max-w-md">
                Premium vapes, THC-A flower, bongs & more — with exclusive deals just for you.
            </div>
        </div>
    );
}