import BottomBackgroundCurve from '@/components/Decorations/BottomBackgroundCurve'
import FooterInfo from '@/components/FooterInfo/FooterInfo'
import PrivacyLinks from '@/components/PrivacyLinks/PrivacyLinks'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import { FC, HTMLAttributes } from 'react'

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

      <div className='relative text-sm sm:text-base bg-gradient-to-b from-sky-700 to-sky-800 flex flex-wrap justify-between px-4 pb-4 pt-0 sm:px-8 gap-4 items-end'>
        <FooterInfo locale={lang} />
        <PrivacyLinks className='flex items-start' locale={lang} />
        <ScrollToTop locale={lang} />
      </div>
    </footer>
  )
}

export default Footer
