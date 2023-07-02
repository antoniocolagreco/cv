import { FC, SVGAttributes } from 'react'

type TopBackgroundCurveProps = SVGAttributes<SVGElement> & {
  secondaryClassName?: string
  mainClassName?: string
}

const TopBackgroundCurve: FC<TopBackgroundCurveProps> = (props) => {
  const { secondaryClassName = '', mainClassName = '', viewBox = '0 0 100 100', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox} preserveAspectRatio='none' {...otherProps}>
      <path d='M0 30 C 2 10, 70 15, 100 30 L 100 0 L 0 0 Z' className={secondaryClassName} />
      <path d='M0 30 C 25 10, 70 0, 100 30 L 100 0 L 0 0 Z' className={mainClassName} />
    </svg>
  )
}

export default TopBackgroundCurve
