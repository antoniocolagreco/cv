import { notFound } from 'next/navigation'
import en from './en.json'
import it from './it.json'

export type Dictionary = typeof en

export type JobExperience = {
  role: string
  company_name: string
  description: string
  date: string
}

export const DEFAULT_LANGUAGE = 'en'
export const DEFAULT_DICTIONARY = en
export const SUPPORTED_LANGUAGES = ['en', 'it']

const dictionaries: Record<string, typeof en> = { en, it }

export const getDictionary = (locale: string): Dictionary => {
  if (!dictionaries[locale]) notFound()
  return dictionaries[locale]
}
