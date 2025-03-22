import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

interface SwiperComponentProps {
    reviews: Array<{
        name: string;
        body: string;
        stars: number;
        link: string;
    }>;
}

export default function SwiperSlider({ reviews }: SwiperComponentProps) {
    return (
        <div className="relative h-full block md:hidden">
            <Swiper
                key={`swiper-${Math.ceil(reviews.length / 2)}`}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={Math.ceil(reviews.length / 2) > 1}
                pagination={false}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="w-full pt-[50px] pb-[50px] mt-10"
            >
                {Array.from({ length: Math.ceil(reviews.length / 2) }).map((_, i) => (
                    <SwiperSlide
                        key={i}
                        className="bg-center bg-cover !w-[250px] !h-full !max-h-[700px] mb-6 flex items-center justify-center"
                    >
                        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                            <div className="w-full flex-1">
                                <ReviewCard {...reviews[i * 2]} />
                            </div>
                            {reviews[i * 2 + 1] && (
                                <div className="w-full flex-1">
                                    <ReviewCard {...reviews[i * 2 + 1]} />
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="pointer-events-none z-[999] absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background/80"></div>
            <div className="pointer-events-none z-[999] absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background/80"></div>
        </div >
    );
}