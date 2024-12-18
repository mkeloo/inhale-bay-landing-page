import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep this empty or add other necessary configurations
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pugmboivpnkoasgsgfyf.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/store-images/**",
      },
    ],
  },
};

export default nextConfig;