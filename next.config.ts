import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure experimental features
  experimental: {
    optimizePackageImports: ['lightningcss'],
    // Disable CSS minification to avoid LightningCSS issues
    optimizeCss: false,
    // Ensure server components CSS optimization is disabled
    serverComponentsExternalPackages: ['lightningcss']
  },
  // Configure Webpack to handle CSS processing
  webpack: (config, { isServer }) => {
    // Exclude LightningCSS from Webpack processing
    config.resolve.alias = {
      ...config.resolve.alias,
      'lightningcss': false,
      'lightningcss-linux-x64-gnu': false,
    };
    
    // Exclude LightningCSS from being processed
    config.externals = [...(config.externals || []), 'lightningcss'];
    
    // Ensure CSS is processed with PostCSS instead of LightningCSS
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    });
    
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
