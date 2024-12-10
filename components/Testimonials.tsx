'use client';

import { useEffect, useState } from 'react';
import TestimonialsCards from "@/components/ReusableComponents/TestimonialsCards";
import { fetchReviews } from "@/supabase/api";
import { Review } from "@/supabase/types";

const Testimonials = () => {
    const [reviews, setReviews] = useState<Review[]>([]); // Use Review type here
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch reviews when the component mounts
        fetchReviews()
            .then((data) => {
                setReviews(data);
            })
            .catch((err) => {
                console.error("Error fetching reviews:", err);
                setError("Failed to load testimonials.");
            });
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div id="testimonials" className="relative w-full h-full py-8 pt-16 pb-16 bg-black">
            <div className="max-w-7xl mx-auto w-full h-full px-12">
                <div className="flex items-center justify-center mb-8 py-8">
                    <h1 className="text-6xl font-extrabold bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
                        What Customers Say About Us!
                    </h1>
                </div>

                {/* Render TestimonialsCards if reviews are loaded */}
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