import { FC, SVGAttributes } from 'react'

type ComputerIconProps = SVGAttributes<SVGElement> & {}

const ComputerIcon: FC<ComputerIconProps> = (props) => {
  const { width = 48, height = width ? width : 48, viewBox = '0 -960 960 960', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox={viewBox} {...otherProps}>
      <path d='M70-120q-12.75 0-21.375-8.675Q40-137.351 40-150.175 40-163 48.625-171.5T70-180h820q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890-120H70Zm70-120q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h680q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680v-480H140v480Zm0 0v-480 480Z' />
    </svg>
  )
}

export default ComputerIcon
