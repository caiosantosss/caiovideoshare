/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['wallpapercave.com'],
  }
}

module.exports = nextConfig
