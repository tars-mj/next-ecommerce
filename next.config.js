/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos']
  }
};

module.exports = nextConfig;
