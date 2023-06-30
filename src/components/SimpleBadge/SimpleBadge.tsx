import { FC, HTMLAttributes } from 'react'

type SimpleBadgeProps = HTMLAttributes<HTMLDivElement> & {}

const SimpleBadge: FC<SimpleBadgeProps> = (props) => {
  const { children, className = '', ...otherProps } = props
  return (
    <div className={`rounded-xl inline-flex w-12 h-12 items-center justify-center mr-4 ${className}`} {...otherProps}>
      {children}
    </div>
  )
}

export default SimpleBadge
