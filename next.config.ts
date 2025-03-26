import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep this empty or add other necessary configurations
  reactStrictMode: true,
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pugmboivpnkoasgsgfyf.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/store-images/**",
      },
      {
        protocol: "https",
        hostname: "dnltndrwudjaskjwczvm.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/inhale-bay-website/**",
      },
    ],
    deviceSizes: [320, 425, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },
};

export default nextConfig;