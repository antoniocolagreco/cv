import CookiePolicy from '@/components/CookiePolicy/CookiePolicy'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, getDictionary } from '@/dictionaries/dictionaries'
import { DefaultPageProps, MetadataFunction, NextPage } from '@/types/next'

type CokkiePolicyPageProps = DefaultPageProps & { params: { locale: string } }

export const generateMetadata: MetadataFunction<CokkiePolicyPageProps> = (props) => {
  const {
    params: { locale = DEFAULT_LANGUAGE },
  } = props

  const dictionary = getDictionary(locale)

  return {
    title: `${dictionary.name} | ${dictionary.cookie_policy.title}`,
    description: dictionary.cookie_policy.description,
    creator: dictionary.name,
    generator: 'Next.js',
    metadataBase: new URL(process.env.PUBLIC_URL || ''),
    icons: `/favicon.ico`,
    keywords: ['Anonio', 'Colagreco', dictionary.cookie_policy.title],
    openGraph: {
      title: dictionary.name,
      description: dictionary.description,
      images: `/images/${locale}/og.webp`,
      type: 'profile',
    },
    twitter: {
      title: dictionary.name,
      description: dictionary.description,
      images: `/images/${locale}/og.webp`,
      card: 'summary_large_image',
    },
  }
}

export const generateStaticParams = (): { locale: string }[] => {
  const locales = SUPPORTED_LANGUAGES || []
  return locales.map((locale) => {
    return { locale }
  })
}

const CokkiePolicyPage: NextPage<CokkiePolicyPageProps> = (props) => {
  const {
    params: { locale = DEFAULT_LANGUAGE },
    searchParams,
  } = props

  const dictionary = getDictionary(locale)

  return <CookiePolicy dictionary={dictionary} />
}

export default CokkiePolicyPage
