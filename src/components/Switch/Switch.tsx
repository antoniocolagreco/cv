'use client'
import Link from 'next/link';
import { FC, HTMLAttributes, ReactNode } from 'react';

export type SwitchOption = { value: string; node: ReactNode; href?: string }

export type SwitchProps = Omit<HTMLAttributes<HTMLElement>, 'onChange'> & {
  value: string
  onChange?: ((value: string) => {} | void) | undefined
  options: SwitchOption[] | undefined
}

const Switch: FC<SwitchProps> = (props) => {
  const { value, onChange, options, children, className = '', ...otherProps } = props

  if (!options || options.length === 0) return

  const handleOnClick = (value: string) => {
    if (onChange) onChange(value)
  }

  return (
    <div
      className={`relative p-1 bg-white rounded-full grid grid-cols-2 grid-rows-1 gap-1 ${className}`}
      {...otherProps}
    >
      {options.map((option) => (
        <div
          key={option.value}
          className={`relative transition-all active:scale-95 group ${
            value === option.value ? 'text-white' : 'text-sky-700'
          }`}
        >
          <div
            className={`absolute duration-300 transition-all rounded-full w-10 h-10 opacity-0 bg-amber-600 ${
              value === option.value
                ? 'opacity-100 group-hover:bg-amber-500'
                : 'group-hover:bg-amber-500 group-hover:opacity-30'
            }`}
          />
          {option.href ? (
            <Link
              href={option.href}
              className='relative rounded-full w-10 h-10 flex flex-col items-center justify-center font-medium text-lg'
            >
              {option.node}
            </Link>
          ) : (
            <button
              type='button'
              className='relative rounded-full w-10 h-10 flex flex-col items-center justify-center font-medium text-lg'
              onClick={() => handleOnClick(option.value)}
            >
              {option.node}
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default Switch
