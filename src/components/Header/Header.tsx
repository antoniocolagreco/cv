import { FC, HTMLAttributes } from 'react'

type HeaderProps = HTMLAttributes<HTMLElement> & {}

const Header: FC<HeaderProps> = (props) => {
  const { children, className = '', ...otherProps } = props
  return (
    <header className={` ${className}`} {...otherProps}>
      {children}
    </header>
  )
}

export default Header
