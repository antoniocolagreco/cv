import { FC, SVGAttributes } from 'react'

type AltMailIconProps = SVGAttributes<SVGElement> & {}

const AltMailIcon: FC<AltMailIconProps> = (props) => {
  const { width = 48, height = 48, viewBox = '0 -960 960 960', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox={viewBox} {...otherProps}>
      <path d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v53q0 56-39.5 94.5T744-294q-36 0-68-17.5T627-361q-26 34-65 50.5T480-294q-78 0-132.5-54T293-480q0-78 54.5-133T480-668q78 0 132.5 55T667-480v53q0 31 22.5 52t54.5 21q31 0 53.5-21t22.5-52v-53q0-142-99-241t-241-99q-142 0-241 99t-99 241q0 142 99 241t241 99h214v60H480Zm0-274q53 0 90-36.5t37-89.5q0-54-37-91t-90-37q-53 0-90 37t-37 91q0 53 37 89.5t90 36.5Z' />
    </svg>
  )
}

export default AltMailIcon
