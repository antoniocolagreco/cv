'use client'
import Underline from '@/components/Underline/Underline'
import { getDictionary } from '@/dictionaries/dictionaries'
import UpIcon from '@/icons/UpIcon'
import { FC, HTMLAttributes, useEffect, useRef } from 'react'

type ScrollToTopProps = HTMLAttributes<HTMLDivElement> & { lang: string }

const ScrollToTop: FC<ScrollToTopProps> = (props) => {
  const { lang, children, className = '', ...otherProps } = props
  let headerElementRef = useRef<HTMLElement | null>()
  const dictionary = getDictionary(lang)

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
