import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Set the base path if deploying to a subdirectory
  // basePath: '/repo-name',
};

export default nextConfig;
