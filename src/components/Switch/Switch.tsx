'use client'
import { FC, HTMLAttributes, ReactNode } from 'react';

export type BasicSwitchOption = string | number
export type DecoratedSwitchOption = { value: string | number; decoration: ReactNode }
export type SwitchOption = BasicSwitchOption | DecoratedSwitchOption

export type SwitchProps = HTMLAttributes<HTMLElement> & {
  value: string | number
  onChange?: ((val: string | number) => {} | void) | undefined
  options: SwitchOption[] | undefined
}

const Switch: FC<SwitchProps> = (props) => {
  const { value, onChange, options: _options, children, className = '', ...otherProps } = props

  if (!_options || _options.length === 0) return

  const options: DecoratedSwitchOption[] = []

  for (let _option of _options) {
    switch (typeof _option) {
      case 'string':
        options.push({ value: _option, decoration: _option })
        break
      case 'number':
        options.push({ value: _option, decoration: _option })
        break
      default:
        options.push(_option)
        break
    }
  }

  const buttonClickHandler = (buttonValue: string | number) => {
    if (onChange) onChange(buttonValue)
  }

  return (
    <div className={`${className}`} {...otherProps}>
      <div className='relative p-1 bg-white rounded-full grid grid-cols-2 grid-rows-1 gap-1'>
        {options.map((option) => (
          <button
            type='button'
            key={option.value}
            className={`relative transition-all hover:scale-105 active:scale-95 group ${
              value === option.value ? 'text-white' : 'text-sky-700'
            }`}
            onClick={() => buttonClickHandler(option.value)}
          >
            <div
              className={`absolute duration-300 transition-all rounded-full w-10 h-10 opacity-0 bg-amber-600 ${
                value === option.value ? 'opacity-100' : 'group-hover:opacity-30'
              }`}
            />
            <div className='relative rounded-full w-10 h-10 flex flex-col items-center justify-center font-medium text-lg'>
              {option.decoration}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Switch
