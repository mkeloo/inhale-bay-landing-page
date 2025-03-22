// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return [
        {
            url: 'https://inhalebaysmokeshop.com',
            lastModified,
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: 'https://inhalebaysmokeshop.com/terms-conditions',
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://inhalebaysmokeshop.com/privacy-policy',
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ]
}