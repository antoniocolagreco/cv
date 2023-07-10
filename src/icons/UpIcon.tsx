import { FC, SVGAttributes } from 'react'

type UpIconProps = SVGAttributes<SVGElement> & {}

const UpIcon: FC<UpIconProps> = (props) => {
  const { width = 48, height = 48, viewBox = '0 -960 960 960', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox={viewBox} {...otherProps}>
      <path d='M450-160v-526L202-438l-42-42 320-320 320 320-42 42-248-248v526h-60Z' />
    </svg>
  )
}

export default UpIcon

