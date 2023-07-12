const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? `${process.env.NEXT_PUBLIC_URL}${process.env.NEXT_PUBLIC_SUFFIX}` : '',
  images: { unoptimized: true },
}

module.exports = nextConfig

