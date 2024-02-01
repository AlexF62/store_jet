/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVER_URL: process.env.SERVER_URL
    },

    async rewrites() {
        return [{
            source: '/uploads/:path*',
            destination: 'http://localhost:3001/uploads/:path*', // Adjust this URL to your image server
        }, ];
    },
}
module.exports = nextConfig