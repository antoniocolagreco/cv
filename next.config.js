const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: isProd
    ? `${process.env.NEXT_PUBLIC_URL}${process.env.NEXT_PUBLIC_SUFFIX}`
    : `${process.env.NEXT_PUBLIC_LOCAL_URL}${process.env.NEXT_PUBLIC_LOCAL_SUFFIX}`,
  images: { unoptimized: true },
  basePath: isProd ? `${process.env.NEXT_PUBLIC_SUFFIX}` : `${process.env.NEXT_PUBLIC_LOCAL_SUFFIX}`,
  cleanDistDir: true,
}

module.exports = nextConfig

