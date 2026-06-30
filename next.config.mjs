/** @type {import('next').NextConfig} */
const nextConfig = {
  // Node server (next start). We deliberately do NOT use `output: 'export'`
  // because we need API routes, SSR for SEO, and Stripe/Firebase webhooks.
  reactStrictMode: true,
  images: {
    // v1 serves uploads from /public/uploads. Swap to S3/Cloudinary later by
    // adding the relevant remotePatterns here.
    remotePatterns: [],
  },
};

export default nextConfig;
