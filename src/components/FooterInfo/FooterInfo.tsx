import { getDictionary } from '@/dictionaries/dictionaries'
import { getYear } from '@/utilities/dates'
import { FC, HTMLAttributes } from 'react'

type FooterInfoProps = HTMLAttributes<HTMLDivElement> & { locale: string }

const FooterInfo: FC<FooterInfoProps> = (props) => {
  const { locale, children = '', className, ...otherProps } = props
  const dictionary = getDictionary(locale)

  return (
    <div className={`flex flex-col gap-1 ${className}`} {...otherProps}>
      <div>{`Antonio Colagreco ${getYear(dictionary.language)}`}</div>
      <div>{`P.IVA 02349530689`}</div>
    </div>
  )
}

export default FooterInfo
