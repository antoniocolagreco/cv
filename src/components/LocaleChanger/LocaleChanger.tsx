'use client'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import Switch, { SwitchProps } from '../Switch/Switch'

const LocaleChanger: FC<SwitchProps> = (props) => {
  const router = useRouter()

  const changeRoute = (value: any) => {
    router.push(`/${value.toString()}`)
  }

  return <Switch {...props} onChange={changeRoute} />
}

export default LocaleChanger
