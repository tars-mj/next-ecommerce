/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'fakestoreapi.com']
  }
};

module.exports = nextConfig;
