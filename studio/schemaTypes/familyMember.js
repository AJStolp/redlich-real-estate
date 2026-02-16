import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'familyMember',
  title: 'Family Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {title: 'name'},
  },
})
