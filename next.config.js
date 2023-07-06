/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? `${process.env.NEXT_PUBLIC_URL}${process.env.NEXT_PUBLIC_SUFFIX}` : '',
}

module.exports = nextConfig

