import { FC, HTMLAttributes } from 'react'
import { getDictionary } from '../../dictionaries/dictionaries'

type PrivacyAuthorizationProps = HTMLAttributes<HTMLDivElement> & { lang: string }

const PrivacyAuthorization: FC<PrivacyAuthorizationProps> = (props) => {
  const { lang, children = '', className, ...otherProps } = props

  const dictionary = getDictionary(lang)

  return (
    <div className={`text-sm text-sky-100 text-justify ${className}`} {...otherProps}>
      {dictionary.privacy_authorization}
    </div>
  )
}

export default PrivacyAuthorization
