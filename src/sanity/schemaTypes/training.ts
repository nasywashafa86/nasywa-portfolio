import { defineField, defineType } from 'sanity'

export const trainingSchema = defineType({
  name: 'training',
  title: 'Training / Certification',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Name of the course, training program, or certification',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'provider',
      title: 'Provider / Institution',
      description: 'e.g. Hugging Face, AWS Training and Certification, DQLab',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Field',
      description: 'e.g. Teknologi Informasi dan Komunikasi, Bisnis dan Manajemen',
      type: 'string',
    }),
    defineField({
      name: 'period',
      title: 'Period',
      description: 'e.g. "September 2026" or "Februari 2025 - Juni 2025"',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used to sort the grid (lower number = shown first)',
    }),
  ],
})
