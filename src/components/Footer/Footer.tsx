import { FC, HTMLAttributes } from 'react'
import Dictionary from '../../types/locale'
import { getYear } from '../../utilities/dates'
import BottomBackgroundCurve from '../Decorations/BottomBackgroundCurve'
import PrivacyLinks from '../PrivacyLinks/PrivacyLinks'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

type FooterProps = HTMLAttributes<HTMLDivElement> & { dictionary: Dictionary }

const Footer: FC<FooterProps> = async (props) => {
  const { dictionary, children, className = '', ...otherProps } = props

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
        <div className='flex flex-col gap-1'>
          <div>{`Antonio Colagreco ${getYear(dictionary.language)}`}</div>
          <div>{`P.IVA 02349530689`}</div>
        </div>
        <PrivacyLinks className='flex items-start' dictionary={dictionary} />
        <ScrollToTop dictionary={dictionary} />
      </div>
    </footer>
  )
}

export default Footer
