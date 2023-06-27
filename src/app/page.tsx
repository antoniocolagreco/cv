'use client'
import { Page, PageProps } from '@/types/next'
import { useContext } from 'react'
import Avatar from '../components/Avatar'
import Contacts from '../components/Contacts/Contacts'
import { LocaleContext } from '../context/Locale'

type Props = PageProps & {}

const AppPage: Page<Props> = (props) => {
  const locale = useContext(LocaleContext).locale
  return (
    <div className='max-w-screen-lg mx-auto lg:my-8 shadow-2xl bg-white border border-gray-200'>
      <header className='flex gap-8 p-8 text-neutral-900 items-start'>
        <div className='rounded-2xl border-4 border-sky-600 shrink-0'>
          <Avatar className='rounded-xl m-1' width={120} />
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl text-sky-600'>{locale.name}</h1>
          <h2 className='text-2xl text-sky-800 font-bold'>{locale.job_title}</h2>
          <p className='text'>{locale.description}</p>
        </div>
        <Contacts />
      </header>
    </div>
  )
}

export default AppPage

