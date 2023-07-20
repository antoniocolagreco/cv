import CookiePolicy from '@/components/CookiePolicy/CookiePolicy'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, getDictionary } from '@/dictionaries/dictionaries'
import { DefaultPageProps, MetadataFunction, NextPage } from '@/types/next'
import { suffix } from '@/utilities/suffixPath'

type CokkiePolicyPageProps = DefaultPageProps & { params: { lang: string } }

export const generateMetadata: MetadataFunction<CokkiePolicyPageProps> = (props) => {
  const {
    params: { lang = DEFAULT_LANGUAGE },
  } = props

  const dictionary = getDictionary(lang)

  return {
    title: `${dictionary.name} | ${dictionary.cookie_policy.title}`,
    description: dictionary.cookie_policy.description,
    creator: dictionary.name,
    generator: 'Next.js',
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL || ''),
    icons: `${suffix}/favicon.ico`,
    keywords: ['Anonio', 'Colagreco', dictionary.cookie_policy.title],
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

const CokkiePolicyPage: NextPage<CokkiePolicyPageProps> = (props) => {
  const {
    params: { lang = DEFAULT_LANGUAGE },
    searchParams,
  } = props

  const dictionary = getDictionary(lang)

  return <CookiePolicy dictionary={dictionary} />
}

export default CokkiePolicyPage
