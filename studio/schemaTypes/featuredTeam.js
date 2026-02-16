import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'featuredTeam',
  title: 'Featured Team',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Team Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'description'},
  },
})
