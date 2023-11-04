/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/proxy/:path*',
            destination: 'http://localhost:7860/:path*'
          }
        ]
      }
}

module.exports = nextConfig
