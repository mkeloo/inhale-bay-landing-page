// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/videos/",
            publicPath: "/_next/static/videos/",
          },
        },
      ],
    });

    return config;
  },
  async headers() {
    return [
      {
        source: "/_next/static/videos/:path*", // This matches your videos directory
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1-year cache with immutability
          },
        ],
      },
    ];
  },
};

export default nextConfig;
