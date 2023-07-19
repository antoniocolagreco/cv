import SimpleBadge from '@/components/SimpleBadge/SimpleBadge'
import { Dictionary } from '@/dictionaries/dictionaries'
import ComputerIcon from '@/icons/ComputerIcon'
import EducationIcon from '@/icons/EducationIcon'
import { FC, HTMLAttributes } from 'react'

type EducationProps = HTMLAttributes<HTMLElement> & { dictionary: Dictionary }

const Education: FC<EducationProps> = (props) => {
  const { dictionary, className = '', ...otherProps } = props

  return (
    <section
      className={`text-sky-50 rounded-none rounded-bl-3xl rounded-tr-[4rem] shrink-0 p-4 fill-teal-700 bg-gradient-to-tl from-teal-800 to-teal-600 sm:min-w-[23rem] cursor-default ${className}`}
      {...otherProps}
    >
      <div className='flex items-center mb-2'>
        <SimpleBadge className='bg-white'>
          <EducationIcon width={36} />
        </SimpleBadge>
        <h3 className='text-md sm:text-xl text-white'>{dictionary.education}</h3>
      </div>
      <div className='flex'>
        <SimpleBadge className='bg-transparent fill-white'>
          <ComputerIcon width={36} />
        </SimpleBadge>
        <div>
          <div className='text-amber-400 text-sm sm:text-base capitalize'>{dictionary.educations_title}</div>
          <div className='text-neutral-200 text-xs sm:text-sm font-normal capitalize'>
            {dictionary.education_istitute}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

