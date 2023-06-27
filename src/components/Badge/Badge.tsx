import { FC, HTMLAttributes } from 'react'

type BadgeProps = HTMLAttributes<HTMLDivElement> & {}

const Badge: FC<BadgeProps> = (props) => {
  const { children, className = '', ...otherProps } = props
  return (
    <div
      className={`bg-white rounded-xl inline-flex w-12 h-12 items-center justify-center mr-4 ${className}`}
      {...otherProps}
    >
      {children}
    </div>
  )
}

export default Badge
