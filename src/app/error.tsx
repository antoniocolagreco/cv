'use client'
import { ErrorPage } from '@/types/next'

const Error: ErrorPage = (props) => {
  const { error, reset } = props

  console.log('error page')

  return <div>{error.message}</div>
}

export default Error
