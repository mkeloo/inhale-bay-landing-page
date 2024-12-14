import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

// Fetch Reviews Function
export const fetchReviews = async () => {

    const { data, error } = await supabase.from('reviews').select('*');

    if (error) {
        console.error('Error fetching reviews:', error.message);
        throw new Error(error.message);
    }

    // console.log('Reviews fetched successfully:', data);
    return data ?? [];
};