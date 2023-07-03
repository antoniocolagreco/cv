import { FC, SVGAttributes } from 'react'

type BottomBackgroundCurveProps = SVGAttributes<SVGElement> & {
  secondaryClassName?: string
  mainClassName?: string
}

const BottomBackgroundCurve: FC<BottomBackgroundCurveProps> = (props) => {
  const { secondaryClassName = '', mainClassName = '', viewBox = '0 0 1000 200', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox} preserveAspectRatio='none' {...otherProps}>
      <defs>
        <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#0284c7' />
          <stop offset='100%' stopColor='#0369a1' />
        </linearGradient>
      </defs>
      <path
        d='M0,82.5C404.7-64.3,291.5,205.1,692,50c207.7-80.5,288.7,26.4,308,44.9V200H0V82.5z'
        className={secondaryClassName}
      />
      <path
        d='M0,102.6C416.4-53.1,291.6,217.5,688.3,51.5c205.5-86,292.5,24.9,311.7,43.4V200H0V102.6z'
        fill='url(#gradient)'
        // className={mainClassName}
      />
    </svg>
  )
}

export default BottomBackgroundCurve
