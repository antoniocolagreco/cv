'use client'
import { Page, PageProps } from '@/types/next'
import { useContext } from 'react'
import Avatar from '../components/Avatar'
import Contacts from '../components/Contacts/Contacts'
import TopBackgroundCurve from '../components/Decorations/TopBackgroundCurve'
import Languages from '../components/Languages/Languages'
import Skills from '../components/Skills/Skills'
import { LocaleContext } from '../context/Locale'

type Props = PageProps & {}

const AppPage: Page<Props> = (props) => {
  const locale = useContext(LocaleContext).locale
  return (
    <div className='max-w-screen-lg mx-auto lg:my-8 shadow-2xl bg-white border border-gray-200 text-neutral-900 relative'>
      <TopBackgroundCurve
        className='absolute top-0 left-0 right-0 pointer-events-none'
        path_1_className='fill-amber-500'
        path_2_className='fill-sky-600'
        height='200px'
        width='100%'
      />
      <header className='gap-8 px-4 py-8 sm:px-8 mt-8 grid grid-cols-[auto] sm:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] sm:justify-items-stretch'>
        <Avatar className='self-start justify-self-start hidden sm:block' />
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl sm:text-4xl text-sky-600'>{locale.name}</h1>
          <h2 className='text-xl sm:text-2xl text-sky-700 font-bold'>{locale.job_title}</h2>
          <div>
            <Avatar className='float-left mr-4 mb-2 block sm:hidden' />
            <p className='text'>{locale.description}</p>
          </div>
        </div>
        <Contacts className='col-span-1 sm:col-span-2 lg:col-span-1' />
      </header>
      <main className='flex gap-8 px-4 py-8 sm:px-8 items-start relativ'>
        <Skills />
        <Languages />
      </main>
    </div>
  )
}

export default AppPage

