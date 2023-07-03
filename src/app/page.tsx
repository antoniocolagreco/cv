'use client'
import { Page, PageProps } from '@/types/next'
import { useContext } from 'react'
import Avatar from '../components/Avatar/Avatar'
import Contacts from '../components/Contacts/Contacts'
import BottomBackgroundCurve from '../components/Decorations/BottomBackgroundCurve'
import WorkBackgroundCurve from '../components/Decorations/ProjectsBackgroundCurve'
import TopBackgroundCurve from '../components/Decorations/TopBackgroundCurve'
import PastBackgroundCurve from '../components/Decorations/WorkBackgroundCurve'
import Education from '../components/Education/Education'
import Languages from '../components/Languages/Languages'
import ProjectItem from '../components/ProjectItem/ProjectItem'
import Projects from '../components/Projects/Projects'
import SkillBadge from '../components/SkillBadge/SkillBadge'
import Skills from '../components/Skills/Skills'
import WorkExperience from '../components/WorkExperience/WorkExperience'
import WorkExperienceItem from '../components/WorkExperienceItem/WorkExperienceItem'
import { LocaleContext } from '../context/Locale'
import CSSIcon from '../icons/CSSIcon'
import CollaborationIcon from '../icons/CollaborationIcon'
import CreativityIcon from '../icons/CreativityIcon'
import GatsbyIcon from '../icons/GatsbyIcon'
import GitIcon from '../icons/GitIcon'
import HTMLIcon from '../icons/HTMLIcon'
import JavascriptIcon from '../icons/JavascriptIcon'
import NextJSIcon from '../icons/NextJSIcon'
import ProblemSolvingIcon from '../icons/ProblemSolvingIcon'
import ReactIcon from '../icons/ReactIcon'
import TailwindIcon from '../icons/Tailwind'
import TimeIcon from '../icons/TimeIcon'
import TypescriptIcon from '../icons/TypescriptIcon'

type Props = PageProps & {}

const AppPage: Page<Props> = (props) => {
  const locale = useContext(LocaleContext).locale
  const basePath = process.env.BASE_PATH || ''

  return (
    <div className='max-w-screen-lg mx-auto lg:my-8 shadow-2xl bg-white border border-gray-200 text-neutral-900 relative rounded overflow-hidden'>
      <TopBackgroundCurve
        className='absolute top-0 left-0 right-0 pointer-events-none'
        secondaryClassName='fill-amber-500'
        mainClassName=''
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
          <Skills>
            <SkillBadge className='border-black'>
              <NextJSIcon className='fill-black' width={24} />
              Next.js
            </SkillBadge>
            <SkillBadge className='border-violet-700'>
              <GatsbyIcon className='fill-violet-700' width={24} />
              Gatsby
            </SkillBadge>
            <SkillBadge className='border-cyan-500 bg-neutral-800 text-cyan-500'>
              <ReactIcon className='fill-cyan-500' width={24} />
              React
            </SkillBadge>
            <SkillBadge className='border-sky-700 bg-white'>
              <TypescriptIcon className='fill-white' width={24} />
              Typescript
            </SkillBadge>
            <SkillBadge className='border-yellow-400 bg-white'>
              <JavascriptIcon className='fill-neutral-800' width={24} />
              Javascript
            </SkillBadge>
            <SkillBadge className='border-orange-600 bg-white'>
              <GitIcon className='fill-white' width={24} />
              Git
            </SkillBadge>
            <SkillBadge className='border-sky-400 bg-white'>
              <TailwindIcon className='fill-sky-400' width={24} />
              Tailwind
            </SkillBadge>
            <SkillBadge className='border-blue-600 bg-white'>
              <CSSIcon className='fill-blue-600' width={24} />
              CSS
            </SkillBadge>
            <SkillBadge className='border-orange-600 bg-white'>
              <HTMLIcon className='fill-orange-600' width={24} />
              HTML
            </SkillBadge>
            <SkillBadge className='border-sky-700 bg-white'>
              <ProblemSolvingIcon className='fill-sky-700' width={24} />
              {locale.problem_solving}
            </SkillBadge>
            <SkillBadge className='border-green-700 bg-white'>
              <CollaborationIcon className='fill-green-700' width={24} />
              {locale.collaboration}
            </SkillBadge>
            <SkillBadge className='border-pink-600 bg-white'>
              <CreativityIcon className='fill-pink-600' width={24} />
              {locale.creative_thinking}
            </SkillBadge>
            <SkillBadge className='border-amber-500 bg-white'>
              <TimeIcon className='fill-amber-500' width={24} />
              {locale.time_management}
            </SkillBadge>
          </Skills>
          <div className='flex flex-wrap lg:flex-col gap-4 lg:gap-8'>
            <Languages className='grow' />
            <Education className='grow' />
          </div>
        </div>
        <div className='relative pt-[5.5rem]'>
          <WorkBackgroundCurve
            className='absolute top-0 left-0 right-0 pointer-events-none bg-gradient-to-t '
            secondaryClassName='fill-green-600'
            mainClassName=''
            height='600px'
            width='100%'
          />
          <Projects className='px-4 sm:px-8 relative'>
            <ProjectItem
              frontImageUrl={`${basePath}/assets/adkaora1.jpg`}
              frontImageAlt={locale.adkaora_image_alt}
              backImageUrl={`${basePath}/assets/adkaora2.jpg`}
              backImageAlt={locale.adkaora_image_alt}
              name='adkaora.com'
              url='https://adkaora.com'
              description={locale.adkaora_project_description}
            />
            <ProjectItem
              frontImageUrl={`${basePath}/assets/a2a1.jpg`}
              frontImageAlt={locale.a2a_image_alt}
              backImageUrl={`${basePath}/assets/a2a2.jpg`}
              backImageAlt={locale.a2a_image_alt}
              name='a2aenergia.eu'
              url='https://www.a2aenergia.eu'
              description={locale.a2a_project_description}
              inverted
            />
          </Projects>
        </div>
        <div className='relative pt-[5.5rem]'>
          <PastBackgroundCurve
            className='absolute top-0 left-0 right-0 pointer-events-none'
            secondaryClassName='fill-rose-500'
            mainClassName=''
            height='600px'
            width='100%'
          />
          <WorkExperience className='px-4 sm:px-8 relative'>
            <WorkExperienceItem value={locale.job_6} />
            <WorkExperienceItem value={locale.job_5} />
            <WorkExperienceItem value={locale.job_4} />
            <WorkExperienceItem value={locale.job_3} />
            <WorkExperienceItem value={locale.job_2} />
            <WorkExperienceItem value={locale.job_1} />
          </WorkExperience>
        </div>
      </main>
      <BottomBackgroundCurve
        className='mt-8'
        secondaryClassName='fill-amber-500'
        mainClassName=''
        height='100px'
        width='100%'
      />
    </div>
  )
}

export default AppPage

