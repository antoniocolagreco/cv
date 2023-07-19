'use client'
import Button from '@/components/Button/Button'
import CookiePolicy from '@/components/CookiePolicy/CookiePolicy'
import PrivacyPolicy from '@/components/PrivacyPolicy/PrivacyPolicy'
import Underline from '@/components/Underline/Underline'
import { ModalContext } from '@/contexts/ModalContext'
import { getDictionary } from '@/dictionaries/dictionaries'
import CheckIcon from '@/icons/CheckIcon'
import { FC, HTMLAttributes, MouseEvent, useContext } from 'react'

type PrivacyLinksProps = HTMLAttributes<HTMLDivElement> & { locale: string }

const PrivacyLinks: FC<PrivacyLinksProps> = (props) => {
  const { locale, children, className = '', ...otherProps } = props
  const modalContext = useContext(ModalContext)
  const dictionary = getDictionary(locale)

  const showPrivacyModal = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    modalContext.show({
      main: <PrivacyPolicy dictionary={dictionary} />,
      footer: (
        <Button
          type='button'
          className='bg-green-700 hover:bg-green-600 rounded-xl fill-white text-white'
          onClick={() => {
            modalContext.hide()
          }}
        >
          <CheckIcon />
          OK
        </Button>
      ),
    })
  }
  const showCookieModal = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    modalContext.show({
      main: <CookiePolicy dictionary={dictionary} />,
      footer: (
        <Button
          type='button'
          className='bg-green-700 hover:bg-green-600 rounded-xl fill-white text-white'
          onClick={modalContext.hide}
        >
          <CheckIcon />
          OK
        </Button>
      ),
      closeIcon: true,
    })
  }

  return (
    <div className={`flex flex-col items-start gap-1 ${className}`} {...otherProps}>
      <a className='cursor-pointer' onClick={showPrivacyModal} href={`/${locale}/privacy-policy`}>
        <Underline>{dictionary.privacy?.title}</Underline>
      </a>
      <a className='cursor-pointer' onClick={showCookieModal} href={`/${locale}/cookie-policy`}>
        <Underline>{dictionary.cookie_policy?.title}</Underline>
      </a>
    </div>
  )
}

export default PrivacyLinks
