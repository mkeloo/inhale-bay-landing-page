"use server";

import { createClient } from "@/utils/supabase/server";



export async function fetchMediaBucketUrl(): Promise<string> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("inhale_bay_website_settings")
        .select("option_value")
        .eq("option_name", "media_bucket_url")
        .single();

    if (error) throw error;
    if (!data) throw new Error("No media_bucket_url found in settings.");
    return data.option_value as string;
}
