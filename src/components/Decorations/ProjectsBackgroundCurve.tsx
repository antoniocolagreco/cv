import { FC, SVGAttributes } from 'react'

type ProjectsBackgroundCurveProps = SVGAttributes<SVGElement> & {
  secondaryClassName?: string
  mainClassName?: string
}

const WorkBackgroundCurve: FC<ProjectsBackgroundCurveProps> = (props) => {
  const { secondaryClassName = '', mainClassName = '', viewBox = '0 0 100 100', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox} preserveAspectRatio='none' {...otherProps}>
      <defs>
        <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#0284c7' />
          <stop offset='100%' stopColor='#0369a1' />
        </linearGradient>
      </defs>
      <path
        d='M0 0 C 35 25, 70 3, 100 8 L 100 35 C 75 15, 25 25, 0 70 L 0 50 Z'
        className={secondaryClassName}
        fill='url(#gradient)'
      />
      <path
        d='M0 5 C 35 20, 70 5, 100 10 L 100 35 C 75 15, 25 25, 0 60 L 0 50 Z'
        className={mainClassName}
        fill='url(#gradient)'
      />
    </svg>
  )
}

export default WorkBackgroundCurve
