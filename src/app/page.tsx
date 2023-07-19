import { DefaultPageProps, NextPage } from '@/types/next'
import HomePage from './[locale]/page'

type AppPageProps = DefaultPageProps & {}

const AppPage: NextPage<AppPageProps> = (props) => {
  const { params, searchParams } = props

  return <HomePage />
}

export default AppPage
