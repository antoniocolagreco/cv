export const getBrowserLanguage = (): undefined | string => {
  if (typeof navigator !== 'undefined' && navigator.language) {
    return navigator.language.split('-')[0]
  }
  return undefined
}
