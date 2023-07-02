import { FC, SVGAttributes } from 'react'

type ProjectsBackgroundCurveProps = SVGAttributes<SVGElement> & {
  secondaryClassName?: string
  mainClassName?: string
}

const ProjectsBackgroundCurve: FC<ProjectsBackgroundCurveProps> = (props) => {
  const { secondaryClassName = '', mainClassName = '', viewBox = '0 0 100 100', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox} preserveAspectRatio='none' {...otherProps}>
      <path d='M0 0 C 35 25, 70 3, 100 8 L 100 35 C 75 15, 25 25, 0 70 L 0 50 Z' className={secondaryClassName} />
      <path d='M0 5 C 35 20, 70 5, 100 10 L 100 35 C 75 15, 25 25, 0 60 L 0 50 Z' className={mainClassName} />
    </svg>
  )
}

export default ProjectsBackgroundCurve
