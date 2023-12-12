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
    async redirects() {
        return [
            {
                source: '/testimonials',
                destination: '/#testimonials',
                permanent: true,
            },
            {
                source: '/contact-us',
                destination: '/contact',
                permanent: true,
            },
            {
                source: '/678-2',
                destination: '/',
                permanent: true,
            },
            {
                source: '/testimonials/sarah',
                destination: '/#testimonials',
                permanent: true,
            },
            {
                source: '/services/builders-cleaning',
                destination: '/commercial/builders-cleaning',
                permanent: true,
            },
            {
                source: '/services/commercial-cleaning',
                destination: '/commercial',
                permanent: true,
            },
            {
                source: '/testimonials/kate-murray',
                destination: '/#testimonials',
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig
