import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const repositoryName = "----";
const basePath = isProduction ? `/${repositoryName}` : undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined
};

export default nextConfig;
