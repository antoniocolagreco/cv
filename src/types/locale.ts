import * as localeType from './../../public/locales/en.json'

export type Dictionary = typeof localeType

export type JobExperience = {
  role: string
  company_name: string
  description: string
  date: string
}

export default Dictionary
