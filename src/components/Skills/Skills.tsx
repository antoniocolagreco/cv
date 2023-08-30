import DecoratedBadge from '@/components/DecoratedBadge/DecoratedBadge'
import SkillBadge from '@/components/SkillBadge/SkillBadge'
import { Dictionary } from '@/dictionaries/dictionaries'
import CSSIcon from '@/icons/CSSIcon'
import CollaborationIcon from '@/icons/CollaborationIcon'
import CreativityIcon from '@/icons/CreativityIcon'
import GatsbyIcon from '@/icons/GatsbyIcon'
import GitIcon from '@/icons/GitIcon'
import HTMLIcon from '@/icons/HTMLIcon'
import JavascriptIcon from '@/icons/JavascriptIcon'
import NextJSIcon from '@/icons/NextJSIcon'
import ProblemSolvingIcon from '@/icons/ProblemSolvingIcon'
import ReactIcon from '@/icons/ReactIcon'
import SkillsIcon from '@/icons/SkillsIcon'
import TailwindIcon from '@/icons/Tailwind'
import TimeIcon from '@/icons/TimeIcon'
import TypescriptIcon from '@/icons/TypescriptIcon'
import { FC, HTMLAttributes } from 'react'
import ReduxIcon from '../../icons/Redux'

type SkillsProps = HTMLAttributes<HTMLElement> & { dictionary: Dictionary }

const Skills: FC<SkillsProps> = (props) => {
  const { dictionary, className, ...otherProps } = props

  return (
    <section className={`fill-sky-700 ${className}`}>
      <div className='flex items-center justify-center mb-8'>
        <DecoratedBadge className='bg-sky-700 fill-white'>
          <SkillsIcon width={36} />
        </DecoratedBadge>
        <h3 className='text-2xl text-sky-700 font-bold'>{dictionary.skills}</h3>
      </div>
      <div className='flex gap-4 flex-wrap text-neutral-800 font-semibold px-4 justify-center items-start'>
        <SkillBadge className='border-black'>
          <NextJSIcon className='fill-black' width={24} />
          Next.js
        </SkillBadge>
        <SkillBadge className='border-violet-700'>
          <GatsbyIcon className='fill-violet-700' width={24} />
          Gatsby
        </SkillBadge>
        <SkillBadge className='border-cyan-500  bg-white'>
          <ReactIcon className='fill-cyan-500' width={24} />
          React
        </SkillBadge>
        {/* <SkillBadge className='border-[#519f44] bg-white'>
          <NodeIcon className='fill-[#519f44]' width={24} height={24} />
          Node.js
        </SkillBadge> */}
        <SkillBadge className='border-sky-400 bg-white'>
          <TailwindIcon className='fill-sky-400' width={24} />
          Tailwind CSS
        </SkillBadge>
        <SkillBadge className='border-sky-700 bg-white'>
          <TypescriptIcon className='fill-white' width={24} />
          Typescript
        </SkillBadge>
        <SkillBadge className='border-yellow-400 bg-white'>
          <JavascriptIcon className='fill-neutral-800' width={24} />
          Javascript
        </SkillBadge>
        <SkillBadge className='border-violet-700'>
          <ReduxIcon className='fill-violet-700' width={24} />
          Redux
        </SkillBadge>
        <SkillBadge className='border-orange-600 bg-white'>
          <HTMLIcon className='fill-orange-600' width={24} />
          HTML
        </SkillBadge>
        <SkillBadge className='border-blue-600 bg-white'>
          <CSSIcon className='fill-blue-600' width={24} />
          CSS
        </SkillBadge>
        <SkillBadge className='border-orange-600 bg-white'>
          <GitIcon className='fill-white' width={24} />
          Git
        </SkillBadge>
        <SkillBadge className='border-sky-700 bg-white'>
          <ProblemSolvingIcon className='fill-sky-700' width={24} />
          {dictionary.problem_solving}
        </SkillBadge>
        <SkillBadge className='border-green-700 bg-white'>
          <CollaborationIcon className='fill-green-700' width={24} />
          {dictionary.collaboration}
        </SkillBadge>
        <SkillBadge className='border-pink-600 bg-white'>
          <CreativityIcon className='fill-pink-600' width={24} />
          {dictionary.creative_thinking}
        </SkillBadge>
        <SkillBadge className='border-amber-500 bg-white'>
          <TimeIcon className='fill-amber-500' width={24} />
          {dictionary.time_management}
        </SkillBadge>
      </div>
    </section>
  )
}

export default Skills

