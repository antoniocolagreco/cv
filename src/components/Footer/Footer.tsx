import BottomBackgroundCurve from '@/components/Decorations/BottomBackgroundCurve'
import FooterInfo from '@/components/FooterInfo/FooterInfo'
import PrivacyLinks from '@/components/PrivacyLinks/PrivacyLinks'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import { FC, HTMLAttributes } from 'react'
import PrivacyAuthorization from '../PrivacyAuthorization/PrivacyAuthorization'

type FooterProps = HTMLAttributes<HTMLDivElement> & { lang: string }

const Footer: FC<FooterProps> = (props) => {
  const { lang, children, className = '', ...otherProps } = props

  return (
    <footer className={`relative  text-white ${className}`} {...otherProps}>
      <BottomBackgroundCurve
        className='mt-8'
        secondaryClassName='fill-amber-500'
        mainClassName=''
        height='150px'
        width='100%'
      />

      <div className='relative text-sm sm:text-base bg-gradient-to-b from-sky-700 to-sky-800 px-4 pb-4 pt-0 sm:px-8 flex flex-col gap-8'>
        <div className='flex flex-wrap gap-4 justify-between items-end '>
          <FooterInfo lang={lang} />
          <PrivacyLinks className='flex items-start' lang={lang} />
          <ScrollToTop lang={lang} />
        </div>
        <PrivacyAuthorization lang={lang} />
      </div>
    </footer>
  )
}

export default Footer
