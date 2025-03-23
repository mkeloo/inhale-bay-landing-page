import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/**
 * Next.js 13 metadata for SEO
 */
export const metadata: Metadata = {
  title: "Inhale Bay Smoke Shop – Where Quality Meets Excellence",
  description:
    "Discover premium vapes, THC-A Flower, Bongs, & more. Enjoy exclusive deals & promotions for all your smoking needs.",
  keywords: [
    "Smoke Shop",
    "Vapes",
    "THC-A Flower",
    "Bongs",
    "Inhale Bay",
    "Deals",
    "Promotions",
    "Jacksonville FL",
  ],
  openGraph: {
    title: "Inhale Bay Smoke Shop – Where Quality Meets Excellence",
    description:
      "Discover premium vapes, THC-A Flower, Bongs, & more. Enjoy exclusive deals & promotions for all your smoking needs.",
    url: "https://inhalebaysmokeshop.com/",
    siteName: "Inhale Bay Smoke Shop",
    images: [
      {
        url: "https://inhalebaysmokeshop.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inhale Bay Smoke Shop – Where Quality Meets Excellence",
    description:
      "Discover premium vapes, THC-A Flower, Bongs, & more. Enjoy exclusive deals & promotions for all your smoking needs.",
    images: ["https://inhalebaysmokeshop.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:wght@100..900&family=Space+Grotesk:wght@300..700&family=Oxanium:wght@200..800&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics Script */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-P8JFL9HTRG"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P8JFL9HTRG');
          `}
        </Script>

        {/* JSON-LD: LocalBusiness Schema */}
        <Script id="local-business-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Inhale Bay Smoke Shop",
            description:
              "Where Quality meets Excellence. Discover premium vapes, THC-A Flower, Bongs, & more. Enjoy exclusive deals & promotions for all your smoking needs.",
            image: "https://inhalebaysmokeshop.com/og-image.jpg",
            url: "https://inhalebaysmokeshop.com/", // replace with your domain
            telephone: "904-290-3459",
            address: {
              "@type": "PostalAddress",
              streetAddress: "5751 N Main St #108",
              addressLocality: "Jacksonville",
              addressRegion: "FL",
              postalCode: "32208",
              addressCountry: "US",
            },
            openingHours: [
              "Mo 10:00-20:00",
              "Tu 10:00-20:00",
              "We 10:00-20:00",
              "Th 10:00-22:00",
              "Fr 10:00-22:00",
              "Sa 10:00-22:00",
              "Su 10:00-22:00",
            ],
          })}
        </Script>
      </head>

      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}