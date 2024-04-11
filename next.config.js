/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'doc',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
