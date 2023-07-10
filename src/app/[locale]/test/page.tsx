'use client'
import { ModalContext } from '@/contexts/ModalContext'
import Dictionary from '@/types/locale'
import { Page, PageProps } from '@/types/next'
import { useContext, useEffect } from 'react'
import Button from '../../../components/Button/Button'
import PrivacyPolicy from '../../../components/PrivacyPolicy/PrivacyPolicy'
import CheckIcon from '../../../icons/CheckIcon'

type TestPageProps = PageProps & {}

const TestPage: Page<TestPageProps> = (props) => {
  const {
    params: { locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE },
    searchParams,
  } = props
  const modalContext = useContext(ModalContext)

  useEffect(() => {
    fetch(`http://localhost:3000/locales/${locale}.json`).then((response) => {
      response.json().then((data) => {
        const dictionary: Dictionary = data
        modalContext.show({
          main: <PrivacyPolicy dictionary={dictionary} />,
          footer: (
            <Button type='button' className='bg-green-700 hover:bg-green-600 rounded-xl fill-white text-white'>
              <CheckIcon />
              OK
            </Button>
          ),
        })
      })
    })
  }, [])

  return <div>TestPage</div>
}

export default TestPage
