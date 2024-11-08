import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|svg|png|jpg|jpeg)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[contenthash].[ext]",
            outputPath: "static/media/",
            publicPath: "/_next/static/media/",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
