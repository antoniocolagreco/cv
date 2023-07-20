import { getDictionary } from '@/dictionaries/dictionaries'
import { getYear } from '@/utilities/dates'
import { FC, HTMLAttributes } from 'react'

type FooterInfoProps = HTMLAttributes<HTMLDivElement> & { lang: string }

const FooterInfo: FC<FooterInfoProps> = (props) => {
  const { lang, children = '', className, ...otherProps } = props
  const dictionary = getDictionary(lang)

  return (
    <div className={`flex flex-col gap-1 ${className}`} {...otherProps}>
      <div suppressHydrationWarning={true}>{`Antonio Colagreco ${getYear(dictionary.language)}`}</div>
      <div>{`P.IVA 02349530689`}</div>
    </div>
  )
}

export default FooterInfo
