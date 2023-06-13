/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['admin.digitalgarage.ch'],
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'medias.digitalgarage.ch'
        },
    ],
  },
}

module.exports = nextConfig
