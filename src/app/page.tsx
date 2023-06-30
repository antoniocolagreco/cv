'use client'
import { Page, PageProps } from '@/types/next'
import { useContext } from 'react'
import Avatar from '../components/Avatar/Avatar'
import Contacts from '../components/Contacts/Contacts'
import ProjectsBackgroundCurve from '../components/Decorations/ProjectsBackgroundCurve'
import TopBackgroundCurve from '../components/Decorations/TopBackgroundCurve'
import Education from '../components/Education/Education'
import Languages from '../components/Languages/Languages'
import ProjectItem from '../components/ProjectItem/ProjectItem'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import { LocaleContext } from '../context/Locale'

type Props = PageProps & {}

const AppPage: Page<Props> = (props) => {
  const locale = useContext(LocaleContext).locale
  return (
    <div className='max-w-screen-lg mx-auto lg:my-8 shadow-2xl bg-white border border-gray-200 text-neutral-900 relative rounded overflow-hidden'>
      <TopBackgroundCurve
        className='absolute top-0 left-0 right-0 pointer-events-none'
        path_1_className='fill-amber-500'
        path_2_className='fill-sky-600'
        height='200px'
        width='100%'
      />
      <header className='gap-x-8 gap-y-4 px-4 py-8 sm:px-8 mt-8 grid grid-cols-[auto] sm:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] sm:justify-items-stretch grid-rows-[auto_1fr]'>
        <Avatar className='self-start justify-self-start hidden sm:block  row-start-2 col-start-1' />
        <div className='flex flex-col gap-2 col-start-1 sm:col-start-2 row-span-1'>
          <h1 className='text-3xl sm:text-4xl text-sky-600'>{locale.name}</h1>
          <h2 className='text-xl sm:text-2xl text-sky-700 font-bold'>{locale.job_title}</h2>
        </div>
        <div className='col-start-1 sm:col-start-2 row-span-1 row-start-2'>
          <Avatar className='float-left mr-4 mb-2 block sm:hidden' />
          <p className='text'>{locale.description}</p>
        </div>
        <Contacts className='row-span-1 row-start-3 col-start-1 sm:col-span-2 lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-2' />
      </header>
      <main>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_auto] items-start gap-8 px-4 sm:px-8'>
          <Skills />
          <div className='flex flex-wrap lg:flex-col gap-4 lg:gap-8'>
            <Languages className='grow' />
            <Education className='grow' />
          </div>
        </div>
        <div className='relative pt-20'>
          <ProjectsBackgroundCurve
            className='absolute top-0 left-0 right-0 pointer-events-none'
            path_1_className='fill-green-600'
            path_2_className='fill-emerald-700'
            height='600px'
            width='100%'
          />
          <Projects className='px-4 sm:px-8 relative'>
            <ProjectItem
              frontImageUrl='/assets/adkaora1.jpg'
              frontImageAlt={locale.adkaora_image_alt}
              backImageUrl='/assets/adkaora2.jpg'
              backImageAlt={locale.adkaora_image_alt}
              name='adkaora.com'
              url='https://adkaora.com'
              description={locale.adkaora_project_description}
            />
            <ProjectItem
              frontImageUrl='/assets/a2a1.jpg'
              frontImageAlt={locale.a2a_image_alt}
              backImageUrl='/assets/a2a2.jpg'
              backImageAlt={locale.a2a_image_alt}
              name='a2aenergia.eu'
              url='https://www.a2aenergia.eu'
              description={locale.a2a_project_description}
              inverted
            />
          </Projects>
        </div>
      </main>
    </div>
  )
}

export default AppPage

