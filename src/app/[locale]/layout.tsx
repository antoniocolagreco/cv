import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import ModalContextProvider from '@/contexts/ModalContext'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, getDictionary } from '@/dictionaries/dictionaries'
import { AsyncMetadataFunction, DefaultLayoutParams, Layout } from '@/types/next'
import { Inter } from 'next/font/google'
import './globals.css'

const font = Inter({ subsets: ['latin'] })

type RootLayoutProps = DefaultLayoutParams & { params?: { locale?: string } }

export const generateMetadata: AsyncMetadataFunction<RootLayoutProps> = async ({
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

export const generateStaticParams = (): { locale: string }[] => {
  const locales = SUPPORTED_LANGUAGES || []
  return locales.map((locale) => {
    return { locale }
  })
}

const RootLayout: Layout<RootLayoutProps> = ({
  children,
  params: { locale = DEFAULT_LANGUAGE } = { locale: DEFAULT_LANGUAGE },
}) => {
  return (
    <html className={`${font.className} scroll-smooth h-screen`} lang={locale}>
      <body className='min-h-full flex'>
        <ModalContextProvider>
          <div className='max-w-screen-lg mx-auto lg:my-8 shadow-2xl bg-white border border-gray-200 print:border-transparent text-neutral-900 rounded overflow-hidden grow flex flex-col'>
            <Header lang={locale} />
            <main className='grow'>{children}</main>
            <Footer lang={locale} />
          </div>
        </ModalContextProvider>
      </body>
    </html>
  )
}

export default RootLayout
