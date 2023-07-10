import { ButtonHTMLAttributes, FC } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {}

const Button: FC<ButtonProps> = (props) => {
  const { children, className = '', ...otherProps } = props
  return (
    <button
      className={`transition-all flex gap-2 px-4 items-center justify-center font-medium ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
