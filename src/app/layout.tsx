import { Inter } from 'next/font/google'
import ModalContextProvider from '../contexts/ModalContext'
import { Layout } from '../types/next'
import './globals.css'

const font = Inter({ subsets: ['latin'] })

const RootLayout: Layout = async (props) => {
  const { children } = props

  return (
    <html className={`${font.className} scroll-smooth`} lang='en'>
      <body>
        <div className='max-w-screen-lg mx-auto lg:my-8 shadow-2xl bg-white border border-gray-200 text-neutral-900 rounded overflow-hidden min-h-screen'>
          <ModalContextProvider>{children}</ModalContextProvider>
        </div>
      </body>
    </html>
  )
}

export default RootLayout

