import { FC, HTMLAttributes, useContext } from 'react'
import { LocaleContext } from '../../context/Locale'
import AltMailIcon from '../../icons/AltMailIcon'
import CallIcon from '../../icons/CallIcon'
import HomeIcon from '../../icons/HomeIcon'
import LinkedInIcon from '../../icons/LinkedInIcon'
import Badge from '../Badge/Badge'
import ContactLink from '../ContactLink/ContactLink'
import Underline from '../Underline/Underline'

type ContactsProps = HTMLAttributes<HTMLElement> & {}

const Contacts: FC<ContactsProps> = (props) => {
  const { children, className = '', ...otherProps } = props
  const locale = useContext(LocaleContext).locale

  return (
    <section className='text-sky-50 rounded-2xl shrink-0 p-4 fill-sky-700 bg-gradient-to-tl from-sky-700 to-sky-600 '>
      <div className='flex flex-col gap-4'>
        <ContactLink href={`mailto:${locale.mail_1}`}>
          <Badge className='bg-white'>
            <AltMailIcon width={36} />
          </Badge>
          <Underline>{locale.mail_1}</Underline>
        </ContactLink>
        <ContactLink href={`mailto:${locale.mail_2}`}>
          <Badge className='bg-white'>
            <AltMailIcon width={36} />
          </Badge>
          <Underline>{locale.mail_2}</Underline>
        </ContactLink>
        <ContactLink href={`tel:${locale.phone}`}>
          <Badge className='bg-white'>
            <CallIcon width={36} />
          </Badge>
          <Underline>{locale.phone}</Underline>
        </ContactLink>
        <ContactLink href={locale.google_map_url} target='_blank'>
          <Badge className='bg-white'>
            <HomeIcon width={36} />
          </Badge>
          <Underline>{locale.address}</Underline>
        </ContactLink>
        <ContactLink href={locale.linked_in_url} target='_blank'>
          <Badge className='bg-white'>
            <LinkedInIcon width={36} />
          </Badge>
          <Underline>{locale.linked_in}</Underline>
        </ContactLink>
      </div>
    </section>
  )
}

export default Contacts
