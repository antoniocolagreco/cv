import { FC, HTMLAttributes } from 'react'
import AltMailIcon from '../../icons/AltMailIcon'
import CallIcon from '../../icons/CallIcon'
import HomeIcon from '../../icons/HomeIcon'
import LinkedInIcon from '../../icons/LinkedInIcon'
import Dictionary from '../../types/locale'
import ContactLink from '../ContactLink/ContactLink'
import SimpleBadge from '../SimpleBadge/SimpleBadge'
import Underline from '../Underline/Underline'

type ContactsProps = HTMLAttributes<HTMLElement> & { dictionary: Dictionary }

const Contacts: FC<ContactsProps> = (props) => {
  const { dictionary, className = '', ...otherProps } = props

  return (
    <section
      className={`text-sky-50 rounded-none rounded-bl-3xl rounded-tr-[4rem] shrink-0 p-4 fill-sky-700 bg-gradient-to-tl from-sky-700 to-sky-600 sm:min-w-[22rem] ${className}`}
      {...otherProps}
    >
      <div className='grid gap-4 grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))]'>
        <ContactLink href={`mailto:${dictionary.mail_1}`}>
          <SimpleBadge className='bg-white'>
            <AltMailIcon width={36} />
          </SimpleBadge>
          <Underline>{dictionary.mail_1}</Underline>
        </ContactLink>
        <ContactLink href={`mailto:${dictionary.mail_2}`}>
          <SimpleBadge className='bg-white'>
            <AltMailIcon width={36} />
          </SimpleBadge>
          <Underline>{dictionary.mail_2}</Underline>
        </ContactLink>
        <ContactLink href={`tel:${dictionary.phone}`}>
          <SimpleBadge className='bg-white'>
            <CallIcon width={36} />
          </SimpleBadge>
          <Underline>{dictionary.phone}</Underline>
        </ContactLink>
        <ContactLink href={dictionary.google_map_url} target='_blank'>
          <SimpleBadge className='bg-white'>
            <HomeIcon width={36} />
          </SimpleBadge>
          <Underline>{dictionary.address}</Underline>
        </ContactLink>
        <ContactLink href={dictionary.linked_in_url} target='_blank'>
          <SimpleBadge className='bg-white'>
            <LinkedInIcon width={36} />
          </SimpleBadge>
          <Underline>{dictionary.linked_in}</Underline>
        </ContactLink>
      </div>
    </section>
  )
}

export default Contacts

