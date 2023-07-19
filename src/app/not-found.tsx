import { DefaultPageProps, NextPage } from '@/types/next'
import Underline from '../components/Underline/Underline'

type NotFoundProps = DefaultPageProps & {}

const NotFound: NextPage<NotFoundProps> = (props) => {
  const { params, searchParams } = props
  return (
    <>
      <head>
        <title>Antonio Colagreco - 404</title>
      </head>
      <div className='min-h-screen flex flex-col justify-center items-center text-neutral-800 gap-4'>
        <h1>
          <span className='text-xl font-medium'>404</span>
          <span className='text-xl'> | </span>
          <span className='text-xl'>No page here</span>
        </h1>
        <a className='cursor-pointer' href={`/`}>
          <Underline className='text-xl text-sky-700'>Home</Underline>
        </a>
      </div>
    </>
  )
}

export default NotFound
