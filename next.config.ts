/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https', // ADD THIS BLOCK
        hostname: 'mlclinic.vip',
      },
    ],
  },
};

export default nextConfig;