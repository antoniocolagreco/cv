import { FC, SVGAttributes } from 'react'

type TimeIconProps = SVGAttributes<SVGElement> & {}

const TimeIcon: FC<TimeIconProps> = (props) => {
  const { width = 48, height = width ? width : 48, viewBox = '0 -960 960 960', ...otherProps } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox={viewBox} {...otherProps}>
      <path d='M479-82q-74 0-139.5-28t-114-76.5q-48.5-48.5-77-114T120-440.733q0-74.733 28.5-140T225.5-695q48.5-49 114-77T479-800q74 0 139.5 28T733-695q49 49 77 114.267t28 140Q838-366 810-300.5t-77 114Q684-138 618.5-110T479-82Zm0-357Zm121 161 42-42-130-130v-190h-60v214l148 148ZM214-867l42 42L92-667l-42-42 164-158Zm530 0 164 158-42 42-164-158 42-42ZM479.043-142Q604-142 691-229.043t87-212Q778-566 690.957-653t-212-87Q354-740 267-652.957t-87 212Q180-316 267.043-229t212 87Z' />
    </svg>
  )
}

export default TimeIcon
