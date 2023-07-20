const getPath = (): string => {
  const isProd = process.env.NODE_ENV === 'production'
  const path = isProd ? `${process.env.NEXT_PUBLIC_SUFFIX}` : `${process.env.NEXT_PUBLIC_LOCAL_SUFFIX}`
  return path
}

export const suffix = getPath()
