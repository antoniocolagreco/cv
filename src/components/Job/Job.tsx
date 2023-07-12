import { FC, HTMLAttributes } from 'react'
import { JobExperience } from '../../types/locale'

type JobProps = HTMLAttributes<HTMLDivElement> & {
  value: JobExperience
}

const Job: FC<JobProps> = (props) => {
  const { value, className = '', ...otherProps } = props
  return (
    <div
      className={`border-4 rounded-2xl p-4 border-rose-500 bg-gradient-to-br from-white to-zinc-50 print:break-inside-avoid-page ${className}`}
      {...otherProps}
    >
      <h4 className='text-2xl font-bold'>{value.role}</h4>
      <h5 className='text-xl font-semibold text-rose-900'>{value.company_name}</h5>
      <p className='font-semibold text-neutral-500'>{value.date}</p>
      <p className='mt-2'>{value.description}</p>
    </div>
  )
}

export default Job

