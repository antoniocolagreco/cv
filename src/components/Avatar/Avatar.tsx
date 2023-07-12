import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'
import Dictionary from '../../types/locale'
import AvatarImage from './../../../public/images/avatar.webp'

type AvatarProps = HTMLAttributes<HTMLElement> & { dictionary: Dictionary }

const Avatar: FC<AvatarProps> = (props) => {
  const { dictionary, className, ...otherProps } = props
  return (
    <figure className={`rounded-2xl border-4 border-sky-600 ${className}`} {...otherProps}>
      <Image
        // src={`${suffixPath}/images/avatar.webp`}
        src={AvatarImage}
        alt={dictionary.avatar_alt}
        className='rounded-xl m-1'
        width={120}
        height={120}
      />
    </figure>
  )
}

export default Avatar

