import { FC, SVGAttributes } from 'react'

type CurveProps = SVGAttributes<SVGElement> & {
  path_1_className?: string
  path_2_className?: string
}

const Curve: FC<CurveProps> = (props) => {
  const { path_1_className = '', path_2_className = '', viewBox = '0 0 400 20', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox} preserveAspectRatio='none' {...otherProps}>
      <path
        d='M0 10c21.2-2.4 39.2-7.2 61-7.2s39.8 4.8 61 7.2c21.2 2.4 39.2-1.2 61-1.2s39.8 3.6 61 1.2c21.2-2.4 39.2-7.2 61-7.2s39.8 4.8 61 7.2c21.2 2.4 39.2-1.2 61-1.2s39.8 3.6 61 1.2v1H0v-1z'
        className={path_2_className}
      />
    </svg>
  )
}

export default Curve
