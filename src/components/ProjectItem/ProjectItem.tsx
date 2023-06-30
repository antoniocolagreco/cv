import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'
import Underline from '../Underline/Underline'

type ProjectItemProps = HTMLAttributes<HTMLElement> & {
  frontImageUrl: string
  frontImageAlt: string
  backImageUrl: string
  backImageAlt: string
  name: string
  url: string
  description: string
  inverted?: boolean
}

const ProjectItem: FC<ProjectItemProps> = (props) => {
  const {
    inverted = false,
    backImageAlt,
    backImageUrl,
    description,
    frontImageAlt,
    frontImageUrl,
    name,
    url,
    className = '',
    ...otherProps
  } = props
  return (
    <article className={`grid gap-x-8 md:gap-x-16 gap-y-4 px-4 ${className}`} {...otherProps}>
      <Link
        href={url}
        target='_blank'
        className={`text-3xl font-medium text-sky-700 border-sky-700 peer sm:row-start-1 self-end row-start-2 text-center ${
          inverted ? 'col-start-1' : 'sm:col-start-2 col-start-1'
        }`}
      >
        <Underline>{name}</Underline>
      </Link>
      <Link
        href={url}
        target='_blank'
        className={`sm:justify-self-start justify-self-center hover:scale-105 transition duration-300 py-4 peer-hover:scale-105 sm:row-span-2 row-span-1 ${
          inverted
            ? 'col-start-1 hover:rotate-1 peer-hover:rotate-1 sm:col-start-2'
            : 'hover:-rotate-1 peer-hover:-rotate-1'
        }`}
      >
        <figure className='flex justify-center relative'>
          <div className='rounded-lg shadow-lg overflow-hidden inline-block absolute left-0 top-0 shadow-[#00000044]'>
            <img src={backImageUrl} className='max-w-[14rem]' alt={backImageAlt} />
          </div>
          <div className='rounded-lg shadow-lg overflow-hidden inline-block relative mt-10 ml-10 shadow-[#00000033]'>
            <img src={frontImageUrl} className='max-w-[14rem]' alt={frontImageAlt} />
          </div>
        </figure>
      </Link>
      <p
        className={`sm:row-start-2 self-start row-start-3 text-center sm:text-justify ${
          inverted ? 'col-start-1 justify-self-end' : 'sm:col-start-2 col-start-1'
        }`}
      >
        {description}
      </p>
    </article>
  )
}

export default ProjectItem
