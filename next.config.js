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
        ],
      },
};

module.exports = nextConfig;
