import type { NextConfig } from "next";

const isGhPages = process.env.NEXT_PUBLIC_GH_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGhPages ? "export" : undefined,
  basePath: isGhPages ? "/Digital-Dream-Web_DDW" : "",
  assetPrefix: isGhPages ? "/Digital-Dream-Web_DDW/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
