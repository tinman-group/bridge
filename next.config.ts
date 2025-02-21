import withBundleAnalyzer from "@next/bundle-analyzer";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
initOpenNextCloudflareForDev();

const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  eslint: {
    ignoreDuringBuilds: process.env.SKIP_LINTER === "true",
  },
  typescript: {
    ignoreBuildErrors: process.env.SKIP_LINTER === "true",
  },
};

// eslint-disable-next-line import/no-unused-modules
export default process.env.ANALYZE === "true"
  ? withBundleAnalyzer()(nextConfig)
  : nextConfig;
