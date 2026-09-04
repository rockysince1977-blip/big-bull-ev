/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bigbullerickshaw.in',
      },
    ],
  },
};

export default nextConfig;