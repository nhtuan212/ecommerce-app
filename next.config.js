/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.jp",
            },
            {
                protocol: "https",
                hostname: "i.dummyjson.com",
            },
        ],
    },
};

module.exports = nextConfig;
