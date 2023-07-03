/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? 'https://antoniocolagreco.github.io/resume/' : '',
}

module.exports = nextConfig
