import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'copyrightName',
      title: 'Copyright Name',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'copyrightName'},
  },
})
