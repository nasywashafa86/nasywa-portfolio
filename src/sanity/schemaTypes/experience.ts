import { defineField, defineType } from 'sanity'

export const experienceSchema = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title / Role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['EDUCATION', 'EXPERIENCE', 'VENTURE'],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year or Duration',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bullets',
      title: 'Description Bullets',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used to sort the timeline (lower number = higher up)',
    }),
  ],
})
