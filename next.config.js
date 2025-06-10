/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["localhost", "placeholder.svg"],
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: "out",
}

module.exports = nextConfig
