import PrivacyPolicy from '@/components/PrivacyPolicy/PrivacyPolicy'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, getDictionary } from '@/dictionaries/dictionaries'
import { AsyncMetadataFunction, DefaultPageProps, NextPage } from '@/types/next'

type PrivacyPolicyPageProps = DefaultPageProps & { params: { locale: string } }

export const generateMetadata: AsyncMetadataFunction<PrivacyPolicyPageProps> = async (props) => {
  const {
    params: { locale = DEFAULT_LANGUAGE },
    searchParams,
  } = props

  const dictionary = getDictionary(locale)

  return {
    title: `${dictionary.name} | ${dictionary.privacy.title}`,
    description: dictionary.privacy.description,
    creator: dictionary.name,
    generator: 'Next.js',
    metadataBase: new URL(process.env.PUBLIC_URL || ''),
    icons: `/favicon.ico`,
    keywords: ['Anonio', 'Colagreco', dictionary.privacy.title],
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

const PrivacyPolicyPage: NextPage<PrivacyPolicyPageProps> = (props) => {
  const {
    params: { locale = DEFAULT_LANGUAGE },
    searchParams,
  } = props

  const dictionary = getDictionary(locale)

  return <PrivacyPolicy dictionary={dictionary} />
}

export default PrivacyPolicyPage
