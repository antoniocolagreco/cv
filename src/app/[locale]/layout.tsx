import { Fragment } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Dictionary from '../../types/locale'
import { DefaultLayoutParams, Layout } from '../../types/next'

type Props = DefaultLayoutParams & { params: { locale: string } }

const Layout: Layout<Props> = async (props) => {
  const {
    children,
    params: { locale },
  } = props

  const data = await import(`/public/locales/${locale}.json`)
  const dictionary: Dictionary = JSON.parse(JSON.stringify(data))

  return (
    <Fragment>
      <Header dictionary={dictionary} />
      {children}
      <Footer dictionary={dictionary} />
    </Fragment>
  )
}

export default Layout

