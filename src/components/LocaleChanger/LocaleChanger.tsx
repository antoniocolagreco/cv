'use client'
import Switch, { SwitchOption, SwitchProps } from '@/components/Switch/Switch'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

const cleanURL = (pathname: string, locales: SwitchOption[]) => {
  let cleanPathname = pathname
    .split('/')
    .filter((e) => e !== '' && !locales.some((e2) => e2.value === e))
    .join('/')

  if (cleanPathname.length > 0) cleanPathname = '/' + cleanPathname

  return cleanPathname
}

const LocaleChanger: FC<SwitchProps> = (props) => {
  const { options, value, ...otherProps } = props
  const pathname = usePathname()

  if (!options) return

  const localizedOptions: SwitchOption[] = options.map((option) => {
    return { ...option, href: `/${option.value}${cleanURL(pathname, options)}` }
  })

  return <Switch {...otherProps} options={localizedOptions} value={value} />
}

export default LocaleChanger
