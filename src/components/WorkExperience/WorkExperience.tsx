import { FC, HTMLAttributes, useContext } from 'react'
import { LocaleContext } from '../../context/Locale'
import WorkIcon from '../../icons/WorkIcon'
import SimpleBadge from '../SimpleBadge/SimpleBadge'

type WorkExperienceProps = HTMLAttributes<HTMLElement> & {}

const WorkExperience: FC<WorkExperienceProps> = (props) => {
  const { children, className = '', ...otherProps } = props
  const locale = useContext(LocaleContext).locale

  return (
    <section className={`flex flex-col gap-4 relative ${className}`}>
      <div className='flex items-center '>
        <SimpleBadge className='bg-transparent fill-white'>
          <WorkIcon width={36} />
        </SimpleBadge>
        <h3 className='text-2xl text-white font-bold'>{locale.work_experience}</h3>
      </div>
      <div className='flex flex-col gap-y-8 md:gap-y-4'>{children}</div>
    </section>
  )
}

export default WorkExperience
