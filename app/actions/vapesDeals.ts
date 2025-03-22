"use server";

import { createClient } from "@/utils/supabase/server";


export type VapeDeal = {
    id: number;
    vape_company: string;
    buy_1_price: number;
    buy_2_price: number;
    discount_percent: number;
    deal_tagline: string;
    short_title: string;
    image_src: string;
    bg_gradient: string;
    created_at?: string;
    updated_at?: string;
    option_name?: string;
    is_enabled?: boolean;
    sort?: number;
};


/* ---------------------------------------------
   Basic fetch calls (no pagination shown):
---------------------------------------------- */
export async function fetchVapeDeals(): Promise<{
    success: boolean;
    data: VapeDeal[];
    error?: string;
}> {
    try {
        const supabase = await createClient();
        const { data, error } = await supabase
            .from("website_vape_deals")
            .select("*")
            .order("sort", { ascending: true });
        if (error) throw error;
        return { success: true, data: data as VapeDeal[] };
    } catch (err: any) {
        return { success: false, data: [], error: err.message };
    }
}
