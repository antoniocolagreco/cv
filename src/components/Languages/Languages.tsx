import { FC, HTMLAttributes, useContext } from 'react'
import { LocaleContext } from '../../context/Locale'

type ContactsProps = HTMLAttributes<HTMLElement> & {}

const Contacts: FC<ContactsProps> = (props) => {
  const { children, className = '', ...otherProps } = props
  const locale = useContext(LocaleContext).locale

  return (
    <section
      className={`text-sky-50 rounded-2xl shrink-0 p-4 fill-sky-700 bg-gradient-to-tl from-sky-700 to-sky-600 ${className}`}
    >
      <div className='grid gap-4  grid-cols-1 sm:grid-cols-2 lg:grid-cols-1'>
        <span>{locale.italian}</span>
        <span>{locale.english}</span>
      </div>
    </section>
  )
}

export default Contacts
