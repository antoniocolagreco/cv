'use client'
import { usePathname } from 'next/navigation'
import { FC, HTMLAttributes } from 'react'
import Dictionary from '../../types/locale'
import { suffixPath } from '../../utilities/suffixPath'
import TopBackgroundCurve from '../Decorations/TopBackgroundCurve'
import DownloadLink from '../DownloadLink/DownloadLink'
import HomeLink from '../HomeLink/HomeLink'
import LocaleChanger from '../LocaleChanger/LocaleChanger'

type HeaderProps = HTMLAttributes<HTMLElement> & { dictionary: Dictionary }

const Header: FC<HeaderProps> = async (props) => {
  const { dictionary, children, className = '', ...otherProps } = props
  const pathname = usePathname()
  const locale = dictionary.language

  const locales = process.env.NEXT_PUBLIC_LOCALES?.split(',').map((locale) => {
    return { value: locale, node: locale, href: `${suffixPath}/${locale}` }
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
      {!pathname.includes('cookie-policy') && !pathname.includes('privacy-policy') && (
        <DownloadLink
          href={`${suffixPath}/download/${locale}/antonio-colagreco-resume.pdf`}
          download='antonio-colagreco-resume.pdf'
          target='_blank'
          prefetch={false}
        >
          {dictionary.download_pdf}
        </DownloadLink>
      )}
      {(pathname.includes('cookie-policy') || pathname.includes('privacy-policy')) && (
        <HomeLink href={`${suffixPath}/${locale}`} />
      )}
      <LocaleChanger value={locale} options={locales} className='relative' />
    </header>
  )
}

export default Header
