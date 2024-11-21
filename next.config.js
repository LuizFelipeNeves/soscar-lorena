/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'soscar-lorena.vercel.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Configure SWC for browser environment
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
