import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Section',
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
      rows: 2,
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'string',
    }),
    defineField({
      name: 'errorMessage',
      title: 'Error Message',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'heading'},
  },
})
