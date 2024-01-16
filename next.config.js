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
            source: '/docs/moeda',
            destination: '/help',
        },
        {
            source: '/:path*',
            destination: '/api/:path*',
        },
        {
            source: '/:path*',
            destination: '/api/404'
        },
    ],
}

module.exports = nextConfig
