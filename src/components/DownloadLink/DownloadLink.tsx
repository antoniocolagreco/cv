import Link, { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, FC, HTMLAttributes } from 'react'

type DownloadLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps & { containerProps?: HTMLAttributes<HTMLElement> }

const DownloadLink: FC<DownloadLinkProps> = (props) => {
  const { containerProps, children, className = '', ...otherProps } = props
  return (
    <div className={`relative p-1 bg-white rounded-full`} {...containerProps}>
      <Link
        className={`relative rounded-full h-10 px-4 flex flex-col items-center justify-center font-medium text-lg transition-all bg-amber-600 text-white hover:bg-amber-500 active:scale-95 ${className}`}
        {...otherProps}
      >
        {children}
      </Link>
    </div>
  )
}

export default DownloadLink
