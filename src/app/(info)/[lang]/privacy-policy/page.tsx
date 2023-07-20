import PrivacyPolicy from '@/components/PrivacyPolicy/PrivacyPolicy'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, getDictionary } from '@/dictionaries/dictionaries'
import { AsyncMetadataFunction, DefaultPageProps, NextPage } from '@/types/next'
import { suffix } from '@/utilities/suffixPath'

type PrivacyPolicyPageProps = DefaultPageProps & { params: { lang: string } }

export const generateMetadata: AsyncMetadataFunction<PrivacyPolicyPageProps> = async (props) => {
  const {
    params: { lang = DEFAULT_LANGUAGE },
    searchParams,
  } = props

  const dictionary = getDictionary(lang)

  return {
    title: `${dictionary.name} | ${dictionary.privacy.title}`,
    description: dictionary.privacy.description,
    creator: dictionary.name,
    generator: 'Next.js',
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL || ''),
    icons: `${suffix}/favicon.ico`,
    keywords: ['Anonio', 'Colagreco', dictionary.privacy.title],
    openGraph: {
      title: dictionary.name,
      description: dictionary.description,
      images: `${suffix}/images/og.webp`,
      type: 'profile',
    },
    twitter: {
      title: dictionary.name,
      description: dictionary.description,
      images: `${suffix}/images/og.webp`,
      card: 'summary_large_image',
    },
  }
}

export const generateStaticParams = (): { lang: string }[] => {
  const languages = SUPPORTED_LANGUAGES || []
  return languages.map((lang) => {
    return { lang }
  })
}

const PrivacyPolicyPage: NextPage<PrivacyPolicyPageProps> = (props) => {
  const {
    params: { lang = DEFAULT_LANGUAGE },
    searchParams,
  } = props

  const dictionary = getDictionary(lang)

  return <PrivacyPolicy dictionary={dictionary} />
}

export default PrivacyPolicyPage
