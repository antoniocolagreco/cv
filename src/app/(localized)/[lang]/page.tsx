import Avatar from '@/components/Avatar/Avatar'
import Contacts from '@/components/Contacts/Contacts'
import WorkBackgroundCurve from '@/components/Decorations/ProjectsBackgroundCurve'
import PastBackgroundCurve from '@/components/Decorations/WorkBackgroundCurve'
import Education from '@/components/Education/Education'
import Languages from '@/components/Languages/Languages'
import Projects from '@/components/Projects/Projects'
import Skills from '@/components/Skills/Skills'
import WorkExperience from '@/components/WorkExperience/WorkExperience'
import { DEFAULT_LANGUAGE, getDictionary } from '@/dictionaries/dictionaries'
import { DefaultPageProps, NextPage } from '@/types/next'
import { Fragment } from 'react'

export type HomePageProps = DefaultPageProps & { params?: { lang?: string } }

const HomePage: NextPage<HomePageProps> = (props) => {
  const { params: { lang = DEFAULT_LANGUAGE } = { lang: DEFAULT_LANGUAGE } } = props

  const dictionary = getDictionary(lang)

  return (
    <Fragment>
      <div className='relative gap-x-8 gap-y-4 px-4 py-8 sm:px-8 grid grid-cols-[auto] sm:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] sm:justify-items-stretch grid-rows-[auto_1fr]'>
        <Avatar
          className='self-start justify-self-start hidden sm:block  row-start-2 col-start-1'
          dictionary={dictionary}
        />
        <div className='flex flex-col gap-2 col-start-1 sm:col-start-2 row-span-1'>
          <h1 className='text-3xl sm:text-4xl text-sky-600'>{dictionary.name}</h1>
          <h2 className='text-xl sm:text-2xl text-sky-700 font-bold'>{dictionary.job_title}</h2>
        </div>
        <div className='col-start-1 sm:col-start-2 row-span-1 row-start-2'>
          <Avatar dictionary={dictionary} className='float-left mr-4 mb-2 block sm:hidden' />
          <p className='text-base'>{dictionary.description}</p>
        </div>
        <Contacts
          dictionary={dictionary}
          className='row-span-1 row-start-3 col-start-1 sm:col-span-2 lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-2 break-inside-avoid-page'
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_auto] items-start gap-8 px-4 sm:px-8'>
        <Skills dictionary={dictionary} className='break-inside-avoid-page' />
        <div className='flex flex-wrap lg:flex-col gap-4 lg:gap-8'>
          <Languages dictionary={dictionary} className='grow break-inside-avoid-page' />
          <Education dictionary={dictionary} className='grow break-inside-avoid-page' />
        </div>
      </div>
      <div className='relative pt-[5.5rem] break-before-page'>
        <WorkBackgroundCurve
          className='absolute top-0 left-0 right-0 pointer-events-none bg-gradient-to-t '
          secondaryClassName='fill-green-600'
          mainClassName=''
          height='600px'
          width='100%'
        />
        <Projects dictionary={dictionary} className='px-4 sm:px-8 relative break-inside-avoid-page' />
      </div>
      <div className='relative pt-[5.5rem] break-before-page'>
        <PastBackgroundCurve
          className='absolute top-0 left-0 right-0 pointer-events-none'
          secondaryClassName='fill-rose-500'
          mainClassName=''
          height='600px'
          width='100%'
        />
        <WorkExperience dictionary={dictionary} className='px-4 sm:px-8 relative' />
      </div>
    </Fragment>
  )
}

export default HomePage

