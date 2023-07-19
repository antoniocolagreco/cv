import { FC, HTMLAttributes, ReactNode } from 'react'

type UnderlineProps = HTMLAttributes<HTMLSpanElement> & {}

const Underline: FC<UnderlineProps> = (props) => {
  const { children, className = '', ...otherProps } = props

  const nodeChildren: ReactNode =
    typeof children === 'string' &&
    children
      .toString()
      .split('/')
      .map((el, index) => <span key={index}>{index === 0 ? el : `/${el}`}</span>)

  return (
    <span
      className={`relative after:transition-all after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:border-b-2 after:border-current group-hover:after:w-full hover:after:w-full inline-flex flex-wrap ${className}`}
      {...otherProps}
    >
      {nodeChildren}
    </span>
  )
}

export default Underline

