import TopBackgroundCurve from '@/components/Decorations/TopBackgroundCurve'
import DownloadLink from '@/components/DownloadLink/DownloadLink'
import HomeLink from '@/components/HomeLink/HomeLink'
import LanguageChanger from '@/components/LanguageChanger/LanguageChanger'
import { getDictionary } from '@/dictionaries/dictionaries'
import { FC, HTMLAttributes } from 'react'

type HeaderProps = HTMLAttributes<HTMLElement> & {
  lang: string
  homeLink?: boolean
  downloadLink?: boolean
  langSwitch?: boolean
}

const Header: FC<HeaderProps> = (props) => {
  const {
    langSwitch = false,
    downloadLink = false,
    homeLink = false,
    lang,
    children,
    className = '',
    ...otherProps
  } = props

  const dictionary = getDictionary(lang)

  return (
    <header className={`relative px-4 sm:px-8 py-4 flex justify-end gap-4 ${className}`} {...otherProps} id='top'>
      <TopBackgroundCurve
        className='absolute top-0 left-0 right-0'
        secondaryClassName='fill-amber-500'
        mainClassName=''
        height='200px'
        width='100%'
      />
      {downloadLink && (
        <DownloadLink
          href={`/download/${dictionary.download_file_name}`}
          download={dictionary.download_file_name}
          target='_blank'
          prefetch={false}
        >
          {dictionary.download_pdf}
        </DownloadLink>
      )}
      {homeLink && <HomeLink href={`/${lang}`} />}
      {langSwitch && <LanguageChanger value={lang} className='relative' />}
    </header>
  )
}

export default Header
