/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["c.mql5.com", "raw.githubusercontent.com", "seeklogo.com", "upload.wikimedia.org", "static-00.iconduck.com"],
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
