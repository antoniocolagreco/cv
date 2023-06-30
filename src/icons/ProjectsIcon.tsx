import { FC, SVGAttributes } from 'react'

type ProjectsIconProps = SVGAttributes<SVGElement> & {}

const ProjectsIcon: FC<ProjectsIconProps> = (props) => {
  const { width = 48, height = 48, viewBox = '0 -960 960 960', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox={viewBox} {...otherProps}>
      <path d='M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h461v-163H140v163Zm521 0h159v-386H661v386ZM140-443h461v-163H140v163Z' />
    </svg>
  )
}

export default ProjectsIcon
