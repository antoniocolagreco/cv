'use client'
import TopBackgroundCurve from '@/components/Decorations/TopBackgroundCurve'
import DownloadLink from '@/components/DownloadLink/DownloadLink'
import HomeLink from '@/components/HomeLink/HomeLink'
import LocaleChanger from '@/components/LocaleChanger/LocaleChanger'
import { SUPPORTED_LANGUAGES, getDictionary } from '@/dictionaries/dictionaries'
import { usePathname } from 'next/navigation'
import { FC, HTMLAttributes } from 'react'

type HeaderProps = HTMLAttributes<HTMLElement> & { lang: string }

const Header: FC<HeaderProps> = (props) => {
  const { lang, children, className = '', ...otherProps } = props
  const pathname: string = usePathname()
  const dictionary = getDictionary(lang)

  const homePages = SUPPORTED_LANGUAGES.map((l) => `/${l}`)
  const locales = SUPPORTED_LANGUAGES.map((locale) => {
    return { value: locale, node: locale, href: `/${locale}` }
  })

  return (
    <header className={`relative px-4 sm:px-8 py-4 flex justify-end gap-4 ${className}`} {...otherProps} id='top'>
      <TopBackgroundCurve
        className='absolute top-0 left-0 right-0'
        secondaryClassName='fill-amber-500'
        mainClassName=''
        height='200px'
        width='100%'
      />
      {(homePages?.includes(pathname) || pathname === '/') && (
        <DownloadLink
          href={`/download/${dictionary.download_file_name}`}
          download={dictionary.download_file_name}
          target='_blank'
          prefetch={false}
        >
          {dictionary.download_pdf}
        </DownloadLink>
      )}
      {!homePages?.includes(pathname) && pathname !== '/' && <HomeLink href={`/${lang}`} />}
      {(homePages?.includes(pathname) ||
        (pathname && (pathname.includes('cookie-policy') || pathname.includes('privacy-policy'))) ||
        pathname === '/') && <LocaleChanger value={lang} options={locales} className='relative' />}
    </header>
  )
}

export default Header
