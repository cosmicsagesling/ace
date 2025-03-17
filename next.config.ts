import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.amosglobalsolutions.com",
      },
      {
        protocol: "https",
        hostname: "amosglobalsolutions.com",
      },
      {
        protocol:"https",
        hostname:"lh3.googleusercontent.com"
      },
      {
        protocol: "https",
        hostname: "brand.uconn.edu",
      },
      {
        protocol:"https",
        hostname:"seyalngo.org"
      },
      {
        protocol: "https",
        hostname: "www.asu.edu",
      },
      {
        protocol: "https",
        hostname: "today.uconn.edu",
      },
      {
        protocol: "https",
        hostname: "brand.jhu.edu",
      },
      {
        protocol: "https",
        hostname: "hub.jhu.edu",
      },
      {
        protocol: "https",
        hostname: "www.umass.edu",
      },
      {
        protocol: "https",
        hostname: "brand.ucr.edu",
      },
      {
        protocol: "https",
        hostname: "vt.edu",
      },
      {
        protocol: "https",
        hostname: "www.usf.edu",
      },
      {
        protocol: "https",
        hostname: "brand.arizona.edu",
      },
      {
        protocol: "https",
        hostname: "www.arizona.edu",
      },
      {
        protocol: "https",
        hostname: "drexel.edu",
      },
      {
        protocol: "https",
        hostname: "www.udel.edu",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  transpilePackages: ['country-state-city'],


  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   ignoreBuildErrors: true,
  // },
  // Other config options here
};

export default nextConfig;