const { sources } = require('next/dist/compiled/webpack/webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.7tv.app"
            }
        ],
    },
    rewrites: async () => [
        {
            source: '/:path*',
            destination: '/api/:path*',
        },
    ],
}

module.exports = nextConfig
