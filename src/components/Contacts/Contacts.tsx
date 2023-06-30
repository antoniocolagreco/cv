import { FC, HTMLAttributes, useContext } from 'react'
import { LocaleContext } from '../../context/Locale'
import AltMailIcon from '../../icons/AltMailIcon'
import CallIcon from '../../icons/CallIcon'
import HomeIcon from '../../icons/HomeIcon'
import LinkedInIcon from '../../icons/LinkedInIcon'
import ContactLink from '../ContactLink/ContactLink'
import SimpleBadge from '../SimpleBadge/SimpleBadge'
import Underline from '../Underline/Underline'

type ContactsProps = HTMLAttributes<HTMLElement> & {}

const Contacts: FC<ContactsProps> = (props) => {
  const { children, className = '', ...otherProps } = props
  const locale = useContext(LocaleContext).locale

  return (
    <section
      className={`text-sky-50 rounded-none rounded-bl-3xl rounded-tr-[4rem] shrink-0 p-4 fill-sky-700 bg-gradient-to-tl from-sky-700 to-sky-600 sm:min-w-[22rem] ${className}`}
    >
      <div className='grid gap-4 grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))]'>
        <ContactLink href={`mailto:${locale.mail_1}`}>
          <SimpleBadge className='bg-white'>
            <AltMailIcon width={36} />
          </SimpleBadge>
          <Underline>{locale.mail_1}</Underline>
        </ContactLink>
        <ContactLink href={`mailto:${locale.mail_2}`}>
          <SimpleBadge className='bg-white'>
            <AltMailIcon width={36} />
          </SimpleBadge>
          <Underline>{locale.mail_2}</Underline>
        </ContactLink>
        <ContactLink href={`tel:${locale.phone}`}>
          <SimpleBadge className='bg-white'>
            <CallIcon width={36} />
          </SimpleBadge>
          <Underline>{locale.phone}</Underline>
        </ContactLink>
        <ContactLink href={locale.google_map_url} target='_blank'>
          <SimpleBadge className='bg-white'>
            <HomeIcon width={36} />
          </SimpleBadge>
          <Underline>{locale.address}</Underline>
        </ContactLink>
        <ContactLink href={locale.linked_in_url} target='_blank'>
          <SimpleBadge className='bg-white'>
            <LinkedInIcon width={36} />
          </SimpleBadge>
          <Underline>{locale.linked_in}</Underline>
        </ContactLink>
      </div>
    </section>
  )
}

export default Contacts
