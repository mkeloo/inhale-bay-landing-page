"use server";

import { createClient } from "@/utils/supabase/server";

export type StoreReview = {
    id: number;
    name: string;
    body: string;
    stars: number;
    link: string;
    created_at?: string;
    updated_at?: string;
    option_name?: string;
};

/**
 * Fetch all store reviews without pagination.
 */
export async function fetchStoreReviews(): Promise<{ success: boolean; data: StoreReview[]; error?: string }> {
    try {
        const supabase = await createClient();
        const { data, error } = await supabase
            .from("store_reviews")
            .select("*")
            .order("id", { ascending: false });
        if (error) throw error;
        return { success: true, data: data as StoreReview[] };
    } catch (err: any) {
        return { success: false, data: [], error: err.message };
    }
}