'use client'
import * as en from '@/locales/en.json'
import * as it from '@/locales/it.json'
import { FC, ReactNode, createContext, useState } from 'react'

export const locales = ['en', 'it']
const dictionaries = { en, it }

interface LocaleInterface {
  locale: typeof en
  setLocale: (locale: string) => void
}
export const LocaleContext = createContext<LocaleInterface>({
  locale: en,
  setLocale: (locale: string) => {},
})

type LocaleProps = {
  children: ReactNode
}

const LocaleProvider: FC<LocaleProps> = (props) => {
  const [selectedLocale, setSelectedLocale] = useState(en)

  const setLocale = (locale: string) => {
    if (locales.includes(locale)) {
      //@ts-ignore
      setSelectedLocale(dictionaries[locale])
    }
  }

  return <LocaleContext.Provider value={{ locale: selectedLocale, setLocale }}>{props.children}</LocaleContext.Provider>
}

export default LocaleProvider
