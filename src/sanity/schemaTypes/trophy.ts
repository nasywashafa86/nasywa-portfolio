import { defineField, defineType } from 'sanity'

export const trophySchema = defineType({
  name: 'trophy',
  title: 'Trophy / Award',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Award Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'e.g. NATIONAL, INTERNATIONAL, UNIVERSITY',
    }),
    defineField({
      name: 'badgeType',
      title: 'Badge Style Color',
      type: 'string',
      options: {
        list: [
          { title: 'National (Pink)', value: 'national' },
          { title: 'International (Blue)', value: 'international' },
          { title: 'University (Gray)', value: 'university' },
          { title: 'Regional (Orange)', value: 'regional' },
          { title: 'Community (Green)', value: 'community' },
        ],
      },
    }),
  ],
})
