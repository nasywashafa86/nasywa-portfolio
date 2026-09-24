import { type SchemaTypeDefinition } from 'sanity'
import { projectSchema } from './project'
import { experienceSchema } from './experience'
import { trophySchema } from './trophy'
import { trainingSchema } from './training'
import { publicationSchema } from './publication'
import { skillSchema } from './skill'
import { languageSchema } from './language'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectSchema,
    experienceSchema,
    trophySchema,
    trainingSchema,
    publicationSchema,
    skillSchema,
    languageSchema,
  ],
}
