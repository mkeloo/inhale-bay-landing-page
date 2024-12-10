export type Review = {
    id: number;
    name: string;
    body: string;
    stars: number;
    link: string;
    created_at?: string; // Optional field for timestamp if using `created_at` in the table
};