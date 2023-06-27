import { FC, SVGAttributes } from 'react'

type TailwindIconProps = SVGAttributes<SVGElement> & {}

const TailwindIcon: FC<TailwindIconProps> = (props) => {
  const { width = 48, height = width ? width : 48, viewBox = '0 0 32 32', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox={viewBox} {...otherProps}>
      <path
        d='M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z'
        fill='#38bdf8'
      />
    </svg>
  )
}

export default TailwindIcon
