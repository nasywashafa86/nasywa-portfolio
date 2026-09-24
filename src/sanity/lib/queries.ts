export const projectsQuery = `*[_type == "project"] | order(year desc, _createdAt desc){
  _id,
  title,
  "slug": slug.current,
  description,
  category,
  year,
  image,
  technologies,
  githubUrl,
  liveUrl
}`

export const experiencesQuery = `*[_type == "experience"] | order(order asc){
  _id,
  title,
  subtitle,
  category,
  year,
  bullets,
  order
}`

export const trophyCountQuery = `count(*[_type == "trophy"])`

export const trophiesQuery = `*[_type == "trophy"] | order(year desc, _createdAt desc){
  _id,
  title,
  category,
  year,
  description,
  badge,
  badgeType
}`

export const trainingsQuery = `*[_type == "training"] | order(order asc, _createdAt desc){
  _id,
  title,
  provider,
  category,
  period,
  description,
  order
}`

export const publicationsQuery = `*[_type == "publication"] | order(date desc, _createdAt desc){
  _id,
  title,
  type,
  venue,
  date,
  description,
  url
}`

export const skillsQuery = `*[_type == "skill"] | order(order asc, name asc){
  _id,
  name,
  order
}`

export const languagesQuery = `*[_type == "language"] | order(order asc){
  _id,
  name,
  level,
  order
}`

import type { SanityImageSource } from '@sanity/image-url'

export type SanityProject = {
  _id: string
  title: string
  slug: string
  description: string
  category: string
  year: string
  image: SanityImageSource
  technologies?: string[]
  githubUrl?: string
  liveUrl?: string
}

export type SanityExperience = {
  _id: string
  title: string
  subtitle: string
  category: string
  year: string
  bullets?: string[]
  order?: number
}

export type SanityTrophy = {
  _id: string
  title: string
  category: string
  year: string
  description: string
  badge: string
  badgeType: 'national' | 'international' | 'regional' | 'community' | 'university'
}

export type SanityTraining = {
  _id: string
  title: string
  provider: string
  category?: string
  period: string
  description?: string
  order?: number
}

export type SanityPublication = {
  _id: string
  title: string
  type: 'journal' | 'ip' | 'presentation'
  venue: string
  date: string
  description?: string
  url?: string
}

export type SanitySkill = {
  _id: string
  name: string
  order?: number
}

export type SanityLanguage = {
  _id: string
  name: string
  level: string
  order?: number
}
