const getSuffixPath = (): string => {
  const isProd = process.env.NODE_ENV === 'production'
  const path = isProd ? `${process.env.NEXT_PUBLIC_SUFFIX}` : ''
  return path
}

const getfullPath = (): string => {
  const isProd = process.env.NODE_ENV === 'production'
  const path = isProd ? `${process.env.NEXT_PUBLIC_URL}${process.env.NEXT_PUBLIC_SUFFIX}` : `${process.env.LOCAL_URL}`
  return path
}

export const suffixPath = getSuffixPath()
export const fullPath = getfullPath()
