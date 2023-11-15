/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['asset-cleaning-tauranga.local'],
    },
    env: {
        url: "http://asset-cleaning-tauranga.local"
    },
}

module.exports = nextConfig
