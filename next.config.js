/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'newporfolio-4b2a1.firebaseapp.com',
      },
    ],
  },
  trailingSlash: true,
  output: 'export', // Replaces next export command
};

module.exports = nextConfig;
