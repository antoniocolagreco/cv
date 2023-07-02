import { FC, SVGAttributes } from 'react'

type PastBackgroundCurveProps = SVGAttributes<SVGElement> & {
  secondaryClassName?: string
  mainClassName?: string
}

const PastBackgroundCurve: FC<PastBackgroundCurveProps> = (props) => {
  const { secondaryClassName = '', mainClassName = '', viewBox = '0 0 100 100', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox} preserveAspectRatio='none' {...otherProps}>
      <path d='M0 5 C 50 0, 75 20, 100 20 L 100 30 C 75 35, 25 10, 0 50 L 0 20 Z' className={secondaryClassName} />
      <path d='M0 10 C 50 0, 75 20, 100 14 L 100 25 C 75 35, 25 10, 0 50 L 0 20 Z' className={mainClassName} />
    </svg>
  )
}

export default PastBackgroundCurve
