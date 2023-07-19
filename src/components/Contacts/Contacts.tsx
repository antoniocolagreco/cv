import ContactLink from '@/components/ContactLink/ContactLink'
import SimpleBadge from '@/components/SimpleBadge/SimpleBadge'
import Underline from '@/components/Underline/Underline'
import { Dictionary } from '@/dictionaries/dictionaries'
import AltMailIcon from '@/icons/AltMailIcon'
import CallIcon from '@/icons/CallIcon'
import LinkedInIcon from '@/icons/LinkedInIcon'
import LocationIcon from '@/icons/LocationIcon'
import WebIcon from '@/icons/WebIcon'
import { FC, HTMLAttributes } from 'react'

type ContactsProps = HTMLAttributes<HTMLElement> & { dictionary: Dictionary }

const Contacts: FC<ContactsProps> = (props) => {
  const { dictionary, className = '', ...otherProps } = props

  return (
    <section
      className={`text-sky-50 rounded-none rounded-bl-3xl rounded-tr-[4rem] shrink-0 p-4 fill-sky-700 bg-gradient-to-tl from-sky-700 to-sky-600 sm:min-w-[23rem] ${className}`}
      {...otherProps}
    >
      <div className='grid gap-4 grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))]'>
        <ContactLink href={`mailto:${dictionary.mail_1}`}>
          <SimpleBadge className='bg-white min-w-[3rem]'>
            <AltMailIcon width={36} />
          </SimpleBadge>
          <Underline>{dictionary.mail_1}</Underline>
        </ContactLink>
        <ContactLink href={`mailto:${dictionary.mail_2}`}>
          <SimpleBadge className='bg-white min-w-[3rem]'>
            <AltMailIcon width={36} />
          </SimpleBadge>
          <Underline>{dictionary.mail_2}</Underline>
        </ContactLink>
        <ContactLink href={`tel:${dictionary.phone}`}>
          <SimpleBadge className='bg-white min-w-[3rem]'>
            <CallIcon width={36} />
          </SimpleBadge>
          <Underline>{dictionary.phone}</Underline>
        </ContactLink>
        <ContactLink href={dictionary.google_map_url} target='_blank'>
          <SimpleBadge className='bg-white min-w-[3rem]'>
            <LocationIcon width={36} />
          </SimpleBadge>
          <Underline>{dictionary.address}</Underline>
        </ContactLink>
        <ContactLink href={dictionary.linked_in_url} target='_blank'>
          <SimpleBadge className='bg-white min-w-[3rem]'>
            <LinkedInIcon width={36} />
          </SimpleBadge>
          <Underline>{dictionary.linked_in}</Underline>
        </ContactLink>
        <ContactLink href={dictionary.web_site_url} target='_blank'>
          <SimpleBadge className='bg-white min-w-[3rem]'>
            <WebIcon width={36} />
          </SimpleBadge>
          <Underline>{dictionary.web_site_title}</Underline>
        </ContactLink>
      </div>
    </section>
  )
}

export default Contacts

