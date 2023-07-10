export const getYear = (locale: string) => {
  const dateFormatter = Intl.DateTimeFormat(locale, { year: 'numeric' })
  return dateFormatter.format(new Date())
}
