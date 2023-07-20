import { DEFAULT_LANGUAGE } from '@/dictionaries/dictionaries'

export const getYear = (lang: string | undefined) => {
  const validLanguage = lang || DEFAULT_LANGUAGE
  const dateFormatter = Intl.DateTimeFormat(validLanguage, { year: 'numeric' })
  return dateFormatter.format(new Date())
}
