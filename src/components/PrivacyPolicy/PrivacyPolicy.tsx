import { Dictionary } from '@/dictionaries/dictionaries'
import { FC, HTMLAttributes } from 'react'

type PrivacyPolicyProps = HTMLAttributes<HTMLDivElement> & { dictionary: Dictionary }

const PrivacyPolicy: FC<PrivacyPolicyProps> = (props) => {
  const { dictionary, children, className, ...otherProps } = props
  return (
    <div className='p-4 sm:p-8 wysiwyg' {...otherProps}>
      <h1 className='text-3xl text'>{dictionary.privacy.title}</h1>
      <p>{dictionary.privacy.description}</p>
      <h2 className='text-xl'>{dictionary.privacy.collection_of_personal_data.title}</h2>
      <p>{dictionary.privacy.collection_of_personal_data.description}</p>
      <h2 className='text-xl'>{dictionary.privacy.use_of_cookies.title}</h2>
      <p>{dictionary.privacy.use_of_cookies.description}</p>
      <h2 className='text-xl'>{dictionary.privacy.local_browsers_storage.title}</h2>
      <p>{dictionary.privacy.local_browsers_storage.description}</p>
      <h2 className='text-xl'>{dictionary.privacy.sharing_of_personal_data.title}</h2>
      <p>{dictionary.privacy.sharing_of_personal_data.description}</p>
      <h2 className='text-xl'>{dictionary.privacy.data_security.title}</h2>
      <p>{dictionary.privacy.data_security.description}</p>
      <h2 className='text-xl'>{dictionary.privacy.changes_to_the_policy.title}</h2>
      <p>{dictionary.privacy.changes_to_the_policy.description}</p>
    </div>
  )
}

export default PrivacyPolicy
