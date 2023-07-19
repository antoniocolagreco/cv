import SimpleBadge from '@/components/SimpleBadge/SimpleBadge'
import { Dictionary } from '@/dictionaries/dictionaries'
import LanguagesIcon from '@/icons/LanguagesIcon'
import { FC, HTMLAttributes } from 'react'

type ContactsProps = HTMLAttributes<HTMLElement> & { dictionary: Dictionary }

const Contacts: FC<ContactsProps> = (props) => {
  const { dictionary, className = '', ...otherProps } = props

  return (
    <section
      className={`text-sky-50 rounded-none rounded-bl-3xl rounded-tr-[4rem] shrink-0 p-4 fill-cyan-700 bg-gradient-to-tl from-cyan-800 to-cyan-600 w-auto lg:w-[23rem] cursor-default ${className}`}
      {...otherProps}
    >
      <div className='flex items-center mb-2'>
        <SimpleBadge className='bg-white'>
          <LanguagesIcon width={36} />
        </SimpleBadge>
        <h3 className='text-md sm:text-xl text-white'>{dictionary.languages}</h3>
      </div>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(8rem,1fr))] gap-4 text-sm sm:text-base'>
        <div className='flex items-start grow'>
          <SimpleBadge className='bg-transparent fill-white'>
            <div className='text-white text-3xl'>it</div>
          </SimpleBadge>
          <div>
            <div className='text-amber-400 text-lg capitalize'>{dictionary.italian}</div>
            <div className='text-neutral-200 text-sm font-normal capitalize'>{dictionary.native}</div>
          </div>
        </div>
        <div className='flex items-start grow'>
          <SimpleBadge className='bg-transparent fill-white'>
            <div className='text-white text-3xl'>en</div>
          </SimpleBadge>
          <div>
            <div className='text-amber-400 text-lg capitalize'>{dictionary.english}</div>
            <div className='text-neutral-200 text-sm font-normal capitalize'>{dictionary.intermediate}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts

