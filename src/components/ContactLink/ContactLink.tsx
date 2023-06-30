import Link, { LinkProps } from 'next/link'
import { FC } from 'react'

type ContactLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps & {
    children?: React.ReactNode
  } & React.RefAttributes<HTMLAnchorElement> & {}

const ContactLink: FC<ContactLinkProps> = (props) => {
  const { children, href, className = '', ...otherProps } = props
  return (
    <Link
      href={href}
      className={`group flex items-center transition-all fill-sky-600 hover:fill-amber-600 text-sky-50 hover:text-amber-300 text-sm sm:text-base ${className}`}
      {...otherProps}
    >
      {children}
    </Link>
  )
}

export default ContactLink
