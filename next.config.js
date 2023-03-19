/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'medias.digitalgarage.ch'
        },
    ],
  },
}

module.exports = nextConfig
