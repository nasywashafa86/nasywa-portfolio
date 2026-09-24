import { defineField, defineType } from 'sanity'

export const languageSchema = defineType({
  name: 'language',
  title: 'Language',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Language',
      description: 'e.g. English, Bahasa Indonesia',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'level',
      title: 'Proficiency Level',
      description: 'e.g. Intermediate, Fluent',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
})
