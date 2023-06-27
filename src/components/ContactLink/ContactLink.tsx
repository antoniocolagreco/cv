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
      className={`flex items-center transition fill-sky-900 hover:fill-amber-600  text-sky-50 hover:text-amber-300 ${className}`}
      {...otherProps}
    >
      {children}
    </Link>
  )
}

export default ContactLink
