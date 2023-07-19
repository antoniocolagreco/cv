'use client'
import { Inter } from 'next/font/google'
import { usePathname, useRouter } from 'next/navigation'
import { FC, HTMLAttributes, useEffect } from 'react'
import ModalContextProvider from '../../contexts/ModalContext'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../../dictionaries/dictionaries'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './../../app/[locale]/globals.css'

type LayoutProviderProps = HTMLAttributes<HTMLDivElement> & {}

const font = Inter({ subsets: ['latin'] })

const LayoutProvider: FC<LayoutProviderProps> = (props) => {
  const { children = '', className, ...otherProps } = props
  const pathname = usePathname()
  const router = useRouter()

  const pathsToAvoid = [
    '/en',
    '/en/cookie-policy',
    '/en/privacy-policy',
    '/it',
    '/it/cookie-policy',
    '/it/privacy-policy',
  ]
  // console.log(`LayoutProvider" ${pathname}`)

  useEffect(() => {
    if (pathname === '/') {
      const browserLanguage = navigator.language.split('-')[0]
      const language = SUPPORTED_LANGUAGES.includes(browserLanguage) ? browserLanguage : DEFAULT_LANGUAGE
      router.replace(language)
    }
  }, [pathname, router])

  if (pathsToAvoid.some((p) => p == pathname)) {
    return <>{children}</>
  } else {
    return (
      <html className={`${font.className} scroll-smooth h-screen`} lang={DEFAULT_LANGUAGE}>
        <body className='min-h-full flex'>
          <ModalContextProvider>
            <div className='max-w-screen-lg mx-auto lg:my-8 shadow-2xl bg-white border border-gray-200 print:border-transparent text-neutral-900 rounded overflow-hidden grow flex flex-col'>
              <Header lang={DEFAULT_LANGUAGE} />
              <main className='grow'>{children}</main>
              <Footer lang={DEFAULT_LANGUAGE} />
            </div>
          </ModalContextProvider>
        </body>
      </html>
    )
  }
}

export default LayoutProvider
