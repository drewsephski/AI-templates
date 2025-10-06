import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable LightningCSS to avoid native module issues
  experimental: {
    optimizePackageImports: ['lightningcss']
  },
  // Add Webpack configuration to disable LightningCSS
  webpack: (config, { isServer }) => {
    // Exclude LightningCSS from Webpack processing
    config.resolve.alias = {
      ...config.resolve.alias,
      'lightningcss': false,
    };
    
    // Exclude LightningCSS modules from being processed
    config.externals = config.externals || [];
    if (!Array.isArray(config.externals)) {
      config.externals = [config.externals];
    }
    
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tailark.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
