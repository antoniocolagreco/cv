'use client'
import Switch, { SwitchOption, SwitchProps } from '@/components/Switch/Switch'
import { suffix } from '@/utilities/suffixPath'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { SUPPORTED_LANGUAGES } from '../../dictionaries/dictionaries'

const cleanURL = (pathname: string, locales: SwitchOption[]) => {
  let cleanPathname = pathname
    .replace(suffix, '')
    .split('/')
    .filter((e) => e !== '' && !locales.some((e2) => e2.value === e))
    .join('/')

  if (cleanPathname.length > 0) cleanPathname = '/' + cleanPathname

  return cleanPathname
}

const LanguageChanger: FC<Omit<SwitchProps, 'options'>> = (props) => {
  const { value, ...otherProps } = props
  const pathname = usePathname()

  const options = SUPPORTED_LANGUAGES.map((lang) => {
    return { value: lang, node: lang, href: `/${lang}` }
  })
  const localizedOptions: SwitchOption[] = options.map((option) => {
    return { ...option, href: `/${option.value}${cleanURL(pathname, options)}` }
  })

  return <Switch {...otherProps} options={localizedOptions} value={value} />
}

export default LanguageChanger
