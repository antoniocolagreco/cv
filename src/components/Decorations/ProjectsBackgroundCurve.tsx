import { FC, SVGAttributes } from 'react'

type ProjectsBackgroundCurveProps = SVGAttributes<SVGElement> & {
  path_1_className?: string
  path_2_className?: string
}

const ProjectsBackgroundCurve: FC<ProjectsBackgroundCurveProps> = (props) => {
  const { path_1_className = '', path_2_className = '', viewBox = '0 0 100 100', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox} preserveAspectRatio='none' {...otherProps}>
      <path d='M0 0 C 35 20, 70 20, 100 10 L 100 30 C 75 20, 25 20, 0 60 L 0 50 Z' className={path_1_className} />
      <path d='M0 0 C 35 20, 70 10, 100 10 L 100 25 C 75 20, 25 20, 0 50 L 0 50 Z' className={path_2_className} />
    </svg>
  )
}

export default ProjectsBackgroundCurve
