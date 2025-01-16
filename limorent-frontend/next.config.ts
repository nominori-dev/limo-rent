
import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ]
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    eslint: {
        ignoreDuringBuilds: true
    },
    async rewrites() {
        return [
            {
                source: "/img/:path*",
                destination: `http://localhost:8080/api/image/:path*`,
            }
        ]
    }
};

const withMdx = createMDX();

module.exports = withMdx(nextConfig);
