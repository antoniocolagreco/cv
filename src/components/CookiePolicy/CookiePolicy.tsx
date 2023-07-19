import { Dictionary } from '@/dictionaries/dictionaries'
import { FC, HTMLAttributes } from 'react'

type CookiePolicyProps = HTMLAttributes<HTMLDivElement> & { dictionary: Dictionary }

const CookiePolicy: FC<CookiePolicyProps> = (props) => {
  const { dictionary, children, className, ...otherProps } = props
  return (
    <div className='p-4 sm:p-8 wysiwyg' {...otherProps}>
      <h1 className='text-3xl text'>{dictionary.cookie_policy.title}</h1>
      <p>{dictionary.cookie_policy.description}</p>
    </div>
  )
}

export default CookiePolicy
