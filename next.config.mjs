/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.react-finland.fi',
      },
      {
        protocol: 'https',
        hostname: 'typeofconf.com',
      },
    ],
  },
};

export default nextConfig;
