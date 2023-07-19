const getPath = (): string => {
  const isProd = process.env.NODE_ENV === 'production'
  const path = isProd
    ? `${process.env.PUBLIC_URL}${process.env.PUBLIC_SUFFIX}`
    : `${process.env.LOCAL_URL}${process.env.LOCAL_SUFFIX}`
  return path
}

export const path = getPath()
