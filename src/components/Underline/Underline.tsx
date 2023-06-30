import { FC, HTMLAttributes } from 'react'

type UnderlineProps = HTMLAttributes<HTMLSpanElement> & {}

const Underline: FC<UnderlineProps> = (props) => {
  const { children, className, ...otherProps } = props
  return (
    <span
      className={`relative after:transition-all after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:border-b-2 after:border-current group-hover:after:w-full hover:after:w-full ${className}`}
      {...otherProps}
    >
      {children}
    </span>
  )
}

export default Underline
