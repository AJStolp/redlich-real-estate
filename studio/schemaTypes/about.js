import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'bioParagraph1',
      title: 'Bio Paragraph 1',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'bioParagraph2',
      title: 'Bio Paragraph 2',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'bioHighlight',
      title: 'Bio Highlight (colored text)',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'heading'},
  },
})
