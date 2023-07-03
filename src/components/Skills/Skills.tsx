import { FC, HTMLAttributes, useContext } from 'react'
import { LocaleContext } from '../../context/Locale'
import SkillsIcon from '../../icons/SkillsIcon'
import DecoratedBadge from '../DecoratedBadge/DecoratedBadge'

type SkillsProps = HTMLAttributes<HTMLElement> & {}

const Skills: FC<SkillsProps> = (props) => {
  const { children, className, ...otherProps } = props
  const locale = useContext(LocaleContext).locale

  return (
    <section className={`fill-sky-700 ${className}`}>
      <div className='flex items-center mb-8 justify-center'>
        <DecoratedBadge className='bg-sky-700 fill-white'>
          <SkillsIcon width={36} />
        </DecoratedBadge>
        <h3 className='text-2xl text-sky-700 font-bold'>{locale.skills}</h3>
      </div>
      <div className='flex gap-4 flex-wrap text-neutral-800 font-semibold px-4 justify-center items-start'>
        {children}
      </div>
    </section>
  )
}

export default Skills
