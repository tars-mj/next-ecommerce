/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: [
      'picsum.photos',
      'fakestoreapi.com',
      'naszsklep-api.vercel.app',
      'tailwindui.com',
      'firebasestorage.googleapis.com',
      'media.graphcms.com'
    ],
    formats: ['image/avif', 'image/webp']
  }
};

module.exports = nextConfig;
