import { Inter } from 'next/font/google'
import { Layout } from '../types/next'
import './globals.css'

const font = Inter({ subsets: ['latin'] })

const RootLayout: Layout = async (props) => {
  const { children } = props

  return (
    <html className={font.className} lang='en'>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout

