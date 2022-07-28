/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["abs.twimg.com"],
  },
};

module.exports = nextConfig;
