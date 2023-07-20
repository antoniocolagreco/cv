'use client'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import ModalContextProvider from '@/contexts/ModalContext'
import { ErrorPage } from '@/types/next'
import { Inter } from 'next/font/google'
import './../globals.css'

const font = Inter({ subsets: ['latin'] })

const GlobalError: ErrorPage = (props) => {
  const { error, reset } = props
  return (
    <html className={`${font.className} scroll-smooth h-screen`} lang='en'>
      <body className='min-h-full flex'>
        <ModalContextProvider>
          <div className='max-w-screen-lg mx-auto lg:my-8 shadow-2xl bg-white border border-gray-200 print:border-transparent text-neutral-900 rounded overflow-hidden grow flex flex-col'>
            <Header lang='en' homeLink />
            <main className='grow'>{error.message}</main>
            <Footer lang='en' />
          </div>
        </ModalContextProvider>
      </body>
    </html>
  )
}

export default GlobalError
