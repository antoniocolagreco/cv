import { AsyncPage, DynamicMetadata, PageProps } from '@/types/next'
import HomePage, { generateMetadata as HomePageMD, HomePageProps } from '../page'

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
  return HomePage(props)
}

export default LocalizedPage
