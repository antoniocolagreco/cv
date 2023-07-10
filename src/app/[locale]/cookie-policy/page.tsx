import { DynamicMetadata, Page, PageProps } from '@/types/next'
import CookiePolicy from '../../../components/CookiePolicy/CookiePolicy'
import Dictionary from '../../../types/locale'
import { suffixPath } from '../../../utilities/suffixPath'

type CokkiePolicyPageProps = PageProps & {}

export const generateMetadata: DynamicMetadata<CokkiePolicyPageProps> = async (props) => {
  const {
    params: { locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE },
    searchParams,
  } = props

  const data = await import(`/public/locales/${locale}.json`)
  const dictionary: Dictionary = JSON.parse(JSON.stringify(data))

  return {
    title: `${dictionary.name} | ${dictionary.cookie_policy.title}`,
    description: dictionary.cookie_policy.description,
    creator: dictionary.name,
    generator: 'Next.js',
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL || ''),
    icons: `${suffixPath}/favicon.ico`,
    keywords: ['Anonio', 'Colagreco', dictionary.cookie_policy.title],
    openGraph: {
      title: dictionary.name,
      description: dictionary.description,
      images: `${suffixPath}/images/${locale}/og.webp`,
      type: 'profile',
    },
    twitter: {
      title: dictionary.name,
      description: dictionary.description,
      images: `${suffixPath}/images/${locale}/og.webp`,
      card: 'summary_large_image',
    },
  }
}

const CokkiePolicyPage: Page<CokkiePolicyPageProps> = async (props) => {
  const {
    params: { locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE },
    searchParams,
  } = props

  const data = await import(`/public/locales/${locale}.json`)
  const dictionary: Dictionary = JSON.parse(JSON.stringify(data))

  return <CookiePolicy dictionary={dictionary} />
}

export default CokkiePolicyPage
