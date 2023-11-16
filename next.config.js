/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: isProd ? 'https' : 'http',
                hostname: isProd ? 'gurpreetd5.sg-host.com' : 'asset-cleaning-tauranga.local',

            },
        ],
    },
    env: {
        url: isProd ? "http://gurpreetd5.sg-host.com" : "http://asset-cleaning-tauranga.local",
    },
}

module.exports = nextConfig
