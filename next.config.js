/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ecommerce.saleor.cloud",
            },
        ],
    },
};

module.exports = nextConfig;
