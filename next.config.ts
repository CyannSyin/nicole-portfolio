import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  basePath: isGitHubPages ? "" : basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: isGitHubPages,
  output: isGitHubPages ? "export" : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
