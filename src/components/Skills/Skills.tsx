import { FC, HTMLAttributes, useContext } from 'react'
import { LocaleContext } from '../../context/Locale'
import CSSIcon from '../../icons/CSSIcon'
import CollaborationIcon from '../../icons/CollaborationIcon'
import CreativityIcon from '../../icons/CreativityIcon'
import GatsbyIcon from '../../icons/GatsbyIcon'
import GitIcon from '../../icons/GitIcon'
import HTMLIcon from '../../icons/HTMLIcon'
import JavascriptIcon from '../../icons/JavascriptIcon'
import NextJSIcon from '../../icons/NextJSIcon'
import ProblemSolvingIcon from '../../icons/ProblemSolvingIcon'
import ReactIcon from '../../icons/ReactIcon'
import SkillsIcon from '../../icons/SkillsIcon'
import TailwindIcon from '../../icons/Tailwind'
import TypescriptIcon from '../../icons/TypescriptIcon'
import Badge from '../Badge/Badge'
import SkillBadge from '../SkillBadge/SkillBadge'

type SkillsProps = HTMLAttributes<HTMLElement> & {}

const Skills: FC<SkillsProps> = (props) => {
  const { children, className, ...otherProps } = props
  const locale = useContext(LocaleContext).locale

  return (
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
      </div>
    </section>
  )
}

export default Skills
