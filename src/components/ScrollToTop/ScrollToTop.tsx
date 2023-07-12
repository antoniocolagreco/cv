'use client'
import { FC, HTMLAttributes, useEffect, useRef } from 'react'
import UpIcon from '../../icons/UpIcon'
import Dictionary from '../../types/locale'
import Underline from '../Underline/Underline'

type ScrollToTopProps = HTMLAttributes<HTMLDivElement> & { dictionary: Dictionary }

const ScrollToTop: FC<ScrollToTopProps> = (props) => {
  const { dictionary, children, className = '', ...otherProps } = props
  let headerElementRef = useRef<HTMLElement | null>()

  useEffect(() => {
    headerElementRef.current = document.getElementById('top')
  })

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    headerElementRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`${className}`} {...otherProps}>
      <a className='cursor-pointer flex gap-2 items-center fill-white group' href='#' onClick={handleClick}>
        <div>
          <Underline>{dictionary.scroll_to_top}</Underline>
        </div>
        <UpIcon
          width={24}
          height={24}
          className='transition-all border-2 rounded-full border-amber-600 group-hover:border-white'
        />
      </a>
    </div>
  )
}

export default ScrollToTop
