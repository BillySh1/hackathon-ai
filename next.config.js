/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/proxy/:path*",
        destination: "http://localhost:7860/:path*",
      },
    ];
  },
  serverDependencies: [
    "@rainbow-me/rainbowkit",
    "@rainbow-me/rainbowkit/wallets",
  ],
};

module.exports = nextConfig;
