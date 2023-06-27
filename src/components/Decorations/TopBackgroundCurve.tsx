import { FC, SVGAttributes } from 'react'

type TopBackgroundCurveProps = SVGAttributes<SVGElement> & {
  path_1_className?: string
  path_2_className?: string
}

const TopBackgroundCurve: FC<TopBackgroundCurveProps> = (props) => {
  const { path_1_className = '', path_2_className = '', viewBox = '0 0 100 100', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox} preserveAspectRatio='none' {...otherProps}>
      <path d='M0 30 C 50 0, 70 0, 100 30 L 100 0 L 0 0 Z' className={path_1_className} />
      <path d='M0 30 C 50 0, 70 -5, 100 30 L 100 0 L 0 0 Z' className={path_2_className} />
    </svg>
  )
}

export default TopBackgroundCurve
