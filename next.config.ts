import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio",
  trailingSlash: true,
  typescript: { ignoreBuildErrors: true },
  experimental: { workerThreads: true, cpus: 1 },
};

export default nextConfig;
