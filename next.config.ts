import type { NextConfig } from "next";

// NextJS does not allow us to use an external imageConfigDefault, just use local image only, so we have to config it
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
