const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'data.assetcleaning.co.nz',
                port: '',
                pathname: '/**'
            },
        ],
    },
    env: {
        url: "https://data.assetcleaning.co.nz",
        siteUrl: "https://assetcleaning.co.nz",
        name: "Asset Cleaning",
        darkLogo: "/logo-dark.svg",
    },
    async redirects() {
        return [
            {
                source: '/testimonials',
                destination: '/#testimonial',
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
                destination: '/#testimonial',
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
                destination: '/#testimonial',
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig
