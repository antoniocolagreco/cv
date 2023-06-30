import { FC, HTMLAttributes, useContext } from 'react'
import { LocaleContext } from '../../context/Locale'
import ComputerIcon from '../../icons/ComputerIcon'
import EducationIcon from '../../icons/EducationIcon'
import SimpleBadge from '../SimpleBadge/SimpleBadge'

type EducationProps = HTMLAttributes<HTMLElement> & {}

const Education: FC<EducationProps> = (props) => {
  const { children, className = '', ...otherProps } = props
  const locale = useContext(LocaleContext).locale

  return (
    <section
      className={`text-sky-50 rounded-none rounded-bl-3xl rounded-tr-[4rem] shrink-0 p-4 fill-teal-700 bg-gradient-to-tl from-teal-800 to-teal-600 sm:min-w-[22rem] cursor-default ${className}`}
    >
      <div className='flex items-center mb-2'>
        <SimpleBadge className='bg-white'>
          <EducationIcon width={36} />
        </SimpleBadge>
        <h3 className='text-md sm:text-xl text-white'>{locale.education}</h3>
      </div>
      <div className='flex'>
        <SimpleBadge className='bg-transparent fill-white'>
          <ComputerIcon width={36} />
        </SimpleBadge>
        <div>
          <div className='text-amber-400 text-sm sm:text-base capitalize'>{locale.educations_title}</div>
          <div className='text-neutral-200 text-xs sm:text-sm font-normal capitalize'>{locale.education_istitute}</div>
        </div>
      </div>
    </section>
  )
}

export default Education
