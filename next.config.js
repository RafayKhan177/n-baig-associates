/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            "images.unsplash.com",
            "cdn.pixabay.com",
            "images.pexel.com",
            "img.freepik.com",
            "localhost"
        ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
            },
        ],
    },
};
module.exports = nextConfig
