'use client'
import { Page, PageProps } from '@/types/next'
import { useRouter } from 'next/navigation'
import { useLayoutEffect } from 'react'
import { getBrowserLanguage } from '../utilities/languageUtilis'
import LocalizedPage from './[locale]/page'

type Props = PageProps & {}

const AppMainPage: Page<Props> = (props) => {
  const router = useRouter()
  const userLanguage = getBrowserLanguage()
  const defaultLanguage = process.env.NEXT_PUBLIC_DEFAULT_LOCALE
  const supportedLanguage = process.env.NEXT_PUBLIC_LOCALES?.split(',')

  if (!defaultLanguage) throw new Error('Cannot find the default language')

  useLayoutEffect(() => {
    if (userLanguage && supportedLanguage?.includes(userLanguage)) {
      router.replace(`/${userLanguage}`)
    }
  }, [userLanguage, supportedLanguage, router])

  return LocalizedPage({ params: { locale: defaultLanguage }, searchParams: {} })
}

export default AppMainPage

