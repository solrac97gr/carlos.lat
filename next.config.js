/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
    domains: ['firebasestorage.googleapis.com'],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
