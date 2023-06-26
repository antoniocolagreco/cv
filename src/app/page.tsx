import { Page, PageProps } from '@/types/next'

type AppPageProps = PageProps & {}

const AppPage: Page<AppPageProps> = (props) => {
  const { params, searchParams } = props
  return <div>AppPage</div>
}

export default AppPage

