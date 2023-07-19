const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? `${process.env.PUBLIC_URL}` : `${process.env.LOCAL_URL}`,
  images: { unoptimized: true },
  basePath: isProd ? `${process.env.PUBLIC_SUFFIX}` : `${process.env.LOCAL_SUFFIX}`,
  cleanDistDir: true,
}

module.exports = nextConfig

