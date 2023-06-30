import { FC, HTMLAttributes, useContext } from 'react'
import { LocaleContext } from '../../context/Locale'
import LanguagesIcon from '../../icons/LanguagesIcon'
import SimpleBadge from '../SimpleBadge/SimpleBadge'

type ContactsProps = HTMLAttributes<HTMLElement> & {}

const Contacts: FC<ContactsProps> = (props) => {
  const { children, className = '', ...otherProps } = props
  const locale = useContext(LocaleContext).locale

  return (
    <section
      className={`text-sky-50 rounded-none rounded-bl-3xl rounded-tr-[4rem] shrink-0 p-4 fill-cyan-700 bg-gradient-to-tl from-cyan-800 to-cyan-600 w-auto lg:w-[22rem] cursor-default ${className}`}
    >
      <div className='flex items-center mb-2'>
        <SimpleBadge className='bg-white'>
          <LanguagesIcon width={36} />
        </SimpleBadge>
        <h3 className='text-md sm:text-xl text-white'>{locale.languages}</h3>
      </div>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(8rem,1fr))] gap-4 text-sm sm:text-base'>
        <div className='flex items-start grow'>
          <SimpleBadge className='bg-transparent fill-white'>
            <div className='text-white text-3xl'>it</div>
          </SimpleBadge>
          <div>
            <div className='text-amber-400 text-lg capitalize'>{locale.italian}</div>
            <div className='text-neutral-200 text-sm font-normal capitalize'>{locale.native}</div>
          </div>
        </div>
        <div className='flex items-start grow'>
          <SimpleBadge className='bg-transparent fill-white'>
            <div className='text-white text-3xl'>en</div>
          </SimpleBadge>
          <div>
            <div className='text-amber-400 text-lg capitalize'>{locale.english}</div>
            <div className='text-neutral-200 text-sm font-normal capitalize'>{locale.intermediate}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
