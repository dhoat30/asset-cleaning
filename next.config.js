/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'gurpreetd5.sg-host.com'

            },
        ],
    },
    env: {
        url: "https://gurpreetd5.sg-host.com"
    },
}

module.exports = nextConfig
