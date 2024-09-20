/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "news.pacesetterfrontier.com",
                pathname: "**"
            }
        ]
    }
};

export default nextConfig;
