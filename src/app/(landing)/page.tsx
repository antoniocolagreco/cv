'use client'
import { DefaultPageProps, NextPage } from '@/types/next'
import { usePathname, useRouter } from 'next/navigation'
import { useLayoutEffect } from 'react'
import HomePage from '../(localized)/[lang]/page'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../../dictionaries/dictionaries'
import { suffix } from '../../utilities/suffixPath'

type AppPageProps = DefaultPageProps & {}

const AppPage: NextPage<AppPageProps> = (props) => {
  const { params, searchParams } = props
  const pathname = usePathname()
  const router = useRouter()

  // console.log(`pathname: ${pathname}`)

  useLayoutEffect(() => {
    if (pathname === `${suffix}/`) {
      // console.log(`navigator.language: ${navigator.language}`)
      const browserLanguage = navigator.language.replace(`${suffix}`, '').split('-')[0]
      // console.log(`browserLanguage: ${browserLanguage}`)
      const newUrl = SUPPORTED_LANGUAGES.includes(browserLanguage) ? browserLanguage : DEFAULT_LANGUAGE
      // console.log(`newUrl: ${newUrl}`)
      router.replace(`/${newUrl}`)
    }
  }, [pathname, router])

  return <HomePage />
}

export default AppPage
