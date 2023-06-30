import { FC, SVGAttributes } from 'react'

type MiddleBackgroundCurveProps = SVGAttributes<SVGElement> & {
  path_1_className?: string
  path_2_className?: string
}

const MiddleBackgroundCurve: FC<MiddleBackgroundCurveProps> = (props) => {
  const { path_1_className = '', path_2_className = '', viewBox = '0 0 100 100', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox} preserveAspectRatio='none' {...otherProps}>
      <path d='M0 20 C 25 30, 70 40, 100 0 L 100 60 C 75 40, 20 40, 0 70 L 0 50 Z' className={path_2_className} />
      {/* <path d='M0 20 C 25 30, 70 50, 100 30 L 100 80 C 75 60, 25 20, 0 70 L 0 50 Z' className={path_2_className} /> */}
    </svg>
  )
}

export default MiddleBackgroundCurve
