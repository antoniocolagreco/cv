import { FC, SVGAttributes } from 'react'

type CreativityIconProps = SVGAttributes<SVGElement> & {}

const CreativityIcon: FC<CreativityIconProps> = (props) => {
  const { width = 48, height = width ? width : 48, viewBox = '0 0 32 32', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox={viewBox} {...otherProps}>
      <path d='M16,7a8.36,8.36,0,0,0-8,8,8.4,8.4,0,0,0,2.29,5.7A4.56,4.56,0,0,1,12,24a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1,4.46,4.46,0,0,1,1.69-3.28A7.87,7.87,0,0,0,24,15a8.17,8.17,0,0,0-2.44-5.83A7.67,7.67,0,0,0,16,7Zm4.34,12.28A6.87,6.87,0,0,0,18.09,23H13.91a7,7,0,0,0-2.2-3.71A6.41,6.41,0,0,1,10,15a6.29,6.29,0,0,1,6-6,5.63,5.63,0,0,1,4.13,1.6A6.16,6.16,0,0,1,22,15,5.93,5.93,0,0,1,20.31,19.28Z' />
      <path d='M19,26H13a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z' />
      <path d='M18,29H14a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z' />
      <path d='M16,5a1,1,0,0,0,1-1V2a1,1,0,0,0-2,0V4A1,1,0,0,0,16,5Z' />
      <path d='M5,14H3a1,1,0,0,0,0,2H5a1,1,0,0,0,0-2Z' />
      <path d='M29,14H27a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z' />
      <path d='M25.9,5.1a1,1,0,0,0-1.41,0L23.07,6.51a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29L25.9,6.51A1,1,0,0,0,25.9,5.1Z' />
      <path d='M8.93,7.93a1,1,0,0,0,0-1.42L7.51,5.1A1,1,0,0,0,6.1,6.51L7.51,7.93a1,1,0,0,0,.71.29A1,1,0,0,0,8.93,7.93Z' />
    </svg>
  )
}

export default CreativityIcon
