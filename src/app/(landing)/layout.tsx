import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import ModalContextProvider from '@/contexts/ModalContext'
import { DEFAULT_LANGUAGE, getDictionary } from '@/dictionaries/dictionaries'
import { AsyncMetadataFunction, DefaultLayoutParams, Layout } from '@/types/next'
import { suffix } from '@/utilities/suffixPath'
import { Inter } from 'next/font/google'
import './../globals.css'

const font = Inter({ subsets: ['latin'] })

type LandingLayoutProps = DefaultLayoutParams & {}

export const generateMetadata: AsyncMetadataFunction<LandingLayoutProps> = async ({
  params: { lang = DEFAULT_LANGUAGE } = { lang: DEFAULT_LANGUAGE },
}) => {
  const dictionary = getDictionary(lang)

  return {
    title: `${dictionary.name} | Resume`,
    description: dictionary.description,
    creator: dictionary.name,
    generator: 'Next.js',
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL || ''),
    icons: `${suffix}/favicon.ico`,
    keywords: dictionary.keywords?.replaceAll(' ', '').split(','),
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

const LandingLayout: Layout<LandingLayoutProps> = ({ children }) => {
  return (
    <html className={`${font.className} scroll-smooth h-screen`} lang='en'>
      <body className='min-h-full flex'>
        <ModalContextProvider>
          <div className='max-w-screen-lg mx-auto lg:my-8 shadow-2xl bg-white border border-gray-200 print:border-transparent text-neutral-900 rounded overflow-hidden grow flex flex-col'>
            <Header lang='en' langSwitch downloadLink />
            <main className='grow'>{children}</main>
            <Footer lang='en' />
          </div>
        </ModalContextProvider>
      </body>
    </html>
  )
}

export default LandingLayout
