/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "void.cat",
        port: "",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
