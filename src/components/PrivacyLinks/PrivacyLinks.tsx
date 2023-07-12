'use client'
import { FC, HTMLAttributes, MouseEvent, useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import CheckIcon from '../../icons/CheckIcon'
import Dictionary from '../../types/locale'
import Button from '../Button/Button'
import CookiePolicy from '../CookiePolicy/CookiePolicy'
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy'
import Underline from '../Underline/Underline'

type PrivacyLinksProps = HTMLAttributes<HTMLDivElement> & { dictionary: Dictionary }

const PrivacyLinks: FC<PrivacyLinksProps> = (props) => {
  const { dictionary, children, className = '', ...otherProps } = props
  const modalContext = useContext(ModalContext)
  const locale = dictionary.language

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
        <Underline>{dictionary.privacy.title}</Underline>
      </a>
      <a className='cursor-pointer' onClick={showCookieModal} href={`/${locale}/cookie-policy`}>
        <Underline>{dictionary.cookie_policy.title}</Underline>
      </a>
    </div>
  )
}

export default PrivacyLinks
