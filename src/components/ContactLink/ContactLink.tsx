import { AnchorHTMLAttributes, FC } from 'react'

type ContactLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {}

const ContactLink: FC<ContactLinkProps> = (props) => {
  const { children, href, className = '', ...otherProps } = props
  return (
    <a
      href={href}
      className={`group flex items-center transition-all fill-sky-600 hover:fill-amber-600 text-sky-50 hover:text-amber-300 text-sm sm:text-base ${className}`}
      {...otherProps}
    >
      {children}
    </a>
  )
}

export default ContactLink

