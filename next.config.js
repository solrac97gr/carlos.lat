/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
    domains: ["firebasestorage.googleapis.com","newporfolio-4b2a1.firebaseapp.com"],
  },
  trailingSlash: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
