import { FC, HTMLAttributes } from 'react';

type AvatarProps = HTMLAttributes<HTMLElement> & { src: string; alt: string }

const Avatar: FC<AvatarProps> = (props) => {
  const { src, alt, className, ...otherProps } = props
  return (
    <figure className={`rounded-2xl border-4 border-sky-600 ${className}`} {...otherProps}>
      <img src={src} className='rounded-xl m-1' width={120} alt={alt} />
    </figure>
  )
}

export default Avatar

