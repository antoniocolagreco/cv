import { FC, SVGAttributes } from 'react'

type CheckIconProps = SVGAttributes<SVGElement> & {}

const CheckIcon: FC<CheckIconProps> = (props) => {
  const { width = 48, height = 48, viewBox = '0 -960 960 960', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox={viewBox} {...otherProps}>
      <path d='M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z' />
    </svg>
  )
}

export default CheckIcon

