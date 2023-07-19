import { AsyncMetadataFunction, Layout } from '@/types/next'
import LayoutProvider from '../components/LayoutProvider/LayoutProvider'
import { DEFAULT_LANGUAGE, getDictionary } from '../dictionaries/dictionaries'

export const generateMetadata: AsyncMetadataFunction = async ({
  params: { locale = DEFAULT_LANGUAGE } = { locale: DEFAULT_LANGUAGE },
}) => {
  const dictionary = getDictionary(locale)

  return {
    title: `${dictionary.name} | Resume`,
    description: dictionary.description,
    creator: dictionary.name,
    generator: 'Next.js',
    metadataBase: new URL(process.env.PUBLIC_URL || ''),
    icons: `/favicon.ico`,
    keywords: dictionary.keywords?.replaceAll(' ', '').split(','),
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

const AppLayout: Layout = (props) => {
  const { children, params } = props

  return <LayoutProvider>{children}</LayoutProvider>
}

export default AppLayout
