'use client';

import { useEffect, useState } from 'react';
import TestimonialsCards from "@/components/ReusableComponents/TestimonialsCards";
import { fetchStoreReviews, StoreReview } from "@/app/actions/storeReviews";

const Testimonials = () => {
    const [reviews, setReviews] = useState<StoreReview[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchStoreReviews()
            .then(({ success, data, error }) => {
                if (success) {
                    setReviews(
                        data.map((review) => ({
                            ...review,
                        }))
                    );
                } else {
                    setError(error || "Failed to load testimonials.");
                }
            })
            .catch((err) => {
                console.error("Error fetching reviews:", err);
                setError("Failed to load testimonials.");
            });
    }, []);

    return (
        <div id="testimonials" className="relative w-full h-full py-8 pt-16 pb-16 bg-black">
            <div className="max-w-7xl mx-auto w-full h-full px-4 md:px-6 lg:px-12">
                <div className="flex items-center justify-center mb-8 py-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
                        What Customers Say About Us!
                    </h1>
                </div>
                {error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <TestimonialsCards reviews={reviews} />
                )}
            </div>
        </div>
    );
};

export default Testimonials;