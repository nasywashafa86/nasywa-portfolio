import { defineField, defineType } from 'sanity'

export const publicationSchema = defineType({
  name: 'publication',
  title: 'Publication & IP',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Journal Publication', value: 'journal' },
          { title: 'Intellectual Property (HAKI)', value: 'ip' },
          { title: 'Presentation', value: 'presentation' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Venue / Publisher',
      description: 'e.g. "JSCR (Journal of Scientech Research), Vol 6 No 2" or "Kementerian Hukum dan HAM RI"',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      description: 'e.g. "Desember 2024"',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'url',
      title: 'Link',
      description: 'Optional link to the journal, certificate, or registration',
      type: 'url',
    }),
  ],
})
