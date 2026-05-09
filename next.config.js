/** @type {import('next').NextContext} */
const nextConfig = {
    output: 'export', // Optimized for static hosting (Vercel/GitHub Pages)
    images: {
        unoptimized: true,
    }
}

module.exports = nextConfig
