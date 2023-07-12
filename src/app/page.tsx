import { AsyncPage, DynamicMetadata, PageProps } from '@/types/next'
import LocaleLayout from './[locale]/layout'
import HomePage, { generateMetadata as HomePageMD, HomePageProps } from './[locale]/page'

type LocalizedPageProps = PageProps & { params: { locale: string } }

export const generateStaticParams = (): { locale: string }[] => {
  const locales = process.env.NEXT_PUBLIC_LOCALES?.split(',') || []
  return locales.map((locale) => {
    return { locale }
  })
}

export const generateMetadata: DynamicMetadata<HomePageProps> = async (props) => {
  return HomePageMD(props)
}

const LocalizedPage: AsyncPage<LocalizedPageProps> = async (props) => {
  return (
    <LocaleLayout params={{ locale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE! }}>
      <HomePage {...props} />
    </LocaleLayout>
  )
}

export default LocalizedPage
