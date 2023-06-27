'use client'
import { Page, PageProps } from '@/types/next'
import { useContext } from 'react'
import Avatar from '../components/Avatar'
import Badge from '../components/Badge/Badge'
import Contacts from '../components/Contacts/Contacts'
import TopBackgroundCurve from '../components/Decorations/TopBackgroundCurve'
import SkillBadge from '../components/SkillBadge/SkillBadge'
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
import SkillsIcon from '../icons/SkillsIcon'
import TailwindIcon from '../icons/Tailwind'
import TypescriptIcon from '../icons/TypescriptIcon'

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
      <header className='flex gap-8 p-8 mt-8 items-start'>
        <div className='rounded-2xl border-4 border-sky-600 shrink-0'>
          <Avatar className='rounded-xl m-1' width={120} />
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl text-sky-600'>{locale.name}</h1>
          <h2 className='text-2xl text-sky-700 font-bold'>{locale.job_title}</h2>
          <p className='text'>{locale.description}</p>
        </div>
        <Contacts />
      </header>
      <main className='flex gap-8 p-8 items-start'>
        <section className='fill-sky-700'>
          <div className='flex items-center'>
            <Badge className='bg-sky-700 fill-white'>
              <SkillsIcon width={36} />
            </Badge>
            <h3 className='text-3xl text-sky-700 font-bold'>{locale.skills}</h3>
          </div>
          <div className='flex gap-4 my-4 flex-wrap text-neutral-800 font-semibold'>
            <SkillBadge className='border-black'>
              <NextJSIcon className='fill-black' width={24} />
              <span className='text-black'>Next.js</span>
            </SkillBadge>
            <SkillBadge className='border-violet-700'>
              <GatsbyIcon className='fill-violet-700' width={24} />
              <span className=' text-violet-700'>Gatsby</span>
            </SkillBadge>
            <SkillBadge className='border-cyan-500 bg-neutral-800'>
              <ReactIcon className='fill-cyan-500' width={24} />
              <span className=' text-cyan-500'>React</span>
            </SkillBadge>
            <SkillBadge className='border-yellow-300 bg-neutral-800'>
              <JavascriptIcon className='fill-neutral-800' width={24} />
              <span className=' text-yellow-300'>Javascript</span>
            </SkillBadge>
            <SkillBadge className='border-sky-700 bg-white'>
              <TypescriptIcon className='fill-white' width={24} />
              <span className=' text-sky-700'>Typescript</span>
            </SkillBadge>
            <SkillBadge className='border-orange-600 bg-white'>
              <GitIcon className='fill-white' width={24} />
              <span>Git</span>
            </SkillBadge>
            <SkillBadge className='border-sky-400 bg-white'>
              <TailwindIcon className='fill-sky-400' width={24} />
              <span>Tailwind</span>
            </SkillBadge>
            <SkillBadge className='border-blue-600 bg-white'>
              <CSSIcon className='fill-blue-600' width={24} />
              <span>CSS</span>
            </SkillBadge>
            <SkillBadge className='border-orange-600 bg-white'>
              <HTMLIcon className='fill-orange-600' width={24} />
              <span>HTML</span>
            </SkillBadge>
            <SkillBadge className='border-sky-700 bg-white'>
              <ProblemSolvingIcon className='fill-sky-700' width={24} />
              <span>{locale.problem_solving}</span>
            </SkillBadge>
            <SkillBadge className='border-green-700 bg-white'>
              <CollaborationIcon className='fill-green-700' width={24} />
              <span>{locale.collaboration}</span>
            </SkillBadge>
            <SkillBadge className='border-pink-600 bg-white'>
              <CreativityIcon className='fill-pink-600' width={24} />
              <span>{locale.creative_thinking}</span>
            </SkillBadge>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AppPage

