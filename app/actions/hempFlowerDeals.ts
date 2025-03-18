"use server";

import { createClient } from "@/utils/supabase/server";

export type HempFlowerDeal = {
    id: number;
    bud_name: string;
    one_gram_price: number;
    four_gram_price: number;
    image_src: string;
    bg_gradient: string;
    created_at?: string;
    updated_at?: string;
    option_name?: string;
    is_enabled?: boolean;
};


/* -----------------------------
   Fetch all flower buds deals
------------------------------ */
export async function fetchHempFlowerDeals(): Promise<{
    success: boolean;
    data: HempFlowerDeal[];
    error?: string;
}> {
    try {
        const supabase = await createClient();
        const { data, error } = await supabase
            .from("website_flower_buds_deals")
            .select("*")
            .order("id", { ascending: true });
        if (error) throw error;
        return { success: true, data: data as HempFlowerDeal[] };
    } catch (err: any) {
        return { success: false, data: [], error: err.message };
    }
}