import HomeIcon from '@/icons/HomeIcon'
import Link, { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, FC, HTMLAttributes } from 'react'

type HomeLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps & { containerProps?: HTMLAttributes<HTMLElement> }

const HomeLink: FC<HomeLinkProps> = (props) => {
  const { containerProps, children, className, ...otherProps } = props
  return (
    <div className={`relative p-1 bg-white rounded-full`} {...containerProps}>
      <Link
        className={`relative rounded-full h-10 w-10 flex items-center justify-center transition-all bg-amber-600 fill-white hover:bg-amber-500 active:scale-95 ${className}`}
        {...otherProps}
      >
        <HomeIcon width={30} height={30} />
      </Link>
    </div>
  )
}

export default HomeLink
