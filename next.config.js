/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dst1eqcmo/**',
          },
        ],
        unoptimized : true
      },
}

module.exports = nextConfig
