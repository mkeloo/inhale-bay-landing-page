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
};

export default nextConfig;
