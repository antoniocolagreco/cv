import { FC, HTMLAttributes, useContext } from 'react'
import { LocaleContext } from '../../context/Locale'
import AltMailIcon from '../../icons/AltMailIcon'
import CallIcon from '../../icons/CallIcon'
import HomeIcon from '../../icons/HomeIcon'
import LinkedInIcon from '../../icons/LinkedInIcon'
import Badge from '../Badge/Badge'
import ContactLink from '../ContactLink/ContactLink'

type ContactsProps = HTMLAttributes<HTMLDivElement> & {}

const Contacts: FC<ContactsProps> = (props) => {
  const { children, className = '', ...otherProps } = props
  const locale = useContext(LocaleContext).locale

  return (
    <div className='bg-sky-900 text-sky-50 rounded-2xl shrink-0 p-4 fill-sky-900'>
      <div className='flex flex-col gap-4'>
        <ContactLink href={`mailto:${locale.mail_1}`}>
          <Badge>
            <AltMailIcon width={36} />
          </Badge>
          {locale.mail_1}
        </ContactLink>
        <ContactLink href={`mailto:${locale.mail_2}`}>
          <Badge>
            <AltMailIcon width={36} />
          </Badge>
          {locale.mail_2}
        </ContactLink>
        <ContactLink href={`tel:${locale.phone}`}>
          <Badge>
            <CallIcon width={36} />
          </Badge>
          {locale.phone}
        </ContactLink>
        <ContactLink href={locale.google_map_url} target='_blank'>
          <Badge>
            <HomeIcon width={36} />
          </Badge>
          {locale.address}
        </ContactLink>
        <ContactLink href={locale.linked_in_url} target='_blank'>
          <Badge>
            <LinkedInIcon width={36} />
          </Badge>
          {locale.linked_in}
        </ContactLink>
      </div>
    </div>
  )
}

export default Contacts
