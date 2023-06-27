import { FC, HTMLAttributes } from 'react'

type SkillBadgeProps = HTMLAttributes<HTMLSpanElement> & {}

const SkillBadge: FC<SkillBadgeProps> = (props) => {
  const { children, className, ...otherProps } = props
  return (
    <span className={`flex gap-2 items-center border-2 px-2 py-1 rounded-xl pointer-events-none ${className}`}>
      {children}
    </span>
  )
}

export default SkillBadge
