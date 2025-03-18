// app/actions/websiteStoreImages.ts
"use server";

import { createClient } from "@/utils/supabase/server";

export type ImageRecord = {
    id: number;
    image_src: string;
    image_alt: string;
    sort: number;
    created_at?: string;
    updated_at?: string;
};

// Fetch images (Read)
export async function fetchStoreImages(): Promise<ImageRecord[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("website_store_images")
        .select("*")
        .order("sort", { ascending: true });

    if (error) throw error;
    return data || [];
}
