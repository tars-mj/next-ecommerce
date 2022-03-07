/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'fakestoreapi.com'],
    formats: ['image/avif', 'image/webp']
  }
};

module.exports = nextConfig;
