/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'faces-img.xcdn.link',
        port: '',
        pathname: '/*',
      },
    ],
  }
}

module.exports = nextConfig
