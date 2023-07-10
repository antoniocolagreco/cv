'use client'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { suffixPath } from '../../utilities/suffixPath'
import Switch, { SwitchProps } from '../Switch/Switch'

const LocaleChanger: FC<SwitchProps> = (props) => {
  const router = useRouter()

  const changeRoute = (value: any) => {
    router.push(`${suffixPath}/${value.toString()}`)
  }

  return <Switch {...props} onChange={changeRoute} />
}

export default LocaleChanger
