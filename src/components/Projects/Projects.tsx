import { FC, HTMLAttributes, useContext } from 'react'
import { LocaleContext } from '../../context/Locale'
import ProjecttsIcon from '../../icons/ProjectsIcon'
import SimpleBadge from '../SimpleBadge/SimpleBadge'

type ProjectsProps = HTMLAttributes<HTMLElement> & {}

const Projects: FC<ProjectsProps> = (props) => {
  const { children, className = '', ...otherProps } = props
  const locale = useContext(LocaleContext).locale

  return (
    <section className={`flex flex-col gap-4 ${className}`}>
      <div className='flex items-center '>
        <SimpleBadge className='bg-transparent fill-white'>
          <ProjecttsIcon width={36} />
        </SimpleBadge>
        <h3 className='text-2xl text-white font-bold'>{locale.recent_projects}</h3>
      </div>
      <div className='flex flex-col gap-y-8 md:gap-y-4'>{children}</div>
    </section>
  )
}

export default Projects
