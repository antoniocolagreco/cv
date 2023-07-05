export type Dictionary = {
  language: string
  language_name: string
  name: string
  job_title: string
  avatar_alt: string
  description: string
  mail_1: string
  mail_2: string
  phone: string
  address: string
  google_map_url: string
  linked_in: string
  linked_in_url: string
  skills: string
  problem_solving: string
  collaboration: string
  creative_thinking: string
  time_management: string
  languages: string
  italian: string
  english: string
  basic: string
  intermediate: string
  advanced: string
  native: string
  education: string
  educations_title: string
  education_istitute: string
  recent_projects: string
  adkaora_image_alt: string
  adkaora_project_description: string
  a2a_image_alt: string
  a2a_project_description: string
  work_experience: string
  jobs: JobExperience[]
}

export type JobExperience = {
  role: string
  company_name: string
  description: string
  date: string
}

export default Dictionary
