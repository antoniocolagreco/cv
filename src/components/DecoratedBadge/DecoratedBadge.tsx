import { FC, HTMLAttributes } from 'react'

type DecoratedBadgeProps = HTMLAttributes<HTMLDivElement> & {}

const DecoratedBadge: FC<DecoratedBadgeProps> = (props) => {
  const { children, className = '', ...otherProps } = props
  return (
    <div className={`rounded-xl inline-flex w-12 h-12 items-center justify-center mr-4 ${className}`} {...otherProps}>
      {children}
    </div>
  )
}

export default DecoratedBadge
