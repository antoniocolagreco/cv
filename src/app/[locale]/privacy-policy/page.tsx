import { AsyncPage, DynamicMetadata, PageProps } from '@/types/next'
import PrivacyPolicy from '../../../components/PrivacyPolicy/PrivacyPolicy'
import Dictionary from '../../../types/locale'
import { suffixPath } from '../../../utilities/suffixPath'

type PrivacyPolicyPageProps = PageProps & {}

export const generateMetadata: DynamicMetadata<PrivacyPolicyPageProps> = async (props) => {
  const {
    params: { locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE },
    searchParams,
  } = props

  const data = await import(`/public/locales/${locale}.json`)
  const dictionary: Dictionary = JSON.parse(JSON.stringify(data))

  return {
    title: `${dictionary.name} | ${dictionary.privacy.title}`,
    description: dictionary.privacy.description,
    creator: dictionary.name,
    generator: 'Next.js',
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL || ''),
    icons: `${suffixPath}/favicon.ico`,
    keywords: ['Anonio', 'Colagreco', dictionary.privacy.title],
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

const PrivacyPolicyPage: AsyncPage<PrivacyPolicyPageProps> = async (props) => {
  const {
    params: { locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE },
    searchParams,
  } = props

  const data = await import(`/public/locales/${locale}.json`)
  const dictionary: Dictionary = JSON.parse(JSON.stringify(data))

  return <PrivacyPolicy dictionary={dictionary} />
}

export default PrivacyPolicyPage
