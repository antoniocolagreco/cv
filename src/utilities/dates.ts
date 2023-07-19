import { DEFAULT_LANGUAGE } from '@/dictionaries/dictionaries'

export const getYear = (locale: string | undefined) => {
  const validLocale = locale || DEFAULT_LANGUAGE
  const dateFormatter = Intl.DateTimeFormat(validLocale, { year: 'numeric' })
  return dateFormatter.format(new Date())
}
