import { defineField, defineType } from 'sanity'

export const skillSchema = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      description: 'e.g. Python, Tableau, Machine Learning',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used to sort the skill list (lower number = shown first)',
    }),
  ],
})
